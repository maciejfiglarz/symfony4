<?php

namespace App\Helper;

use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;
class PathHelper extends BaseHelper
{

    const WRONG_STEP = 'You have been redirected because the step was wrong';
    const SESSION_EXPIRED = 'You have been redirected because the session has expired';


    protected $router;

    public function __construct(RouterInterface $router, SessionInterface $session)
    {
        $this->session = $session;
        $this->router = $router;
    }


    static public function makeDirIfNotExistAndReturnPathName(string $pathName)
    {

        if (!file_exists($pathName)) {

            if (!mkdir($pathName, 0755, true)) {
                throw new \Exception("I can't create dir in $pathName");
            }
        }

        return $pathName;
    }

}