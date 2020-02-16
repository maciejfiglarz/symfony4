<?php

namespace App\Controller;

use App\Entity\Advertisement;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PropertyAccess\PropertyAccess;

class BaseAdminController extends AbstractController
{

    protected $em;


    public function __construct(EntityManagerInterface $em,RequestStack $requestStack)
    {
        $this->em = $em;
        $this->requestStack = $requestStack;

    }



    public function saveEntityInDB($entity)
    {

        $this->em->persist($entity);
        $this->em->flush();
    }
    protected function toggle($entity, $field, ?EntityManagerInterface $em)
    {

        $request = $this->requestStack->getCurrentRequest();


        $reflect = new \ReflectionClass($entity);

        if (!$reflect->hasProperty($field)) {
            return $this->redirect($request->get('redirect'));
        }
        $docReader = new AnnotationReader();
        $docInfos = $docReader->getPropertyAnnotations($reflect->getProperty($field));

        if ($docInfos[0]->type === 'boolean') {

            $propertyAccessor = PropertyAccess::createPropertyAccessor();

            $toggleField = $propertyAccessor->getValue($entity, $field);

            $propertyAccessor->setValue(
                $entity,
                $field,
                !$toggleField
            );
            $em->persist($entity);
            $em->flush();
        }
    }

}
