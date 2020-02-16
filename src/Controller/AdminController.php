<?php

namespace App\Controller;

use App\Entity\Advertisement;
use App\Entity\Comment;
use App\Entity\Category;
use App\Entity\Setting;
use App\Entity\Post;
use App\Entity\Statistic;
use App\Entity\StatisticWeek;
use App\Entity\User;
use App\Helper\AdvertisementHelper;
use App\Helper\PaginatorHelper;
use App\Helper\SettingHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Psr\Log\LoggerInterface;

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;

class AdminController extends BaseAdminController
{


     /**
     * @Route("/admin-post-{id}/{slug}/", name="admin_single", methods={"GET","POST"}, requirements={"id"="\d+"})
     */
    public function singleAdmin(Post $post, $slug,Request $request)
    {

        if ($request->isMethod('POST')) {
            $title = $request->request->get('title');
            $slug = $request->request->get('slug');
            $description = $request->request->get('description');

            $post->setTitle($title);
            $post->setSlug($slug);
            $post->setDescription($description);

            $this->em->persist($post);
            $this->em->flush();
        }


       
        return $this->render('admin/single.html.twig', [
            'post' => $post,
            'postPrevious' => $this->em->getRepository(Post::class)->getPreviousPost($post->getId()),
            'postNext' => $this->em->getRepository(Post::class)->getNextPost($post->getId()),

        ]);
    }


    /**
     * @Route("/admin", methods={"GET","POST"}, name="admin")
     */
    public function index(Request $request, Filesystem $filesystem)
    {

        return $this->render('admin/index.html.twig', [
            'title' => 'Index'
        ]);
    }

    /**
     * @Route("/admin/statistic/{page}", methods={"GET","POST"}, name="admin_statistic",requirements={"page"="\d+"})
     */
    public function statistic($page = 1, Request $request, Filesystem $filesystem, PaginatorHelper $paginator)
    {

        $query = $this->em->getRepository(Statistic::class)->queryFindAllFullOrdered();
        $paginate = $paginator->paginate($query, $page, 20);
        return $this->render('admin/statistic.html.twig', [
            'paginate' => $paginate
        ]);
    }


    /**
     * @Route("/admin/editor", methods={"GET","POST"}, name="admin_editor",requirements={"page"="\d+"})
     */
    public function editor(Request $request, SettingHelper $settingHelper, UserPasswordEncoderInterface $passwordEncoder)
    {

        $userRepo = $this->em->getRepository(User::class);

        if ($request->isMethod('POST')) {

            $email = $request->request->get('email');
            $password = $request->request->get('password');
            $username = $request->request->get('username');

            $user = new User();
            $user->setEmail($email);
            $user->setUsername($username);
            $user->setRoles(['ROLE_EDITOR']);
            $encoded = $passwordEncoder->encodePassword($user, $password);
            $user->setPassword($encoded);

            $this->em->persist($user);
            $this->em->flush();
        }

//        dd($this->userRepo->fetchByRole('ROLE_EDITOR'));
        return $this->render('admin/editor.html.twig', [
            'editors' => $userRepo->fetchByRole('ROLE_EDITOR')
        ]);

    }

    /**
     * @Route("/admin/setting", methods={"GET","POST"}, name="admin_setting",requirements={"page"="\d+"})
     */
    public function setting(Request $request, $page = 1, SettingHelper $settingHelper)
    {

        $settingRepo = $this->em->getRepository(Setting::class);

        $filesystem = new Filesystem();
        if (!$filesystem->exists('custom.css')) {
            $filesystem->dumpFile('custom.css', 'Test');
        }


        $settingHelper->prepareDefaultSetting();

        if ($request->isMethod('POST')) {
            $name = $request->request->get('name');
            $value = $request->request->get('value');
            $setting = $settingRepo->findOneBy(['name' => $name]);

            if ($setting) {
                $setting->setValue($value);
                $this->em->persist($setting);
                $this->em->flush();
            }

            if ($name == 'custom-css') {
                $filesystem->dumpFile('custom.css', $value);
            }

        }

        $settings = $settingRepo->findAll();

        $preparedSettings = [];

        foreach ($settings as $s) {
            $preparedSettings[$s->getName()] = $s;
        }

        return $this->render('admin/setting.html.twig', [
            'settings' => $preparedSettings
        ]);
    }


    /**
     * @Route("/admin/advertisement", methods={"GET","POST"}, name="admin_advertisement",requirements={"page"="\d+"})
     */
    public function advertisement(Request $request, $page = 1, PaginatorHelper $paginator, AdvertisementHelper $advertisementHelper)
    {


        $advertisementHelper->prepareDefaultAds();

        if ($request->isMethod('POST')) {
            $name = $request->request->get('name');
            $sataku = $request->request->get('sataku');
            $adsense = $request->request->get('adsense');
            $isSataku = $request->request->get('isSataku');
            $isAdsense = $request->request->get('isAdsense');
            $isActive = $request->request->get('isActive');
            $position = $request->request->get('position');


            $ads = $this->em->getRepository(Advertisement::class)->findOneBy(['name' => $name]);
            if ($ads) {
              
                $ads->setAdsense($adsense);
                $ads->setSataku($sataku);
                $ads->setIsAdsense($isAdsense =='1'  ? true : false);
                $ads->setIsSataku($isSataku =='1'  ? true : false);
                $ads->setIsActive($isActive =='1'  ? true : false);
                $ads->setPosition($position);
                $this->em->persist($ads);
                $this->em->flush();
            }

        }


        $allAds = $this->em->getRepository(Advertisement::class)->findAll();

        $preparedAds = [];
        foreach ($allAds as $a) {
            $preparedAds[$a->getName()] = $a;
        }

        return $this->render('admin/advertisement.html.twig', [
            'ads' => $preparedAds
        ]);
    }

    /**
     * @Route("/admin/category/{page}", methods={"GET","POST"}, name="admin_category",requirements={"page"="\d+"})
     */
    public function category(Request $request, $page = 1, PaginatorHelper $paginator)
    {

        if ($request->isMethod('POST')) {
            if ($request->request->get('id')) {
                $id = $request->request->get('id');
                $name = $request->request->get('name');
                $category = $this->em->getRepository(Category::class)->findOneBy(['id' => $id]);
                if ($category) {
                    $category->setName($name);
                    $this->saveEntityInDB($category);
                }
            } else {
                $name = $request->request->get('name');
                $category = $this->em->getRepository(Category::class)->findOneBy(['name' => $name]);
                if (!$category) {
                    $category = new Category();
                    $category->setName($name);
                    $this->saveEntityInDB($category);
                }

            }

        }


        $query = $this->em->getRepository(Category::class)->queryFindAllFull();
        $paginate = $paginator->paginate($query, $page, 20);

        return $this->render('admin/category.html.twig', [
            'paginate' => $paginate
        ]);
    }

    /**
     * @Route("/admin/category/action/{category}/{action}", methods={"GET"}, name="admin_category-action")
     */
    public function actionCategory(Category $category, $action, Request $request, EntityManagerInterface $em)
    {

        $fieldsArray = ['isDeleted'];

        if (in_array($action, $fieldsArray)) {

            $this->toggle($category, $action, $em);
        }

        return $this->redirect($request->get('redirect'));
    }


    /**
     * @Route("/admin/post/{page}", methods={"GET","POST"}, name="admin_post",requirements={"page"="\d+"})
     */
    public function post(Request $request, $page = 1, PaginatorHelper $paginator)
    {

        if ($request->isMethod('POST')) {

            $postID = $request->request->get('postID');
            $type = $request->request->get('type');
            $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $postID]);

            if ($post) {

                if ($type=='meta-tags') {
                    $metaTitle = $request->request->get('metaTitle');
                    $metaDescription = $request->request->get('metaDescription');
                    $post->setMetaTitle($metaTitle);
                    $post->setMetaDescription($metaDescription);
                }
                if ($type=='meta-tags-facebook') {
                    $metaTitleFacebook = $request->request->get('metaTitleFacebook');
                    $metaDescriptionFacebook = $request->request->get('metaDescriptionFacebook');
                    $post->setMetaTitleFacebook($metaTitleFacebook);
                    $post->setMetaDescriptionFacebook($metaDescriptionFacebook);
                }

            }

            $this->saveEntityInDB($post);
        }

        $query = $this->em->getRepository(Post::class)->queryFindAllFull();

        $paginate = $paginator->paginate($query, $page, 20);

        return $this->render('admin/post.html.twig', [
            'paginate' => $paginate
        ]);
    }

    /**
     * @Route("/admin/post/action/{post}/{action}", methods={"GET"}, name="admin_post-action")
     */
    public function actionPost(Post $post, $action, Request $request, EntityManagerInterface $em)
    {

        $fieldsArray = ['isDeleted', 'isWaitingRoom', 'isAccepted'];

        if (in_array($action, $fieldsArray)) {

            $this->toggle($post, $action, $em);
        }

        return $this->redirect($request->get('redirect'));
    }

    /**
     * @Route("/admin/comment/{page}", methods={"GET","POST"}, name="admin_comment",requirements={"page"="\d+"})
     */
    public function comment(Request $request, $page = 1, PaginatorHelper $paginator)
    {

        $query = $this->em->getRepository(Comment::class)->queryFindAllFull();
        $count = count($query->getResult());
       
        $paginate = $paginator->paginate($query, $page, 20);

        return $this->render('admin/comment.html.twig', [
            'paginate' => $paginate,
            'count' => $count
        ]);
    }

    /**
     * @Route("/admin/comment-creator", methods={"GET","POST"}, name="admin_comment-creator",requirements={"page"="\d+"})
     */
    public function commentCreator(Request $request)
    {

        if ($request->isMethod('POST')) {
            $userID = $request->request->get('userID');
            $text = $request->request->get('text');
            $postID = $request->request->get('postID');

            $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $postID]);
            $user = $this->em->getRepository(User::class)->findOneBy(['id' => $userID]);
            if ($post && $user) {
                $comment = new Comment();
                $comment->setText($text);
                $comment->setAuthor($user);
                $comment->setPost($post);
                $this->saveEntityInDB($comment);
            }
        }


        $posts = $this->em->getRepository(Post::class)->findBy([], ['id' => 'DESC']);
        $users = $this->em->getRepository(User::class)->findBy([], ['id' => 'DESC']);

        return $this->render('admin/comment-creator.html.twig', [
            'posts' => $posts,
            'users' => $users,
        ]);
    }

    /**
     * @Route("/admin/comment/action/{comment}/{action}", methods={"GET"}, name="admin_comment-action")
     */
    public function actionComment(Comment $comment, $action, Request $request, EntityManagerInterface $em)
    {

        $fieldsArray = ['isDeleted', 'isBan'];

        if (in_array($action, $fieldsArray)) {

            $this->toggle($comment, $action, $em);
        }

        return $this->redirect($request->get('redirect'));
    }

    /**
     * @Route("/admin/user/{page}", methods={"GET","POST"}, name="admin_user",requirements={"page"="\d+"})
     */
    public function user(Request $request, $page = 1, PaginatorHelper $paginator)
    {

        $query = $this->em->getRepository(User::class)->queryByRole('ROLE_USER');
        $paginate = $paginator->paginate($query, $page, 20);

        return $this->render('admin/user.html.twig', [
            'paginate' => $paginate
        ]);
    }

    /**
     * @Route("/admin/user/action/{user}/{action}", methods={"GET"}, name="admin_user-action")
     */
    public function actionUser(User $user, $action, Request $request, EntityManagerInterface $em)
    {

        $fieldsArray = ['isDeleted', 'isBan'];

        if (in_array($action, $fieldsArray)) {

            $this->toggle($user, $action, $em);
        }

        return $this->redirect($request->get('redirect'));
    }

}
