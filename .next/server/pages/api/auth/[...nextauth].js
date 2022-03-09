"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./pages/lib/mongodb.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: 'jwt'\n    },\n    //The adapter to the database we will use to store the data\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    //The providers are the autentication method\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            server: {\n                host: process.env.EMAIL_SERVER_HOST,\n                port: process.env.EMAIL_SERVER_PORT,\n                auth: {\n                    user: process.env.EMAIL_SERVER_USER,\n                    pass: process.env.EMAIL_SERVER_PASSWORD\n                }\n            },\n            from: process.env.EMAIL_FROM,\n            maxAge: 24 * 60 * 60\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3FCO0FBQ007QUFDZDtBQUU3QyxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBRXZCSSxPQUFPLEVBQUUsQ0FBQztRQUNSQyxRQUFRLEVBQUUsQ0FBSztJQUNqQixDQUFDO0lBRUQsRUFBMkQ7SUFDM0RDLE9BQU8sRUFBRUosMEVBQWMsQ0FBQ0Msb0RBQWE7SUFFckMsRUFBNEM7SUFDNUNJLFNBQVMsRUFBRSxDQUFDO1FBQ1ZOLGdFQUFhLENBQUMsQ0FBQztZQUNiTyxNQUFNLEVBQUUsQ0FBQztnQkFDUEMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO2dCQUNuQ0MsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csaUJBQWlCO2dCQUNuQ0MsSUFBSSxFQUFFLENBQUM7b0JBQ0xDLElBQUksRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLGlCQUFpQjtvQkFDbkNDLElBQUksRUFBRVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLHFCQUFxQjtnQkFDekMsQ0FBQztZQUNILENBQUM7WUFDREMsSUFBSSxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsVUFBVTtZQUM1QkMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUV0QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHV1bmlmeS1kY2EvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG5cbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgfSxcblxuICAvL1RoZSBhZGFwdGVyIHRvIHRoZSBkYXRhYmFzZSB3ZSB3aWxsIHVzZSB0byBzdG9yZSB0aGUgZGF0YVxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcblxuICAvL1RoZSBwcm92aWRlcnMgYXJlIHRoZSBhdXRlbnRpY2F0aW9uIG1ldGhvZFxuICBwcm92aWRlcnM6IFtcbiAgICBFbWFpbFByb3ZpZGVyKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BPUlQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfVVNFUixcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICAgIG1heEFnZTogMjQgKiA2MCAqIDYwLCBcbiAgICAgIFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJFbWFpbFByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiYWRhcHRlciIsInByb3ZpZGVycyIsInNlcnZlciIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwiRU1BSUxfU0VSVkVSX1BPUlQiLCJhdXRoIiwidXNlciIsIkVNQUlMX1NFUlZFUl9VU0VSIiwicGFzcyIsIkVNQUlMX1NFUlZFUl9QQVNTV09SRCIsImZyb20iLCJFTUFJTF9GUk9NIiwibWF4QWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/lib/mongodb.js":
/*!******************************!*\
  !*** ./pages/lib/mongodb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error('Please add your Mongo URI to .env.local');\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZUFBZSxFQUFFLElBQUk7QUFDdkIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsTUFBTTtBQUNWLEdBQUcsQ0FBQ0MsYUFBYTtBQUVqQixFQUFFLEdBQUdQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBeUM7QUFDM0QsQ0FBQztBQUVELEVBQUUsRUFmRixJQWUwQyxFQUFFLENBQUM7SUFDM0MsRUFBK0Q7SUFDL0QsRUFBNkU7SUFDN0UsRUFBRSxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixFQUFFLENBQUM7UUFDaENKLE1BQU0sR0FBRyxHQUFHLENBQUNSLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTztRQUNyQ00sTUFBTSxDQUFDQyxtQkFBbUIsR0FBR0osTUFBTSxDQUFDSyxPQUFPO0lBQzdDLENBQUM7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQjtBQUM1QyxDQUFDLE1BQU0sRUFJTjtBQUVELEVBQWlFO0FBQ2pFLEVBQThEO0FBQzlELGlFQUFlSCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdXVuaWZ5LWRjYS8uL3BhZ2VzL2xpYi9tb25nb2RiLmpzP2RkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge1xuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbn07XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();