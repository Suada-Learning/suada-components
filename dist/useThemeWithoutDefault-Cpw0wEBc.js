import * as React from 'react';
import { T as ThemeContext } from './emotion-element-d59e098f.esm-CqiQKVQ9.js';

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = React.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

export { useTheme as u };
//# sourceMappingURL=useThemeWithoutDefault-Cpw0wEBc.js.map
