/**
 * OBSIDIAN Commercial Headquarters — Interactive Application Script
 * High-performance, vanilla JS with zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDemoTabs();
  initInquiryForm();
});

/**
 * Mobile Navigation & Scrollspy
 */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (siteNav.classList.contains('open')) {
          siteNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Scrollspy for active nav link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * Synthetic Demonstration Tabs
 */
function initDemoTabs() {
  const tabs = document.querySelectorAll('.demo-tab');
  const panels = document.querySelectorAll('.demo-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      // Hide all panels
      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      // Activate clicked tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Show corresponding panel
      const targetId = tab.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
    });
  });
}

/**
 * Qualified Commercial Inquiry Form Handling
 */
function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');
  const draftBox = document.getElementById('inquiryDraftBox');
  const draftText = document.getElementById('draftText');
  const copyBtn = document.getElementById('copyDraftBtn');
  const closeDraftBtn = document.getElementById('closeDraftBtn');
  const emailMailtoBtn = document.getElementById('emailMailtoBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const serviceSelect = document.getElementById('serviceNeeded');
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
    const rowCount = document.getElementById('rowCount').value.trim() || 'Not specified';
    const destination = document.getElementById('destinationSoftware').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const privacyChecked = document.getElementById('privacyConsent').checked;

    // Validation
    if (!name || !email || !serviceSelect.value || !destination || !description) {
      showStatus('Please fill in all required fields.', 'text-danger');
      return;
    }

    if (!privacyChecked) {
      showStatus('Please confirm the data privacy acknowledgement.', 'text-danger');
      return;
    }

    // Basic Client-Side Sensitive Data Check (Security Guard)
    const sensitiveRegex = /(\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b)|(\bpassword\b|\bapi[_-]?key\b)/i;
    if (sensitiveRegex.test(description)) {
      showStatus('Notice: Potential sensitive data (card number or credentials) detected. Please remove before submitting.', 'text-danger');
      return;
    }

    // Compile Structured Inquiry Package
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const compiledDraft = [
      `==================================================`,
      `OBSIDIAN VENTURE SYSTEMS — SERVICE INQUIRY PACKAGE`,
      `Timestamp: ${timestamp}`,
      `==================================================`,
      `Client Name:     ${name}`,
      `Business Email:  ${email}`,
      `Service:         ${serviceName}`,
      `Row/Col Count:   ${rowCount}`,
      `Destination:     ${destination}`,
      `--------------------------------------------------`,
      `NON-CONFIDENTIAL PROBLEM SCOPE:`,
      description,
      `--------------------------------------------------`,
      `PRIVACY CONFIRMATION:`,
      `Confidential data omitted; local 7-day deletion protocol acknowledged.`,
      `==================================================`
    ].join('\n');

    // Display Draft
    draftText.value = compiledDraft;
    draftBox.hidden = false;
    draftBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Build Mailto Link
    const subject = encodeURIComponent(`OBSIDIAN Service Inquiry: ${serviceName} - ${name}`);
    const body = encodeURIComponent(compiledDraft);
    emailMailtoBtn.href = `mailto:hello@obsidianventuresystems.tech?cc=obsidian1change1the1world@gmail.com&subject=${subject}&body=${body}`;

    showStatus('Inquiry compiled successfully. You can review and copy your package below.', 'text-success');
  });

  // Copy Draft to Clipboard
  if (copyBtn && draftText) {
    copyBtn.addEventListener('click', () => {
      draftText.select();
      draftText.setSelectionRange(0, 99999); // Mobile
      navigator.clipboard.writeText(draftText.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied to Clipboard!';
        copyBtn.classList.remove('btn-outline');
        copyBtn.classList.add('btn-primary');
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.classList.add('btn-outline');
          copyBtn.classList.remove('btn-primary');
        }, 2000);
      }).catch(() => {
        showStatus('Failed to copy. Please manually copy the text.', 'text-warn');
      });
    });
  }

  // Close Draft Box
  if (closeDraftBtn && draftBox) {
    closeDraftBtn.addEventListener('click', () => {
      draftBox.hidden = true;
    });
  }

  function showStatus(msg, className) {
    formStatus.textContent = msg;
    formStatus.className = `form-status ${className}`;
  }
}
