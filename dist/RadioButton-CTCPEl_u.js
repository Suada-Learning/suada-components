'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var SwitchBase = require('./SwitchBase-9-BS5EGF.js');
var createSvgIcon = require('./createSvgIcon-BpozNt3V.js');
var useFormControl = require('./useFormControl-FEXqYGLd.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var createChainedFunction = require('./createChainedFunction-BAOT6rqZ.js');

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

var RadioButtonUncheckedIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked');

var RadioButtonCheckedIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), 'RadioButtonChecked');

const RadioButtonIconRoot = DefaultPropsProvider.styled('span', {
  shouldForwardProp: DefaultPropsProvider.rootShouldForwardProp
})({
  position: 'relative',
  display: 'flex'
});
const RadioButtonIconBackground = DefaultPropsProvider.styled(RadioButtonUncheckedIcon)({
  // Scale applied to prevent dot misalignment in Safari
  transform: 'scale(1)'
});
const RadioButtonIconDot = DefaultPropsProvider.styled(RadioButtonCheckedIcon)(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  left: 0,
  position: 'absolute',
  transform: 'scale(0)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: true
    },
    style: {
      transform: 'scale(1)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    }
  }]
})));

/**
 * @ignore - internal component.
 */
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = {
    ...props,
    checked
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState: ownerState,
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RadioButtonIconBackground, {
      fontSize: fontSize,
      className: classes.background,
      ownerState: ownerState
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RadioButtonIconDot, {
      fontSize: fontSize,
      className: classes.dot,
      ownerState: ownerState
    })]
  });
}
process.env.NODE_ENV !== "production" ? RadioButtonIcon.propTypes /* remove-proptypes */ = {
  /**
   * If `true`, the component is checked.
   */
  checked: index.PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: index.PropTypes.oneOf(['small', 'medium'])
} : void 0;

/**
 * @ignore - internal component.
 */
const RadioGroupContext = /*#__PURE__*/React__namespace.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

function useRadioGroup() {
  return React__namespace.useContext(RadioGroupContext);
}

function getRadioUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiRadio', slot);
}
const radioClasses = DefaultPropsProvider.generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', `color${createTheme.capitalize(color)}`, size !== 'medium' && `size${createTheme.capitalize(size)}`]
  };
  return {
    ...classes,
    ...DefaultPropsProvider.composeClasses(slots, getRadioUtilityClass, classes)
  };
};
const RadioRoot = DefaultPropsProvider.styled(SwitchBase.SwitchBase, {
  shouldForwardProp: prop => DefaultPropsProvider.rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiRadio',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size !== 'medium' && styles[`size${createTheme.capitalize(ownerState.size)}`], styles[`color${createTheme.capitalize(ownerState.color)}`]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${radioClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: {
      color: 'default',
      disabled: false,
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
      disabled: false,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : createTheme.alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false
    },
    style: {
      [`&.${radioClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main
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
function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}
const defaultCheckedIcon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RadioButtonIcon, {
  checked: true
});
const defaultIcon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RadioButtonIcon, {});
const Radio = /*#__PURE__*/React__namespace.forwardRef(function Radio(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiRadio'
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon = defaultIcon,
    name: nameProp,
    onChange: onChangeProp,
    size = 'medium',
    className,
    disabled: disabledProp,
    disableRipple = false,
    slots = {},
    slotProps = {},
    inputProps,
    ...other
  } = props;
  const muiFormControl = useFormControl.useFormControl();
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  disabled ??= false;
  const ownerState = {
    ...props,
    disabled,
    disableRipple,
    color,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction.createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot.useSlot('root', {
    ref,
    elementType: RadioRoot,
    className: DefaultPropsProvider.clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onChange: (event, ...args) => {
        handlers.onChange?.(event, ...args);
        onChange(event, ...args);
      }
    }),
    ownerState,
    additionalProps: {
      type: 'radio',
      icon: /*#__PURE__*/React__namespace.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /*#__PURE__*/React__namespace.cloneElement(checkedIcon, {
        fontSize: checkedIcon.props.fontSize ?? size
      }),
      disabled,
      name,
      checked,
      slots,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof externalInputProps === 'function' ? externalInputProps(ownerState) : externalInputProps
      }
    }
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? Radio.propTypes /* remove-proptypes */ = {
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
   * @default <RadioButtonIcon checked />
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
   * If `true`, the component is disabled.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: index.PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: index.PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: index.PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: index.PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: useSlot.refType,
  /**
   * Name attribute of the `input` element.
   */
  name: index.PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
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
   * `small` is equivalent to the dense radio styling.
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
   */
  value: index.PropTypes.any
} : void 0;

var RadioButton = function RadioButton(_a) {
  var checked = _a.checked,
    value = _a.value,
    onChange = _a.onChange;
  var handleChange = function handleChange(event) {
    return onChange && onChange(event.target.value);
  };
  return jsxRuntime.jsxRuntimeExports.jsx(Radio, {
    checked: checked,
    onChange: handleChange,
    value: value,
    sx: {
      '&.Mui-checked': {
        color: '#00905E'
      }
    }
  });
};

exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton-CTCPEl_u.js.map
