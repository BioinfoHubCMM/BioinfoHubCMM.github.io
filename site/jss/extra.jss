document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.querySelector(".md-search__inner");
    if (searchBox) {
        let githubLink = document.createElement("a");
        githubLink.href = "https://github.com/Anacristina0914/"; // Replace with your hub GitHub link
        githubLink.className = "github-icon";
        githubLink.innerHTML = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">';

        searchBox.appendChild(githubLink);
    }
});
