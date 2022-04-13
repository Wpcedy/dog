<?php

use Api\DogApi;
require(__DIR__ . '/../Api/DogApi.php');

$breedList = [];
$service = new DogApi();

$response = ($service->allBreeds());
foreach ($response as $breed => $prefixes) {
    if (!empty($prefixes)) {
        foreach ($prefixes as $prefix) {
            array_push($breedList, "$prefix $breed");
        }
    } else {
        array_push($breedList, $breed);
    }
}
