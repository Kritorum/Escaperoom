console.log("JavaScript ist aktiv!"); 

const correctAnswer = "RGB"; // Die richtige Antwort

        function checkAnswer() {
            const userInput = document.getElementById("userInput").value.trim().toUpperCase();
            const resultMessage = document.getElementById("resultMessage");
            const modal = document.getElementById("myModal");
            const closeButton = document.getElementById("closeButton");
            const backButton = document.getElementById("backButton");
            const separator = document.getElementById("separator");

            if (userInput === correctAnswer) {
                resultMessage.textContent = "Richtig!";
                modalMessage.textContent = "Die Farben ergeben das Wort ‘RGB’. Du hast den Code geknackt!";
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falsch!";
                resultMessage.className = "result incorrect"; // Rote Farbe
                modalMessage.textContent = "Versuch es noch einmal.";
                backButton.style.display = "none"; // Zurück-Button ausblenden
                separator.style.display = "none"; // Trennstrich ausblenden
            }
            modal.style.display = "block"; // Modal anzeigen
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