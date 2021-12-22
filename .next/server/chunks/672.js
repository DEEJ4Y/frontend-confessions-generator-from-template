"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 7672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "websiteUrl": () => (/* binding */ websiteUrl),
/* harmony export */   "UserContext": () => (/* binding */ UserContext),
/* harmony export */   "ProjectContext": () => (/* binding */ ProjectContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const apiUrl = "https://socialautopost.herokuapp.com/api/v1";
const websiteUrl = "https://deej4y.github.io/socialautopost"; // Context for Logged in User

const UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  userToken: "",
  setUserToken: () => {}
}); // Context for selected project

const ProjectContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  projectId: "",
  setProjectId: () => {}
});

function MyApp({
  Component,
  pageProps
}) {
  // State for Logged in User
  const {
    0: userTokenState,
    1: setUserTokenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    userToken: "",
    setUserToken: token => setUserTokenState(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        userToken: token
      });
    })
  }); // State for selected project

  const {
    0: selectedProjectId,
    1: setSelectedProjectId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    projectId: "",
    setProjectId: (projectId, redirect) => {
      setSelectedProjectId(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          projectId: projectId
        });
      });

      if (redirect) {
        window.location.href = redirect;
      }
    }
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(UserContext.Provider, {
      value: userTokenState,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ProjectContext.Provider, {
        value: selectedProjectId,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ })

};
;