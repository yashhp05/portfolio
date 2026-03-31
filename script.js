document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Icon change (hamburger to X)
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        });
    });

    // 2. Scroll Reveal Animation
    const revealElements = () => {
        const reveals = document.querySelectorAll('.glass-card, section h3, .space-y-6 > div');
        
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initial check and scroll event
    window.addEventListener('scroll', revealElements);
    revealElements(); // Run once on load

    // 3. Smooth Hover Effect for Profile Image
    const profileImg = document.querySelector('img');
    if(profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.filter = "grayscale(0%) scale(1.05)";
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.filter = "grayscale(100%) scale(1)";
        });
    }
});