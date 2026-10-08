

const correctAnswer = 21; // Die nächste Fibonacci-Zahl

        function checkCode() {
            const userInput = parseInt(document.getElementById("numberInput").value);
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const modal = document.getElementById("myModal");
            const separator = document.getElementById("separator");
            const closeButton = document.getElementById("closeButton");

            if (userInput === correctAnswer) {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct"; // Grüne Farbe
                modalMessage.textContent = "Das Schloss öffnet sich.";
                closeButton.style.display = "none"; // Schließen-X ausblenden
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falscher Code!";
                resultMessage.className = "result incorrect"; // Rote Farbe
                modalMessage.textContent = "Versuch es noch einmal.";
                closeButton.style.display = "block"; // Schließen-X anzeigen
                backButton.style.display = "none"; // Zurück-Button ausblenden
                separator.style.display = "none"; // Trennstrich für falsches Ergebnis ausblenden
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