function loadPage(id, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    });
}

loadPage("header", "header.html");
loadPage("navbar", "navbar.html");
loadPage("footer", "footer.html");
