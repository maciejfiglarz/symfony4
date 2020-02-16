<?php

namespace App\Controller;

use App\Entity\Notification;
use Doctrine\ORM\EntityManagerInterface;
use App\Helper\UserHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{

    /**
     * @Route("/nie-znaleziono", name="page_404")
     */
    public function notFound()
    {
        return $this->render('page/404.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/page", name="page")
     */
    public function index()
    {
        return $this->render('page/index.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/dobre-praktyki/{notification}", name="page_good-practise")
     */
    public function goodPractise(Notification $notification = null,UserHelper $userHelper,EntityManagerInterface $em)
    {
        $user = $userHelper->getUser();
        if($notification && $user){
            $notification->setIsActive(false);
   
            $em->persist($notification);
            $em->flush();
        }
        return $this->render('page/good-practise.html.twig', []);
    }

     /**
     * @Route("/dla-youtuberow", name="page_youtube")
     */
    public function youtuber(Notification $notification = null,UserHelper $userHelper,EntityManagerInterface $em)
    {
        $user = $userHelper->getUser();
        if($notification && $user){
            $notification->setIsActive(false);
   
            $em->persist($notification);
            $em->flush();
        }
        return $this->render('page/youtube.html.twig', []);
    }
    /**
     * @Route("/polityka-prywatnosci", name="page_policy-privacy")
     */
    public function policyPrivacy()
    {
        return $this->render('page/policy-privacy.html.twig', []);
    }

    /**
     * @Route("/regulamin", name="page_statute")
     */
    public function statute()
    {
        return $this->render('page/statute.html.twig', []);
    }
    /**
     * @Route("/regulamin", name="page_contact")
     */
    public function contact()
    {
        return $this->render('page/contact.html.twig', []);
    }
}
