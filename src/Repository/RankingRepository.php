<?php

namespace App\Repository;

use App\Entity\Ranking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Ranking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ranking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ranking[]    findAll()
 * @method Ranking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RankingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ranking::class);
    }
    public function prepareForPost($post)
    {

        $now = new \DateTime('now');
        $currentDay = intval(date('z'));

        $currentYear = clone $now;
        $currentYear = intval($currentYear->format('Y'));

        $hour = clone $now;
        $hour = intval($hour->format('h'));
        if ($hour < 4) {
            $currentDay = $currentDay - 1;
        }


        $result = $this->createQueryBuilder('r')
            ->leftJoin('r.rankingDay', 'rd')
            ->andWhere('rd.year = :year')
            ->setParameter('year', $currentYear)
            ->andWhere('rd.day = :day')
            ->setParameter('day', $currentDay)
            ->leftJoin('r.post', 'p')
            ->andWhere('p.id = :post')
            ->setParameter('post', $post)
            ->addOrderBy('r.id', 'DESC')
            ->getQuery()->getResult();

        $preparedResult = [];
        foreach ($result as $r) {
            $preparedResult[$r->getPost()->getId()] = $r;
        }
        return $preparedResult;
    }

    public function queryRanking()
    {

        $today = new \DateTime('today');
        $currentYear = clone $today;
        $currentYear = $currentYear->format('Y');

        $currentDay = intval(date('z'));

        return $this->createQueryBuilder('r')
            ->leftJoin('r.rankingDay', 'rd')
            ->andWhere('rd.year = :year')
            ->setParameter('year', $currentYear)
            ->andWhere('rd.day = :day')
            ->setParameter('day', $currentDay)
            ->addOrderBy('r.viewsCurr', 'DESC')
            ->getQuery();

    }


    public function prepareForPosts($posts)
    {

        $now = new \DateTime('now');
        $currentDay = intval(date('z'));

        $currentYear = clone $now;
        $currentYear = intval($currentYear->format('Y'));

        $hour = clone $now;
        $hour = intval($hour->format('H'));
    
        if ($hour < 4) {
            $currentDay = $currentDay - 1;
        }

        $preparedPosts = [];
        foreach ($posts as $p){
            $preparedPosts[] = $p;
        }
//        dd($preparedPosts,$currentDay);
        $result = $this->createQueryBuilder('r')
            ->leftJoin('r.rankingDay', 'rd')
            ->andWhere('rd.year = :year')
            ->setParameter('year', $currentYear)
            ->andWhere('rd.day = :day')
            ->setParameter('day', $currentDay)
            ->leftJoin('r.post', 'post')
            ->andWhere('post in (:posts)')
            ->setParameter('posts', $preparedPosts)
            ->addOrderBy('r.viewsCurr', 'DESC')
            ->getQuery()->getResult();

        $preparedResult = [];
        foreach ($result as $r) {
            $preparedResult[$r->getPost()->getId()] = $r;
        }
        return $preparedResult;
    }



    public function fetchByDayAndYear($year, $day)
    {
        return $this->createQueryBuilder('r')
            ->leftJoin('r.rankingDay', 'rd')
            ->andWhere('rd.year = :year')
            ->setParameter('year', $year)
            ->andWhere('rd.day = :day')
            ->setParameter('day', $day)
            ->addOrderBy('r.positionCurr', 'DESC')
            ->getQuery()->getResult();
    }
//    public function prepareRanking(){
//
//        $bestDeal = $this->em->createQuery(
//            'SELECT bd,
//                 (CASE
//                 WHEN dt.systemName = \'percent\' THEN :datePrice - ( :datePrice * (bd.discount / 100 ))
//                 WHEN dt.systemName = \'euro\' THEN (:datePrice - bd.discount)
//                 ELSE 0
//                 END) AS priceAfterDiscount
//                 FROM App\Entity\BestDeal bd
//                 LEFT JOIN App\Entity\GroupTravelDate gd WITH bd.groupTravelPackageDate = gd.id
//                 LEFT JOIN App\Entity\BestDealDiscountType dt WITH bd.bestDealDiscountType = dt.id
//                 WHERE gd.groupTravelPackage = :groupTravelPackage  AND gd.startDate >= :now AND bd.isDeleted = false
//                 ORDER BY priceAfterDiscount ASC'
//        )
//            ->setParameter('groupTravelPackage', $groupTravel)
//            ->setParameter('datePrice', $datePrice)
//            ->setParameter('now', new \DateTime())
//            ->setMaxResults(1)
//            ->getOneOrNullResult();
//
//    }

    // /**
    //  * @return Ranking[] Returns an array of Ranking objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Ranking
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
