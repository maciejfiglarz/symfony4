<?php


namespace App\Helper;

use App\Entity\Category;
use App\Entity\TemponaryImage;
use App\Entity\Post;
use App\Entity\Vote;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Helper\RequestHelper;
use App\Helper\ValidationHelper;
use App\Helper\FileHelper;
use Doctrine\ORM\EntityManagerInterface;

class PostMenagerHelper extends BaseHelper
{


    public function fillAndSavePostEntity(Request $request, Post $post)
    {
        // dd($request);
//        dd($this->em->getRepository(TemponaryImage::class)->fetchExpired());
        $this->saveEntityInDB($post);

        $post = $this->prepareAndSetImagePostEntity($post);
        $this->requestHelper->setEntityFields(
            $post,
            ['title', 'description', 'isConfirm', 'source'],
            ['isConfirm']
        );

        $post = $this->requestHelper->setBooleanFieldTrue($post, 'selectType', true);
        $post = $this->requestHelper->setBooleanFieldTrue($post, 'selectData', true);

        $post = $this->setCategoriesPostEntity($request, $post);

        $post->setYoutubeID($this->getYoutubeIDForSession() ? $this->getYoutubeIDForSession() : '');
        $post = $this->setAuthorPostEntity($post);
        $this->clearYoutubeIDForSession();
        $this->saveEntityInDB($post);
        if ($post->getIsGraphic()) {
            $this->prepareGraphic($post);
        }

        $this->removeExpiredTemponaryImage();
        return $post;
    }

    public function prepareGraphic(Post $post)
    {
        $image = $post->getId() . '.' . $post->getExtension();
        $this->graphicHelper->createGraphicPost($image, $post->getTitle(), $post->getDescription());
    }

    public function removeExpiredTemponaryImage()
    {
        $expired = $this->em->getRepository(TemponaryImage::class)->fetchExpired();
        foreach ($expired as $e) {
            $imageUrl = TemponaryImage::FILES_IMAGES_LOCATION . $e->getId() . '.' . $e->getExtension();

            if (file_exists($imageUrl)) {
                unlink($imageUrl);
            }

            $this->em->remove($e);
            $this->em->flush();
        }
    }

    public function vote($postEntity, $action)
    {
        $voteRepository = $this->em->getRepository(Vote::class);

        $user = $this->userHelper->getUser();
        if ($user) {
            $vote = $voteRepository->findOneBy(['post' => $postEntity->getId(), 'user' => $user->getId()]);

            if (!$vote) {
                $vote = new Vote();

                $vote->setUser($user);
                $vote->setPost($postEntity);

                if ($action == 'up') {
                    $vote->setIsVoteUp(true);
                    $postEntity->setVoteUp($postEntity->getVoteUp() + 1);
                } else if ($action == 'down') {
                    $vote->setIsVoteDown(true);
                    $postEntity->setVoteDown($postEntity->getVoteDown() + 1);
                }

            } else {
                if ($action == 'up') {
                    $vote->setIsVoteUp(true);
                    $vote->setIsVoteDown(false);
                    $postEntity->setVoteUp($postEntity->getVoteUp() + 1);
                    $postEntity->setVoteDown($postEntity->getVoteDown() - 1);
                } else if ($action == 'down') {
                    $vote->setIsVoteDown(true);
                    $vote->setIsVoteUp(false);
                    $postEntity->setVoteDown($postEntity->getVoteDown() + 1);
                    $postEntity->setVoteUp($postEntity->getVoteUp() - 1);
                }
            }

            $this->saveEntityInDB($vote);
            $this->saveEntityInDB($postEntity);
            return true;
        }
        return false;
    }

    public function voteRemove($post, $action)
    {
        $voteRepository = $this->em->getRepository(Vote::class);
        $user = $this->userHelper->getUser();

        if ($user) {
            $vote = $voteRepository->findOneBy(['post' => $post->getId(), 'user' => $user->getId()]);
            if ($vote) {
                if ($vote->getIsVoteUp()) {
                    $post->setVoteUp($post->getVoteUp() - 1);
                } else if ($vote->getIsVoteDown()) {
                    $post->setVoteDown($post->getVoteDown() - 1);
                }
                $this->removeEntityFromDB($vote);
                $this->saveEntityInDB($post);
                return true;
            }
        }


        return false;
    }

    public function setAuthorPostEntity($post)
    {
        $author = $this->userHelper->getUser();
        if ($author) {
            $post = $post->setAuthor($author);
            $post = $post->setIsAccepted(true);
        }
        return $post;
    }

    public
    function setCategoriesPostEntity($request, $post)
    {
        $categories = $request->get('category');
        if (!is_null($categories)) {
            foreach ($categories as $c) {
                $category = $this->em->getRepository(Category::class)->findOneBy(['id' => str_replace('newCategory-', '', $c)]);
                if ($category) {
                    $post->addCategory($category);
                }

            }
        }
        return $post;
    }

    public function prepareAndSetImagePostEntity($post)
    {
        $temponaryImageID = $this->getTemponaryImageForSession();
        $temponaryImage = $this->em->getRepository(TemponaryImage::class)->findOneBy(['id' => $temponaryImageID]);

        $temponaryImageFile = $temponaryImage->getId() . '.' . $temponaryImage->getExtension();

        $temponaryImageSize = $this->graphicHelper->getImageSizeForTemponaryImage($temponaryImageFile);
        $temponaryImageHeight = $temponaryImageSize['height'];
        $temponaryImageWidth = $temponaryImageSize['width'];
        $post->setTemponaryImageHeight($temponaryImageHeight);
        $post->setTemponaryImageWidth($temponaryImageWidth);

        $post->setExtension($temponaryImage->getExtension());
        $this->moveFileFromTemponaryFileToPostImage($temponaryImageFile, $post->getId());
        $this->clearTemponaryImageForSession();
        $this->removeEntityFromDB($temponaryImage);
        return $post;
    }

    public
    function setTypePostEntity($post, $fieldName)
    {
        $post = $this->requestHelper->setTypeForPostEntity($post);
        return $post;
    }


    private
    function moveFileFromTemponaryFileToPostImage($temponaryImage, $postID)
    {
        $temponaryImagePath = $this->prepareTemponaryImagePath($temponaryImage);
        $postImagePath = $this->preparePostImagePath($temponaryImage, $postID);
        $this->fileHelper->moveFile($temponaryImagePath, $postImagePath);


    }

    private
    function prepareTemponaryImagePath($fileName)
    {
        //        $this->pathHelper->makeDirIfNotExistAndReturnPathName(TemponaryImage::FILES_IMAGES_LOCATION);
        return TemponaryImage::FILES_IMAGES_LOCATION . $fileName;
    }

    private
    function preparePostImagePath($fileName, $postID)
    {
        return Post::FILES_IMAGES_LOCATION . $postID . '.' . $this->fileHelper->getFileExtension($fileName);
    }


    public
    function setTemponaryImageForSession($id)
    {
        $this->session->set('temponaryImage', $id);
    }

    public
    function getTemponaryImageForSession()
    {
        return $this->session->get('temponaryImage');
    }

    public
    function clearTemponaryImageForSession()
    {
        return $this->session->set('temponaryImage', '');
    }

    public
    function setYoutubeIDForSession($youtubeID)
    {
        $this->session->set('youtubeID', $youtubeID);
    }

    public
    function getYoutubeIDForSession()
    {
        return $this->session->get('youtubeID');
    }

    public
    function clearYoutubeIDForSession()
    {
        return $this->session->set('youtubeID', '');
    }
}
