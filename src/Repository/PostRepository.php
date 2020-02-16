<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry, EntityManagerInterface $em)
    {
        $this->em = $em;
        parent::__construct($registry, Post::class);
    }


    public function queryTelevision()
    {

        return $this->createQueryBuilder('p')
        ->andWhere('p.isDeleted = :isDeleted')
        ->setParameter('isDeleted', false)

        ->andWhere('p.isYoutubeLink = :isYoutubeLink')
        ->setParameter('isYoutubeLink', true)

        ->andWhere('p.isWaitingRoom = :isWaitingRoom')
        ->setParameter('isWaitingRoom', false)
        ->andWhere('p.isAccepted = :isAccepted')
        ->setParameter('isAccepted', true)
        ->orderBy('p.id', 'DESC')
        ->getQuery();

    }


    public function queryRanking()
    {

        $today = new \DateTime('today');
        $currentYear = clone $today;
        $currentYear = $currentYear->format('Y');

        $currentDay = intval(date('z'));

        return $this->createQueryBuilder('p')
            ->leftJoin('p.rankings', 'r')
            ->leftJoin('r.rankingDay', 'rd')
            
            ->andWhere('rd.year = :year')
            ->setParameter('year', $currentYear)

            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter('isAccepted', true)

            ->andWhere('rd.day = :day')
            ->setParameter('day', $currentDay)
            ->addOrderBy('r.positionCurr', 'ASC')
            ->getQuery();

    }

    public function fetchMorePost($limit,$currentPostID){
        return $this->createQueryBuilder('p')
            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter(':isAccepted', true)
            ->andWhere('p.isWaitingRoom = :isWaitingRoom')
            ->setParameter(':isWaitingRoom', false)
            ->andWhere('p.id != :currentPostID')
            ->setParameter(':currentPostID', $currentPostID)
            ->orderBy('p.id', 'DESC')
            ->setMaxResults(3)
            ->setFirstResult($limit)
            ->getQuery()
            ->getResult();
    }
    
    public function getNextPost($postId)
    {
        $post = $this->createQueryBuilder('p')
            ->andWhere('p.isAccepted < :isAccepted')
            ->setParameter(':isAccepted', true)
            ->andWhere('p.id < :postId')
            ->setParameter(':postId', $postId)
            ->orderBy('p.id', 'DESC')
            ->setFirstResult(0)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
//        if (!$post) {
//            $post = $this->createQueryBuilder('p')
//                ->orderBy('p.id', 'ASC')
//                ->setFirstResult(0)
//                ->setMaxResults(1)
//                ->getQuery()
//                ->getOneOrNullResult();
//        }
        return $post;
    }

    public function getPreviousPost($postId)
    {
        $post = $this->createQueryBuilder('p')
            ->andWhere('p.isAccepted < :isAccepted')
            ->setParameter(':isAccepted', true)
            ->andWhere('p.id > :postId')
            ->setParameter(':postId', $postId)
            ->orderBy('p.id', 'ASC')
            ->setFirstResult(0)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

//        if (!$post) {
//            $post = $this->createQueryBuilder('p')
//                ->orderBy('p.id', 'ASC')
//                ->setFirstResult(0)
//                ->setMaxResults(1)
//                ->getQuery()
//                ->getOneOrNullResult();
//        }
        return $post;
    }

    public function fetchSearcher($key)
    {
        return $this->createQueryBuilder('p')
            ->orWhere('p.title LIKE :title')
            ->setParameter('title', '%' . $key . '%')
            ->orWhere('p.description LIKE :description')
            ->setParameter('description', '%' . $key . '%')
            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter('isAccepted', true)
            ->andWhere('p.isWaitingRoom = :isWaitingRoom')
            ->setParameter('isWaitingRoom', false)
            ->addOrderBy('p.id', 'DESC')
            ->getQuery();

    }

    public function queryForCategory($category)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.categories', 'c')
            ->andWhere('c.id = :category')
            ->setParameter('category', $category)
           ->andWhere('p.isWaitingRoom = :isWaitingRoom')
           ->setParameter('isWaitingRoom', false)
           ->andWhere('p.isAccepted = :isAccepted')
           ->setParameter('isAccepted', false)
            ->addOrderBy('p.id', 'DESC')
            ->getQuery();

    }

    public function queryForWaitingRoom()
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.isDeleted = :isDeleted')
            ->setParameter('isDeleted', false)
            ->andWhere('p.isWaitingRoom = :isWaitingRoom')
            ->setParameter('isWaitingRoom', true)
            ->andWhere('p.isWaitingRoom = :isWaitingRoom')
            ->setParameter('isWaitingRoom', true)
            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter('isAccepted', true)
            ->orderBy('p.id', 'DESC')
            ->getQuery();

    }

    public function queryFindAllFull()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->getQuery();
    }

    public function queryFindAllByAuthor($user)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.isDeleted = :isDeleted')
            ->setParameter('isDeleted', false)
            ->andWhere('p.author = :author')
            ->setParameter('author', $user)
            ->orderBy('p.id', 'DESC')
            ->getQuery();
    }

    public function queryFindAllByAuthorAndVoted($user)
    {

        return $this->createQueryBuilder('p')
            ->andWhere('p.isDeleted = :isDeleted')
            ->setParameter('isDeleted', false)
            // ->andWhere('t.author = :author')
            // ->setParameter('author', $user)
            // ->andWhere('t.votes in (:votes)')
            // ->setParameter('votes', $votes)
            ->leftJoin('p.votes', 'v')
            ->andWhere('v.isVoteUp = :isVoteUp')
            ->setParameter('isVoteUp', true)
            ->andWhere('v.user = :user')
            ->setParameter('user', $user)
            ->orderBy('p.id', 'DESC')
            ->getQuery();
    }

    public function queryFindAll()
    {
        return $this->createQueryBuilder('p')
            ->where('p.isDeleted = :isDeleted')
            ->setParameter('isDeleted', false)
            ->andWhere('p.isWaitingRoom = :isWaitingRoom')
            ->setParameter('isWaitingRoom', false)
            ->andWhere('p.isAccepted = :isAccepted')
            ->setParameter('isAccepted', true)
            ->orderBy('p.id', 'DESC')
//            ->setMaxResults(5)
//            ->setFirstResult(10)
            ->getQuery();
    }

    public function queryForSort($type, $categories)
    {


        $categories = $this->prepareCategoriesFromString($categories);

        $db = $this->createQueryBuilder('p');


        if (!empty($categories)) {
            $db->leftJoin('p.categories', 'c')
                ->andWhere('c in (:categories)')
                ->setParameter('categories', $categories);
        }

        if($type=='popularne'){
            $db->addOrderBy('p.views', 'DESC');
        } elseif ($type=='najnowsze'){
            $db->addOrderBy('p.id', 'DESC');
        } elseif($type='najciekawsze'){

            $db->addSelect('p.voteUp - p.voteDown as HIDDEN voteResult');
            $db->addOrderBy('voteResult', 'DESC');
        }

        $db
            ->andWhere('p.isDeleted = :isDeleted')
            ->setParameter('isDeleted', false)
           ->andWhere('p.isWaitingRoom = :isWaitingRoom')
           ->setParameter('isWaitingRoom', false)
           ->andWhere('p.isAccepted = :isAccepted')
           ->setParameter('isAccepted', true);
//            ->setMaxResults(5)
//            ->setFirstResult(10);
//            dd($db->getQuery()->getResult());
             return $db->getQuery();
    }

    private function prepareCategoriesFromString(?string $string)
    {
        $array = explode(',', $string);
        $categories = [];
        $repo = $this->em->getRepository(Category::class);
        foreach ($array as $c) {
            $category = $repo->findOneBy(['id' => $c]);
            if ($category) {
                array_push($categories, $category);
            }
        }
        return $categories;
    }

//    public function querySearcher($data)
//    {
//        $db = $this->createQueryBuilder('g');
//
//        if (!empty($data['destination'])) {
//
//            $db->leftJoin('g.destination', 'd')
//                ->orWhere('d in (:destination)')
//                ->setParameter('destination', $data['destination']);
//        }
//
//        if (!empty($data['category'])) {
//
//            $db->leftJoin('g.category', 'cat')
//                ->orWhere('cat in (:category)')
//                ->setParameter('category', $data['category']);
//        }
//
//        if (!empty($data['period'])) {
//
//            $db->leftJoin('g.period', 'p')
//                ->orWhere('p in (:period)')
//                ->setParameter('period', $data['period']);
//        }
//
//        if (!empty($data['country'])) {
//
//            $db->leftJoin('g.country', 'cou')
//                ->orWhere('cou in (:country)')
//                ->setParameter('country', $data['country']);
//        }
//
//        $db->andWhere('g.isDeleted = :isDeleted')
//            ->setParameter('isDeleted', false);
//
//
//        return $db->getQuery()->getResult();
//    }


    // /**
    //  * @return Post[] Returns an array of Post objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Post
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
