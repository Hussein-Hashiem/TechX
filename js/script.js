// Links
const toggleMenu = document.querySelector('.toggle-menu');
const links = document.querySelector('.links');

toggleMenu.addEventListener('click', function () {
    links.classList.toggle('active');
});

// Scroll to top
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
