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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`\n    // const token = await getToken({ req })\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req\n    });\n    console.log(\"JSON Web Token\", token);\n    res.end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBNkU7QUFDckM7QUFFekIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEVBQWlHO0lBQ2pHLEVBQXdDO0lBQ3hDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0osdURBQVEsQ0FBQyxDQUFDO1FBQUNFLEdBQUc7SUFBQyxDQUFDO0lBQ3BDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQixpQkFBRUYsS0FBSztJQUNuQ0QsR0FBRyxDQUFDSSxHQUFHO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2x1dW5pZnktZGNhLy4vcGFnZXMvYXBpL2hlbGxvLmpzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBpZiB1c2luZyBgTkVYVEFVVEhfU0VDUkVUYCBlbnYgdmFyaWFibGUsIHdlIGRldGVjdCBpdCwgYW5kIHlvdSB3b24ndCBhY3R1YWxseSBuZWVkIHRvIGBzZWNyZXRgXG4gIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSlcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSB9KTtcbiAgY29uc29sZS5sb2coXCJKU09OIFdlYiBUb2tlblwiLCB0b2tlbik7XG4gIHJlcy5lbmQoKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();