<?php

namespace App\Controller;

use App\Entity\RankingDay;
use App\Entity\Ranking;
use App\Entity\Statistic;
use App\Entity\StatisticWeek;
use App\Helper\RankingHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CronController extends BaseSiteController

{
    /**
     * @Route("/cron-ranking", name="cron_ranking")
     */

    public function ranking(RankingHelper $rankingHelper)
    {
        $rankingHelper->prepareRanking();

        return $this->render('cron/ranking.html.twig', $viewParameters);
    }

}
