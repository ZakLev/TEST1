// This script loads navbar.html and injects it into the element with id="navbar-container" on page load.
window.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        });
});
