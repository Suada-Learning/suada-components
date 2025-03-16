'use strict';

var ownerDocument = require('./ownerDocument-BtrF3bbW.js');

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

function ownerWindow(node) {
  const doc = ownerDocument.ownerDocument(node);
  return doc.defaultView || window;
}

exports.debounce = debounce;
exports.ownerWindow = ownerWindow;
//# sourceMappingURL=ownerWindow-Cm-XkKL0.js.map
