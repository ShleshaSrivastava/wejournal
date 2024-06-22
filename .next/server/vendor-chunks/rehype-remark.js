"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-remark";
exports.ids = ["vendor-chunks/rehype-remark"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-remark/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rehype-remark/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-mdast */ \"(ssr)/./node_modules/hast-util-to-mdast/lib/index.js\");\n/**\n * @typedef {import('hast-util-to-mdast').Options} Options\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('mdast').Root} MdastRoot\n * @typedef {import('unified').Processor<any, any, any, any>} Processor\n */ \n/**\n * Plugin to bridge or mutate to rehype.\n *\n * If a destination is given, runs the destination with the new mdast\n * tree (bridge-mode).\n * Without destination, returns the mdast tree: further plugins run on that\n * tree (mutate-mode).\n *\n * @param destination\n *   Optional unified processor.\n * @param options\n *   Options passed to `hast-util-to-mdast`.\n */ const rehypeRemark = /**\n   * @type {(import('unified').Plugin<[Processor, Options?], HastRoot> & import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>)}\n   */ /**\n     * @param {Processor|Options} [destination]\n     * @param {Options} [options]\n     */ function(destination, options) {\n    /** @type {Options|undefined} */ let settings;\n    /** @type {Processor|undefined} */ let processor;\n    if (typeof destination === \"function\") {\n        processor = destination;\n        settings = options || {};\n    } else {\n        settings = destination || {};\n    }\n    if (settings.document === undefined || settings.document === null) {\n        settings = Object.assign({}, settings, {\n            document: true\n        });\n    }\n    return processor ? bridge(processor, settings) : mutate(settings);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rehypeRemark);\n/**\n * Bridge-mode.\n * Runs the destination with the new mdast tree.\n *\n * @type {import('unified').Plugin<[Processor, Options?], HastRoot>}\n */ function bridge(destination, options) {\n    return (node, file, next)=>{\n        destination.run((0,hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__.toMdast)(node, options), file, (error)=>{\n            next(error);\n        });\n    };\n}\n/**\n * Mutate-mode.\n * Further transformers run on the mdast tree.\n *\n * @type {import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>}\n */ function mutate(options = {}) {\n    return (node)=>{\n        const result = /** @type {MdastRoot} */ (0,hast_util_to_mdast__WEBPACK_IMPORTED_MODULE_0__.toMdast)(node, options);\n        return result;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJlbWFyay9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUV5QztBQUUxQzs7Ozs7Ozs7Ozs7O0NBWUMsR0FDRCxNQUFNQyxlQUNKOztHQUVDLEdBRUM7OztLQUdDLEdBQ0QsU0FBVUMsV0FBVyxFQUFFQyxPQUFPO0lBQzVCLDhCQUE4QixHQUM5QixJQUFJQztJQUNKLGdDQUFnQyxHQUNoQyxJQUFJQztJQUVKLElBQUksT0FBT0gsZ0JBQWdCLFlBQVk7UUFDckNHLFlBQVlIO1FBQ1pFLFdBQVdELFdBQVcsQ0FBQztJQUN6QixPQUFPO1FBQ0xDLFdBQVdGLGVBQWUsQ0FBQztJQUM3QjtJQUVBLElBQUlFLFNBQVNFLFFBQVEsS0FBS0MsYUFBYUgsU0FBU0UsUUFBUSxLQUFLLE1BQU07UUFDakVGLFdBQVdJLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdMLFVBQVU7WUFBQ0UsVUFBVTtRQUFJO0lBQ3hEO0lBRUEsT0FBT0QsWUFBWUssT0FBT0wsV0FBV0QsWUFBWU8sT0FBT1A7QUFDMUQ7QUFHSixpRUFBZUgsWUFBWUEsRUFBQTtBQUUzQjs7Ozs7Q0FLQyxHQUNELFNBQVNTLE9BQU9SLFdBQVcsRUFBRUMsT0FBTztJQUNsQyxPQUFPLENBQUNTLE1BQU1DLE1BQU1DO1FBQ2xCWixZQUFZYSxHQUFHLENBQUNmLDJEQUFPQSxDQUFDWSxNQUFNVCxVQUFVVSxNQUFNLENBQUNHO1lBQzdDRixLQUFLRTtRQUNQO0lBQ0Y7QUFDRjtBQUVBOzs7OztDQUtDLEdBQ0QsU0FBU0wsT0FBT1IsVUFBVSxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDUztRQUNOLE1BQU1LLFNBQVMsc0JBQXNCLEdBQUlqQiwyREFBT0EsQ0FBQ1ksTUFBTVQ7UUFDdkQsT0FBT2M7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Utam91cm5hbC8uL25vZGVfbW9kdWxlcy9yZWh5cGUtcmVtYXJrL2xpYi9pbmRleC5qcz84OTZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLXRvLW1kYXN0JykuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IEhhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJvb3R9IE1kYXN0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pZmllZCcpLlByb2Nlc3NvcjxhbnksIGFueSwgYW55LCBhbnk+fSBQcm9jZXNzb3JcbiAqL1xuXG5pbXBvcnQge3RvTWRhc3R9IGZyb20gJ2hhc3QtdXRpbC10by1tZGFzdCdcblxuLyoqXG4gKiBQbHVnaW4gdG8gYnJpZGdlIG9yIG11dGF0ZSB0byByZWh5cGUuXG4gKlxuICogSWYgYSBkZXN0aW5hdGlvbiBpcyBnaXZlbiwgcnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IG1kYXN0XG4gKiB0cmVlIChicmlkZ2UtbW9kZSkuXG4gKiBXaXRob3V0IGRlc3RpbmF0aW9uLCByZXR1cm5zIHRoZSBtZGFzdCB0cmVlOiBmdXJ0aGVyIHBsdWdpbnMgcnVuIG9uIHRoYXRcbiAqIHRyZWUgKG11dGF0ZS1tb2RlKS5cbiAqXG4gKiBAcGFyYW0gZGVzdGluYXRpb25cbiAqICAgT3B0aW9uYWwgdW5pZmllZCBwcm9jZXNzb3IuXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogICBPcHRpb25zIHBhc3NlZCB0byBgaGFzdC11dGlsLXRvLW1kYXN0YC5cbiAqL1xuY29uc3QgcmVoeXBlUmVtYXJrID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoaW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtQcm9jZXNzb3IsIE9wdGlvbnM/XSwgSGFzdFJvb3Q+ICYgaW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBIYXN0Um9vdCwgTWRhc3RSb290Pil9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcm9jZXNzb3J8T3B0aW9uc30gW2Rlc3RpbmF0aW9uXVxuICAgICAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gICAgICAvKiogQHR5cGUge09wdGlvbnN8dW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IHNldHRpbmdzXG4gICAgICAvKiogQHR5cGUge1Byb2Nlc3Nvcnx1bmRlZmluZWR9ICovXG4gICAgICBsZXQgcHJvY2Vzc29yXG5cbiAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvY2Vzc29yID0gZGVzdGluYXRpb25cbiAgICAgICAgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5ncyA9IGRlc3RpbmF0aW9uIHx8IHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5kb2N1bWVudCA9PT0gdW5kZWZpbmVkIHx8IHNldHRpbmdzLmRvY3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHtkb2N1bWVudDogdHJ1ZX0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9jZXNzb3IgPyBicmlkZ2UocHJvY2Vzc29yLCBzZXR0aW5ncykgOiBtdXRhdGUoc2V0dGluZ3MpXG4gICAgfVxuICApXG5cbmV4cG9ydCBkZWZhdWx0IHJlaHlwZVJlbWFya1xuXG4vKipcbiAqIEJyaWRnZS1tb2RlLlxuICogUnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IG1kYXN0IHRyZWUuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbUHJvY2Vzc29yLCBPcHRpb25zP10sIEhhc3RSb290Pn1cbiAqL1xuZnVuY3Rpb24gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIHJldHVybiAobm9kZSwgZmlsZSwgbmV4dCkgPT4ge1xuICAgIGRlc3RpbmF0aW9uLnJ1bih0b01kYXN0KG5vZGUsIG9wdGlvbnMpLCBmaWxlLCAoZXJyb3IpID0+IHtcbiAgICAgIG5leHQoZXJyb3IpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIE11dGF0ZS1tb2RlLlxuICogRnVydGhlciB0cmFuc2Zvcm1lcnMgcnVuIG9uIHRoZSBtZGFzdCB0cmVlLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XXx2b2lkW10sIEhhc3RSb290LCBNZGFzdFJvb3Q+fVxuICovXG5mdW5jdGlvbiBtdXRhdGUob3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7TWRhc3RSb290fSAqLyAodG9NZGFzdChub2RlLCBvcHRpb25zKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0b01kYXN0IiwicmVoeXBlUmVtYXJrIiwiZGVzdGluYXRpb24iLCJvcHRpb25zIiwic2V0dGluZ3MiLCJwcm9jZXNzb3IiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsImJyaWRnZSIsIm11dGF0ZSIsIm5vZGUiLCJmaWxlIiwibmV4dCIsInJ1biIsImVycm9yIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-remark/lib/index.js\n");

/***/ })

};
;