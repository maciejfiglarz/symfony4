<?php

namespace App\Repository;

use App\Entity\Statistic;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Statistic|null find($id, $lockMode = null, $lockVersion = null)
 * @method Statistic|null findOneBy(array $criteria, array $orderBy = null)
 * @method Statistic[]    findAll()
 * @method Statistic[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatisticRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Statistic::class);
    }

    public function queryFindAllFull()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->getQuery();
    }

    public function queryFindAllFullOrdered()
    {
        return $this->createQueryBuilder('s')
            ->leftJoin('s.statisticWeek', 'sw')
            ->addOrderBy('sw.week', 'DESC')
            ->addOrderBy('s.views', 'DESC')
            ->getQuery();
    }

    public function fetchByCurrentWeek($year,$week){

        return $this->createQueryBuilder('s')
            ->leftJoin('s.statisticWeek', 'sw')
            ->andWhere('sw.year = :year')
            ->setParameter('year', $year)
            ->andWhere('sw.week = :week')
            ->setParameter('week', $week)

            ->leftJoin('s.post', 'p')
            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter('isAccepted', true)

            ->addOrderBy('s.views', 'DESC')
            ->setMaxResults('100')
            ->getQuery()->getResult();
    }

    // /**
    //  * @return Statistic[] Returns an array of Statistic objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Statistic
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
