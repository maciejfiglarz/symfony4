<?php


namespace App\Helper;


use App\Entity\Category;
use Symfony\Component\HttpFoundation\Request;

class SearcherHelper extends BaseHelper
{


    public function fetchCategories()
    {
        return $this->em->getRepository(Category::class)->fetchActive();

    }

    public function prepareSortUrl(Request $request)
    {
        $type = $this->prepareTypesForSortUrl($request->get('sortType'));
        $categories = $this->prepareCategoriesForSortUrl($request->get('sortCategory'));
        return ['type' => $type, 'categories' => $categories];
    }

    public function prepareCategoriesForSortUrl($categories)
    {
        $preparedArray = [];
        if (!is_null($categories)) {
            foreach ($categories as $c) {
                array_push($preparedArray, str_replace('sortCategory-', '', $c));
            }
            $string = implode(",", $preparedArray);
        } else {
            $string = "0";
        }
        return $string;
    }

    public function prepareTypesForSortUrl($type)
    {
        $array = ['newest' => 'najnowsze', 'interesting' => 'najciekawsze', 'popular' => 'popularne'];
        if (isset($type[0])) {
            $type = $array[$type[0]];
        } else {
            $type = 'najnowsze';
        }
        return $type;
    }
}
