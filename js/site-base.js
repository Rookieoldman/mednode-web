/**
 * GitHub Pages project sites live under /repo-name/; custom domains use /.
 * Exposes MEDNODE_PREFIX for the root redirect only (no <base> — breaks mailto: in Chrome).
 */
(function () {
  "use strict";

  var LOCALES = ["ca", "es", "eu", "gl"];

  function getSitePrefix() {
    var host = (location.hostname || "").toLowerCase();
    if (!host.endsWith("github.io")) {
      return "";
    }
    var parts = location.pathname.split("/").filter(Boolean);
    if (!parts.length) {
      return "";
    }
    if (LOCALES.indexOf(parts[0]) === -1) {
      return "/" + parts[0];
    }
    return "";
  }

  window.MEDNODE_PREFIX = getSitePrefix();
  window.MEDNODE_BASE = window.MEDNODE_PREFIX ? window.MEDNODE_PREFIX + "/" : "/";
})();
