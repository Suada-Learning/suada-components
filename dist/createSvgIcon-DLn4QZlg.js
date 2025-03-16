'use strict';

var _commonjsHelpers = require('./_commonjsHelpers-CxXfaUfr.js');
var createSvgIcon$1 = require('./createSvgIcon-BpozNt3V.js');
var DefaultPropsProvider = require('./DefaultPropsProvider-DfZ5VhSI.js');
var mergeSlotProps = require('./mergeSlotProps-kgDL_-4V.js');
var createTheme = require('./createTheme-D2y0Hy6u.js');
var createChainedFunction = require('./createChainedFunction-BAOT6rqZ.js');
var ownerWindow = require('./ownerWindow-Cm-XkKL0.js');
var unsupportedProp = require('./unsupportedProp-CjSKbcd2.js');
var ownerDocument = require('./ownerDocument-BtrF3bbW.js');
var resolveComponentProps = require('./resolveComponentProps-DCteVXpM.js');
var useEnhancedEffect = require('./useEnhancedEffect-C2K-3y2k.js');
var useId = require('./useId-Db7wkipr.js');
var useControlled = require('./useControlled-CeCwNB17.js');

function deprecatedPropType(validator, reason) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || '<<anonymous>>';
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
      return new Error(`The ${location} \`${propFullNameSafe}\` of ` + `\`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}

function requirePropFactory(componentNameInError, Component) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  const prevPropTypes = Component ? {
    ...Component.propTypes
  } : null;
  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes?.[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}

// TODO: remove this export once ClassNameGenerator is stable
// eslint-disable-next-line @typescript-eslint/naming-convention
const unstable_ClassNameGenerator = {
  configure: generator => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(['MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.', '', "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", '', 'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401', '', 'The updated documentation: https://mui.com/guides/classname-generator/'].join('\n'));
    }
    createTheme.ClassNameGenerator.configure(generator);
  }
};

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  capitalize: createTheme.capitalize,
  createChainedFunction: createChainedFunction.createChainedFunction,
  createSvgIcon: createSvgIcon$1.createSvgIcon,
  debounce: ownerWindow.debounce,
  deprecatedPropType: deprecatedPropType,
  isMuiElement: unsupportedProp.isMuiElement,
  mergeSlotProps: mergeSlotProps.mergeSlotProps,
  ownerDocument: ownerDocument.ownerDocument,
  ownerWindow: ownerWindow.ownerWindow,
  requirePropFactory: requirePropFactory,
  setRef: resolveComponentProps.setRef,
  unstable_ClassNameGenerator: unstable_ClassNameGenerator,
  unstable_memoTheme: DefaultPropsProvider.memoTheme,
  unstable_useEnhancedEffect: useEnhancedEffect.useEnhancedEffect,
  unstable_useId: useId.useId,
  unsupportedProp: unsupportedProp.unsupportedProp,
  useControlled: useControlled.useControlled,
  useEventCallback: resolveComponentProps.useEventCallback,
  useForkRef: resolveComponentProps.useForkRef
});

var createSvgIcon = {};

var require$$0 = /*@__PURE__*/_commonjsHelpers.getAugmentedNamespace(utils);

var hasRequiredCreateSvgIcon;

function requireCreateSvgIcon () {
	if (hasRequiredCreateSvgIcon) return createSvgIcon;
	hasRequiredCreateSvgIcon = 1;
	(function (exports) {
		'use client';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports, "default", {
		  enumerable: true,
		  get: function () {
		    return _utils.createSvgIcon;
		  }
		});
		var _utils = require$$0; 
	} (createSvgIcon));
	return createSvgIcon;
}

exports.requireCreateSvgIcon = requireCreateSvgIcon;
//# sourceMappingURL=createSvgIcon-DLn4QZlg.js.map
