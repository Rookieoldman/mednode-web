/**
 * Modal de contacto — FormSubmit (POST + autorespuesta) + alternativa Gmail.
 * Clave de formulario activada en mednode.es (no exponer info@ en la URL).
 */
(function () {
  "use strict";

  var EMAIL = "info@mednode.es";
  /** Sustituye el email en la URL tras activar el formulario en FormSubmit */
  var FORMSUBMIT_KEY = "1b11f3f7b22760ae01e4c7d13e05d2b1";
  var FORMSUBMIT_ACTION = "https://formsubmit.co/" + FORMSUBMIT_KEY;

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
      subject: "[MedNode] Consulta web",
      autoresponse:
        "Hola,\n\nGracias por contactar con MedNode. Hemos recibido tu mensaje correctamente.\n\nTe responderemos en 1–2 días laborables a la dirección de correo que nos has indicado.\n\n—\nCorreo automático (no responder a esta dirección).\nConsultas: info@mednode.es\nhttps://mednode.es\n\nEquipo MedNode",
      required: "Completa los campos obligatorios.",
      invalidEmail: "Introduce un correo válido.",
      privacyBefore: "He leído la ",
      privacyLink: "política de privacidad",
      privacyAfter: " y la información sobre protección de datos",
      privacyRequired: "Debes aceptar la política de privacidad para enviar el mensaje.",
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
      subject: "[MedNode] Consulta web",
      autoresponse:
        "Hola,\n\nGràcies per contactar amb MedNode. Hem rebut el teu missatge correctament.\n\nEt respondrem en 1–2 dies laborables a l'adreça de correu que ens has indicat.\n\n—\nCorreu automàtic (no responguis a aquesta adreça).\nConsultes: info@mednode.es\nhttps://mednode.es\n\nEquip MedNode",
      required: "Omple els camps obligatoris.",
      invalidEmail: "Introdueix un correu vàlid.",
      privacyBefore: "He llegit la ",
      privacyLink: "política de privacitat",
      privacyAfter: " i la informació sobre protecció de dades",
      privacyRequired: "Has d'acceptar la política de privacitat per enviar el missatge.",
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
      subject: "[MedNode] Kontsulta web",
      autoresponse:
        "Kaixo,\n\nEskerrik asko MedNode-rekin harremanetan jartzeagatik. Zure mezua ongi jaso dugu.\n\n1–2 lanegunetan erantzungo dizugu adierazi duzun helbide elektronikora.\n\n—\nMezu automatikoa (ez erantzun helbide honetara).\nKontsultak: info@mednode.es\nhttps://mednode.es\n\nMedNode taldea",
      required: "Bete nahitaezko eremuak.",
      invalidEmail: "Sartu baliozko helbide elektroniko bat.",
      privacyBefore: "Irakurri ditut ",
      privacyLink: "pribatutasun-politika",
      privacyAfter: " eta datu pertsonalen babesari buruzko informazioa",
      privacyRequired: "Mezua bidaltzeko pribatutasun-politika onartu behar duzu.",
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
      subject: "[MedNode] Consulta web",
      autoresponse:
        "Ola,\n\nGrazas por contactar con MedNode. Recibimos a túa mensaxe correctamente.\n\nResponderémosche en 1–2 días laborables ao correo que indicaches.\n\n—\nCorreo automático (non respondas a este enderezo).\nConsultas: info@mednode.es\nhttps://mednode.es\n\nEquipo MedNode",
      required: "Completa os campos obrigatorios.",
      invalidEmail: "Introduce un correo válido.",
      privacyBefore: "Lin a ",
      privacyLink: "política de privacidade",
      privacyAfter: " e a información sobre protección de datos",
      privacyRequired: "Debes aceptar a política de privacidade para enviar a mensaxe.",
    },
  };

  var PRIVACY_PATH = {
    es: "/es/privacidad/",
    ca: "/ca/privacitat/",
    eu: "/eu/pribatutasuna/",
    gl: "/gl/privacidade/",
  };

  function t(lang) {
    return I18N[lang] || I18N.es;
  }

  function privacyUrl(lang) {
    return PRIVACY_PATH[lang] || PRIVACY_PATH.es;
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

  function createModal(lang) {
    var strings = t(lang);
    var policyHref = privacyUrl(lang);
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
      '  <form class="contact-form" id="contact-form" method="POST" action="' +
      escapeAttr(FORMSUBMIT_ACTION) +
      '" accept-charset="UTF-8" novalidate>' +
      '    <input type="hidden" name="_subject" value="' +
      escapeAttr(strings.subject) +
      '">' +
      '    <input type="hidden" name="_template" value="table">' +
      '    <input type="hidden" name="_autoresponse" value="' +
      escapeAttr(strings.autoresponse) +
      '">' +
      '    <input type="hidden" name="_next" value="' +
      escapeAttr(buildNextUrl()) +
      '">' +
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
      '    <div class="contact-form__consent">' +
      '      <input type="checkbox" id="contact-privacy" name="privacy_accepted" value="yes" required>' +
      '      <label for="contact-privacy">' +
      escapeHtml(strings.privacyBefore) +
      '<a href="' +
      escapeAttr(policyHref) +
      '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(strings.privacyLink) +
      "</a>" +
      escapeHtml(strings.privacyAfter) +
      ' <span aria-hidden="true">*</span></label>' +
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

    if (
      window.location.search.indexOf("contacto=ok") !== -1 ||
      window.location.hash === "#contacto-enviado"
    ) {
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
      var privacyCheck = document.getElementById("contact-privacy");
      if (!privacyCheck || !privacyCheck.checked) {
        statusEl.textContent = strings.privacyRequired;
        statusEl.className = "contact-form__status contact-form__status--error";
        if (privacyCheck) {
          privacyCheck.focus();
        }
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

      form.submit();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
