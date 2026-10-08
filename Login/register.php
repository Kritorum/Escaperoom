<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Eingaben sanitizen
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Überprüfen, ob der Benutzername bereits existiert
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Benutzername bereits vergeben!";
    } else {
        // Passwort hashen
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        // Neuen Benutzer in die Datenbank einfügen
        $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $username, $passwordHash);
        if ($stmt->execute()) {
            echo "Registrierung erfolgreich!";
        } else {
            echo "Fehler bei der Registrierung: " . $conn->error;
        }
    }
}
?>
