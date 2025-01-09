document.addEventListener("DOMContentLoaded", function () {
    const chapters = [
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
        "blog.html"
    ];

    let currentIndex = chapters.indexOf(window.location.pathname.split("/").pop());

    const prevTopLink = document.getElementById("prev-chapter-top");
    const nextTopLink = document.getElementById("next-chapter-top");
    const prevBottomLink = document.getElementById("prev-chapter-bottom");
    const nextBottomLink = document.getElementById("next-chapter-bottom");

    function updateNavigationLinks() {
        if (currentIndex > 0) {
            const prevPage = chapters[currentIndex - 1];
            prevTopLink.href = prevPage;
            prevBottomLink.href = prevPage;
            prevTopLink.style.visibility = "visible";
            prevBottomLink.style.visibility = "visible";
        } else {
            prevTopLink.style.visibility = "hidden";
            prevBottomLink.style.visibility = "hidden";
        }

        if (currentIndex < chapters.length - 1) {
            const nextPage = chapters[currentIndex + 1];
            nextTopLink.href = nextPage;
            nextBottomLink.href = nextPage;
            nextTopLink.style.visibility = "visible";
            nextBottomLink.style.visibility = "visible";
        } else {
            nextTopLink.style.visibility = "hidden";
            nextBottomLink.style.visibility = "hidden";
        }
    }

    // Burger-Menü Funktionalität
    const burgerButton = document.getElementById("burger-menu-button");
    const burgerMenu = document.getElementById("burger-menu");

    burgerButton.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
    });

    // Dropdown-Menü
    const dropdownLinks = document.querySelectorAll("a.dropdown");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const subMenu = link.nextElementSibling;
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Dynamisches Laden der Inhalte
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) throw new Error("Seite konnte nicht geladen werden");
                return response.text();
            })
            .then(html => {
                document.getElementById("content").innerHTML = html;
                currentIndex = chapters.indexOf(page);
                updateNavigationLinks();
            })
            .catch(error => console.error(error));
    }

    // Navigation
    prevTopLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex > 0) {
            loadContent(chapters[currentIndex - 1]);
        }
    });

    nextTopLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex < chapters.length - 1) {
            loadContent(chapters[currentIndex + 1]);
        }
    });

    prevBottomLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex > 0) {
            loadContent(chapters[currentIndex - 1]);
        }
    });

    nextBottomLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex < chapters.length - 1) {
            loadContent(chapters[currentIndex + 1]);
        }
    });
    const menuLinks = document.querySelectorAll("#burger-menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("#")) {
                event.preventDefault();
                loadContent(href);
                if (window.innerWidth <= 767) {
                    burgerMenu.style.display = "none"; // Menü schließen, wenn auf mobilen Geräten
                }
            }

        });
    });
    // Initiale Navigation aktualisieren
    updateNavigationLinks();
});

document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("toggle-button")) {
        const infobox = event.target.nextElementSibling;
        if (infobox && infobox.style.display === "none") {
            infobox.style.display = "block"; // Infobox einblenden
        } else if (infobox) {
            infobox.style.display = "none"; // Infobox ausblenden
        }
    }
});
// Burger-Menü Funktionalität
const burgerButton = document.getElementById("burger-menu-button");
const burgerMenu = document.getElementById("burger-menu");
burgerButton.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
});

    // Umschalten des Burger-Menüs (für mobile Geräte)
    burgerButton.addEventListener("click", () => {
        if (burgerMenu.style.display === "block") {
            burgerMenu.style.display = "none"; // Menü schließen
        } else {
            burgerMenu.style.display = "block"; // Menü öffnen
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            burgerMenu.style.display = "block"; // Menü immer sichtbar auf Desktops
            document.querySelectorAll("nav ul ul").forEach(ul => ul.style.display = "none"); // Untermenüs schließen
        } else {
            burgerMenu.style.display = "none"; // Menü auf Mobilgeräten ausblenden
        }
    });

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