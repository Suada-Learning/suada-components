'use strict';

var tslib_es6 = require('../../tslib.es6-Ce89yL0g.js');
var styledComponents_esm = require('../../styled-components.esm-DB2-eBHV.js');
var React = require('react');
var index = require('../../index-CGECY3y4.js');
var DefaultPropsProvider = require('../../DefaultPropsProvider-DfZ5VhSI.js');
var createTheme = require('../../createTheme-D2y0Hy6u.js');
var jsxRuntime = require('../../jsx-runtime-DoH8iSlf.js');
var Paper = require('../../Paper-DRtt8qOm.js');
var chainPropTypes = require('../../chainPropTypes-CIgjMfIp.js');
require('../../Middleware-BpA40f7i.js');
require('../../_commonjsHelpers-CxXfaUfr.js');
require('../../extends-CAYAHNRA.js');
require('../../emotion-element-d59e098f.esm-Cn25-BkS.js');
require('../../useTheme-BxZg-6YN.js');
require('../../useTheme-CdtrrMwt.js');
require('../../useThemeWithoutDefault-ChbYiUQZ.js');

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

function getCardUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiCard', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiCard', ['root']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return DefaultPropsProvider.composeClasses(slots, getCardUtilityClass, classes);
};
const CardRoot = DefaultPropsProvider.styled(Paper.Paper, {
  name: 'MuiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  overflow: 'hidden'
});
const Card = /*#__PURE__*/React__namespace.forwardRef(function Card(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiCard'
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CardRoot, {
    className: DefaultPropsProvider.clsx(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? Card.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: index.PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: chainPropTypes.chainPropTypes(index.PropTypes.bool, props => {
    if (props.raised && props.variant === 'outlined') {
      return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object])
} : void 0;

function getCardContentUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiCardContent', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiCardContent', ['root']);

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return DefaultPropsProvider.composeClasses(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = DefaultPropsProvider.styled('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: 16,
  '&:last-child': {
    paddingBottom: 24
  }
});
const CardContent = /*#__PURE__*/React__namespace.forwardRef(function CardContent(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
    className,
    component = 'div',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CardContentRoot, {
    as: component,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? CardContent.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: index.PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index.PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object])
} : void 0;

var CardContainer = styledComponents_esm.dt.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledCard = styledComponents_esm.dt(Card)(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  padding: 16px;\n  height: 88px;\n  border-radius: 4px;\n  border: 1px solid #d6dae0;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  align-self: stretch;\n  background-color: #fff;\n  box-shadow: none !important;\n"], ["\n  padding: 16px;\n  height: 88px;\n  border-radius: 4px;\n  border: 1px solid #d6dae0;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  align-self: stretch;\n  background-color: #fff;\n  box-shadow: none !important;\n"])));
var StyledIcon = styledComponents_esm.dt.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  width: 56px;\n  height: 56px;\n  border-radius: var(--Padding-4px, 4px);\n  background: ", ";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: ", ";\n  svg {\n    width: 23.172px;\n    height: 23.172px;\n    flex-shrink: 0;\n    color: ", ";\n  }\n"], ["\n  width: 56px;\n  height: 56px;\n  border-radius: var(--Padding-4px, 4px);\n  background: ", ";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: ", ";\n  svg {\n    width: 23.172px;\n    height: 23.172px;\n    flex-shrink: 0;\n    color: ", ";\n  }\n"])), function (_a) {
  var $backgroundColor = _a.$backgroundColor;
  return $backgroundColor;
}, function (_a) {
  var color = _a.color;
  return color || '#000000';
}, function (_a) {
  var color = _a.color;
  return color || '#000000';
});
var TextWrapper = styledComponents_esm.dt.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject([""], [""])));
var StyledCardContent = styledComponents_esm.dt(CardContent)(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  gap: ", "px;\n  padding-bottom: 0 !important;\n  padding: 10px !important;\n  background: #fff;\n  .MuiFab-sizeSmall {\n    width: 36px !important;\n    height: 36px !important;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  gap: ", "px;\n  padding-bottom: 0 !important;\n  padding: 10px !important;\n  background: #fff;\n  .MuiFab-sizeSmall {\n    width: 36px !important;\n    height: 36px !important;\n  }\n"])), function (_a) {
  var gap = _a.gap;
  return gap || 20;
});
var HeaderText = styledComponents_esm.dt.span(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 400;\n"], ["\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 400;\n"])));
var NumberText = styledComponents_esm.dt.span(templateObject_7 || (templateObject_7 = tslib_es6.__makeTemplateObject(["\n  font-size: 15px;\n  font-weight: 500;\n  display: flex;\n  height: 22px;\n  align-items: center;\n"], ["\n  font-size: 15px;\n  font-weight: 500;\n  display: flex;\n  height: 22px;\n  align-items: center;\n"])));
var Container = styledComponents_esm.dt.div(templateObject_8 || (templateObject_8 = tslib_es6.__makeTemplateObject(["\n  position: absolute;\n  bottom: 28px;\n  left: -22px;\n  transform: translateY(100%);\n  width: 300px;\n  background: #fff;\n  z-index: 5;\n"], ["\n  position: absolute;\n  bottom: 28px;\n  left: -22px;\n  transform: translateY(100%);\n  width: 300px;\n  background: #fff;\n  z-index: 5;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

exports.CardContainer = CardContainer;
exports.Container = Container;
exports.HeaderText = HeaderText;
exports.NumberText = NumberText;
exports.StyledCard = StyledCard;
exports.StyledCardContent = StyledCardContent;
exports.StyledIcon = StyledIcon;
exports.TextWrapper = TextWrapper;
//# sourceMappingURL=styled-components.cjs.js.map
