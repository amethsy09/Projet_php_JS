<?php
define("ROOT_PATH", dirname(__DIR__));

require_once ROOT_PATH . '/includes/database.php';

header('Content-Type: application/json');

try {
    $pdo = getPDO();
    $stmt = $pdo->query("SELECT * FROM client ORDER BY id_client DESC");
    $clients = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($clients);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
