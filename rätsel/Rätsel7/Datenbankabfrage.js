console.log("JavaScript ist aktiv!"); 

const correctQuery = 'SELECT Code FROM Räume WHERE Raum = "Büro"'; // Beispiel für die korrekte SQL-Abfrage

        function executeQuery() {
            const userInput = document.getElementById("sqlQuery").value;
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const modal = document.getElementById("myModal");
            const closeButton = document.getElementById("closeButton");
            const backButton = document.getElementById("backButton");
            const separator = document.getElementById("separator");

            if (userInput.trim() === correctQuery) {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct"; // Grüne Farbe
                modalMessage.textContent = "Du gibst den Code ein und die Tür entsperrt sich.";
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falsch!";
                resultMessage.className = "result incorrect"; // Rote Farbe
                modalMessage.textContent = "Versuch es noch einmal.";
                backButton.style.display = "none"; // Zurück-Button ausblenden
                separator.style.display = "none"; // Trennstrich ausblenden
            }
            modal.style.display = "block";
        }

        function closeModal() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        function goBack() {
            closeModal();
            // Hier kannst du die Logik hinzufügen, um zum Escape-Room zurückzukehren
            alert("Weiter");
        }

        // Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }