<?php

namespace App\Form;

use App\Entity\Post;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class CreatePostFormType extends AbstractType
{
  
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextareaType::class, [
                'label' => 'Title:',
                'attr' => [
                    'class' => 'textarea-title'
                ],
                'label_attr' => ['class' => ''],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description:',
                'attr' => [
                    'class' => 'textarea-description'
                ],
                'label_attr' => ['class' => ''],
            ])
            
            ->add('isAgreeTerms', CheckboxType::class, [
                'label'    => 'I accept the terms of use',
                'label_attr' => ['class' => 'custom-control-label'],
                'attr' => ['class' => 'custom-control-input']
            ]);
            
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null
        ]);
    }
}
