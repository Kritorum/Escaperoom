console.log("JavaScript ist aktiv!"); 

const correctSubnetMask = "255.255.255.0"; // Beispiel für die korrekte Netzmaske

        function checkSubnetMask() {
            const userInput = document.getElementById("subnetMask").value;
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const modal = document.getElementById("myModal");
            const separator = document.getElementById("separator");
            const closeButton = document.getElementById("closeButton");
            const backButton = document.getElementById("backButton");

            if (userInput === correctSubnetMask) {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct"; // Grüne Farbe
                modalMessage.textContent = "Die Tür ist nun offen.";
                closeButton.style.display = "none"; // Schließen-X ausblenden
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falsch!";
                resultMessage.className = "result incorrect"; // Rote Farbe
                modalMessage.textContent = "Zugriff verweigert.";
                closeButton.style.display = "block"; // Schließen-X anzeigen
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