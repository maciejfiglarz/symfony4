<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PostRepository")
 */
class Post
{
    const FILES_IMAGES_LOCATION = "/upload/post/";

    use TimestampableEntity;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $metaDescription;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaTitleFacebook;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $metaDescriptionFacebook;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;
    /**
     * @ORM\Column(type="string", length=355, nullable=true)
     */
    private $source;
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $extension;
    /**
     * @ORM\Column(type="integer")
     */
    private $views = 0;
    /**
     * @ORM\Column(type="integer")
     */
    private $voteUp = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $voteDown = 0;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isDeleted = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isHide = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isAccepted = false;

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(length=90, unique=false)
     */
    private $slug;
    /**
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $isImageFromDisc = false;

    /**
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $isImageFromLink = false;
    /**
     * @ORM\Column(type="boolean", nullable=false)
     */
    private $isYoutubeLink = false;
    /**
     * @ORM\Column(type="string",length=100)
     */
    private $youtubeID = '';
    /**
     * @ORM\Column(type="boolean")
     */
    private $isConfirm = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isGraphic = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isPost = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isWaitingRoom = true;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Category", mappedBy="post")
     */
    private $categories;
    /**
     * @ORM\Column(type="integer")
     */
    private $temponaryImageHeight = 0;
    /**
     * @ORM\Column(type="integer")
     */
    private $temponaryImageWidth = 0;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Vote", mappedBy="post")
     */
    private $votes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="posts")
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="post")
     */
    private $comments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Notification", mappedBy="post")
     */
    private $notifications;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Report", mappedBy="post")
     */
    private $reports;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Statistic", mappedBy="post")
     */
    private $statistics;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ranking", mappedBy="post")
     */
    private $rankings;


    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->votes = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->reports = new ArrayCollection();
        $this->statistics = new ArrayCollection();
        $this->rankings = new ArrayCollection();
    }

    public function getVoteValue(){
        return $this->getVoteUp() - $this->getVoteDown();
    }

    public function getImageUrl($type = false)
    {
        if (!$type) {
            return self::FILES_IMAGES_LOCATION . $this->getId() . '.' . $this->getExtension();
        } else {
            return self::FILES_IMAGES_LOCATION . $this->getId() . '-' . $type . '.' . $this->getExtension();
        }
    }

    public function isPostVoted($id)
    {
        $resultArray = [];
        foreach ($this->votes as $v) {
            $resultArray[$v->getPost()->getId()] = $v;
        }

        return array_key_exists($id, $resultArray) ? $resultArray{$id} : null;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(?string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }

    public function getViews(): ?int
    {
        return $this->views;
    }

    public function setViews(int $views): self
    {
        $this->views = $views;

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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getIsImageFromDisc(): ?bool
    {
        return $this->isImageFromDisc;
    }

    public function setIsImageFromDisc(bool $isImageFromDisc): self
    {
        $this->isImageFromDisc = $isImageFromDisc;

        return $this;
    }

    public function getIsImageFromLink(): ?bool
    {
        return $this->isImageFromLink;
    }

    public function setIsImageFromLink(bool $isImageFromLink): self
    {
        $this->isImageFromLink = $isImageFromLink;

        return $this;
    }

    public function getIsYoutubeLink(): ?bool
    {
        return $this->isYoutubeLink;
    }

    public function setIsYoutubeLink(bool $isYoutubeLink): self
    {
        $this->isYoutubeLink = $isYoutubeLink;

        return $this;
    }

    public function getYoutubeID(): ?string
    {
        return $this->youtubeID;
    }

    public function setYoutubeID(string $youtubeID): self
    {
        $this->youtubeID = $youtubeID;

        return $this;
    }

    public function getIsConfirm(): ?bool
    {
        return $this->isConfirm;
    }

    public function setIsConfirm(bool $isConfirm): self
    {
        $this->isConfirm = $isConfirm;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->setPost($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
            // set the owning side to null (unless already changed)
            if ($category->getPost() === $this) {
                $category->setPost(null);
            }
        }

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
            $vote->setPost($this);
        }

        return $this;
    }

    public function removeVote(Vote $vote): self
    {
        if ($this->votes->contains($vote)) {
            $this->votes->removeElement($vote);
            // set the owning side to null (unless already changed)
            if ($vote->getPost() === $this) {
                $vote->setPost(null);
            }
        }

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
            $comment->setPost($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getPost() === $this) {
                $comment->setPost(null);
            }
        }

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
            $notification->setPost($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->contains($notification)) {
            $this->notifications->removeElement($notification);
            // set the owning side to null (unless already changed)
            if ($notification->getPost() === $this) {
                $notification->setPost(null);
            }
        }

        return $this;
    }

    public function getIsGraphic(): ?bool
    {
        return $this->isGraphic;
    }

    public function setIsGraphic(bool $isGraphic): self
    {
        $this->isGraphic = $isGraphic;

        return $this;
    }

    public function getIsPost(): ?bool
    {
        return $this->isPost;
    }

    public function setIsPost(bool $isPost): self
    {
        $this->isPost = $isPost;

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
            $report->setPost($this);
        }

        return $this;
    }

    public function removeReport(Report $report): self
    {
        if ($this->reports->contains($report)) {
            $this->reports->removeElement($report);
            // set the owning side to null (unless already changed)
            if ($report->getPost() === $this) {
                $report->setPost(null);
            }
        }

        return $this;
    }

    public function getIsWaitingRoom(): ?bool
    {
        return $this->isWaitingRoom;
    }

    public function setIsWaitingRoom(bool $isWaitingRoom): self
    {
        $this->isWaitingRoom = $isWaitingRoom;

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

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(?string $source): self
    {
        $this->source = $source;

        return $this;
    }

    public function getIsAccepted(): ?bool
    {
        return $this->isAccepted;
    }

    public function setIsAccepted(bool $isAccepted): self
    {
        $this->isAccepted = $isAccepted;

        return $this;
    }

    public function getTemponaryImageHeight(): ?int
    {
        return $this->temponaryImageHeight;
    }

    public function setTemponaryImageHeight(int $temponaryImageHeight): self
    {
        $this->temponaryImageHeight = $temponaryImageHeight;

        return $this;
    }

    public function getTemponaryImageWidth(): ?int
    {
        return $this->temponaryImageWidth;
    }

    public function setTemponaryImageWidth(int $temponaryImageWidth): self
    {
        $this->temponaryImageWidth = $temponaryImageWidth;

        return $this;
    }

    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }

    public function setMetaTitle(?string $metaTitle): self
    {
        $this->metaTitle = $metaTitle;

        return $this;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    /**
     * @return Collection|Statistic[]
     */
    public function getStatistics(): Collection
    {
        return $this->statistics;
    }

    public function addStatistic(Statistic $statistic): self
    {
        if (!$this->statistics->contains($statistic)) {
            $this->statistics[] = $statistic;
            $statistic->setPost($this);
        }

        return $this;
    }

    public function removeStatistic(Statistic $statistic): self
    {
        if ($this->statistics->contains($statistic)) {
            $this->statistics->removeElement($statistic);
            // set the owning side to null (unless already changed)
            if ($statistic->getPost() === $this) {
                $statistic->setPost(null);
            }
        }

        return $this;
    }

    public function getMetaTitleFacebook(): ?string
    {
        return $this->metaTitleFacebook;
    }

    public function setMetaTitleFacebook(?string $metaTitleFacebook): self
    {
        $this->metaTitleFacebook = $metaTitleFacebook;

        return $this;
    }

    public function getMetaDescriptionFacebook(): ?string
    {
        return $this->metaDescriptionFacebook;
    }

    public function setMetaDescriptionFacebook(?string $metaDescriptionFacebook): self
    {
        $this->metaDescriptionFacebook = $metaDescriptionFacebook;

        return $this;
    }

    /**
     * @return Collection|Ranking[]
     */
    public function getRankings(): Collection
    {
        return $this->rankings;
    }

    public function addRanking(Ranking $ranking): self
    {
        if (!$this->rankings->contains($ranking)) {
            $this->rankings[] = $ranking;
            $ranking->setPost($this);
        }

        return $this;
    }

    public function removeRanking(Ranking $ranking): self
    {
        if ($this->rankings->contains($ranking)) {
            $this->rankings->removeElement($ranking);
            // set the owning side to null (unless already changed)
            if ($ranking->getPost() === $this) {
                $ranking->setPost(null);
            }
        }

        return $this;
    }


}
