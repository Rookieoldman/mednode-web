/**
 * Tema claro / oscuro — persiste en localStorage y respeta prefers-color-scheme.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "mednode-theme";
  var META_COLORS = { light: "#f0f7fc", dark: "#0f2847" };

  function getPreferred() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    } catch (e) {
      /* ignore */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && META_COLORS[theme]) {
      meta.setAttribute("content", META_COLORS[theme]);
    }
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.setAttribute("aria-label", btn.getAttribute(isDark ? "data-label-light" : "data-label-dark"));
    });
  }

  function setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
    apply(theme);
  }

  function toggle() {
    var current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  }

  apply(getPreferred());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-theme-toggle]");
    if (btn) {
      e.preventDefault();
      toggle();
    }
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (mq) {
    try {
      if (localStorage.getItem(STORAGE_KEY)) {
        return;
      }
    } catch (err) {
      /* ignore */
    }
    apply(mq.matches ? "dark" : "light");
  });
})();
