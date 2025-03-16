'use strict';

require('react');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var useTheme = require('./useTheme-CdtrrMwt.js');
var GlobalStyles$2 = require('./GlobalStyles-OXfaYkSC.js');

function GlobalStyles$1({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = useTheme.useTheme(defaultTheme);
  const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(GlobalStyles$2.GlobalStyles, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: index.PropTypes.object,
  /**
   * @ignore
   */
  styles: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.array, index.PropTypes.func, index.PropTypes.number, index.PropTypes.object, index.PropTypes.string, index.PropTypes.bool]),
  /**
   * @ignore
   */
  themeId: index.PropTypes.string
} : void 0;

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = props?.theme?.unstable_sxConfig ?? createTheme.defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!createTheme.isPlainObject(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}

function GlobalStyles(props) {
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(GlobalStyles$1, {
    ...props,
    defaultTheme: DefaultPropsProvider.defaultTheme,
    themeId: createTheme.THEME_ID
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.array, index.PropTypes.func, index.PropTypes.number, index.PropTypes.object, index.PropTypes.string, index.PropTypes.bool])
} : void 0;

function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      /*#__PURE__*/
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      jsxRuntime.jsxRuntimeExports.jsx(GlobalStyles, {
        styles: typeof styles === 'function' ? theme => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
  return extendSxProp;
}

exports.extendSxProp = extendSxProp;
exports.globalCss = globalCss;
exports.internal_createExtendSxProp = internal_createExtendSxProp;
//# sourceMappingURL=index-CVCp3oBs.js.map
