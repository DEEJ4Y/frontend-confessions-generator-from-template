"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7140);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const FormGroup = ({
  controlClass,
  controlId,
  groupClass,
  isInvalid,
  labelClass,
  label,
  name,
  onChange,
  placeholder,
  showButton,
  size,
  type,
  value
}) => {
  const {
    0: showState,
    1: setShowState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
    controlId: controlId,
    className: groupClass ? groupClass : "",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
      className: labelClass ? labelClass : "",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
        className: controlClass ? controlClass : "mb-4",
        type: showButton ? showState ? "text" : "password" : type || "text",
        placeholder: placeholder,
        name: name,
        isInvalid: isInvalid || false,
        value: value,
        onChange: onChange,
        size: size || "md"
      }), showButton ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        size: "sm",
        variant: "outline-primary",
        className: "float-end",
        style: {
          position: "relative",
          bottom: "58px",
          right: "4px",
          width: "3.5rem"
        },
        onClick: () => {
          setShowState(prev => {
            return !prev;
          });
        },
        children: showState ? "hide" : "show"
      }) : ""]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ })

};
;