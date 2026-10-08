<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Eingaben sanitizen
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Benutzer anhand des Benutzernamens suchen
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        // Passwort verifizieren
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            echo "Erfolgreich angemeldet!";
            // Hier kannst du z.B. eine Weiterleitung einbauen
        } else {
            echo "Falsches Passwort!";
        }
    } else {
        echo "Benutzer existiert nicht!";
    }
}
?>
