console.log("JavaScript ist aktiv!"); 

let inventory = [];

        function checkCamera() {
            const cameraInput = document.getElementById('cameraInput').value.toLowerCase();
            const motionDetectionInput = document.getElementById('motionDetectionInput').value.toLowerCase();
            const nightVisionInput = document.getElementById('nightVisionInput').value.toLowerCase();

            const result = cameraInput === "false" && motionDetectionInput === "false" && nightVisionInput === "false"; // Erfolgreiche Kombination
            const cameraIcon = document.getElementById("cameraIcon");
            const modal = document.getElementById("myModal");
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const closeButton = document.getElementById("closeButton");
            const backButton = document.getElementById("backButton");
            const separator = document.getElementById("separator");

            if (result) {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct";
                modalMessage.textContent = "Die Kamera ist deaktiviert. Du kannst unbemerkt passieren.";
                cameraIcon.setAttribute("fill", "gray"); // Kamera deaktiviert
                addItemToInventory("Zugangscode");
                closeButton.style.display = "none"; // Schließen-X ausblenden
                separator.style.display = "block"; // Trennstrich anzeigen
                backButton.style.display = "block"; // Zurück-Button anzeigen
            } else {
                resultMessage.textContent = "Falsch!";
                resultMessage.className = "result incorrect";
                modalMessage.textContent = "Die Kamera hat dich erkannt. Versuch es noch einmal.";
                cameraIcon.setAttribute("fill", "red"); // Kamera aktiv
                closeButton.style.display = "block"; // Schließen-X anzeigen
                backButton.style.display = "none"; // Zurück-Button ausblenden
                separator.style.display = "none"; // Trennstrich für falsches Ergebnis ausblenden
            }
            modal.style.display = "block";
        }

        function addItemToInventory(item) {
            if (!inventory.includes(item)) {
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
            alert("Weiter");
        }

        // Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }