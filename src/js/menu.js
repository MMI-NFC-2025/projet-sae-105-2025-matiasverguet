
// menu.js
// Script pour le menu burger, à inclure sur toutes les pages du site

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    const menuCloseBtn = document.querySelector('.menu-close-btn');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.setAttribute('aria-hidden', 'false');
            menuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuCloseBtn && menu) {
        menuCloseBtn.addEventListener('click', () => {
            menu.setAttribute('aria-hidden', 'true');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        });
    }
});
