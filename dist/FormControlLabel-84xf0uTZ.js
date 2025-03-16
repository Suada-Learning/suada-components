'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var formControlState = require('./formControlState-Ct7PKm3e.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var useFormControl = require('./useFormControl-FEXqYGLd.js');
var Typography = require('./Typography-BlskmVTp.js');

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

function getFormControlLabelUtilityClasses(slot) {
  return createTheme.generateUtilityClass('MuiFormControlLabel', slot);
}
const formControlLabelClasses = DefaultPropsProvider.generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', `labelPlacement${createTheme.capitalize(labelPlacement)}`, error && 'error', required && 'required'],
    label: ['label', disabled && 'disabled'],
    asterisk: ['asterisk', error && 'error']
  };
  return DefaultPropsProvider.composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = DefaultPropsProvider.styled('label', {
  name: 'MuiFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${createTheme.capitalize(ownerState.labelPlacement)}`]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses.disabled}`]: {
    cursor: 'default'
  },
  [`& .${formControlLabelClasses.label}`]: {
    [`&.${formControlLabelClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: 'start'
    },
    style: {
      flexDirection: 'row-reverse',
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: 'top'
    },
    style: {
      flexDirection: 'column-reverse'
    }
  }, {
    props: {
      labelPlacement: 'bottom'
    },
    style: {
      flexDirection: 'column'
    }
  }, {
    props: ({
      labelPlacement
    }) => labelPlacement === 'start' || labelPlacement === 'top' || labelPlacement === 'bottom',
    style: {
      marginLeft: 16 // used for row presentation of radio/checkbox
    }
  }]
})));
const AsteriskComponent = DefaultPropsProvider.styled('span', {
  name: 'MuiFormControlLabel',
  slot: 'Asterisk',
  overridesResolver: (props, styles) => styles.asterisk
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  [`&.${formControlLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));

/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
const FormControlLabel = /*#__PURE__*/React__namespace.forwardRef(function FormControlLabel(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiFormControlLabel'
  });
  const {
    checked,
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    inputRef,
    label: labelProp,
    labelPlacement = 'end',
    name,
    onChange,
    required: requiredProp,
    slots = {},
    slotProps = {},
    value,
    ...other
  } = props;
  const muiFormControl = useFormControl.useFormControl();
  const disabled = disabledProp ?? control.props.disabled ?? muiFormControl?.disabled;
  const required = requiredProp ?? control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState.formControlState({
    props,
    muiFormControl,
    states: ['error']
  });
  const ownerState = {
    ...props,
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [TypographySlot, typographySlotProps] = useSlot.useSlot('typography', {
    elementType: Typography.Typography,
    externalForwardedProps,
    ownerState
  });
  let label = labelProp;
  if (label != null && label.type !== Typography.Typography && !disableTypography) {
    label = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(TypographySlot, {
      component: "span",
      ...typographySlotProps,
      className: DefaultPropsProvider.clsx(classes.label, typographySlotProps?.className),
      children: label
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(FormControlLabelRoot, {
    className: DefaultPropsProvider.clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other,
    children: [/*#__PURE__*/React__namespace.cloneElement(control, controlProps), required ? /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs("div", {
      children: [label, /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(AsteriskComponent, {
        ownerState: ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: ["\u2009", '*']
      })]
    }) : label]
  });
});
process.env.NODE_ENV !== "production" ? FormControlLabel.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: index.PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: index.PropTypes.shape({
    typography: index.PropTypes.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: index.PropTypes.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: index.PropTypes.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: useSlot.refType,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: index.PropTypes.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: index.PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  /**
   * @ignore
   */
  name: index.PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: index.PropTypes.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: index.PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index.PropTypes.shape({
    typography: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index.PropTypes.shape({
    typography: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The value of the component.
   */
  value: index.PropTypes.any
} : void 0;

exports.FormControlLabel = FormControlLabel;
//# sourceMappingURL=FormControlLabel-84xf0uTZ.js.map
