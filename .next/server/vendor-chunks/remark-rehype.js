"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-rehype";
exports.ids = ["vendor-chunks/remark-rehype"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-rehype/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-rehype/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-hast */ \"(ssr)/./node_modules/mdast-util-to-hast/lib/index.js\");\n/**\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('mdast').Root} MdastRoot\n * @typedef {import('mdast-util-to-hast').Options} Options\n * @typedef {import('unified').Processor<any, any, any, any>} Processor\n *\n * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree\n */ \n// Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(\n/**\n * Plugin that turns markdown into HTML to support rehype.\n *\n * *   If a destination processor is given, that processor runs with a new HTML\n *     (hast) tree (bridge-mode).\n *     As the given processor runs with a hast tree, and rehype plugins support\n *     hast, that means rehype plugins can be used with the given processor.\n *     The hast tree is discarded in the end.\n *     It’s highly unlikely that you want to do this.\n * *   The common case is to not pass a destination processor, in which case the\n *     current processor continues running with a new HTML (hast) tree\n *     (mutate-mode).\n *     As the current processor continues with a hast tree, and rehype plugins\n *     support hast, that means rehype plugins can be used after\n *     `remark-rehype`.\n *     It’s likely that this is what you want to do.\n *\n * @param destination\n *   Optional unified processor.\n * @param options\n *   Options passed to `mdast-util-to-hast`.\n */ const remarkRehype = /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */ function(destination, options) {\n    return destination && \"run\" in destination ? bridge(destination, options) : mutate(destination || options);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (remarkRehype);\n/**\n * Bridge-mode.\n * Runs the destination with the new hast tree.\n *\n * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}\n */ function bridge(destination, options) {\n    return (node, file, next)=>{\n        destination.run((0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(node, options), file, (error)=>{\n            next(error);\n        });\n    };\n}\n/**\n * Mutate-mode.\n * Further plugins run on the hast tree.\n *\n * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}\n */ function mutate(options) {\n    // @ts-expect-error: assume a corresponding node is returned by `toHast`.\n    return (node)=>(0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(node, options);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7OztDQU9DLEdBRXdDO0FBRXpDLHNFQUFzRTtBQUV0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJDLEdBQ0QsTUFBTUMsZUFDSixpSEFBaUgsR0FFL0csU0FBVUMsV0FBVyxFQUFFQyxPQUFPO0lBQzVCLE9BQU9ELGVBQWUsU0FBU0EsY0FDM0JFLE9BQU9GLGFBQWFDLFdBQ3BCRSxPQUFPSCxlQUFlQztBQUM1QjtBQUdKLGlFQUFlRixZQUFZQSxFQUFBO0FBRTNCOzs7OztDQUtDLEdBQ0QsU0FBU0csT0FBT0YsV0FBVyxFQUFFQyxPQUFPO0lBQ2xDLE9BQU8sQ0FBQ0csTUFBTUMsTUFBTUM7UUFDbEJOLFlBQVlPLEdBQUcsQ0FBQ1QsMERBQU1BLENBQUNNLE1BQU1ILFVBQVVJLE1BQU0sQ0FBQ0c7WUFDNUNGLEtBQUtFO1FBQ1A7SUFDRjtBQUNGO0FBRUE7Ozs7O0NBS0MsR0FDRCxTQUFTTCxPQUFPRixPQUFPO0lBQ3JCLHlFQUF5RTtJQUN6RSxPQUFPLENBQUNHLE9BQVNOLDBEQUFNQSxDQUFDTSxNQUFNSDtBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlLWpvdXJuYWwvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9saWIvaW5kZXguanM/NDllOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBIYXN0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBNZGFzdFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8taGFzdCcpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaWZpZWQnKS5Qcm9jZXNzb3I8YW55LCBhbnksIGFueSwgYW55Pn0gUHJvY2Vzc29yXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1oYXN0Jyl9IERvTm90VG91Y2hBc1RoaXNJbXBvcnRJbmNsdWRlc1Jhd0luVHJlZVxuICovXG5cbmltcG9ydCB7dG9IYXN0fSBmcm9tICdtZGFzdC11dGlsLXRvLWhhc3QnXG5cbi8vIE5vdGU6IHRoZSBgPE1kYXN0Um9vdCwgSGFzdFJvb3Q+YCBvdmVybG9hZCBkb2VzbuKAmXQgc2VlbSB0byB3b3JrIDonKFxuXG4vKipcbiAqIFBsdWdpbiB0aGF0IHR1cm5zIG1hcmtkb3duIGludG8gSFRNTCB0byBzdXBwb3J0IHJlaHlwZS5cbiAqXG4gKiAqICAgSWYgYSBkZXN0aW5hdGlvbiBwcm9jZXNzb3IgaXMgZ2l2ZW4sIHRoYXQgcHJvY2Vzc29yIHJ1bnMgd2l0aCBhIG5ldyBIVE1MXG4gKiAgICAgKGhhc3QpIHRyZWUgKGJyaWRnZS1tb2RlKS5cbiAqICAgICBBcyB0aGUgZ2l2ZW4gcHJvY2Vzc29yIHJ1bnMgd2l0aCBhIGhhc3QgdHJlZSwgYW5kIHJlaHlwZSBwbHVnaW5zIHN1cHBvcnRcbiAqICAgICBoYXN0LCB0aGF0IG1lYW5zIHJlaHlwZSBwbHVnaW5zIGNhbiBiZSB1c2VkIHdpdGggdGhlIGdpdmVuIHByb2Nlc3Nvci5cbiAqICAgICBUaGUgaGFzdCB0cmVlIGlzIGRpc2NhcmRlZCBpbiB0aGUgZW5kLlxuICogICAgIEl04oCZcyBoaWdobHkgdW5saWtlbHkgdGhhdCB5b3Ugd2FudCB0byBkbyB0aGlzLlxuICogKiAgIFRoZSBjb21tb24gY2FzZSBpcyB0byBub3QgcGFzcyBhIGRlc3RpbmF0aW9uIHByb2Nlc3NvciwgaW4gd2hpY2ggY2FzZSB0aGVcbiAqICAgICBjdXJyZW50IHByb2Nlc3NvciBjb250aW51ZXMgcnVubmluZyB3aXRoIGEgbmV3IEhUTUwgKGhhc3QpIHRyZWVcbiAqICAgICAobXV0YXRlLW1vZGUpLlxuICogICAgIEFzIHRoZSBjdXJyZW50IHByb2Nlc3NvciBjb250aW51ZXMgd2l0aCBhIGhhc3QgdHJlZSwgYW5kIHJlaHlwZSBwbHVnaW5zXG4gKiAgICAgc3VwcG9ydCBoYXN0LCB0aGF0IG1lYW5zIHJlaHlwZSBwbHVnaW5zIGNhbiBiZSB1c2VkIGFmdGVyXG4gKiAgICAgYHJlbWFyay1yZWh5cGVgLlxuICogICAgIEl04oCZcyBsaWtlbHkgdGhhdCB0aGlzIGlzIHdoYXQgeW91IHdhbnQgdG8gZG8uXG4gKlxuICogQHBhcmFtIGRlc3RpbmF0aW9uXG4gKiAgIE9wdGlvbmFsIHVuaWZpZWQgcHJvY2Vzc29yLlxuICogQHBhcmFtIG9wdGlvbnNcbiAqICAgT3B0aW9ucyBwYXNzZWQgdG8gYG1kYXN0LXV0aWwtdG8taGFzdGAuXG4gKi9cbmNvbnN0IHJlbWFya1JlaHlwZSA9XG4gIC8qKiBAdHlwZSB7KGltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbUHJvY2Vzc29yLCBPcHRpb25zP118W251bGx8dW5kZWZpbmVkLCBPcHRpb25zP118W09wdGlvbnNdfFtdLCBNZGFzdFJvb3Q+KX0gKi9cbiAgKFxuICAgIGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uICYmICdydW4nIGluIGRlc3RpbmF0aW9uXG4gICAgICAgID8gYnJpZGdlKGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICA6IG11dGF0ZShkZXN0aW5hdGlvbiB8fCBvcHRpb25zKVxuICAgIH1cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCByZW1hcmtSZWh5cGVcblxuLyoqXG4gKiBCcmlkZ2UtbW9kZS5cbiAqIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWUuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbUHJvY2Vzc29yLCBPcHRpb25zP10sIE1kYXN0Um9vdD59XG4gKi9cbmZ1bmN0aW9uIGJyaWRnZShkZXN0aW5hdGlvbiwgb3B0aW9ucykge1xuICByZXR1cm4gKG5vZGUsIGZpbGUsIG5leHQpID0+IHtcbiAgICBkZXN0aW5hdGlvbi5ydW4odG9IYXN0KG5vZGUsIG9wdGlvbnMpLCBmaWxlLCAoZXJyb3IpID0+IHtcbiAgICAgIG5leHQoZXJyb3IpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIE11dGF0ZS1tb2RlLlxuICogRnVydGhlciBwbHVnaW5zIHJ1biBvbiB0aGUgaGFzdCB0cmVlLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XXx2b2lkW10sIE1kYXN0Um9vdCwgSGFzdFJvb3Q+fVxuICovXG5mdW5jdGlvbiBtdXRhdGUob3B0aW9ucykge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBhc3N1bWUgYSBjb3JyZXNwb25kaW5nIG5vZGUgaXMgcmV0dXJuZWQgYnkgYHRvSGFzdGAuXG4gIHJldHVybiAobm9kZSkgPT4gdG9IYXN0KG5vZGUsIG9wdGlvbnMpXG59XG4iXSwibmFtZXMiOlsidG9IYXN0IiwicmVtYXJrUmVoeXBlIiwiZGVzdGluYXRpb24iLCJvcHRpb25zIiwiYnJpZGdlIiwibXV0YXRlIiwibm9kZSIsImZpbGUiLCJuZXh0IiwicnVuIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-rehype/lib/index.js\n");

/***/ })

};
;