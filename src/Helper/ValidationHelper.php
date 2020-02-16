<?php


namespace App\Helper;


use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\PropertyAccess\PropertyAccess;

class ValidationHelper
{

    private $propertyAccessor;

    public function __construct()
    {
        $this->propertyAccessor = PropertyAccess::createPropertyAccessor();
    }

    public function checkRequiredFieldsAreNotEmpty($entity, array $fieldList)
    {
        $errors = []; $arr =[];
        foreach ($fieldList as $fieldName) {
           
            if ($this->propertyAccessor->isReadable($entity, $fieldName)) {
            
                $value = $this->propertyAccessor->getValue($entity, $fieldName);
                $arr[$fieldName] = $value;
                if (!$value) {
                    $arr[$fieldName] = $value;
                    $errors[$fieldName] = false;
                 }
            }
        }
     
        return $errors;
    }
   
}
