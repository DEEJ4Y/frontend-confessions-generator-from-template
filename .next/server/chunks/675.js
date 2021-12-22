"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Card = ({
  className,
  children,
  style,
  onClick,
  title,
  content,
  clickable,
  dataid
}) => {
  const {
    0: hoverState,
    1: setHoverState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: clickable ? hoverState ? `shadow border pe-auto clickable rounded p-3 ${className}` : `shadow-sm border pe-auto clickable rounded p-3 ${className}` : `shadow-sm border pe-auto rounded p-3 ${className}`,
    style: style || {},
    onClick: onClick ? onClick : () => {},
    onMouseEnter: () => {
      setHoverState(true);
    },
    onMouseLeave: () => {
      setHoverState(false);
    },
    dataid: dataid || "none",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
      className: !content ? "my-0" : "",
      children: title || ""
    }), content ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: content || ""
    }) : "", children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

};
;