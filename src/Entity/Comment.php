<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 */
class Comment
{
    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="comments")
     */
    private $author;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="comments",cascade={"persist", "remove"})
     */
    private $post;

        /**
     * @ORM\Column(type="boolean")
     */
    private $isDeleted = false;
        /**
     * @ORM\Column(type="boolean")
     */
    private $isBan = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isHide = false;
           /**
     * @ORM\Column(type="boolean")
     */
    private $isReply = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comment", inversedBy="comments",cascade={"persist","remove"})
     */
    private $replyComment;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="replyComment",cascade={"persist","remove"})
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="comment")
     */
    private $notifications;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteComment", mappedBy="comment")
     */
    private $voteComments;
    /**
     * @ORM\Column(type="integer")
     */
    private $voteUp = 0;
    /**
     * @ORM\Column(type="integer")
     */
    private $voteDown = 0;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Report", mappedBy="comment")
     */
    private $reports;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->voteComments = new ArrayCollection();
        $this->reports = new ArrayCollection();
    }

    public function getVoteValue(){
        return $this->getVoteUp() - $this->getVoteDown();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(?string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

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

    public function getIsDeleted(): ?bool
    {
        return $this->isDeleted;
    }

    public function setIsDeleted(bool $isDeleted): self
    {
        $this->isDeleted = $isDeleted;

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

    public function getReplyComment(): ?self
    {
        return $this->replyComment;
    }

    public function setReplyComment(?self $replyComment): self
    {
        $this->replyComment = $replyComment;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(self $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setReplyComment($this);
        }

        return $this;
    }

    public function removeComment(self $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getReplyComment() === $this) {
                $comment->setReplyComment(null);
            }
        }

        return $this;
    }

    public function getIsReply(): ?bool
    {
        return $this->isReply;
    }

    public function setIsReply(bool $isReply): self
    {
        $this->isReply = $isReply;

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
            $notification->setComment($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->contains($notification)) {
            $this->notifications->removeElement($notification);
            // set the owning side to null (unless already changed)
            if ($notification->getComment() === $this) {
                $notification->setComment(null);
            }
        }

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
            $voteComment->setComment($this);
        }

        return $this;
    }

    public function removeVoteComment(VoteComment $voteComment): self
    {
        if ($this->voteComments->contains($voteComment)) {
            $this->voteComments->removeElement($voteComment);
            // set the owning side to null (unless already changed)
            if ($voteComment->getComment() === $this) {
                $voteComment->setComment(null);
            }
        }

        return $this;
    }

    public function getVoteUp(): ?int
    {
        return $this->voteUp;
    }

    public function setVoteUp(int $voteUp): self
    {
        $this->voteUp = $voteUp;

        return $this;
    }

    public function getVoteDown(): ?int
    {
        return $this->voteDown;
    }

    public function setVoteDown(int $voteDown): self
    {
        $this->voteDown = $voteDown;

        return $this;
    }

    public function getIsHide(): ?bool
    {
        return $this->isHide;
    }

    public function setIsHide(bool $isHide): self
    {
        $this->isHide = $isHide;

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
            $report->setComment($this);
        }

        return $this;
    }

    public function removeReport(Report $report): self
    {
        if ($this->reports->contains($report)) {
            $this->reports->removeElement($report);
            // set the owning side to null (unless already changed)
            if ($report->getComment() === $this) {
                $report->setComment(null);
            }
        }

        return $this;
    }
}
