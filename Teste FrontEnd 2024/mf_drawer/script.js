// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('href');
        window.location.href = url;
    });
});