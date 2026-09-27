/**
 * ASHOK HOME HEALTHCARE SERVICES - MAIN JAVASCRIPT
 * Core UI interactions, scroll behaviors, and global initializers
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initScrollToTop();
  updateCurrentYear();
});

/**
 * Toggles navbar background styling on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.main-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on page load
}

/**
 * Controls visibility and click event for the Scroll-To-Top button
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Updates dynamic year in copyright notice
 */
function updateCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
