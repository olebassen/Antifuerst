// Pfad zur JSON-Datei
const jsonFilePath = "json/blogposts.json";

// Container für die Blogeinträge
const blogContainer = document.getElementById("blogContainer");

// Funktion zum Laden und Anzeigen der Blogeinträge
function loadBlogPosts() {
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(post => {
                const blogPost = document.createElement("div");
                blogPost.className = "blog-post";

                const title = document.createElement("h2");
                title.textContent = post.title;

                const date = document.createElement("div");
                date.className = "date";
                date.textContent = new Date(post.date).toLocaleDateString();

                const content = document.createElement("p");
                content.textContent = post.content;

                blogPost.appendChild(title);
                blogPost.appendChild(date);
                blogPost.appendChild(content);

                blogContainer.appendChild(blogPost);
            });
        })
        .catch(error => {
            console.error("Error loading blog posts:", error);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Fehler beim Laden der Blogeinträge.";
            blogContainer.appendChild(errorMessage);
        });
}

// Blogeinträge laden, sobald die Seite geladen ist
document.addEventListener("DOMContentLoaded", loadBlogPosts);
