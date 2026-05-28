/**
 * Modal de contacto — envío vía FormSubmit + alternativa Gmail.
 */
(function () {
  "use strict";

  var EMAIL = "info@mednode.es";
  var FORMSUBMIT = "https://formsubmit.co/ajax/" + EMAIL;

  var I18N = {
    es: {
      title: "Escríbenos",
      intro: "Cuéntanos tu caso y te responderemos en 1–2 días laborables.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@correo.com",
      org: "Hospital u organización (opcional)",
      orgPh: "Nombre del centro",
      message: "Mensaje",
      messagePh: "¿En qué podemos ayudarte?",
      send: "Enviar mensaje",
      gmail: "Abrir en Gmail",
      close: "Cerrar",
      sending: "Enviando…",
      success: "Mensaje enviado. Te responderemos pronto a la dirección indicada.",
      error:
        "No se pudo enviar automáticamente. Usa «Abrir en Gmail» o escribe a info@mednode.es.",
      subject: "Consulta desde la web MedNode",
      required: "Completa los campos obligatorios.",
      invalidEmail: "Introduce un correo válido.",
    },
    ca: {
      title: "Escriu-nos",
      intro: "Explica'ns el teu cas i et respondrem en 1–2 dies laborables.",
      name: "Nom",
      namePh: "El teu nom",
      email: "Correu",
      emailPh: "tu@correu.cat",
      org: "Hospital o organització (opcional)",
      orgPh: "Nom del centre",
      message: "Missatge",
      messagePh: "En què et podem ajudar?",
      send: "Enviar missatge",
      gmail: "Obrir a Gmail",
      close: "Tancar",
      sending: "Enviant…",
      success: "Missatge enviat. Et respondrem aviat a l'adreça indicada.",
      error:
        "No s'ha pogut enviar automàticament. Fes servir «Obrir a Gmail» o escriu a info@mednode.es.",
      subject: "Consulta des de la web MedNode",
      required: "Omple els camps obligatoris.",
      invalidEmail: "Introdueix un correu vàlid.",
    },
    eu: {
      title: "Idatzi gaitzazu",
      intro: "Kontatu zure kasua eta 1–2 lanegunetan erantzungo dizugu.",
      name: "Izena",
      namePh: "Zure izena",
      email: "Posta",
      emailPh: "zu@posta.com",
      org: "Ospitalea edo erakundea (aukerakoa)",
      orgPh: "Zentroaren izena",
      message: "Mezua",
      messagePh: "Nola lagun zaitzakete?",
      send: "Mezua bidali",
      gmail: "Gmail-en ireki",
      close: "Itxi",
      sending: "Bidaltzen…",
      success: "Mezua bidali da. Laster erantzungo dizugu.",
      error:
        "Ezin izan da automatikoki bidali. Erabili «Gmail-en ireki» edo idatzi info@mednode.es helbidera.",
      subject: "MedNode webgunearen kontsulta",
      required: "Bete nahitaezko eremuak.",
      invalidEmail: "Sartu baliozko helbide elektroniko bat.",
    },
    gl: {
      title: "Escríbenos",
      intro: "Contános o teu caso e responderémosche en 1–2 días laborables.",
      name: "Nome",
      namePh: "O teu nome",
      email: "Correo",
      emailPh: "tu@correo.com",
      org: "Hospital ou organización (opcional)",
      orgPh: "Nome do centro",
      message: "Mensaxe",
      messagePh: "En que podemos axudarche?",
      send: "Enviar mensaxe",
      gmail: "Abrir en Gmail",
      close: "Pechar",
      sending: "Enviando…",
      success: "Mensaxe enviado. Responderémosche pronto ao correo indicado.",
      error:
        "Non se puido enviar automaticamente. Usa «Abrir en Gmail» ou escribe a info@mednode.es.",
      subject: "Consulta desde a web MedNode",
      required: "Completa os campos obrigatorios.",
      invalidEmail: "Introduce un correo válido.",
    },
  };

  function t(lang) {
    return I18N[lang] || I18N.es;
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

  function createModal(lang) {
    var strings = t(lang);
    var root = document.createElement("div");
    root.className = "contact-modal";
    root.id = "contact-modal";
    root.hidden = true;
    root.innerHTML =
      '<div class="contact-modal__backdrop" data-close-contact tabindex="-1"></div>' +
      '<div class="contact-modal__panel" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">' +
      '  <button type="button" class="contact-modal__close" data-close-contact aria-label="' +
      escapeAttr(strings.close) +
      '">&times;</button>' +
      '  <h2 id="contact-modal-title" class="contact-modal__title">' +
      escapeHtml(strings.title) +
      "</h2>" +
      '  <p class="contact-modal__intro">' +
      escapeHtml(strings.intro) +
      "</p>" +
      '  <form class="contact-form" id="contact-form" novalidate>' +
      '    <input type="text" name="_gotcha" class="contact-form__honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '    <div class="contact-form__field">' +
      '      <label for="contact-name">' +
      escapeHtml(strings.name) +
      " <span aria-hidden=\"true\">*</span></label>" +
      '      <input type="text" id="contact-name" name="name" required autocomplete="name" placeholder="' +
      escapeAttr(strings.namePh) +
      '">' +
      "    </div>" +
      '    <div class="contact-form__field">' +
      '      <label for="contact-email">' +
      escapeHtml(strings.email) +
      " <span aria-hidden=\"true\">*</span></label>" +
      '      <input type="email" id="contact-email" name="email" required autocomplete="email" placeholder="' +
      escapeAttr(strings.emailPh) +
      '">' +
      "    </div>" +
      '    <div class="contact-form__field">' +
      '      <label for="contact-org">' +
      escapeHtml(strings.org) +
      "</label>" +
      '      <input type="text" id="contact-org" name="organization" autocomplete="organization" placeholder="' +
      escapeAttr(strings.orgPh) +
      '">' +
      "    </div>" +
      '    <div class="contact-form__field">' +
      '      <label for="contact-message">' +
      escapeHtml(strings.message) +
      " <span aria-hidden=\"true\">*</span></label>" +
      '      <textarea id="contact-message" name="message" rows="5" required placeholder="' +
      escapeAttr(strings.messagePh) +
      '"></textarea>' +
      "    </div>" +
      '    <p class="contact-form__status" id="contact-form-status" role="status" aria-live="polite"></p>' +
      '    <div class="contact-form__actions">' +
      '      <button type="submit" class="btn btn-primary" id="contact-submit">' +
      escapeHtml(strings.send) +
      "</button>" +
      '      <a class="btn btn-secondary contact-form__gmail" id="contact-gmail" href="#" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(strings.gmail) +
      "</a>" +
      "    </div>" +
      "  </form>" +
      "</div>";

    document.body.appendChild(root);
    return { root: root, strings: strings };
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s);
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
    var lang = document.documentElement.lang || "es";
    if (lang.length > 2) {
      lang = lang.slice(0, 2);
    }
    var modal = createModal(lang);
    var root = modal.root;
    var strings = modal.strings;
    var form = document.getElementById("contact-form");
    var statusEl = document.getElementById("contact-form-status");
    var submitBtn = document.getElementById("contact-submit");
    var gmailLink = document.getElementById("contact-gmail");
    var panel = root.querySelector(".contact-modal__panel");
    var lastFocus = null;

    function updateGmailHref() {
      gmailLink.href = buildGmailUrl(getFormData(form), strings.subject);
    }

    form.addEventListener("input", updateGmailHref);
    updateGmailHref();

    function openModal() {
      lastFocus = document.activeElement;
      root.hidden = false;
      document.body.classList.add("contact-modal-open");
      statusEl.textContent = "";
      statusEl.className = "contact-form__status";
      submitBtn.disabled = false;
      submitBtn.textContent = strings.send;
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
        panel.querySelector("button, input, textarea, a").focus();
      }
    });

    document.querySelectorAll("[data-open-contact]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (window.location.search.indexOf("contacto=ok") !== -1 || window.location.hash === "#contacto-enviado") {
      openModal();
      statusEl.textContent = strings.success;
      statusEl.className = "contact-form__status contact-form__status--ok";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = getFormData(form);

      if (!data.name || !data.email || !data.message) {
        statusEl.textContent = strings.required;
        statusEl.className = "contact-form__status contact-form__status--error";
        return;
      }
      if (!isValidEmail(data.email)) {
        statusEl.textContent = strings.invalidEmail;
        statusEl.className = "contact-form__status contact-form__status--error";
        return;
      }
      if (form._gotcha.value) {
        closeModal();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = strings.sending;
      statusEl.textContent = "";
      statusEl.className = "contact-form__status";

      var payload = {
        name: data.name,
        email: data.email,
        organization: data.organization,
        message: data.message,
        _subject: strings.subject,
        _template: "table",
        _captcha: "false",
      };

      fetch(FORMSUBMIT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) {
            throw new Error("submit failed");
          }
          return res.json();
        })
        .then(function () {
          statusEl.textContent = strings.success;
          statusEl.className = "contact-form__status contact-form__status--ok";
          form.reset();
          updateGmailHref();
          submitBtn.disabled = false;
          submitBtn.textContent = strings.send;
        })
        .catch(function () {
          statusEl.textContent = strings.error;
          statusEl.className = "contact-form__status contact-form__status--error";
          submitBtn.disabled = false;
          submitBtn.textContent = strings.send;
        });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
