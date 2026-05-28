/**
 * Modal de contacto — comportamiento (el HTML está en ContactModal.astro).
 */
(function () {
  "use strict";

  var EMAIL = "info@mednode.es";

  function getStrings(root) {
    return {
      required: root.dataset.msgRequired || "",
      invalidEmail: root.dataset.msgInvalidEmail || "",
      privacyRequired: root.dataset.msgPrivacyRequired || "",
      sending: root.dataset.msgSending || "",
      success: root.dataset.msgSuccess || "",
      error: root.dataset.msgError || "",
      send: root.dataset.labelSend || "",
      subject: root.dataset.subject || "",
    };
  }

  function buildNextUrl() {
    var url = new URL(window.location.href);
    url.searchParams.set("contacto", "ok");
    url.hash = "contacto-enviado";
    return url.toString();
  }

  function buildGmailUrl(data, subject) {
    var params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: EMAIL,
      su: subject,
    });
    var body =
      "Nombre: " +
      data.name +
      "\nCorreo: " +
      data.email +
      (data.organization ? "\nOrganización: " + data.organization : "") +
      "\n\n" +
      data.message;
    params.set("body", body);
    return "https://mail.google.com/mail/?" + params.toString();
  }

  function getFormData(form) {
    return {
      name: (form.name.value || "").trim(),
      email: (form.email.value || "").trim(),
      organization: (form.organization.value || "").trim(),
      message: (form.message.value || "").trim(),
    };
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function init() {
    var root = document.getElementById("contact-modal");
    var form = document.getElementById("contact-form");
    if (!root || !form) {
      return;
    }

    var strings = getStrings(root);
    var statusEl = document.getElementById("contact-form-status");
    var submitBtn = document.getElementById("contact-submit");
    var gmailLink = document.getElementById("contact-gmail");
    var panel = root.querySelector(".contact-modal__panel");
    var nextInput = document.getElementById("contact-form-next");
    var lastFocus = null;

    if (nextInput) {
      nextInput.value = buildNextUrl();
    }

    function updateGmailHref() {
      if (gmailLink) {
        gmailLink.href = buildGmailUrl(getFormData(form), strings.subject);
      }
    }

    form.addEventListener("input", updateGmailHref);
    updateGmailHref();

    function openModal() {
      lastFocus = document.activeElement;
      root.hidden = false;
      document.body.classList.add("contact-modal-open");
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.className = "contact-form__status";
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = strings.send;
      }
      var nameInput = document.getElementById("contact-name");
      if (nameInput) {
        nameInput.focus();
      }
    }

    function closeModal() {
      root.hidden = true;
      document.body.classList.remove("contact-modal-open");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    root.querySelectorAll("[data-close-contact]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (e) {
      if (!root.hidden && e.key === "Escape") {
        closeModal();
      }
      if (
        !root.hidden &&
        e.key === "Tab" &&
        panel &&
        !panel.contains(document.activeElement)
      ) {
        e.preventDefault();
        var focusable = panel.querySelector(
          'button, input:not([type="hidden"]), textarea, a[href]'
        );
        if (focusable) {
          focusable.focus();
        }
      }
    });

    document.querySelectorAll("[data-open-contact]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (
      window.location.search.indexOf("contacto=ok") !== -1 ||
      window.location.hash === "#contacto-enviado"
    ) {
      openModal();
      if (statusEl) {
        statusEl.textContent = strings.success;
        statusEl.className = "contact-form__status contact-form__status--ok";
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = getFormData(form);

      if (!data.name || !data.email || !data.message) {
        if (statusEl) {
          statusEl.textContent = strings.required;
          statusEl.className = "contact-form__status contact-form__status--error";
        }
        return;
      }
      if (!isValidEmail(data.email)) {
        if (statusEl) {
          statusEl.textContent = strings.invalidEmail;
          statusEl.className = "contact-form__status contact-form__status--error";
        }
        return;
      }
      var privacyCheck = document.getElementById("contact-privacy");
      if (!privacyCheck || !privacyCheck.checked) {
        if (statusEl) {
          statusEl.textContent = strings.privacyRequired;
          statusEl.className = "contact-form__status contact-form__status--error";
        }
        if (privacyCheck) {
          privacyCheck.focus();
        }
        return;
      }
      if (form._gotcha && form._gotcha.value) {
        closeModal();
        return;
      }

      if (nextInput) {
        nextInput.value = buildNextUrl();
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = strings.sending;
      }
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.className = "contact-form__status";
      }

      form.submit();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
