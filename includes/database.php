<?php
function getPDO(): PDO {
    $host = 'localhost';
    $dbname = 'projet_js_php';  // remplace par le nom de ta base
    $user = 'root';              // ou autre nom d'utilisateur
    $pass = '';                  // mot de passe si nécessaire

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        die("Erreur de connexion : " . $e->getMessage());
    }
}
?>
