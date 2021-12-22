"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Spinner = ({
  style,
  variant,
  size
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "d-flex justify-content-center",
    style: style,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `spinner-border text-${variant || "primary"} ${size ? `spinner-border-${size}` : ""}`,
      role: "status",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "sr-only visually-hidden",
        children: "Loading..."
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ 5688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1548);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Toasty = ({
  body,
  heading,
  loading,
  onClose,
  variant
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0___default()), {
    bg: "light",
    onClose: onClose ? onClose : () => {},
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0___default().Header), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("strong", {
        className: "me-auto",
        children: heading || ""
      }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        variant: "secondary",
        size: "sm"
      }) : ""]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_0___default().Body), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: `text-${variant} mb-0`,
        children: body || ""
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toasty);

/***/ })

};
;