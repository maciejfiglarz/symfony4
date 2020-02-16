<?php

namespace App\Controller;

use App\Entity\Post;
use App\Helper\PaginatorHelper;
use App\Helper\PostHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SearcherController  extends BaseSiteController
{
    /**
     * @Route("/searcher/", methods={"POST","GET"}, name="searcher_pre")
     */

    public function preSearcher(Request $request, PostHelper $postHelper)
    {
        $key = $request->request->get('searcher__text');
        if($key){
            return $this->redirect($this->generateUrl('searcher', ['key' => $key]));
        }

        return $this->redirect($this->generateUrl('searcher_pre', ['key' => 'empty']));
    }


    /**
     * @Route("/szukaj-{key}/{page}", methods={"GET"}, name="searcher", requirements={"page"="\d+"})
     */

    public function searcher($key, $page = 1, Request $request, PostHelper $postHelper,PaginatorHelper $paginatorHelper)
    {
        $query =  $this->getRepository(Post::class)->fetchSearcher($key);
        $viewParameters = [
            'paginate' => $paginatorHelper->paginate($query, $page, 15, ['key' => $key]),
            'key' => $key
        ];
        return $this->render('searcher/index.html.twig', $viewParameters);
    }
}
