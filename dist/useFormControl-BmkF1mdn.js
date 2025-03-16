import * as React from 'react';

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/React.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return React.useContext(FormControlContext);
}

export { FormControlContext as F, useFormControl as u };
//# sourceMappingURL=useFormControl-BmkF1mdn.js.map
