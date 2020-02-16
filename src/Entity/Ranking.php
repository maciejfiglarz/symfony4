<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RankingRepository")
 */
class Ranking
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\RankingDay", inversedBy="rankings")
     */
    private $rankingDay;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="rankings")
     */
    private $post;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $viewsCurr;

    /**
     * @ORM\Column(type="integer")
     */
    private $viewsDiff = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $positionCurr = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $positionDiff = 0;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRankingDay(): ?RankingDay
    {
        return $this->rankingDay;
    }

    public function setRankingDay(?RankingDay $rankingDay): self
    {
        $this->rankingDay = $rankingDay;

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

    public function getViewsCurr(): ?int
    {
        return $this->viewsCurr;
    }

    public function setViewsCurr(?int $viewsCurr): self
    {
        $this->viewsCurr = $viewsCurr;

        return $this;
    }

    public function getViewsDiff(): ?int
    {
        return $this->viewsDiff;
    }

    public function setViewsDiff(int $viewsDiff): self
    {
        $this->viewsDiff = $viewsDiff;

        return $this;
    }

    public function getPositionCurr(): ?int
    {
        return $this->positionCurr;
    }

    public function setPositionCurr(int $positionCurr): self
    {
        $this->positionCurr = $positionCurr;

        return $this;
    }

    public function getPositionDiff(): ?int
    {
        return $this->positionDiff;
    }

    public function setPositionDiff(int $positionDiff): self
    {
        $this->positionDiff = $positionDiff;

        return $this;
    }
}
