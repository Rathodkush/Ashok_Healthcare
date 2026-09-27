/**
 * ASHOK HOME HEALTHCARE SERVICES - COMPONENT LOADER
 * Seamlessly loads HTML components (header, footer, modals, floating-actions, care-finder, emergency-banner)
 * Works reliably over HTTP/HTTPS and has zero-CORS in-memory fallback for local file:// usage.
 */

(function () {
  'use strict';

  // Detect path prefix based on directory depth
  const isSubfolder = window.location.pathname.toLowerCase().includes('/services/') ||
                      window.location.pathname.toLowerCase().includes('/blog/');
  const prefix = isSubfolder ? '../' : '';

  // Embedded component templates for instant fallback (guarantees local file:// and offline support)
  const COMPONENT_TEMPLATES = {
    topbar: `
      <div class="top-bar">
        <div class="container-max d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-3 text-slate-300">
            <span class="d-none d-sm-inline-flex align-items-center gap-1 text-info fw-semibold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Yeshwanthpur, Bengaluru
            </span>
            <span class="d-inline-flex align-items-center gap-1.5 text-success fw-medium">
              <span class="pulse-dot-green"></span>
              24/7 Doorstep ICU &amp; Nursing Support
            </span>
          </div>
          <div class="d-flex align-items-center gap-3">
            <a href="tel:+917829753538" class="badge bg-primary text-white text-decoration-none px-3 py-1 rounded-pill fw-bold">
              +91 78297 53538
            </a>
          </div>
        </div>
      </div>
    `,

    header: `
      <header class="site-header">
        <div class="top-bar">
          <div class="container-max d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-3 text-slate-300">
              <span class="d-none d-sm-inline-flex align-items-center gap-1 text-info fw-semibold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Yeshwanthpur, Bengaluru
              </span>
              <span class="d-inline-flex align-items-center gap-1.5 text-success fw-medium">
                <span class="pulse-dot-green"></span>
                24/7 Doorstep ICU &amp; Nursing Support
              </span>
            </div>
            <div class="d-flex align-items-center gap-3">
              <a href="tel:+917829753538" class="badge bg-primary text-white text-decoration-none px-3 py-1 rounded-pill fw-bold">
                +91 78297 53538
              </a>
            </div>
          </div>
        </div>

        <nav class="main-navbar">
          <div class="container-max d-flex align-items-center justify-content-between">
            <a href="{{PREFIX}}index.html" class="d-flex align-items-center text-decoration-none">
              <img src="{{PREFIX}}images/ashoklogoh-tras.png" alt="Ashok Home Healthcare Services" class="navbar-logo-img">
            </a>

            <!-- Desktop Navigation Links -->
            <div class="d-none d-lg-flex align-items-center gap-1">
              <a href="{{PREFIX}}index.html" class="nav-item-link" data-nav="home">Home</a>
              <a href="{{PREFIX}}about.html" class="nav-item-link" data-nav="about">About Us</a>

              <div class="nav-dropdown">
                <a href="{{PREFIX}}services.html" class="nav-item-link" data-nav="services">
                  Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div class="mega-menu">
                  <a href="{{PREFIX}}services/home-nursing.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Home Nursing Care</span>
                    <span class="mega-menu-item-desc">Registered GNM &amp; B.Sc nurses (12h/24h)</span>
                  </a>
                  <a href="{{PREFIX}}services/home-icu.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Home ICU Setup</span>
                    <span class="mega-menu-item-desc">Ventilators, multipara monitors &amp; critical care</span>
                  </a>
                  <a href="{{PREFIX}}services/rehabilitation.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Neuro &amp; Ortho Rehab</span>
                    <span class="mega-menu-item-desc">Stroke, spinal cord &amp; trauma recovery</span>
                  </a>
                  <a href="{{PREFIX}}services/physiotherapy.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Physiotherapy at Home</span>
                    <span class="mega-menu-item-desc">Post-surgery mobility &amp; pain relief</span>
                  </a>
                  <a href="{{PREFIX}}services/elder-care.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Elder Care &amp; Palliative</span>
                    <span class="mega-menu-item-desc">Senior care &amp; medication assistance</span>
                  </a>
                  <a href="{{PREFIX}}services/diagnostic-services.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">Diagnostic Lab Tests</span>
                    <span class="mega-menu-item-desc">Doorstep blood &amp; sample collection</span>
                  </a>
                  <a href="{{PREFIX}}services/ambulance.html" class="mega-menu-item">
                    <span class="mega-menu-item-title">24/7 ALS Ambulance</span>
                    <span class="mega-menu-item-desc">Advanced life support patient transport</span>
                  </a>
                  <a href="{{PREFIX}}services.html" class="mega-menu-item">
                    <span class="mega-menu-item-title text-primary">All Healthcare Services</span>
                    <span class="mega-menu-item-desc">Explore full service spectrum</span>
                  </a>
                </div>
              </div>

              <a href="{{PREFIX}}products.html" class="nav-item-link" data-nav="products">Equipment &amp; Products</a>
              <a href="{{PREFIX}}gallery.html" class="nav-item-link" data-nav="gallery">Gallery</a>
              <a href="{{PREFIX}}careers.html" class="nav-item-link" data-nav="careers">Careers</a>
              <a href="{{PREFIX}}contact.html" class="nav-item-link" data-nav="contact">Contact</a>
            </div>

            <!-- Action Buttons -->
            <div class="d-none d-lg-flex align-items-center gap-2">
              <button type="button" onclick="openAssessmentModal('Home Healthcare')" class="btn-primary-custom" style="padding: 0.65rem 1.4rem; font-size: 0.85rem;">
                Book Assessment
              </button>
            </div>

            <!-- Mobile Trigger -->
            <div class="d-flex align-items-center gap-2 d-lg-none">
              <button type="button" onclick="openAssessmentModal('Home Healthcare')" class="btn btn-primary btn-sm rounded-pill fw-bold px-3">Book Care</button>
              <button type="button" id="mobileMenuToggle" class="btn btn-light rounded-3 p-2" aria-label="Toggle navigation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    `,

    footer: `
      <footer class="site-footer">
        <div class="container-max">
          <div class="row g-4 g-lg-5 mb-5">
            <div class="col-lg-4">
              <a href="{{PREFIX}}index.html" class="d-inline-block mb-3">
                <img src="{{PREFIX}}images/ashoklogoh-tras.png" alt="Ashok Home Healthcare Services" style="height: 48px; filter: brightness(0) invert(1);">
              </a>
              <p class="text-slate-400 small mb-4">
                Ashok Home Healthcare Services is Bengaluru's premier provider of clinical home ICU setup, licensed bedside nursing, neuro rehabilitation, and certified surgical equipment rental. Founded and supervised by former Apollo Hospitals clinical nurse leaders.
              </p>
              <div class="d-flex flex-column gap-2 text-xs text-slate-300">
                <div class="d-flex align-items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary flex-shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>28, Ground Floor, 4th Cross Rd, A. T. Street, Dr. Ambedkar Nagar, Yeshwanthpur, Bengaluru, Karnataka 560022</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a href="mailto:contact@ashokhealthcare.com" class="text-slate-300 text-decoration-none">contact@ashokhealthcare.com</a>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-success flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>24 Hours a Day / 7 Days a Week Emergency Support</span>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-2">
              <h4 class="text-xs text-uppercase fw-bold text-white mb-3 tracking-wider">Clinical Services</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small text-slate-400 mb-0">
                <li><a href="{{PREFIX}}services/home-nursing.html">Home Nursing</a></li>
                <li><a href="{{PREFIX}}services/home-icu.html">Home ICU Setup</a></li>
                <li><a href="{{PREFIX}}services/rehabilitation.html">Neuro Rehab</a></li>
                <li><a href="{{PREFIX}}services/physiotherapy.html">Physiotherapy</a></li>
                <li><a href="{{PREFIX}}services/elder-care.html">Elder Care</a></li>
                <li><a href="{{PREFIX}}services/diagnostic-services.html">Diagnostics</a></li>
                <li><a href="{{PREFIX}}services/ambulance.html">ALS Ambulance</a></li>
              </ul>
            </div>

            <div class="col-6 col-lg-3">
              <h4 class="text-xs text-uppercase fw-bold text-white mb-3 tracking-wider">Equipment Rent &amp; Buy</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small text-slate-400 mb-0">
                <li><a href="{{PREFIX}}products.html">Oxygen Concentrators (5L/10L)</a></li>
                <li><a href="{{PREFIX}}products.html">BiPAP &amp; CPAP Machines</a></li>
                <li><a href="{{PREFIX}}products.html">Portable ICU Ventilators</a></li>
                <li><a href="{{PREFIX}}products.html">Motorized ICU Hospital Beds</a></li>
                <li><a href="{{PREFIX}}products.html">Multipara Patient Monitors</a></li>
                <li><a href="{{PREFIX}}products.html">Motorized Wheelchairs</a></li>
              </ul>
            </div>

            <div class="col-6 col-lg-3">
              <h4 class="text-xs text-uppercase fw-bold text-white mb-3 tracking-wider">Company &amp; Legal</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small text-slate-400 mb-0">
                <li><a href="{{PREFIX}}about.html">About Ashok Healthcare</a></li>
                <li><a href="{{PREFIX}}careers.html">Careers &amp; Vacancies</a></li>
                <li><a href="{{PREFIX}}blog.html">Healthcare Insights Blog</a></li>
                <li><a href="{{PREFIX}}gallery.html">Photo &amp; Video Gallery</a></li>
                <li><a href="{{PREFIX}}contact.html">Contact &amp; Dispatch Hub</a></li>
                <li><a href="{{PREFIX}}privacy.html">Privacy Policy</a></li>
                <li><a href="{{PREFIX}}terms.html">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div class="pt-4 border-top border-slate-800 d-flex flex-column flex-sm-row align-items-center justify-content-between small text-slate-500 gap-2">
            <div>© <span id="currentYear">2026</span> Ashok Home Healthcare Services. All Rights Reserved.</div>
            <div class="d-flex align-items-center gap-3">
              <a href="https://maps.app.goo.gl/AYZDX2eLoGjnKWXC9" target="_blank" rel="noreferrer" class="text-slate-400 text-decoration-none">Google Maps Direction</a>
              <span>|</span>
              <span class="text-slate-400">Yeshwanthpur, Bengaluru</span>
            </div>
          </div>
        </div>
      </footer>
    `,

    'floating-actions': `
      <div class="floating-actions-desktop">
        <button type="button" id="scrollTopBtn" class="floating-scroll-top" aria-label="Scroll to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
        <a href="https://wa.me/917829753538?text=Hello%20Ashok%20Healthcare%2C%20I%20need%20home%20healthcare%20support." target="_blank" rel="noreferrer" class="floating-circle-btn" style="background-color: var(--whatsapp-color);" aria-label="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        </a>
        <a href="tel:+917829753538" class="floating-circle-btn" style="background-color: var(--primary-500);" aria-label="Call Now">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>

      <div class="floating-actions-mobile">
        <a href="tel:+917829753538" class="flex-grow-1 py-3 text-center text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-2" style="background-color: var(--primary-500);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Helpline
        </a>
        <a href="https://wa.me/917829753538?text=Hello%20Ashok%20Healthcare%2C%20I%20need%20home%20healthcare%20support." target="_blank" rel="noreferrer" class="flex-grow-1 py-3 text-center text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-2" style="background-color: var(--whatsapp-color);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp
        </a>
      </div>
      <div class="mobile-bottom-spacer"></div>
    `,

    emergency: `
      <div class="emergency-strip bg-danger text-white py-2 px-3">
        <div class="container-max d-flex flex-wrap align-items-center justify-content-between gap-2 text-xs">
          <div class="d-flex align-items-center gap-2 fw-semibold">
            <span class="badge bg-white text-danger fw-bold text-uppercase px-2 py-1">24/7 Helpline</span>
            <span>Emergency ICU setup, oxygen concentrator delivery, or critical nursing dispatch in Yeshwanthpur &amp; across Bengaluru.</span>
          </div>
          <div class="d-flex align-items-center gap-3 ms-auto">
            <a href="tel:+917829753538" class="text-white text-decoration-none fw-bold d-inline-flex align-items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 78297 53538
            </a>
            <a href="https://wa.me/917829753538?text=EMERGENCY%3A%20I%20urgently%20need%20healthcare%20support%20at%20home" target="_blank" rel="noreferrer" class="badge bg-success text-white text-decoration-none px-2 py-1 fw-bold">
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </div>
    `
  };

  /**
   * Resolves and replaces {{PREFIX}} placeholders with the proper relative path
   */
  function formatTemplate(html) {
    return html.replace(/{{PREFIX}}/g, prefix);
  }

  /**
   * Loads component into target container
   */
  async function loadComponent(element, componentName) {
    // If running over HTTP/HTTPS, attempt to fetch the clean external component file first
    if (window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch(`${prefix}components/${componentName}.html`);
        if (res.ok) {
          const content = await res.text();
          element.innerHTML = formatTemplate(content);
          return;
        }
      } catch (err) {
        // Fallback to in-memory template
      }
    }

    // Direct in-memory fallback (instant, works on file:// and offline)
    if (COMPONENT_TEMPLATES[componentName]) {
      element.innerHTML = formatTemplate(COMPONENT_TEMPLATES[componentName]);
    }
  }

  /**
   * Automatically discovers and loads all components with [data-component] attributes
   */
  async function initAllComponents() {
    const componentElements = document.querySelectorAll('[data-component]');
    for (const el of componentElements) {
      const name = el.getAttribute('data-component');
      if (name) {
        await loadComponent(el, name);
      }
    }

    // Set current year if placeholder exists
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllComponents);
  } else {
    initAllComponents();
  }

  // Export to window
  window.loadComponent = loadComponent;
})();
