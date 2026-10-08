
// Beispiel für die Überprüfung, ob der Benutzer eingeloggt ist
let isLoggedIn = True; // Standardwert

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (isLoggedIn) { // Überprüfe, ob der Benutzer eingeloggt ist
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    } else {
        // Weiterleitung zur Login-Seite, wenn der Benutzer nicht eingeloggt ist
        window.location.href = 'login/login.html';
    }
}

//Menü keine Ahnung aber iwie funktiert es net
function redirectToRoom() {
    // Hier können Sie die URL des Raums angeben
    window.location.href = "https://example.com/raum"; // Ersetzen Sie dies durch die tatsächliche URL
}
 