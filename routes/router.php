<?php
// Liste des contrôleurs disponibles
$controllers = [
    "client"   => "client.controller.php",
   
];

function handleController(string $key){
    global $controllers;
    if (array_key_exists($key, $controllers)) {
        $controller = $controllers[$key];
        require_once ROOT_PATH . "/controller/" . $controller;
    } else {
        throw new Exception("Controller not found: " . $key);
    }
}