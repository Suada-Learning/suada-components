'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/React__namespace.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return React__namespace.useContext(FormControlContext);
}

exports.FormControlContext = FormControlContext;
exports.useFormControl = useFormControl;
//# sourceMappingURL=useFormControl-FEXqYGLd.js.map
