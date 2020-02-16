<?php

namespace App\DataFixtures;

use App\Helper\PathHelper;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;
use Symfony\Component\HttpKernel\Kernel;

abstract class BaseFixture extends Fixture
{
    /** @var ObjectManager */
    private $manager;

    /** @var Generator */
    protected $faker;


    abstract protected function loadData(ObjectManager $manager);


    public function load(ObjectManager $manager)
    {
        $this->manager = $manager;
        $this->faker = Factory::create();

        $this->loadData($manager);
    }
    protected function createMany(string $className, int $count, callable $factory)
    {
        $entitiesArray = [];

        for ($i = 0; $i < $count; $i++) {

            $entity = new $className();
            $res = $factory($entity, $i);
            if ($res !== false) {
                $this->manager->persist($entity);

                // store for usage later as App\Entity\ClassName_#COUNT#
                $this->addReference($className . '_' . $i, $entity);
                $entitiesArray[$i] = $entity;
            }
        }

        return $entitiesArray;
    }


}




