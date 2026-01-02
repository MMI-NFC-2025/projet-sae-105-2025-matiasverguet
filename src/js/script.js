// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const cards = document.querySelectorAll('.carousel-card');
    
    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 20; // gap entre les cards
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalCards - 1;
        
        // Update button opacity
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === totalCards - 1 ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize carousel
    updateCarousel();

    // Update on window resize
    window.addEventListener('resize', updateCarousel);
});

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu__close');

    function openMenu() {
        menuOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menuOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', openMenu);
    }
    if (menuClose && menuOverlay) {
        menuClose.addEventListener('click', closeMenu);
    }
    // Fermer le menu si on clique sur un lien du menu
    document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
