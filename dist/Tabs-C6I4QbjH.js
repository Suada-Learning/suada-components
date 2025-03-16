'use strict';

var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Tabs_styledComponents = require('./components/Tabs/styled-components.cjs.js');
var Typography = require('./Typography-BlskmVTp.js');
var index$1 = require('./index-CGECY3y4.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var React = require('react');
var useTheme = require('./useTheme-CdtrrMwt.js');
var index = require('./index-CVCp3oBs.js');

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

function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = DefaultPropsProvider.styled$1('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(createTheme.styleFunctionSx);
  const Box = /*#__PURE__*/React__namespace.forwardRef(function Box(inProps, ref) {
    const theme = useTheme.useTheme(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = index.extendSxProp(inProps);
    return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(BoxRoot, {
      as: component,
      ref: ref,
      className: DefaultPropsProvider.clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}

const boxClasses = DefaultPropsProvider.generateUtilityClasses('MuiBox', ['root']);

const defaultTheme = createTheme.createTheme$1();
const Box = createBox({
  themeId: createTheme.THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: createTheme.ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" ? Box.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: index$1.PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index$1.PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index$1.PropTypes.oneOfType([index$1.PropTypes.arrayOf(index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object, index$1.PropTypes.bool])), index$1.PropTypes.func, index$1.PropTypes.object])
} : void 0;

var TabPanel = function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    _a = props.padding,
    padding = _a === void 0 ? 3 : _a,
    other = tslib_es6.__rest(props, ["children", "value", "index", "padding"]);
  return jsxRuntime.jsxRuntimeExports.jsx(Typography.Typography, tslib_es6.__assign({
    role: 'tabpanel',
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    children: value === index && jsxRuntime.jsxRuntimeExports.jsx(Box, {
      bgcolor: '#f5f6fa',
      p: padding,
      children: children
    })
  }));
};
var activeTabClassName = function activeTabClassName(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
};
var TabNavigation = function TabNavigation(props) {
  return jsxRuntime.jsxRuntimeExports.jsx(components_Tabs_styledComponents.StyledTabNavigationContainer, {
    "$isTransparent": props.transparent,
    style: props.style,
    children: props.children
  });
};

exports.TabNavigation = TabNavigation;
exports.TabPanel = TabPanel;
exports.activeTabClassName = activeTabClassName;
//# sourceMappingURL=Tabs-C6I4QbjH.js.map
