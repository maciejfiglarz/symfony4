<?php


namespace App\Helper;

use App\Helper\AdvertisementHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class BaseHelper
{
    public function __construct(EntityManagerInterface $em,
                                SessionInterface $session,
                                PaginatorHelper $paginator,
                                RequestHelper $requestHelper,
                                RequestStack $requestStack,
                                FileHelper $fileHelper,
                                PathHelper $pathHelper,
                                UserHelper $userHelper,
                                UrlGeneratorInterface $router,
                                AdvertisementHelper $advertisementHelper
                                )
    {
        $this->em = $em;
        $this->session = $session;
        $this->paginator = $paginator;
        $this->requestHelper = $requestHelper;
        $this->fileHelper = $fileHelper;
        $this->pathHelper = $pathHelper;
        $this->userHelper = $userHelper;
        $this->router = $router;
        $this->adsHelper = $advertisementHelper;
        
    }
    public function saveEntityInDB($entity)
    {
        $this->em->persist($entity);
        $this->em->flush();
    }
    public function removeEntityFromDB($entity)
    {
        $this->em->remove($entity);
        $this->em->flush();
    }
}