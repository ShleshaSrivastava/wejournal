"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-stringify";
exports.ids = ["vendor-chunks/remark-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkStringify)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/index.js\");\n/**\n * @typedef {import('mdast').Root|import('mdast').Content} Node\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownOptions\n * @typedef {Omit<ToMarkdownOptions, 'extensions'>} Options\n */ \n/**\n * @this {import('unified').Processor}\n * @type {import('unified').Plugin<[Options?]|void[], Node, string>}\n */ function remarkStringify(options) {\n    /** @type {import('unified').CompilerFunction<Node, string>} */ const compiler = (tree)=>{\n        // Assume options.\n        const settings = /** @type {Options} */ this.data(\"settings\");\n        return (0,mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_0__.toMarkdown)(tree, Object.assign({}, settings, options, {\n            // Note: this option is not in the readme.\n            // The goal is for it to be set by plugins on `data` instead of being\n            // passed by users.\n            extensions: /** @type {ToMarkdownOptions['extensions']} */ this.data(\"toMarkdownExtensions\") || []\n        }));\n    };\n    Object.assign(this, {\n        Compiler: compiler\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztDQUlDLEdBRWdEO0FBRWpEOzs7Q0FHQyxHQUNjLFNBQVNDLGdCQUFnQkMsT0FBTztJQUM3Qyw2REFBNkQsR0FDN0QsTUFBTUMsV0FBVyxDQUFDQztRQUNoQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxvQkFBb0IsR0FBSSxJQUFJLENBQUNDLElBQUksQ0FBQztRQUVuRCxPQUFPTixrRUFBVUEsQ0FDZkksTUFDQUcsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0gsVUFBVUgsU0FBUztZQUNuQywwQ0FBMEM7WUFDMUMscUVBQXFFO1lBQ3JFLG1CQUFtQjtZQUNuQk8sWUFDaUQsNENBQUgsR0FDMUMsSUFBSSxDQUFDSCxJQUFJLENBQUMsMkJBQ1AsRUFBRTtRQUNYO0lBRUo7SUFFQUMsT0FBT0MsTUFBTSxDQUFDLElBQUksRUFBRTtRQUFDRSxVQUFVUDtJQUFRO0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Utam91cm5hbC8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9pbmRleC5qcz83MGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fGltcG9ydCgnbWRhc3QnKS5Db250ZW50fSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bk9wdGlvbnNcbiAqIEB0eXBlZGVmIHtPbWl0PFRvTWFya2Rvd25PcHRpb25zLCAnZXh0ZW5zaW9ucyc+fSBPcHRpb25zXG4gKi9cblxuaW1wb3J0IHt0b01hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duJ1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJ3VuaWZpZWQnKS5Qcm9jZXNzb3J9XG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBOb2RlLCBzdHJpbmc+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1hcmtTdHJpbmdpZnkob3B0aW9ucykge1xuICAvKiogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLkNvbXBpbGVyRnVuY3Rpb248Tm9kZSwgc3RyaW5nPn0gKi9cbiAgY29uc3QgY29tcGlsZXIgPSAodHJlZSkgPT4ge1xuICAgIC8vIEFzc3VtZSBvcHRpb25zLlxuICAgIGNvbnN0IHNldHRpbmdzID0gLyoqIEB0eXBlIHtPcHRpb25zfSAqLyAodGhpcy5kYXRhKCdzZXR0aW5ncycpKVxuXG4gICAgcmV0dXJuIHRvTWFya2Rvd24oXG4gICAgICB0cmVlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIG9wdGlvbnMsIHtcbiAgICAgICAgLy8gTm90ZTogdGhpcyBvcHRpb24gaXMgbm90IGluIHRoZSByZWFkbWUuXG4gICAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciBpdCB0byBiZSBzZXQgYnkgcGx1Z2lucyBvbiBgZGF0YWAgaW5zdGVhZCBvZiBiZWluZ1xuICAgICAgICAvLyBwYXNzZWQgYnkgdXNlcnMuXG4gICAgICAgIGV4dGVuc2lvbnM6XG4gICAgICAgICAgLyoqIEB0eXBlIHtUb01hcmtkb3duT3B0aW9uc1snZXh0ZW5zaW9ucyddfSAqLyAoXG4gICAgICAgICAgICB0aGlzLmRhdGEoJ3RvTWFya2Rvd25FeHRlbnNpb25zJylcbiAgICAgICAgICApIHx8IFtdXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odGhpcywge0NvbXBpbGVyOiBjb21waWxlcn0pXG59XG4iXSwibmFtZXMiOlsidG9NYXJrZG93biIsInJlbWFya1N0cmluZ2lmeSIsIm9wdGlvbnMiLCJjb21waWxlciIsInRyZWUiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJleHRlbnNpb25zIiwiQ29tcGlsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-stringify/lib/index.js\n");

/***/ })

};
;