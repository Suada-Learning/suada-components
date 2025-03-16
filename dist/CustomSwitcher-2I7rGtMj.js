'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Switcher_CustomSwitcher_styles = require('./components/Switcher/CustomSwitcher.styles.cjs.js');
require('./tslib.es6-Ce89yL0g.js');
var Help = require('./Help-D8EYV2zr.js');
var FormControlLabel = require('./FormControlLabel-84xf0uTZ.js');
var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var SwitchBase = require('./SwitchBase-9-BS5EGF.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var Tooltip = require('./Tooltip-A_p9Z47e.js');

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

function getSwitchUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiSwitch', slot);
}
const switchClasses = DefaultPropsProvider.generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', edge && `edge${createTheme.capitalize(edge)}`, `size${createTheme.capitalize(size)}`],
    switchBase: ['switchBase', `color${createTheme.capitalize(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = DefaultPropsProvider.composeClasses(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const SwitchRoot = DefaultPropsProvider.styled('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${createTheme.capitalize(ownerState.edge)}`], styles[`size${createTheme.capitalize(ownerState.size)}`]];
  }
})({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: 'middle',
  // For correct alignment with the text.
  '@media print': {
    colorAdjust: 'exact'
  },
  variants: [{
    props: {
      edge: 'start'
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: 'end'
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${switchClasses.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${switchClasses.switchBase}`]: {
        padding: 4,
        [`&.${switchClasses.checked}`]: {
          transform: 'translateX(16px)'
        }
      }
    }
  }]
});
const SwitchSwitchBase = DefaultPropsProvider.styled(SwitchBase.SwitchBase, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${switchClasses.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${createTheme.capitalize(ownerState.color)}`]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(['left', 'transform'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${switchClasses.checked}`]: {
    transform: 'translateX(20px)'
  },
  [`&.${switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === 'light' ? 0.12 : 0.2}`
  },
  [`& .${switchClasses.input}`]: {
    left: '-100%',
    width: '300%'
  }
})), DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : createTheme.alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter(['light'])) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${switchClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : createTheme.alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        [`&.${switchClasses.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === 'light' ? createTheme.lighten(theme.palette[color].main, 0.62) : createTheme.darken(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
const SwitchTrack = DefaultPropsProvider.styled('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  height: '100%',
  width: '100%',
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(['opacity', 'background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === 'light' ? 0.38 : 0.3}`
})));
const SwitchThumb = DefaultPropsProvider.styled('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
})));
const Switch = /*#__PURE__*/React__namespace.forwardRef(function Switch(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiSwitch'
  });
  const {
    className,
    color = 'primary',
    edge = false,
    size = 'medium',
    sx,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const icon = /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(SwitchThumb, {
    className: classes.thumb,
    ownerState: ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(SwitchRoot, {
    className: DefaultPropsProvider.clsx(classes.root, className),
    sx: sx,
    ownerState: ownerState,
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(SwitchSwitchBase, {
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      ref: ref,
      ownerState: ownerState,
      ...other,
      classes: {
        ...classes,
        root: classes.switchBase
      }
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(SwitchTrack, {
      className: classes.track,
      ownerState: ownerState
    })]
  });
});
process.env.NODE_ENV !== "production" ? Switch.propTypes /* remove-proptypes */ = {
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
   */
  disabled: index.PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: index.PropTypes.bool,
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
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['medium', 'small']), index.PropTypes.string]),
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

var CustomSwitcher = function CustomSwitcher(_a) {
  var value = _a.value,
    onChange = _a.onChange,
    name = _a.name,
    label = _a.label,
    on = _a.on,
    off = _a.off,
    tooltip = _a.tooltip,
    _b = _a.labelPosition,
    labelPosition = _b === void 0 ? 'start' : _b,
    labelStyle = _a.labelStyle;
  var Label = function Label() {
    if (tooltip) {
      return jsxRuntime.jsxRuntimeExports.jsxs(components_Switcher_CustomSwitcher_styles.ToolTipContainer, {
        children: [jsxRuntime.jsxRuntimeExports.jsx(components_Switcher_CustomSwitcher_styles.StyledLabel, {
          style: labelStyle,
          children: label
        }), jsxRuntime.jsxRuntimeExports.jsx(Tooltip.Tooltip, {
          title: jsxRuntime.jsxRuntimeExports.jsx(components_Switcher_CustomSwitcher_styles.TooltipTitle, {
            children: tooltip
          }),
          arrow: true,
          children: jsxRuntime.jsxRuntimeExports.jsx(Help.Help, {
            color: 'primary',
            style: components_Switcher_CustomSwitcher_styles.HelpIconStyles
          })
        })]
      });
    }
    return jsxRuntime.jsxRuntimeExports.jsx(components_Switcher_CustomSwitcher_styles.StyledLabel, {
      style: labelStyle,
      children: label
    });
  };
  return jsxRuntime.jsxRuntimeExports.jsx(FormControlLabel.FormControlLabel, {
    style: components_Switcher_CustomSwitcher_styles.FormControlLabelStyles,
    label: jsxRuntime.jsxRuntimeExports.jsx(Label, {}),
    labelPlacement: labelPosition,
    control: jsxRuntime.jsxRuntimeExports.jsxs(components_Switcher_CustomSwitcher_styles.FormControlWrapper, {
      children: [off, jsxRuntime.jsxRuntimeExports.jsx(Switch, {
        checked: value,
        onChange: onChange,
        name: name,
        value: value,
        classes: {
          switchBase: 'CustomSwitcher-switchBase'
        }
      }), on]
    })
  });
};

exports.CustomSwitcher = CustomSwitcher;
//# sourceMappingURL=CustomSwitcher-2I7rGtMj.js.map
