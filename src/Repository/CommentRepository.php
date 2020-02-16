<?php

namespace App\Repository;

use App\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Comment::class);
    }
    public function queryFindAllFull()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->getQuery();
    }
    public function prepareRepliedComments($post)
    {

        $result = $this->createQueryBuilder('c')
            ->andWhere('c.isHide = :isHide')
            ->setParameter('isHide', false)
            ->andWhere('c.isReply = :isReply')
            ->setParameter('isReply', true)
            ->andWhere('c.replyComment IS NOT NULL')
            // ->setParameter('replyComment', true)
            ->andWhere('c.post = :post')
            ->setParameter('post', $post)
            ->orderBy('c.id', 'ASC')
            ->getQuery()->getResult();

        $preparedResult  = [];

        foreach ($result as $r) {
            $preparedResult[$r->getReplyComment()->getId()][] = $r;
        }
        
        return $preparedResult;
    }

    // /**
    //  * @return Comment[] Returns an array of Comment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Comment
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
