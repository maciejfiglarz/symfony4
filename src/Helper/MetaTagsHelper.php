<?php


namespace App\Helper;


use App\Entity\Setting;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Helper\RequestHelper;
use App\Helper\ValidationHelper;
use App\Helper\FileHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Twig\Token;
use App\Entity\Post;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class MetaTagsHelper
{
    public function __construct(EntityManagerInterface $em, RouteHelper $routeHelper, UrlGeneratorInterface $router)
    {
        $this->em = $em;
        $this->routeHelper = $routeHelper;
        $this->router = $router;
    }

    public function getMetaTagsForFacebookDefault($url)
    {

        $title = $this->prepareDefaultMetaTagsTitleFromDB();
        $description = $this->prepareDefaultMetaTagsDescriptionFromDB();

        $metaTags = '';
        $metaTags .= $this->prepareFacebookTitle($title);
//        $metaTags .= $this->prepareImageForDefault();
        $metaTags .= $this->prepareFacebookContent($description);
        $metaTags .= $this->prepareFacebookUrl($url);
        $metaTags .= $this->prepareFacebookSiteName();
        return $metaTags;
    }

    public function getMetaTagsForFacebook($id)
    {
        $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $id]);
        $metaTags = '';
        if ($post) {

            $title =  strlen($post->getMetaTitleFacebook()) > 0  ? $post->getMetaTitleFacebook() : $post->getMetaTitle();
            $description =  strlen($post->getMetaDescriptionFacebook()) > 0  ? $post->getMetaDescriptionFacebook() : strip_tags($post->getDescription());

            $metaTags .= $this->prepareFacebookImageForPost($post);
            $metaTags .= $this->prepareFacebookTitle($title);
            $metaTags .= $this->prepareFacebookContent($description);
            $metaTags .= $this->prepareFacebookUrl($this->router->generate('post_single', ['id' => $post->getId(), 'slug' => $post->getSlug()], UrlGeneratorInterface::ABSOLUTE_URL));
            $metaTags .= $this->prepareFacebookSiteName();
        }
        return $metaTags;
    }

    public function getMetaTags($id)
    {
        $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $id]);
        $metaTags = '';
        if ($post) {
            $metaTags .= $this->prepareTitle(strlen($post->getMetaTitle()) > 0 ? $post->getMetaTitle() : $post->getTitle());
            $metaTags .= $this->prepareDescription(strlen($post->getMetaDescription()) > 0 ? $post->getMetaDescription() : strip_tags($post->getDescription()));
        }
        return $metaTags;
    }

    public function getMetaTagsForDefault()
    {

        $title = $this->prepareDefaultMetaTagsTitleFromDB();
        $description = $this->prepareDefaultMetaTagsDescriptionFromDB();

        $metaTags = '';
        $metaTags .= $this->prepareTitle($title);
        $metaTags .= $this->prepareDescription($description);
        return $metaTags;
    }

    public function prepareDefaultMetaTagsTitleFromDB()
    {
        $metaTags = $this->em->getRepository(Setting::class)->findOneBy(['name' => 'default-meta-tags-title']);
        if ($metaTags) {
            return $metaTags->getValue();
        }
        return '';
    }

    public function prepareDefaultMetaTagsDescriptionFromDB()
    {
        $metaTags = $this->em->getRepository(Setting::class)->findOneBy(['name' => 'default-meta-tags-description']);
        if ($metaTags) {
            return $metaTags->getValue();
        }
        return '';
    }

    public function prepareDescription($description)
    {
        return '<meta name="description" content="' . $description . '">';
    }

    public function prepareTitle($title)
    {
        return '<title>' . $title . '</title>';
    }


    public function isSinglePost($url)
    {
        if (strpos($url, 'post-') !== false) {
            return true;
        }
        return false;
    }

    public function prepareFacebookSiteName()
    {
        return '<meta property="og:site_name" content="Ciekawe To"/>';
    }

    public function prepareFacebookImageForDefault(): string
    {
        $url = '';
        return '<meta property="og:image" content="' . $url . '"/>';
    }

    public function prepareFacebookImageForPost($post): string
    {
        return '<meta property="og:image" content="' . $this->routeHelper->getDomainUrl() . Post::FILES_IMAGES_LOCATION . $post->getId() . '.' . $post->getExtension() . '"/>';
    }

    public function prepareFacebookTitle($title): string
    {
        $title = substr($title, 0, 170);
        return '<meta property="og:title" content="' . $title . '"/>';
    }

    public function prepareFacebookContent($description): string
    {
        $description = substr($description, 0, 230);
        return '<meta property="og:description" content="' . $description . '"/>';
    }

    public function prepareFacebookUrl($url)
    {
        return '<meta property="og:url" content="' . $url . '"/>';
    }
}
