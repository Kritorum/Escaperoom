console.log("JavaScript ist aktiv!"); 

const binaryCode = "101101";
        const decimalCode = parseInt(binaryCode, 2);
        let inventory = [];

        function checkCode() {
            const userInput = document.getElementById("userInput").value;
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const modal = document.getElementById("myModal");
            const closeButton = document.getElementById("closeButton");
            const backButton = document.getElementById("backButton");
            const separator = document.getElementById("separator");

            if (userInput == decimalCode) {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct"; // Grüne Farbe
                modalMessage.textContent = "Du hast einen Schlüssel erhalten.";
                addItemToInventory("Schlüssel");
                closeButton.style.display = "none"; // Schließen-X ausblenden
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falsch!";
                resultMessage.className = "result incorrect"; // Rote Farbe
                modalMessage.textContent = "Versuch es noch einmal.";
                closeButton.style.display = "block"; // Schließen-X anzeigen
                backButton.style.display = "none"; // Zurück-Button ausblenden
                separator.style.display = "none"; // Trennstrich ausblenden
            }
            modal.style.display = "block";
        }

        function addItemToInventory(item) {
            if (!inventory.includes(item)) { // Schlüssel nur einmal hinzufügen
                inventory.push(item);
                document.getElementById("inventory").textContent = "Inventar: " + inventory.join(", ");
            }
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