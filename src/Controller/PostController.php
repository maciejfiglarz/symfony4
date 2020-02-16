<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Comment;
use App\Entity\Notification;
use App\Helper\MetaTagsHelper;
use App\Helper\NotificationHelper;
use App\Helper\PostHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Helper\FileHelper;
use App\Helper\PostMenagerHelper;
use App\Entity\TemponaryImage;
use App\Entity\Post;
use App\Entity\Ranking;

use App\Form\CreatePostFormType;
use App\Helper\CaptchaHelper;

class PostController extends BaseSiteController
{




    /**
     * @Route("/post-{id}/{slug}/{notification}", name="post_single", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function single(Post $post, $slug, $notification = 0, NotificationHelper $notificationHelper, PostHelper $postHelper)
    {

        $notification = $notificationHelper->fetchNotificationForSinglePost($notification);

        if ($post->getIsAccepted() == false and $post->getIsWaitingRoom() == false) {
            return $this->redirect($this->generateUrl('page_404'));
        }


        $postHelper->setStatistic($post);
        $rankings = $this->getRepository(Ranking::class)->prepareForPost($post);
       // dd($postHelper->insertAdsIntoDescription($post->getDescription()));
       // dd($rankings);
        return $this->render('post/single.html.twig', [
            'post' => $post,
            'postPrevious' => $this->getRepository(Post::class)->getPreviousPost($post->getId()),
            'postNext' => $this->getRepository(Post::class)->getNextPost($post->getId()),
            'notification' => $notification,
            'comments' => $this->em->getRepository(Comment::class)->findBy(['post' => $post->getId(), 'isHide' => false, 'isReply' => false], ['id' => 'DESC']),
            'repliedComments' => $this->em->getRepository(Comment::class)->prepareRepliedComments($post),
            'rankings' =>  $rankings
        ]);
    }

    /**
     * @Route("/dodaj-post", name="post_new")
     */

    public function createPost(Request $request, FileHelper $fileHelper, PostMenagerHelper $postMenagerHelper, CaptchaHelper $captchaHelper, NotificationHelper $notificationHelper)
    {

        $postEntity = new Post();
        $this->session->set('captcha', rand(1, 99));

        if ($request->isMethod('POST')) {
            $postEntity = $postMenagerHelper->fillAndSavePostEntity($request, $postEntity);
            $notificationHelper->initFirstPostInfo();
            return $this->redirect($this->generateUrl('post_single', ['id' => $postEntity->getId(), 'slug' => $postEntity->getSlug()]));
        }

        $viewParameters = [
            'categories' => $this->getRepository(Category::class)->fetchActive()
        ];


        return $this->render('post/new.html.twig', $viewParameters);
    }


    /**
     * @Route("/api-fetch-current-captcha", name="post_captcha")
     */

    public function captcha()
    {

        return new JsonResponse(['captcha' => $this->session->get('captcha')]);

    }


    /**
     * @Route("/test-gd", name="captcha_image")
     */

    public function testGd(Request $request, FileHelper $fileHelper, CaptchaHelper $captchaHelper)
    {

        $viewParameters = [
            'categories' => $this->getRepository(Category::class)->fetchActive()
        ];
        $file = $captchaHelper->createCaptchaImage(95);
        return $this->render('post/new.html.twig', $viewParameters);

    }
}
