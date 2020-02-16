<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReportRepository")
 */
class Report
{
    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="boolean")
     */
    private $isStatuteBreak = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isSpam = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isDrasticOrPorn = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isInsult = false;
    /**
     * @ORM\Column(type="text")
     */
    private $other;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="reports")
     */
    private $user;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isRead = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="reports")
     */
    private $post;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comment", inversedBy="reports")
     */
    private $comment;


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

    public function getIsRead(): ?bool
    {
        return $this->isRead;
    }

    public function setIsRead(bool $isRead): self
    {
        $this->isRead = $isRead;

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



    public function getIsStatuteBreak(): ?bool
    {
        return $this->isStatuteBreak;
    }

    public function setIsStatuteBreak(bool $isStatuteBreak): self
    {
        $this->isStatuteBreak = $isStatuteBreak;

        return $this;
    }

    public function getIsSpam(): ?bool
    {
        return $this->isSpam;
    }

    public function setIsSpam(bool $isSpam): self
    {
        $this->isSpam = $isSpam;

        return $this;
    }

    public function getIsDrasticOrPorn(): ?bool
    {
        return $this->isDrasticOrPorn;
    }

    public function setIsDrasticOrPorn(bool $isDrasticOrPorn): self
    {
        $this->isDrasticOrPorn = $isDrasticOrPorn;

        return $this;
    }

    public function getIsInsult(): ?bool
    {
        return $this->isInsult;
    }

    public function setIsInsult(bool $isInsult): self
    {
        $this->isInsult = $isInsult;

        return $this;
    }

    public function getOther(): ?string
    {
        return $this->other;
    }

    public function setOther(string $other): self
    {
        $this->other = $other;

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

}
