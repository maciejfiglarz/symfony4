<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/zaloguj-sie", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }


    /**
     * @Route("/login-succes", methods={"GET","POST"}, name="app_login-success")
     */
    public function loginSucces()
    {


        if ($this->isGranted('ROLE_ADMIN')) {

            return $this->redirect($this->generateUrl('admin'));

        } elseif ($this->isGranted('ROLE_USER')) {

            return $this->redirect($this->generateUrl('index'));

        } else {

            return $this->redirect($this->generateUrl('index'));

        }
    }



    /**
     * @Route("/logout", methods={"GET"}, name="logout")
     */
    public function logout()
    {
        throw new \Exception('Will be intercepted before getting here');
    }
}
