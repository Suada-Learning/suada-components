import { b as __rest, a as __assign } from './tslib.es6-C0iDBclc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import { StyledTabNavigationContainer } from './components/Tabs/styled-components.js';
import { T as Typography } from './Typography-C3W5g6UW.js';
import { P as PropTypes } from './index-7RlhbjrJ.js';
import { s as styleFunctionSx, C as ClassNameGenerator, T as THEME_ID, f as createTheme } from './createTheme-TyREZJxB.js';
import { b as styled, c as clsx, g as generateUtilityClasses } from './DefaultPropsProvider-XnNOj87X.js';
import * as React from 'react';
import { u as useTheme } from './useTheme-BogmqHR4.js';
import { e as extendSxProp } from './index-BWpNSanC.js';

function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React.forwardRef(function Box(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = extendSxProp(inProps);
    return /*#__PURE__*/jsxRuntimeExports.jsx(BoxRoot, {
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}

const boxClasses = generateUtilityClasses('MuiBox', ['root']);

const defaultTheme = createTheme();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" ? Box.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

var TabPanel = function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    _a = props.padding,
    padding = _a === void 0 ? 3 : _a,
    other = __rest(props, ["children", "value", "index", "padding"]);
  return jsxRuntimeExports.jsx(Typography, __assign({
    role: 'tabpanel',
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    children: value === index && jsxRuntimeExports.jsx(Box, {
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
  return jsxRuntimeExports.jsx(StyledTabNavigationContainer, {
    "$isTransparent": props.transparent,
    style: props.style,
    children: props.children
  });
};

export { TabPanel as T, TabNavigation as a, activeTabClassName as b };
//# sourceMappingURL=Tabs-C6vNijIy.js.map
