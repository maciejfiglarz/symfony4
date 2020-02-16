<?php
namespace App\Security;


use App\Entity\User;
use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\EntityUserProvider;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;

class MyEntityUserProvider extends EntityUserProvider {

//    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
//    {
//        $resourceOwnerName = $response->getResourceOwner()->getName();
//
//        if (!isset($this->properties[$resourceOwnerName])) {
//            throw new \RuntimeException(sprintf("No property defined for entity for resource owner '%s'.", $resourceOwnerName));
//        }
//
//        $username = $response->getUsername();
//        if (null === $user = $this->findUser(array($this->properties[$resourceOwnerName] => $username))) {
//            $user = new User();
//            $user->setEmail($response->getEmail());
//            $user->setUsername($response->getFirstName() . $response->getLastName());
//
//            $user->setFacebookId($username);
//            $user->setFacebookAccessToken($response->getAccessToken());
//            $this->em->persist($user);
//            $this->em->flush();
//            return $user;
//        }
//        $user->setFacebookAccessToken($response->getAccessToken());
//        return $user;
//    }
    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        $resourceOwnerName = $response->getResourceOwner()->getName();
        if (!isset($this->properties[$resourceOwnerName])) {
            throw new \RuntimeException(sprintf("No property defined for entity for resource owner '%s'.", $resourceOwnerName));
        }
        $serviceName = $response->getResourceOwner()->getName();
        $setterId = 'set'. ucfirst($serviceName) . 'ID';
        $setterAccessToken = 'set'. ucfirst($serviceName) . 'AccessToken';

        // unique integer
        $username = $response->getUsername();
//        dd($resourceOwnerName,$this->properties[$resourceOwnerName], $username,$this->findUser(array($this->properties[$resourceOwnerName] => $username)));
        if (null === $user = $this->findUser(array($this->properties[$resourceOwnerName] => $username))) {

            $user = new User();
            $user->setEmail($response->getEmail());
            $user->setUsername($response->getFirstName() . $response->getLastName());
            $user->setFacebookID($username);
//            $user->$setterId($username);
            $user->setRoles(['ROLE_USER']);
//            $user->$setterAccessToken($response->getAccessToken());
            $user->setFacebookAccessToken($response->getAccessToken());
            $this->em->persist($user);
            $this->em->flush();
           // dd('xx',$user);
            return $user;
        }

        return $user;
    }
    /**
     * Connects the response to the user object.
     *
     * @param UserInterface $user The user object
     * @param UserResponseInterface $response The oauth response
     */
    public function connect(UserInterface $user, UserResponseInterface $response)
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Expected an instance of App\Model\User, but got "%s".', get_class($user)));
        }
        $property = $this->getProperty($response);
        $username = $response->getUsername();
        if (null !== $previousUser = $this->registry->getRepository(User::class)->findOneBy(array($property => $username))) {
            // 'disconnect' previously connected users
            $this->disconnect($previousUser, $response);
        }
        $serviceName = $response->getResourceOwner()->getName();
        $setter = 'set'. ucfirst($serviceName) . 'AccessToken';
        $user->$setter($response->getAccessToken());
        $this->updateUser($user, $response);
    }

    /**
     * ##STOLEN#
     * Gets the property for the response.
     *
     * @param UserResponseInterface $response
     *
     * @return string
     *
     * @throws \RuntimeException
     */
    protected function getProperty(UserResponseInterface $response)
    {
        $resourceOwnerName = $response->getResourceOwner()->getName();
        if (!isset($this->properties[$resourceOwnerName])) {
            throw new \RuntimeException(sprintf("No property defined for entity for resource owner '%s'.", $resourceOwnerName));
        }
        return $this->properties[$resourceOwnerName];
    }
    /**
     * Disconnects a user.
     *
     * @param UserInterface $user
     * @param UserResponseInterface $response
     * @throws \TypeError
     */
    public function disconnect(UserInterface $user, UserResponseInterface $response)
    {
        $property = $this->getProperty($response);
        $accessor = PropertyAccess::createPropertyAccessor();
        $accessor->setValue($user, $property, null);
        $this->updateUser($user, $response);
    }
    /**
     * Update the user and persist the changes to the database.
     * @param UserInterface $user
     * @param UserResponseInterface $response
     */
    private function updateUser(UserInterface $user, UserResponseInterface $response)
    {
        $user->setEmail($response->getEmail());
        // TODO: Add more fields?!
        $this->em->persist($user);
        $this->em->flush();
    }
}