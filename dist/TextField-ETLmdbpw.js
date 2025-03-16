'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var useId = require('./useId-Db7wkipr.js');
var Select = require('./Select-Cj-yGxdL.js');
var formControlState = require('./formControlState-Ct7PKm3e.js');
var useFormControl = require('./useFormControl-FEXqYGLd.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var unsupportedProp = require('./unsupportedProp-CjSKbcd2.js');

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

function getFormControlUtilityClasses(slot) {
  return createTheme.generateUtilityClass('MuiFormControl', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);

const useUtilityClasses$4 = ownerState => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ['root', margin !== 'none' && `margin${createTheme.capitalize(margin)}`, fullWidth && 'fullWidth']
  };
  return DefaultPropsProvider.composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = DefaultPropsProvider.styled('div', {
  name: 'MuiFormControl',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`margin${createTheme.capitalize(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth];
  }
})({
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: 'top',
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: 'normal'
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: 'dense'
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: '100%'
    }
  }]
});

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it creates visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 */
const FormControl = /*#__PURE__*/React__namespace.forwardRef(function FormControl(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiFormControl'
  });
  const {
    children,
    className,
    color = 'primary',
    component = 'div',
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    size = 'medium',
    variant = 'outlined',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  };
  const classes = useUtilityClasses$4(ownerState);
  const [adornedStart, setAdornedStart] = React__namespace.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;
    if (children) {
      React__namespace.Children.forEach(children, child => {
        if (!unsupportedProp.isMuiElement(child, ['Input', 'Select'])) {
          return;
        }
        const input = unsupportedProp.isMuiElement(child, ['Select']) ? child.props.input : child;
        if (input && Select.isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React__namespace.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;
    if (children) {
      React__namespace.Children.forEach(children, child => {
        if (!unsupportedProp.isMuiElement(child, ['Input', 'Select'])) {
          return;
        }
        if (Select.isFilled(child.props, true) || Select.isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React__namespace.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const registeredInput = React__namespace.useRef(false);
  if (process.env.NODE_ENV !== 'production') {
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(['MUI: There are multiple `InputBase` components inside a FormControl.', 'This creates visual inconsistencies, only use one `InputBase`.'].join('\n'));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const onFilled = React__namespace.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React__namespace.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = React__namespace.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onFocus: () => {
        setFocused(true);
      },
      onEmpty,
      onFilled,
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, onEmpty, onFilled, required, size, variant]);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(useFormControl.FormControlContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(FormControlRoot, {
      as: component,
      ownerState: ownerState,
      className: DefaultPropsProvider.clsx(classes.root, className),
      ref: ref,
      ...other,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? FormControl.propTypes /* remove-proptypes */ = {
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']), index.PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index.PropTypes.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: index.PropTypes.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: index.PropTypes.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: index.PropTypes.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: index.PropTypes.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: index.PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: index.PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['medium', 'small']), index.PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: index.PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

function getFormHelperTextUtilityClasses(slot) {
  return createTheme.generateUtilityClass('MuiFormHelperText', slot);
}
const formHelperTextClasses = DefaultPropsProvider.generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);

var _span;
const useUtilityClasses$3 = ownerState => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', error && 'error', size && `size${createTheme.capitalize(size)}`, contained && 'contained', focused && 'focused', filled && 'filled', required && 'required']
  };
  return DefaultPropsProvider.composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = DefaultPropsProvider.styled('p', {
  name: 'MuiFormHelperText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size && styles[`size${createTheme.capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.caption,
  textAlign: 'left',
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  },
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
})));
const FormHelperText = /*#__PURE__*/React__namespace.forwardRef(function FormHelperText(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiFormHelperText'
  });
  const {
    children,
    className,
    component = 'p',
    disabled,
    error,
    filled,
    focused,
    margin,
    required,
    variant,
    ...other
  } = props;
  const muiFormControl = useFormControl.useFormControl();
  const fcs = formControlState.formControlState({
    props,
    muiFormControl,
    states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  const ownerState = {
    ...props,
    component,
    contained: fcs.variant === 'filled' || fcs.variant === 'outlined',
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };

  // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
  delete ownerState.ownerState;
  const classes = useUtilityClasses$3(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(FormHelperTextRoot, {
    as: component,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: children === ' ' ? // notranslate needed while Google Translate will not fix zero-width space issue
    _span || (_span = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("span", {
      className: "notranslate",
      "aria-hidden": true,
      children: "\u200B"
    })) : children
  });
});
process.env.NODE_ENV !== "production" ? FormHelperText.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
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
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: index.PropTypes.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: index.PropTypes.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: index.PropTypes.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: index.PropTypes.oneOf(['dense']),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: index.PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The variant to use.
   */
  variant: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['filled', 'outlined', 'standard']), index.PropTypes.string])
} : void 0;

function getFormLabelUtilityClasses(slot) {
  return createTheme.generateUtilityClass('MuiFormLabel', slot);
}
const formLabelClasses = DefaultPropsProvider.generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);

const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ['root', `color${createTheme.capitalize(color)}`, disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
    asterisk: ['asterisk', error && 'error']
  };
  return DefaultPropsProvider.composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = DefaultPropsProvider.styled('label', {
  name: 'MuiFormLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${formLabelClasses.focused}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${formLabelClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      },
      [`&.${formLabelClasses.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }
  }]
})));
const AsteriskComponent = DefaultPropsProvider.styled('span', {
  name: 'MuiFormLabel',
  slot: 'Asterisk',
  overridesResolver: (props, styles) => styles.asterisk
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  [`&.${formLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const FormLabel = /*#__PURE__*/React__namespace.forwardRef(function FormLabel(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiFormLabel'
  });
  const {
    children,
    className,
    color,
    component = 'label',
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;
  const muiFormControl = useFormControl.useFormControl();
  const fcs = formControlState.formControlState({
    props,
    muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  const ownerState = {
    ...props,
    color: fcs.color || 'primary',
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  const classes = useUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(FormLabelRoot, {
    as: component,
    ownerState: ownerState,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ref: ref,
    ...other,
    children: [children, fcs.required && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(AsteriskComponent, {
      ownerState: ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", '*']
    })]
  });
});
process.env.NODE_ENV !== "production" ? FormLabel.propTypes /* remove-proptypes */ = {
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']), index.PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index.PropTypes.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: index.PropTypes.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: index.PropTypes.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: index.PropTypes.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: index.PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object])
} : void 0;

function getInputLabelUtilityClasses(slot) {
  return createTheme.generateUtilityClass('MuiInputLabel', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size && size !== 'normal' && `size${createTheme.capitalize(size)}`, variant],
    asterisk: [required && 'asterisk']
  };
  const composedClasses = DefaultPropsProvider.composeClasses(slots, getInputLabelUtilityClasses, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...composedClasses
  };
};
const InputLabelRoot = DefaultPropsProvider.styled(FormLabel, {
  shouldForwardProp: prop => DefaultPropsProvider.rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiInputLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses.asterisk}`]: styles.asterisk
    }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, ownerState.focused && styles.focused, styles[ownerState.variant]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  variants: [{
    props: ({
      ownerState
    }) => ownerState.formControl,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 20px) scale(1)'
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: 'translate(0, 17px) scale(1)'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.shrink,
    style: {
      transform: 'translate(0, -1.5px) scale(0.75)',
      transformOrigin: 'top left',
      maxWidth: '133%'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableAnimation,
    style: {
      transition: theme.transitions.create(['color', 'transform', 'max-width'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: 'filled'
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 16px) scale(1)',
      maxWidth: 'calc(100% - 24px)'
    }
  }, {
    props: {
      variant: 'filled',
      size: 'small'
    },
    style: {
      transform: 'translate(12px, 13px) scale(1)'
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === 'filled' && ownerState.shrink,
    style: {
      userSelect: 'none',
      pointerEvents: 'auto',
      transform: 'translate(12px, 7px) scale(0.75)',
      maxWidth: 'calc(133% - 24px)'
    }
  }, {
    props: ({
      variant,
      ownerState,
      size
    }) => variant === 'filled' && ownerState.shrink && size === 'small',
    style: {
      transform: 'translate(12px, 4px) scale(0.75)'
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 16px) scale(1)',
      maxWidth: 'calc(100% - 24px)'
    }
  }, {
    props: {
      variant: 'outlined',
      size: 'small'
    },
    style: {
      transform: 'translate(14px, 9px) scale(1)'
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === 'outlined' && ownerState.shrink,
    style: {
      userSelect: 'none',
      pointerEvents: 'auto',
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: 'calc(133% - 32px)',
      transform: 'translate(14px, -9px) scale(0.75)'
    }
  }]
})));
const InputLabel = /*#__PURE__*/React__namespace.forwardRef(function InputLabel(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    name: 'MuiInputLabel',
    props: inProps
  });
  const {
    disableAnimation = false,
    margin,
    shrink: shrinkProp,
    variant,
    className,
    ...other
  } = props;
  const muiFormControl = useFormControl.useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState.formControlState({
    props,
    muiFormControl,
    states: ['size', 'variant', 'required', 'focused']
  });
  const ownerState = {
    ...props,
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  };
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(InputLabelRoot, {
    "data-shrink": shrink,
    ref: ref,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ...other,
    ownerState: ownerState,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? InputLabel.propTypes /* remove-proptypes */ = {
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']), index.PropTypes.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: index.PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: index.PropTypes.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: index.PropTypes.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: index.PropTypes.oneOf(['dense']),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: index.PropTypes.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: index.PropTypes.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['normal', 'small']), index.PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The variant to use.
   */
  variant: index.PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

function getTextFieldUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiTextField', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiTextField', ['root']);

const variantComponent = {
  standard: Select.Input,
  filled: Select.FilledInput,
  outlined: Select.OutlinedInput
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return DefaultPropsProvider.composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = DefaultPropsProvider.styled(FormControl, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/React__namespace.forwardRef(function TextField(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color = 'primary',
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps: FormHelperTextPropsProp,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps: InputLabelPropsProp,
    inputProps: inputPropsProp,
    InputProps: InputPropsProp,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps: SelectPropsProp,
    slots = {},
    slotProps = {},
    type,
    value,
    variant = 'outlined',
    ...other
  } = props;
  const ownerState = {
    ...props,
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  if (process.env.NODE_ENV !== 'production') {
    if (select && !children) {
      console.error('MUI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }
  const id = useId.useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: InputPropsProp,
      inputLabel: InputLabelPropsProp,
      htmlInput: inputPropsProp,
      formHelperText: FormHelperTextPropsProp,
      select: SelectPropsProp,
      ...slotProps
    }
  };
  const inputAdditionalProps = {};
  const inputLabelSlotProps = externalForwardedProps.slotProps.inputLabel;
  if (variant === 'outlined') {
    if (inputLabelSlotProps && typeof inputLabelSlotProps.shrink !== 'undefined') {
      inputAdditionalProps.notched = inputLabelSlotProps.shrink;
    }
    inputAdditionalProps.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectPropsProp || !SelectPropsProp.native) {
      inputAdditionalProps.id = undefined;
    }
    inputAdditionalProps['aria-describedby'] = undefined;
  }
  const [InputSlot, inputProps] = useSlot.useSlot('input', {
    elementType: InputComponent,
    externalForwardedProps,
    additionalProps: inputAdditionalProps,
    ownerState
  });
  const [InputLabelSlot, inputLabelProps] = useSlot.useSlot('inputLabel', {
    elementType: InputLabel,
    externalForwardedProps,
    ownerState
  });
  const [HtmlInputSlot, htmlInputProps] = useSlot.useSlot('htmlInput', {
    elementType: 'input',
    externalForwardedProps,
    ownerState
  });
  const [FormHelperTextSlot, formHelperTextProps] = useSlot.useSlot('formHelperText', {
    elementType: FormHelperText,
    externalForwardedProps,
    ownerState
  });
  const [SelectSlot, selectProps] = useSlot.useSlot('select', {
    elementType: Select.Select,
    externalForwardedProps,
    ownerState
  });
  const InputElement = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(InputSlot, {
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: htmlInputProps,
    slots: {
      input: slots.htmlInput ? HtmlInputSlot : undefined
    },
    ...inputProps
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(TextFieldRoot, {
    className: DefaultPropsProvider.clsx(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState,
    ...other,
    children: [label != null && label !== '' && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(InputLabelSlot, {
      htmlFor: id,
      id: inputLabelId,
      ...inputLabelProps,
      children: label
    }), select ? /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(SelectSlot, {
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement,
      ...selectProps,
      children: children
    }) : InputElement, helperText && /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(FormHelperTextSlot, {
      id: helperTextId,
      ...formHelperTextProps,
      children: helperText
    })]
  });
});
process.env.NODE_ENV !== "production" ? TextField.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: index.PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: index.PropTypes.bool,
  /**
   * @ignore
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']), index.PropTypes.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: index.PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: index.PropTypes.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: index.PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: index.PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: index.PropTypes.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: index.PropTypes.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: index.PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: index.PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: index.PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: useSlot.refType,
  /**
   * The label content.
   */
  label: index.PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: index.PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: index.PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: index.PropTypes.string,
  /**
   * @ignore
   */
  onBlur: index.PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: index.PropTypes.func,
  /**
   * @ignore
   */
  onFocus: index.PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: index.PropTypes.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: index.PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: index.PropTypes.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: index.PropTypes.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['medium', 'small']), index.PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index.PropTypes /* @typescript-to-proptypes-ignore */.shape({
    formHelperText: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    htmlInput: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    input: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    inputLabel: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    select: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index.PropTypes.shape({
    formHelperText: index.PropTypes.elementType,
    htmlInput: index.PropTypes.elementType,
    input: index.PropTypes.elementType,
    inputLabel: index.PropTypes.elementType,
    select: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: index.PropTypes /* @typescript-to-proptypes-ignore */.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: index.PropTypes.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: index.PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

exports.TextField = TextField;
//# sourceMappingURL=TextField-ETLmdbpw.js.map
