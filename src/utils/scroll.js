// Smooth Scrolling Utilities
export function initSmoothScroll() {
    // Handle all anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL hash without jumping
                history.pushState(null, null, href);

                // Focus target for accessibility
                targetElement.focus({ preventScroll: true });
            }
        });
    });
}

// Scroll to top functionality
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Get current scroll position
export function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
