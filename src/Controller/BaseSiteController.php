<?php


namespace App\Controller;

use App\Helper\PaginatorHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class BaseSiteController extends AbstractController
{
    protected $em;
    protected $session;

    public function __construct(EntityManagerInterface $em, SessionInterface $session, PaginatorHelper $paginator)
    {
        $this->em = $em;
        $this->session = $session;
        $this->paginator = $paginator;
    }

    public function getRepository(string $entityName)
    {
        return $this->em->getRepository($entityName);
    }
    public function removeEmptyItemFromArray(array $array)
    {
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $array[$key] = $this->removeEmptyItemFromArray($array[$key]);
            }

            if (empty($array[$key])) {
                unset($array[$key]);
            }
        }

        return $array;
    }
    public function deserialize($data)
    {
        return $this->get('serializer')
            ->deserialize($data, Category::class, 'json');
    }
    protected function preparePaginate($entityClass, $page = 1, $limit = 5)
    {

        $repository = $this->em->getRepository($entityClass);
        $query = $repository->queryFindAll();

        return $this->paginator->paginate($query, $page, $limit);
    }
    public function saveEntityInDB($entity)
    {

        $this->em->persist($entity);
        $this->em->flush();
    }
}
