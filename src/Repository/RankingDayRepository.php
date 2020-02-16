<?php

namespace App\Repository;

use App\Entity\RankingDay;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method RankingDay|null find($id, $lockMode = null, $lockVersion = null)
 * @method RankingDay|null findOneBy(array $criteria, array $orderBy = null)
 * @method RankingDay[]    findAll()
 * @method RankingDay[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RankingDayRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RankingDay::class);
    }

    // /**
    //  * @return RankingDay[] Returns an array of RankingDay objects
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
    public function findOneBySomeField($value): ?RankingDay
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
