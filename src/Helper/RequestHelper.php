<?php


namespace App\Helper;


use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Common\Annotations\AnnotationReader;

class RequestHelper
{
    protected $requestStack;
    private $propertyAccessor;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
        $this->propertyAccessor = PropertyAccess::createPropertyAccessor();
    }

    public function setEntityFields(object $entity, array $fieldList, array $checkboxes, string $collectionField = null, $key = null)
    {
        $request = $this->requestStack->getCurrentRequest();
        foreach ($fieldList as $fieldName) {

            if ($this->propertyAccessor->isWritable($entity, $fieldName)) {
                $value = null;
                if ($collectionField) {

                    if (!$key) {
                        $key = $entity->getId();
                    }

                    if (isset($request->get($collectionField)[$key][$fieldName])) {

                        $value = $request->get($collectionField)[$key][$fieldName];
                    }

                } else {
                    $value = $request->get($fieldName);
                }

                if (in_array($fieldName, $checkboxes)) {
                    $value = $value === 'on' ? true : false;
                }

                $this->propertyAccessor->setValue($entity, $fieldName, trim($value));

            }

        }

    }

    public function setBooleanFieldTrue($entity, $fieldName, $isExtra = null)
    {


        $request = $this->requestStack->getCurrentRequest();
        $fieldName = $request->get($fieldName);

        if ($fieldName) {

            if ($isExtra) {
                $fieldName = 'is' . ucfirst($fieldName);
            }

            $reflect = new \ReflectionClass($entity);

            if ($reflect->hasProperty($fieldName)) {
                $docReader = new AnnotationReader();
                $docInfos = $docReader->getPropertyAnnotations($reflect->getProperty($fieldName));
                if (isset($docInfos[0])) {
                    if ($docInfos[0]->type === 'boolean') {
                        $propertyAccessor = PropertyAccess::createPropertyAccessor();

                        $propertyAccessor->setValue(
                            $entity,
                            $fieldName,
                            true
                        );
                    }

                }


            }
        }
        return $entity;
    }
}
