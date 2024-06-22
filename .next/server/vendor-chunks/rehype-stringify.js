"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-stringify";
exports.ids = ["vendor-chunks/rehype-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/rehype-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeStringify)\n/* harmony export */ });\n/* harmony import */ var hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-html */ \"(ssr)/./node_modules/hast-util-to-html/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {Root|Root['children'][number]} Node\n * @typedef {import('hast-util-to-html').Options} Options\n */ \n/**\n * @this {import('unified').Processor}\n * @type {import('unified').Plugin<[Options?]|Array<void>, Node, string>}\n */ function rehypeStringify(config) {\n    const processorSettings = /** @type {Options} */ this.data(\"settings\");\n    const settings = Object.assign({}, processorSettings, config);\n    Object.assign(this, {\n        Compiler: compiler\n    });\n    /**\n   * @type {import('unified').CompilerFunction<Node, string>}\n   */ function compiler(tree) {\n        return (0,hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__.toHtml)(tree, settings);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztDQUlDLEdBRXVDO0FBRXhDOzs7Q0FHQyxHQUNjLFNBQVNDLGdCQUFnQkMsTUFBTTtJQUM1QyxNQUFNQyxvQkFBb0Isb0JBQW9CLEdBQUksSUFBSSxDQUFDQyxJQUFJLENBQUM7SUFDNUQsTUFBTUMsV0FBV0MsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0osbUJBQW1CRDtJQUV0REksT0FBT0MsTUFBTSxDQUFDLElBQUksRUFBRTtRQUFDQyxVQUFVQztJQUFRO0lBRXZDOztHQUVDLEdBQ0QsU0FBU0EsU0FBU0MsSUFBSTtRQUNwQixPQUFPVix5REFBTUEsQ0FBQ1UsTUFBTUw7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlLWpvdXJuYWwvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXN0cmluZ2lmeS9saWIvaW5kZXguanM/MTM1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7Um9vdHxSb290WydjaGlsZHJlbiddW251bWJlcl19IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC10by1odG1sJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7dG9IdG1sfSBmcm9tICdoYXN0LXV0aWwtdG8taHRtbCdcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yfVxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dfEFycmF5PHZvaWQ+LCBOb2RlLCBzdHJpbmc+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVTdHJpbmdpZnkoY29uZmlnKSB7XG4gIGNvbnN0IHByb2Nlc3NvclNldHRpbmdzID0gLyoqIEB0eXBlIHtPcHRpb25zfSAqLyAodGhpcy5kYXRhKCdzZXR0aW5ncycpKVxuICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHByb2Nlc3NvclNldHRpbmdzLCBjb25maWcpXG5cbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Q29tcGlsZXI6IGNvbXBpbGVyfSlcblxuICAvKipcbiAgICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLkNvbXBpbGVyRnVuY3Rpb248Tm9kZSwgc3RyaW5nPn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVyKHRyZWUpIHtcbiAgICByZXR1cm4gdG9IdG1sKHRyZWUsIHNldHRpbmdzKVxuICB9XG59XG4iXSwibmFtZXMiOlsidG9IdG1sIiwicmVoeXBlU3RyaW5naWZ5IiwiY29uZmlnIiwicHJvY2Vzc29yU2V0dGluZ3MiLCJkYXRhIiwic2V0dGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJDb21waWxlciIsImNvbXBpbGVyIiwidHJlZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-stringify/lib/index.js\n");

/***/ })

};
;