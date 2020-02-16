<?php

namespace App\Helper;

use App\Entity\Report;
use App\Entity\User;
use App\Entity\Comment;
use App\Entity\Post;

use App\Entity\VoteComment;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;
use App\Helper\CommentHelper;

class CommentHelper extends BaseHelper
{


    public function createNewComment(User $user, ?int $postId, ?int $commentParentId, ?string $text)
    {


        $post = $this->em->getRepository(Post::class)->findOneBy(['id' => $postId]);
        $text = mb_substr($text, 0, 500);
        $comment = new Comment();
        if ($commentParentId) {
            $commentMain = $this->em->getRepository(Comment::class)->findOneBy(['id' => $commentParentId]);
            $comment->setReplyComment($commentMain);
            $comment->setIsReply(true);
        }

        $comment->setAuthor($user);
        $comment->setText($text);
        $comment->setPost($post);

        $this->saveEntityInDB($comment);


        $userProfileUrl = $this->router->generate('user_profile', [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'subpage' => 'dodane'
        ]);

        $response['status'] = true;
        $response['authorProfileUrl'] = $userProfileUrl;
        $response['authorUsername'] = $user->getUsername();
        $response['text'] = $this->prepareCommentWithNotification($text);
        $response['commentId'] = $comment->getId();
        $response['commentParentId'] = $commentParentId;
        $response['postId'] = $postId;
        $response['authorId'] = $comment->getAuthor();
        $response['score'] = $comment->getVoteValue();


        return ['response' => $response, 'entities' => ['post' => $post, 'comment' => $comment]];
    }

    public function voteComment(?string $commentId, ?string $type, User $user)
    {
        $comment = $this->em->getRepository(Comment::class)->findOneBy(['id' => $commentId]);
        if ($comment) {
            $voteComment = $this->em->getRepository(VoteComment::class)->findOneBy(['comment' => $commentId, 'user' => $user]);

            if (!$voteComment) {
                $voteComment = new VoteComment();
                if ($type == 'up') {
                    $voteComment = $this->setVoteCommentUp($voteComment);
                    $comment->setVoteUp($comment->getVoteUp() + 1);
                } elseif ($type == 'down') {
                    $voteComment = $this->setVoteCommentDown($voteComment);
                    $comment->setVoteUp($comment->getVoteUp() - 1);
                }
            } else {
                if ($type == 'up') {
                    $voteComment = $this->setVoteCommentUp($voteComment);
                    $comment->setVoteUp($comment->getVoteUp() + 1);
                    $comment->setVoteDown($comment->getVoteDown() - 1);
                } elseif ($type == 'down') {
                    $voteComment = $this->setVoteCommentDown($voteComment);
                    $comment->setVoteUp($comment->getVoteUp() - 1);
                    $comment->setVoteDown($comment->getVoteDown() + 1);
                }
            }

            $voteComment->setComment($comment);
            $voteComment->setUser($user);
            $this->em->persist($voteComment);
            $this->em->persist($comment);
            $this->em->flush();
        }

    }

    public function removeVoteComment(?string $commentId, ?string $type, User $user)
    {
        $user = $this->userHelper->getUser();
        $comment = $this->em->getRepository(Comment::class)->findOneBy(['id' => $commentId]);

        if ($user) {
            $voteComment = $this->em->getRepository(VoteComment::class)->findOneBy(['comment' => $commentId, 'user' => $user]);

            if ($voteComment) {
                if ($voteComment->getIsVoteUp()) {
                    $comment->setVoteUp($comment->getVoteUp() - 1);
                } else if ($voteComment->getIsVoteDown()) {
                    $comment->setVoteDown($comment->getVoteDown() - 1);
                }
                $this->removeEntityFromDB($voteComment);
                $this->saveEntityInDB($comment);
                return true;
            }
        }

    }

    private function setVoteCommentUp(?VoteComment $voteComment)
    {
        $voteComment->setIsVoteUp(true);
        $voteComment->setIsVoteDown(false);
        return $voteComment;
    }

    private function setVoteCommentDown(?VoteComment $voteComment)
    {
        $voteComment->setIsVoteUp(false);
        $voteComment->setIsVoteDown(true);
        return $voteComment;
    }

    public function prepareCommentWithNotification(?string $string): string
    {
        $words = explode(' ', $string);
        $string = '';
        foreach ($words as $w) {
            if (isset($w[0]) && $w[0] == '@') {
                $string .= ' '.$this->getUserProfileLinkByUsername($w);
            } else {
                $string .= ' ' . $w;
            }
        }
        return trim($string);
    }

    public function getUserProfileLinkByUsername(?string $username): string
    {
        $username = str_replace('@', '', $username);
        $user = $this->em->getRepository(User::class)->findOneBy(['username' => $username]);

        $link = '';
        if ($user) {
            $link .= '<a href="';
            $link .= $this->router->generate('user_profile', ['id' => $user->getId(), 'username' => $user->getUsername(),'subpage'=>'dodane']);
            $link .= '">';
            $link .= $username;
            $link .= '</a>';
        }
        return $link;
    }

}
