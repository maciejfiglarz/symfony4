<?php

namespace App\Helper;

use App\Entity\Advertisement;
use App\Entity\Ranking;
use App\Entity\RankingDay;
use App\Entity\Statistic;
use App\Entity\StatisticWeek;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\ORM\EntityManagerInterface;


class RankingHelper
{

    private $ad;


    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->rankingRepo = $em->getRepository(Ranking::class);
        $this->rankingDayRepo = $em->getRepository(RankingDay::class);
        $this->statisticRepo = $em->getRepository(Statistic::class);
        $this->statisticWeekRepo = $em->getRepository(StatisticWeek::class);
    }

    public function prepareRanking()
    {
        $currentWeek = $this->getCurrentWeek();
        $currentYear = $this->getCurrentYear();
        $dayOfYear = $this->getDayOfYear(); 

        $rankingDay = $this->prepareRankingDay($currentYear, $dayOfYear);
        $preparedStatistic = $this->getCurrentStatistic($currentYear, $currentWeek);
        $preparedPreviousRankings = $this->preparePreviousRanking($currentYear, $dayOfYear);
        $array = [];
        $position = 1;
        foreach ($preparedStatistic as $statistic) {
            $post = $statistic->getPost();
            $postID = $post->getId();
            $currentView = $statistic->getViews();

            $ranking = new Ranking();
            $ranking->setRankingDay($rankingDay);
            $ranking->setPost($post);
            $ranking->setViewsCurr($currentView);
            $ranking->setViewsCurr($currentView);
            $ranking->setPositionCurr($position);

            // if($postID ==7){
            //     dd($post,$preparedPreviousRankings[$postID],$dayOfYear ,$this->rankingRepo->findBy(['post'=>'7']) );
            // }
            // dd($post,$preparedPreviousRankings,$dayOfYear );
            if (isset($preparedPreviousRankings[$postID])) {

                $rankingPrev = $preparedPreviousRankings[$postID];
                $prevViewsCurr = $rankingPrev->getViewsCurr();
                $prevPositionCurr = $rankingPrev->getPositionCurr();

                $ranking->setViewsDiff($currentView - $prevViewsCurr);

                // dd($rankingPrev->getPost()->getId());
                // if($rankingPrev->getPost()->getId() == 9){
                //     dd($rankingPrev,$statistic);
                // }

                $insertPosition = $prevPositionCurr-$position;

                $ranking->setPositionDiff($insertPosition);
            
                
            }
    
           $this->em->persist($ranking);
            $position++;
              array_push($array,$ranking);
        }

      $this->em->flush();
        dd($array,$preparedStatistic,'f',$preparedPreviousRankings );
//        dd($preparedStatistic, $dayOfYear, $preparedRankings, $rankingDay);

    }

    private function prepareRankingDay($currentYear, $dayOfYear)
    {
        $rankingDay = $this->rankingDayRepo->findOneBy(['day' => $dayOfYear, 'year' => $currentYear]);
        if (!$rankingDay) {
            $rankingDay = new RankingDay();
            $rankingDay->setYear($currentYear);
            $rankingDay->setDay($dayOfYear);
            $this->em->persist($rankingDay);
            $this->em->flush();
        }
        return $rankingDay;
    }

    private function preparePreviousRanking(?int $currentYear, ?int $dayYear): array
    {
        $ranking = $this->rankingRepo->fetchByDayAndYear($currentYear, $dayYear - 1);
        $preparedRanking = [];
          
        foreach ($ranking as $r) {

            // if($r->getPost()->getId()==9){

        //    dd($r->getRankingDay()->getDay(), $dayYear - 1,$r, $this->rankingRepo->findBy(['post'=>'9']));
            $preparedRanking[$r->getPost()->getId()] = $r;
        // }
        }
        return $preparedRanking;
    }

    private function getCurrentStatistic($currentYear, $currentWeek)
    {
        $statistic = $this->statisticRepo->fetchByCurrentWeek($currentYear, $currentWeek);
        $preparedStatic = [];
        foreach ($statistic as $s) {
            $preparedStatic[$s->getId()] = $s;
        }
        return $preparedStatic;
    }

    private function getDayOfYear()
    {
        return intval(date('z'));
    }

    private function getCurrentDate()
    {
        return new \DateTime('today');
    }

    private function getCurrentYear()
    {
        return $this->getCurrentDate()->format('Y');
    }

    private function getCurrentWeek()
    {
        return intval($this->getCurrentDate()->format('W'));
    }

}


