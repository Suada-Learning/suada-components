'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var index = require('./index-CGECY3y4.js');
var index$1 = require('./index-CH3mjxgn.js');
var useThemeWithoutDefault = require('./useThemeWithoutDefault-ChbYiUQZ.js');
var exactProp = require('./exactProp-CPGXuEBM.js');
var emotionElementD59e098f_esm = require('./emotion-element-d59e098f.esm-Cn25-BkS.js');
var useEnhancedEffect = require('./useEnhancedEffect-C2K-3y2k.js');
var GlobalStyles = require('./GlobalStyles-OXfaYkSC.js');

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

const ThemeContext$1 = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== 'production') {
  ThemeContext$1.displayName = 'ThemeContext';
}

function useTheme() {
  const theme = React__namespace.useContext(ThemeContext$1);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- It's not required to run React.useDebugValue in production
    React__namespace.useDebugValue(theme);
  }
  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }
    return mergedTheme;
  }
  return {
    ...outerTheme,
    ...localTheme
  };
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider$3(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const theme = React__namespace.useMemo(() => {
    const output = outerTheme === null ? {
      ...localTheme
    } : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
    value: theme,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$3.propTypes = {
  /**
   * Your component tree.
   */
  children: index.PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: index.PropTypes.oneOfType([index.PropTypes.object, index.PropTypes.func]).isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$3.propTypes = exactProp.exactProp(ThemeProvider$3.propTypes) : void 0;
}

const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React__namespace.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? {
        ...upperTheme,
        [themeId]: mergedTheme
      } : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? {
      ...upperTheme,
      [themeId]: localTheme
    } : {
      ...upperTheme,
      ...localTheme
    };
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useThemeWithoutDefault.useTheme(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  if (process.env.NODE_ENV !== 'production') {
    if (upperTheme === null && typeof localTheme === 'function' || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === 'rtl';
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider$3, {
    theme: privateTheme,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(emotionElementD59e098f_esm.ThemeContext.Provider, {
      value: engineTheme,
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(index$1.RtlProvider, {
        value: rtlValue,
        children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(createTheme.DefaultPropsProvider, {
          value: themeId ? engineTheme[themeId].components : engineTheme.components,
          children: children
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: index.PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: index.PropTypes.string
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = exactProp.exactProp(ThemeProvider$2.propTypes) : void 0;
}

/**
 * Split this component for RSC import
 */
const DEFAULT_MODE_STORAGE_KEY = 'mode';
const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const DEFAULT_ATTRIBUTE = 'data-color-scheme';
function InitColorSchemeScript(options) {
  const {
    defaultMode = 'system',
    defaultLightColorScheme = 'light',
    defaultDarkColorScheme = 'dark',
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute: initialAttribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = 'document.documentElement',
    nonce
  } = options || {};
  let setter = '';
  let attribute = initialAttribute;
  if (initialAttribute === 'class') {
    attribute = '.%s';
  }
  if (initialAttribute === 'data') {
    attribute = '[data-%s]';
  }
  if (attribute.startsWith('.')) {
    const selector = attribute.substring(1);
    setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
  }
  const matches = attribute.match(/\[([^\]]+)\]/); // case [data-color-scheme=%s] or [data-color-scheme]
  if (matches) {
    const [attr, value] = matches[1].split('=');
    if (!value) {
      setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
    }
    setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
  } else {
    setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
  }
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("script", {
    suppressHydrationWarning: true,
    nonce: typeof window === 'undefined' ? nonce : ''
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}

function noop$1() {}
const localStorageManager = ({
  key,
  storageWindow
}) => {
  if (!storageWindow && typeof window !== 'undefined') {
    storageWindow = window;
  }
  return {
    get(defaultValue) {
      if (typeof window === 'undefined') {
        return undefined;
      }
      if (!storageWindow) {
        return defaultValue;
      }
      let value;
      try {
        value = storageWindow.localStorage.getItem(key);
      } catch {
        // Unsupported
      }
      return value || defaultValue;
    },
    set: value => {
      if (storageWindow) {
        try {
          storageWindow.localStorage.setItem(key, value);
        } catch {
          // Unsupported
        }
      }
    },
    subscribe: handler => {
      if (!storageWindow) {
        return noop$1;
      }
      const listener = event => {
        const value = event.newValue;
        if (event.key === key) {
          handler(value);
        }
      };
      storageWindow.addEventListener('storage', listener);
      return () => {
        storageWindow.removeEventListener('storage', listener);
      };
    }
  };
};

function noop() {}
function getSystemMode(mode) {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && mode === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      return 'dark';
    }
    return 'light';
  }
  return undefined;
}
function processState(state, callback) {
  if (state.mode === 'light' || state.mode === 'system' && state.systemMode === 'light') {
    return callback('light');
  }
  if (state.mode === 'dark' || state.mode === 'system' && state.systemMode === 'dark') {
    return callback('dark');
  }
  return undefined;
}
function getColorScheme(state) {
  return processState(state, mode => {
    if (mode === 'light') {
      return state.lightColorScheme;
    }
    if (mode === 'dark') {
      return state.darkColorScheme;
    }
    return undefined;
  });
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = 'light',
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === 'undefined' ? undefined : window,
    storageManager = localStorageManager,
    noSsr = false
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(',');
  const isMultiSchemes = supportedColorSchemes.length > 1;
  const modeStorage = React__namespace.useMemo(() => storageManager?.({
    key: modeStorageKey,
    storageWindow
  }), [storageManager, modeStorageKey, storageWindow]);
  const lightStorage = React__namespace.useMemo(() => storageManager?.({
    key: `${colorSchemeStorageKey}-light`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const darkStorage = React__namespace.useMemo(() => storageManager?.({
    key: `${colorSchemeStorageKey}-dark`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const [state, setState] = React__namespace.useState(() => {
    const initialMode = modeStorage?.get(defaultMode) || defaultMode;
    const lightColorScheme = lightStorage?.get(defaultLightColorScheme) || defaultLightColorScheme;
    const darkColorScheme = darkStorage?.get(defaultDarkColorScheme) || defaultDarkColorScheme;
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  const [isClient, setIsClient] = React__namespace.useState(noSsr || !isMultiSchemes);
  React__namespace.useEffect(() => {
    setIsClient(true); // to rerender the component after hydration
  }, []);
  const colorScheme = getColorScheme(state);
  const setMode = React__namespace.useCallback(mode => {
    setState(currentState => {
      if (mode === currentState.mode) {
        // do nothing if mode does not change
        return currentState;
      }
      const newMode = mode ?? defaultMode;
      modeStorage?.set(newMode);
      return {
        ...currentState,
        mode: newMode,
        systemMode: getSystemMode(newMode)
      };
    });
  }, [modeStorage, defaultMode]);
  const setColorScheme = React__namespace.useCallback(value => {
    if (!value) {
      setState(currentState => {
        lightStorage?.set(defaultLightColorScheme);
        darkStorage?.set(defaultDarkColorScheme);
        return {
          ...currentState,
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        };
      });
    } else if (typeof value === 'string') {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState(currentState => {
          const newState = {
            ...currentState
          };
          processState(currentState, mode => {
            if (mode === 'light') {
              lightStorage?.set(value);
              newState.lightColorScheme = value;
            }
            if (mode === 'dark') {
              darkStorage?.set(value);
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState(currentState => {
        const newState = {
          ...currentState
        };
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            lightStorage?.set(newLightColorScheme);
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            darkStorage?.set(newDarkColorScheme);
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, lightStorage, darkStorage, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React__namespace.useCallback(event => {
    if (state.mode === 'system') {
      setState(currentState => {
        const systemMode = event?.matches ? 'dark' : 'light';

        // Early exit, nothing changed.
        if (currentState.systemMode === systemMode) {
          return currentState;
        }
        return {
          ...currentState,
          systemMode
        };
      });
    }
  }, [state.mode]);

  // Ref hack to avoid adding handleMediaQuery as a dep
  const mediaListener = React__namespace.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React__namespace.useEffect(() => {
    if (typeof window.matchMedia !== 'function' || !isMultiSchemes) {
      return undefined;
    }
    const handler = (...args) => mediaListener.current(...args);

    // Always listen to System preference
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, [isMultiSchemes]);

  // Handle when localStorage has changed
  React__namespace.useEffect(() => {
    if (isMultiSchemes) {
      const unsubscribeMode = modeStorage?.subscribe(value => {
        if (!value || ['light', 'dark', 'system'].includes(value)) {
          setMode(value || defaultMode);
        }
      }) || noop;
      const unsubscribeLight = lightStorage?.subscribe(value => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            light: value
          });
        }
      }) || noop;
      const unsubscribeDark = darkStorage?.subscribe(value => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            dark: value
          });
        }
      }) || noop;
      return () => {
        unsubscribeMode();
        unsubscribeLight();
        unsubscribeDark();
      };
    }
    return undefined;
  }, [setColorScheme, setMode, joinedColorSchemes, defaultMode, storageWindow, isMultiSchemes, modeStorage, lightStorage, darkStorage]);
  return {
    ...state,
    mode: isClient ? state.mode : undefined,
    systemMode: isClient ? state.systemMode : undefined,
    colorScheme: isClient ? colorScheme : undefined,
    setMode,
    setColorScheme
  };
}

const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme = {},
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    defaultColorScheme,
    resolveTheme
  } = options;
  const defaultContext = {
    allColorSchemes: [],
    colorScheme: undefined,
    darkColorScheme: undefined,
    lightColorScheme: undefined,
    mode: undefined,
    setColorScheme: () => {},
    setMode: () => {},
    systemMode: undefined
  };
  const ColorSchemeContext = /*#__PURE__*/React__namespace.createContext(undefined);
  if (process.env.NODE_ENV !== 'production') {
    ColorSchemeContext.displayName = 'ColorSchemeContext';
  }
  const useColorScheme = () => React__namespace.useContext(ColorSchemeContext) || defaultContext;
  const defaultColorSchemes = {};
  const defaultComponents = {};
  function CssVarsProvider(props) {
    const {
      children,
      theme: themeProp,
      modeStorageKey = defaultModeStorageKey,
      colorSchemeStorageKey = defaultColorSchemeStorageKey,
      disableTransitionOnChange = designSystemTransitionOnChange,
      storageManager,
      storageWindow = typeof window === 'undefined' ? undefined : window,
      documentNode = typeof document === 'undefined' ? undefined : document,
      colorSchemeNode = typeof document === 'undefined' ? undefined : document.documentElement,
      disableNestedContext = false,
      disableStyleSheetGeneration = false,
      defaultMode: initialMode = 'system',
      noSsr
    } = props;
    const hasMounted = React__namespace.useRef(false);
    const upperTheme = useTheme();
    const ctx = React__namespace.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const initialTheme = React__namespace.useMemo(() => {
      if (themeProp) {
        return themeProp;
      }
      return typeof defaultTheme === 'function' ? defaultTheme() : defaultTheme;
    }, [themeProp]);
    const scopedTheme = initialTheme[themeId];
    const restThemeProp = scopedTheme || initialTheme;
    const {
      colorSchemes = defaultColorSchemes,
      components = defaultComponents,
      cssVarPrefix
    } = restThemeProp;
    const joinedColorSchemes = Object.keys(colorSchemes).filter(k => !!colorSchemes[k]).join(',');
    const allColorSchemes = React__namespace.useMemo(() => joinedColorSchemes.split(','), [joinedColorSchemes]);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
    const defaultMode = colorSchemes[defaultLightColorScheme] && colorSchemes[defaultDarkColorScheme] ? initialMode : colorSchemes[restThemeProp.defaultColorScheme]?.palette?.mode || restThemeProp.palette?.mode;

    // 1. Get the data about the `mode`, `colorScheme`, and setter functions.
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageManager,
      storageWindow,
      noSsr
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const memoTheme = React__namespace.useMemo(() => {
      // `colorScheme` is undefined on the server and hydration phase
      const calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;

      // 2. get the `vars` object that refers to the CSS custom properties
      const themeVars = restThemeProp.generateThemeVars?.() || restThemeProp.vars;

      // 3. Start composing the theme object
      const theme = {
        ...restThemeProp,
        components,
        colorSchemes,
        cssVarPrefix,
        vars: themeVars
      };
      if (typeof theme.generateSpacing === 'function') {
        theme.spacing = theme.generateSpacing();
      }

      // 4. Resolve the color scheme and merge it to the theme
      if (calculatedColorScheme) {
        const scheme = colorSchemes[calculatedColorScheme];
        if (scheme && typeof scheme === 'object') {
          // 4.1 Merge the selected color scheme to the theme
          Object.keys(scheme).forEach(schemeKey => {
            if (scheme[schemeKey] && typeof scheme[schemeKey] === 'object') {
              // shallow merge the 1st level structure of the theme.
              theme[schemeKey] = {
                ...theme[schemeKey],
                ...scheme[schemeKey]
              };
            } else {
              theme[schemeKey] = scheme[schemeKey];
            }
          });
        }
      }
      return resolveTheme ? resolveTheme(theme) : theme;
    }, [restThemeProp, colorScheme, components, colorSchemes, cssVarPrefix]);

    // 5. Declaring effects
    // 5.1 Updates the selector value to use the current color scheme which tells CSS to use the proper stylesheet.
    const colorSchemeSelector = restThemeProp.colorSchemeSelector;
    useEnhancedEffect.useEnhancedEffect(() => {
      if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== 'media') {
        const selector = colorSchemeSelector;
        let rule = colorSchemeSelector;
        if (selector === 'class') {
          rule = `.%s`;
        }
        if (selector === 'data') {
          rule = `[data-%s]`;
        }
        if (selector?.startsWith('data-') && !selector.includes('%s')) {
          // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
          rule = `[${selector}="%s"]`;
        }
        if (rule.startsWith('.')) {
          colorSchemeNode.classList.remove(...allColorSchemes.map(scheme => rule.substring(1).replace('%s', scheme)));
          colorSchemeNode.classList.add(rule.substring(1).replace('%s', colorScheme));
        } else {
          const matches = rule.replace('%s', colorScheme).match(/\[([^\]]+)\]/);
          if (matches) {
            const [attr, value] = matches[1].split('=');
            if (!value) {
              // for attributes like `data-theme-dark`, `data-theme-light`
              // remove all the existing data attributes before setting the new one
              allColorSchemes.forEach(scheme => {
                colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
              });
            }
            colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, '') : '');
          } else {
            colorSchemeNode.setAttribute(rule, colorScheme);
          }
        }
      }
    }, [colorScheme, colorSchemeSelector, colorSchemeNode, allColorSchemes]);

    // 5.2 Remove the CSS transition when color scheme changes to create instant experience.
    // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
    React__namespace.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css);

        // Force browser repaint
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React__namespace.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React__namespace.useMemo(() => ({
      allColorSchemes,
      colorScheme,
      darkColorScheme,
      lightColorScheme,
      mode,
      setColorScheme,
      setMode: process.env.NODE_ENV === 'production' ? setMode : newMode => {
        if (memoTheme.colorSchemeSelector === 'media') {
          console.error(['MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).', 'To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.', 'To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually'].join('\n'));
        }
        setMode(newMode);
      },
      systemMode
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode, memoTheme.colorSchemeSelector]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested && upperTheme?.cssVarPrefix === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider$2, {
        themeId: scopedTheme ? themeId : undefined,
        theme: memoTheme,
        children: children
      }), shouldGenerateStyleSheet && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(GlobalStyles.GlobalStyles, {
        styles: memoTheme.generateStyleSheets?.() || []
      })]
    });
    if (nested) {
      return element;
    }
    return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The component tree.
     */
    children: index.PropTypes.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: index.PropTypes.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: index.PropTypes.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: index.PropTypes.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: index.PropTypes.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: index.PropTypes.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: index.PropTypes.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: index.PropTypes.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: index.PropTypes.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: index.PropTypes.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: index.PropTypes.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: index.PropTypes.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: index.PropTypes.object
  } : void 0;
  const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
  const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
  const getInitColorSchemeScript = params => InitColorSchemeScript({
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey,
    ...params
  });
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}

function ThemeProviderNoVars({
  theme: themeInput,
  ...props
}) {
  const scopedTheme = createTheme.THEME_ID in themeInput ? themeInput[createTheme.THEME_ID] : undefined;
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider$2, {
    ...props,
    themeId: scopedTheme ? createTheme.THEME_ID : undefined,
    theme: scopedTheme || themeInput
  });
}

const defaultConfig = {
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'mui-mode'
};

const {
  CssVarsProvider: InternalCssVarsProvider} = createCssVarsProvider({
  themeId: createTheme.THEME_ID,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme.createTheme$1({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: theme => {
    const newTheme = {
      ...theme,
      typography: createTheme.createTypography(theme.palette, theme.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return createTheme.styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});

/**
 * TODO: remove this export in v7
 * @deprecated
 * The `CssVarsProvider` component has been deprecated and ported into `ThemeProvider`.
 *
 * You should use `ThemeProvider` and `createTheme()` instead:
 *
 * ```diff
 * - import { CssVarsProvider, extendTheme } from '@mui/material/styles';
 * + import { ThemeProvider, createTheme } from '@mui/material/styles';
 *
 * - const theme = extendTheme();
 * + const theme = createTheme({
 * +   cssVariables: true,
 * +   colorSchemes: { light: true, dark: true },
 * + });
 *
 * - <CssVarsProvider theme={theme}>
 * + <ThemeProvider theme={theme}>
 * ```
 *
 * To see the full documentation, check out https://mui.com/material-ui/customization/css-theme-variables/usage/.
 */
const CssVarsProvider = InternalCssVarsProvider;

function ThemeProvider$1({
  theme,
  ...props
}) {
  if (typeof theme === 'function') {
    return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProviderNoVars, {
      theme: theme,
      ...props
    });
  }
  const muiTheme = createTheme.THEME_ID in theme ? theme[createTheme.THEME_ID] : theme;
  if (!('colorSchemes' in muiTheme)) {
    return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(ThemeProviderNoVars, {
      theme: theme,
      ...props
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CssVarsProvider, {
    theme: theme,
    ...props
  });
}

var ThemeContext = /*#__PURE__*/React.createContext(undefined);
var ThemeProvider = function ThemeProvider(_a) {
  var children = _a.children,
    theme = _a.theme;
  return jsxRuntime.jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: {
      theme: theme
    },
    children: jsxRuntime.jsxRuntimeExports.jsx(ThemeProvider$1, {
      theme: theme,
      children: children
    })
  });
};

exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider-vA9zg89a.js.map
