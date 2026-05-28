/**
 * MedNode landing — language helpers + subtle scroll reveal
 */
(function () {
  "use strict";

  var LANG_PATHS = {
    ca: "/ca/",
    es: "/es/",
    eu: "/eu/",
    gl: "/gl/",
  };

  /**
   * Suggested locale from hostname (for optional hints; pages are per-path).
   */
  function localeFromHost() {
    var host = (window.location.hostname || "").toLowerCase();
    if (host === "mednode.cat" || host.endsWith(".mednode.cat")) {
      return "ca";
    }
    if (host === "mednode.es" || host.endsWith(".mednode.es")) {
      return "es";
    }
    return "es";
  }

  function initLangSwitcher() {
    var current = document.documentElement.lang || "es";
    var switchers = document.querySelectorAll("[data-lang-switcher]");
    switchers.forEach(function (nav) {
      Object.keys(LANG_PATHS).forEach(function (code) {
        var link = nav.querySelector('[data-lang="' + code + '"]');
        if (!link) return;
        if (code === current) {
          link.setAttribute("aria-current", "page");
          if (link.tagName === "A") {
            link.removeAttribute("href");
            link.setAttribute("role", "text");
          }
        }
      });
    });
  }

  function initScrollReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.MedNode = {
    localeFromHost: localeFromHost,
    langPaths: LANG_PATHS,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  function onReady() {
    initLangSwitcher();
    initScrollReveal();
  }
})();
