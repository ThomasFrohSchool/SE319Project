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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateUser.js":
/*!**********************************!*\
  !*** ./components/CreateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Thomas Frohwein\\SE319Project\\g10\\components\\CreateUser.js";


const CreateUser = ({
  onChangeForm,
  createUser
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-7 mrgnbtm",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Create User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group col-md-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "exampleInputEmail1",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: e => onChangeForm(e),
                className: "form-control",
                name: "firstname",
                id: "firstname",
                "aria-describedby": "emailHelp",
                placeholder: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group col-md-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "exampleInputPassword1",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: e => onChangeForm(e),
                className: "form-control",
                name: "lastname",
                id: "lastname",
                placeholder: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group col-md-12",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "exampleInputEmail1",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: e => onChangeForm(e),
                className: "form-control",
                name: "email",
                id: "email",
                "aria-describedby": "emailHelp",
                placeholder: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: e => createUser(),
            className: "btn btn-danger",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CreateUser);

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CreateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateUser */ "./components/CreateUser.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/UserService */ "./services/UserService.js");

var _jsxFileName = "C:\\Users\\Thomas Frohwein\\SE319Project\\g10\\pages\\register.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import { Header } from './components/Header'
//import { Users } from './components/Users'
//import { DisplayBoard } from './components/DisplayBoard'



/**
 * WILL UPDATE. THIS IS CURRENTLY ONLY REACT, BUT WE WANT TO CHANGE THIS TO NEXT.JS
 */

class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: {},
      users: [],
      numberOfUsers: 0
    });

    _defineProperty(this, "createUser", e => {
      Object(_services_UserService__WEBPACK_IMPORTED_MODULE_3__["createUser"])(this.state.user).then(response => {
        console.log(response);
        this.setState({
          numberOfUsers: this.state.numberOfUsers + 1
        });
      });
    });

    _defineProperty(this, "getAllUsers", () => {
      Object(_services_UserService__WEBPACK_IMPORTED_MODULE_3__["getAllUsers"])().then(users => {
        console.log(users);
        this.setState({
          users: users,
          numberOfUsers: users.length
        });
      });
    });

    _defineProperty(this, "onChangeForm", e => {
      let user = this.state.user;

      if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
        user.email = e.target.value;
      }

      this.setState({
        user
      });
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mrgnbtm",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CreateUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
              user: this.state.user,
              onChangeForm: this.onChangeForm,
              createUser: this.createUser
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/*! exports provided: getAllUsers, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
async function getAllUsers() {
  const response = await fetch('/pages/api/users');
  return await response.json();
}
async function createUser(data) {
  const response = await fetch('/pages/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: data
    })
  });
  return await response.json();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVVc2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3JlYXRlVXNlciIsIm9uQ2hhbmdlRm9ybSIsImNyZWF0ZVVzZXIiLCJlIiwiQXBwIiwiQ29tcG9uZW50IiwidXNlciIsInVzZXJzIiwibnVtYmVyT2ZVc2VycyIsInN0YXRlIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZ2V0QWxsVXNlcnMiLCJsZW5ndGgiLCJ0YXJnZXQiLCJuYW1lIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicmVuZGVyIiwiZmV0Y2giLCJqc29uIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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bkMsUUFBTWYsUUFBUSxHQUFHLE1BQU1hLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM1Q0csVUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxXQUFPLEVBQUU7QUFBQyxzQkFBZ0I7QUFBakIsS0FGbUM7QUFHNUNDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ3pCLFVBQUksRUFBRW9CO0FBQVAsS0FBZjtBQUhzQyxHQUFwQixDQUE1QjtBQUtBLFNBQU8sTUFBTWYsUUFBUSxDQUFDYyxJQUFULEVBQWI7QUFDSCxDOzs7Ozs7Ozs7OztBQ1pELGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9yZWdpc3Rlci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENyZWF0ZVVzZXIgPSAoe29uQ2hhbmdlRm9ybSwgY3JlYXRlVXNlciB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IG1yZ25idG1cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5DcmVhdGUgVXNlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRm9ybShlKX0gIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmaXJzdG5hbWVcIiBpZD1cImZpcnN0bmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRm9ybShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImxhc3RuYW1lXCIgaWQ9XCJsYXN0bmFtZVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRm9ybShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz0geyhlKSA9PiBjcmVhdGVVc2VyKCl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVXNlciIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG4vL2ltcG9ydCAnLi9BcHAuY3NzJztcclxuLy9pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG4vL2ltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzJ1xyXG4vL2ltcG9ydCB7IERpc3BsYXlCb2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9EaXNwbGF5Qm9hcmQnXHJcbmltcG9ydCBDcmVhdGVVc2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlVXNlcidcclxuaW1wb3J0IHsgZ2V0QWxsVXNlcnMsIGNyZWF0ZVVzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZSdcclxuXHJcbi8qKlxyXG4gKiBXSUxMIFVQREFURS4gVEhJUyBJUyBDVVJSRU5UTFkgT05MWSBSRUFDVCwgQlVUIFdFIFdBTlQgVE8gQ0hBTkdFIFRISVMgVE8gTkVYVC5KU1xyXG4gKi9cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHVzZXJzOiBbXSxcclxuICAgIG51bWJlck9mVXNlcnM6IDBcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIgPSAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVVc2VyKHRoaXMuc3RhdGUudXNlcilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtudW1iZXJPZlVzZXJzOiB0aGlzLnN0YXRlLm51bWJlck9mVXNlcnMgKyAxfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VycyA9ICgpID0+IHtcclxuICAgIGdldEFsbFVzZXJzKClcclxuICAgICAgLnRoZW4odXNlcnMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJzOiB1c2VycywgbnVtYmVyT2ZVc2VyczogdXNlcnMubGVuZ3RofSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUZvcm0gPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgdXNlciA9IHRoaXMuc3RhdGUudXNlclxyXG4gICAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ2ZpcnN0bmFtZScpIHtcclxuICAgICAgICAgIHVzZXIuZmlyc3ROYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ2xhc3RuYW1lJykge1xyXG4gICAgICAgICAgdXNlci5sYXN0TmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICAgIHVzZXIuZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt1c2VyfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICB7Lyo8SGVhZGVyPjwvSGVhZGVyPiovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1yZ25idG1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVc2VyIFxyXG4gICAgICAgICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRm9ybT17dGhpcy5vbkNoYW5nZUZvcm19XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXI9e3RoaXMuY3JlYXRlVXNlcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9DcmVhdGVVc2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgey8qPERpc3BsYXlCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBudW1iZXJPZlVzZXJzPXt0aGlzLnN0YXRlLm51bWJlck9mVXNlcnN9XHJcbiAgICAgICAgICAgICAgICAgIGdldEFsbFVzZXJzPXt0aGlzLmdldEFsbFVzZXJzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9EaXNwbGF5Qm9hcmQ+Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJyb3cgbXJnbmJ0bVwiPlxyXG4gICAgICAgICAgPFVzZXJzIHVzZXJzPXt0aGlzLnN0YXRlLnVzZXJzfT48L1VzZXJzPlxyXG4gICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wYWdlcy9hcGkvdXNlcnMnKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wYWdlcy9hcGkvdXNlcicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXI6IGRhdGF9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==