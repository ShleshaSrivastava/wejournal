"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trim-trailing-lines";
exports.ids = ["vendor-chunks/trim-trailing-lines"];
exports.modules = {

/***/ "(ssr)/./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trimTrailingLines: () => (/* binding */ trimTrailingLines)\n/* harmony export */ });\n/**\n * Remove final line endings from `value`\n *\n * @param {unknown} value\n *   Value with trailing line endings, coerced to string.\n * @return {string}\n *   Value without trailing line endings.\n */ function trimTrailingLines(value) {\n    const input = String(value);\n    let end = input.length;\n    while(end > 0){\n        const code = input.codePointAt(end - 1);\n        if (code !== undefined && (code === 10 || code === 13)) {\n            end--;\n        } else {\n            break;\n        }\n    }\n    return input.slice(0, end);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNBLGtCQUFrQkMsS0FBSztJQUNyQyxNQUFNQyxRQUFRQyxPQUFPRjtJQUNyQixJQUFJRyxNQUFNRixNQUFNRyxNQUFNO0lBRXRCLE1BQU9ELE1BQU0sRUFBRztRQUNkLE1BQU1FLE9BQU9KLE1BQU1LLFdBQVcsQ0FBQ0gsTUFBTTtRQUNyQyxJQUFJRSxTQUFTRSxhQUFjRixDQUFBQSxTQUFTLE1BQU1BLFNBQVMsRUFBQyxHQUFJO1lBQ3RERjtRQUNGLE9BQU87WUFDTDtRQUNGO0lBQ0Y7SUFFQSxPQUFPRixNQUFNTyxLQUFLLENBQUMsR0FBR0w7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZS1qb3VybmFsLy4vbm9kZV9tb2R1bGVzL3RyaW0tdHJhaWxpbmctbGluZXMvaW5kZXguanM/MzU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlbW92ZSBmaW5hbCBsaW5lIGVuZGluZ3MgZnJvbSBgdmFsdWVgXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogICBWYWx1ZSB3aXRoIHRyYWlsaW5nIGxpbmUgZW5kaW5ncywgY29lcmNlZCB0byBzdHJpbmcuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgIFZhbHVlIHdpdGhvdXQgdHJhaWxpbmcgbGluZSBlbmRpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbVRyYWlsaW5nTGluZXModmFsdWUpIHtcbiAgY29uc3QgaW5wdXQgPSBTdHJpbmcodmFsdWUpXG4gIGxldCBlbmQgPSBpbnB1dC5sZW5ndGhcblxuICB3aGlsZSAoZW5kID4gMCkge1xuICAgIGNvbnN0IGNvZGUgPSBpbnB1dC5jb2RlUG9pbnRBdChlbmQgLSAxKVxuICAgIGlmIChjb2RlICE9PSB1bmRlZmluZWQgJiYgKGNvZGUgPT09IDEwIHx8IGNvZGUgPT09IDEzKSkge1xuICAgICAgZW5kLS1cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5wdXQuc2xpY2UoMCwgZW5kKVxufVxuIl0sIm5hbWVzIjpbInRyaW1UcmFpbGluZ0xpbmVzIiwidmFsdWUiLCJpbnB1dCIsIlN0cmluZyIsImVuZCIsImxlbmd0aCIsImNvZGUiLCJjb2RlUG9pbnRBdCIsInVuZGVmaW5lZCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/trim-trailing-lines/index.js\n");

/***/ })

};
;