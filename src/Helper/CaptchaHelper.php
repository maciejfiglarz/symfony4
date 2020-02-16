<?php

namespace App\Helper;

use App\Entity\Setting;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;
use App\Entity\User;

class CaptchaHelper
{
    private $targetPublicDirectory;

    public function __construct($targetPublicDirectory, $fonts, SessionInterface $session, EntityManagerInterface $em)
    {
        $this->targetPublicDirectory = $targetPublicDirectory . '/upload/captcha/';
        $this->fonts = $fonts;
        $this->session = $session;
        $this->em = $em;
    }

    public function createCaptchaImage()
    {

        $number = (string)$this->session->get('captcha');

        $image = imagecreate(80, 40) or die('GD FAIL');
        $bg = imagecolorallocate($image, 31, 31, 31);
        $image = $this->drawRandomLine($image);
        $image = $this->drawRandomLine($image);
        $image = $this->drawRandomLine($image);
        $image = $this->drawRandomLine($image);

        if (isset($number[0])) {
            $image = $this->drawTextForCaptcha($image, $number[0]);
        }
        if (isset($number[1])) {
            $image = $this->drawTextForCaptcha($image, $number[1], true);
        }
        imagepng($image, $this->targetPublicDirectory . $number . '.png');

        return '/upload/captcha/' . $number . '.png';

    }

    private function drawRandomLine($image)
    {
        $color = $this->getColor();
        $randomAngle = rand(0, 100);
        $randomAngle = $randomAngle % 2 == 0 ? $randomAngle * -1 : $randomAngle;
        $txtcol = imagecolorallocate($image, $color['red'], $color['green'], $color['blue']);
        $x = rand(0, 80);
        $y = rand(0, 40);
        $txt = '-';
        imagettftext($image, 15, $randomAngle, $x, $y, $txtcol, $this->fonts . '/Roboto-Regular.ttf', $txt);
        return $image;
    }

    private function drawTextForCaptcha($image, $txt, $second = false)
    {
        $color = $this->getColor();
        $randomAngle = rand(0, 25);
        $randomAngle = $randomAngle % 2 == 0 ? $randomAngle * -1 : $randomAngle;
        $txtcol = imagecolorallocate($image, $color['red'], $color['green'], $color['blue']);
        $x = $second ? 50 : 17;
        imagettftext($image, 15, $randomAngle, $x, 26, $txtcol, $this->fonts . '/Roboto-Regular.ttf', $txt);
        return $image;
    }

    public function getColor()
    {

        $setting = $this->em->getRepository(Setting::class)->findOneBy(['name' => 'color-primary-rbg']);
        $value = $setting->getValue();
//        list($red, $green, $blue) = split('[/.-]', $value);
        $values = explode('-', $value);

        return ['red' => $values[0], 'green' => $values[1], 'blue' => $values[2]];
    }
}
