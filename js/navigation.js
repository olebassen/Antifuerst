// Liste der Kapitel in der richtigen Reihenfolge
const chapters = [
    "index.html",               // Startseite (optional)
    "kapitel1_1.html",
    "kapitel1_2_1.html",
    "kapitel1_2_2.html",
    "kapitel1_2_3.html",
    "kapitel1_2_4.html",
    "kapitel1_2_5.html",
    "kapitel2_1.html",
    "kapitel2_2.html",
    "kapitel2_3.html",
    "kapitel2_4.html",
    "kapitel2_5.html",
    "kapitel2_6.html",
    "kapitel3_1.html",
    "kapitel3_2.html",
    "kapitel3_3.html",
    "kapitel3_4.html",
    "kapitel3_5.html",
    "kapitel3_6.html",
    "kapitel12.html"            // Schlusskapitel
    // Füge hier weitere Kapitel ein, falls notwendig
];

// Ermittle die aktuelle Seite anhand der URL
const currentPath = window.location.pathname.split("/").pop(); // Der aktuelle Dateiname
const currentIndex = chapters.indexOf(currentPath);            // Index der aktuellen Seite in der Kapitel-Liste

// Vorheriges Kapitel
if (currentIndex > 0) {
    const prevChapter = chapters[currentIndex - 1];            // Kapitel davor
    const prevLink = document.getElementById("prev-chapter");  // HTML-Element für vorherigen Link
    prevLink.href = prevChapter;                               // Setze den Link
    prevLink.style.visibility = "visible";                    // Zeige den Link an
}

// Nächstes Kapitel
if (currentIndex < chapters.length - 1) {
    const nextChapter = chapters[currentIndex + 1];            // Kapitel danach
    const nextLink = document.getElementById("next-chapter");  // HTML-Element für nächsten Link
    nextLink.href = nextChapter;                               // Setze den Link
    nextLink.style.visibility = "visible";                    // Zeige den Link an
}
