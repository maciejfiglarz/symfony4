<?php


namespace App\Helper;


use Doctrine\ORM\Tools\Pagination\Paginator;

class PaginatorHelper
{
    public function paginate($query, $page = 1, $limit = 10, $routeParams = array())
    {
        $paginator = new Paginator($query);

        $paginator->getQuery()
            ->setFirstResult($limit * ($page - 1)) // Offset
            ->setMaxResults($limit); // Limit

        $data = $paginator->getIterator();
        $total = $paginator->count();
        $pages = intval( ceil($total / $limit) );
        return [
            'fetched' => $data->count(),
            'data' => $data,
            'total' => $total,
            'page' => $page,
            'pages' => $pages === 0 ? 1 : $pages ,
            'routeParams' => $routeParams,
        ];
    }
}
