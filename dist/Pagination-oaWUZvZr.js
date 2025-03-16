'use strict';

var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var components_Pagination_styledComponents = require('./components/Pagination/styled-components.cjs.js');
var Select = require('./Select-Cj-yGxdL.js');
var React = require('react');
var index$1 = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var index = require('./index-CH3mjxgn.js');
var createSimplePaletteValueFilter = require('./createSimplePaletteValueFilter-8mSpFa3v.js');
var createSvgIcon = require('./createSvgIcon-BpozNt3V.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var ButtonBase = require('./ButtonBase-IPiHyS-Y.js');
var useControlled = require('./useControlled-CeCwNB17.js');
var Paper = require('./Paper-DRtt8qOm.js');

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

function getPaginationUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiPagination', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiPagination', ['root', 'ul', 'outlined', 'text']);

function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;
  const [page, setPageState] = useControlled.useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  count - boundaryCount - 1);

  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'page' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || !item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return {
    items,
    ...other
  };
}

function getPaginationItemUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiPaginationItem', slot);
}
const paginationItemClasses = DefaultPropsProvider.generateUtilityClasses('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon', 'colorPrimary', 'colorSecondary']);

var FirstPageIconDefault = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage');

var LastPageIconDefault = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage');

var NavigateBeforeIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

var NavigateNextIcon = createSvgIcon.createSvgIcon(/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${createTheme.capitalize(ownerState.size)}`], ownerState.variant === 'text' && styles[`text${createTheme.capitalize(ownerState.color)}`], ownerState.variant === 'outlined' && styles[`outlined${createTheme.capitalize(ownerState.color)}`], ownerState.shape === 'rounded' && styles.rounded, ownerState.type === 'page' && styles.page, (ownerState.type === 'start-ellipsis' || ownerState.type === 'end-ellipsis') && styles.ellipsis, (ownerState.type === 'previous' || ownerState.type === 'next') && styles.previousNext, (ownerState.type === 'first' || ownerState.type === 'last') && styles.firstLast];
};
const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `size${createTheme.capitalize(size)}`, variant, shape, color !== 'standard' && `color${createTheme.capitalize(color)}`, color !== 'standard' && `${variant}${createTheme.capitalize(color)}`, disabled && 'disabled', selected && 'selected', {
      page: 'page',
      first: 'firstLast',
      last: 'firstLast',
      'start-ellipsis': 'ellipsis',
      'end-ellipsis': 'ellipsis',
      previous: 'previousNext',
      next: 'previousNext'
    }[type]],
    icon: ['icon']
  };
  return DefaultPropsProvider.composeClasses(slots, getPaginationItemUtilityClass, classes);
};
const PaginationItemEllipsis = DefaultPropsProvider.styled('div', {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  height: 'auto',
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      minWidth: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px'
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      minWidth: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const PaginationItemPage = DefaultPropsProvider.styled(ButtonBase.ButtonBase, {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${paginationItemClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : createTheme.alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : createTheme.alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  },
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px'
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15)
    }
  }, {
    props: {
      shape: 'rounded'
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          borderColor: (theme.vars || theme).palette.action.disabledBackground,
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, {
    props: {
      variant: 'text'
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter(['dark', 'contrastText'])).map(([color]) => ({
    props: {
      variant: 'text',
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].contrastText,
        backgroundColor: (theme.vars || theme).palette[color].main,
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette[color].dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: (theme.vars || theme).palette[color].main
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        },
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter.createSimplePaletteValueFilter(['light'])).map(([color]) => ({
    props: {
      variant: 'outlined',
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : createTheme.alpha(theme.palette[color].main, 0.5)}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : createTheme.alpha(theme.palette[color].main, theme.palette.action.activatedOpacity),
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : createTheme.alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : createTheme.alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  }))]
})));
const PaginationItemPageIcon = DefaultPropsProvider.styled('div', {
  name: 'MuiPaginationItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  fontSize: theme.typography.pxToRem(20),
  margin: '0 -8px',
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      fontSize: theme.typography.pxToRem(22)
    }
  }]
})));
const PaginationItem = /*#__PURE__*/React__namespace.forwardRef(function PaginationItem(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiPaginationItem'
  });
  const {
    className,
    color = 'standard',
    component,
    components = {},
    disabled = false,
    page,
    selected = false,
    shape = 'circular',
    size = 'medium',
    slots = {},
    slotProps = {},
    type = 'page',
    variant = 'text',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  };
  const isRtl = index.useRtl();
  const classes = useUtilityClasses$1(ownerState);
  const externalForwardedProps = {
    slots: {
      previous: slots.previous ?? components.previous,
      next: slots.next ?? components.next,
      first: slots.first ?? components.first,
      last: slots.last ?? components.last
    },
    slotProps
  };
  const [PreviousSlot, previousSlotProps] = useSlot.useSlot('previous', {
    elementType: NavigateBeforeIcon,
    externalForwardedProps,
    ownerState
  });
  const [NextSlot, nextSlotProps] = useSlot.useSlot('next', {
    elementType: NavigateNextIcon,
    externalForwardedProps,
    ownerState
  });
  const [FirstSlot, firstSlotProps] = useSlot.useSlot('first', {
    elementType: FirstPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const [LastSlot, lastSlotProps] = useSlot.useSlot('last', {
    elementType: LastPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const rtlAwareType = isRtl ? {
    previous: 'next',
    next: 'previous',
    first: 'last',
    last: 'first'
  }[type] : type;
  const IconSlot = {
    previous: PreviousSlot,
    next: NextSlot,
    first: FirstSlot,
    last: LastSlot
  }[rtlAwareType];
  const iconSlotProps = {
    previous: previousSlotProps,
    next: nextSlotProps,
    first: firstSlotProps,
    last: lastSlotProps
  }[rtlAwareType];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaginationItemEllipsis, {
    ref: ref,
    ownerState: ownerState,
    className: DefaultPropsProvider.clsx(classes.root, className),
    children: "\u2026"
  }) : /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(PaginationItemPage, {
    ref: ref,
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ...other,
    children: [type === 'page' && page, IconSlot ? /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaginationItemPageIcon, {
      ...iconSlotProps,
      className: classes.icon,
      as: IconSlot
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? PaginationItem.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: index$1.PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index$1.PropTypes.object,
  /**
   * @ignore
   */
  className: index$1.PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['primary', 'secondary', 'standard']), index$1.PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index$1.PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  components: index$1.PropTypes.shape({
    first: index$1.PropTypes.elementType,
    last: index$1.PropTypes.elementType,
    next: index$1.PropTypes.elementType,
    previous: index$1.PropTypes.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: index$1.PropTypes.bool,
  /**
   * The current page number.
   */
  page: index$1.PropTypes.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: index$1.PropTypes.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: index$1.PropTypes.oneOf(['circular', 'rounded']),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['small', 'medium', 'large']), index$1.PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index$1.PropTypes.shape({
    first: index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object]),
    last: index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object]),
    next: index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object]),
    previous: index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index$1.PropTypes.shape({
    first: index$1.PropTypes.elementType,
    last: index$1.PropTypes.elementType,
    next: index$1.PropTypes.elementType,
    previous: index$1.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index$1.PropTypes.oneOfType([index$1.PropTypes.arrayOf(index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object, index$1.PropTypes.bool])), index$1.PropTypes.func, index$1.PropTypes.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: index$1.PropTypes.oneOf(['end-ellipsis', 'first', 'last', 'next', 'page', 'previous', 'start-ellipsis']),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['outlined', 'text']), index$1.PropTypes.string])
} : void 0;

const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return DefaultPropsProvider.composeClasses(slots, getPaginationUtilityClass, classes);
};
const PaginationRoot = DefaultPropsProvider.styled('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = DefaultPropsProvider.styled('ul', {
  name: 'MuiPagination',
  slot: 'Ul',
  overridesResolver: (props, styles) => styles.ul
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination$1 = /*#__PURE__*/React__namespace.forwardRef(function Pagination(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiPagination'
  });
  const {
    boundaryCount = 1,
    className,
    color = 'standard',
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page,
    renderItem = item => /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaginationItem, {
      ...item
    }),
    shape = 'circular',
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = 'medium',
    variant = 'text',
    ...other
  } = props;
  const {
    items
  } = usePagination({
    ...props,
    componentName: 'Pagination'
  });
  const ownerState = {
    ...props,
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaginationRoot, {
    "aria-label": "pagination navigation",
    className: DefaultPropsProvider.clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("li", {
        children: renderItem({
          ...item,
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        })
      }, index))
    })
  });
});

// @default tags synced with default values from usePagination

process.env.NODE_ENV !== "production" ? Pagination$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: Paper.integerPropType,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index$1.PropTypes.object,
  /**
   * @ignore
   */
  className: index$1.PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['primary', 'secondary', 'standard']), index$1.PropTypes.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: Paper.integerPropType,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: Paper.integerPropType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: index$1.PropTypes.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number | null} page The page number to format.
   * @param {boolean} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: index$1.PropTypes.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: index$1.PropTypes.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: index$1.PropTypes.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: index$1.PropTypes.func,
  /**
   * The current page. Unlike `TablePagination`, which starts numbering from `0`, this pagination starts from `1`.
   */
  page: Paper.integerPropType,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: index$1.PropTypes.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: index$1.PropTypes.oneOf(['circular', 'rounded']),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: index$1.PropTypes.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: index$1.PropTypes.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: Paper.integerPropType,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['small', 'medium', 'large']), index$1.PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index$1.PropTypes.oneOfType([index$1.PropTypes.arrayOf(index$1.PropTypes.oneOfType([index$1.PropTypes.func, index$1.PropTypes.object, index$1.PropTypes.bool])), index$1.PropTypes.func, index$1.PropTypes.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: index$1.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([index$1.PropTypes.oneOf(['outlined', 'text']), index$1.PropTypes.string])
} : void 0;

var Pagination = function Pagination(_a) {
  var currentPage = _a.currentPage,
    totalPages = _a.totalPages,
    handleChange = _a.handleChange,
    perPage = _a.perPage,
    handlePerPageChange = _a.handlePerPageChange;
  return jsxRuntime.jsxRuntimeExports.jsxs(components_Pagination_styledComponents.PaginationWrapper, {
    children: [perPage && jsxRuntime.jsxRuntimeExports.jsxs(Select.Select, {
      variant: 'standard',
      "native": true,
      value: perPage,
      onChange: handlePerPageChange,
      inputProps: {
        name: 'perPage',
        id: 'perPage'
      },
      children: [jsxRuntime.jsxRuntimeExports.jsx("option", {
        value: 12,
        children: "12"
      }), jsxRuntime.jsxRuntimeExports.jsx("option", {
        value: 24,
        children: "24"
      }), jsxRuntime.jsxRuntimeExports.jsx("option", {
        value: 48,
        children: "48"
      })]
    }), jsxRuntime.jsxRuntimeExports.jsx(Pagination$1, {
      count: totalPages,
      shape: 'rounded',
      variant: 'outlined',
      page: currentPage,
      onChange: handleChange
    })]
  });
};

exports.Pagination = Pagination;
//# sourceMappingURL=Pagination-oaWUZvZr.js.map
