'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var emotionReact_esm = require('./emotion-react.esm-BtOw35W9.js');
var chainPropTypes = require('./chainPropTypes-CIgjMfIp.js');

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

function getCircularProgressUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiCircularProgress', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

const SIZE = 44;
const circularRotateKeyframe = emotionReact_esm.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = emotionReact_esm.keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;

// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const rotateAnimation = typeof circularRotateKeyframe !== 'string' ? emotionReact_esm.css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== 'string' ? emotionReact_esm.css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ['root', variant, `color${createTheme.capitalize(color)}`],
    svg: ['svg'],
    circle: ['circle', `circle${createTheme.capitalize(variant)}`, disableShrink && 'circleDisableShrink']
  };
  return DefaultPropsProvider.composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = DefaultPropsProvider.styled('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${createTheme.capitalize(ownerState.color)}`]];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  display: 'inline-block',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('transform')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = DefaultPropsProvider.styled('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg',
  overridesResolver: (props, styles) => styles.svg
})({
  display: 'block' // Keeps the progress centered
});
const CircularProgressCircle = DefaultPropsProvider.styled('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${createTheme.capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  stroke: 'currentColor',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('stroke-dashoffset')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === 'indeterminate' && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
const CircularProgress = /*#__PURE__*/React__namespace.forwardRef(function CircularProgress(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiCircularProgress'
  });
  const {
    className,
    color = 'primary',
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = 'rotate(-90deg)';
  }
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CircularProgressRoot, {
    className: DefaultPropsProvider.clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState: ownerState,
    ref: ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? CircularProgress.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
  color: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index.PropTypes.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), index.PropTypes.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes.chainPropTypes(index.PropTypes.bool, props => {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('MUI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }
    return null;
  }),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  /**
   * @ignore
   */
  style: index.PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: index.PropTypes.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: index.PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: index.PropTypes.oneOf(['determinate', 'indeterminate'])
} : void 0;

exports.CircularProgress = CircularProgress;
//# sourceMappingURL=CircularProgress-c3gMOn08.js.map
