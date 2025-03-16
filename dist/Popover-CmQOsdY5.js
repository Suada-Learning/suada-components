'use strict';

var React = require('react');
var index = require('./index-CGECY3y4.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var isHostComponent = require('./isHostComponent-3rrTjt-m.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var useSlot = require('./useSlot-ByxXTss_.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var ownerDocument = require('./ownerDocument-BtrF3bbW.js');
var ownerWindow = require('./ownerWindow-Cm-XkKL0.js');
var Grow = require('./Grow-B50r5mQN.js');
var mergeSlotProps = require('./mergeSlotProps-kgDL_-4V.js');
var resolveComponentProps = require('./resolveComponentProps-DCteVXpM.js');
var createChainedFunction = require('./createChainedFunction-BAOT6rqZ.js');
var exactProp = require('./exactProp-CPGXuEBM.js');
var useTheme = require('./useTheme-BxZg-6YN.js');
var utils = require('./utils-DtLxRXKa.js');
var Paper = require('./Paper-DRtt8qOm.js');
var chainPropTypes = require('./chainPropTypes-CIgjMfIp.js');
var elementTypeAcceptingRef = require('./elementTypeAcceptingRef-DBEty_5_.js');

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

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(win = window) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}

const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = /*#__PURE__*/React__namespace.forwardRef(function Fade(props, ref) {
  const theme = useTheme.useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = utils.Transition,
    ...other
  } = props;
  const nodeRef = React__namespace.useRef(null);
  const handleRef = resolveComponentProps.useForkRef(nodeRef, Grow.getReactElementRef(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    utils.reflow(node); // So the animation always start from the start.

    const transitionProps = utils.getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = utils.getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(TransitionComponent, {
    appear: appear,
    in: inProp,
    nodeRef: nodeRef ,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /*#__PURE__*/React__namespace.cloneElement(children, {
        style: {
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
          ...styles[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Fade.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: index.PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: index.PropTypes.bool,
  /**
   * A single child content element.
   */
  children: Grow.elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: index.PropTypes.oneOfType([index.PropTypes.shape({
    enter: index.PropTypes.string,
    exit: index.PropTypes.string
  }), index.PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: index.PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: index.PropTypes.func,
  /**
   * @ignore
   */
  onEntered: index.PropTypes.func,
  /**
   * @ignore
   */
  onEntering: index.PropTypes.func,
  /**
   * @ignore
   */
  onExit: index.PropTypes.func,
  /**
   * @ignore
   */
  onExited: index.PropTypes.func,
  /**
   * @ignore
   */
  onExiting: index.PropTypes.func,
  /**
   * @ignore
   */
  style: index.PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.shape({
    appear: index.PropTypes.number,
    enter: index.PropTypes.number,
    exit: index.PropTypes.number
  })])
} : void 0;

function getBackdropUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiBackdrop', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return DefaultPropsProvider.composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = DefaultPropsProvider.styled('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
  variants: [{
    props: {
      invisible: true
    },
    style: {
      backgroundColor: 'transparent'
    }
  }]
});
const Backdrop = /*#__PURE__*/React__namespace.forwardRef(function Backdrop(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiBackdrop'
  });
  const {
    children,
    className,
    component = 'div',
    invisible = false,
    open,
    components = {},
    componentsProps = {},
    slotProps = {},
    slots = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    invisible
  };
  const classes = useUtilityClasses$2(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    root: components.Root,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    ...componentsProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot.useSlot('root', {
    elementType: BackdropRoot,
    externalForwardedProps,
    className: DefaultPropsProvider.clsx(classes.root, className),
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot.useSlot('transition', {
    elementType: Fade,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(TransitionSlot, {
    in: open,
    timeout: transitionDuration,
    ...other,
    ...transitionProps,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RootSlot, {
      "aria-hidden": true,
      ...rootProps,
      classes: classes,
      ref: ref,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? Backdrop.propTypes /* remove-proptypes */ = {
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
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: index.PropTypes.shape({
    Root: index.PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: index.PropTypes.shape({
    root: index.PropTypes.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: index.PropTypes.bool,
  /**
   * If `true`, the component is shown.
   */
  open: index.PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index.PropTypes.shape({
    root: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    transition: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index.PropTypes.shape({
    root: index.PropTypes.elementType,
    transition: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: index.PropTypes.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.shape({
    appear: index.PropTypes.number,
    enter: index.PropTypes.number,
    exit: index.PropTypes.number
  })])
} : void 0;

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument.ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow.ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
  if (hide) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow.ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = !blacklist.includes(element);
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, hide);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerWindow.ownerWindow(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = ownerDocument.ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument.ownerDocument(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = ownerWindow.ownerWindow(container);
      scrollContainer = parent?.nodeName === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}

// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://issues.chromium.org/issues/41283952
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * @ignore - internal component.
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React__namespace.useRef(false);
  const sentinelStart = React__namespace.useRef(null);
  const sentinelEnd = React__namespace.useRef(null);
  const nodeToRestore = React__namespace.useRef(null);
  const reactFocusEventTarget = React__namespace.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = React__namespace.useRef(false);
  const rootRef = React__namespace.useRef(null);
  const handleRef = resolveComponentProps.useForkRef(Grow.getReactElementRef(children), rootRef);
  const lastKeydown = React__namespace.useRef(null);
  React__namespace.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React__namespace.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument.ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(['MUI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React__namespace.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument.ownerDocument(rootRef.current);
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside
      if (rootElement.contains(doc.activeElement)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }

      // if the focus event is not coming from inside the children's react tree, reset the refs
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }

      // one of the sentinel nodes was focused, so move the focus
      // to the first/last tabbable element inside the focus trap
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === 'Tab');
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
        // no tabbable elements in the trap focus or the focus was outside of the focus trap
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(React__namespace.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/React__namespace.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" ? FocusTrap.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Grow.elementAcceptingRef,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: index.PropTypes.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: index.PropTypes.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: index.PropTypes.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: index.PropTypes.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: index.PropTypes.func,
  /**
   * If `true`, focus is locked.
   */
  open: index.PropTypes.bool.isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  FocusTrap['propTypes' + ''] = exactProp.exactProp(FocusTrap.propTypes);
}

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}
const noop = () => {};

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const manager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;

  // @ts-ignore internal logic
  const modal = React__namespace.useRef({});
  const mountNodeRef = React__namespace.useRef(null);
  const modalRef = React__namespace.useRef(null);
  const handleRef = resolveComponentProps.useForkRef(modalRef, rootRef);
  const [exited, setExited] = React__namespace.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument.ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = resolveComponentProps.useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = () => manager.isTopModal(getModal());
  const handlePortalRef = resolveComponentProps.useEventCallback(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React__namespace.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);
  React__namespace.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React__namespace.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    otherHandlers.onKeyDown?.(event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || event.which === 229 ||
    // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    otherHandlers.onClick?.(event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = resolveComponentProps.extractEventHandlers(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: 'presentation',
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    };
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return {
      'aria-hidden': true,
      ...externalEventHandlers,
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    };
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction.createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
      onExited: createChainedFunction.createChainedFunction(handleExited, children?.props.onExited ?? noop)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

function getModalUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiModal', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);

const useUtilityClasses$1 = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return DefaultPropsProvider.composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = DefaultPropsProvider.styled('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(DefaultPropsProvider.memoTheme(({
  theme
}) => ({
  position: 'fixed',
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open && ownerState.exited,
    style: {
      visibility: 'hidden'
    }
  }]
})));
const ModalBackdrop = DefaultPropsProvider.styled(Backdrop, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = /*#__PURE__*/React__namespace.forwardRef(function Modal(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    name: 'MuiModal',
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    onClose,
    onTransitionEnter,
    onTransitionExited,
    open,
    slotProps = {},
    slots = {},
    // eslint-disable-next-line react/prop-types
    theme,
    ...other
  } = props;
  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal({
    ...propsWithDefaults,
    rootRef: ref
  });
  const ownerState = {
    ...propsWithDefaults,
    exited
  };
  const classes = useUtilityClasses$1(ownerState);
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const externalForwardedProps = {
    slots: {
      root: components.Root,
      backdrop: components.Backdrop,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot.useSlot('root', {
    ref,
    elementType: ModalRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: getRootProps,
    ownerState,
    className: DefaultPropsProvider.clsx(className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
  });
  const [BackdropSlot, backdropProps] = useSlot.useSlot('backdrop', {
    ref: BackdropProps?.ref,
    elementType: BackdropComponent,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: BackdropProps,
    getSlotProps: otherHandlers => {
      return getBackdropProps({
        ...otherHandlers,
        onClick: event => {
          if (onBackdropClick) {
            onBackdropClick(event);
          }
          if (otherHandlers?.onClick) {
            otherHandlers.onClick(event);
          }
        }
      });
    },
    className: DefaultPropsProvider.clsx(BackdropProps?.className, classes?.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(Grow.Portal, {
    ref: portalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsxs(RootSlot, {
      ...rootProps,
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(BackdropSlot, {
        ...backdropProps
      }) : null, /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(FocusTrap, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/React__namespace.cloneElement(children, childProps)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" ? Modal.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: index.PropTypes.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: index.PropTypes.object,
  /**
   * A single child content element.
   */
  children: Grow.elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: index.PropTypes.object,
  /**
   * @ignore
   */
  className: index.PropTypes.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: index.PropTypes.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: index.PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: index.PropTypes.shape({
    Backdrop: index.PropTypes.elementType,
    Root: index.PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: index.PropTypes.shape({
    backdrop: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    root: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([Grow.HTMLElementType, index.PropTypes.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: index.PropTypes.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: index.PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: index.PropTypes.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: index.PropTypes.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: index.PropTypes.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: index.PropTypes.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: index.PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: index.PropTypes.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: index.PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: index.PropTypes.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: index.PropTypes.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: index.PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: index.PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: index.PropTypes.shape({
    backdrop: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    root: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: index.PropTypes.shape({
    backdrop: index.PropTypes.elementType,
    root: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object])
} : void 0;

function getPopoverUtilityClass(slot) {
  return createTheme.generateUtilityClass('MuiPopover', slot);
}
DefaultPropsProvider.generateUtilityClasses('MuiPopover', ['root', 'paper']);

function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return DefaultPropsProvider.composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = DefaultPropsProvider.styled(Modal, {
  name: 'MuiPopover',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const PopoverPaper = DefaultPropsProvider.styled(Paper.Paper, {
  name: 'MuiPopover',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})({
  position: 'absolute',
  overflowY: 'auto',
  overflowX: 'hidden',
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /*#__PURE__*/React__namespace.forwardRef(function Popover(inProps, ref) {
  const props = DefaultPropsProvider.useDefaultProps({
    props: inProps,
    name: 'MuiPopover'
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    anchorPosition,
    anchorReference = 'anchorEl',
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    // TODO: remove in v7
    slots = {},
    slotProps = {},
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    TransitionComponent,
    // TODO: remove in v7
    transitionDuration: transitionDurationProp = 'auto',
    TransitionProps = {},
    // TODO: remove in v7
    disableScrollLock = false,
    ...other
  } = props;
  const paperRef = React__namespace.useRef();
  const ownerState = {
    ...props,
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  };
  const classes = useUtilityClasses(ownerState);

  // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)
  const getAnchorOffset = React__namespace.useCallback(() => {
    if (anchorReference === 'anchorPosition') {
      if (process.env.NODE_ENV !== 'production') {
        if (!anchorPosition) {
          console.error('MUI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);

    // If an anchor element wasn't provided, just use the parent body element of this Popover
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument.ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (process.env.NODE_ENV !== 'production') {
      const box = anchorElement.getBoundingClientRect();
      if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

  // Returns the base transform origin using the element
  const getTransformOrigin = React__namespace.useCallback(elemRect => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React__namespace.useCallback(element => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    // Get the transform origin point on the element itself
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }

    // Get the offset of the anchoring element
    const anchorOffset = getAnchorOffset();

    // Calculate element positioning
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;

    // Use the parent window of the anchorEl if provided
    const containerWindow = ownerWindow.ownerWindow(resolveAnchorEl(anchorEl));

    // Window thresholds taking required margin into account
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;

    // Check if the vertical axis needs shifting
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['MUI: The popover component is too tall.', `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    }

    // Check if the horizontal axis needs shifting
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React__namespace.useState(open);
  const setPositioningStyles = React__namespace.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.setProperty('top', positioning.top);
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React__namespace.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener('scroll', setPositioningStyles);
    }
    return () => window.removeEventListener('scroll', setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = () => {
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React__namespace.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React__namespace.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React__namespace.useEffect(() => {
    if (!open) {
      return undefined;
    }
    const handleResize = ownerWindow.debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow.ownerWindow(anchorEl);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      transition: TransitionProps,
      paper: PaperPropsProp,
      ...slotProps
    }
  };
  const [TransitionSlot, transitionSlotProps] = useSlot.useSlot('transition', {
    elementType: Grow.Grow,
    externalForwardedProps,
    ownerState,
    getSlotProps: handlers => ({
      ...handlers,
      onEntering: (element, isAppearing) => {
        handlers.onEntering?.(element, isAppearing);
        handleEntering();
      },
      onExited: element => {
        handlers.onExited?.(element);
        handleExited();
      }
    }),
    additionalProps: {
      appear: true,
      in: open
    }
  });
  if (transitionDurationProp === 'auto' && !TransitionSlot.muiSupportAuto) {
    transitionDuration = undefined;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  const container = containerProp || (anchorEl ? ownerDocument.ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
  const [RootSlot, {
    slots: rootSlotsProp,
    slotProps: rootSlotPropsProp,
    ...rootProps
  }] = useSlot.useSlot('root', {
    ref,
    elementType: PopoverRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    additionalProps: {
      slots: {
        backdrop: slots.backdrop
      },
      slotProps: {
        backdrop: mergeSlotProps.mergeSlotProps(typeof slotProps.backdrop === 'function' ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
          invisible: true
        })
      },
      container,
      open
    },
    ownerState,
    className: DefaultPropsProvider.clsx(classes.root, className)
  });
  const [PaperSlot, paperProps] = useSlot.useSlot('paper', {
    ref: paperRef,
    className: classes.paper,
    elementType: PopoverPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: {
      elevation,
      style: isPositioned ? undefined : {
        opacity: 0
      }
    },
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(RootSlot, {
    ...rootProps,
    ...(!isHostComponent.isHostComponent(RootSlot) && {
      slots: rootSlotsProp,
      slotProps: rootSlotPropsProp,
      disableScrollLock
    }),
    children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(TransitionSlot, {
      ...transitionSlotProps,
      timeout: transitionDuration,
      children: /*#__PURE__*/jsxRuntime.jsxRuntimeExports.jsx(PaperSlot, {
        ...paperProps,
        children: children
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Popover.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: useSlot.refType,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes.chainPropTypes(index.PropTypes.oneOfType([Grow.HTMLElementType, index.PropTypes.func]), props => {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join('\n'));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: index.PropTypes.shape({
    horizontal: index.PropTypes.oneOfType([index.PropTypes.oneOf(['center', 'left', 'right']), index.PropTypes.number]).isRequired,
    vertical: index.PropTypes.oneOfType([index.PropTypes.oneOf(['bottom', 'center', 'top']), index.PropTypes.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: index.PropTypes.shape({
    left: index.PropTypes.number.isRequired,
    top: index.PropTypes.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: index.PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: index.PropTypes.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: index.PropTypes.object,
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
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: index.PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([Grow.HTMLElementType, index.PropTypes.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: index.PropTypes.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Paper.integerPropType,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: index.PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: index.PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: index.PropTypes.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: index.PropTypes /* @typescript-to-proptypes-ignore */.shape({
    component: elementTypeAcceptingRef.elementTypeAcceptingRef
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: index.PropTypes.shape({
    backdrop: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    paper: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    root: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
    transition: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: index.PropTypes.shape({
    backdrop: index.PropTypes.elementType,
    paper: index.PropTypes.elementType,
    root: index.PropTypes.elementType,
    transition: index.PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: index.PropTypes.oneOfType([index.PropTypes.arrayOf(index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object, index.PropTypes.bool])), index.PropTypes.func, index.PropTypes.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: index.PropTypes.shape({
    horizontal: index.PropTypes.oneOfType([index.PropTypes.oneOf(['center', 'left', 'right']), index.PropTypes.number]).isRequired,
    vertical: index.PropTypes.oneOfType([index.PropTypes.oneOf(['bottom', 'center', 'top']), index.PropTypes.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: index.PropTypes.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: index.PropTypes.oneOfType([index.PropTypes.oneOf(['auto']), index.PropTypes.number, index.PropTypes.shape({
    appear: index.PropTypes.number,
    enter: index.PropTypes.number,
    exit: index.PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: index.PropTypes.object
} : void 0;

exports.Fade = Fade;
exports.FocusTrap = FocusTrap;
exports.Popover = Popover;
exports.PopoverPaper = PopoverPaper;
exports.getScrollbarSize = getScrollbarSize;
//# sourceMappingURL=Popover-CmQOsdY5.js.map
