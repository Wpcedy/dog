<?php

use Api\DogApi;

$imagem = '';
$service = new DogApi();

if (isset($_GET['nomeCachorro']) && $_GET['nomeCachorro']) {
    $nomeBreed = str_replace(' ', '-', $_GET['nomeCachorro']);
    $breed = explode(' ', $_GET['nomeCachorro']);
    $breed = count($breed) > 1 ? $breed[1] : $breed[0];
    $imagem = (
        '<div>' . ucfirst($nomeBreed) . '</div>' .
        '<img src="' . ($service->getImage($breed)) . '" alt="dog" class="imagem-cachorro"></img>'
    );
}
