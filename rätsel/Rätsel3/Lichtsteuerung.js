console.log("JavaScript ist aktiv!"); 

function checkInput() {
    const userInput = document.getElementById("userInput").value.trim();
    const resultMessage = document.getElementById("resultMessage");
    const modalMessage = document.getElementById("modalMessage");
    const modal = document.getElementById("myModal");
    const closeButton = document.getElementById("closeButton");
    const backButton = document.getElementById("backButton");
    const separator = document.getElementById("separator");

    if (userInput.toUpperCase() === "OR") {
        resultMessage.textContent = "Richtig!";
        resultMessage.className = "result correct"; // Grüne Farbe
        modalMessage.textContent = "Die richtige Schaltung wurde erkannt. Das Licht ist ausgeschaltet.";
        separator.style.display = "block"; // Trennstrich anzeigen
        backButton.style.display = "block"; // Zurück-Button anzeigen
    } else {
        resultMessage.textContent = "Falsch!";
        resultMessage.className = "result incorrect"; // Rote Farbe
        modalMessage.textContent = "Versuch eine andere Schaltung.";
        backButton.style.display = "none"; // Zurück-Button ausblenden
        separator.style.display = "none"; // Trennstrich ausblenden
    }
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}