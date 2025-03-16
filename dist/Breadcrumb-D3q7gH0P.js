import { a as __assign } from './tslib.es6-C0iDBclc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DgXIhBRZ.js';
import React__default from 'react';
import { Container, PathItem, ItemWrapper } from './components/BreadCrumb/styled-components.js';
import { B as BrowserRouter, u as useNavigate } from './chunk-K6CSEXPM-CFrOYetI.js';
import { C as ChevronRightIcon } from './ChevronRightIcon-B18_J8P0.js';

var BreadcrumbComponent = function BreadcrumbComponent(_a) {
  var data = _a.data;
  var navigate = useNavigate();
  var handleClick = function handleClick(event, link, state) {
    if (state === void 0) {
      state = {};
    }
    event.preventDefault();
    navigate(link, {
      state: state
    });
  };
  if (!data) return null;
  return jsxRuntimeExports.jsx(Container, {
    children: data.map(function (item, index) {
      return jsxRuntimeExports.jsxs(React__default.Fragment, {
        children: [jsxRuntimeExports.jsxs(PathItem, {
          children: [item.icon, item.link ? jsxRuntimeExports.jsx("a", {
            href: '/',
            onClick: function onClick(e) {
              return handleClick(e, item.link, item.state);
            },
            children: item.label
          }) : jsxRuntimeExports.jsx(ItemWrapper, {
            children: item.label
          })]
        }), index < data.length - 1 && (index === 0 ? jsxRuntimeExports.jsx(ChevronRightIcon, {}) : jsxRuntimeExports.jsx("span", {
          children: " / "
        }))]
      }, index);
    })
  });
};
var Breadcrumb = function Breadcrumb(props) {
  return jsxRuntimeExports.jsx(BrowserRouter, {
    children: jsxRuntimeExports.jsx(BreadcrumbComponent, __assign({}, props))
  });
};

export { Breadcrumb as B };
//# sourceMappingURL=Breadcrumb-D3q7gH0P.js.map
