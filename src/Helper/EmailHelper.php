<?php


namespace App\Helper;

use App\Entity\GroupTravelOrder;
use App\Entity\ExcursionOrder;
use App\Entity\Customer;
use App\Entity\Setting;
use App\Entity\User;

use App\Helper\GroupTravelOrderHelper;

use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Environment;

class EmailHelper
{
    protected $template;
    protected $em;
    protected $mailer;

    public function __construct(
        EntityManagerInterface $em,
        \Swift_Mailer $mailer,
        Environment $template
    )
    {
        $this->em = $em;
        $this->emailFrom = 'automat@ciekawe.online';
        $this->emailTo = '';
        $this->mailer = $mailer;
        $this->template = $template;
    }

    public function testMail(){
        $emailTo = 'maciejfiglarz333@gmail.com';
        $params = [];
        $this->send('Test', $emailTo, '_test', $params);
    }

    public function sendRegisterEmail($user){
        $emailTo = $user->getEmail();
        $params = ['user' => $user];
        $this->send('Zapomniałem hasła', $emailTo, '_register-email', $params);
    }

    public function sendForgotPassword($user){
        if($user){
            $emailTo = $user->getEmail();
            $params = ['user' => $user];
            $this->send('Potwierdz mail', $emailTo, '_forgot-password', $params);
        }

    }

    public function sendChangeEmailMsg($user)
    {

        $emailTo = $user->getEmail();
        $params = ['user' => $user];
        $this->send('Zmiana adresu email', $emailTo, '_change-email', $params);
    }

    public function send(?string $title, ?string $emailTo, ?string $schemePartial, ?array $params)
    {

        $url = $this->getSchemeUrl($schemePartial);
        $message = (new \Swift_Message($title))
            ->setFrom($this->emailFrom)
            ->setTo($emailTo)
            ->setBody(
                $this->templateRender($url, $params),
                'text/html'
            );

       $this->mailer->send($message);
    }

    public function getSchemeUrl(?string $name): string
    {
        return '_partials/email/' . $name . '.html.twig';
    }

    public function templateRender(string $name, array $context = array())
    {
        return $this->template->render($name, $context);
    }


}
