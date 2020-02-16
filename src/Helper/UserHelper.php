<?php


namespace App\Helper;

use App\Entity\User;


use Symfony\Component\HttpFoundation\RequestStack;
use App\Helper\RequestHelper;
use App\Helper\ValidationHelper;
use App\Helper\FileHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\Customer;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Twig\Token;

class UserHelper
{


    public function __construct(
        ValidationHelper $validationHelper,
        EntityManagerInterface $em,
        UserPasswordEncoderInterface $passwordEncoder,
        Security $security,
        SessionInterface $session,
        FileHelper $fileHelper,
        TokenHelper $tokenHelper,
        EmailHelper $emailHelper
    )
    {
        $this->validationHelper = $validationHelper;
        $this->em = $em;
        $this->userRepository = $em->getRepository(User::class);
        $this->passwordEncoder = $passwordEncoder;
        $this->security = $security;
        $this->session = $session;
        $this->fileHelper = $fileHelper;
        $this->tokenHelper = $tokenHelper;
        $this->emailHelper = $emailHelper;
    }

    public function getUser()
    {
        return $this->security->getUser();
    }

    public function isLogged()
    {
        if ($this->security->getUser()) {
            return true;
        }
        return false;
    }

    public function isFacebookConfirmUsername()
    {
        $user = $this->getUser();
        if ($user && $user->getFacebookID() && $user->getIsFacebookConfirmUsername() == false) {

            return true;
        }
        return false;
    }

    public function updateProfileSetting($request)
    {
        $user = $this->getUser();

        $errors['changeEmail'] = '';

        if ($request->request->get('submit') == 'Zmień email') {
            $password = $request->request->get('passwordEmail');
            $newEmail = $request->request->get('newEmail');
            $repeatEmail = $request->request->get('repeatEmail');

            if (!$this->passwordEncoder->isPasswordValid($user, $password)) {
                $errors['changeEmail'] = "Podane hasło do konta jest nieprawidłowe";
            }
            if ($newEmail != $repeatEmail) {
                $errors['changeEmail'] = "Podane adresy email nie pasują do siebie";
            }
            if ($newEmail == $user->getEmail()) {
                $errors['changeEmail'] = "Aktualny email jest taki sam";
            }
            if ((strlen($newEmail)) == 0 || (strlen($repeatEmail) == 0) || (strlen($password) == 0)) {
                $errors['changeEmail'] = "Wypełnij wszystkie pola";
            }
            if (strlen($errors['changeEmail']) == 0) {
                $user->setChangeEmail($newEmail);
                $user->setTokenChangeEmail($this->tokenHelper->generateTokenForChangeMail());
                $user->setTokenChangeEmailExpired($this->getDateExpired());
                $this->saveInDB($user);
                $this->emailHelper->sendChangeEmailMsg($user);
                $errors['changeEmailSuccess'] = "Na Twój nowy adres email wysłaliśmy link aktywacyjny, który musisz kliknąć, aby potwiedzić zmianę adresu";
            }

        }
        if ($request->request->get('submit') == 'Zmień hasło') {

            $errors['changePassword'] = '';
            $newPassword = $request->request->get('newPassword');
            $newPasswordRepeat = $request->request->get('newPasswordRepeat');
            $oldPassword = $request->request->get('oldPassword');

            if (!$this->passwordEncoder->isPasswordValid($user, $oldPassword)) {
                $errors['changePassword'] = "Aktualne hasło do konta jest niepoprawne";
            }
            if ($newPasswordRepeat != $newPassword) {
                $errors['changePassword'] = "Podane hasła nie są takie same";
            }
            if (strlen($newPassword) < 5) {
                $errors['changePassword'] = "Nowe hasło musi mieć conajmniej 5 znaków";
            }

            if ((strlen($newPassword)) == 0 || (strlen($newPasswordRepeat) == 0) || (strlen($oldPassword) == 0)) {
                $errors['changePassword'] = "Wypełnij wszystkie pola";
            }

            if (strlen($errors['changePassword']) == 0) {
                $encoded = $this->passwordEncoder->encodePassword($user, $newPassword);
                $user->setPassword($encoded);
                $this->saveInDB($user);
                $errors['changePasswordSuccess'] = "Twoje hasło zostało zmienione";
            }

        }

        if ($request->request->get('submit') == 'Ustaw avatar') {

            $avatarFile = $request->files->get('avatarFile') ? $request->files->get('avatarFile') : false;
            $errors['uploadAvatar'] = '';
            if ($avatarFile) {
                $extension = $avatarFile->getClientOriginalExtension();

                if (!$this->fileHelper->isValidFileSize($avatarFile, 5.05)) {
                    $errors['uploadAvatar'] = "Zdjęcie jest za duże";
                }

                if ($extension != 'png' && $extension != 'jpg' && $extension = 'jpeg') {
                    $errors['uploadAvatar'] = "Plik musi mieć rozszerzenie jpg lub png";
                }

                if (strlen($errors['uploadAvatar']) == 0) {
                    $this->fileHelper->upload($avatarFile, User::FILES_AVATAR_LOCATION, $user->getId());
                    $user->setExtensionAvatar($this->fileHelper->getExtension());
                    $this->saveInDB($user);
                }

            }
        }
        return $errors;
    }

    public function getAvatarUrl(): ?string
    {
        $user = $this->security->getUser();
        return $user->getAvatarUrl();
    }

    public function getEmptyAvatarUrl()
    {
        return 'build/images/empty_avatar.jpg';
    }

    public function getUsername(): ?string
    {
        $user = $this->security->getUser();
        if ($user) {
            if ($user->getUsername()) {
                return $user->getUsername();
            }

        }

        return false;
    }

    public function getCreatedAt($string = null)
    {
        $user = $this->security->getUser();
        if ($user) {

            if ($user->getCreatedAt()) {
                if ($string) {
                    return $user->getCreatedAt()->format('Y-m-d');
                }
                return $user->getCreatedAt();
            }

        }

        return false;
    }

    public function getVoteIfVotedPost($id)
    {
        $user = $this->getUser();
        if ($user) {
            foreach ($user->getVotes() as $vote) {
                if ($vote->getPost()->getId() == $id) {
                    return $vote;
                }
            }
        }
        return null;
    }


    public function getVoteCommentIfVotedComment($id)
    {
        $user = $this->getUser();
        if ($user) {
            foreach ($user->getVoteComments() as $voteComment) {
                if ($voteComment->getComment()->getId() == $id) {
                    return $voteComment;
                }
            }
        }
        return null;
    }


    public function isGranted($role)
    {
        return $this->security->isGranted($role);
    }


    private function getDateExpired($string = false)
    {
        $date = new \DateTime('now');
        return $date->modify('+7 day');

    }

    private function saveInDB($entity)
    {
        $this->em->persist($entity);
        $this->em->flush();
    }
}
