<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


use Faker\Factory;
use Faker\Generator;

class UserFixtures extends BaseFixture
{
    private $passwordEncoder;
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(User::class, 1, function (User $user, $count) {

            $user->setEmail('admin@gmail.com');
            $user->setUsername('admin');
            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'pass'
            ));
            $user->setRoles(['ROLE_USER']);
        });

    


        $manager->flush();


    }
}
