<?php

namespace App\Repository;

use App\Entity\StatisticWeek;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method StatisticWeek|null find($id, $lockMode = null, $lockVersion = null)
 * @method StatisticWeek|null findOneBy(array $criteria, array $orderBy = null)
 * @method StatisticWeek[]    findAll()
 * @method StatisticWeek[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatisticWeekRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StatisticWeek::class);
    }

    // /**
    //  * @return StatisticWeek[] Returns an array of StatisticWeek objects
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
    public function findOneBySomeField($value): ?StatisticWeek
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
