<?php

namespace App\Controller;
use App\Entity\Ranking;
use App\Helper\RouteHelper;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Entity\TemponaryImage;
use App\Helper\CommentHelper;
use App\Helper\EmailHelper;
use App\Helper\GraphicHelper;
use App\Helper\NotificationHelper;
use App\Helper\PaginatorHelper;
use App\Helper\PostHelper;
use App\Helper\PostMenagerHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class IndexController extends BaseSiteController
{
    /**
     * @Route("/{page}", name="index", methods={"GET"}, requirements={"page"="\d+"})
     */
    public function index($page = 1, PaginatorHelper $paginatorHelper)
    {

        $query = $this->em->getRepository(Post::class)->queryFindAll();

        $posts = $paginatorHelper->paginate($query, $page, 12);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);

        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];

        return $this->render('index/index.html.twig', $viewParameters);
    }

    /**
     * @Route("/telewizja/{page}", name="index_television", methods={"GET"}, requirements={"page"="\d+"})
     */
    public function television($page = 1, PaginatorHelper $paginatorHelper)
    {

        $query = $this->em->getRepository(Post::class)->querytelevision();
        $posts = $paginatorHelper->paginate($query, $page, 12);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);

        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];

        return $this->render('index/television.html.twig', $viewParameters);
    }

}
