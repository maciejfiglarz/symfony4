<?php


namespace App\Helper;

use App\Entity\TemponaryImage;
use App\Entity\Setting;

use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;


use Doctrine\ORM\EntityManagerInterface;

class SettingHelper
{

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->settingRepo = $em->getRepository(Setting::class);
    }

    public function displaySetting($name)
    {
        $setting = $this->em->getRepository(Setting::class)->findOneBy(['name' => $name]);
        if ($setting) {
            return $setting->getValue();
        }
        return $setting;
    }

    public function getAppName()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'app-name']);
        if ($setting) {
            return $setting->getValue();
        }
        return null;
    }

    public function getAppDomain()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'app-domain']);
        if ($setting) {
            return $setting->getValue();
        }
        return null;
    }

    public function getFacebookID()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'facebook-id']);
        if ($setting) {
            return $setting->getValue();
        }
        return null;
    }

    public function prepareDefaultSetting()
    {
        $this->prepareSectionHead();
        $this->prepareSectionBodyTop();
        $this->prepareStatute();
        $this->preparePolicyPrivacy();
        $this->prepareCustomCss();
        $this->prepareAppName();
        $this->prepareAppDomain();
        $this->prepareSectionBodyBottom();
        $this->prepareFacebookID();
        $this->prepareDefaultMetaTagsTitle();
        $this->prepareDefaultMetaTagsDescription();
        $this->prepareColorPrimaryRGB();
        $this->prepareCollaboration();
        $this->prepareYoutubeOffer();
        $this->prepareGoodPractise();
    }

    public function prepareYoutubeOffer()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'youtube-offer']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('youtube-offer');
            $setting->setValue('offer');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareCollaboration()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'collaboration']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('collaboration');
            $setting->setValue('  Pamiętaj, że na naszej stronie masz możliwość dodawania postów i tworzenia grafik');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }


    public function prepareGoodPractise()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'good-practise']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('good-practise');
            $setting->setValue('Dobre praktyki');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareColorPrimaryRGB()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'color-primary-rbg']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('color-primary-rbg');
            $setting->setValue('214-28-0');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareDefaultMetaTagsTitle()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'default-meta-tags-title']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('default-meta-tags-title');
            $setting->setValue('Ciekawe.online - najciekawsza strona w internecie!');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }


    public function prepareDefaultMetaTagsDescription()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'default-meta-tags-description']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('default-meta-tags-description');
            $setting->setValue('Ciekawe.online - najciekawsza strona w internecie!');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareFacebookID()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'facebook-id']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('facebook-id');
            $setting->setValue('2074756775960224');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareAppName()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'app-name']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('app-name');
            $setting->setValue('ciekawe');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareAppDomain()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'app-domain']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('app-domain');
            $setting->setValue('.online');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }


    public function prepareCustomCss()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'custom-css']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('custom-css');
            $setting->setValue('
            :root {

   --border-color: #dddddd;

   --color-primary: #ff5818;
   --color-primary-hover: #eb490b;

   --color-secondary: #fd4600;
   --color-secondary-hover: #e6a905;

   --color-background-dark : #1f1f1f;
   --color-background:#262626;
   --color-background-light: #333333;
   --color-background-light-hover:#2f2f2f;

   --color-error: #c9000f;
   --color-success: #009542;

   --color-text-main: white;
   --color-text-bright: #acacac;

   --color-bright-action: #575757;
   --color-bright-action-hover: #8a8a8a;

   --color-link-primary: #acacac;
   --color-link-primary-hover:  white;

   --color-link-secondary: #e1e1e1;
   --color-link-secondary-hover: white;
   --color-selected: #ed541a;


}

            ');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function preparePolicyPrivacy()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'policy-privacy']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('policy-privacy');
            $setting->setValue('policy privacy');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareSectionBodyTop()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'section-body-top']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('section-body-top');
            $setting->setValue('<div id="fb-root"></div>
            <script async crossorigin="anonymous" defer
         src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.3&appId=2074756775960224&autoLogAppEvents=1"></script>');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareSectionBodyBottom()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'section-body-bottom']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('section-body-bottom');
            $setting->setValue('
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154621050-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag(\'js\', new Date());
        gtag(\'config\', \'UA-154621050-1\');
    </script>
    <script data-ad-client="ca-pub-5159051873786027" async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
         ');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }

    public function prepareStatute()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'statute']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('statute');
            $setting->setValue('statute');
            $this->em->persist($setting);
            $this->em->flush();
        }

    }

    public function prepareSectionHead()
    {
        $setting = $this->settingRepo->findOneBy(['name' => 'section-head']);
        if (!$setting) {
            $setting = new Setting();
            $setting->setName('section-head');
            $setting->setValue('    

    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:800&display=swap" rel="stylesheet">');
            $this->em->persist($setting);
            $this->em->flush();
        }
    }
}
