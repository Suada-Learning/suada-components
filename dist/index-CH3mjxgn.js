'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');

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

const RtlContext = /*#__PURE__*/React__namespace.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
process.env.NODE_ENV !== "production" ? RtlProvider.propTypes = {
  children: index.PropTypes.node,
  value: index.PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React__namespace.useContext(RtlContext);
  return value ?? false;
};

exports.RtlProvider = RtlProvider;
exports.useRtl = useRtl;
//# sourceMappingURL=index-CH3mjxgn.js.map
