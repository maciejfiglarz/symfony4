<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Ranking;
use App\Helper\PaginatorHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class WaitingRoomController extends BaseSiteController
{

    /**
     * @Route("/kategoria/{category}/{name}/{page}", methods={"POST","GET"}, name="sort_category",requirements={"page"="\d+"})
     */

    /**
     * @Route("/poczekalnia/{page}", name="waiting-room__list",methods={"POST","GET"},requirements={"page"="\d+"})
     */
    public function index($page = 1, PaginatorHelper $paginatorHelper)
    {


        $query = $this->em->getRepository(Post::class)->queryForWaitingRoom();


        $posts = $paginatorHelper->paginate($query, $page, 12);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);

        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];


        return $this->render('waiting_room/index.html.twig', $viewParameters);
    }
}
