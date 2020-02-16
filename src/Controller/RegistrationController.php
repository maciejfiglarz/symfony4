<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Helper\EmailHelper;
use App\Helper\TokenHelper;
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;


class RegistrationController extends BaseSiteController
{


    /**
     * @Route("/zaloz-konto", name="register")
     */
    public function register(Request $request,
                             UserPasswordEncoderInterface $passwordEncoder,
                             GuardAuthenticatorHandler $guardHandler,
                             LoginFormAuthenticator $authenticator,
                             EmailHelper $emailHelper,
                             TokenHelper $tokenHelper
                             ): Response
    {


        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);
        $error = '';


        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $user->setRoles(['ROLE_USER']);
            $user->setTokenRegisterEmail($tokenHelper->generateTokenForRegisterEmail());
            $emailHelper->sendRegisterEmail($user);

            $this->em->persist($user);
            $this->em->flush();

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }

        $viewParameters = [
            'form' => $form->createView(),
            'error' => $error,
        ];

        return $this->render('registration/register.html.twig', $viewParameters);
    }
}
