<?php

namespace App\Controller;

use App\Entity\Report;
use App\Helper\CommentHelper;
use App\Helper\NotificationHelper;
use App\Helper\PaginatorHelper;
use App\Helper\UserHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Helper\RequestHelper;
use App\Helper\FileHelper;
use App\Helper\PostMenagerHelper;
use App\Entity\TemponaryImage;
use App\Entity\Post;
use App\Entity\Comment;

use Doctrine\ORM\EntityManagerInterface;


class PostMenegerController extends BaseSiteController
{

    public function __construct(EntityManagerInterface $em, SessionInterface $session, PaginatorHelper $paginator)
    {

        $this->data['status'] = false;
        $this->data['fileUploaded'] = false;
        $this->data['isImage'] = false;
        $this->data['isValidSize'] = false;
        $this->data['isFileExist'] = false;
        $this->data['temponaryImageID'] = false;
        $this->maxFileSize = 3.51;
    }


    /**
     * @Route("/api-remove-comment", name="api-comment-remove")
     */
    public function removeComment(Request $request, UserHelper $userHelper,EntityManagerInterface $em)
    {
        $commentId = $request->request->get('commentId');
        $comment = $em->getRepository(Comment::class)->findOneBy(['id' => $commentId]);

        $user = $userHelper->getUser();
        $status = false;

        if ($comment && $user) {
            $comment->setIsDeleted(true);
            $em->persist($comment);
            $em->flush();

        }

        return new JsonResponse(['status' => $status]);

    }

    /**
     * @Route("/vote/{post}/{action}", name="post_menager-vote")
     */
    public function vote(Post $post, Request $request, $action, PostMenagerHelper $postMenagerHelper)
    {

        $fieldsArray = ['up', 'down', 'remove'];

        if (in_array($action, $fieldsArray)) {

            if ($action == 'up' || $action == 'down') {
                $postMenagerHelper->vote($post, $action);
            } elseif ($action == 'remove') {
                $postMenagerHelper->voteRemove($post, $action);
            }

        }

        return new JsonResponse([]);
    }


    /**
     * @Route("/upload-temponary-image", name="post-menager_upload-temponary-file")
     */

    public function uploadTemponaryImageFromDisc(Request $request, FileHelper $fileHelper, EntityManagerInterface $em, PostMenagerHelper $postMenagerHelper)
    {

        $file = $request->files->get('file');
        $this->data['status'] = true;
        if (!is_null($file)) {

            $isImage = $fileHelper->checkIsImage($file->getClientOriginalExtension());

            if ($isImage) {
                $this->data['isImage'] = true;

                if ($fileHelper->isValidFileSize($file, $this->maxFileSize)) {
                    $this->data['isValidSize'] = true;

                    $temponaryImage = new TemponaryImage();

                    $em->persist($temponaryImage);
                    $em->flush();

                    $fileName = $fileHelper->upload($file, TemponaryImage::FILES_IMAGES_LOCATION, $temponaryImage->getId());
                    $temponaryImage->setExtension($fileHelper->getExtension());

                    $this->data['fileUploaded'] = $fileName;
                    $this->data['temponaryImageID'] = $temponaryImage->getId();

                    $postMenagerHelper->setTemponaryImageForSession($temponaryImage->getId());

                    $em->persist($temponaryImage);
                    $em->flush();
                }
            }
        }

        return new JsonResponse($this->data);
    }

    /**
     * @Route("/upload-youtube-thumbnail", name="post-menager_upload-youtube-thumbnail")
     */

    public function uploadYoutubeThumbnail(Request $request, FileHelper $fileHelper, EntityManagerInterface $em, PostMenagerHelper $postMenagerHelper)
    {

        $youtubeID = $request->request->get('youtubeID');
      //  $youtubeID = 'oWtwpdinGF4';
        $url = 'https://img.youtube.com/vi/' . $youtubeID . '/sddefault.jpg';
        $isFileExist = $fileHelper->checkFileExist($url);
        if(!$isFileExist){
            $url = 'https://img.youtube.com/vi/' . $youtubeID . '/mqdefault.jpg';
            $isFileExist = $fileHelper->checkFileExist($url);
        }
        $this->data['status'] = true;

      

        if ($isFileExist) {
            $this->data['isFileExist'] = true;

            $temponaryImage = new TemponaryImage();

            $em->persist($temponaryImage);
            $em->flush();

            if ($fileHelper->uploadFileFromUrl(TemponaryImage::FILES_IMAGES_LOCATION . $temponaryImage->getId() . '.jpg', $url)) {

                $temponaryImage->setExtension('jpg');

                $this->data['isImage'] = true;
                $this->data['fileUploaded'] = $temponaryImage->getId() . '.jpg';
                $this->data['temponaryImageID'] = $temponaryImage->getId();
                $this->data['isValidSize'] = true;

                $postMenagerHelper->setTemponaryImageForSession($temponaryImage->getId());
                $postMenagerHelper->setYoutubeIDForSession($youtubeID);

                $em->persist($temponaryImage);
                $em->flush();

            };
        }

        return new JsonResponse($this->data);
    }

    /**
     * @Route("/upload-link-thumbnail", name="post-board_upload-link-thumbnail")
     */

    public function uploadThumbnailFromLink(Request $request, FileHelper $fileHelper, PostMenagerHelper $postMenagerHelper, EntityManagerInterface $em)
    {

        $url = $request->request->get('url');
        $this->data['status'] = true;

        $extension = $fileHelper->getFileExtensionFromUrlAndReturnIfImage($url);
        $isFileExist = $fileHelper->checkFileExist($url);

        if ($extension) {
            $this->data['isImage'] = true;
            if ($isFileExist) {
                $this->data['isValidSize'] = true;

                $temponaryImage = new TemponaryImage();
                $em->persist($temponaryImage);
                $em->flush();

                if ($fileHelper->uploadFileFromUrl(TemponaryImage::FILES_IMAGES_LOCATION . $temponaryImage->getId() . '.' . $extension, $url)) {

                    $temponaryImage->setExtension($extension);
                    $em->persist($temponaryImage);
                    $em->flush();
                    $postMenagerHelper->setTemponaryImageForSession($temponaryImage->getId());
                    $this->data['fileUploaded'] = $temponaryImage->getId() . '.' . $extension;
                    $this->data['temponaryImageID'] = $temponaryImage->getId();
                };
            }
        }
        return new JsonResponse($this->data);
    }

    /**
     * @Route("/api-add-new-comment", name="api-new-comment")
     */
    public function newComment(Request $request, UserHelper $userHelper, NotificationHelper $notificationHelper, CommentHelper $commentHelper)
    {

        $postId = $request->get('postId');
        $commentParentId = $request->get('commentParentId');
        $text = $request->get('text');

        // $postId = 131;
        // $commentId = 57;

        // $text = '@Maciek fsdfsdfdsfsd @mac';


        $response['status'] = false;
        $user = $userHelper->getUser();


        if ($user) {

            $data = $commentHelper->createNewComment($user, $postId, $commentParentId, $text);

            $notificationHelper->createNotificationForComment($user, $text, $data['entities']);

        }

        return new JsonResponse($data['response']);
    }

    /**
     * @Route("/api-vote-comment", name="api-vote-comment")
     */
    public function voteComment(Request $request,
                                UserHelper $userHelper,
                                NotificationHelper $notificationHelper,
                                CommentHelper $commentHelper)
    {

        $commentId = $request->get('commentId');
        $type = $request->get('type');

        $status = false;
        $user = $userHelper->getUser();

        if ($user && $commentId && $type) {
            if ($type == 'remove') {
                $commentHelper->removeVoteComment($commentId, $type, $user);
            } else {
                $commentHelper->voteComment($commentId, $type, $user);
            }


            $status = true;
        }


        return new JsonResponse(['status' => $status]);
    }

}
