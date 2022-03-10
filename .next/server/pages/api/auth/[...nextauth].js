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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./pages/lib/mongodb.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/signin\",\n        signOut: \"/signout\"\n    },\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default()({\n            server: {\n                host: process.env.EMAIL_SERVER_HOST,\n                port: process.env.EMAIL_SERVER_PORT,\n                auth: {\n                    user: process.env.EMAIL_SERVER_USER,\n                    pass: process.env.EMAIL_SERVER_PASSWORD\n                }\n            },\n            from: process.env.EMAIL_FROM,\n            async sendVerificationRequest ({ //THIS IS FOR EMAIL CUSTOMIZATION\n            identifier: email , url , provider: { server , from  } ,  }) {\n                const { host  } = new URL(url);\n                const transport = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(server);\n                await transport.sendMail({\n                    to: email,\n                    from,\n                    subject: `Login to ${host}`,\n                    text: text({\n                        url,\n                        host\n                    }),\n                    html: html({\n                        url,\n                        host,\n                        email\n                    })\n                });\n            }\n        }), \n    ]\n}));\nfunction html({ url , host , email  }) {\n    const escapedEmail = `${email.replace(/\\./g, \"&#8203;.\")}`;\n    const escapedHost = `${host.replace(/\\./g, \"&#8203;.\")}`;\n    // Your email content\n    return `\n      <body>\n        <h1>Your Login link</h1>\n        <h3>You requested a login form ${escapedEmail}</h3>\n        <p>\n          <a href=\"${url}\">Login to ${escapedHost}</a>\n      </body>\n  `;\n}\n// Fallback for non-HTML email clients\nfunction text({ url , host  }) {\n    return `Login to ${host}\\n${url}\\n\\n`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDSDtBQUMyQjtBQUNOO0FBQ1I7QUFFN0MsaUVBQWVDLGdEQUFRLENBQUMsQ0FBQztJQUN2QkksT0FBTyxFQUFFLENBQUM7UUFDUkMsUUFBUSxFQUFFLENBQUs7SUFDakIsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxNQUFNLEVBQUUsQ0FBUztRQUNqQkMsT0FBTyxFQUFFLENBQVU7SUFDckIsQ0FBQztJQUNEQyxPQUFPLEVBQUVSLDBFQUFjLENBQUNFLG9EQUFhO0lBQ3JDTyxTQUFTLEVBQUUsQ0FBQztRQUNWUixnRUFBYSxDQUFDLENBQUM7WUFDYlMsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtnQkFDbkNDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGlCQUFpQjtnQkFDbkNDLElBQUksRUFBRSxDQUFDO29CQUNMQyxJQUFJLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxpQkFBaUI7b0JBQ25DQyxJQUFJLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxxQkFBcUI7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDO1lBQ0RDLElBQUksRUFBRVYsT0FBTyxDQUFDQyxHQUFHLENBQUNVLFVBQVU7a0JBQ3RCQyx1QkFBdUIsRUFBQyxDQUFDLENBQzdCLEVBQWlDO1lBQ2pDQyxVQUFVLEVBQUVDLEtBQUssR0FDakJDLEdBQUcsR0FDSEMsUUFBUSxFQUFFLENBQUMsQ0FBQ2xCLE1BQU0sR0FBRVksSUFBSSxFQUFDLENBQUMsSUFDNUIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQ1gsSUFBSSxFQUFDLENBQUMsR0FBRyxHQUFHLENBQUNrQixHQUFHLENBQUNGLEdBQUc7Z0JBQzVCLEtBQUssQ0FBQ0csU0FBUyxHQUFHaEMsaUVBQTBCLENBQUNZLE1BQU07Z0JBQ25ELEtBQUssQ0FBQ29CLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7b0JBQ3hCQyxFQUFFLEVBQUVQLEtBQUs7b0JBQ1RKLElBQUk7b0JBQ0pZLE9BQU8sR0FBRyxTQUFTLEVBQUV2QixJQUFJO29CQUN6QndCLElBQUksRUFBRUEsSUFBSSxDQUFDLENBQUM7d0JBQUNSLEdBQUc7d0JBQUVoQixJQUFJO29CQUFDLENBQUM7b0JBQ3hCeUIsSUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBQzt3QkFBQ1QsR0FBRzt3QkFBRWhCLElBQUk7d0JBQUVlLEtBQUs7b0JBQUMsQ0FBQztnQkFDakMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDO1NBRU1VLElBQUksQ0FBQyxDQUFDLENBQUNULEdBQUcsR0FBRWhCLElBQUksR0FBRWUsS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQ1csWUFBWSxNQUFNWCxLQUFLLENBQUNZLE9BQU8sUUFBUSxDQUFVO0lBQ3ZELEtBQUssQ0FBQ0MsV0FBVyxNQUFNNUIsSUFBSSxDQUFDMkIsT0FBTyxRQUFRLENBQVU7SUFDckQsRUFBcUI7SUFDckIsTUFBTSxFQUFFOzs7dUNBRzZCLEVBQUVELFlBQVksQ0FBQzs7bUJBRW5DLEVBQUVWLEdBQUcsQ0FBQyxXQUFXLEVBQUVZLFdBQVcsQ0FBQzs7RUFFaEQ7QUFDRixDQUFDO0FBRUQsRUFBc0M7U0FDN0JKLElBQUksQ0FBQyxDQUFDLENBQUNSLEdBQUcsR0FBRWhCLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QixNQUFNLEVBQUUsU0FBUyxFQUFFQSxJQUFJLENBQUMsRUFBRSxFQUFFZ0IsR0FBRyxDQUFDLElBQUk7QUFDdEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2x1dW5pZnktZGNhLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9zaWduaW5cIixcbiAgICBzaWduT3V0OiBcIi9zaWdub3V0XCIsXG4gIH0sXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBFbWFpbFByb3ZpZGVyKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BPUlQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfVVNFUixcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICAgIGFzeW5jIHNlbmRWZXJpZmljYXRpb25SZXF1ZXN0KHtcbiAgICAgICAgLy9USElTIElTIEZPUiBFTUFJTCBDVVNUT01JWkFUSU9OXG4gICAgICAgIGlkZW50aWZpZXI6IGVtYWlsLFxuICAgICAgICB1cmwsXG4gICAgICAgIHByb3ZpZGVyOiB7IHNlcnZlciwgZnJvbSB9LFxuICAgICAgfSkge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IG5ldyBVUkwodXJsKTtcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoc2VydmVyKTtcbiAgICAgICAgYXdhaXQgdHJhbnNwb3J0LnNlbmRNYWlsKHtcbiAgICAgICAgICB0bzogZW1haWwsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICBzdWJqZWN0OiBgTG9naW4gdG8gJHtob3N0fWAsXG4gICAgICAgICAgdGV4dDogdGV4dCh7IHVybCwgaG9zdCB9KSxcbiAgICAgICAgICBodG1sOiBodG1sKHsgdXJsLCBob3N0LCBlbWFpbCB9KSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG5cbmZ1bmN0aW9uIGh0bWwoeyB1cmwsIGhvc3QsIGVtYWlsIH0pIHtcbiAgY29uc3QgZXNjYXBlZEVtYWlsID0gYCR7ZW1haWwucmVwbGFjZSgvXFwuL2csIFwiJiM4MjAzOy5cIil9YDtcbiAgY29uc3QgZXNjYXBlZEhvc3QgPSBgJHtob3N0LnJlcGxhY2UoL1xcLi9nLCBcIiYjODIwMzsuXCIpfWA7XG4gIC8vIFlvdXIgZW1haWwgY29udGVudFxuICByZXR1cm4gYFxuICAgICAgPGJvZHk+XG4gICAgICAgIDxoMT5Zb3VyIExvZ2luIGxpbms8L2gxPlxuICAgICAgICA8aDM+WW91IHJlcXVlc3RlZCBhIGxvZ2luIGZvcm0gJHtlc2NhcGVkRW1haWx9PC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiPkxvZ2luIHRvICR7ZXNjYXBlZEhvc3R9PC9hPlxuICAgICAgPC9ib2R5PlxuICBgO1xufVxuXG4vLyBGYWxsYmFjayBmb3Igbm9uLUhUTUwgZW1haWwgY2xpZW50c1xuZnVuY3Rpb24gdGV4dCh7IHVybCwgaG9zdCB9KSB7XG4gIHJldHVybiBgTG9naW4gdG8gJHtob3N0fVxcbiR7dXJsfVxcblxcbmA7XG59XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsIk5leHRBdXRoIiwiTW9uZ29EQkFkYXB0ZXIiLCJFbWFpbFByb3ZpZGVyIiwiY2xpZW50UHJvbWlzZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJzZXJ2ZXIiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1NFUlZFUl9IT1NUIiwicG9ydCIsIkVNQUlMX1NFUlZFUl9QT1JUIiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsInNlbmRWZXJpZmljYXRpb25SZXF1ZXN0IiwiaWRlbnRpZmllciIsImVtYWlsIiwidXJsIiwicHJvdmlkZXIiLCJVUkwiLCJ0cmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZW5kTWFpbCIsInRvIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwiZXNjYXBlZEVtYWlsIiwicmVwbGFjZSIsImVzY2FwZWRIb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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