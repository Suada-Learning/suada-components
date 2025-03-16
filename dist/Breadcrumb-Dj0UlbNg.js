'use strict';

var tslib_es6 = require('./tslib.es6-Ce89yL0g.js');
var jsxRuntime = require('./jsx-runtime-DoH8iSlf.js');
var React = require('react');
var components_BreadCrumb_styledComponents = require('./components/BreadCrumb/styled-components.cjs.js');
var chunkK6CSEXPM = require('./chunk-K6CSEXPM-Dvb2UznA.js');
var ChevronRightIcon = require('./ChevronRightIcon-DRJuoXQ-.js');

var BreadcrumbComponent = function BreadcrumbComponent(_a) {
  var data = _a.data;
  var navigate = chunkK6CSEXPM.useNavigate();
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
  return jsxRuntime.jsxRuntimeExports.jsx(components_BreadCrumb_styledComponents.Container, {
    children: data.map(function (item, index) {
      return jsxRuntime.jsxRuntimeExports.jsxs(React.Fragment, {
        children: [jsxRuntime.jsxRuntimeExports.jsxs(components_BreadCrumb_styledComponents.PathItem, {
          children: [item.icon, item.link ? jsxRuntime.jsxRuntimeExports.jsx("a", {
            href: '/',
            onClick: function onClick(e) {
              return handleClick(e, item.link, item.state);
            },
            children: item.label
          }) : jsxRuntime.jsxRuntimeExports.jsx(components_BreadCrumb_styledComponents.ItemWrapper, {
            children: item.label
          })]
        }), index < data.length - 1 && (index === 0 ? jsxRuntime.jsxRuntimeExports.jsx(ChevronRightIcon.ChevronRightIcon, {}) : jsxRuntime.jsxRuntimeExports.jsx("span", {
          children: " / "
        }))]
      }, index);
    })
  });
};
var Breadcrumb = function Breadcrumb(props) {
  return jsxRuntime.jsxRuntimeExports.jsx(chunkK6CSEXPM.BrowserRouter, {
    children: jsxRuntime.jsxRuntimeExports.jsx(BreadcrumbComponent, tslib_es6.__assign({}, props))
  });
};

exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=Breadcrumb-Dj0UlbNg.js.map
