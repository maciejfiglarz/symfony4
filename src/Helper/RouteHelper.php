<?php


namespace App\Helper;


use App\Entity\Post;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class RouteHelper extends BaseHelper
{
    public function prepareAbsoluteUrlForPost($postID)
    {
        $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $postID]);
        if ($post && $post->getSlug()) {
            return $this->router->generate('post_single', ['id' => $post->getId(), 'slug' => $post->getSlug()], UrlGeneratorInterface::ABSOLUTE_URL);
        }
        return null;
    }

    public function prepareAbsoluteUrlForPostImage($postID)
    {
        $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $postID]);

        if ($post) {
            return $this->getPostImageUrl() . $post->getId() . '.' . $post->getExtension();
        }
        return null;
    }

    public function getProjectDir(): string
    {
        return \dirname(__DIR__);
    }

    public function getDomainUrl(){
        return 'https://'.$_SERVER['HTTP_HOST'];
    }

    public function getPostImageUrl()
    {
        return $this->getDomainUrl(). '/public'. Post::FILES_IMAGES_LOCATION;
    }
}
