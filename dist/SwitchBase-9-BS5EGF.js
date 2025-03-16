'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var useFormControl = require('./useFormControl-FEXqYGLd.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var useControlled = require('./useControlled-CeCwNB17.js');
var ButtonBase = require('./ButtonBase-IPiHyS-Y.js');

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

function getSwitchBaseUtilityClass(slot) {
  return createTheme.generateUtilityClass('PrivateSwitchBase', slot);
}
DefaultPropsProvider.generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${createTheme.capitalize(edge)}`],
    input: ['input']
  };
  return DefaultPropsProvider.composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = DefaultPropsProvider.styled(ButtonBase.ButtonBase)({
  padding: 9,
  borderRadius: '50%',
  variants: [{
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'start' && ownerState.size !== 'small',
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'end' && ownerState.size !== 'small',
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = DefaultPropsProvider.styled('input', {
  shouldForwardProp: DefaultPropsProvider.rootShouldForwardProp
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/React__namespace.forwardRef(function SwitchBase(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled.useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = useFormControl.useFormControl();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot.useSlot('root', {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: 'span',
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onFocus: event => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: event => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: undefined,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot.useSlot('input', {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: handlers => ({
      onChange: event => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : undefined,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...(type === 'checkbox' && value === undefined ? {} : {
        value
      })
    }
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
process.env.NODE_ENV !== "production" ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: index.PropTypes.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: index.PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: index.PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: index.PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: index.PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: index.PropTypes.oneOf(['end', 'start', false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: index.PropTypes.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: index.PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: index.PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: useSlot.refType,
  /*
   * @ignore
   */
  name: index.PropTypes.string,
  /**
   * @ignore
   */
  onBlur: index.PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: index.PropTypes.func,
  /**
   * @ignore
   */
  onFocus: index.PropTypes.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: index.PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: index.PropTypes.bool,
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
  sx: index.PropTypes.object,
  /**
   * @ignore
   */
  tabIndex: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  /**
   * The input component prop `type`.
   */
  type: index.PropTypes.string.isRequired,
  /**
   * The value of the component.
   */
  value: index.PropTypes.any
} : void 0;

exports.SwitchBase = SwitchBase;
//# sourceMappingURL=SwitchBase-9-BS5EGF.js.map
