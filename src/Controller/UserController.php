<?php

namespace App\Controller;

use App\Entity\Notification;
use App\Entity\Post;
use App\Helper\PaginatorHelper;
use App\Helper\UserHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends BaseSiteController
{

    /**
     * @Route("/przypomnij-haslo/{token}", name="user_forgot-password")
     */
    public function forgotPassword($token, Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = $this->getRepository(User::class)->findOneBy(['tokenChangePassword' => $token]);

        $errors['changePassword'] = '';

        if ($user && ($user->getTokenChangePasswordExpired() >= new \DateTime('now'))) {
            if ($request->isMethod('POST')) {
                $newPassword = $request->request->get('newPassword');
                $newPasswordRepeat = $request->get('newPasswordRepeat');


                if ($newPasswordRepeat != $newPassword) {
                    $errors['changePassword'] = "Podane hasła nie są takie same";
                }
                if (strlen($newPassword) < 5) {
                    $errors['changePassword'] = "Nowe hasło musi mieć conajmniej 5 znaków";
                }

                if ((strlen($newPassword)) == 0 || (strlen($newPasswordRepeat) == 0)) {
                    $errors['changePassword'] = "Wypełnij wszystkie pola";
                }

                if (strlen($errors['changePassword']) == 0) {
                    $encoded = $passwordEncoder->encodePassword($user, $newPassword);
                    $user->setPassword($encoded);
                    $this->saveEntityInDB($user);
                    $errors['changePasswordSuccess'] = "Twoje hasło zostało zmienione. Teraz może się zalogować!";
                }
            }

        } else {
            $errors['changePassword'] = "Link potwierdzający zmianę adresu email jest niepoprawny lub wygasł";
        }

        $viewParameters = [
            'errors' => $errors
        ];
        return $this->render('user/forgot-password.html.twig',
            $viewParameters
        );
    }

    /**
     * @Route("/profil/{id}/{username}/{subpage}/{page}", methods={"GET","POST"}, name="user_profile", requirements={"id"="\d+"})
     */
    public function profil(User $user, $username, $subpage, $page = 1, PaginatorHelper $paginatorHelper, Request $request, UserHelper $userHelper)
    {
        $errors = [];
        if ($request->isMethod('POST')) {
            $errors = $userHelper->updateProfileSetting($request);
        }
        $paginate =[];

        $userOwner = $this->getUser();
        if ($subpage == 'dodane') {
            $query = $this->getRepository(Post::class)->queryFindAllByAuthor($user);
            $paginate = $paginatorHelper->paginate($query, $page, 15, ['id' => $user->getId(),'username' => $user->getUsername(), 'subpage' => 'dodane']);
        } else if ($subpage == 'polubione') {
            $query = $this->getRepository(Post::class)->queryFindAllByAuthorAndVoted($user);
            $paginate = $paginatorHelper->paginate($query, $page, 15, ['id' => $user->getId(),'username' => $user->getUsername(), 'subpage' => 'pulubione']);
        } else if ($subpage == 'powiadomienia') {
            $query = $this->getRepository(Notification::class)->queryFindAllByAuthor($user);
            $paginate = $paginatorHelper->paginate($query, $page, 15, ['id' => $user->getId(),'username' => $user->getUsername(), 'subpage' => 'powiadomienia']);
        }

        $viewParameters = [
            'subpage' => $subpage,
            'errors' => $errors,
            'user' => $user,
            'paginate' => $paginate,
            'isOwner' => $user && $userOwner && $user->getId() == $userOwner->getId() ? true : false
        ];

        return $this->render('user/profile.html.twig',
            $viewParameters
        );
    }


    /**
     * @Route("/zmiana-maila/{token}", name="user_change-mail")
     */
    public function changeMail($token)
    {
        $msg = "Link potwierdzający zmianę adresu email jest niepoprawny lub wygasł";
        $user = $this->getRepository(User::class)->findOneBy(['tokenChangeEmail' => $token]);

        if ($user && ($user->getTokenChangeEmailExpired() >= new \DateTime('now'))) {

            $user->setEmail($user->getChangeEmail());
            $user->setChangeEmail('');
            $user->setTokenChangeEmailExpired(new \DateTime('1970-12-11'));
            $user->setTokenChangeEmail('');
            $this->saveEntityInDB($user);
            $msg = "Adres email został zmieniony";
        }

        $viewParameters = [
            'user' => $user,
            'msg' => $msg
        ];

        return $this->render('user/changed-mail.html.twig',
            $viewParameters
        );
    }

    /**
     * @Route("/potwierdz-mail/{token}", name="user_register-mail")
     */
    public function registerMail($token)
    {
        $msg = "Link potwierdzający adres email jest niepoprawny lub wygasł";
        $user = $this->getRepository(User::class)->findOneBy(['tokenRegisterEmail' => $token]);

        if ($user && $user->getIsConfirmEmail() == false) {

            $user->setIsConfirmEmail(true);
            $user->setTokenRegisterEmail('');
            $msg = "Twój adres został potwierdzony!";
            $this->em->persist($user);
            $this->em->flush();
        }

        $viewParameters = [
            'user' => $user,
            'msg' => $msg
        ];

        return $this->render('user/message.html.twig',
            $viewParameters
        );
    }
}
