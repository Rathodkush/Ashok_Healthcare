/**
 * ASHOK HOME HEALTHCARE SERVICES - MODALS JAVASCRIPT
 * Quick Assessment, Equipment Quote, and Career Apply Modals
 */

const SITE_CONFIG = {
  phoneRaw: '+917829753538',
  phoneFormatted: '+91 78297 53538',
  whatsappNumber: '917829753538',
};

// Global Assessment Modal Opener
window.openAssessmentModal = function (serviceName) {
  ensureModalsExist();
  const modalEl = document.getElementById('quickAssessmentModal');
  if (!modalEl) return;

  const serviceSelect = document.getElementById('assessmentServiceSelect');
  if (serviceSelect && serviceName) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
          serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Reset state
  resetAssessmentModal();

  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
};

// Global Equipment Quote Modal Opener
window.openEquipmentModal = function (name, category, mode = 'rent', startingPrice = '') {
  ensureModalsExist();
  const modalEl = document.getElementById('equipmentQuoteModal');
  if (!modalEl) return;

  document.getElementById('eqModalProductName').textContent = name || 'Medical Equipment';
  document.getElementById('eqModalCategory').textContent = category || 'Healthcare Supplies';

  const hiddenInputName = document.getElementById('eqModalItemName');
  if (hiddenInputName) hiddenInputName.value = name;

  // Set mode rent vs buy
  setEquipmentMode(mode);

  resetEquipmentModal();

  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
};

// Global Career Modal Opener
window.openCareerModal = function (jobTitle, qualificationRequired) {
  ensureModalsExist();
  const modalEl = document.getElementById('careerApplyModal');
  if (!modalEl) return;

  document.getElementById('careerModalJobTitle').textContent = jobTitle || 'Healthcare Position';
  document.getElementById('careerModalQualification').textContent = 'Required: ' + (qualificationRequired || 'Relevant Clinical Background');

  const hiddenTitleInput = document.getElementById('careerModalInputJob');
  if (hiddenTitleInput) hiddenTitleInput.value = jobTitle;

  resetCareerModal();

  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
};

/**
 * Ensures all modals exist in the DOM
 */
function ensureModalsExist() {
  if (document.getElementById('quickAssessmentModal') && 
      document.getElementById('equipmentQuoteModal') && 
      document.getElementById('careerApplyModal')) {
    return;
  }

  let container = document.getElementById('globalModalsContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'globalModalsContainer';
    document.body.appendChild(container);
  }

  // Quick Assessment Modal
  if (!document.getElementById('quickAssessmentModal')) {
    const el = document.createElement('div');
    el.innerHTML = `
    <div class="modal fade" id="quickAssessmentModal" tabindex="-1" aria-labelledby="quickAssessmentModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content modal-content-healthcare">
          <div class="modal-header modal-header-healthcare">
            <div class="d-flex align-items-center gap-3">
              <span class="fs-4">🩺</span>
              <div>
                <h3 class="modal-title h5 fw-bold text-white mb-0" id="quickAssessmentModalLabel">Get Free Home Care Assessment</h3>
                <p class="text-white-50 text-xs mb-0">Clinical supervisor connects with you within 15 minutes</p>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" id="assessmentFormView">
            <form id="assessmentForm">
              <div class="row g-3 mb-3">
                <div class="col-sm-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Your Name *</label>
                  <input type="text" id="assessmentName" class="form-control form-control-custom" placeholder="e.g. Ramesh Kumar" required>
                </div>
                <div class="col-sm-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Mobile Number *</label>
                  <input type="tel" id="assessmentPhone" class="form-control form-control-custom" pattern="[0-9]{10}" placeholder="10-digit mobile number" required>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-sm-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Service Required *</label>
                  <select id="assessmentServiceSelect" class="form-select form-select-custom" required>
                    <option value="Home Nursing Care">Home Nursing Care</option>
                    <option value="Home ICU Setup">Home ICU Setup</option>
                    <option value="Neuro & Ortho Rehabilitation">Neuro & Ortho Rehabilitation</option>
                    <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                    <option value="Elder Care / Palliative Care">Elder Care / Palliative Care</option>
                    <option value="Medical Equipment Rental/Sales">Medical Equipment Rental/Sales</option>
                    <option value="Emergency Ambulance (ALS)">Emergency Ambulance (ALS)</option>
                    <option value="Diagnostic Tests at Home">Diagnostic Tests at Home</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Area / Location in Bengaluru</label>
                  <input type="text" id="assessmentLocation" class="form-control form-control-custom" placeholder="e.g. Yeshwanthpur, Hebbal...">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Patient Condition / Requirements (Optional)</label>
                <textarea id="assessmentCondition" class="form-control form-control-custom" rows="3" placeholder="e.g. Post-surgery patient needing 24/7 nursing and oxygen support..."></textarea>
              </div>
              <div class="py-2 border-top d-flex align-items-center justify-content-between text-xs text-slate-500 mb-3">
                <span class="text-success fw-bold">✓ Certified Clinical Nurses</span>
                <span>🔒 100% Medical Confidentiality</span>
              </div>
              <div class="d-flex flex-column flex-sm-row gap-2">
                <button type="submit" class="btn-primary-custom flex-grow-1">Request Free Assessment</button>
                <button type="button" id="assessmentWhatsAppBtn" class="btn-whatsapp-custom">WhatsApp Direct</button>
              </div>
            </form>
          </div>
          <div class="modal-body p-4 text-center d-none" id="assessmentSuccessView">
            <div class="rounded-circle bg-success bg-opacity-10 text-success d-inline-flex align-items-center justify-content-center p-3 mb-3" style="width: 64px; height: 64px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 class="fw-bold text-slate-900 mb-2">Request Received Successfully!</h4>
            <p class="text-slate-600 small mb-4">
              Thank you, <strong id="assessmentConfirmName">Patient</strong>. Our Clinical Supervisor will call you at <strong id="assessmentConfirmPhone">+91-XXXXXXXXXX</strong> shortly to arrange your assessment.
            </p>
            <div class="d-flex justify-content-center gap-2">
              <button type="button" id="assessmentSuccessWhatsAppBtn" class="btn-whatsapp-custom">Open in WhatsApp</button>
              <button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    container.appendChild(el.firstElementChild);
    initAssessmentModalEvents();
  }

  // Equipment Quote Modal
  if (!document.getElementById('equipmentQuoteModal')) {
    const el = document.createElement('div');
    el.innerHTML = `
    <div class="modal fade" id="equipmentQuoteModal" tabindex="-1" aria-labelledby="equipmentQuoteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-healthcare">
          <div class="modal-header modal-header-dark">
            <div>
              <div class="text-xs text-uppercase tracking-wider text-primary" id="eqModalCategory">Ashok Surgical Equipment Hub</div>
              <h3 class="modal-title h5 fw-bold text-white mb-0" id="eqModalProductName">Medical Equipment Quote</h3>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" id="eqFormView">
            <div class="d-flex p-1 bg-light rounded-3 mb-3 border">
              <button type="button" id="eqModeRentBtn" class="btn btn-sm flex-grow-1 rounded-2 fw-bold bg-primary-600 text-white">Rent Option</button>
              <button type="button" id="eqModeBuyBtn" class="btn btn-sm flex-grow-1 rounded-2 fw-bold bg-white text-slate-700">Purchase Option</button>
            </div>
            <form id="equipmentQuoteForm">
              <input type="hidden" id="eqModalItemName" value="">
              <div class="mb-3" id="eqDurationWrapper">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Rental Duration</label>
                <select id="eqDurationSelect" class="form-select form-select-custom">
                  <option value="1 Week">1 Week Trial</option>
                  <option value="15 Days">15 Days</option>
                  <option value="1 Month" selected>1 Month Plan (Popular)</option>
                  <option value="3 Months+">Long Term (3+ Months)</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Your Full Name *</label>
                <input type="text" id="eqCustomerName" class="form-control form-control-custom" placeholder="e.g. Anand Murthy" required>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Phone Number *</label>
                <input type="tel" id="eqCustomerPhone" class="form-control form-control-custom" pattern="[0-9]{10}" placeholder="10-digit mobile number" required>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Delivery Locality in Bengaluru</label>
                <input type="text" id="eqCustomerLocality" class="form-control form-control-custom" placeholder="e.g. Yeshwanthpur, Malleshwaram...">
              </div>
              <div class="text-xs text-muted mb-3">
                🚚 Express doorstep delivery, sanitization certification, and technician demo included.
              </div>
              <button type="submit" class="btn-primary-custom w-100">Get Instant Rental / Buy Quote</button>
            </form>
          </div>
          <div class="modal-body p-4 text-center d-none" id="eqSuccessView">
            <div class="rounded-circle bg-success bg-opacity-10 text-success d-inline-flex align-items-center justify-content-center p-3 mb-3" style="width: 64px; height: 64px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 class="fw-bold text-slate-900 mb-2">Quote Request Sent!</h4>
            <p class="text-slate-600 small mb-4">
              We received your request for <strong id="eqConfirmProductName">Product</strong>. Our biomedical technician will call you at <strong id="eqConfirmPhone">+91-XXXXXXXXXX</strong>.
            </p>
            <button type="button" id="eqSuccessWhatsAppBtn" class="btn-whatsapp-custom">Continue on WhatsApp</button>
          </div>
        </div>
      </div>
    </div>`;
    container.appendChild(el.firstElementChild);
    initEquipmentModalEvents();
  }

  // Career Apply Modal
  if (!document.getElementById('careerApplyModal')) {
    const el = document.createElement('div');
    el.innerHTML = `
    <div class="modal fade" id="careerApplyModal" tabindex="-1" aria-labelledby="careerApplyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-healthcare">
          <div class="modal-header modal-header-dark">
            <div>
              <div class="text-xs text-uppercase tracking-wider text-primary" id="careerModalJobTitle">Job Position</div>
              <h3 class="modal-title h5 fw-bold text-white mb-0" id="careerModalQualification">Immediate Vacancy</h3>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" id="careerFormView">
            <form id="careerApplyForm">
              <input type="hidden" id="careerModalInputJob" value="">
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Applicant Full Name *</label>
                <input type="text" id="careerApplicantName" class="form-control form-control-custom" placeholder="e.g. Priya Patil" required>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Contact Number *</label>
                <input type="tel" id="careerApplicantPhone" class="form-control form-control-custom" pattern="[0-9]{10}" placeholder="10-digit mobile number" required>
              </div>
              <div class="mb-3">
                <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Highest Qualification *</label>
                <input type="text" id="careerApplicantQualification" class="form-control form-control-custom" placeholder="e.g. GNM / B.Sc Nursing / BPT / 10th Pass" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">Experience</label>
                  <select id="careerApplicantExperience" class="form-select form-select-custom">
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label text-xs fw-bold text-uppercase text-slate-700">City / Area</label>
                  <input type="text" id="careerApplicantLocation" class="form-control form-control-custom" placeholder="Bengaluru">
                </div>
              </div>
              <button type="submit" class="btn-primary-custom w-100">Submit Application</button>
            </form>
          </div>
          <div class="modal-body p-4 text-center d-none" id="careerSuccessView">
            <div class="rounded-circle bg-success bg-opacity-10 text-success d-inline-flex align-items-center justify-content-center p-3 mb-3" style="width: 64px; height: 64px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 class="fw-bold text-slate-900 mb-2">Application Received!</h4>
            <p class="text-slate-600 small mb-4">
              Thank you for applying for <strong id="careerConfirmJob">Role</strong>. Our HR recruitment lead will reach out to you directly.
            </p>
            <button type="button" id="careerSuccessWhatsAppBtn" class="btn-whatsapp-custom">Connect With HR on WhatsApp</button>
          </div>
        </div>
      </div>
    </div>`;
    container.appendChild(el.firstElementChild);
    initCareerModalEvents();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ensureModalsExist();
  initAssessmentModalEvents();
  initEquipmentModalEvents();
  initCareerModalEvents();
});

/* ============================================================
   HELPER: INLINE ERROR BANNER
   ============================================================ */
function showFormAlert(form, message, type = 'danger') {
  if (!form) return;
  let alertBox = form.querySelector('.form-inline-alert');
  if (!alertBox) {
    alertBox = document.createElement('div');
    alertBox.className = 'form-inline-alert alert py-2 px-3 mb-3 text-xs fw-semibold rounded-3';
    form.insertBefore(alertBox, form.firstChild);
  }
  alertBox.className = `form-inline-alert alert alert-${type} py-2 px-3 mb-3 text-xs fw-semibold rounded-3 d-flex align-items-center justify-content-between`;
  alertBox.innerHTML = `
    <span>${message}</span>
    <button type="button" class="btn-close btn-close-sm ms-2" aria-label="Close" onclick="this.parentElement.remove()"></button>
  `;
}

function clearFormAlert(form) {
  if (!form) return;
  const alertBox = form.querySelector('.form-inline-alert');
  if (alertBox) alertBox.remove();
}

/* ============================================================
   1. ASSESSMENT MODAL
   ============================================================ */
function initAssessmentModalEvents() {
  const form = document.getElementById('assessmentForm');
  const whatsappBtn = document.getElementById('assessmentWhatsAppBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFormAlert(form);

      const name = document.getElementById('assessmentName').value.trim();
      const phone = document.getElementById('assessmentPhone').value.trim();
      const service = document.getElementById('assessmentServiceSelect').value;
      const location = document.getElementById('assessmentLocation').value.trim();
      const condition = document.getElementById('assessmentCondition').value.trim();

      const phoneClean = phone.replace(/[^0-9]/g, '');
      if (phoneClean.length < 10) {
        showFormAlert(form, '⚠️ Please enter a valid 10-digit mobile number.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Request Free Assessment';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing Request...';
      }

      setTimeout(() => {
        // Show success screen
        document.getElementById('assessmentFormView').classList.add('d-none');
        document.getElementById('assessmentSuccessView').classList.remove('d-none');
        document.getElementById('assessmentConfirmName').textContent = name || 'Patient';
        document.getElementById('assessmentConfirmPhone').textContent = phone;

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        // Store pending WhatsApp data
        form.dataset.whatsappMsg = `Hello Ashok Healthcare,\nI need home care assistance.\n- Name: ${name || 'Not provided'}\n- Phone: ${phone}\n- Service Needed: ${service}\n- Locality: ${location || 'Bengaluru'}\n- Notes: ${condition || 'General Inquiry'}`;
      }, 350);
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const form = document.getElementById('assessmentForm');
      let msg = form ? form.dataset.whatsappMsg : '';
      if (!msg) {
        const name = document.getElementById('assessmentName')?.value.trim() || 'Prospective Patient';
        const phone = document.getElementById('assessmentPhone')?.value.trim() || '';
        const service = document.getElementById('assessmentServiceSelect')?.value || 'Home Care';
        msg = `Hello Ashok Healthcare,\nI need home care assistance.\n- Name: ${name}\n- Phone: ${phone}\n- Service: ${service}`;
      }
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  const successWaBtn = document.getElementById('assessmentSuccessWhatsAppBtn');
  if (successWaBtn) {
    successWaBtn.addEventListener('click', () => {
      const form = document.getElementById('assessmentForm');
      const msg = form ? form.dataset.whatsappMsg : 'Hello Ashok Healthcare, I requested an assessment.';
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function resetAssessmentModal() {
  const formView = document.getElementById('assessmentFormView');
  const successView = document.getElementById('assessmentSuccessView');
  const form = document.getElementById('assessmentForm');
  if (formView && successView) {
    formView.classList.remove('d-none');
    successView.classList.add('d-none');
  }
  if (form) {
    form.reset();
    clearFormAlert(form);
  }
}

/* ============================================================
   2. EQUIPMENT QUOTE MODAL
   ============================================================ */
let currentEqMode = 'rent';

function setEquipmentMode(mode) {
  currentEqMode = mode;
  const rentBtn = document.getElementById('eqModeRentBtn');
  const buyBtn = document.getElementById('eqModeBuyBtn');
  const durationWrap = document.getElementById('eqDurationWrapper');

  if (mode === 'rent') {
    if (rentBtn) {
      rentBtn.classList.add('bg-primary-600', 'text-white');
      rentBtn.classList.remove('bg-white', 'text-slate-700');
    }
    if (buyBtn) {
      buyBtn.classList.remove('bg-primary-600', 'text-white');
      buyBtn.classList.add('bg-white', 'text-slate-700');
    }
    if (durationWrap) durationWrap.style.display = 'block';
  } else {
    if (buyBtn) {
      buyBtn.classList.add('bg-primary-600', 'text-white');
      buyBtn.classList.remove('bg-white', 'text-slate-700');
    }
    if (rentBtn) {
      rentBtn.classList.remove('bg-primary-600', 'text-white');
      rentBtn.classList.add('bg-white', 'text-slate-700');
    }
    if (durationWrap) durationWrap.style.display = 'none';
  }
}

function initEquipmentModalEvents() {
  const rentBtn = document.getElementById('eqModeRentBtn');
  const buyBtn = document.getElementById('eqModeBuyBtn');

  if (rentBtn) rentBtn.addEventListener('click', () => setEquipmentMode('rent'));
  if (buyBtn) buyBtn.addEventListener('click', () => setEquipmentMode('buy'));

  const form = document.getElementById('equipmentQuoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFormAlert(form);

      const product = document.getElementById('eqModalProductName').textContent;
      const name = document.getElementById('eqCustomerName').value.trim();
      const phone = document.getElementById('eqCustomerPhone').value.trim();
      const duration = document.getElementById('eqDurationSelect')?.value || '1 Month';
      const locality = document.getElementById('eqCustomerLocality').value.trim();

      const phoneClean = phone.replace(/[^0-9]/g, '');
      if (phoneClean.length < 10) {
        showFormAlert(form, '⚠️ Please enter a valid 10-digit mobile number.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Get Instant Rental / Buy Quote';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Generating Quote...';
      }

      setTimeout(() => {
        document.getElementById('eqFormView').classList.add('d-none');
        document.getElementById('eqSuccessView').classList.remove('d-none');
        document.getElementById('eqConfirmProductName').textContent = product;
        document.getElementById('eqConfirmPhone').textContent = phone;

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        form.dataset.whatsappMsg = `Hello Ashok Surgical,\nI want to ${currentEqMode.toUpperCase()} the following medical equipment:\n- Product: ${product}\n- Plan: ${currentEqMode === 'rent' ? duration : 'Purchase'}\n- Customer: ${name || 'Customer'}\n- Mobile: ${phone}\n- Delivery Area: ${locality || 'Bengaluru'}`;
      }, 350);
    });
  }

  const successWaBtn = document.getElementById('eqSuccessWhatsAppBtn');
  if (successWaBtn) {
    successWaBtn.addEventListener('click', () => {
      const form = document.getElementById('equipmentQuoteForm');
      const msg = form ? form.dataset.whatsappMsg : 'Hello Ashok Surgical, I need an equipment quote.';
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function resetEquipmentModal() {
  const formView = document.getElementById('eqFormView');
  const successView = document.getElementById('eqSuccessView');
  const form = document.getElementById('equipmentQuoteForm');
  if (formView && successView) {
    formView.classList.remove('d-none');
    successView.classList.add('d-none');
  }
  if (form) {
    form.reset();
    clearFormAlert(form);
  }
}

/* ============================================================
   3. CAREER APPLY MODAL
   ============================================================ */
function initCareerModalEvents() {
  const form = document.getElementById('careerApplyForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFormAlert(form);

      const job = document.getElementById('careerModalJobTitle').textContent;
      const name = document.getElementById('careerApplicantName').value.trim();
      const phone = document.getElementById('careerApplicantPhone').value.trim();
      const qualification = document.getElementById('careerApplicantQualification').value.trim();
      const experience = document.getElementById('careerApplicantExperience').value;
      const location = document.getElementById('careerApplicantLocation').value.trim();

      const phoneClean = phone.replace(/[^0-9]/g, '');
      if (phoneClean.length < 10) {
        showFormAlert(form, '⚠️ Please provide a valid 10-digit contact number.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Submit Application';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Submitting Application...';
      }

      setTimeout(() => {
        document.getElementById('careerFormView').classList.add('d-none');
        document.getElementById('careerSuccessView').classList.remove('d-none');
        document.getElementById('careerConfirmJob').textContent = job;

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        form.dataset.whatsappMsg = `Hello Ashok Healthcare HR,\nI am applying for: ${job}\n- Name: ${name || 'Applicant'}\n- Contact: ${phone}\n- Qualification: ${qualification || 'Specified in interview'}\n- Experience: ${experience}\n- Preferred Locality: ${location || 'Bengaluru'}`;
      }, 350);
    });
  }

  const successWaBtn = document.getElementById('careerSuccessWhatsAppBtn');
  if (successWaBtn) {
    successWaBtn.addEventListener('click', () => {
      const form = document.getElementById('careerApplyForm');
      const msg = form ? form.dataset.whatsappMsg : 'Hello Ashok Healthcare HR, I submitted my application.';
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function resetCareerModal() {
  const formView = document.getElementById('careerFormView');
  const successView = document.getElementById('careerSuccessView');
  const form = document.getElementById('careerApplyForm');
  if (formView && successView) {
    formView.classList.remove('d-none');
    successView.classList.add('d-none');
  }
  if (form) {
    form.reset();
    clearFormAlert(form);
  }
}

