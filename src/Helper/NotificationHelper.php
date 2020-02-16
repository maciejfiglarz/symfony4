<?php

namespace App\Helper;

use App\Entity\User;
use App\Entity\Notification;

use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;

class NotificationHelper extends BaseHelper
{


    public function fetchNotificationForSinglePost($notification)
    {
        $notification = $this->em->getRepository(Notification::class)->findOneBy(['id' => $notification]);
        if ($notification) {
            $notification->setIsActive(false);
            $this->saveEntityInDB($notification);
        }

        return $notification;
    }

    public function initFirstPostInfo(){
        $user = $this->userHelper->getUser();

        if($user && !$user->getIsAddedFirstPost()){

            $notification = new Notification();
            $notification->setIsAddedFirst(true);
            $notification->setUserMarked($user);
            $notification->setIsActive(true);
            $this->em->persist($notification);


            $user->setIsAddedFirstPost(true);
            $this->em->persist($user);

           $this->em->flush($user);

            //dd($notification,$user);
        }   
        return false;
    }


    public function createNotificationForComment(User $user, $text, $entities)
    {

        $words = explode(' ', $text);
        $userRepo = $this->em->getRepository(User::class);
        foreach ($words as $w) {
            if (isset($w[0]) && $w[0] == '@') {
                $userMarked = $userRepo->findOneBy(['username' => substr($w, 1)]);
                if ($userMarked) {
                    $notification = new Notification();
                    $notification->setIsComment(true);
                    $notification->setUserMark($user);
                    $notification->setUserMarked($userMarked);
                    $notification->setPost($entities['post']);
                    $notification->setComment($entities['comment']);

                    $this->saveEntityInDB($notification);
                }
            }
        }
    }

    public function fetchAllActionNotificationForLoggedUser($limit = null)
    {
        $user = $this->userHelper->getUser();
        return $this->em->getRepository(Notification::class)->fetchAllActionNotificationForLoggedUser($user,$limit);
    }

    public function countNotificationForLoggedUserIfActive(){
        $user = $this->userHelper->getUser();
        return $this->em->getRepository(Notification::class)->countNotificationForLoggedUserIfActive($user);
    }



}
