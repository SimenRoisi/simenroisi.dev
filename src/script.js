console.log('Portfolio script loaded.');

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Scroll Animations
    // Select main content containers in each section to animate
    const animatedElements = document.querySelectorAll('section > div');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on index if needed, or just trigger
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        // Add base transition classes
        el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');

        // Skip adding opacity-0 to Hero if it already has animation, 
        // but our generic selector 'section > div' captures the Hero container too.
        // The Hero HTML already has specific animations on inner children, 
        // so applying this to the parent 'div' might conflict or double-animate.
        // Let's exclude #hero if possible, or just accept it.
        // Hero has 'max-w-7xl...' as direct child of section.

        if (el.parentElement.id === 'hero') {
            // Hero already handles its own inner animations. 
            // We can remove the classes we just added to avoid conflict
            el.classList.remove('opacity-0', 'translate-y-10');
            // Or better, don't observe it.
        } else {
            observer.observe(el);
        }
    });
});
