module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/authContext.js":
/*!**********************************!*\
  !*** ./constants/authContext.js ***!
  \**********************************/
/*! exports provided: AuthContext, AuthContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_baseURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/baseURL */ "./constants/baseURL.js");

var _jsxFileName = "C:\\Users\\saile\\Desktop\\Sailesh\\React\\Wiki\\wiki-client\\constants\\authContext.js";




const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  user: null,
  error: null,
  token: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  checkAuth: () => {}
});
const AuthContextProvider = ({
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const login = (username, password) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_constants_baseURL__WEBPACK_IMPORTED_MODULE_4__["baseURL"]}/login`, {
      username,
      password
    }).then(value => {
      let {
        user,
        error,
        token
      } = value.data;
      setUser(user);
      setError(error);
      setToken(token);
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("uid", user._id);
    }).catch(error => {
      console.log(error);
    });
  };

  const signup = (username, password) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_constants_baseURL__WEBPACK_IMPORTED_MODULE_4__["baseURL"]}/register`, {
      username,
      password
    }).then(value => {
      let {
        user,
        error,
        token
      } = value.data;
      setUser(user);
      setError(error);
      setToken(token);
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("uid", user._id);
    }).catch(error => {
      console.error(error);
    });
  };

  const logout = () => {
    setUser(null);
    setError(null);
    setToken(null);
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("uid");
    router.push("/");
  };

  const checkAuth = async token => {
    let response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_constants_baseURL__WEBPACK_IMPORTED_MODULE_4__["baseURL"]}/checkauth`, {
      hello: "world"
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.authorized;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      user,
      error,
      token,
      login: (username, password) => login(username, password),
      signup: (username, password) => signup(username, password),
      logout: () => logout(),
      checkAuth: token => checkAuth(token)
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./constants/baseURL.js":
/*!******************************!*\
  !*** ./constants/baseURL.js ***!
  \******************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
const baseURL = "https://wiki-server.herokuapp.com";

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/authContext */ "./constants/authContext.js");

var _jsxFileName = "C:\\Users\\saile\\Desktop\\Sailesh\\React\\Wiki\\wiki-client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_constants_authContext__WEBPACK_IMPORTED_MODULE_2__["AuthContextProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9iYXNlVVJMLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsImVycm9yIiwidG9rZW4iLCJsb2dpbiIsInNpZ251cCIsImxvZ291dCIsImNoZWNrQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwic2V0VG9rZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwiYmFzZVVSTCIsInRoZW4iLCJ2YWx1ZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiX2lkIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZXNwb25zZSIsImhlbGxvIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhdXRob3JpemVkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUNXLFFBQUQsRUFBV0MsUUFBWCxDQUxqQztBQU1MWCxZQUFNLEVBQUUsTUFBTUEsTUFBTSxFQU5mO0FBT0xDLGVBQVMsRUFBR0osS0FBRCxJQUFXSSxTQUFTLENBQUNKLEtBQUQ7QUFQMUIsS0FEVDtBQUFBLGNBV0dNO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FuRk0sQzs7Ozs7Ozs7Ozs7O0FDZlA7QUFBQTtBQUFPLE1BQU1XLE9BQU8sR0FBRyxtQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTs7QUFFQSxTQUFTaUIsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLDBFQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuLi9jb25zdGFudHMvYmFzZVVSTFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgdXNlcjogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxuICB0b2tlbjogbnVsbCxcclxuICBsb2dpbjogKCkgPT4ge30sXHJcbiAgc2lnbnVwOiAoKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG4gIGNoZWNrQXV0aDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke2Jhc2VVUkx9L2xvZ2luYCwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgeyB1c2VyLCBlcnJvciwgdG9rZW4gfSA9IHZhbHVlLmRhdGE7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0X3Rva2VuXCIsIHRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1c2VyLl9pZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke2Jhc2VVUkx9L3JlZ2lzdGVyYCwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgeyB1c2VyLCBlcnJvciwgdG9rZW4gfSA9IHZhbHVlLmRhdGE7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0X3Rva2VuXCIsIHRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1c2VyLl9pZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dF90b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidWlkXCIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrQXV0aCA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYCR7YmFzZVVSTH0vY2hlY2thdXRoYCxcclxuICAgICAge1xyXG4gICAgICAgIGhlbGxvOiBcIndvcmxkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYXV0aG9yaXplZDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICBsb2dpbjogKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4gbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSxcclxuICAgICAgICBzaWdudXA6ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHNpZ251cCh1c2VybmFtZSwgcGFzc3dvcmQpLFxyXG4gICAgICAgIGxvZ291dDogKCkgPT4gbG9nb3V0KCksXHJcbiAgICAgICAgY2hlY2tBdXRoOiAodG9rZW4pID0+IGNoZWNrQXV0aCh0b2tlbiksXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGJhc2VVUkwgPSBcImh0dHBzOi8vd2lraS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbVwiO1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb25zdGFudHMvYXV0aENvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==