<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields="email", message="Ten email jest zajęty")
 * @UniqueEntity(fields="username", message="Ten użytkownik jest zajęty")
 */
class User implements UserInterface, \Serializable
{
    const FILES_AVATAR_LOCATION = "/upload/avatar/";
    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank(message="Musisz wybrać e-mail")
     * @Assert\Email(message = "Podany email jest niepoprawny")
     */
    private $email;
    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Assert\NotBlank(message="Musisz wybrać nazwę użytkownika")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "Twój username musi mieć conajmniej 3 znaki",
     *      maxMessage = "Twój username musi mieć maksimum 25 znaków"
     * )
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string",nullable=true)
     * @Assert\NotBlank(message="Musisz wybrać hasło")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "Hasło musi mieć conajmniej 5 znaki",
     *      maxMessage = "Hasło może mieć maksymalnie 20 znaków"
     * )
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $temponaryImage;
    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $extensionAvatar;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isBan = false;
    /**
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $isDeleted = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isAddedFirstPost = false;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Vote", mappedBy="user")
     */
    private $votes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Post", mappedBy="author")
     */
    private $posts;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="author")
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="userMark")
     */
    private $notifications;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tokenChangeEmail;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $changeEmail;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $tokenChangeEmailExpired;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isConfirmEmail = false;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tokenRegisterEmail;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Report", mappedBy="user")
     */
    private $reports;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $tokenChangePasswordExpired;
    /**
     * @ORM\Column(type="string", length=50,nullable=true)
     */
    private $tokenChangePassword;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteComment", mappedBy="user")
     */
    private $voteComments;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebookID;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebookAccessToken;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isFacebookConfirmUsername = false;


    public function __construct()
    {
        $this->votes = new ArrayCollection();
        $this->posts = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->reports = new ArrayCollection();
        $this->voteComments = new ArrayCollection();
    }

    public function getAvatarUrl()
    {
        $extensionAvatar = $this->getExtensionAvatar();
        if ($extensionAvatar) {
            return self::FILES_AVATAR_LOCATION . $this->getId() . '.' . $extensionAvatar;
        }

        return 'build/images/empty_avatar.jpg';
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function serialize()
    {
        return serialize([
            $this->id,
            $this->username,
            $this->email,
            $this->password
        ]);
    }

    public function unserialize($string)
    {
        list(
            $this->id,
            $this->username,
            $this->email,
            $this->password
        ) = unserialize($string, ['allowed_class' => false]);
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getIsDeleted(): ?bool
    {
        return $this->isDeleted;
    }

    public function setIsDeleted(bool $isDeleted): self
    {
        $this->isDeleted = $isDeleted;

        return $this;
    }

    public function getTemponaryImage(): ?string
    {
        return $this->temponaryImage;
    }

    public function setTemponaryImage(?string $temponaryImage): self
    {
        $this->temponaryImage = $temponaryImage;

        return $this;
    }

    public function getExtensionAvatar(): ?string
    {
        return $this->extensionAvatar;
    }

    public function setExtensionAvatar(?string $extensionAvatar): self
    {
        $this->extensionAvatar = $extensionAvatar;

        return $this;
    }

    /**
     * @return Collection|Vote[]
     */
    public function getVotes(): Collection
    {
        return $this->votes;
    }

    public function addVote(Vote $vote): self
    {
        if (!$this->votes->contains($vote)) {
            $this->votes[] = $vote;
            $vote->setUser($this);
        }

        return $this;
    }

    public function removeVote(Vote $vote): self
    {
        if ($this->votes->contains($vote)) {
            $this->votes->removeElement($vote);
            // set the owning side to null (unless already changed)
            if ($vote->getUser() === $this) {
                $vote->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Post[]
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setAuthor($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->contains($post)) {
            $this->posts->removeElement($post);
            // set the owning side to null (unless already changed)
            if ($post->getAuthor() === $this) {
                $post->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setAuthor($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getAuthor() === $this) {
                $comment->setAuthor(null);
            }
        }

        return $this;
    }

    public function getIsBan(): ?bool
    {
        return $this->isBan;
    }

    public function setIsBan(bool $isBan): self
    {
        $this->isBan = $isBan;

        return $this;
    }

    /**
     * @return Collection|Notification[]
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setUserMark($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->contains($notification)) {
            $this->notifications->removeElement($notification);
            // set the owning side to null (unless already changed)
            if ($notification->getUserMark() === $this) {
                $notification->setUserMark(null);
            }
        }

        return $this;
    }

    public function getTokenChangeEmail(): ?string
    {
        return $this->tokenChangeEmail;
    }

    public function setTokenChangeEmail(?string $tokenChangeEmail): self
    {
        $this->tokenChangeEmail = $tokenChangeEmail;

        return $this;
    }

    public function getChangeEmail(): ?string
    {
        return $this->changeEmail;
    }

    public function setChangeEmail(?string $changeEmail): self
    {
        $this->changeEmail = $changeEmail;

        return $this;
    }

    public function getTokenChangeEmailExpired(): ?\DateTimeInterface
    {
        return $this->tokenChangeEmailExpired;
    }

    public function setTokenChangeEmailExpired(\DateTimeInterface $tokenChangeEmailExpired): self
    {
        $this->tokenChangeEmailExpired = $tokenChangeEmailExpired;

        return $this;
    }

    /**
     * @return Collection|Report[]
     */
    public function getReports(): Collection
    {
        return $this->reports;
    }

    public function addReport(Report $report): self
    {
        if (!$this->reports->contains($report)) {
            $this->reports[] = $report;
            $report->setUser($this);
        }

        return $this;
    }

    public function removeReport(Report $report): self
    {
        if ($this->reports->contains($report)) {
            $this->reports->removeElement($report);
            // set the owning side to null (unless already changed)
            if ($report->getUser() === $this) {
                $report->setUser(null);
            }
        }

        return $this;
    }

    public function getTokenChangePasswordExpired(): ?\DateTimeInterface
    {
        return $this->tokenChangePasswordExpired;
    }

    public function setTokenChangePasswordExpired(?\DateTimeInterface $tokenChangePasswordExpired): self
    {
        $this->tokenChangePasswordExpired = $tokenChangePasswordExpired;

        return $this;
    }

    public function getTokenChangePassword(): ?string
    {
        return $this->tokenChangePassword;
    }

    public function setTokenChangePassword(?string $tokenChangePassword): self
    {
        $this->tokenChangePassword = $tokenChangePassword;

        return $this;
    }

    public function getIsConfirmEmail(): ?bool
    {
        return $this->isConfirmEmail;
    }

    public function setIsConfirmEmail(bool $isConfirmEmail): self
    {
        $this->isConfirmEmail = $isConfirmEmail;

        return $this;
    }

    public function getTokenRegisterEmail(): ?string
    {
        return $this->tokenRegisterEmail;
    }

    public function setTokenRegisterEmail(?string $tokenRegisterEmail): self
    {
        $this->tokenRegisterEmail = $tokenRegisterEmail;

        return $this;
    }

    /**
     * @return Collection|VoteComment[]
     */
    public function getVoteComments(): Collection
    {
        return $this->voteComments;
    }

    public function addVoteComment(VoteComment $voteComment): self
    {
        if (!$this->voteComments->contains($voteComment)) {
            $this->voteComments[] = $voteComment;
            $voteComment->setUser($this);
        }

        return $this;
    }

    public function removeVoteComment(VoteComment $voteComment): self
    {
        if ($this->voteComments->contains($voteComment)) {
            $this->voteComments->removeElement($voteComment);
            // set the owning side to null (unless already changed)
            if ($voteComment->getUser() === $this) {
                $voteComment->setUser(null);
            }
        }

        return $this;
    }


    public function getFacebookAccessToken(): ?string
    {
        return $this->facebookAccessToken;
    }

    public function setFacebookAccessToken(?string $facebookAccessToken): self
    {
        $this->facebookAccessToken = $facebookAccessToken;

        return $this;
    }

    public function getFacebookID(): ?string
    {
        return $this->facebookID;
    }

    public function setFacebookID(?string $facebookID): self
    {
        $this->facebookID = $facebookID;

        return $this;
    }

    public function getIsFacebookConfirmUsername(): ?bool
    {
        return $this->isFacebookConfirmUsername;
    }

    public function setIsFacebookConfirmUsername(bool $isFacebookConfirmUsername): self
    {
        $this->isFacebookConfirmUsername = $isFacebookConfirmUsername;

        return $this;
    }

    public function getIsAddedFirstPost(): ?bool
    {
        return $this->isAddedFirstPost;
    }

    public function setIsAddedFirstPost(bool $isAddedFirstPost): self
    {
        $this->isAddedFirstPost = $isAddedFirstPost;

        return $this;
    }
}
