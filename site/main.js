/* ==========================================================================
   IYN | Precision Clinical Informatics & Knowledge Graph Specification
   Zero-Bloat Monolingual (English) Client Script
   ========================================================================== */

/* Theme Toggle (Light / Dark) */
let currentTheme = localStorage.getItem('iyn-theme') || 'light';
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('iyn-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

/* Copy FHIR Code */
const copyFhirBtn = document.getElementById('copyFhirBtn');
if (copyFhirBtn) {
  copyFhirBtn.addEventListener('click', async () => {
    const code = document.getElementById('fhirCode');
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.innerText);
      const prev = copyFhirBtn.textContent;
      copyFhirBtn.textContent = '✓ COPIED TO CLIPBOARD';
      setTimeout(() => {
        copyFhirBtn.textContent = prev;
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  });
}

/* Contact Form Payload Formatting (Client-Side Privacy Sandbox) */
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');
const payloadContainer = document.getElementById('payloadContainer');
const payloadText = document.getElementById('payloadText');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;

    const fd = new FormData(contactForm);
    const domainSelect = document.getElementById('f_domain');
    const domainText = domainSelect.selectedOptions[0].textContent;

    const payload = [
      '==============================================================',
      'IYN // CLINICAL INFORMATICS TECHNICAL SCOPING REQUEST',
      '==============================================================',
      `TIMESTAMP   : ${new Date().toISOString()}`,
      `ORGANIZATION: ${fd.get('org') || 'N/A'}`,
      `NAME        : ${fd.get('name')}`,
      `EMAIL       : ${fd.get('email')}`,
      `DOMAIN      : ${domainText}`,
      '--------------------------------------------------------------',
      'PROJECT SPECIFICATION & DATA REQUIREMENTS:',
      fd.get('message'),
      '=============================================================='
    ].join('\n');

    payloadText.value = payload;
    payloadContainer.hidden = false;

    try {
      await navigator.clipboard.writeText(payload);
      formResult.textContent = '✓ Technical scoping payload formatted and copied to clipboard.';
      formResult.style.color = 'var(--accent-emerald)';
    } catch {
      payloadText.focus();
      payloadText.select();
      formResult.textContent = 'Please manually copy the formatted payload from the box below.';
      formResult.style.color = 'var(--accent-amber)';
    }
  });
}

/* Year */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Initialize Default */
applyTheme(currentTheme);
