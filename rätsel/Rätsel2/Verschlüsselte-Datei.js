console.log("JavaScript ist aktiv!"); 

const correctFiles = ['key.txt', 'schluessel.dat']; // Beispiel für die korrekten Dateien
        const fileContents = {
            'key.txt': `// System-Statusbericht - 2024-02-05
            -------------------------------------
            Benutzer: root  
            Zugriffsebene: Eingeschränkt  
            Sicherheitsprotokoll aktiviert  
            -------------------------------------
            Notiz: Falls verloren, **Code-Fragment** unter „Sicherung A“ nachsehen.
            -------------------------------------
            Datei: Sicherung_A
            CODE: 8392
            -------------------------------------`,

            'system_log.txt': `System Log - 2024-02-05
            --------------------------------
            Fehlercode: 0x45F2
            Speicherzugriff bei 0x0001A2
            Überprüfung läuft...
            --------------------------------`,

            'error_report.txt': `Fehlerbericht - 2024-02-05
            --------------------------------
            Unbekannter Fehler aufgetreten.
            Bitte versuchen Sie es später erneut.
            --------------------------------`,

            'notes.txt': `Notizen - 2024-02-05
            --------------------------------
            Wichtige Informationen:
            - Überprüfung der Systeme
            - Backup erforderlich
            --------------------------------`,

            'log_2023.txt': `Log - 2023
            --------------------------------
            Systemüberprüfung abgeschlossen.
            Keine Fehler gefunden.
            --------------------------------`,

            'error_log.txt': `Fehlerprotokoll - 2023
            --------------------------------
            Fehlercode: 0x1234
            Unbekannte Quelle.
            --------------------------------`,

            'private_note.txt': `Private Notiz - 2024-02-05
            --------------------------------
            Diese Notiz ist vertraulich.
            --------------------------------`,

            'secret.txt': `Geheime Informationen - 2024-02-05
            --------------------------------
            Zugriff nur für autorisierte Benutzer.
            --------------------------------`
        };

        function checkFile(fileName) {
            const modal = document.getElementById("myModal1");
            const fileContent = document.getElementById("fileContent");
            fileContent.textContent = fileContents[fileName] || "Inhalt nicht gefunden.";
            modal.style.display = "block";
        }

        function closeModal1() {
            const modal = document.getElementById("myModal1");
            modal.style.display = "none";
        }
        function closeModal() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        function checkCode() {
            const codeInput = document.getElementById("codeInput").value;
            const codeMessage = document.getElementById("codeMessage");
            const modal = document.getElementById("myModal");
            const resultMessage = document.getElementById("resultMessage");
            const modalMessage = document.getElementById("modalMessage");
            const backButton = document.getElementById("backButton");
            const separator = document.getElementById("separator");

            if (codeInput === "8392") {
                resultMessage.textContent = "Richtig!";
                resultMessage.className = "result correct"; // Grüne Farbe
                modalMessage.textContent = "Die Tür wurde entsperrt.";
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

        function toggleFolder(folderId) {
            const folderContent = document.getElementById(folderId);
            if (folderContent.style.maxHeight) {
                folderContent.style.maxHeight = null; // Schließen
            } else {
                folderContent.style.maxHeight = folderContent.scrollHeight + "px"; // Öffnen
            }
        }

        function goBack() {
            closeModal();
            // Hier kannst du die Logik hinzufügen, um zum Escape-Room zurückzukehren
            alert("Weiter");
        }

        // Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
        window.onclick = function(event) {
            const modal = document.getElementById("myModal1");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }