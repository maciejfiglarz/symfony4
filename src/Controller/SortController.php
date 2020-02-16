<?php

namespace App\Controller;


use App\Entity\Post;
use App\Entity\Ranking;
use App\Entity\Statistic;
use App\Helper\PaginatorHelper;
use App\Helper\SearcherHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SortController extends BaseSiteController
{
    /**
     * @Route("/ranking/{page}", methods={"POST","GET"}, name="ranking",requirements={"page"="\d+"})
     */
    public function ranking(
        $page = 1,
        Request $request,
        PaginatorHelper $paginatorHelper
    )
    {
        $query = $this->em->getRepository(Post::class)->queryRanking();
        $posts = $paginatorHelper->paginate($query, $page, 12);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);
    
        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];
        return $this->render('sort/ranking.html.twig', $viewParameters);
    }

    /**
     * @Route("/kategoria/{category}/{name}/{page}", methods={"POST","GET"}, name="sort_category",requirements={"page"="\d+"})
     */
    public function category(
        $category,
        $name,
        $page = 1,
        Request $request,
        PaginatorHelper $paginatorHelper
    )
    {
        $query = $this->em->getRepository(Post::class)->queryForCategory($category);

        $posts = $paginatorHelper->paginate($query, $page, 15, ['categories' => $category]);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);

        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];

        return $this->render('sort/index.html.twig', $viewParameters);
    }

    /**
     * @Route("/sort", methods={"POST","GET"}, name="sort_url")
     */
    public function createUrlAndRedirect(Request $request, SearcherHelper $searcherHelper)
    {
        $preparedUrl = $searcherHelper->prepareSortUrl($request);

        return $this->redirect($this->generateUrl('sort', ['type' => $preparedUrl['type'], 'categories' => $preparedUrl['categories']]));
    }

    /**
     * @Route("/{type}/kategorie:{categories}/{page}", methods={"POST","GET"}, name="sort",requirements={"page"="\d+"})
     */
    public function sort(
        $type,
        $categories,
        $page = 1,
        Request $request,
        SearcherHelper $searcherHelper,
        PaginatorHelper $paginatorHelper
    )
    {

        $query = $this->em->getRepository(Post::class)->queryForSort($type, $categories);
        $posts = $paginatorHelper->paginate($query, $page, 15, ['type' => $type, 'categories' => $categories]);
        $rankings = $this->getRepository(Ranking::class)->prepareForPosts($posts['data']);

        $viewParameters = [
            'paginate' => $posts,
            'rankings' => $rankings
        ];

        return $this->render('sort/index.html.twig', $viewParameters);
    }
}
