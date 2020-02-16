<?php

namespace App\Repository;

use App\Entity\TemponaryImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TemponaryImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method TemponaryImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method TemponaryImage[]    findAll()
 * @method TemponaryImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TemponaryImageRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TemponaryImage::class);
    }
    public function fetchExpired()
    {
        $yesterday = (new \DateTime('yesterday'))->format('Y-m-d');

        return $this->createQueryBuilder('t')
            ->where('t.createdAt <= :createdAt')
            ->setParameter('createdAt', $yesterday)
            ->getQuery()->getResult();
    }
    // /**
    //  * @return TemponaryImage[] Returns an array of TemponaryImage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TemponaryImage
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
