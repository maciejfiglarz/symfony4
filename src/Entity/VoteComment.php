<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VoteCommentRepository")
 */
class VoteComment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="voteComments")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comment", inversedBy="voteComments")
     */
    private $comment;

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

    public function getComment(): ?Comment
    {
        return $this->comment;
    }

    public function setComment(?Comment $comment): self
    {
        $this->comment = $comment;

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
