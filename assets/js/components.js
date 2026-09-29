/**
 * ASHOK HOME HEALTHCARE SERVICES - COMPONENTS JAVASCRIPT
 * CareFinder widget, Category filter tabs, FAQ search and accordion, Review filter tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  initCareFinderWidget();
  initServiceFilterTabs();
  initEquipmentFilterTabs();
  initReviewFilterTabs();
  initFaqAccordionAndSearch();
  initPhysioScrollReveal();
  initHeroFloatingBadges();
  initStatsCounter();
});


/* ============================================================
   1. CARE FINDER WIDGET
   ============================================================ */
function initCareFinderWidget() {
  const widget = document.getElementById('careFinderWidget');
  if (!widget) return;

  const optionBtns = widget.querySelectorAll('.care-option-btn');
  let selectedCareName = 'Home Nursing Care';
  let selectedCareId = 'home-nursing';

  optionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      optionBtns.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedCareName = btn.dataset.careName || 'Home Care';
      selectedCareId = btn.dataset.careId || 'home-nursing';
    });
  });

  const consultBtn = document.getElementById('careFinderConsultBtn');
  if (consultBtn) {
    consultBtn.addEventListener('click', () => {
      if (typeof window.openAssessmentModal === 'function') {
        window.openAssessmentModal(selectedCareName);
      }
    });
  }

  const waBtn = document.getElementById('careFinderWhatsAppBtn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const locationSelect = document.getElementById('careFinderLocality');
      const locality = locationSelect ? locationSelect.value : 'Yeshwanthpur & Nearby';
      const msg = `Hello Ashok Healthcare, I am in ${locality} and urgently require ${selectedCareName}. Please assist with doorstep care.`;
      window.open(`https://wa.me/917829753538?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

/* ============================================================
   2. SERVICES CATEGORY FILTER TABS
   ============================================================ */
function initServiceFilterTabs() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-filter-item');

  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-primary-600', 'text-white', 'shadow-md', 'scale-105');
        b.classList.add('bg-white', 'text-slate-700');
      });

      btn.classList.add('bg-primary-600', 'text-white', 'shadow-md', 'scale-105');
      btn.classList.remove('bg-white', 'text-slate-700');

      const filterCategory = btn.dataset.filterCategory;

      serviceCards.forEach((card) => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filterCategory === 'All' || categories.includes(filterCategory)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   3. EQUIPMENT CATEGORY FILTER TABS
   ============================================================ */
function initEquipmentFilterTabs() {
  const filterBtns = document.querySelectorAll('.equipment-filter-btn');
  const eqCards = document.querySelectorAll('.equipment-filter-item');

  if (!filterBtns.length || !eqCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700');
      });

      btn.classList.add('bg-slate-900', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700');

      const category = btn.dataset.category;

      eqCards.forEach((card) => {
        if (category === 'All' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   4. GOOGLE REVIEWS FILTER TABS
   ============================================================ */
function initReviewFilterTabs() {
  const filterBtns = document.querySelectorAll('.review-filter-btn');
  const reviewCards = document.querySelectorAll('.review-filter-item');

  if (!filterBtns.length || !reviewCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });

      btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-slate-100', 'text-slate-600');

      const category = btn.dataset.category;

      reviewCards.forEach((card) => {
        if (category === 'All' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   5. FAQ INTERACTIVE ACCORDION & LIVE SEARCH
   ============================================================ */
function initFaqAccordionAndSearch() {
  const faqCards = document.querySelectorAll('.faq-grid-card, .faq-modern-card, .faq-accordion-item');
  const catPills = document.querySelectorAll('.faq-cat-pill');
  const searchInput = document.getElementById('faqSearchInput');

  let activeCategory = 'All';
  let activeSearch = '';

  function applyFaqFilters() {
    faqCards.forEach((card) => {
      const cardCat = card.dataset.faqCat || '';
      const text = card.textContent.toLowerCase();
      const matchesCat = activeCategory === 'All' || cardCat === activeCategory;
      const matchesSearch = !activeSearch || text.includes(activeSearch);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Header & Card Click Toggles
  faqCards.forEach((card) => {
    // 1. Grid Card Accordion (Home page and others)
    if (card.classList.contains('faq-grid-card')) {
      const btn = card.querySelector('.faq-question-btn');
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'region');

      const toggleGridCard = () => {
        const isOpen = card.classList.contains('is-open');
        if (isOpen) {
          card.classList.remove('is-open');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.add('is-open');
          if (btn) btn.setAttribute('aria-expanded', 'true');
        }
      };

      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleGridCard();
        });
      }

      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button, input, select')) return;
        toggleGridCard();
      });

      card.addEventListener('keydown', (e) => {
        if ((e.target === card || e.target === btn) && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          toggleGridCard();
        }
      });
      return;
    }

    // 2. Legacy Modern Card & Accordion Items
    const header = card.querySelector('.faq-modern-card-header, .faq-accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        // Close other open cards for clean experience
        faqCards.forEach((other) => {
          if (other !== card && !other.classList.contains('faq-grid-card')) {
            other.classList.remove('active');
            const icon = other.querySelector('.faq-icon');
            if (icon) icon.innerHTML = '+';
          }
        });

        if (isActive) {
          card.classList.remove('active');
          const icon = card.querySelector('.faq-icon');
          if (icon) icon.innerHTML = '+';
        } else {
          card.classList.add('active');
          const icon = card.querySelector('.faq-icon');
          if (icon) icon.innerHTML = '−';
        }
      });
    }
  });

  // Category Tab Pills
  if (catPills.length) {
    catPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        catPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.dataset.faqCat || 'All';
        applyFaqFilters();
      });
    });
  }

  // Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      applyFaqFilters();
    });
  }
}

/* ============================================================
   6. PHYSIOTHERAPY SERVICES SCROLL REVEAL (PhysioX10 Pattern)
   Staggered entrance animation with reduced-motion support
   ============================================================ */
function initPhysioScrollReveal() {
  const cards = document.querySelectorAll('.physio-service-card');
  if (!cards.length) return;
  cards.forEach((card) => card.classList.add('is-revealed'));
}

/* ============================================================
   7. HERO FLOATING BADGES INTERACTIVE DISPATCH
   ============================================================ */
function initHeroFloatingBadges() {
  const badges = document.querySelectorAll('.floating-badge');
  if (!badges.length) return;

  badges.forEach((badge) => {
    badge.setAttribute('role', 'button');
    badge.setAttribute('tabindex', '0');
    badge.title = 'Click to book ' + badge.textContent.trim().split('\n')[0];

    badge.addEventListener('click', () => {
      const text = badge.textContent.toLowerCase();
      let service = 'Home Healthcare';
      if (text.includes('nursing')) service = 'Home Nursing Care';
      else if (text.includes('icu')) service = 'Home ICU Setup';
      else if (text.includes('concentrator')) service = 'Medical Equipment Rental/Sales';
      else if (text.includes('multi-care')) service = 'Physiotherapy at Home';

      if (typeof window.openAssessmentModal === 'function') {
        window.openAssessmentModal(service);
      }
    });

    badge.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        badge.click();
      }
    });
  });
}

/* ============================================================
   8. ACHIEVEMENTS & STATISTICS COUNTER (Intersection Observer)
   ============================================================ */
function initStatsCounter() {
  const statsSection = document.getElementById('achievements-section');
  if (!statsSection) return;

  const counterElements = statsSection.querySelectorAll('[data-counter-target]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const triggerAnimation = () => {
    // Reveal section with staggered animations
    statsSection.classList.add('stats-visible');

    if (prefersReducedMotion) {
      counterElements.forEach((el) => {
        const target = parseInt(el.getAttribute('data-counter-target'), 10);
        if (!isNaN(target)) {
          el.textContent = target;
        }
      });
      return;
    }

    const duration = 2000; // 2 seconds count-up duration
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth Cubic Ease-Out
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      counterElements.forEach((el) => {
        const target = parseInt(el.getAttribute('data-counter-target'), 10);
        if (!isNaN(target)) {
          const current = Math.round(easeProgress * target);
          el.textContent = current;
        }
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        counterElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          if (!isNaN(target)) {
            el.textContent = target;
          }
        });
      }
    };

    requestAnimationFrame(animateCounters);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAnimation();
          obs.disconnect(); // Run strictly once!
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    observer.observe(statsSection);
  } else {
    // Graceful fallback for older browsers
    triggerAnimation();
  }
}



