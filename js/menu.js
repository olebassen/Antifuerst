document.addEventListener("DOMContentLoaded", () => {
    // Referenzen auf wichtige Elemente
    const burgerButton = document.getElementById("burger-menu-button");
    const burgerMenu = document.querySelector("nav");
    const contentArea = document.getElementById("content");

    // Umschalten des Burger-Menüs (für mobile Geräte)
    burgerButton.addEventListener("click", () => {
        if (burgerMenu.style.display === "block") {
            burgerMenu.style.display = "none"; // Menü schließen
        } else {
            burgerMenu.style.display = "block"; // Menü öffnen
        }
    });

    // Dynamisches Laden von Inhalten
    document.querySelectorAll("nav a:not(.dropdown)").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const url = link.getAttribute("href");
            if (url && url !== "#") {
                // Aktivieren des aktuellen Links
                document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
                link.classList.add("active");

                // Inhalt von der URL laden
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP-Error: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then(html => {
                        contentArea.innerHTML = html;
                        if (window.innerWidth <= 767) {
                            burgerMenu.style.display = "none"; // Menü schließen, wenn auf mobilen Geräten
                        }
                    })
                    .catch(error => {
                        contentArea.innerHTML = `<p>Fehler beim Laden der Seite: ${error.message}</p>`;
                    });
            }
        });
    });

    // Umschalten von Dropdown-Untermenüs
    document.querySelectorAll("nav a.dropdown").forEach(dropdown => {
        dropdown.addEventListener("click", (e) => {
            e.preventDefault(); // Standardverhalten verhindern
            const parent = dropdown.parentElement;

            // Öffne oder schließe das aktuelle Untermenü
            const subMenu = parent.querySelector("ul");
            if (subMenu) {
                const isVisible = subMenu.style.display === "block";
                subMenu.style.display = isVisible ? "none" : "block";
            }
        });
    });

    // Automatische Anpassung des Menüs bei Größenänderung
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            burgerMenu.style.display = "block"; // Menü immer sichtbar auf Desktops
            document.querySelectorAll("nav ul ul").forEach(ul => ul.style.display = "none"); // Untermenüs schließen
        } else {
            burgerMenu.style.display = "none"; // Menü auf Mobilgeräten ausblenden
        }
    });
});

function loadPage(url) {
    const contentArea = document.getElementById("content");
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-Error: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            contentArea.innerHTML = html;
        })
        .catch(error => {
            contentArea.innerHTML = `<p>Fehler beim Laden der Seite: ${error.message}</p>`;
        });
}


document.addEventListener('DOMContentLoaded', function() {
    loadPage('home.html');
});