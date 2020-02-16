<?php

namespace App\Helper;

use App\Entity\Post;
use App\Entity\Statistic;
use App\Entity\StatisticWeek;
use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;
use App\Entity\User;
use Symfony\Component\Validator\Constraints\Length;

class PostHelper extends BaseHelper
{

    public function prepareSource(?string $string): string
    {
        if (strpos($string, 'http') !== false) {
            $stringForDisplay = strlen($string) > 35 ? substr($string, 0, 35) . '...' : $string;
            return '<a href="' . $string . '">' . $stringForDisplay . '</a>';
        }
        return $string;
    }

    public function insertAdsIntoDescription(?string $html)
    {


        $dom = new \DomDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($html);
        //dd($html);
        $length = $dom->getElementsByTagName('p')->length;

        $firstParagraph = $this->adsHelper->displayAd('post-first-paragraph');
        $firstParagraphPosition = $this->adsHelper->getPosition('post-first-paragraph');

        if (strlen($firstParagraph) > 2 && $length > $firstParagraphPosition) {
            $node = $dom->getElementsByTagName('p')->item($firstParagraphPosition);
            $fragment = $dom->createDocumentFragment();
            $fragment->appendXML($firstParagraph);
            $node->appendChild($fragment);
        }

        $secondParagraph = $this->adsHelper->displayAd('post-second-paragraph');
        $secondParagraphPosition = $this->adsHelper->getPosition('post-second-paragraph');

        if (strlen($secondParagraph) > 2 && $length > $secondParagraphPosition ) {
            $node = $dom->getElementsByTagName('p')->item($secondParagraphPosition);
            $fragment = $dom->createDocumentFragment();
            $fragment->appendXML($secondParagraph);
            $node->appendChild($fragment);
        }

        $thirdParagraph = $this->adsHelper->displayAd('post-third-paragraph');
        $thirdParagraphPosition = $this->adsHelper->getPosition('post-third-paragraph');

        if (strlen($thirdParagraph) > 2 && $length > $thirdParagraphPosition ) {
            $node = $dom->getElementsByTagName('p')->item($thirdParagraphPosition);
            $fragment = $dom->createDocumentFragment();
            $fragment->appendXML($thirdParagraph);
            $node->appendChild($fragment);
        }

        $dom->saveHTML();
        // dd($node->item(0),$fragment = $dom->createDocumentFragment());
        
        return $dom->saveHTML();
    }



    public function setStatistic($post)
    {
        if ($post) {
            $postID = $post->getId();
            if (!$this->session->get('viewed-post-' . $postID)) {
                $today = new \DateTime('today');
                $currentYear = clone $today;
                $currentYear = $currentYear->format('Y');

                $currentWeek = clone $today;
                $currentWeek = intval($currentWeek->format('W'));

                $statisticWeek = $this->em->getRepository(StatisticWeek::class)->findOneBy(['week' => $currentWeek, 'year' => $currentYear]);

                if (!$statisticWeek) {
                    $statisticWeek = new StatisticWeek();
                    $statisticWeek = $statisticWeek->setWeek($currentWeek);
                    $statisticWeek = $statisticWeek->setYear($currentYear);
                    $this->em->persist($statisticWeek);
                    $this->em->flush();
                }

                $statistic = $this->em->getRepository(Statistic::class)->findOneBy(['post' => $post, 'statisticWeek' => $statisticWeek]);

                if (!$statistic) {
                    $statistic = new Statistic();
                    $statistic->setPost($post);
                    $statistic->setStatisticWeek($statisticWeek);
                    $statistic->setViews(1);
                    $this->em->persist($statistic);
                    $this->em->flush();
                } else {

                    $query = $this->em->createQuery('UPDATE App\Entity\Statistic as s SET s.views = :views WHERE s.id = :id');
                    $query->setParameter('id', $statistic->getId());
                    $query->setParameter('views', $statistic->getViews() + 1);
                    $query->getResult();
                }
                $this->session->set('viewed-post-' . $postID, 'true');
            }
        }
    }
}
