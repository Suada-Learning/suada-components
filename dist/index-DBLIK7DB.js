import * as React from 'react';
import { P as PropTypes } from './index-7RlhbjrJ.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';

const RtlContext = /*#__PURE__*/React.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
process.env.NODE_ENV !== "production" ? RtlProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React.useContext(RtlContext);
  return value ?? false;
};

export { RtlProvider as R, useRtl as u };
//# sourceMappingURL=index-DBLIK7DB.js.map
