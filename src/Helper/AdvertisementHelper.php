<?php

namespace App\Helper;

use App\Entity\Advertisement;
use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\ORM\EntityManagerInterface;


class AdvertisementHelper
{

    private $ad;


    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->adsRepo = $em->getRepository(Advertisement::class);
    }

    public function displayAd($name)
    {
        $ad = $this->em->getRepository(Advertisement::class)->findOneBy(['name' => $name]);
        if ($ad && $ad->getIsActive()) {
            if ($ad->getIsAdsense()) {
                return $ad->getAdsense();
            } else if ($ad->getIsSataku()) {
                return $ad->getSataku();
            }
        }

        return null;
    }

    public function getPosition($name)
    {
        $ad = $this->em->getRepository(Advertisement::class)->findOneBy(['name' => $name]);
        if ($ad) {
            return $ad->getPosition();
        }
        return null;
    }


    public function prepareDefaultAds()
    {

        $this->prepareWallVerticalRight();
        $this->prepareWallVerticalLeft();
        $this->prepareWallHorizontal();
        $this->prepareFakePost();
        $this->prepareSingleUnderPost();
        $this->prepareSingleTop();
        $this->prepareMobileBar();
        $this->preparePostFirstParagraph();
        $this->preparePostSecondParagraph();
        $this->preparePostThirdParagraph();
    }


    public function preparePostFirstParagraph()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'post-first-paragraph']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('post-first-paragraph');
            $ad->setAdsense('');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function preparePostSecondParagraph()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'post-second-paragraph']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('post-second-paragraph');
            $ad->setAdsense('');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function preparePostThirdParagraph()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'post-third-paragraph']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('post-third-paragraph');
            $ad->setAdsense('');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }



    public function prepareMobileBar()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'mobile-bar']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('mobile-bar');
            $ad->setAdsense('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- mobile bar bottom -->
    <ins class="adsbygoogle"
         style="display:inline-block;width:300px;height:50px"
         data-ad-client="ca-pub-5159051873786027"
         data-ad-slot="1918040921"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function prepareSingleTop()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'single-post-top']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('single-post-top');
            $ad->setAdsense('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- single post top -->
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5159051873786027"
             data-ad-slot="4029538250"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }
    public function prepareSingleUnderPost()
    {
        $ad = $this->adsRepo->findOneBy(['name' => 'single-post-under']);
        if (!$ad) {
            $ad = new Advertisement();
            $ad->setName('single-post-under');
            $ad->setAdsense(' <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- single post under post -->
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5159051873786027"
             data-ad-slot="5614082663"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function prepareWallVerticalRight()
    {

        $wallVerticalRight = $this->adsRepo->findOneBy(['name' => 'wall-vertical-right']);
        if (!$wallVerticalRight) {
            $ad = new Advertisement();
            $ad->setName('wall-vertical-right');
            $ad->setAdsense('   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                        <!-- wall desktop vertical -->
                        <ins class="adsbygoogle"
                        style="display:inline-block;width:120px;height:700px"
                        data-ad-client="ca-pub-5159051873786027"
                        data-ad-slot="1365530676"></ins>
                        <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function prepareWallVerticalLeft()
    {
        $wallVerticalLeft = $this->adsRepo->findOneBy(['name' => 'wall-vertical-left']);
        if (!$wallVerticalLeft) {
            $ad = new Advertisement();
            $ad->setName('wall-vertical-left');
            $ad->setAdsense('   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                        <!-- wall desktop vertical -->
                        <ins class="adsbygoogle"
                        style="display:inline-block;width:120px;height:700px"
                        data-ad-client="ca-pub-5159051873786027"
                        data-ad-slot="1365530676"></ins>
                        <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }

    public function prepareWallHorizontal()
    {

        $wallHorizontal = $this->adsRepo->findOneBy(['name' => 'wall-horizontal']);
        if (!$wallHorizontal) {
            $ad = new Advertisement();
            $ad->setName('wall-horizontal');
            $ad->setAdsense('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- wall horizontal -->
         <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5159051873786027"
             data-ad-slot="9910945548"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }


    public function prepareFakePost()
    {
        $wallFakePost = $this->adsRepo->findOneBy(['name' => 'wall-fake-post']);
        if (!$wallFakePost) {
            $ad = new Advertisement();
            $ad->setName('wall-fake-post');
            $ad->setAdsense('   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- wall fake post -->
            <ins class="adsbygoogle"
                  style="display:block"
         data-ad-client="ca-pub-5159051873786027"
         data-ad-slot="2092999427"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>');
            $this->em->persist($ad);
            $this->em->flush();
        }
    }
}
