<?php
// session_start();


$page = $_REQUEST["page"] ?? "client";


    function handleclientPage(){
    // require_once 'pdo.php'; // Inclut ta fonction getPDO()

 
    require_once ROOT_PATH . "/views/clients/client.html.php";

}
ob_start();

switch ($page) {
    case 'client':
        handleclientPage();
        break;
    default:
        # code...
        break;
}

$content = ob_get_clean();
require_once ROOT_PATH . "/layout/layoutBase.php";