/**
 * ASHOK HOME HEALTHCARE SERVICES - FORMS JAVASCRIPT
 * Contact & Career form validation, loading states, success states, and direct WhatsApp routing
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCareerForm();
});

/**
 * Contact Page Enquiry Form
 */
function initContactForm() {
  const form = document.getElementById('contactPageForm') || document.getElementById('contactForm');
  if (!form) return;

  const formContainer = document.getElementById('contactFormContainer') || document.getElementById('contactFormView');
  const successView = document.getElementById('contactSuccessState') || document.getElementById('contactSuccessView');
  const resetBtn = document.getElementById('contactResetBtn');
  const whatsappSendBtn = document.getElementById('contactWhatsAppBtn') || document.getElementById('contactWhatsAppSendBtn');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Helper for inline alert
  function showInlineAlert(message, type = 'danger') {
    let alertBox = form.querySelector('.form-inline-alert');
    if (!alertBox) {
      alertBox = document.createElement('div');
      alertBox.className = 'form-inline-alert alert py-2 px-3 mb-3 text-xs fw-semibold rounded-3';
      form.prepend(alertBox);
    }
    alertBox.className = `form-inline-alert alert alert-${type} py-2 px-3 mb-3 text-xs fw-semibold rounded-3`;
    alertBox.textContent = message;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function clearInlineAlert() {
    const alertBox = form.querySelector('.form-inline-alert');
    if (alertBox) alertBox.remove();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearInlineAlert();

    const name = (document.getElementById('contactName')?.value || '').trim();
    const phoneInput = document.getElementById('contactPhone');
    const phone = (phoneInput?.value || '').replace(/\D/g, '');
    const email = (document.getElementById('contactEmail')?.value || '').trim();
    const serviceSelect = document.getElementById('contactService') || document.getElementById('contactServiceSelect');
    const service = serviceSelect ? serviceSelect.value : 'General Enquiry';
    const message = (document.getElementById('contactMessage')?.value || '').trim();

    if (!name) {
      showInlineAlert('Please enter your full name.', 'danger');
      document.getElementById('contactName')?.focus();
      return;
    }

    if (!phone || phone.length < 10) {
      showInlineAlert('Please enter a valid 10-digit mobile number for immediate response.', 'danger');
      phoneInput?.focus();
      return;
    }

    // Submit button loading state & prevent duplicate submission
    let originalBtnHtml = '';
    if (submitBtn) {
      originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span>Submitting Enquiry...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }

      if (formContainer && successView) {
        formContainer.classList.add('d-none');
        successView.classList.remove('d-none');
        successView.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      const whatsappMsg = `Hello Ashok Healthcare,\nI submitted an enquiry on your website:\n- Name: ${name || 'Prospective Client'}\n- Phone: ${phone}\n- Email: ${email || 'Not provided'}\n- Service: ${service}\n- Message: ${message || 'Please contact me.'}`;

      // Open WhatsApp desk with details
      window.open(`https://wa.me/917829753538?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    }, 600);
  });

  if (resetBtn && formContainer && successView) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearInlineAlert();
      successView.classList.add('d-none');
      formContainer.classList.remove('d-none');
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (whatsappSendBtn) {
    whatsappSendBtn.addEventListener('click', () => {
      const name = (document.getElementById('contactName')?.value || '').trim() || 'Prospective Client';
      const phoneInput = document.getElementById('contactPhone');
      const phone = (phoneInput?.value || '').replace(/\D/g, '') || 'Not given';
      const serviceSelect = document.getElementById('contactService') || document.getElementById('contactServiceSelect');
      const service = serviceSelect ? serviceSelect.value : 'General Enquiry';
      const message = (document.getElementById('contactMessage')?.value || '').trim() || 'Please reach out to me.';

      const text = `Hello Ashok Healthcare,\nI would like to enquire about your services.\n- Name: ${name}\n- Phone: ${phone}\n- Service: ${service}\n- Message: ${message}`;
      window.open(`https://wa.me/917829753538?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
}

/**
 * Careers Page Direct Application Form
 */
function initCareerForm() {
  const form = document.getElementById('careerDirectForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('directApplicantName')?.value || '').trim();
    const phoneInput = document.getElementById('directApplicantPhone');
    const phone = (phoneInput?.value || '').replace(/\D/g, '');
    const role = document.getElementById('directApplicantRole')?.value || 'Staff Nurse';
    const qualification = (document.getElementById('directApplicantQualification')?.value || '').trim();
    const exp = document.getElementById('directApplicantExp')?.value || 'Fresher';
    const shift = document.getElementById('directApplicantShift')?.value || 'Flexible';
    const locality = (document.getElementById('directApplicantLocality')?.value || '').trim();
    const skills = (document.getElementById('directApplicantSkills')?.value || '').trim();

    if (!name) {
      alert('Please enter your full name.');
      document.getElementById('directApplicantName')?.focus();
      return;
    }

    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit WhatsApp phone number.');
      phoneInput?.focus();
      return;
    }

    // Submit button loading state
    let originalBtnHtml = '';
    if (submitBtn) {
      originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span>Processing Application...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }

      const waMsg = `Hello Ashok Healthcare HR Desk,\nI wish to apply for a clinical vacancy:\n- Name: ${name}\n- Phone: ${phone}\n- Position: ${role}\n- Qualification: ${qualification || 'N/A'}\n- Experience: ${exp}\n- Preferred Shift: ${shift}\n- Bengaluru Locality: ${locality || 'Any'}\n- Clinical Skills: ${skills || 'Clinical Care'}`;

      window.open(`https://wa.me/917829753538?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 600);
  });
}
