<?php
$servername   = "localhost";
$db_username  = "escape_room_db"; 
$db_password  = "lgs-escape";
$db_name      = "admin@localhost";

// Verbindung herstellen
$conn = new mysqli($servername, $db_username, $db_password, $db_name);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}
?>
