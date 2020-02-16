<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AdvertisementRepository")
 */
class Advertisement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $position = 0;

    /**
     * @ORM\Column(type="text")
     */
    private $adsense ="";

    /**
     * @ORM\Column(type="text")
     */
    private $sataku="";

    /**
     * @ORM\Column(type="boolean")
     */
    private $isAdsense = true;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isSataku = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAdsense(): ?string
    {
        return $this->adsense;
    }

    public function setAdsense(string $adsense): self
    {
        $this->adsense = $adsense;

        return $this;
    }

    public function getSataku(): ?string
    {
        return $this->sataku;
    }

    public function setSataku(string $sataku): self
    {
        $this->sataku = $sataku;

        return $this;
    }

    public function getIsAdsense(): ?bool
    {
        return $this->isAdsense;
    }

    public function setIsAdsense(bool $isAdsense): self
    {
        $this->isAdsense = $isAdsense;

        return $this;
    }

    public function getIsSataku(): ?bool
    {
        return $this->isSataku;
    }

    public function setIsSataku(bool $isSataku): self
    {
        $this->isSataku = $isSataku;

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

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

 
}
