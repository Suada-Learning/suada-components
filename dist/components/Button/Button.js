import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { HtmlButtonTypeEnum } from './Button.interface.js';
import { StyledButton } from './Button.styles.js';

var Button = function Button(_a) {
  var type = _a.type,
    size = _a.size,
    label = _a.label,
    iconLeft = _a.iconLeft,
    iconRight = _a.iconRight,
    disabled = _a.disabled,
    customStyles = _a.customStyles,
    onClick = _a.onClick,
    _b = _a.htmlType,
    htmlType = _b === undefined ? HtmlButtonTypeEnum.BUTTON : _b,
    className = _a.className;
  return jsxRuntimeExports.jsxs(StyledButton, {
    "$type": type,
    "$size": size,
    disabled: !!disabled,
    style: customStyles,
    onClick: onClick,
    type: htmlType,
    className: className,
    children: [iconLeft, label, iconRight]
  });
};

export { Button };
//# sourceMappingURL=Button.js.map
