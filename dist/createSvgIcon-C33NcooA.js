import { a as getAugmentedNamespace } from './_commonjsHelpers-BVaqLcRS.js';
import { c as createSvgIcon$1 } from './createSvgIcon-B2XKCqAw.js';
import { m as memoTheme } from './DefaultPropsProvider-XnNOj87X.js';
import { m as mergeSlotProps } from './mergeSlotProps-BApn_CNn.js';
import { C as ClassNameGenerator, a as capitalize } from './createTheme-TyREZJxB.js';
import { c as createChainedFunction } from './createChainedFunction-cMzhJCnN.js';
import { d as debounce, o as ownerWindow } from './ownerWindow-CETuw6xr.js';
import { i as isMuiElement, u as unsupportedProp } from './unsupportedProp-D2Yik5GH.js';
import { o as ownerDocument } from './ownerDocument-DW8GpmwE.js';
import { s as setRef, b as useEventCallback, u as useForkRef } from './resolveComponentProps-H5dy75Na.js';
import { u as useEnhancedEffect } from './useEnhancedEffect-DmlaK8Ca.js';
import { u as useId } from './useId-BgFakYYE.js';
import { u as useControlled } from './useControlled-DrP1YPfe.js';

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
    ClassNameGenerator.configure(generator);
  }
};

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  capitalize: capitalize,
  createChainedFunction: createChainedFunction,
  createSvgIcon: createSvgIcon$1,
  debounce: debounce,
  deprecatedPropType: deprecatedPropType,
  isMuiElement: isMuiElement,
  mergeSlotProps: mergeSlotProps,
  ownerDocument: ownerDocument,
  ownerWindow: ownerWindow,
  requirePropFactory: requirePropFactory,
  setRef: setRef,
  unstable_ClassNameGenerator: unstable_ClassNameGenerator,
  unstable_memoTheme: memoTheme,
  unstable_useEnhancedEffect: useEnhancedEffect,
  unstable_useId: useId,
  unsupportedProp: unsupportedProp,
  useControlled: useControlled,
  useEventCallback: useEventCallback,
  useForkRef: useForkRef
});

var createSvgIcon = {};

var require$$0 = /*@__PURE__*/getAugmentedNamespace(utils);

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

export { requireCreateSvgIcon as r };
//# sourceMappingURL=createSvgIcon-C33NcooA.js.map
