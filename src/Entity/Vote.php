<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VoteRepository")
 */
class Vote
{
    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="post")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="votes")
     */
    private $post;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isVoteUp = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isVoteDown = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

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

    public function getIsVoteUp(): ?bool
    {
        return $this->isVoteUp;
    }

    public function setIsVoteUp(bool $isVoteUp): self
    {
        $this->isVoteUp = $isVoteUp;

        return $this;
    }

    public function getIsVoteDown(): ?bool
    {
        return $this->isVoteDown;
    }

    public function setIsVoteDown(bool $isVoteDown): self
    {
        $this->isVoteDown = $isVoteDown;

        return $this;
    }
}
