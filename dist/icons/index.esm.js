import require$$0 from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var ActivityIcon = function ActivityIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M10 1.25C5.1675 1.25 1.25 5.1675 1.25 10C1.25 14.8325 5.1675 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.1675 14.8325 1.25 10 1.25ZM10 17.5C6.2725 17.5 3.125 14.3525 3.125 10.625C3.125 6.8975 6.2725 3.75 10 3.75C13.7275 3.75 16.875 6.8975 16.875 10.625C16.875 14.3525 13.7275 17.5 10 17.5ZM10 5.625C9.585 5.625 9.25 5.96 9.25 6.375V10.625C9.25 11.04 9.585 11.375 10 11.375C10.415 11.375 10.75 11.04 10.75 10.625V6.375C10.75 5.96 10.415 5.625 10 5.625ZM10 12.5C9.585 12.5 9.25 12.835 9.25 13.25C9.25 13.665 9.585 14 10 14C10.415 14 10.75 13.665 10.75 13.25C10.75 12.835 10.415 12.5 10 12.5Z',
      fill: '#68707A'
    })
  }));
};

var ArrowDropDownIcon = function ArrowDropDownIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#fff' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-384 288-576h384L480-384Z',
      fill: fill
    })
  }));
};

var Analytics = function Analytics(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M3 1.5H1.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H22.5V21H3V1.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M22.5 6.75H17.25V8.25H19.9425L14.25 13.9425L11.0325 10.7175C10.9628 10.6472 10.8798 10.5914 10.7884 10.5533C10.697 10.5153 10.599 10.4957 10.5 10.4957C10.401 10.4957 10.303 10.5153 10.2116 10.5533C10.1202 10.5914 10.0372 10.6472 9.9675 10.7175L4.5 16.1925L5.5575 17.25L10.5 12.3075L13.7175 15.5325C13.7872 15.6028 13.8702 15.6586 13.9616 15.6967C14.053 15.7347 14.151 15.7543 14.25 15.7543C14.349 15.7543 14.447 15.7347 14.5384 15.6967C14.6298 15.6586 14.7128 15.6028 14.7825 15.5325L21 9.3075V12H22.5V6.75Z',
      fill: '#020210'
    })]
  }));
};

var AddAlt = function AddAlt(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z',
      fill: '#68707A'
    })]
  }));
};

var Company = function Company(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M21 1.5H12C11.6023 1.5004 11.221 1.65856 10.9398 1.93978C10.6586 2.221 10.5004 2.6023 10.5 3V10.5H3C2.6023 10.5004 2.221 10.6586 1.93978 10.9398C1.65856 11.221 1.5004 11.6023 1.5 12V22.5H22.5V3C22.4995 2.60232 22.3414 2.22105 22.0602 1.93984C21.7789 1.65864 21.3977 1.50046 21 1.5ZM6.75 21V15.75H9.75V21H6.75ZM21 21H11.25V15C11.25 14.8011 11.171 14.6103 11.0303 14.4697C10.8897 14.329 10.6989 14.25 10.5 14.25H6C5.80109 14.25 5.61032 14.329 5.46967 14.4697C5.32902 14.6103 5.25 14.8011 5.25 15V21H3V12H12V3H21V21Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 6H13.5V7.5H15V6Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.5 6H18V7.5H19.5V6Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 10.5H13.5V12H15V10.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.5 10.5H18V12H19.5V10.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 14.9997H13.5V16.4997H15V14.9997Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.5 14.9997H18V16.4997H19.5V14.9997Z',
      fill: '#020210'
    })]
  }));
};

var AddStudent = function AddStudent(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5ZM10 1.25C5.1875 1.25 1.25 5.1875 1.25 10C1.25 14.8125 5.1875 18.75 10 18.75C14.8125 18.75 18.75 14.8125 18.75 10C18.75 5.1875 14.8125 1.25 10 1.25Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 9.375H10.625V5H9.375V9.375H5V10.625H9.375V15H10.625V10.625H15V9.375Z',
      fill: '#68707A'
    })]
  }));
};

var Learning = function Learning(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M22.5 6H12V7.5H22.5V6Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M4.5 7.9425L2.5575 6L1.5 7.0575L4.5 10.0575L10.5 4.0575L9.4425 3L4.5 7.9425Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M22.5 16.5H12V18H22.5V16.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M4.5 18.4425L2.5575 16.5L1.5 17.5575L4.5 20.5575L10.5 14.5575L9.4425 13.5L4.5 18.4425Z',
      fill: '#020210'
    })]
  }));
};

var UsersIcon = function UsersIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M22.5 22.5H21V18.75C20.9989 17.7558 20.6034 16.8026 19.9004 16.0996C19.1974 15.3966 18.2442 15.0011 17.25 15V13.5C18.6419 13.5015 19.9764 14.0552 20.9606 15.0394C21.9448 16.0236 22.4985 17.3581 22.5 18.75V22.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16.5 22.5H15V18.75C14.9988 17.7558 14.6034 16.8027 13.9004 16.0996C13.1973 15.3966 12.2442 15.0012 11.25 15H6.75C5.7558 15.0012 4.80265 15.3966 4.09964 16.0996C3.39664 16.8027 3.00117 17.7558 3 18.75V22.5H1.5V18.75C1.50163 17.3581 2.05527 16.0237 3.03949 15.0395C4.0237 14.0553 5.35811 13.5016 6.75 13.5H11.25C12.6419 13.5016 13.9763 14.0553 14.9605 15.0395C15.9447 16.0237 16.4984 17.3581 16.5 18.75V22.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 1.5V3C15.9946 3 16.9484 3.39509 17.6516 4.09835C18.3549 4.80161 18.75 5.75544 18.75 6.75C18.75 7.74456 18.3549 8.69839 17.6516 9.40165C16.9484 10.1049 15.9946 10.5 15 10.5V12C16.3924 12 17.7277 11.4469 18.7123 10.4623C19.6969 9.47774 20.25 8.14239 20.25 6.75C20.25 5.35761 19.6969 4.02226 18.7123 3.03769C17.7277 2.05312 16.3924 1.5 15 1.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M9 3C9.74168 3 10.4667 3.21993 11.0834 3.63199C11.7001 4.04404 12.1807 4.62971 12.4645 5.31494C12.7484 6.00016 12.8226 6.75416 12.6779 7.48159C12.5333 8.20902 12.1761 8.8772 11.6517 9.40165C11.1272 9.9261 10.459 10.2833 9.73159 10.4279C9.00416 10.5726 8.25016 10.4984 7.56494 10.2145C6.87971 9.93072 6.29404 9.45007 5.88199 8.83339C5.46993 8.2167 5.25 7.49168 5.25 6.75C5.25 5.75544 5.64509 4.80161 6.34835 4.09835C7.05161 3.39509 8.00544 3 9 3ZM9 1.5C7.96165 1.5 6.94661 1.80791 6.08326 2.38478C5.2199 2.96166 4.54699 3.7816 4.14963 4.74091C3.75227 5.70022 3.6483 6.75582 3.85088 7.77422C4.05345 8.79262 4.55346 9.72808 5.28769 10.4623C6.02191 11.1965 6.95738 11.6966 7.97578 11.8991C8.99418 12.1017 10.0498 11.9977 11.0091 11.6004C11.9684 11.203 12.7883 10.5301 13.3652 9.66674C13.9421 8.80339 14.25 7.78835 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5Z',
      fill: '#020210'
    })]
  }));
};

var Circle = function Circle(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M12 6C13.1867 6 14.3467 6.35189 15.3334 7.01118C16.3201 7.67047 17.0892 8.60754 17.5433 9.7039C17.9974 10.8003 18.1162 12.0067 17.8847 13.1705C17.6532 14.3344 17.0818 15.4035 16.2426 16.2426C15.4035 17.0818 14.3344 17.6532 13.1705 17.8847C12.0067 18.1162 10.8003 17.9974 9.7039 17.5433C8.60755 17.0892 7.67048 16.3201 7.01119 15.3334C6.3519 14.3467 6 13.1867 6 12C6.00179 10.4092 6.63451 8.88416 7.75934 7.75933C8.88417 6.6345 10.4093 6.00179 12 6ZM12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z',
      fill: '#D6DAE0'
    })
  }));
};

var Library = function Library(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M22.5 6H12V7.5H22.5V6Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M22.5 16.5H12V18H22.5V16.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M7.5 10.5H3C2.60232 10.4995 2.22105 10.3414 1.93984 10.0602C1.65864 9.77895 1.50046 9.39768 1.5 9V4.5C1.50046 4.10232 1.65864 3.72105 1.93984 3.43984C2.22105 3.15864 2.60232 3.00046 3 3H7.5C7.89768 3.00046 8.27895 3.15864 8.56016 3.43984C8.84136 3.72105 8.99954 4.10232 9 4.5V9C8.99954 9.39768 8.84136 9.77895 8.56016 10.0602C8.27895 10.3414 7.89768 10.4995 7.5 10.5ZM3 4.5V9H7.5009L7.5 4.5H3Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M7.5 21H3C2.60232 20.9995 2.22105 20.8414 1.93984 20.5602C1.65864 20.2789 1.50046 19.8977 1.5 19.5V15C1.50046 14.6023 1.65864 14.221 1.93984 13.9398C2.22105 13.6586 2.60232 13.5005 3 13.5H7.5C7.89768 13.5005 8.27895 13.6586 8.56016 13.9398C8.84136 14.221 8.99954 14.6023 9 15V19.5C8.99954 19.8977 8.84136 20.2789 8.56016 20.5602C8.27895 20.8414 7.89768 20.9995 7.5 21ZM3 15V19.5H7.5009L7.5 15H3Z',
      fill: '#020210'
    })]
  }));
};

var AddIcon = function AddIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? 'white' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '25',
    height: '24',
    viewBox: '0 0 25 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M13.25 11.25V6H11.75V11.25H6.5V12.75H11.75V18H13.25V12.75H18.5V11.25H13.25Z',
      fill: fill
    })
  }));
};

var AnalyticsIcon = function AnalyticsIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M2 1H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H15V14H2V1Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 4.5H11.5V5.5H13.295L9.5 9.295L7.355 7.145C7.30852 7.09814 7.25322 7.06094 7.19229 7.03555C7.13136 7.01017 7.06601 6.9971 7 6.9971C6.93399 6.9971 6.86864 7.01017 6.80771 7.03555C6.74678 7.06094 6.69148 7.09814 6.645 7.145L3 10.795L3.705 11.5L7 8.205L9.145 10.355C9.19148 10.4019 9.24678 10.4391 9.30771 10.4644C9.36864 10.4898 9.43399 10.5029 9.5 10.5029C9.56601 10.5029 9.63136 10.4898 9.69229 10.4644C9.75322 10.4391 9.80852 10.4019 9.855 10.355L14 6.205V8H15V4.5Z',
      fill: '#020210'
    })]
  }));
};

var AssignTutor = function AssignTutor(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M13.75 18.75H12.5V16.875C12.499 16.0465 12.1695 15.2522 11.5836 14.6664C10.9978 14.0805 10.2035 13.751 9.375 13.75H5.625C4.7965 13.751 4.00221 14.0805 3.41637 14.6664C2.83053 15.2522 2.50098 16.0465 2.5 16.875V18.75H1.25V16.875C1.25136 15.7151 1.71273 14.6031 2.53291 13.7829C3.35308 12.9627 4.46509 12.5014 5.625 12.5H9.375C10.5349 12.5014 11.6469 12.9627 12.4671 13.7829C13.2873 14.6031 13.7486 15.7151 13.75 16.875V18.75Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M0.625 3.75C0.45924 3.75 0.300269 3.81585 0.183058 3.93306C0.0658481 4.05027 0 4.20924 0 4.375V10H1.25V4.375C1.25 4.20924 1.18415 4.05027 1.06694 3.93306C0.949731 3.81585 0.79076 3.75 0.625 3.75Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M0 1.25V2.5H3.125V6.875C3.125 8.03532 3.58594 9.14812 4.40641 9.96859C5.22688 10.7891 6.33968 11.25 7.5 11.25C8.66032 11.25 9.77312 10.7891 10.5936 9.96859C11.4141 9.14812 11.875 8.03532 11.875 6.875V2.5H15V1.25H0ZM4.375 2.5H10.625V4.375H4.375V2.5ZM7.5 10C6.6712 10 5.87634 9.67076 5.29029 9.08471C4.70424 8.49866 4.375 7.7038 4.375 6.875V5.625H10.625V6.875C10.625 7.7038 10.2958 8.49866 9.70971 9.08471C9.12366 9.67076 8.3288 10 7.5 10Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M20 8.75H17.5V6.25H16.25V8.75H13.75V10H16.25V12.5H17.5V10H20V8.75Z',
      fill: '#68707A'
    })]
  }));
};

var Book = function Book(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '94',
    height: '62',
    viewBox: '0 0 94 62',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsxs("g", {
      id: 'Vector',
      children: [jsxRuntimeExports.jsx("path", {
        d: 'M93 6.95041C85.3333 2.98347 77.6667 1 70 1C62.3333 1 54.6667 2.98347 47 6.95041V61C54.6667 57.3636 62.3333 55.5455 70 55.5455C77.6667 55.5455 85.3333 57.3636 93 61V6.95041ZM47 6.95041C39.3333 2.98347 31.6667 1 24 1C16.3333 1 8.66667 2.98347 1 6.95041V61C8.66667 57.3636 16.3333 55.5455 24 55.5455C31.6667 55.5455 39.3333 57.3636 47 61V6.95041Z',
        fill: '#E1F5E3'
      }), jsxRuntimeExports.jsx("path", {
        d: 'M47 6.95041C54.6667 2.98347 62.3333 1 70 1C77.6667 1 85.3333 2.98347 93 6.95041V61C85.3333 57.3636 77.6667 55.5455 70 55.5455C62.3333 55.5455 54.6667 57.3636 47 61M47 6.95041V61M47 6.95041C39.3333 2.98347 31.6667 1 24 1C16.3333 1 8.66667 2.98347 1 6.95041V61C8.66667 57.3636 16.3333 55.5455 24 55.5455C31.6667 55.5455 39.3333 57.3636 47 61',
        stroke: '#72C4AC',
        "stroke-linecap": 'round',
        "stroke-linejoin": 'round'
      })]
    })
  }));
};

var BookWithBookmark = function BookWithBookmark(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M12 15H4C3.73488 14.9997 3.4807 14.8942 3.29323 14.7068C3.10576 14.5193 3.0003 14.2651 3 14V2C3.00026 1.73486 3.10571 1.48066 3.29319 1.29319C3.48066 1.10571 3.73486 1.00026 4 1H12C12.2651 1.0003 12.5193 1.10576 12.7068 1.29323C12.8942 1.4807 12.9997 1.73488 13 2V10.3091L10.5 9.0591L8 10.3091V2H4V14H12V12H13V14C12.9996 14.2651 12.8942 14.5193 12.7067 14.7067C12.5193 14.8942 12.2651 14.9996 12 15ZM10.5 7.9409L12 8.6909V2H9V8.6909L10.5 7.9409Z',
      fill: '#020210'
    })
  }));
};

var BusinessIcon = function BusinessIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M80-80v-481l280-119v80l200-80v120h320v480H80Zm80-80h640v-320H480v-82l-200 80v-78l-120 53v347Zm280-80h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm280-320H680l40-320h120l40 320ZM160-160h640-640Z',
      fill: '#06C68F'
    })
  }));
};

var CaretDown = function CaretDown(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Caret--down',
      children: jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M18 9L12 16.5L6 9H18Z',
        fill: '#AEB5C1'
      })
    })
  }));
};

var CheckedIcon = function CheckedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsxs("g", {
      id: 'checked 1',
      children: [jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M13.6 21.8654C13.4249 21.8656 13.2514 21.8311 13.0897 21.7641C12.9279 21.6971 12.781 21.5987 12.6573 21.4747L8.39064 17.2081C8.14776 16.9566 8.01337 16.6198 8.01641 16.2702C8.01945 15.9206 8.15967 15.5862 8.40688 15.339C8.65409 15.0918 8.98851 14.9515 9.3381 14.9485C9.6877 14.9455 10.0245 15.0798 10.276 15.3227L13.6 18.6467L21.724 10.5227C21.9754 10.2798 22.3122 10.1455 22.6618 10.1485C23.0114 10.1515 23.3459 10.2918 23.5931 10.539C23.8403 10.7862 23.9805 11.1206 23.9835 11.4702C23.9866 11.8198 23.8522 12.1566 23.6093 12.4081L14.5426 21.4747C14.419 21.5987 14.2721 21.6971 14.1103 21.7641C13.9485 21.8311 13.7751 21.8656 13.6 21.8654Z',
        fill: '#0074D9'
      }), jsxRuntimeExports.jsx("path", {
        id: 'Vector_2',
        d: 'M28.0001 2.66797H4.00008C3.64646 2.66797 3.30732 2.80844 3.05727 3.05849C2.80722 3.30854 2.66675 3.64768 2.66675 4.0013V28.0013C2.66675 28.3549 2.80722 28.6941 3.05727 28.9441C3.30732 29.1942 3.64646 29.3346 4.00008 29.3346H28.0001C28.3537 29.3346 28.6928 29.1942 28.9429 28.9441C29.1929 28.6941 29.3334 28.3549 29.3334 28.0013V4.0013C29.3334 3.64768 29.1929 3.30854 28.9429 3.05849C28.6928 2.80844 28.3537 2.66797 28.0001 2.66797ZM23.6094 12.4106L14.5427 21.4773C14.2927 21.7273 13.9536 21.8677 13.6001 21.8677C13.2465 21.8677 12.9075 21.7273 12.6574 21.4773L8.39075 17.2106C8.14787 16.9592 8.01348 16.6224 8.01652 16.2728C8.01955 15.9232 8.15978 15.5888 8.40699 15.3415C8.6542 15.0943 8.98862 14.9541 9.33821 14.9511C9.68781 14.948 10.0246 15.0824 10.2761 15.3253L13.6001 18.6493L21.7241 10.5253C21.9755 10.2824 22.3124 10.148 22.6619 10.1511C23.0115 10.1541 23.346 10.2943 23.5932 10.5415C23.8404 10.7888 23.9806 11.1232 23.9836 11.4728C23.9867 11.8224 23.8523 12.1592 23.6094 12.4106Z',
        fill: '#CEDEF4'
      })]
    })
  }));
};

var Checkmark = function Checkmark(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Checkmark',
      children: jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M8.125 15.0009L2.5 9.37594L3.38375 8.49219L8.125 13.2328L16.6163 4.74219L17.5 5.62594L8.125 15.0009Z',
        fill: '#00905E'
      })
    })
  }));
};

var CheckmarkOutline = function CheckmarkOutline(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Checkmark--outline',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M8.75 13.3837L5.625 10.2581L6.50813 9.375L8.75 11.6163L13.4906 6.875L14.375 7.75938L8.75 13.3837Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10 1.25C8.26942 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91606 6.65152C1.25379 8.25037 1.08051 10.0097 1.41813 11.707C1.75575 13.4044 2.58911 14.9635 3.81282 16.1872C5.03653 17.4109 6.59563 18.2442 8.29296 18.5819C9.9903 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25ZM10 17.5C8.51664 17.5 7.0666 17.0601 5.83323 16.236C4.59986 15.4119 3.63856 14.2406 3.07091 12.8701C2.50325 11.4997 2.35473 9.99168 2.64411 8.53682C2.9335 7.08197 3.64781 5.74559 4.6967 4.6967C5.7456 3.64781 7.08197 2.9335 8.53683 2.64411C9.99168 2.35472 11.4997 2.50325 12.8701 3.0709C14.2406 3.63856 15.4119 4.59985 16.236 5.83322C17.0601 7.06659 17.5 8.51664 17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5Z',
          fill: '#B3B3B8'
        })]
      })
    })
  }));
};

var CheckmarkOutlineAction = function CheckmarkOutlineAction(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '40',
    height: '40',
    viewBox: '0 0 40 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M18.75 23.3837L15.625 20.2581L16.5081 19.375L18.75 21.6163L23.4906 16.875L24.375 17.7594L18.75 23.3837Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M20 11.25C18.2694 11.25 16.5777 11.7632 15.1388 12.7246C13.6998 13.6861 12.5783 15.0527 11.9161 16.6515C11.2538 18.2504 11.0805 20.0097 11.4181 21.707C11.7558 23.4044 12.5891 24.9635 13.8128 26.1872C15.0365 27.4109 16.5956 28.2442 18.293 28.5819C19.9903 28.9195 21.7496 28.7462 23.3485 28.0839C24.9473 27.4217 26.3139 26.3002 27.2754 24.8612C28.2368 23.4223 28.75 21.7306 28.75 20C28.75 17.6794 27.8281 15.4538 26.1872 13.8128C24.5462 12.1719 22.3206 11.25 20 11.25ZM20 27.5C18.5166 27.5 17.0666 27.0601 15.8332 26.236C14.5999 25.4119 13.6386 24.2406 13.0709 22.8701C12.5033 21.4997 12.3547 19.9917 12.6441 18.5368C12.9335 17.082 13.6478 15.7456 14.6967 14.6967C15.7456 13.6478 17.082 12.9335 18.5368 12.6441C19.9917 12.3547 21.4997 12.5032 22.8701 13.0709C24.2406 13.6386 25.4119 14.5999 26.236 15.8332C27.0601 17.0666 27.5 18.5166 27.5 20C27.5 21.9891 26.7098 23.8968 25.3033 25.3033C23.8968 26.7098 21.9891 27.5 20 27.5Z',
      fill: '#68707A'
    })]
  }));
};

var Close = function Close(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Close',
      children: jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M15 5.875L14.125 5L10 9.125L5.875 5L5 5.875L9.125 10L5 14.125L5.875 15L10 10.875L14.125 15L15 14.125L10.875 10L15 5.875Z',
        fill: '#EA382A'
      })
    })
  }));
};

var CloseIcon = function CloseIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
      fill: fill
    })
  }));
};

var CloseOutline = function CloseOutline(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Close--outline',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z',
          fill: '#B3B3B8'
        })]
      })
    })
  }));
};

var CloseOutlineAction = function CloseOutlineAction(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: '40',
    height: '40',
    viewBox: '0 0 256 256',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      fill: '#68707a',
      fillRule: 'nonzero',
      stroke: 'none',
      strokeWidth: '1',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: '10',
      fontFamily: 'none',
      fontWeight: 'none',
      fontSize: 'none',
      textAnchor: 'none',
      style: {
        mixBlendMode: 'normal'
      },
      children: jsxRuntimeExports.jsxs("g", {
        transform: 'scale(6.4,6.4)',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M20,11.25c-4.875,0 -8.75,3.875 -8.75,8.75c0,4.875 3.875,8.75 8.75,8.75c4.875,0 8.75,-3.875 8.75,-8.75c0,-4.875 -3.875,-8.75 -8.75,-8.75zM20,27.5c-4.125,0 -7.5,-3.375 -7.5,-7.5c0,-4.125 3.375,-7.5 7.5,-7.5c4.125,0 7.5,3.375 7.5,7.5c0,4.125 -3.375,7.5 -7.5,7.5z'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M23.375,24.375l-3.375,-3.375l-3.375,3.375l-1,-1l3.375,-3.375l-3.375,-3.375l1,-1l3.375,3.375l3.375,-3.375l1,1l-3.375,3.375l3.375,3.375z'
        })]
      })
    })
  }));
};

var Coach = function Coach(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '20',
    height: '19',
    viewBox: '0 0 20 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("circle", {
      cx: '10.0108',
      cy: '9.25204',
      r: '9.25204',
      fill: '#9B51E0'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12.1911 8.1147L12.4425 8.40466L12.7876 8.23666L15.0286 7.14571L13.4363 12.3834H6.5854L4.99314 7.14567L7.23412 8.23663L7.57921 8.40464L7.8307 8.11468L10.0109 5.601L12.1911 8.1147ZM13.4222 12.43C13.4222 12.43 13.4222 12.4299 13.4222 12.4298L13.4222 12.43L13.4222 12.43ZM6.59957 12.43L6.59957 12.43L6.59957 12.43ZM9.96119 5.54371L9.96123 5.54375L9.96119 5.54371Z',
      fill: 'white',
      stroke: 'white'
    })]
  }));
};

var DarkAddAlt = function DarkAddAlt(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z',
      fill: '#08C694'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z',
      fill: '#08C694'
    })]
  }));
};

var DarkAiAssistent = function DarkAiAssistent(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M20.25 18C19.9158 18.0017 19.5862 18.0788 19.2859 18.2256L16.0606 15H13.5V16.5H15.4394L18.2254 19.2861C18.0788 19.5864 18.0018 19.9159 18 20.25C18 20.695 18.132 21.13 18.3792 21.5C18.6264 21.87 18.9778 22.1584 19.389 22.3287C19.8001 22.499 20.2525 22.5436 20.689 22.4568C21.1254 22.3699 21.5263 22.1557 21.841 21.841C22.1557 21.5263 22.3699 21.1254 22.4568 20.689C22.5436 20.2525 22.499 19.8001 22.3287 19.389C22.1584 18.9778 21.87 18.6264 21.5 18.3792C21.13 18.132 20.695 18 20.25 18ZM20.25 21C20.1017 21 19.9567 20.956 19.8333 20.8736C19.71 20.7912 19.6139 20.6741 19.5571 20.537C19.5003 20.4 19.4855 20.2492 19.5144 20.1037C19.5434 19.9582 19.6148 19.8246 19.7197 19.7197C19.8246 19.6148 19.9582 19.5433 20.1037 19.5144C20.2492 19.4855 20.4 19.5003 20.537 19.5571C20.6741 19.6139 20.7912 19.71 20.8736 19.8333C20.956 19.9567 21 20.1017 21 20.25C20.9998 20.4489 20.9207 20.6395 20.7801 20.7801C20.6395 20.9207 20.4489 20.9998 20.25 21Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M20.25 9.75C19.7862 9.7514 19.3342 9.89634 18.9561 10.1649C18.578 10.4335 18.2923 10.8125 18.1382 11.25H13.5V12.75H18.1382C18.2764 13.1378 18.5186 13.4802 18.8382 13.7397C19.1578 13.9992 19.5426 14.1658 19.9505 14.2215C20.3584 14.2771 20.7738 14.2195 21.1512 14.055C21.5286 13.8906 21.8536 13.6255 22.0905 13.2889C22.3275 12.9522 22.4674 12.5569 22.4949 12.1461C22.5224 11.7354 22.4365 11.3249 22.2466 10.9597C22.0566 10.5944 21.7699 10.2884 21.4178 10.0751C21.0657 9.86173 20.6617 9.74928 20.25 9.75ZM20.25 12.75C20.1017 12.75 19.9567 12.706 19.8333 12.6236C19.71 12.5412 19.6139 12.4241 19.5571 12.287C19.5003 12.15 19.4855 11.9992 19.5144 11.8537C19.5434 11.7082 19.6148 11.5746 19.7197 11.4697C19.8246 11.3648 19.9582 11.2933 20.1037 11.2644C20.2492 11.2355 20.4 11.2503 20.537 11.3071C20.6741 11.3639 20.7912 11.46 20.8736 11.5833C20.956 11.7067 21 11.8517 21 12C20.9998 12.1989 20.9207 12.3895 20.7801 12.5301C20.6395 12.6707 20.4489 12.7498 20.25 12.75Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M20.25 1.5C19.6535 1.50066 19.0815 1.73792 18.6597 2.15973C18.2379 2.58155 18.0007 3.15346 18 3.75C18.0026 4.1093 18.0922 4.46263 18.2611 4.77975L15.4468 7.5H13.5V9H16.0532L19.3524 5.8107C19.6589 5.9443 19.9913 6.00788 20.3255 5.99682C20.6596 5.98576 20.9871 5.90034 21.2841 5.74678C21.5811 5.59321 21.8401 5.37536 22.0423 5.10909C22.2444 4.84282 22.3847 4.53481 22.4529 4.2075C22.521 3.88018 22.5153 3.54179 22.4362 3.21694C22.3571 2.8921 22.2066 2.58897 21.9956 2.32963C21.7846 2.07029 21.5184 1.86126 21.2165 1.71774C20.9145 1.57423 20.5843 1.49984 20.25 1.5ZM20.25 4.5C20.1017 4.5 19.9567 4.45601 19.8333 4.3736C19.71 4.29119 19.6139 4.17406 19.5571 4.03701C19.5003 3.89997 19.4855 3.74917 19.5144 3.60368C19.5434 3.4582 19.6148 3.32456 19.7197 3.21967C19.8246 3.11478 19.9582 3.04335 20.1037 3.01441C20.2492 2.98547 20.4 3.00032 20.537 3.05709C20.6741 3.11386 20.7912 3.20999 20.8736 3.33332C20.956 3.45666 21 3.60166 21 3.75C20.9998 3.94886 20.9207 4.13952 20.7801 4.28013C20.6395 4.42075 20.4489 4.49982 20.25 4.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M13.5 4.5H15V3H13.5C13.0726 3.00144 12.6504 3.09475 12.2622 3.27363C11.874 3.4525 11.5288 3.71275 11.25 4.03673C10.9712 3.71275 10.626 3.4525 10.2378 3.27363C9.84956 3.09475 9.42743 3.00144 9 3H8.25C6.4604 3.00199 4.74466 3.71378 3.47922 4.97922C2.21378 6.24466 1.50199 7.9604 1.5 9.75V14.25C1.50199 16.0396 2.21378 17.7553 3.47922 19.0208C4.74466 20.2862 6.4604 20.998 8.25 21H9C9.42743 20.9986 9.84956 20.9052 10.2378 20.7264C10.626 20.5475 10.9712 20.2873 11.25 19.9633C11.5288 20.2873 11.874 20.5475 12.2622 20.7264C12.6504 20.9052 13.0726 20.9986 13.5 21H15V19.5H13.5C13.1023 19.4995 12.721 19.3414 12.4398 19.0602C12.1586 18.7789 12.0005 18.3977 12 18V6C12.0005 5.60232 12.1586 5.22105 12.4398 4.93984C12.721 4.65864 13.1023 4.50046 13.5 4.5ZM9 19.5H8.25C6.98882 19.4978 5.77052 19.042 4.81764 18.2158C3.86476 17.3896 3.24089 16.2481 3.06 15H4.5V13.5H3V10.5H5.25C5.84654 10.4993 6.41845 10.2621 6.84027 9.84027C7.26208 9.41845 7.49934 8.84654 7.5 8.25V6.75H6V8.25C5.99982 8.44886 5.92075 8.63952 5.78013 8.78013C5.63952 8.92075 5.44886 8.99982 5.25 9H3.06C3.24089 7.75186 3.86476 6.61044 4.81764 5.78424C5.77052 4.95805 6.98882 4.50221 8.25 4.5H9C9.39768 4.50046 9.77895 4.65864 10.0602 4.93984C10.3414 5.22105 10.4995 5.60232 10.5 6V9H9V10.5H10.5V13.5H9C8.40346 13.5007 7.83155 13.7379 7.40973 14.1597C6.98792 14.5815 6.75066 15.1535 6.75 15.75V17.25H8.25V15.75C8.25018 15.5511 8.32925 15.3605 8.46987 15.2199C8.61048 15.0793 8.80114 15.0002 9 15H10.5V18C10.4995 18.3977 10.3414 18.7789 10.0602 19.0602C9.77895 19.3414 9.39768 19.4995 9 19.5Z',
      fill: '#020210'
    })]
  }));
};

var DarkCloseOutline = function DarkCloseOutline(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Close--outline',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8C15 4.1 11.9 1 8 1ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10.7 11.5L8 8.8L5.3 11.5L4.5 10.7L7.2 8L4.5 5.3L5.3 4.5L8 7.2L10.7 4.5L11.5 5.3L8.8 8L11.5 10.7L10.7 11.5Z',
          fill: '#68707A'
        })]
      })
    })
  }));
};

var DarkTrashCan = function DarkTrashCan(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Trash-can',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M7 6H6V12H7V6Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10 6H9V12H10V6Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10 1H6V2H10V1Z',
          fill: '#68707A'
        })]
      })
    })
  }));
};

var DefaultAvatar = function DefaultAvatar(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    id: 'Profile_Picture',
    "data-name": 'Profile Picture',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: '156.001',
    height: '159',
    viewBox: '0 0 156.001 159',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsxs("defs", {
      children: [jsxRuntimeExports.jsx("style", {
        children: "\n            .cls-1, .cls-5, .cls-7 { fill: none; }\n            .cls-1, .cls-5 { stroke: #06c68f; }\n            .cls-1 { stroke-width: 12px; }\n            .cls-2 { opacity: 0.7; }\n            .cls-3 { fill: #06c68f; }\n            .cls-4 { clip-path: url(#clip-path); }\n            .cls-5 { stroke-width: 5px; }\n            .cls-6 { stroke: none; }\n          "
      }), jsxRuntimeExports.jsx("clipPath", {
        id: 'clip-path',
        children: jsxRuntimeExports.jsx("ellipse", {
          id: 'Ellipse_55',
          "data-name": 'Ellipse 55',
          className: 'cls-1',
          cx: '78',
          cy: '77.5',
          rx: '78',
          ry: '77.5',
          transform: 'translate(0.068 0.317)'
        })
      })]
    }), jsxRuntimeExports.jsxs("g", {
      id: 'Profile_Picture-2',
      "data-name": 'Profile Picture',
      className: 'cls-2',
      transform: 'translate(0.389 -0.645)',
      children: [jsxRuntimeExports.jsxs("g", {
        id: 'Group_411',
        "data-name": 'Group 411',
        transform: 'translate(-0.458 0.328)',
        children: [jsxRuntimeExports.jsx("ellipse", {
          id: 'Ellipse_53',
          "data-name": 'Ellipse 53',
          className: 'cls-3',
          cx: '22',
          cy: '23',
          rx: '22',
          ry: '23',
          transform: 'translate(56.068 38.317)'
        }), jsxRuntimeExports.jsx("g", {
          id: 'Mask_Group_9',
          "data-name": 'Mask Group 9',
          className: 'cls-4',
          children: jsxRuntimeExports.jsx("ellipse", {
            id: 'Ellipse_54',
            "data-name": 'Ellipse 54',
            className: 'cls-3',
            cx: '47.5',
            cy: '72',
            rx: '47.5',
            ry: '72',
            transform: 'translate(31.068 89.317)'
          })
        })]
      }), jsxRuntimeExports.jsxs("g", {
        id: 'Ellipse_56',
        "data-name": 'Ellipse 56',
        className: 'cls-5',
        transform: 'translate(-0.389 4.645)',
        children: [jsxRuntimeExports.jsx("ellipse", {
          className: 'cls-6',
          cx: '78',
          cy: '77.5',
          rx: '78',
          ry: '77.5'
        }), jsxRuntimeExports.jsx("ellipse", {
          className: 'cls-7',
          cx: '78',
          cy: '77.5',
          rx: '75.5',
          ry: '75'
        })]
      })]
    })]
  }));
};

var Delete = function Delete(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M10.5 9H9V18H10.5V9Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 9H13.5V18H15V9Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 1.5H9V3H15V1.5Z',
      fill: '#EA382A'
    })]
  }));
};

var DocumentAttachment = function DocumentAttachment(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Document--attachment',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M13 15H5.5C5.23488 14.9997 4.9807 14.8942 4.79323 14.7068C4.60576 14.5193 4.5003 14.2651 4.5 14V11H5.5V14H13V3H8.5V2H13C13.2651 2.0003 13.5193 2.10576 13.7068 2.29323C13.8942 2.4807 13.9997 2.73488 14 3V14C13.9997 14.2651 13.8942 14.5193 13.7068 14.7068C13.5193 14.8942 13.2651 14.9997 13 15Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12 5H8.5V6H12V5Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12 7.5H8V8.5H12V7.5Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12 10H7.5V11H12V10Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M4.5 9.5C3.83718 9.49927 3.20172 9.23565 2.73304 8.76696C2.26435 8.29828 2.00073 7.66282 2 7V1.5H3V7C3 7.39782 3.15804 7.77936 3.43934 8.06066C3.72064 8.34196 4.10218 8.5 4.5 8.5C4.89782 8.5 5.27936 8.34196 5.56066 8.06066C5.84196 7.77936 6 7.39782 6 7V2.5C6 2.36739 5.94732 2.24021 5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2C5.36739 2 5.24021 2.05268 5.14645 2.14645C5.05268 2.24021 5 2.36739 5 2.5V7.5H4V2.5C4 2.10218 4.15804 1.72064 4.43934 1.43934C4.72064 1.15804 5.10218 1 5.5 1C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V7C6.99927 7.66282 6.73565 8.29828 6.26696 8.76696C5.79828 9.23565 5.16282 9.49927 4.5 9.5Z',
          fill: '#68707A'
        })]
      })
    })
  }));
};

var DownloadIcon = function DownloadIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M19.5 18V21H4.5V18H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V18H19.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.5 10.5L18.4425 9.4425L12.75 15.1275V1.5H11.25V15.1275L5.5575 9.4425L4.5 10.5L12 18L19.5 10.5Z',
      fill: '#020210'
    })]
  }));
};

var Download = function Download(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Download',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M16.25 15V17.5H3.75V15H2.5V17.5C2.5 17.8315 2.6317 18.1495 2.86612 18.3839C3.10054 18.6183 3.41848 18.75 3.75 18.75H16.25C16.5815 18.75 16.8995 18.6183 17.1339 18.3839C17.3683 18.1495 17.5 17.8315 17.5 17.5V15H16.25Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M16.25 8.75L15.3687 7.86875L10.625 12.6062V1.25H9.375V12.6062L4.63125 7.86875L3.75 8.75L10 15L16.25 8.75Z',
          fill: '#B3B3B8'
        })]
      })
    })
  }));
};

var Edit = function Edit(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M22.5 19.5H1.5V21H22.5V19.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z',
      fill: '#020210'
    })]
  }));
};

var EditRounded = function EditRounded(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '40',
    height: '40',
    viewBox: '0 0 40 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M28.75 26.25H11.25V27.5H28.75V26.25Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M25.875 15.625C26.375 15.125 26.375 14.375 25.875 13.875L23.625 11.625C23.125 11.125 22.375 11.125 21.875 11.625L12.5 21V25H16.5L25.875 15.625ZM22.75 12.5L25 14.75L23.125 16.625L20.875 14.375L22.75 12.5ZM13.75 23.75V21.5L20 15.25L22.25 17.5L16 23.75H13.75Z',
      fill: '#68707A'
    })]
  }));
};

var EditUsers = function EditUsers(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M15 13H1V14H15V13Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z',
      fill: '#68707A'
    })]
  }));
};

var Education = function Education(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M19.2416 22.1382H17.7933V19.9658C17.7922 19.0059 17.4103 18.0856 16.7316 17.4068C16.0528 16.7281 15.1325 16.3463 14.1726 16.3451H9.82779C8.86787 16.3463 7.94759 16.7281 7.26882 17.4068C6.59006 18.0856 6.20823 19.0059 6.2071 19.9658V22.1382H4.75882V19.9658C4.76039 18.6219 5.29495 17.3335 6.24522 16.3832C7.1955 15.433 8.4839 14.8984 9.82779 14.8968H14.1726C15.5165 14.8984 16.8049 15.433 17.7552 16.3832C18.7055 17.3335 19.24 18.6219 19.2416 19.9658V22.1382Z',
      fill: '#8438C6'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M4.03468 4.75892C3.84263 4.75892 3.65844 4.83521 3.52264 4.97101C3.38684 5.10681 3.31055 5.291 3.31055 5.48306V12.0003H4.75882V5.48306C4.75882 5.291 4.68253 5.10681 4.54673 4.97101C4.41093 4.83521 4.22674 4.75892 4.03468 4.75892Z',
      fill: '#8438C6'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M3.31055 1.86237V3.31064H6.93124V8.37961C6.93124 9.72398 7.46529 11.0133 8.4159 11.9639C9.36652 12.9145 10.6558 13.4486 12.0002 13.4486C13.3446 13.4486 14.6339 12.9145 15.5845 11.9639C16.5351 11.0133 17.0692 9.72398 17.0692 8.37961V3.31064H20.6899V1.86237H3.31055ZM8.37951 3.31064H15.6209V5.48306H8.37951V3.31064ZM12.0002 12.0003C11.0399 12.0003 10.119 11.6188 9.43999 10.9398C8.76098 10.2608 8.37951 9.33987 8.37951 8.37961V6.93133H15.6209V8.37961C15.6209 9.33987 15.2394 10.2608 14.5604 10.9398C13.8814 11.6188 12.9605 12.0003 12.0002 12.0003Z',
      fill: '#8438C6'
    })]
  }));
};

var EducationDefault = function EducationDefault(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M13 15H12V13.5C11.9992 12.8372 11.7356 12.2018 11.2669 11.7331C10.7982 11.2644 10.1628 11.0008 9.5 11H6.5C5.8372 11.0008 5.20177 11.2644 4.7331 11.7331C4.26442 12.2018 4.00078 12.8372 4 13.5V15H3V13.5C3.00109 12.5721 3.37018 11.6825 4.02632 11.0263C4.68247 10.3702 5.57208 10.0011 6.5 10H9.5C10.4279 10.0011 11.3175 10.3702 11.9737 11.0263C12.6298 11.6825 12.9989 12.5721 13 13.5V15Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V8H3V3.5C3 3.36739 2.94732 3.24021 2.85355 3.14645C2.75979 3.05268 2.63261 3 2.5 3Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M2 1V2H4.5V5.5C4.5 6.42826 4.86875 7.3185 5.52513 7.97487C6.1815 8.63125 7.07174 9 8 9C8.92826 9 9.8185 8.63125 10.4749 7.97487C11.1313 7.3185 11.5 6.42826 11.5 5.5V2H14V1H2ZM5.5 2H10.5V3.5H5.5V2ZM8 8C7.33696 8 6.70107 7.73661 6.23223 7.26777C5.76339 6.79893 5.5 6.16304 5.5 5.5V4.5H10.5V5.5C10.5 6.16304 10.2366 6.79893 9.76777 7.26777C9.29893 7.73661 8.66304 8 8 8Z',
      fill: '#020210'
    })]
  }));
};

var EmailIcon = function EmailIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z',
      fill: '#06C68F'
    })
  }));
};

var EventIcon = function EventIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z',
      fill: '#06C68F'
    })
  }));
};

var LocationCityIcon = function LocationCityIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z',
      fill: '#06C68F'
    })
  }));
};

var LocationOnIcon = function LocationOnIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z',
      fill: '#06C68F'
    })
  }));
};

var MarkunreadMailboxIcon = function MarkunreadMailboxIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M240-400v-160h-80v400h640v-400H400v-80h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z',
      fill: '#06C68F'
    })
  }));
};

var ArrowDropUpIcon = function ArrowDropUpIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#fff' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M288-384 480-576 672-384H288Z',
      fill: fill
    })
  }));
};

var CircleNotificationsIcon = function CircleNotificationsIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192Zm288-276Zm-.21 396Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240Z',
      fill: fill
    })
  }));
};

var KeyboardBackspaceIcon = function KeyboardBackspaceIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? 'inherit' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192Zm288-276Zm-.21 396Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240Z',
      fill: fill
    })
  }));
};

var FilterIcon = function FilterIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M11.25 17.5H8.75C8.41848 17.5 8.10054 17.3683 7.86612 17.1339C7.6317 16.8995 7.5 16.5815 7.5 16.25V11.5063L2.86875 6.875C2.63401 6.64166 2.5014 6.32474 2.5 5.99375V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75V5.99375C17.4986 6.32474 17.366 6.64166 17.1313 6.875L12.5 11.5063V16.25C12.5 16.5815 12.3683 16.8995 12.1339 17.1339C11.8995 17.3683 11.5815 17.5 11.25 17.5ZM3.75 3.75V5.99375L8.75 10.9937V16.25H11.25V10.9937L16.25 5.99375V3.75H3.75Z',
      fill: '#68707A'
    })
  }));
};

var GrayDownload = function GrayDownload(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0,0,256,256',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      "fill-opacity": '0.52941',
      fill: '#7a7a7a',
      "fill-rule": 'nonzero',
      stroke: 'none',
      "stroke-width": '1',
      "stroke-linecap": 'butt',
      "stroke-linejoin": 'miter',
      "stroke-miterlimit": '10',
      "stroke-dasharray": '',
      "stroke-dashoffset": '0',
      "font-family": 'none',
      "font-weight": 'none',
      "font-size": 'none',
      "text-anchor": 'none',
      children: jsxRuntimeExports.jsxs("g", {
        transform: 'scale(10.66667,10.66667)',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M19.5,18v3h-15v-3h-1.5v3c0,0.3978 0.15804,0.7794 0.43934,1.0607c0.2813,0.2813 0.66284,0.4393 1.06066,0.4393h15c0.3978,0 0.7794,-0.158 1.0607,-0.4393c0.2813,-0.2813 0.4393,-0.6629 0.4393,-1.0607v-3z'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M19.5,10.5l-1.0575,-1.0575l-5.6925,5.685v-13.6275h-1.5v13.6275l-5.6925,-5.685l-1.0575,1.0575l7.5,7.5z'
        })]
      })
    })
  }));
};

var Person = function Person(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z',
      fill: '#06C68F'
    })
  }));
};

var HelpIcon = function HelpIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#06C68F' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-240q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-36-153h73q0-37 6.5-52.5T555-485q35-34 48.5-58t13.5-53q0-55-37.5-89.5T484-720q-51 0-88.5 27T343-620l65 27q9-28 28.5-43.5T482-652q28 0 46 16t18 42q0 23-15.5 41T496-518q-35 32-43.5 52.5T444-393Zm36 297q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z',
      fill: fill
    })
  }));
};

var PhoneIphoneIcon = function PhoneIphoneIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z',
      fill: '#06C68F'
    })
  }));
};

var PublicIcon = function PublicIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z',
      fill: '#06C68F'
    })
  }));
};

var PlayGrayButton = function PlayGrayButton(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0,0,256,256',
    children: jsxRuntimeExports.jsx("g", __assign({
      "fill-opacity": '0.52941',
      fill: '#7a7a7a',
      "fill-rule": 'nonzero',
      stroke: 'none',
      "stroke-width": '1',
      "stroke-linecap": 'butt',
      "stroke-linejoin": 'miter',
      "stroke-miterlimit": '10',
      "stroke-dasharray": '',
      "stroke-dashoffset": '0',
      "font-family": 'none',
      "font-weight": 'none',
      "font-size": 'none',
      "text-anchor": 'none',
      className: className,
      onClick: onClick
    }, props, {
      children: jsxRuntimeExports.jsx("g", {
        transform: 'translate(-8,-0.00053) scale(10.66667,10.66667)',
        children: jsxRuntimeExports.jsx("path", {
          d: 'M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z'
        })
      })
    }))
  });
};

var GrayPlayIcon = function GrayPlayIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: '24',
    height: '24',
    viewBox: '0 0 256 256',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      fillOpacity: '0.52941',
      fill: '#7a7a7a',
      fillRule: 'nonzero',
      stroke: 'none',
      strokeWidth: '1',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: '10',
      strokeDasharray: '',
      strokeDashoffset: '0',
      fontFamily: 'none',
      fontWeight: 'none',
      fontSize: 'none',
      textAnchor: 'none',
      style: {
        mixBlendMode: 'normal'
      },
      children: jsxRuntimeExports.jsx("g", {
        transform: 'translate(-8,-0.00053) scale(10.66667,10.66667)',
        children: jsxRuntimeExports.jsx("path", {
          d: 'M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z'
        })
      })
    })
  }));
};

var GridView = function GridView(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Grid',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M7.5 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V7.5C2.5 7.83152 2.6317 8.14946 2.86612 8.38388C3.10054 8.6183 3.41848 8.75 3.75 8.75H7.5C7.83152 8.75 8.14946 8.6183 8.38388 8.38388C8.6183 8.14946 8.75 7.83152 8.75 7.5V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5ZM7.5 7.5H3.75V3.75H7.5V7.5Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M16.25 2.5H12.5C12.1685 2.5 11.8505 2.6317 11.6161 2.86612C11.3817 3.10054 11.25 3.41848 11.25 3.75V7.5C11.25 7.83152 11.3817 8.14946 11.6161 8.38388C11.8505 8.6183 12.1685 8.75 12.5 8.75H16.25C16.5815 8.75 16.8995 8.6183 17.1339 8.38388C17.3683 8.14946 17.5 7.83152 17.5 7.5V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM16.25 7.5H12.5V3.75H16.25V7.5Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M7.5 11.25H3.75C3.41848 11.25 3.10054 11.3817 2.86612 11.6161C2.6317 11.8505 2.5 12.1685 2.5 12.5V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V12.5C8.75 12.1685 8.6183 11.8505 8.38388 11.6161C8.14946 11.3817 7.83152 11.25 7.5 11.25ZM7.5 16.25H3.75V12.5H7.5V16.25Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M16.25 11.25H12.5C12.1685 11.25 11.8505 11.3817 11.6161 11.6161C11.3817 11.8505 11.25 12.1685 11.25 12.5V16.25C11.25 16.5815 11.3817 16.8995 11.6161 17.1339C11.8505 17.3683 12.1685 17.5 12.5 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V12.5C17.5 12.1685 17.3683 11.8505 17.1339 11.6161C16.8995 11.3817 16.5815 11.25 16.25 11.25ZM16.25 16.25H12.5V12.5H16.25V16.25Z',
          fill: '#68707A'
        })]
      })
    })
  }));
};

var Group = function Group(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Group',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M22.8623 22.1382H21.414V19.9658C21.414 19.3897 21.1852 18.8371 20.7778 18.4297C20.3704 18.0223 19.8178 17.7934 19.2416 17.7934H16.3451C15.7689 17.7934 15.2164 18.0223 14.809 18.4297C14.4015 18.8371 14.1727 19.3897 14.1727 19.9658V22.1382H12.7244V19.9658C12.7244 19.0055 13.1059 18.0846 13.7849 17.4056C14.4639 16.7266 15.3848 16.3451 16.3451 16.3451H19.2416C20.2019 16.3451 21.1228 16.7266 21.8018 17.4056C22.4809 18.0846 22.8623 19.0055 22.8623 19.9658V22.1382Z',
          fill: '#0074D9'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M17.7934 9.10374C18.223 9.10374 18.643 9.23115 19.0003 9.46986C19.3575 9.70857 19.636 10.0479 19.8004 10.4448C19.9648 10.8418 20.0079 11.2786 19.924 11.7C19.8402 12.1214 19.6333 12.5085 19.3295 12.8123C19.0257 13.1161 18.6386 13.323 18.2172 13.4068C17.7958 13.4907 17.359 13.4476 16.962 13.2832C16.5651 13.1188 16.2258 12.8403 15.9871 12.4831C15.7484 12.1258 15.6209 11.7058 15.6209 11.2762C15.6209 10.7 15.8498 10.1474 16.2572 9.74003C16.6646 9.33262 17.2172 9.10374 17.7934 9.10374ZM17.7934 7.65547C17.0773 7.65547 16.3772 7.86782 15.7818 8.26567C15.1864 8.66351 14.7223 9.22899 14.4483 9.89058C14.1742 10.5522 14.1025 11.2802 14.2422 11.9825C14.3819 12.6849 14.7268 13.33 15.2331 13.8364C15.7395 14.3427 16.3846 14.6876 17.087 14.8273C17.7893 14.967 18.5173 14.8953 19.1789 14.6212C19.8405 14.3472 20.406 13.8831 20.8039 13.2877C21.2017 12.6923 21.414 11.9923 21.414 11.2762C21.414 10.3159 21.0326 9.39496 20.3536 8.71594C19.6746 8.03693 18.7536 7.65547 17.7934 7.65547Z',
          fill: '#0074D9'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M11.2761 16.3451H9.82784V14.1727C9.82784 13.5965 9.59896 13.044 9.19155 12.6366C8.78415 12.2292 8.23159 12.0003 7.65543 12.0003H4.75887C4.18271 12.0003 3.63015 12.2292 3.22274 12.6366C2.81534 13.044 2.58646 13.5965 2.58646 14.1727V16.3451H1.13818V14.1727C1.13818 13.2124 1.51965 12.2915 2.19866 11.6125C2.87767 10.9335 3.79861 10.552 4.75887 10.552H7.65543C8.61569 10.552 9.53663 10.9335 10.2156 11.6125C10.8947 12.2915 11.2761 13.2124 11.2761 14.1727V16.3451Z',
          fill: '#0074D9'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M6.20715 3.31064C6.63681 3.31064 7.05683 3.43805 7.41408 3.67676C7.77133 3.91547 8.04977 4.25475 8.2142 4.65171C8.37862 5.04867 8.42164 5.48547 8.33782 5.90687C8.254 6.32828 8.0471 6.71537 7.74328 7.01918C7.43946 7.323 7.05237 7.5299 6.63097 7.61373C6.20956 7.69755 5.77276 7.65453 5.3758 7.4901C4.97885 7.32568 4.63956 7.04724 4.40085 6.68998C4.16215 6.33273 4.03474 5.91272 4.03474 5.48306C4.03474 4.9069 4.26361 4.35433 4.67102 3.94693C5.07843 3.53952 5.63099 3.31064 6.20715 3.31064ZM6.20715 1.86237C5.49104 1.86237 4.79102 2.07472 4.1956 2.47256C3.60018 2.87041 3.13611 3.43588 2.86207 4.09748C2.58803 4.75907 2.51632 5.48707 2.65603 6.18942C2.79574 6.89176 3.14057 7.53691 3.64693 8.04327C4.1533 8.54963 4.79844 8.89447 5.50079 9.03417C6.20313 9.17388 6.93113 9.10218 7.59273 8.82814C8.25432 8.5541 8.8198 8.09002 9.21764 7.4946C9.61549 6.89918 9.82784 6.19916 9.82784 5.48306C9.82784 4.52279 9.44637 3.60185 8.76736 2.92284C8.08835 2.24383 7.16742 1.86237 6.20715 1.86237Z',
          fill: '#0074D9'
        })]
      })
    })
  }));
};

var GroupDefault = function GroupDefault(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M15.5 15H14.5V13.5C14.5 13.1022 14.342 12.7206 14.0607 12.4393C13.7794 12.158 13.3978 12 13 12H11C10.6022 12 10.2206 12.158 9.93934 12.4393C9.65804 12.7206 9.5 13.1022 9.5 13.5V15H8.5V13.5C8.5 12.837 8.76339 12.2011 9.23223 11.7322C9.70107 11.2634 10.337 11 11 11H13C13.663 11 14.2989 11.2634 14.7678 11.7322C15.2366 12.2011 15.5 12.837 15.5 13.5V15Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 6C12.2967 6 12.5867 6.08797 12.8334 6.2528C13.08 6.41762 13.2723 6.65189 13.3858 6.92597C13.4994 7.20006 13.5291 7.50166 13.4712 7.79264C13.4133 8.08361 13.2704 8.35088 13.0607 8.56066C12.8509 8.77044 12.5836 8.9133 12.2926 8.97118C12.0017 9.02906 11.7001 8.99935 11.426 8.88582C11.1519 8.77229 10.9176 8.58003 10.7528 8.33335C10.588 8.08668 10.5 7.79667 10.5 7.5C10.5 7.10218 10.658 6.72064 10.9393 6.43934C11.2206 6.15804 11.6022 6 12 6ZM12 5C11.5055 5 11.0222 5.14662 10.6111 5.42133C10.2 5.69603 9.87952 6.08648 9.6903 6.54329C9.50108 7.00011 9.45157 7.50277 9.54804 7.98773C9.6445 8.47268 9.8826 8.91814 10.2322 9.26777C10.5819 9.6174 11.0273 9.8555 11.5123 9.95196C11.9972 10.0484 12.4999 9.99892 12.9567 9.8097C13.4135 9.62048 13.804 9.30005 14.0787 8.88893C14.3534 8.4778 14.5 7.99445 14.5 7.5C14.5 6.83696 14.2366 6.20107 13.7678 5.73223C13.2989 5.26339 12.663 5 12 5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M7.5 11H6.5V9.5C6.5 9.10217 6.34196 8.72064 6.06066 8.43934C5.77936 8.15804 5.39782 8 5 8H3C2.60218 8 2.22064 8.15804 1.93934 8.43934C1.65804 8.72064 1.5 9.10217 1.5 9.5V11H0.5V9.5C0.5 8.83696 0.763392 8.20107 1.23223 7.73223C1.70107 7.26339 2.33696 7 3 7H5C5.66304 7 6.29893 7.26339 6.76777 7.73223C7.23661 8.20107 7.5 8.83696 7.5 9.5V11Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M4 2C4.29667 2 4.58668 2.08797 4.83336 2.2528C5.08003 2.41762 5.27229 2.65189 5.38582 2.92597C5.49935 3.20006 5.52906 3.50166 5.47118 3.79264C5.4133 4.08361 5.27044 4.35088 5.06066 4.56066C4.85088 4.77044 4.58361 4.9133 4.29264 4.97118C4.00166 5.02906 3.70006 4.99935 3.42597 4.88582C3.15189 4.77229 2.91762 4.58003 2.7528 4.33336C2.58797 4.08668 2.5 3.79667 2.5 3.5C2.5 3.10218 2.65804 2.72064 2.93934 2.43934C3.22064 2.15804 3.60218 2 4 2ZM4 1C3.50555 1 3.0222 1.14662 2.61107 1.42133C2.19995 1.69603 1.87952 2.08648 1.6903 2.54329C1.50108 3.00011 1.45157 3.50277 1.54804 3.98773C1.6445 4.47268 1.8826 4.91814 2.23223 5.26777C2.58186 5.6174 3.02732 5.8555 3.51227 5.95196C3.99723 6.04843 4.49989 5.99892 4.95671 5.8097C5.41352 5.62048 5.80397 5.30005 6.07867 4.88893C6.35338 4.4778 6.5 3.99445 6.5 3.5C6.5 2.83696 6.23661 2.20107 5.76777 1.73223C5.29893 1.26339 4.66304 1 4 1Z',
      fill: '#020210'
    })]
  }));
};

var Help = function Help(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M8 12.5C8.41422 12.5 8.75 12.1642 8.75 11.75C8.75 11.3358 8.41422 11 8 11C7.58579 11 7.25 11.3358 7.25 11.75C7.25 12.1642 7.58579 12.5 8 12.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M8.5 4H7.75C7.45434 3.99934 7.16147 4.05709 6.88819 4.16993C6.61491 4.28277 6.36661 4.44848 6.15754 4.65754C5.94848 4.8666 5.78277 5.1149 5.66993 5.38818C5.55709 5.66146 5.49934 5.95434 5.5 6.25V6.5H6.5V6.25C6.5 5.91848 6.6317 5.60054 6.86612 5.36612C7.10054 5.1317 7.41848 5 7.75 5H8.5C8.83152 5 9.14947 5.1317 9.38389 5.36612C9.61831 5.60054 9.75 5.91848 9.75 6.25C9.75 6.58152 9.61831 6.89946 9.38389 7.13388C9.14947 7.3683 8.83152 7.5 8.5 7.5H7.5V9.75H8.5V8.5C9.09674 8.5 9.66904 8.26295 10.091 7.84099C10.5129 7.41903 10.75 6.84674 10.75 6.25C10.75 5.65326 10.5129 5.08097 10.091 4.65901C9.66904 4.23705 9.09674 4 8.5 4Z',
      fill: '#68707A'
    })]
  }));
};

var HorizontalView = function HorizontalView(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Horizontal-view',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M17.5 18.75H2.5C2.16859 18.7497 1.85085 18.6178 1.6165 18.3835C1.38216 18.1492 1.25035 17.8314 1.25 17.5V12.5C1.25035 12.1686 1.38216 11.8508 1.6165 11.6165C1.85085 11.3822 2.16859 11.2503 2.5 11.25H17.5C17.8314 11.2503 18.1492 11.3822 18.3835 11.6165C18.6178 11.8508 18.7497 12.1686 18.75 12.5V17.5C18.7497 17.8314 18.6178 18.1492 18.3835 18.3835C18.1492 18.6178 17.8314 18.7497 17.5 18.75ZM2.5 12.5V17.5H17.5V12.5H2.5Z',
          fill: '#68707A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M17.5 8.75H2.5C2.16859 8.74965 1.85085 8.61785 1.6165 8.3835C1.38216 8.14915 1.25035 7.83141 1.25 7.5V2.5C1.25035 2.16859 1.38216 1.85085 1.6165 1.6165C1.85085 1.38216 2.16859 1.25035 2.5 1.25H17.5C17.8314 1.25035 18.1492 1.38216 18.3835 1.6165C18.6178 1.85085 18.7497 2.16859 18.75 2.5V7.5C18.7497 7.83141 18.6178 8.14915 18.3835 8.3835C18.1492 8.61785 17.8314 8.74965 17.5 8.75ZM2.5 2.5V7.5H17.5V2.5H2.5Z',
          fill: '#68707A'
        })]
      })
    })
  }));
};

var Information = function Information(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Information',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M10.625 13.75V8.75H8.125V10H9.375V13.75H7.5V15H12.5V13.75H10.625Z',
          fill: '#020210'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10 5C9.81458 5 9.63333 5.05499 9.47916 5.158C9.32499 5.26101 9.20482 5.40743 9.13387 5.57874C9.06291 5.75004 9.04434 5.93854 9.08052 6.1204C9.11669 6.30226 9.20598 6.46931 9.33709 6.60042C9.4682 6.73153 9.63525 6.82082 9.81711 6.85699C9.99896 6.89316 10.1875 6.8746 10.3588 6.80364C10.5301 6.73268 10.6765 6.61252 10.7795 6.45835C10.8825 6.30418 10.9375 6.12292 10.9375 5.9375C10.9375 5.68886 10.8387 5.45041 10.6629 5.27459C10.4871 5.09878 10.2486 5 10 5Z',
          fill: '#020210'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M10 18.75C8.26942 18.75 6.57769 18.2368 5.13876 17.2754C3.69983 16.3139 2.57832 14.9473 1.91606 13.3485C1.25379 11.7496 1.08051 9.9903 1.41813 8.29296C1.75575 6.59563 2.58911 5.03653 3.81282 3.81282C5.03653 2.58911 6.59563 1.75575 8.29296 1.41813C9.9903 1.08051 11.7496 1.25379 13.3485 1.91606C14.9473 2.57832 16.3139 3.69983 17.2754 5.13876C18.2368 6.57769 18.75 8.26942 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 2.5C8.51664 2.5 7.0666 2.93987 5.83323 3.76398C4.59986 4.58809 3.63856 5.75943 3.07091 7.12988C2.50325 8.50032 2.35473 10.0083 2.64411 11.4632C2.9335 12.918 3.64781 14.2544 4.6967 15.3033C5.7456 16.3522 7.08197 17.0665 8.53683 17.3559C9.99168 17.6453 11.4997 17.4968 12.8701 16.9291C14.2406 16.3614 15.4119 15.4002 16.236 14.1668C17.0601 12.9334 17.5 11.4834 17.5 10C17.5 8.01088 16.7098 6.10323 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5Z',
          fill: '#020210'
        })]
      })
    })
  }));
};

var Locked = function Locked(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Locked',
      children: jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M15 8.75H13.75V5C13.75 4.00544 13.3549 3.05161 12.6517 2.34835C11.9484 1.64509 10.9946 1.25 10 1.25C9.00544 1.25 8.05161 1.64509 7.34835 2.34835C6.64509 3.05161 6.25 4.00544 6.25 5V8.75H5C4.66848 8.75 4.35054 8.8817 4.11612 9.11612C3.8817 9.35054 3.75 9.66848 3.75 10V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75ZM7.5 5C7.5 4.33696 7.76339 3.70107 8.23223 3.23223C8.70107 2.76339 9.33696 2.5 10 2.5C10.663 2.5 11.2989 2.76339 11.7678 3.23223C12.2366 3.70107 12.5 4.33696 12.5 5V8.75H7.5V5ZM15 17.5H5V10H15V17.5Z',
        fill: '#68707A'
      })
    })
  }));
};

var Logout = function Logout(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M4.5 22.5H13.5C13.8977 22.4995 14.279 22.3414 14.5602 22.0602C14.8414 21.7789 14.9995 21.3977 15 21V18.75H13.5V21H4.5V3H13.5V5.25H15V3C14.9995 2.60232 14.8414 2.22105 14.5602 1.93984C14.279 1.65864 13.8977 1.50046 13.5 1.5H4.5C4.10232 1.50046 3.72105 1.65864 3.43984 1.93984C3.15864 2.22105 3.00046 2.60232 3 3V21C3.00046 21.3977 3.15864 21.7789 3.43984 22.0602C3.72105 22.3414 4.10232 22.4995 4.5 22.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15.4395 15.4395L18.129 12.75H7.5V11.25H18.129L15.4395 8.5605L16.5 7.5L21 12L16.5 16.5L15.4395 15.4395Z',
      fill: '#020210'
    })]
  }));
};

var MoreVertRoundedIcon = function MoreVertRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z',
      fill: '#020210'
    })]
  }));
};

var MyProfile = function MyProfile(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M12 6C11.2583 6 10.5333 6.21993 9.91662 6.63199C9.29993 7.04404 8.81928 7.62971 8.53546 8.31494C8.25163 9.00016 8.17736 9.75416 8.32206 10.4816C8.46675 11.209 8.82391 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92128 10.611C9.75098 10.1999 9.70642 9.7475 9.79324 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.5611 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2493 10.3465 14.0121 10.9184 13.5903 11.3402C13.1684 11.7621 12.5965 11.9993 12 12Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.4969 9.21619 21.3896 6.5473 19.4212 4.57884C17.4527 2.61039 14.7838 1.50314 12 1.5ZM7.5 19.7824V18.75C7.50066 18.1535 7.73792 17.5815 8.15974 17.1597C8.58155 16.7379 9.15347 16.5007 9.75 16.5H14.25C14.8465 16.5007 15.4185 16.7379 15.8403 17.1597C16.2621 17.5815 16.4993 18.1535 16.5 18.75V19.7824C15.1344 20.5798 13.5814 21 12 21C10.4186 21 8.86563 20.5798 7.5 19.7824ZM17.9944 18.6944C17.9795 17.7105 17.5786 16.772 16.8782 16.0809C16.1778 15.3899 15.2339 15.0017 14.25 15H9.75C8.76608 15.0017 7.8222 15.3899 7.1218 16.0809C6.42139 16.772 6.02054 17.7105 6.00563 18.6944C4.64555 17.4799 3.68643 15.881 3.25526 14.1093C2.82408 12.3377 2.9412 10.4769 3.59111 8.77324C4.24101 7.06963 5.39304 5.6036 6.89466 4.56927C8.39627 3.53495 10.1766 2.98112 12 2.98112C13.8234 2.98112 15.6037 3.53495 17.1054 4.56927C18.607 5.6036 19.759 7.06963 20.4089 8.77324C21.0588 10.4769 21.1759 12.3377 20.7448 14.1093C20.3136 15.881 19.3545 17.4799 17.9944 18.6944Z',
      fill: '#020210'
    })]
  }));
};

var NewFilter = function NewFilter(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'red',
    color: 'red',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M11.25 17.5H8.75C8.41848 17.5 8.10054 17.3683 7.86612 17.1339C7.6317 16.8995 7.5 16.5815 7.5 16.25V11.5063L2.86875 6.875C2.63401 6.64166 2.5014 6.32474 2.5 5.99375V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75V5.99375C17.4986 6.32474 17.366 6.64166 17.1313 6.875L12.5 11.5063V16.25C12.5 16.5815 12.3683 16.8995 12.1339 17.1339C11.8995 17.3683 11.5815 17.5 11.25 17.5ZM3.75 3.75V5.99375L8.75 10.9937V16.25H11.25V10.9937L16.25 5.99375V3.75H3.75Z',
      fill: 'red'
    })
  }));
};

var Notification = function Notification(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M21.5303 14.4697L19.5 12.4394V9.75C19.4976 7.89146 18.8061 6.09983 17.5593 4.72154C16.3126 3.34326 14.599 2.47622 12.75 2.2881V0.75H11.25V2.2881C9.40101 2.47622 7.68744 3.34326 6.44065 4.72154C5.19386 6.09983 4.50241 7.89146 4.5 9.75V12.4394L2.46968 14.4697C2.32904 14.6104 2.25002 14.8011 2.25 15V17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18H8.25V18.5826C8.23374 19.534 8.56913 20.458 9.19191 21.1775C9.81469 21.897 10.6811 22.3613 11.625 22.4816C12.1464 22.5334 12.6728 22.4754 13.1704 22.3115C13.668 22.1475 14.1258 21.8813 14.5143 21.5298C14.9029 21.1783 15.2135 20.7494 15.4263 20.2707C15.6391 19.7919 15.7494 19.2739 15.75 18.75V18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25V15C21.75 14.8011 21.671 14.6104 21.5303 14.4697ZM14.25 18.75C14.25 19.3467 14.0129 19.919 13.591 20.341C13.169 20.7629 12.5967 21 12 21C11.4033 21 10.831 20.7629 10.409 20.341C9.98705 19.919 9.75 19.3467 9.75 18.75V18H14.25V18.75ZM20.25 16.5H3.75V15.3106L5.78025 13.2802C5.92091 13.1396 5.99996 12.9489 6 12.75V9.75C6 8.1587 6.63214 6.63258 7.75736 5.50736C8.88258 4.38214 10.4087 3.75 12 3.75C13.5913 3.75 15.1174 4.38214 16.2426 5.50736C17.3679 6.63258 18 8.1587 18 9.75V12.75C18 12.9489 18.0791 13.1396 18.2197 13.2802L20.25 15.3106V16.5Z',
      fill: '#020210'
    })
  }));
};

var PlayButton = function PlayButton(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0,0,256,256',
    children: jsxRuntimeExports.jsx("g", __assign({
      "fill-opacity": '0.52941',
      fill: '#020210',
      "fill-rule": 'nonzero',
      stroke: 'none',
      "stroke-width": '1',
      "stroke-linecap": 'butt',
      "stroke-linejoin": 'miter',
      "stroke-miterlimit": '10',
      "stroke-dasharray": '',
      "stroke-dashoffset": '0',
      "font-family": 'none',
      "font-weight": 'none',
      "font-size": 'none',
      "text-anchor": 'none',
      className: className,
      onClick: onClick
    }, props, {
      children: jsxRuntimeExports.jsx("g", {
        transform: 'translate(-8,-0.00053) scale(10.66667,10.66667)',
        children: jsxRuntimeExports.jsx("path", {
          d: 'M5.25,21.0001c-0.19891,0 -0.38968,-0.0791 -0.53033,-0.2197c-0.14065,-0.1407 -0.21967,-0.3314 -0.21967,-0.5303v-16.50004c-0.00001,-0.13034 0.03395,-0.25843 0.09852,-0.37164c0.06458,-0.11322 0.15754,-0.20765 0.26973,-0.27399c0.11219,-0.06635 0.23973,-0.10231 0.37005,-0.10434c0.13032,-0.00203 0.25892,0.02993 0.37313,0.09274l14.99997,8.24997c0.1177,0.0647 0.2159,0.1599 0.2842,0.2755c0.0684,0.1156 0.1044,0.2474 0.1044,0.3817c0,0.1343 -0.036,0.2662 -0.1044,0.3818c-0.0683,0.1156 -0.1665,0.2107 -0.2842,0.2754l-14.99997,8.25c-0.11074,0.0609 -0.23506,0.0928 -0.36143,0.0929zM6,5.01823v13.96347l12.6936,-6.9816z'
        })
      })
    }))
  });
};

var PresentationScreen = function PresentationScreen(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '64',
    height: '64',
    viewBox: '0 0 64 64',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("rect", {
      width: '64',
      height: '64',
      fill: 'url(#pattern0)'
    }), jsxRuntimeExports.jsxs("defs", {
      children: [jsxRuntimeExports.jsx("pattern", {
        id: 'pattern0',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsxRuntimeExports.jsx("use", {
          xlinkHref: '#image0_25_133494',
          transform: 'scale(0.015625)'
        })
      }), jsxRuntimeExports.jsx("image", {
        id: 'image0_25_133494',
        width: '64',
        height: '64',
        xlinkHref: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVR4nO2Xv2rbQBzHT36B9DU69CkkU3xqIEQydLDnLgXrSsGjEvAQ+gImQzwXWhJIxkJrXbd26Bt0cwvt7mT7hgPLUW3JUkKgvvP3Cz9siztz36/u30eICg2+4MkbjRdJhrfqK4Y2lhm78TD8hD1xHyUZwkTjt9KAI/VLTSEbmR9M8TTRuN6CQT923agpnjV5++d5p9E34PIncGVpmbEbD7mfRONjkwBmeYe/c1ivP/NCABlmtQGowrRxRUVPDKBOijMAXAKKewC4CSqeAnBGPAY17wHgRUjzJghehTVZAGSBOimyAMgCiiwAsoAiC8AZkQU0WQBkAU0WAFlAkwVAFqiTIguALKDIAiALKLIAnBFZQJMFQBbQZAGQBTRZAGXXf68to14QRkNTvXcXyOv9Bzeq6Cn3aTwLITwRyG4/CGPsZMlunwGIxRLww/jE1POXr04PXo8+m8/8me1V5mm5BKj/p1ZbHo5Nme9il5SmaSvoxNlyM+rEmXkmdkSeL+Px6o7sy2jifAipefMyPqs+luIzZ0NI68w7HoK3Ou39TvTjbvrH311eDt6aeRlN2vvd4+XvMDoqa+NCCF6VMWO6GMCmtsJSeZsMlQRQ28cmeXVGKgJo1Ne+3V6u7+wbAmj8H1upYBWvKwa+KYDqELp9YVUAsvqt/duu3NhaCDYEIBZ43QA3H7vdg3QLxJKutCAxKy4AAAAASUVORK5CYII='
      })]
    })]
  }));
};

var Profile = function Profile(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    id: 'Profile_Picture',
    "data-name": 'Profile Picture',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: '156.001',
    height: '159',
    viewBox: '0 0 156.001 159',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsxs("defs", {
      children: [jsxRuntimeExports.jsx("style", {
        children: "\n            .cls-1, .cls-5, .cls-7 {\n              fill: none;\n            }\n            .cls-1, .cls-5 {\n              stroke: #06c68f;\n            }\n            .cls-1 {\n              stroke-width: 12px;\n            }\n            .cls-2 {\n              opacity: 0.7;\n            }\n            .cls-3 {\n              fill: #06c68f;\n            }\n            .cls-4 {\n              clip-path: url(#clip-path);\n            }\n            .cls-5 {\n              stroke-width: 5px;\n            }\n            .cls-6 {\n              stroke: none;\n            }\n          "
      }), jsxRuntimeExports.jsx("clipPath", {
        id: 'clip-path',
        children: jsxRuntimeExports.jsx("ellipse", {
          id: 'Ellipse_55',
          "data-name": 'Ellipse 55',
          className: 'cls-1',
          cx: '78',
          cy: '77.5',
          rx: '78',
          ry: '77.5',
          transform: 'translate(0.068 0.317)'
        })
      })]
    }), jsxRuntimeExports.jsxs("g", {
      id: 'Profile_Picture-2',
      "data-name": 'Profile Picture',
      className: 'cls-2',
      transform: 'translate(0.389 -0.645)',
      children: [jsxRuntimeExports.jsxs("g", {
        id: 'Group_411',
        "data-name": 'Group 411',
        transform: 'translate(-0.458 0.328)',
        children: [jsxRuntimeExports.jsx("ellipse", {
          id: 'Ellipse_53',
          "data-name": 'Ellipse 53',
          className: 'cls-3',
          cx: '22',
          cy: '23',
          rx: '22',
          ry: '23',
          transform: 'translate(56.068 38.317)'
        }), jsxRuntimeExports.jsx("g", {
          id: 'Mask_Group_9',
          "data-name": 'Mask Group 9',
          className: 'cls-4',
          children: jsxRuntimeExports.jsx("ellipse", {
            id: 'Ellipse_54',
            "data-name": 'Ellipse 54',
            className: 'cls-3',
            cx: '47.5',
            cy: '72',
            rx: '47.5',
            ry: '72',
            transform: 'translate(31.068 89.317)'
          })
        })]
      }), jsxRuntimeExports.jsxs("g", {
        id: 'Ellipse_56',
        "data-name": 'Ellipse 56',
        className: 'cls-5',
        transform: 'translate(-0.389 4.645)',
        children: [jsxRuntimeExports.jsx("ellipse", {
          className: 'cls-6',
          cx: '78',
          cy: '77.5',
          rx: '78',
          ry: '77.5'
        }), jsxRuntimeExports.jsx("ellipse", {
          className: 'cls-7',
          cx: '78',
          cy: '77.5',
          rx: '75.5',
          ry: '75'
        })]
      })]
    })]
  }));
};

var RedDeleteIcon = function RedDeleteIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: '20',
    height: '20',
    viewBox: '0 0 256 256',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      fill: '#fa5252',
      fillRule: 'nonzero',
      stroke: 'none',
      strokeWidth: '1',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: '10',
      fontFamily: 'none',
      fontWeight: 'none',
      fontSize: 'none',
      textAnchor: 'none',
      style: {
        mixBlendMode: 'normal'
      },
      children: jsxRuntimeExports.jsxs("g", {
        transform: 'scale(12.8,12.8)',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M8.75,7.5h-1.25v7.5h1.25z'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12.5,7.5h-1.25v7.5h1.25z'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M2.5,3.75v1.25h1.25v12.5c0,0.3315 0.1317,0.6495 0.36612,0.8839c0.23442,0.2344 0.55236,0.3661 0.88388,0.3661h10c0.3315,0 0.6495,-0.1317 0.8839,-0.3661c0.2344,-0.2344 0.3661,-0.5524 0.3661,-0.8839v-12.5h1.25v-1.25zM5,17.5v-12.5h10v12.5z'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12.5,1.25h-5v1.25h5z'
        })]
      })
    })
  }));
};

var RemoveAlt = function RemoveAlt(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Add--alt',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z',
          fill: '#EA382A'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M18 11.25H6V12.75H18V11.25Z',
          fill: '#EA382A'
        })]
      })
    })
  }));
};

var RemoveAltDisable = function RemoveAltDisable(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z',
      fill: '#FBD7D4'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M18 11.25H6V12.75H18V11.25Z',
      fill: '#FBD7D4'
    })]
  }));
};

var RemoveFilter = function RemoveFilter(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M15 5.707L14.293 5L12 7.293L9.707 5L9 5.707L11.293 8L9 10.2925L9.7075 11L12 8.707L14.2935 11L15 10.2935L12.707 8L15 5.707Z',
      fill: '#020210'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M2 2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V4.58545C0.999989 4.7168 1.02585 4.84687 1.07612 4.96822C1.12638 5.08957 1.20006 5.19983 1.29295 5.2927L5 9V13C5 13.2652 5.10536 13.5196 5.29289 13.7071C5.48043 13.8946 5.73478 14 6 14H8C8.26522 14 8.51957 13.8946 8.70711 13.7071C8.89464 13.5196 9 13.2652 9 13V12H8V13H6V8.58545L2 4.58545V3H12V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H2Z',
      fill: '#020210'
    })]
  }));
};

var Reset = function Reset(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M13.5 21C15.28 21 17.0201 20.4722 18.5001 19.4832C19.9802 18.4943 21.1337 17.0887 21.8149 15.4442C22.4961 13.7996 22.6743 11.99 22.3271 10.2442C21.9798 8.49836 21.1226 6.89472 19.864 5.63604C18.6053 4.37737 17.0016 3.5202 15.2558 3.17294C13.51 2.82567 11.7004 3.0039 10.0559 3.68509C8.41131 4.36628 7.00571 5.51983 6.01677 6.99987C5.02784 8.47991 4.5 10.22 4.5 12V16.65L1.8 13.95L0.75 15L5.25 19.5L9.75 15L8.7 13.95L6 16.65V12C6 10.5166 6.43987 9.0666 7.26398 7.83323C8.08809 6.59986 9.25943 5.63856 10.6299 5.07091C12.0003 4.50325 13.5083 4.35473 14.9632 4.64411C16.418 4.9335 17.7544 5.64781 18.8033 6.6967C19.8522 7.7456 20.5665 9.08197 20.8559 10.5368C21.1453 11.9917 20.9968 13.4997 20.4291 14.8701C19.8614 16.2406 18.9001 17.4119 17.6668 18.236C16.4334 19.0601 14.9834 19.5 13.5 19.5V21Z',
      fill: '#020210'
    })
  }));
};

var Search = function Search(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M18.1249 17.2399L13.4048 12.5198C14.539 11.1582 15.1046 9.41166 14.9839 7.64363C14.8632 5.8756 14.0655 4.22217 12.7568 3.02729C11.4481 1.83241 9.7291 1.18808 7.95741 1.22834C6.18572 1.2686 4.49776 1.99035 3.24467 3.24345C1.99157 4.49654 1.26982 6.1845 1.22956 7.95619C1.1893 9.72787 1.83363 11.4469 3.02851 12.7556C4.22339 14.0643 5.87682 14.862 7.64485 14.9827C9.41288 15.1034 11.1594 14.5378 12.521 13.4036L17.2411 18.1237L18.1249 17.2399ZM2.4999 8.12368C2.4999 7.01116 2.8298 5.92363 3.44789 4.9986C4.06597 4.07357 4.94448 3.3526 5.97231 2.92686C7.00014 2.50112 8.13114 2.38972 9.22229 2.60677C10.3134 2.82381 11.3157 3.35954 12.1024 4.14621C12.8891 4.93288 13.4248 5.93516 13.6418 7.0263C13.8589 8.11744 13.7475 9.24844 13.3217 10.2763C12.896 11.3041 12.175 12.1826 11.25 12.8007C10.325 13.4188 9.23742 13.7487 8.1249 13.7487C6.63357 13.747 5.20379 13.1539 4.14926 12.0993C3.09472 11.0448 2.50156 9.61502 2.4999 8.12368Z',
      fill: '#68707A'
    })
  }));
};

var SearchRounded = function SearchRounded(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M18.125 17.2418L13.4049 12.5218C14.5391 11.1601 15.1047 9.41361 14.984 7.64559C14.8633 5.87756 14.0656 4.22412 12.7569 3.02924C11.4482 1.83436 9.72919 1.19003 7.95751 1.23029C6.18582 1.27055 4.49786 1.9923 3.24477 3.2454C1.99167 4.49849 1.26992 6.18646 1.22966 7.95814C1.1894 9.72983 1.83373 11.4488 3.02861 12.7576C4.22349 14.0663 5.87692 14.864 7.64495 14.9847C9.41298 15.1054 11.1595 14.5398 12.5211 13.4056L17.2412 18.1256L18.125 17.2418ZM2.5 8.12564C2.5 7.01312 2.8299 5.92558 3.44799 5.00055C4.06607 4.07553 4.94457 3.35456 5.97241 2.92881C7.00024 2.50307 8.13124 2.39168 9.22239 2.60872C10.3135 2.82576 11.3158 3.36149 12.1025 4.14816C12.8891 4.93483 13.4249 5.93711 13.6419 7.02825C13.859 8.1194 13.7476 9.2504 13.3218 10.2782C12.8961 11.3061 12.1751 12.1846 11.2501 12.8027C10.3251 13.4207 9.23752 13.7506 8.125 13.7506C6.63367 13.749 5.20389 13.1558 4.14935 12.1013C3.09482 11.0468 2.50166 9.61697 2.5 8.12564Z',
      fill: '#68707A'
    })
  }));
};

var SendAlt = function SendAlt(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M20.7825 3.21745C20.6813 3.1167 20.5534 3.04695 20.4139 3.01639C20.2744 2.98584 20.1291 2.99574 19.995 3.04495L3.495 9.04495C3.3527 9.09892 3.23019 9.19491 3.14374 9.32016C3.05729 9.44542 3.01099 9.59401 3.01099 9.7462C3.01099 9.89839 3.05729 10.047 3.14374 10.1722C3.23019 10.2975 3.3527 10.3935 3.495 10.4474L10.695 13.3274L13.575 20.5275C13.6291 20.6635 13.7219 20.7807 13.8418 20.8647C13.9618 20.9487 14.1037 20.9957 14.25 20.9999C14.4016 20.9968 14.5486 20.9479 14.6718 20.8595C14.795 20.7711 14.8885 20.6475 14.94 20.5049L20.94 4.00495C20.9911 3.87226 21.0034 3.72777 20.9755 3.58834C20.9477 3.44891 20.8807 3.32028 20.7825 3.21745ZM14.25 18.15L12.1575 12.9L15.75 9.30745L14.6925 8.24995L11.07 11.8724L5.85 9.74995L18.9975 5.00245L14.25 18.15Z',
      fill: '#020210'
    })
  }));
};

var DeleteIcon = function DeleteIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M8.75 7.5H7.5V15H8.75V7.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12.5 7.5H11.25V15H12.5V7.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12.5 1.25H7.5V2.5H12.5V1.25Z',
      fill: '#68707A'
    })]
  }));
};

var Unlocked = function Unlocked(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M18 10.5H9V6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H16.5C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V10.5H6C5.60218 10.5 5.22064 10.658 4.93934 10.9393C4.65804 11.2206 4.5 11.6022 4.5 12V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V12C19.5 11.6022 19.342 11.2206 19.0607 10.9393C18.7794 10.658 18.3978 10.5 18 10.5ZM18 21H6V12H18V21Z',
      fill: '#020210'
    })
  }));
};

var SwitchCompany = function SwitchCompany(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M8.5575 19.9425L5.8725 17.25H21V15.75H5.8725L8.5575 13.0575L7.5 12L3 16.5L7.5 21L8.5575 19.9425Z',
      fill: '#08C694'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M21 7.5L16.5 3L15.4425 4.0575L18.1275 6.75H3V8.25H18.1275L15.4425 10.9425L16.5 12L21 7.5Z',
      fill: '#08C694'
    })]
  }));
};

var TrashCan = function TrashCan(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Trash-can',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M8.75 7.5H7.5V15H8.75V7.5Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12.5 7.5H11.25V15H12.5V7.5Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z',
          fill: '#B3B3B8'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M12.5 1.25H7.5V2.5H12.5V1.25Z',
          fill: '#B3B3B8'
        })]
      })
    })
  }));
};

var TrashCanAction = function TrashCanAction(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '40',
    height: '40',
    viewBox: '0 0 40 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M18.75 17.5H17.5V25H18.75V17.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M22.5 17.5H21.25V25H22.5V17.5Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12.5 13.75V15H13.75V27.5C13.75 27.8315 13.8817 28.1495 14.1161 28.3839C14.3505 28.6183 14.6685 28.75 15 28.75H25C25.3315 28.75 25.6495 28.6183 25.8839 28.3839C26.1183 28.1495 26.25 27.8315 26.25 27.5V15H27.5V13.75H12.5ZM15 27.5V15H25V27.5H15Z',
      fill: '#68707A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M22.5 11.25H17.5V12.5H22.5V11.25Z',
      fill: '#68707A'
    })]
  }));
};

var TrashCanRed = function TrashCanRed(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M10.5 9H9V18H10.5V9Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 9H13.5V18H15V9Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z',
      fill: '#EA382A'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M15 1.5H9V3H15V1.5Z',
      fill: '#EA382A'
    })]
  }));
};

var UnfillPlay = function UnfillPlay(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'Play',
      children: jsxRuntimeExports.jsx("path", {
        id: 'Vector',
        d: 'M3.5 14C3.36739 14 3.24021 13.9474 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.50004C2.99999 2.41315 3.02263 2.32775 3.06568 2.25228C3.10873 2.1768 3.17071 2.11384 3.2455 2.06962C3.32029 2.02539 3.40532 2.00142 3.4922 2.00006C3.57908 1.99871 3.66481 2.02001 3.74095 2.06189L13.7409 7.56189C13.8194 7.60503 13.8848 7.66845 13.9304 7.74552C13.976 7.82259 14 7.91048 14 8.00001C14 8.08955 13.976 8.17744 13.9304 8.25451C13.8848 8.33158 13.8194 8.39499 13.7409 8.43814L3.74095 13.9381C3.66713 13.9787 3.58425 14 3.5 14ZM4 3.34549V12.6544L12.4624 8.00004L4 3.34549Z',
        fill: '#68707A'
      })
    })
  }));
};

var Unlock = function Unlock(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M18 10.5H9V6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H16.5C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V10.5H6C5.60218 10.5 5.22064 10.658 4.93934 10.9393C4.65804 11.2206 4.5 11.6022 4.5 12V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V12C19.5 11.6022 19.342 11.2206 19.0607 10.9393C18.7794 10.658 18.3978 10.5 18 10.5ZM18 21H6V12H18V21Z',
      fill: '#020210'
    })
  }));
};

var UserActivity = function UserActivity(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("g", {
      id: 'User--activity',
      children: jsxRuntimeExports.jsxs("g", {
        id: 'Vector',
        children: [jsxRuntimeExports.jsx("path", {
          d: 'M15.625 14.375H15.6116C15.4781 14.3719 15.3491 14.3263 15.2434 14.2447C15.1377 14.1631 15.0608 14.0499 15.0241 13.9215L13.0444 6.99375L11.8353 10.2192C11.7906 10.3384 11.7107 10.4411 11.6061 10.5136C11.5015 10.5861 11.3773 10.625 11.25 10.625H8.75V9.375H10.8166L12.5397 4.78056C12.5859 4.65745 12.6698 4.55204 12.7794 4.47935C12.889 4.40665 13.0187 4.37036 13.1501 4.37563C13.2816 4.3809 13.408 4.42748 13.5114 4.50873C13.6148 4.58997 13.69 4.70176 13.7262 4.82819L15.6707 11.6358L16.9074 7.92725C16.9488 7.80281 17.0283 7.69457 17.1347 7.61788C17.241 7.54119 17.3689 7.49994 17.5 7.5H20V8.75H17.9504L16.2176 13.9478C16.1763 14.0722 16.0968 14.1805 15.9904 14.2572C15.884 14.3339 15.7561 14.3751 15.625 14.375Z',
          fill: '#020210'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M9.375 18.75H8.125V14.375C8.12445 13.8779 7.92673 13.4013 7.57522 13.0498C7.22371 12.6983 6.74711 12.5005 6.25 12.5H3.75C3.25289 12.5005 2.77629 12.6983 2.42478 13.0498C2.07327 13.4013 1.87555 13.8779 1.875 14.375V18.75H0.625V14.375C0.625976 13.5465 0.955529 12.7522 1.54137 12.1664C2.12721 11.5805 2.9215 11.251 3.75 11.25H6.25C7.0785 11.251 7.87279 11.5805 8.45863 12.1664C9.04447 12.7522 9.37402 13.5465 9.375 14.375V18.75Z',
          fill: '#020210'
        }), jsxRuntimeExports.jsx("path", {
          d: 'M5 5C5.37084 5 5.73335 5.10997 6.04169 5.31599C6.35004 5.52202 6.59036 5.81486 6.73227 6.15747C6.87419 6.50008 6.91132 6.87708 6.83897 7.24079C6.76663 7.60451 6.58805 7.9386 6.32583 8.20083C6.0636 8.46305 5.72951 8.64163 5.36579 8.71397C5.00208 8.78632 4.62508 8.74919 4.28247 8.60727C3.93986 8.46536 3.64702 8.22504 3.44099 7.91669C3.23497 7.60835 3.125 7.24584 3.125 6.875C3.125 6.37772 3.32254 5.90081 3.67417 5.54917C4.02581 5.19754 4.50272 5 5 5ZM5 3.75C4.38193 3.75 3.77775 3.93328 3.26384 4.27666C2.74994 4.62004 2.3494 5.1081 2.11288 5.67911C1.87635 6.25013 1.81447 6.87847 1.93505 7.48466C2.05562 8.09085 2.35325 8.64767 2.79029 9.08471C3.22733 9.52175 3.78415 9.81938 4.39034 9.93995C4.99653 10.0605 5.62487 9.99865 6.19589 9.76212C6.7669 9.5256 7.25496 9.12506 7.59834 8.61116C7.94172 8.09725 8.125 7.49307 8.125 6.875C8.125 6.0462 7.79576 5.25134 7.20971 4.66529C6.62366 4.07924 5.8288 3.75 5 3.75Z',
          fill: '#020210'
        })]
      })
    })
  }));
};

var UserSpeaker = function UserSpeaker(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M21.7143 14.1727L20.4726 12.931C20.6139 12.641 20.6882 12.3229 20.6899 12.0003C20.6899 11.5706 20.5625 11.1506 20.3238 10.7934C20.0851 10.4361 19.7458 10.1577 19.3488 9.99325C18.9519 9.82882 18.5151 9.7858 18.0937 9.86963C17.6723 9.95345 17.2852 10.1603 16.9813 10.4642C16.6775 10.768 16.4706 11.1551 16.3868 11.5765C16.303 11.9979 16.346 12.4347 16.5104 12.8316C16.6749 13.2286 16.9533 13.5679 17.3105 13.8066C17.6678 14.0453 18.0878 14.1727 18.5175 14.1727C18.8404 14.1711 19.1587 14.0969 19.449 13.9555L20.6899 15.1967V20.69H16.3451V18.5175C16.3436 17.1736 15.809 15.8852 14.8587 14.9349C13.9085 13.9846 12.62 13.4501 11.2761 13.4486H6.93127C5.58737 13.4501 4.29895 13.9846 3.34866 14.9349C2.39838 15.8852 1.86384 17.1736 1.8623 18.5175V22.1382H22.1382V15.1967C22.1387 15.0065 22.1015 14.818 22.0287 14.6423C21.9559 14.4665 21.8491 14.3069 21.7143 14.1727ZM3.31058 18.5175C3.31173 17.5576 3.69356 16.6374 4.37233 15.9586C5.05109 15.2798 5.97136 14.898 6.93127 14.8968H11.2761C12.236 14.898 13.1563 15.2798 13.8351 15.9586C14.5138 16.6373 14.8957 17.5576 14.8968 18.5175V20.69H3.31058V18.5175Z',
      fill: '#20A8C6'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M9.10368 3.31064C9.81979 3.31064 10.5198 3.52299 11.1152 3.92084C11.7107 4.31868 12.1747 4.88416 12.4488 5.54575C12.7228 6.20735 12.7945 6.93535 12.6548 7.63769C12.5151 8.34004 12.1703 8.98518 11.6639 9.49155C11.1575 9.99791 10.5124 10.3427 9.81005 10.4825C9.1077 10.6222 8.3797 10.5505 7.71811 10.2764C7.05651 10.0024 6.49104 9.5383 6.09319 8.94288C5.69534 8.34746 5.48299 7.64744 5.48299 6.93133C5.48299 5.97106 5.86446 5.05013 6.54347 4.37112C7.22248 3.69211 8.14342 3.31064 9.10368 3.31064ZM9.10368 1.86237C8.10114 1.86237 7.1211 2.15966 6.28752 2.71664C5.45393 3.27363 4.80423 4.06529 4.42057 4.99152C4.03691 5.91775 3.93653 6.93695 4.13212 7.92024C4.3277 8.90352 4.81048 9.80672 5.51938 10.5156C6.22829 11.2245 7.13149 11.7073 8.11478 11.9029C9.09806 12.0985 10.1173 11.9981 11.0435 11.6144C11.9697 11.2308 12.7614 10.5811 13.3184 9.7475C13.8754 8.91391 14.1726 7.93388 14.1726 6.93133C14.1726 5.58696 13.6386 4.29765 12.688 3.34703C11.7374 2.39642 10.4481 1.86237 9.10368 1.86237Z',
      fill: '#20A8C6'
    })]
  }));
};

var WhiteAiAssistant = function WhiteAiAssistant(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    props = __rest(_a, ["className", "onClick"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M16.875 15C16.5965 15.0014 16.3219 15.0657 16.0716 15.188L13.3838 12.5H11.25V13.75H12.8662L15.1878 16.0717C15.0657 16.322 15.0015 16.5965 15 16.875C15 17.2458 15.11 17.6084 15.316 17.9167C15.522 18.225 15.8149 18.4654 16.1575 18.6073C16.5001 18.7492 16.8771 18.7863 17.2408 18.714C17.6045 18.6416 17.9386 18.463 18.2008 18.2008C18.463 17.9386 18.6416 17.6045 18.714 17.2408C18.7863 16.8771 18.7492 16.5001 18.6073 16.1575C18.4654 15.8149 18.225 15.522 17.9167 15.316C17.6084 15.11 17.2458 15 16.875 15ZM16.875 17.5C16.7514 17.5 16.6305 17.4633 16.5278 17.3947C16.425 17.326 16.3449 17.2284 16.2976 17.1142C16.2503 17 16.2379 16.8743 16.262 16.7531C16.2861 16.6318 16.3456 16.5205 16.4331 16.4331C16.5205 16.3456 16.6318 16.2861 16.7531 16.262C16.8743 16.2379 17 16.2503 17.1142 16.2976C17.2284 16.3449 17.326 16.425 17.3947 16.5278C17.4633 16.6305 17.5 16.7514 17.5 16.875C17.4999 17.0407 17.434 17.1996 17.3168 17.3168C17.1996 17.434 17.0407 17.4998 16.875 17.5Z',
      fill: 'white'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16.875 8.125C16.4885 8.12617 16.1118 8.24695 15.7968 8.47077C15.4817 8.69458 15.2436 9.01045 15.1152 9.375H11.25V10.625H15.1152C15.2304 10.9482 15.4321 11.2335 15.6985 11.4497C15.9648 11.666 16.2855 11.8049 16.6254 11.8512C16.9653 11.8976 17.3115 11.8496 17.626 11.7125C17.9405 11.5755 18.2113 11.3546 18.4088 11.0741C18.6063 10.7935 18.7228 10.4641 18.7458 10.1218C18.7687 9.77946 18.6971 9.43743 18.5388 9.13306C18.3805 8.82868 18.1416 8.57367 17.8481 8.39589C17.5547 8.21811 17.2181 8.1244 16.875 8.125ZM16.875 10.625C16.7514 10.625 16.6305 10.5883 16.5278 10.5197C16.425 10.451 16.3449 10.3534 16.2976 10.2392C16.2503 10.125 16.2379 9.99931 16.262 9.87807C16.2861 9.75683 16.3456 9.64547 16.4331 9.55806C16.5205 9.47065 16.6318 9.41112 16.7531 9.38701C16.8743 9.36289 17 9.37527 17.1142 9.42257C17.2284 9.46988 17.326 9.54999 17.3947 9.65277C17.4633 9.75555 17.5 9.87639 17.5 10C17.4999 10.1657 17.434 10.3246 17.3168 10.4418C17.1996 10.559 17.0407 10.6249 16.875 10.625Z',
      fill: 'white'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16.875 1.25C16.3779 1.25055 15.9013 1.44827 15.5498 1.79978C15.1983 2.15129 15.0005 2.62789 15 3.125C15.0021 3.42442 15.0768 3.71885 15.2176 3.98313L12.8723 6.25H11.25V7.5H13.3777L16.127 4.84225C16.3824 4.95358 16.6594 5.00656 16.9379 4.99735C17.2163 4.98813 17.4892 4.91695 17.7367 4.78898C17.9842 4.66101 18.2001 4.47947 18.3685 4.25758C18.537 4.03568 18.6539 3.77901 18.7107 3.50625C18.7675 3.23348 18.7628 2.95149 18.6969 2.68078C18.631 2.41008 18.5055 2.15748 18.3297 1.94136C18.1538 1.72524 17.932 1.55105 17.6804 1.43145C17.4288 1.31185 17.1536 1.24987 16.875 1.25ZM16.875 3.75C16.7514 3.75 16.6305 3.71334 16.5278 3.64467C16.425 3.57599 16.3449 3.47838 16.2976 3.36418C16.2503 3.24997 16.2379 3.12431 16.262 3.00307C16.2861 2.88183 16.3456 2.77047 16.4331 2.68306C16.5205 2.59565 16.6318 2.53612 16.7531 2.51201C16.8743 2.48789 17 2.50027 17.1142 2.54758C17.2284 2.59488 17.326 2.67499 17.3947 2.77777C17.4633 2.88055 17.5 3.00139 17.5 3.125C17.4999 3.29071 17.434 3.4496 17.3168 3.56678C17.1996 3.68395 17.0407 3.74985 16.875 3.75Z',
      fill: 'white'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M11.25 3.75H12.5V2.5H11.25C10.8938 2.5012 10.542 2.57896 10.2185 2.72802C9.89502 2.87708 9.60735 3.09395 9.375 3.36394C9.14265 3.09395 8.85498 2.87708 8.53147 2.72802C8.20797 2.57896 7.85619 2.5012 7.5 2.5H6.875C5.38367 2.50165 3.95389 3.09482 2.89935 4.14935C1.84482 5.20389 1.25165 6.63366 1.25 8.125V11.875C1.25165 13.3663 1.84482 14.7961 2.89935 15.8506C3.95389 16.9052 5.38367 17.4983 6.875 17.5H7.5C7.85619 17.4988 8.20797 17.421 8.53147 17.272C8.85498 17.1229 9.14265 16.906 9.375 16.6361C9.60735 16.906 9.89502 17.1229 10.2185 17.272C10.542 17.421 10.8938 17.4988 11.25 17.5H12.5V16.25H11.25C10.9186 16.2496 10.6009 16.1178 10.3665 15.8835C10.1322 15.6491 10.0004 15.3314 10 15V5C10.0004 4.6686 10.1322 4.35087 10.3665 4.11654C10.6009 3.8822 10.9186 3.75038 11.25 3.75ZM7.5 16.25H6.875C5.82402 16.2482 4.80877 15.8683 4.0147 15.1798C3.22063 14.4913 2.70074 13.5401 2.55 12.5H3.75V11.25H2.5V8.75H4.375C4.87211 8.74945 5.34871 8.55173 5.70022 8.20022C6.05173 7.84871 6.24945 7.37211 6.25 6.875V5.625H5V6.875C4.99985 7.04071 4.93396 7.1996 4.81678 7.31678C4.6996 7.43395 4.54071 7.49985 4.375 7.5H2.55C2.70074 6.45988 3.22063 5.5087 4.0147 4.8202C4.80877 4.1317 5.82402 3.75184 6.875 3.75H7.5C7.8314 3.75038 8.14913 3.8822 8.38346 4.11654C8.6178 4.35087 8.74962 4.6686 8.75 5V7.5H7.5V8.75H8.75V11.25H7.5C7.00289 11.2505 6.52629 11.4483 6.17478 11.7998C5.82327 12.1513 5.62555 12.6279 5.625 13.125V14.375H6.875V13.125C6.87515 12.9593 6.94104 12.8004 7.05822 12.6832C7.1754 12.566 7.33429 12.5001 7.5 12.5H8.75V15C8.74962 15.3314 8.6178 15.6491 8.38346 15.8835C8.14913 16.1178 7.8314 16.2496 7.5 16.25Z',
      fill: 'white'
    })]
  }));
};

var ArchiveIcon = function ArchiveIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-240l160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z',
      fill: fill
    })
  }));
};

var BackspaceRoundedIcon = function BackspaceRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M456-320l104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z',
      fill: fill
    })
  }));
};

var BackupIcon = function BackupIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z',
      fill: fill
    })
  }));
};

var CheckCircleOutlineRoundedIcon = function CheckCircleOutlineRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M424-296l282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z',
      fill: fill
    })
  }));
};

var ClosedCaptionIcon = function ClosedCaptionIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Zm0-80h560v-480H200v480Zm80-120h120q17 0 28.5-11.5T440-400v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h120q17 0 28.5-11.5T720-400v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360ZM200-240v-480 480Z',
      fill: fill
    })
  }));
};

var CloudDownloadIcon = function CloudDownloadIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z',
      fill: fill
    })
  }));
};

var ContactSupportOutlinedIcon = function ContactSupportOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z'
    })]
  }));
};

var ErrorOutlineRoundedIcon = function ErrorOutlineRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z',
      fill: fill
    })
  }));
};

var FileCopyIcon = function FileCopyIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#06C68F' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200ZM560-640v-200H320v560h440v-360H560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-800v200-200 560-560Z',
      fill: fill
    })
  }));
};

var HeadsetIcon = function HeadsetIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? 'secondary' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z',
      fill: fill
    })
  }));
};

var LockIcon = function LockIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z',
      fill: fill
    })
  }));
};

var NotificationsOutlined = function NotificationsOutlined(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z',
      fill: fill
    })
  }));
};

var PlayCircleOutlineIcon = function PlayCircleOutlineIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z',
      fill: fill
    })
  }));
};

var PlaylistPlayIcon = function PlaylistPlayIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z',
      fill: fill
    })
  }));
};

var SchoolOutlinedIcon = function SchoolOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z',
      fill: fill
    })
  }));
};

var SettingsOutlinedIcon = function SettingsOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
    })]
  }));
};

var Timeline = function Timeline(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z',
      fill: fill
    })
  }));
};

var TrendingUpOutlinedIcon = function TrendingUpOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M136-240l-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z',
      fill: fill
    })
  }));
};

var Visibility = function Visibility(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z',
      fill: fill
    })
  }));
};

var VisibilityOff = function VisibilityOff(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M644-428l-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z',
      fill: fill
    })
  }));
};

var DeleteForeverRoundedIcon = function DeleteForeverRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M376-300l104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z',
      fill: fill
    })
  }));
};

var FeaturedPlayListIcon = function FeaturedPlayListIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M240-440h360v-80H240v80Zm0-120h360v-80H240v80Zm-80 400q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z',
      fill: fill
    })
  }));
};

var FiberManualRecordIcon = function FiberManualRecordIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#06C68F' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M24 24H0V0h24v24z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("circle", {
      cx: '12',
      cy: '12',
      r: '8',
      fill: fill
    })]
  }));
};

var GroupOutlined = function GroupOutlined(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z',
      fill: fill
    })
  }));
};

var GroupsOutlined = function GroupsOutlined(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z',
      fill: fill
    })
  }));
};

var HourglassEmptyIcon = function HourglassEmptyIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z',
      fill: fill
    })
  }));
};

var ImageIcon = function ImageIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z',
      fill: fill
    })
  }));
};

var MoreHorizIcon = function MoreHorizIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z',
      fill: fill
    })
  }));
};

var PermMediaIcon = function PermMediaIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M360-440h400L622-620l-92 120-62-80-108 140ZM120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z',
      fill: fill
    })
  }));
};

var PlaylistAddIcon = function PlaylistAddIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M680-40v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v353q-18-11-38-18t-42-11v-324H200v560h280q0 21 3 41t10 39H200Zm120-160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80Zm0 320h54q8-23 20-43t28-37H440v80Z',
      fill: fill
    })
  }));
};

var RecordVoiceOverOutlined = function RecordVoiceOverOutlined(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'm798-322-62-62q44-41 69-97t25-119q0-63-25-118t-69-96l62-64q56 53 89 125t33 153q0 81-33 153t-89 125ZM670-450l-64-64q18-17 29-38.5t11-47.5q0-26-11-47.5T606-686l64-64q32 29 50 67.5t18 82.5q0 44-18 82.5T670-450Zm-310 10q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H40Zm80-80h480v-32q0-11-5.5-20T580-266q-36-18-92.5-36T360-320q-71 0-127.5 18T140-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0-80Zm0 400Z',
      fill: fill
    })
  }));
};

var Send = function Send(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z',
      fill: fill
    })
  }));
};

var ViewCompactIcon = function ViewCompactIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M80-170v-620h800v620H80Zm80-440h100v-100H160v100Zm180 0h100v-100H340v100Zm180 0h100v-100H520v100Zm180 0h100v-100H700v100Zm0 180h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-80-100H160v100h100v-100Zm440 280h100v-100H700v100Zm-180 0h100v-100H520v100Zm-180 0h100v-100H340v100Zm-180 0h100v-100H160v100Z',
      fill: fill
    })
  }));
};

var ViewListIcon = function ViewListIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z',
      fill: fill
    })
  }));
};

var WorkOutlineOutlinedIcon = function WorkOutlineOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z',
      fill: fill
    })
  }));
};

var ZoomInIcon = function ZoomInIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsx("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 -960 960 960',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: jsxRuntimeExports.jsx("path", {
      d: 'M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-40-60v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z',
      fill: fill
    })
  }));
};

var AddCircleIcon = function AddCircleIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
      fill: fill
    })]
  }));
};

var CancelIcon = function CancelIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
      fill: fill
    })]
  }));
};

var Check = function Check(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
      fill: fill
    })]
  }));
};

var CheckBoxIcon = function CheckBoxIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z',
      fill: fill
    })]
  }));
};

var CheckCircleIcon = function CheckCircleIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
      fill: fill
    })]
  }));
};

var CheckCircleOutlineOutlinedIcon = function CheckCircleOutlineOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
      fill: fill
    })]
  }));
};

var DragIndicatorIcon = function DragIndicatorIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      fill: fill
    })]
  }));
};

var EditIcon = function EditIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z',
      fill: fill
    })]
  }));
};

var ErrorOutlineIcon = function ErrorOutlineIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
      fill: fill
    })]
  }));
};

var ExpandMoreIcon = function ExpandMoreIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M24 24H0V0h24v24z',
      fill: 'none',
      opacity: '.87'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z',
      fill: fill
    })]
  }));
};

var GetAppIcon = function GetAppIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z',
      fill: fill
    })]
  }));
};

var HighlightOffRoundedIcon = function HighlightOffRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#e8eaed' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
      fill: fill
    })]
  }));
};

var InsertDriveFileIcon = function InsertDriveFileIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z',
      fill: fill
    })]
  }));
};

var OndemandVideoIcon = function OndemandVideoIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z',
      fill: fill
    })]
  }));
};

var PublishIcon = function PublishIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z',
      fill: fill
    })]
  }));
};

var RemoveCircleIcon = function RemoveCircleIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
      fill: fill
    })]
  }));
};

var ReportProblemIcon = function ReportProblemIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
      fill: fill
    })]
  }));
};

var SettingsApplicationsIcon = function SettingsApplicationsIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z',
      fill: fill
    })]
  }));
};

var StarsRoundedIcon = function StarsRoundedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z',
      fill: fill
    })]
  }));
};

var VideoCallIcon = function VideoCallIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#e8eaed' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z',
      fill: fill
    })]
  }));
};

var VolumeUpIcon = function VolumeUpIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z',
      fill: fill
    })]
  }));
};

var FileUploadOutlinedIcon = function FileUploadOutlinedIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("g", {
      children: jsxRuntimeExports.jsx("rect", {
        fill: 'none',
        height: '24',
        width: '24'
      })
    }), jsxRuntimeExports.jsx("g", {
      children: jsxRuntimeExports.jsx("path", {
        d: 'M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z',
        fill: fill
      })
    })]
  }));
};

var DashboardIcon = function DashboardIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z',
      fill: fill
    })]
  }));
};

var CheckBoxOutlineBlankIcon = function CheckBoxOutlineBlankIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    })]
  }));
};

var ChevronRightIcon = function ChevronRightIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z'
    })]
  }));
};

var DeleteIconRounded = function DeleteIconRounded(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0V0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'
    })]
  }));
};

var SchoolIcon = function SchoolIcon(_a) {
  var className = _a.className,
    onClick = _a.onClick,
    _b = _a.fill,
    fill = _b === void 0 ? '#68707A' : _b,
    props = __rest(_a, ["className", "onClick", "fill"]);
  return jsxRuntimeExports.jsxs("svg", __assign({
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
    fill: fill,
    className: className,
    onClick: onClick
  }, props, {
    children: [jsxRuntimeExports.jsx("path", {
      d: 'M0 0h24v24H0z',
      fill: 'none'
    }), jsxRuntimeExports.jsx("path", {
      d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z'
    })]
  }));
};

export { ActivityIcon, AddAlt, AddCircleIcon, AddIcon, AddStudent, Analytics, AnalyticsIcon, ArchiveIcon, ArrowDropDownIcon, ArrowDropUpIcon, AssignTutor, BackspaceRoundedIcon, BackupIcon, Book, BookWithBookmark, BusinessIcon, CancelIcon, CaretDown, Check, CheckBoxIcon, CheckBoxOutlineBlankIcon, CheckCircleIcon, CheckCircleOutlineOutlinedIcon, CheckCircleOutlineRoundedIcon, CheckedIcon, Checkmark, CheckmarkOutline, CheckmarkOutlineAction, ChevronRightIcon, Circle, CircleNotificationsIcon, Close, CloseIcon, CloseOutline, CloseOutlineAction, ClosedCaptionIcon, CloudDownloadIcon, Coach, Company, ContactSupportOutlinedIcon, DarkAddAlt, DarkAiAssistent, DarkCloseOutline, DarkTrashCan, DashboardIcon, DefaultAvatar, Delete, DeleteForeverRoundedIcon, DeleteIcon, DeleteIconRounded, DocumentAttachment, Download, DownloadIcon, DragIndicatorIcon, Edit, EditIcon, EditRounded, EditUsers, Education, EducationDefault, EmailIcon, ErrorOutlineIcon, ErrorOutlineRoundedIcon, EventIcon, ExpandMoreIcon, FeaturedPlayListIcon, FiberManualRecordIcon, FileCopyIcon, FileUploadOutlinedIcon, FilterIcon, GetAppIcon, GrayDownload, GrayPlayIcon, GridView, Group, GroupDefault, GroupOutlined, GroupsOutlined, HeadsetIcon, Help, HelpIcon, HighlightOffRoundedIcon, HorizontalView, HourglassEmptyIcon, ImageIcon, Information, InsertDriveFileIcon, KeyboardBackspaceIcon, Learning, Library, LocationCityIcon, LocationOnIcon, LockIcon, Locked, Logout, MarkunreadMailboxIcon, MoreHorizIcon, MoreVertRoundedIcon, MyProfile, NewFilter, Notification, NotificationsOutlined, OndemandVideoIcon, PermMediaIcon, Person, PhoneIphoneIcon, PlayButton, PlayCircleOutlineIcon, PlayGrayButton, PlaylistAddIcon, PlaylistPlayIcon, PresentationScreen, Profile, PublicIcon, PublishIcon, RecordVoiceOverOutlined, RedDeleteIcon, RemoveAlt, RemoveAltDisable, RemoveCircleIcon, RemoveFilter, ReportProblemIcon, Reset, SchoolIcon, SchoolOutlinedIcon, Search, SearchRounded, Send, SendAlt, SettingsApplicationsIcon, SettingsOutlinedIcon, StarsRoundedIcon, SwitchCompany, Timeline, TrashCan, TrashCanAction, TrashCanRed, TrendingUpOutlinedIcon, UnfillPlay, Unlock, Unlocked, UserActivity, UserSpeaker, UsersIcon, VideoCallIcon, ViewCompactIcon, ViewListIcon, Visibility, VisibilityOff, VolumeUpIcon, WhiteAiAssistant, WorkOutlineOutlinedIcon, ZoomInIcon };
//# sourceMappingURL=index.esm.js.map
