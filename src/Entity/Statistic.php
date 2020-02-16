<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StatisticRepository")
 */
class Statistic
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $views = 0;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Post", inversedBy="statistics")
     */
    private $post;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StatisticWeek", inversedBy="statistics")
     */
    private $statisticWeek;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getViews(): ?int
    {
        return $this->views;
    }

    public function setViews(?int $views): self
    {
        $this->views = $views;

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

    public function getStatisticWeek(): ?StatisticWeek
    {
        return $this->statisticWeek;
    }

    public function setStatisticWeek(?StatisticWeek $statisticWeek): self
    {
        $this->statisticWeek = $statisticWeek;

        return $this;
    }
}
