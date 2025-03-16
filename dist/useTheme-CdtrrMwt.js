'use strict';

var createTheme = require('./createTheme-D2y0Hy6u.js');
var useThemeWithoutDefault = require('./useThemeWithoutDefault-ChbYiUQZ.js');

const systemDefaultTheme = createTheme.createTheme();
function useTheme(defaultTheme = systemDefaultTheme) {
  return useThemeWithoutDefault.useTheme(defaultTheme);
}

exports.useTheme = useTheme;
//# sourceMappingURL=useTheme-CdtrrMwt.js.map
