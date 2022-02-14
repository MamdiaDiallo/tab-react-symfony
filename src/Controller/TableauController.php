<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TableauController extends AbstractController
{
    /**
     * @Route("/", name="tableau")
     * 
     */
    public function index(): Response
    {


        return $this->render('tableau/index.html.twig', []);
    }
}
