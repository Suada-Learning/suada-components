import * as React from 'react';
import { d as defaultTheme } from './DefaultPropsProvider-XnNOj87X.js';
import { T as THEME_ID } from './createTheme-TyREZJxB.js';
import { u as useTheme$1 } from './useTheme-BogmqHR4.js';

function useTheme() {
  const theme = useTheme$1(defaultTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}

export { useTheme as u };
//# sourceMappingURL=useTheme-DQH9aq6K.js.map
