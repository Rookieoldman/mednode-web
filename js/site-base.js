/**
 * GitHub Pages project sites live under /repo-name/; custom domains use /.
 * Sets <base> so root-relative asset paths (css/, js/, ca/) resolve correctly.
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

  var prefix = getSitePrefix();
  window.MEDNODE_PREFIX = prefix;
  window.MEDNODE_BASE = prefix ? prefix + "/" : "/";

  var base = document.createElement("base");
  base.href = window.MEDNODE_BASE;
  document.head.prepend(base);
})();
