'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var SwitchBase = require('./SwitchBase-9-BS5EGF.js');
var createSvgIcon = require('./createSvgIcon-BpozNt3V.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var mergeSlotProps = require('./mergeSlotProps-kgDL_-4V.js');

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

var CheckBoxOutlineBlankIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');

var CheckBoxIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');

var IndeterminateCheckBoxIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox');

function getCheckboxUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiCheckbox', slot);
}
const checkboxClasses = DefaultPropsProvider.generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    indeterminate,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${createTheme.capitalize(color)}`, `size${createTheme.capitalize(size)}`]
  };
  const composedClasses = DefaultPropsProvider.composeClasses(slots, getCheckboxUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const CheckboxRoot = DefaultPropsProvider.styled(SwitchBase.SwitchBase, {
  shouldForwardProp: prop => DefaultPropsProvider.rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, styles[`size${createTheme.capitalize(ownerState.size)}`], ownerState.color !== 'default' && styles[`color${createTheme.capitalize(ownerState.color)}`]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  variants: [{
    props: {
      color: 'default',
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : createTheme.alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : createTheme.alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
        color: (theme.vars || theme).palette[color].main
      },
      [`&.${checkboxClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }]
})));
const defaultCheckedIcon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CheckBoxIcon, {});
const defaultIcon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
const Checkbox = /*#__PURE__*/React__namespace.forwardRef(function Checkbox(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiCheckbox'
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium',
    disableRipple = false,
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = {
    ...props,
    disableRipple,
    color,
    indeterminate,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot.useSlot('root', {
    ref,
    elementType: CheckboxRoot,
    className: DefaultPropsProvider.clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    ownerState,
    additionalProps: {
      type: 'checkbox',
      icon: /*#__PURE__*/React__namespace.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /*#__PURE__*/React__namespace.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize ?? size
      }),
      disableRipple,
      slots,
      slotProps: {
        input: mergeSlotProps.mergeSlotProps(typeof externalInputProps === 'function' ? externalInputProps(ownerState) : externalInputProps, {
          'data-indeterminate': indeterminate
        })
      }
    }
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? Checkbox.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: index.PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: index.PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), index.PropTypes.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: index.PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: index.PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: index.PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: index.PropTypes.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: index.PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: index.PropTypes.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: index.PropTypes.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: index.PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: index.PropTypes.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['medium', 'small']), index.PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index.PropTypes.shape({
    input: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    root: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index.PropTypes.shape({
    input: index.PropTypes.elementType,
    root: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: index.PropTypes.any
} : void 0;

exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox-DmMyEZhN.js.map
