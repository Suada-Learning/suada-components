'use strict';

var resolveComponentProps = require('./resolveComponentProps-DCteVXpM.js');

/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps.resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = resolveComponentProps.mergeSlotProps({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = resolveComponentProps.useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = resolveComponentProps.appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}

exports.useSlotProps = useSlotProps;
//# sourceMappingURL=useSlotProps-BdKx-GGO.js.map
