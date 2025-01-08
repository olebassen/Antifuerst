document.addEventListener("DOMContentLoaded", () => {
    // Referenzen auf die Navigations-Links oben und unten
    const prevLinkTop = document.getElementById("prev-chapter-top");
    const nextLinkTop = document.getElementById("next-chapter-top");
    const prevLinkBottom = document.getElementById("prev-chapter-bottom");
    const nextLinkBottom = document.getElementById("next-chapter-bottom");

    // Vorherige und nächste Kapitel aktualisieren
    function updateChapterNavigation(newIndex) {
        sessionStorage.setItem("currentIndex", newIndex);

        // Vorheriges Kapitel: Oben und Unten
        if (newIndex > 0) {
            const prevChapterUrl = chapters[newIndex - 1];
            prevLinkTop.style.visibility = "visible";
            prevLinkBottom.style.visibility = "visible";

            prevLinkTop.onclick = (e) => {
                e.preventDefault();
                loadPage(prevChapterUrl);
                updateChapterNavigation(newIndex - 1);
            };
            prevLinkBottom.onclick = (e) => {
                e.preventDefault();
                loadPage(prevChapterUrl);
                updateChapterNavigation(newIndex - 1);
            };
        } else {
            prevLinkTop.style.visibility = "hidden";
            prevLinkBottom.style.visibility = "hidden";
            prevLinkTop.onclick = null;
            prevLinkBottom.onclick = null;
        }

        // Nächstes Kapitel: Oben und Unten
        if (newIndex < chapters.length - 1) {
            const nextChapterUrl = chapters[newIndex + 1];
            nextLinkTop.style.visibility = "visible";
            nextLinkBottom.style.visibility = "visible";

            nextLinkTop.onclick = (e) => {
                e.preventDefault();
                loadPage(nextChapterUrl);
                updateChapterNavigation(newIndex + 1);
            };
            nextLinkBottom.onclick = (e) => {
                e.preventDefault();
                loadPage(nextChapterUrl);
                updateChapterNavigation(newIndex + 1);
            };
        } else {
            nextLinkTop.style.visibility = "hidden";
            nextLinkBottom.style.visibility = "hidden";
            nextLinkTop.onclick = null;
            nextLinkBottom.onclick = null;
        }
    }

    // Beim Laden der Seite die zuletzt geladene Seite anzeigen
    const savedPage = sessionStorage.getItem("currentPage");
    if (savedPage) {
        const savedIndex = chapters.indexOf(savedPage);
        if (savedIndex !== -1) {
            currentIndex = savedIndex;
            sessionStorage.setItem("currentIndex", currentIndex); // Synchronisiere Index
        }
        loadPage(savedPage);
    } else {
        loadPage('home.html'); // Standardseite laden
    }

    // Funktion zum Laden von Seiten
    function loadPage(url) {
        const contentArea = document.getElementById("content");
        const newIndex = chapters.indexOf(url);

        if (newIndex !== -1) {
            // Aktualisiere den Index
            currentIndex = newIndex;
            sessionStorage.setItem("currentIndex", currentIndex);
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP-Error: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                contentArea.innerHTML = html;
                updateChapterNavigation(currentIndex); // Navigation aktualisieren
            })
            .catch(error => {
                contentArea.innerHTML = `<p>Fehler beim Laden der Seite: ${error.message}</p>`;
            });
        console.log(`Aktueller Index: ${currentIndex}`);
        console.log(`Aktuelles Kapitel: ${chapters[currentIndex]}`);
    }

    // Initialisiere Navigation
    updateChapterNavigation(currentIndex);
});
