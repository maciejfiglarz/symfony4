<?php


namespace App\Helper;

use App\Entity\TemponaryImage;
use App\Entity\Board;

use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Helper\RequestHelper;
use App\Helper\ValidationHelper;
use App\Helper\FileHelper;
use Doctrine\ORM\EntityManagerInterface;

class BoardHelper
{


    public function __construct(RequestStack $requestStack, FileHelper $fileHelper, RequestHelper $requestHelper, ValidationHelper $validationHelper, EntityManagerInterface $em)
    {
        $this->validationHelper = $validationHelper;
        $this->em = $em;
        $this->requestHelper = $requestHelper;
        $this->fileHelper = $fileHelper;
    }

    public function fillAndSaveBoardEntity($request)
    {
        $board = new Board();
        $this->requestHelper->setEntityFields(
            $board,
            ['title', 'description'],
            ['isPolicy']
        );
        $board->setIsPost(true);
        $this->em->persist($board);
        $this->em->flush();
        return $board;
    }

    public function prepareContent($request, $board)
    {
        $errors = [];

        $preparedData = $this->prepareDataForContent($request);
        // dd($request, $preparedData);
        //dd($preparedData['youtubeTemponaryImage'] , $preparedData['youtube_ID']);

        if ($preparedData['discTemponaryImage']) {

            $board = $this->setExtensionForBoard($preparedData['discTemponaryImage'], $board);
            $this->moveFileFromTemponaryFileToBoardImage($preparedData['discTemponaryImage'], $board->getId());
            $board->setIsImageFromDisc(true);

            dd('disc', $board);
        } elseif ($preparedData['youtubeTemponaryImage'] && $preparedData['youtube_ID']) {

            $board = $this->setExtensionForBoard($preparedData['youtubeTemponaryImage'], $board);
            $this->moveFileFromTemponaryFileToBoardImage($preparedData['youtubeTemponaryImage'], $board->getId());

            $board->setYoutubeID($preparedData['youtube_ID']);
            $board->setIsYotubeLink(true);
        } elseif ($preparedData['linkTemponaryImage']) {
            $board = $this->setExtensionForBoard($preparedData['linkTemponaryImage'], $board);
            $this->moveFileFromTemponaryFileToBoardImage($preparedData['linkTemponaryImage'], $board->getId());
            $board->setIsImageFromLink(true);
        }


        return  $board;
    }
    public function prepareDataForContent($request)
    {

        $preparedData = [
            'discTemponaryImage' => $request->request->get('disc_temponaryImage'),
            'linkTemponaryImage' => $request->request->get('link_temponaryImage'),
            'youtubeTemponaryImage' => $request->request->get('youtube_temponaryImage'),
            'youtube_ID' => $request->request->get('youtube_ID'),

        ];

        return $preparedData;
    }

    // private function 

    private function setExtensionForBoard($temponaryImage, $board)
    {
        return $board->setExtension($this->fileHelper->getFileExtension($temponaryImage));
    }

    private function getTemponaryImagePath($fileName)
    {
        return  TemponaryImage::FILES_IMAGES_LOCATION . $fileName;
    }

    private function getBoardImagePath($fileName, $boardID)
    {

        return  Board::FILES_IMAGES_LOCATION . $boardID . $this->fileHelper->getFileExtension($fileName);
    }

    private function moveFileFromTemponaryFileToBoardImage($temponaryImage, $boardID)
    {
        $temponaryImagePath = $this->getTemponaryImagePath($temponaryImage);
        $boardImagePath = $this->getBoardImagePath($temponaryImage, $boardID);
        $this->fileHelper->moveFile($temponaryImagePath, $boardImagePath);
    }
    public function saveEntityInDB($entity)
    {
        $this->em->persist($entity);
        $this->em->flush();
    }
}
