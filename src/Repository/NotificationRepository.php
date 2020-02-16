<?php

namespace App\Repository;

use App\Entity\Notification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Notification|null find($id, $lockMode = null, $lockVersion = null)
 * @method Notification|null findOneBy(array $criteria, array $orderBy = null)
 * @method Notification[]    findAll()
 * @method Notification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Notification::class);
    }

    public function fetchAllActionNotificationForLoggedUser($user, $limit = false)
    {
        $db = $this->createQueryBuilder('p')
            ->andWhere('p.userMarked = :userMarked')
            ->setParameter('userMarked', $user);

        $db->addOrderBy('p.isActive', 'DESC')
            ->addOrderBy('p.id', 'DESC');
        if ($limit) {
            $db->setMaxResults($limit);
        }

        return $db->getQuery()->getResult();
    }
    public function countNotificationForLoggedUserIfActive($user){

        return $this->createQueryBuilder('p')
        ->select('count(p.id)')
        ->andWhere('p.userMarked = :userMarked')
        ->setParameter('userMarked', $user)
        ->andWhere('p.isActive = :isActive')
        ->setParameter('isActive', true)
        ->getQuery()
        ->getSingleScalarResult();  
                      
        

    }
    public function queryFindAllByAuthor($user)
    {
        $db = $this->createQueryBuilder('p')
            ->andWhere('p.userMarked = :userMarked')
            ->setParameter('userMarked', $user);
        $db->addOrderBy('p.isActive', 'DESC')
            ->addOrderBy('p.id', 'DESC');
        return $db->getQuery();
    }

    // /**
    //  * @return Notification[] Returns an array of Notification objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Notification
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
