import 'react';
import { P as PropTypes } from './index-7RlhbjrJ.js';
import { G as Global } from './emotion-react.esm-BoJ-b5pf.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.func])
} : void 0;

export { GlobalStyles as G };
//# sourceMappingURL=GlobalStyles-nQP1cSOo.js.map
