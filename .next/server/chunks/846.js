"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8622);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2990);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7138);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5875);
/* harmony import */ var react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7672);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5688);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* eslint-disable @next/next/no-img-element */












const AppNavbar = () => {
  const {
    0: toast,
    1: setToast
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");

  const logout = async () => {
    setToast(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Toast__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      heading: "Logging you out",
      body: "Please wait while we create an account for you.",
      variant: "primary",
      loading: true,
      onClose: () => setToast("")
    }));

    try {
      const res = await fetch(`${_pages_app__WEBPACK_IMPORTED_MODULE_7__.apiUrl}/auth/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const resData = await res.json();

      if (resData.success === true) {
        window.location.href = "/auth/sign-in";
      }
    } catch (error) {
      console.error(error);
      setToast(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Toast__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        heading: "Error!",
        body: "Something went wrong while logging you out. Please try again later.",
        variant: "danger",
        onClose: () => setToast("")
      }));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    id: "top",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_ToastContainer__WEBPACK_IMPORTED_MODULE_5___default()), {
      position: "bottom-end",
      className: "p-4",
      children: toast
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default()), {
      collapseOnSelect: true,
      expand: "lg",
      bg: "light",
      variant: "light",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
        fluid: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Brand), {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
            src: "/socialautopost.png",
            alt: "logo",
            style: {
              mixBlendMode: "multiply"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Toggle), {
          "aria-controls": "responsive-navbar-nav"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Collapse), {
          id: "responsive-navbar-nav",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "me-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
              passHref: true,
              href: "/dashboard",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
                children: "My Projects"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default().Link), {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                variant: "outline-primary",
                onClick: logout,
                children: "Log out"
              })
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavbar);

/***/ })

};
;