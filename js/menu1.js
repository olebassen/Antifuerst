document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById("burger-menu-button");
    const burgerMenu = document.querySelector("nav");
    const contentArea = document.getElementById("content");
    let currentPage = null;

    // Burger-Menü
    if (burgerButton && burgerMenu) {
        burgerButton.addEventListener("click", () => {
            burgerMenu.style.display = burgerMenu.style.display === "block" ? "none" : "block";
        });
    }

    // Beim Laden der Seite die zuletzt geladene Seite anzeigen
    const savedPage = sessionStorage.getItem("currentPage");
    if (savedPage && chapters.includes(savedPage)) {
        const savedIndex = chapters.indexOf(savedPage);
        currentIndex = savedIndex;
        sessionStorage.setItem("currentIndex", currentIndex);
        loadPage(savedPage);
    } else {
        loadPage("home.html");
    }

    // Dynamisches Laden von Kapiteln
    document.querySelectorAll("nav a:not(.dropdown)").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("href");
            if (url && url !== currentPage && chapters.includes(url)) {
                const newIndex = chapters.indexOf(url);
                currentIndex = newIndex;
                sessionStorage.setItem("currentIndex", currentIndex);
                loadPage(url);

                document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
                link.classList.add("active");

                if (window.innerWidth <= 767) burgerMenu.style.display = "none";
            }
        });
    });

    // Dropdown-Menüs
    document.querySelectorAll("nav a.dropdown").forEach(dropdown => {
        dropdown.addEventListener("click", (e) => {
            e.preventDefault();
            const subMenu = dropdown.parentElement.querySelector("ul");
            if (subMenu) subMenu.classList.toggle("open");
        });
    });

    // Kapitel-Navigation
    updateChapterNavigation(currentIndex);

    // Automatische Anpassung bei Größenänderung
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) burgerMenu.style.display = "block";
        else burgerMenu.style.display = "none";
    });
});
