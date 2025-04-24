<?php
session_start();

define("WEBROOT", "http://khalil.ecole221.sn:8000/");
define("ROOT_PATH", dirname(__DIR__));

require_once ROOT_PATH . '/includes/database.php';
// require_once ROOT_PATH . '/config/helpers.php';
// require_once ROOT_PATH . '/config/dbHelpers.php';
require_once ROOT_PATH . '/routes/router.php';

// 🔁 On récupère le contrôleur d'abord
$controller = $_GET["controller"] ?? "client";


handleController($controller);
