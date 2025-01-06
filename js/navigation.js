// Liste der Kapitel in der richtigen Reihenfolge
const chapters = [
    "blog.html",

"home.html",

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

"kapitel3_7.html",

"kapitel3_8.html",

"kapitel3_9.html",

"kapitel3_10.html",

"kapitel3_11.html",

"kapitel3_12.html",

"kapitel3_13.html",

"kapitel4_1.html",

"kapitel4_1_1.html",

"kapitel4_1_2.html",

"kapitel4_1_3.html",

"kapitel4_2_1.html",

"kapitel4_2_2.html",

"kapitel4_2_3.html",

"kapitel4_2_4.html",

"kapitel4_2_5.html",

"kapitel4_2_6.html",

"kapitel4_2_7.html",

"kapitel4_3.html",

"kapitel4_4.html",

"kapitel4_5.html",

"kapitel4_6.html",

"kapitel4_7.html",

"kapitel4_8.html",

"kapitel5_1.html",

"kapitel5_2.html",

"kapitel5_3.html",

"kapitel5_4.html",

"kapitel5_5.html",

"kapitel5_6.html",

"kapitel5_7.html",

"kapitel6_1.html",

"kapitel6_2.html",

"kapitel6_3.html",

"kapitel6_3_1.html",

"kapitel6_3_2.html",

"kapitel6_3_3.html",

"kapitel6_3_4.html",

"kapitel6_3_5.html",

"kapitel6_3_6.html",

"kapitel6_3_7.html",

"kapitel6_4.html",

"kapitel6_5_1.html",

"kapitel6_5_2.html",

"kapitel6_5_3.html",

"kapitel6_5_4.html",

"kapitel6_5_5.html",

"kapitel6_6.html",

"kapitel7_1.html",

"kapitel7_2.html",

"kapitel7_3.html",

"kapitel7_4.html",

"kapitel7_5.html",

"kapitel7_6.html",

"kapitel7_7.html",

"kapitel7_8.html",

"kapitel8_1.html",

"kapitel8_2.html",

"kapitel8_3.html",

"kapitel8_4.html",

"kapitel8_5.html",

"kapitel8_6.html",

"kapitel8_7.html",

"kapitel8_8.html",

"kapitel8_9.html",

"kapitel9_0.html",

"kapitel9_1.html",

"kapitel9_2.html",

"kapitel9_3.html",

"kapitel9_4.html",

"kapitel9_5.html",

"kapitel9_6.html",

"kapitel9_7.html",

"kapitel9_8.html",

"kapitel9_9.html",

"kapitel9_10.html",

"kapitel9_11.html",

"kapitel9_12.html",

"kapitel10_1.html",

"kapitel10_2.html",

"kapitel10_3.html",

"kapitel10_4.html",

"kapitel10_5.html",

"kapitel10_6.html",

"kapitel10_7.html",

"kapitel10_8.html",

"kapitel11_1.html",

"kapitel11_2.html",

"kapitel11_3.html",
"kapitel11_4.html",
"kapitel12.html",
    // Schlusskapitel
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
