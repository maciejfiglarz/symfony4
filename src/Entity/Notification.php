<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NotificationRepository")
 */
class Notification
{
    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="notifications")
     */
    private $userMark;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="notifications")
     */
    private $userMarked;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isComment = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isAddedFirst = false;

     /**
     * @ORM\Column(type="boolean")
     */
    private $isActive = true;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="notifications")
     */
    private $post;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comment", inversedBy="notifications")
     */
    private $comment;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserMark(): ?User
    {
        return $this->userMark;
    }

    public function setUserMark(?User $userMark): self
    {
        $this->userMark = $userMark;

        return $this;
    }

    public function getUserMarked(): ?User
    {
        return $this->userMarked;
    }

    public function setUserMarked(?User $userMarked): self
    {
        $this->userMarked = $userMarked;

        return $this;
    }

    public function getIsComment(): ?bool
    {
        return $this->isComment;
    }

    public function setIsComment(bool $isComment): self
    {
        $this->isComment = $isComment;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

        return $this;
    }

    public function getComment(): ?Comment
    {
        return $this->comment;
    }

    public function setComment(?Comment $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getIsAddedFirst(): ?bool
    {
        return $this->isAddedFirst;
    }

    public function setIsAddedFirst(bool $isAddedFirst): self
    {
        $this->isAddedFirst = $isAddedFirst;

        return $this;
    }
}
