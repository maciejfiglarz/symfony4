<?php

namespace App\Helper;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;

class FileHelper
{
    private $targetPublicDirectory;
    private $fullDirectory;
    private $extension;

    public function __construct($targetPublicDirectory)
    {
        $this->targetPublicDirectory = $targetPublicDirectory;
    }
    public function upload(?string $filePath, ?string $folder, $id): string
    {
        $file = new File($filePath);
        $fileName = $id . '.' . $file->guessExtension();

        $this->setFullDirectory($folder);
        $this->setExtension($file->guessExtension());
        $this->setSize(filesize($file));

        try {
            $file->move($this->getFullDirectory(), $fileName);
            $this->resizePhoto($this->getFullDirectory(). $fileName,600);
        } catch (FileException $e) { }
        return $fileName;
    }

    public function resizePhoto($path, $maxWidth, $height = null)
    {
        $extension = $this->getImageExtrension($path);
        list($origWidth, $origHeight) = getimagesize($path);
        $width = $origWidth;
        $height = $origHeight;
        if ($width > $maxWidth) {
            $height = ($maxWidth / $width) * $height;
            $width = $maxWidth;
        }

        $image_p = imagecreatetruecolor($width, $height);

        if ($extension == 'png') {
            $image = imagecreatefrompng($path);
        } else if ($extension == 'jpg' || $extension == 'jpeg') {
            $image = imagecreatefromjpeg($path);
        } else if ($extension == 'gif') {
            $image = imagecreatefromgif($path);
        }


        imagecopyresampled(
            $image_p,
            $image,
            0,
            0,
            0,
            0,
            $width,
            $height,
            $origWidth,
            $origHeight
        );
        if ($extension == 'png') {
            imagejpeg($image_p, $path);
        } elseif ($extension == 'jpg' || $extension == 'jpeg') {
            imagepng($image_p, $path);
        } else if ($extension == 'gif') {
            imagegif($image_p, $path);
        }

        return $image_p;

    }

    public function getImageExtrension($path)
    {
        $explodedPath = explode('.', $path);
        if ($explodedPath) {
            return end($explodedPath);
        }
        return null;
    }

    public function getFileSize($file)
    {
        $fileSize = filesize($file);
        $fileSize = round($fileSize / 1024 / 1024, 1);
        return $fileSize;
    }

    public function isValidFileSize($file,$size){
        $fileSize = $this->getFileSize($file);
        if($fileSize > $size){
            return false;
        }
        return true;
    }


    public function uploadFileFromUrl(string $filePath, string $url)
    {
        if (file_put_contents($this->targetPublicDirectory . $filePath, file_get_contents($url))) {
            return true;
        }
        return false;
    }

    public function moveFile(string $startPath, string $destinationPath)
    {

        $startPath = $this->targetPublicDirectory . $startPath;
        $destinationPath = $this->targetPublicDirectory . $destinationPath;

        if (copy($startPath, $destinationPath)) {

            $this->removeFile($startPath);
            return true;
        }
        return false;
    }

    public function setExtension(?string $extension): string
    {
        return $this->extension = $extension;
    }

    public function getExtension(): string
    {
        return $this->extension;
    }

    public function setSize(?string $size): string
    {
        return $this->size = $size;
    }
    public function getSize(): string
    {
        return $this->size;
    }


    public function setFullDirectory(?string $folder): string
    {
        return $this->fullDirectory = $this->targetPublicDirectory . $folder;
    }

    public function getFullDirectory(): string
    {
        return $this->fullDirectory;
    }

    public function removeFile(?string $filePath)
    {

        if (file_exists($filePath)) {

             @unlink($filePath);
        }
    }

    public function generateUniqueFileName()
    {
        return md5(uniqid());
    }


    public function getFileExtensionFromUrlAndReturnIfImage($path)
    {
        if(isset(pathinfo($path)['extension'])) {
            $extension = pathinfo($path)['extension'];
            if ($this->checkIsImage($extension)) {
                return $extension;
            }
        }
        return false;
    }
    public function getFileExtension($path)
    {
        return pathinfo($path)['extension'];
    }

    public function checkIsImage($extension)
    {
        if ($extension == 'jpg' || $extension == 'png' || $extension == 'jpeg') {
            return true;
        }
        return false;
    }
    public function checkFileExist($url)
    {
        $file_headers = @get_headers($url);

        if (stripos($file_headers[0], "200 OK")) {
            return true;
        } else {
            return false;
        }
    }
}
