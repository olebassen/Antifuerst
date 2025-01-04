document.addEventListener('DOMContentLoaded', () => {
// URL zur JSON-Datei auf GitHub
    const jsonUrl = "https://raw.githubusercontent.com/olebassen/Antifuerst/main/json/blogposts.json";

    // Container, in dem die Blogposts angezeigt werden
    const container = document.querySelector('.container');

    // JSON-Daten abrufen und Blogposts einfügen
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Fehler beim Laden der JSON-Datei");
            }
            return response.json();
        })
        .then(blogPosts => {
            blogPosts.forEach(post => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><small>Veröffentlicht am ${post.date}</small></p>
                    <p>${post.content}</p>
                `;
                container.appendChild(article);
            });
        })
        .catch(error => {
            console.error("Fehler:", error);
            container.innerHTML = "<p>Die Blogposts konnten nicht geladen werden.</p>";
        });
    });