<?php

namespace App\Controller;

use App\Entity\Comment;

use App\Entity\Post;
use App\Entity\User;
use App\Helper\EmailHelper;
use App\Helper\NotificationHelper;
use App\Helper\CommentHelper;
use App\Helper\RequestHelper;
use App\Helper\TokenHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\RouterHelper;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Cache\Adapter\AdapterInterface;

use App\Helper\UserHelper;
use App\Helper\RouteHelper;
use App\Helper\DateHelper;

use App\Entity\Report;

class ApiController extends BaseSiteController
{

    /**
     * @Route("/api-fetch-more-post", name="api-more-post")
     */
    public function morePosts(Request $request, RouteHelper $routeHelper, UserHelper $userHelper, DateHelper $dateHelper, AdapterInterface $cache)
    {
        $limit = $request->request->get('limit');
        $currentPostID = $request->request->get('currentPostID');


        $postsCache = $cache->getItem('more-post_' . strval($currentPostID).'-'.strval($limit));

        if (!$postsCache->isHit()) {
            $preparedPosts = [];
            $posts = $this->em->getRepository(Post::class)->fetchMorePost($limit, $currentPostID);
            foreach ($posts as $p) {
                $post = [];
                $post['id'] = $p->getId();
                $post['title'] = $p->getTitle();
                $post['description'] = $p->getDescription();
                $post['isPost'] = $p->getIsPost();
                $post['isYoutubeLink'] = $p->getIsYoutubeLink();
                $post['isImageFromLink'] = $p->getIsImageFromLink();
                $post['isImageFromDisc'] = $p->getIsImageFromDisc();
                $post['isGraphic'] = $p->getIsGraphic();
                $post['imageUrl'] = $p->getImageUrl();
                $post['temponaryImageWidth'] = $p->getTemponaryImageWidth();
                $post['temponaryImageHeight'] = $p->getTemponaryImageHeight();
                $post['youtubeID'] = $p->getYoutubeID();
                $post['source'] = $p->getSource();
                $post['absoluteUrl'] = $routeHelper->prepareAbsoluteUrlForPost($p->getId());
                $post['commentNumber'] = count($p->getComments());
                $post['voteScore'] = $p->getVoteValue();
                $post['categories'] = [];
                foreach ($p->getCategories() as $c) {
                    $post['categories'][$c->getName()] = $this->generateUrl('sort_category', ['category' => $c->getId(), 'name' => $c->getName()]);
                }
                $post['isLogged'] = $userHelper->isLogged();
                $post['date'] = $dateHelper->prepareLongDate($p->getCreatedAt());

                array_push($preparedPosts, $post);
            }

            $postsCache->set(new JsonResponse(['status' => true, 'posts' => $preparedPosts]));
            $cache->save($postsCache);

        } 

        return $postsCache->get();
    }


    /**
     * @Route("/api-change-username", name="api-change-username")
     */
    public function changeUsername(Request $request, UserHelper $userHelper, TokenHelper $tokenHelper, EmailHelper $emailHelper)
    {

        $username = $request->request->get('username');
        $user = $userHelper->getUser();
        $userChecked = $this->em->getRepository(User::class)->findOneBy(['username' => $username]);
        $status = false;
        $error = '';
        if ($user) {
            if (!$userChecked) {
                $status = true;
                $user->setUsername($username);
                $user->setIsFacebookConfirmUsername(true);
                $this->em->persist($user);
                $this->em->flush();
            } elseif ($user == $userChecked) {
                $status = true;
                $user->setUsername($username);
                $user->setIsFacebookConfirmUsername(true);
                $this->em->persist($user);
                $this->em->flush();
            } else {
                $error = 'Wybrana nazwa użytkownika jest zajęta!';
            }
        } else {
            $error = 'Musisz się zalogować!';
        }
        return new JsonResponse(['status' => $status, 'error' => $error, 'username' => $username]);
    }

    /**
     * @Route("/api-forgot-password", name="api-forgot-password")
     */
    public function forgotPassword(Request $request, UserHelper $userHelper, TokenHelper $tokenHelper, EmailHelper $emailHelper)
    {

        $email = $request->request->get('email');
        $user = $this->em->getRepository(User::class)->findOneBy(['email' => $email]);
        $status = false;

        if ($user) {
            $user->setTokenChangePassword($tokenHelper->generateTokenForForgotPassword());
            $date = new \DateTime('+7 day');
            $user->setTokenChangePasswordExpired($date);
            $status = true;
            $this->em->persist($user);
            $this->em->flush();

            $emailHelper->sendForgotPassword($user);
        }

        return new JsonResponse(['status' => $status]);
    }

    /**
     * @Route("/api-report", name="api-report")
     */
    public function report(Request $request, UserHelper $userHelper, RequestHelper $requestHelper)
    {
        $id = $request->request->get('id');
        $type = $request->request->get('type');
        $isStatuteBreak = $request->request->get('isStatuteBreak');
        $isSpam = $request->request->get('isSpam');
        $isDrasticOrPorn = $request->request->get('isDrasticOrPorn');
        $isInsult = $request->request->get('isInsult');
        $other = $request->request->get('other');

        $user = $userHelper->getUser();

        $report = new Report();
        $report->setUser($user);

        if ($type == 'comment') {
            $comment = $this->em->getRepository(Comment::class)->findOneBy(['id' => $id]);
            if ($comment) {
                $report->setComment($comment);
            }
        } elseif ($type == 'post') {
            $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $id]);
            if ($post) {
                $report->setPost($post);
            }
        }
        $report->setIsStatuteBreak($isStatuteBreak);
        $report->setIsSpam($isSpam);
        $report->setIsDrasticOrPorn($isDrasticOrPorn);
        $report->setIsInsult($isInsult);
        $report->setOther($other);

        $this->em->persist($report);
        $this->em->flush();


        return new JsonResponse([$report, $type, $user, $isStatuteBreak, $isSpam, $isDrasticOrPorn, $isInsult]);
    }

  
}
