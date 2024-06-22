"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/mdast-util-phrasing/node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('unist-util-is').AssertPredicate<PhrasingContent>} AssertPredicatePhrasing\n */ \n/**\n * Check if the given value is *phrasing content*.\n *\n * @param\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */ const phrasing = /** @type {AssertPredicatePhrasing} */ (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n    \"break\",\n    \"delete\",\n    \"emphasis\",\n    \"footnote\",\n    \"footnoteReference\",\n    \"image\",\n    \"imageReference\",\n    \"inlineCode\",\n    \"link\",\n    \"linkReference\",\n    \"strong\",\n    \"text\"\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0NBR0MsR0FFb0M7QUFFckM7Ozs7Ozs7Q0FPQyxHQUNNLE1BQU1DLFdBQVcsb0NBQW9DLEdBQzFERCxzREFBT0EsQ0FBQztJQUNOO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELEVBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZS1qb3VybmFsLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtcGhyYXNpbmcvbGliL2luZGV4LmpzP2FjZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBocmFzaW5nQ29udGVudH0gUGhyYXNpbmdDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuQXNzZXJ0UHJlZGljYXRlPFBocmFzaW5nQ29udGVudD59IEFzc2VydFByZWRpY2F0ZVBocmFzaW5nXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyAqcGhyYXNpbmcgY29udGVudCouXG4gKlxuICogQHBhcmFtXG4gKiAgIFRoaW5nIHRvIGNoZWNrLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBgdmFsdWVgIGlzIHBocmFzaW5nIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBwaHJhc2luZyA9IC8qKiBAdHlwZSB7QXNzZXJ0UHJlZGljYXRlUGhyYXNpbmd9ICovIChcbiAgY29udmVydChbXG4gICAgJ2JyZWFrJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZW1waGFzaXMnLFxuICAgICdmb290bm90ZScsXG4gICAgJ2Zvb3Rub3RlUmVmZXJlbmNlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbWFnZVJlZmVyZW5jZScsXG4gICAgJ2lubGluZUNvZGUnLFxuICAgICdsaW5rJyxcbiAgICAnbGlua1JlZmVyZW5jZScsXG4gICAgJ3N0cm9uZycsXG4gICAgJ3RleHQnXG4gIF0pXG4pXG4iXSwibmFtZXMiOlsiY29udmVydCIsInBocmFzaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-phrasing/node_modules/unist-util-is/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/node_modules/unist-util-is/lib/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   is: () => (/* binding */ is)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n */ /**\n * @typedef {Record<string, unknown>} Props\n * @typedef {null | undefined | string | Props | TestFunctionAnything | Array<string | Props | TestFunctionAnything>} Test\n *   Check for an arbitrary node, unaware of TypeScript inferral.\n *\n * @callback TestFunctionAnything\n *   Check if a node passes a test, unaware of TypeScript inferral.\n * @param {unknown} this\n *   The given context.\n * @param {Node} node\n *   A node.\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean | void}\n *   Whether this node passes the test.\n */ /**\n * @template {Node} Kind\n *   Node type.\n * @typedef {Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind> | Array<Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind>>} PredicateTest\n *   Check for a node that can be inferred by TypeScript.\n */ /**\n * Check if a node passes a certain test.\n *\n * @template {Node} Kind\n *   Node type.\n * @callback TestFunctionPredicate\n *   Complex test function for a node that can be inferred by TypeScript.\n * @param {Node} node\n *   A node.\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {node is Kind}\n *   Whether this node passes the test.\n */ /**\n * @callback AssertAnything\n *   Check that an arbitrary value is a node, unaware of TypeScript inferral.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean}\n *   Whether this is a node and passes a test.\n */ /**\n * Check if a node is a node and passes a certain node test.\n *\n * @template {Node} Kind\n *   Node type.\n * @callback AssertPredicate\n *   Check that an arbitrary value is a specific node, aware of TypeScript.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {node is Kind}\n *   Whether this is a node and passes a test.\n */ /**\n * Check if `node` is a `Node` and whether it passes the given test.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @param test\n *   A check for a specific node.\n * @param index\n *   The node’s position in its parent.\n * @param parent\n *   The node’s parent.\n * @returns\n *   Whether `node` is a node and passes a test.\n */ const is = /**\n   * @type {(\n   *   (() => false) &\n   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index: number, parent: Parent, context?: unknown) => node is Kind) &\n   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index?: null | undefined, parent?: null | undefined, context?: unknown) => node is Kind) &\n   *   ((node: unknown, test: Test, index: number, parent: Parent, context?: unknown) => boolean) &\n   *   ((node: unknown, test?: Test, index?: null | undefined, parent?: null | undefined, context?: unknown) => boolean)\n   * )}\n   */ /**\n     * @param {unknown} [node]\n     * @param {Test} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parent | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */ // eslint-disable-next-line max-params\nfunction is(node, test, index, parent, context) {\n    const check = convert(test);\n    if (index !== undefined && index !== null && (typeof index !== \"number\" || index < 0 || index === Number.POSITIVE_INFINITY)) {\n        throw new Error(\"Expected positive finite index\");\n    }\n    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {\n        throw new Error(\"Expected parent node\");\n    }\n    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {\n        throw new Error(\"Expected both parent and index\");\n    }\n    // @ts-expect-error Looks like a node.\n    return node && node.type && typeof node.type === \"string\" ? Boolean(check.call(context, node, index, parent)) : false;\n};\n/**\n * Generate an assertion from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * a `node`, `index`, and `parent`.\n *\n * @param test\n *   *   when nullish, checks if `node` is a `Node`.\n *   *   when `string`, works like passing `(node) => node.type === test`.\n *   *   when `function` checks if function passed the node is true.\n *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.\n *   *   when `array`, checks if any one of the subtests pass.\n * @returns\n *   An assertion.\n */ const convert = /**\n   * @type {(\n   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &\n   *   ((test?: Test) => AssertAnything)\n   * )}\n   */ /**\n     * @param {Test} [test]\n     * @returns {AssertAnything}\n     */ function(test) {\n    if (test === undefined || test === null) {\n        return ok;\n    }\n    if (typeof test === \"string\") {\n        return typeFactory(test);\n    }\n    if (typeof test === \"object\") {\n        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);\n    }\n    if (typeof test === \"function\") {\n        return castFactory(test);\n    }\n    throw new Error(\"Expected function, string, or object as test\");\n};\n/**\n * @param {Array<string | Props | TestFunctionAnything>} tests\n * @returns {AssertAnything}\n */ function anyFactory(tests) {\n    /** @type {Array<AssertAnything>} */ const checks = [];\n    let index = -1;\n    while(++index < tests.length){\n        checks[index] = convert(tests[index]);\n    }\n    return castFactory(any);\n    /**\n   * @this {unknown}\n   * @param {Array<unknown>} parameters\n   * @returns {boolean}\n   */ function any(...parameters) {\n        let index = -1;\n        while(++index < checks.length){\n            if (checks[index].call(this, ...parameters)) return true;\n        }\n        return false;\n    }\n}\n/**\n * Turn an object into a test for a node with a certain fields.\n *\n * @param {Props} check\n * @returns {AssertAnything}\n */ function propsFactory(check) {\n    return castFactory(all);\n    /**\n   * @param {Node} node\n   * @returns {boolean}\n   */ function all(node) {\n        /** @type {string} */ let key;\n        for(key in check){\n            // @ts-expect-error: hush, it sure works as an index.\n            if (node[key] !== check[key]) return false;\n        }\n        return true;\n    }\n}\n/**\n * Turn a string into a test for a node with a certain type.\n *\n * @param {string} check\n * @returns {AssertAnything}\n */ function typeFactory(check) {\n    return castFactory(type);\n    /**\n   * @param {Node} node\n   */ function type(node) {\n        return node && node.type === check;\n    }\n}\n/**\n * Turn a custom test into a test for a node that passes that test.\n *\n * @param {TestFunctionAnything} check\n * @returns {AssertAnything}\n */ function castFactory(check) {\n    return assertion;\n    /**\n   * @this {unknown}\n   * @param {unknown} node\n   * @param {Array<unknown>} parameters\n   * @returns {boolean}\n   */ function assertion(node, ...parameters) {\n        return Boolean(node && typeof node === \"object\" && \"type\" in node && // @ts-expect-error: fine.\n        Boolean(check.call(this, node, ...parameters)));\n    }\n}\nfunction ok() {\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0NBR0MsR0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkMsR0FFRDs7Ozs7Q0FLQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQyxHQUVEOzs7Ozs7Ozs7OztDQVdDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxHQUNNLE1BQU1BLEtBQ1g7Ozs7Ozs7O0dBUUMsR0FFQzs7Ozs7OztLQU9DLEdBQ0Qsc0NBQXNDO0FBQ3RDLFNBQVNBLEdBQUdDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztJQUM1QyxNQUFNQyxRQUFRQyxRQUFRTDtJQUV0QixJQUNFQyxVQUFVSyxhQUNWTCxVQUFVLFFBQ1QsUUFBT0EsVUFBVSxZQUNoQkEsUUFBUSxLQUNSQSxVQUFVTSxPQUFPQyxpQkFBaUIsR0FDcEM7UUFDQSxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxJQUNFUCxXQUFXSSxhQUNYSixXQUFXLFFBQ1YsRUFBQ0osR0FBR0ksV0FBVyxDQUFDQSxPQUFPUSxRQUFRLEdBQ2hDO1FBQ0EsTUFBTSxJQUFJRCxNQUFNO0lBQ2xCO0lBRUEsSUFDRSxDQUFDUCxXQUFXSSxhQUFhSixXQUFXLElBQUcsTUFDdENELENBQUFBLFVBQVVLLGFBQWFMLFVBQVUsSUFBRyxHQUNyQztRQUNBLE1BQU0sSUFBSVEsTUFBTTtJQUNsQjtJQUVBLHNDQUFzQztJQUN0QyxPQUFPVixRQUFRQSxLQUFLWSxJQUFJLElBQUksT0FBT1osS0FBS1ksSUFBSSxLQUFLLFdBQzdDQyxRQUFRUixNQUFNUyxJQUFJLENBQUNWLFNBQVNKLE1BQU1FLE9BQU9DLFdBQ3pDO0FBQ04sRUFDRDtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyxHQUNNLE1BQU1HLFVBQ1g7Ozs7O0dBS0MsR0FFQzs7O0tBR0MsR0FDRCxTQUFVTCxJQUFJO0lBQ1osSUFBSUEsU0FBU00sYUFBYU4sU0FBUyxNQUFNO1FBQ3ZDLE9BQU9jO0lBQ1Q7SUFFQSxJQUFJLE9BQU9kLFNBQVMsVUFBVTtRQUM1QixPQUFPZSxZQUFZZjtJQUNyQjtJQUVBLElBQUksT0FBT0EsU0FBUyxVQUFVO1FBQzVCLE9BQU9nQixNQUFNQyxPQUFPLENBQUNqQixRQUFRa0IsV0FBV2xCLFFBQVFtQixhQUFhbkI7SUFDL0Q7SUFFQSxJQUFJLE9BQU9BLFNBQVMsWUFBWTtRQUM5QixPQUFPb0IsWUFBWXBCO0lBQ3JCO0lBRUEsTUFBTSxJQUFJUyxNQUFNO0FBQ2xCLEVBQ0Q7QUFFSDs7O0NBR0MsR0FDRCxTQUFTUyxXQUFXRyxLQUFLO0lBQ3ZCLGtDQUFrQyxHQUNsQyxNQUFNQyxTQUFTLEVBQUU7SUFDakIsSUFBSXJCLFFBQVEsQ0FBQztJQUViLE1BQU8sRUFBRUEsUUFBUW9CLE1BQU1FLE1BQU0sQ0FBRTtRQUM3QkQsTUFBTSxDQUFDckIsTUFBTSxHQUFHSSxRQUFRZ0IsS0FBSyxDQUFDcEIsTUFBTTtJQUN0QztJQUVBLE9BQU9tQixZQUFZSTtJQUVuQjs7OztHQUlDLEdBQ0QsU0FBU0EsSUFBSSxHQUFHQyxVQUFVO1FBQ3hCLElBQUl4QixRQUFRLENBQUM7UUFFYixNQUFPLEVBQUVBLFFBQVFxQixPQUFPQyxNQUFNLENBQUU7WUFDOUIsSUFBSUQsTUFBTSxDQUFDckIsTUFBTSxDQUFDWSxJQUFJLENBQUMsSUFBSSxLQUFLWSxhQUFhLE9BQU87UUFDdEQ7UUFFQSxPQUFPO0lBQ1Q7QUFDRjtBQUVBOzs7OztDQUtDLEdBQ0QsU0FBU04sYUFBYWYsS0FBSztJQUN6QixPQUFPZ0IsWUFBWU07SUFFbkI7OztHQUdDLEdBQ0QsU0FBU0EsSUFBSTNCLElBQUk7UUFDZixtQkFBbUIsR0FDbkIsSUFBSTRCO1FBRUosSUFBS0EsT0FBT3ZCLE1BQU87WUFDakIscURBQXFEO1lBQ3JELElBQUlMLElBQUksQ0FBQzRCLElBQUksS0FBS3ZCLEtBQUssQ0FBQ3VCLElBQUksRUFBRSxPQUFPO1FBQ3ZDO1FBRUEsT0FBTztJQUNUO0FBQ0Y7QUFFQTs7Ozs7Q0FLQyxHQUNELFNBQVNaLFlBQVlYLEtBQUs7SUFDeEIsT0FBT2dCLFlBQVlUO0lBRW5COztHQUVDLEdBQ0QsU0FBU0EsS0FBS1osSUFBSTtRQUNoQixPQUFPQSxRQUFRQSxLQUFLWSxJQUFJLEtBQUtQO0lBQy9CO0FBQ0Y7QUFFQTs7Ozs7Q0FLQyxHQUNELFNBQVNnQixZQUFZaEIsS0FBSztJQUN4QixPQUFPd0I7SUFFUDs7Ozs7R0FLQyxHQUNELFNBQVNBLFVBQVU3QixJQUFJLEVBQUUsR0FBRzBCLFVBQVU7UUFDcEMsT0FBT2IsUUFDTGIsUUFDRSxPQUFPQSxTQUFTLFlBQ2hCLFVBQVVBLFFBQ1YsMEJBQTBCO1FBQzFCYSxRQUFRUixNQUFNUyxJQUFJLENBQUMsSUFBSSxFQUFFZCxTQUFTMEI7SUFFeEM7QUFDRjtBQUVBLFNBQVNYO0lBQ1AsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Utam91cm5hbC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXBocmFzaW5nL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2xpYi9pbmRleC5qcz9mMDQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IFByb3BzXG4gKiBAdHlwZWRlZiB7bnVsbCB8IHVuZGVmaW5lZCB8IHN0cmluZyB8IFByb3BzIHwgVGVzdEZ1bmN0aW9uQW55dGhpbmcgfCBBcnJheTxzdHJpbmcgfCBQcm9wcyB8IFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gVGVzdFxuICogICBDaGVjayBmb3IgYW4gYXJiaXRyYXJ5IG5vZGUsIHVuYXdhcmUgb2YgVHlwZVNjcmlwdCBpbmZlcnJhbC5cbiAqXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqICAgQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3QsIHVuYXdhcmUgb2YgVHlwZVNjcmlwdCBpbmZlcnJhbC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpc1xuICogICBUaGUgZ2l2ZW4gY29udGV4dC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogICBBIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbiB8IHZvaWR9XG4gKiAgIFdoZXRoZXIgdGhpcyBub2RlIHBhc3NlcyB0aGUgdGVzdC5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gS2luZFxuICogICBOb2RlIHR5cGUuXG4gKiBAdHlwZWRlZiB7S2luZFsndHlwZSddIHwgUGFydGlhbDxLaW5kPiB8IFRlc3RGdW5jdGlvblByZWRpY2F0ZTxLaW5kPiB8IEFycmF5PEtpbmRbJ3R5cGUnXSB8IFBhcnRpYWw8S2luZD4gfCBUZXN0RnVuY3Rpb25QcmVkaWNhdGU8S2luZD4+fSBQcmVkaWNhdGVUZXN0XG4gKiAgIENoZWNrIGZvciBhIG5vZGUgdGhhdCBjYW4gYmUgaW5mZXJyZWQgYnkgVHlwZVNjcmlwdC5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSBjZXJ0YWluIHRlc3QuXG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBLaW5kXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25QcmVkaWNhdGVcbiAqICAgQ29tcGxleCB0ZXN0IGZ1bmN0aW9uIGZvciBhIG5vZGUgdGhhdCBjYW4gYmUgaW5mZXJyZWQgYnkgVHlwZVNjcmlwdC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogICBBIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBLaW5kfVxuICogICBXaGV0aGVyIHRoaXMgbm9kZSBwYXNzZXMgdGhlIHRlc3QuXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQXNzZXJ0QW55dGhpbmdcbiAqICAgQ2hlY2sgdGhhdCBhbiBhcmJpdHJhcnkgdmFsdWUgaXMgYSBub2RlLCB1bmF3YXJlIG9mIFR5cGVTY3JpcHQgaW5mZXJyYWwuXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogICBBbnl0aGluZyAodHlwaWNhbGx5IGEgbm9kZSkuXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciB0aGlzIGlzIGEgbm9kZSBhbmQgcGFzc2VzIGEgdGVzdC5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhIG5vZGUgYW5kIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0LlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gS2luZFxuICogICBOb2RlIHR5cGUuXG4gKiBAY2FsbGJhY2sgQXNzZXJ0UHJlZGljYXRlXG4gKiAgIENoZWNrIHRoYXQgYW4gYXJiaXRyYXJ5IHZhbHVlIGlzIGEgc3BlY2lmaWMgbm9kZSwgYXdhcmUgb2YgVHlwZVNjcmlwdC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiAgIEFueXRoaW5nICh0eXBpY2FsbHkgYSBub2RlKS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtub2RlIGlzIEtpbmR9XG4gKiAgIFdoZXRoZXIgdGhpcyBpcyBhIG5vZGUgYW5kIHBhc3NlcyBhIHRlc3QuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBgbm9kZWAgaXMgYSBgTm9kZWAgYW5kIHdoZXRoZXIgaXQgcGFzc2VzIHRoZSBnaXZlbiB0ZXN0LlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiAgIFRoaW5nIHRvIGNoZWNrLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHBhcmFtIHRlc3RcbiAqICAgQSBjaGVjayBmb3IgYSBzcGVjaWZpYyBub2RlLlxuICogQHBhcmFtIGluZGV4XG4gKiAgIFRoZSBub2Rl4oCZcyBwb3NpdGlvbiBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHBhcmVudFxuICogICBUaGUgbm9kZeKAmXMgcGFyZW50LlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBgbm9kZWAgaXMgYSBub2RlIGFuZCBwYXNzZXMgYSB0ZXN0LlxuICovXG5leHBvcnQgY29uc3QgaXMgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoKCkgPT4gZmFsc2UpICZcbiAgICogICAoPEtpbmQgZXh0ZW5kcyBOb2RlID0gTm9kZT4obm9kZTogdW5rbm93biwgdGVzdDogUHJlZGljYXRlVGVzdDxLaW5kPiwgaW5kZXg6IG51bWJlciwgcGFyZW50OiBQYXJlbnQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIEtpbmQpICZcbiAgICogICAoPEtpbmQgZXh0ZW5kcyBOb2RlID0gTm9kZT4obm9kZTogdW5rbm93biwgdGVzdDogUHJlZGljYXRlVGVzdDxLaW5kPiwgaW5kZXg/OiBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBLaW5kKSAmXG4gICAqICAgKChub2RlOiB1bmtub3duLCB0ZXN0OiBUZXN0LCBpbmRleDogbnVtYmVyLCBwYXJlbnQ6IFBhcmVudCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pICZcbiAgICogICAoKG5vZGU6IHVua25vd24sIHRlc3Q/OiBUZXN0LCBpbmRleD86IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBib29sZWFuKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtpbmRleF1cbiAgICAgKiBAcGFyYW0ge1BhcmVudCB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIGlzKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICBpbmRleCA8IDAgfHxcbiAgICAgICAgICBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgKCFpcyhwYXJlbnQpIHx8ICFwYXJlbnQuY2hpbGRyZW4pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHBhcmVudCA9PT0gbnVsbCkgIT09XG4gICAgICAgIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYm90aCBwYXJlbnQgYW5kIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IEJvb2xlYW4oY2hlY2suY2FsbChjb250ZXh0LCBub2RlLCBpbmRleCwgcGFyZW50KSlcbiAgICAgICAgOiBmYWxzZVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGFzc2VydGlvbiBmcm9tIGEgdGVzdC5cbiAqXG4gKiBVc2VmdWwgaWYgeW914oCZcmUgZ29pbmcgdG8gdGVzdCBtYW55IG5vZGVzLCBmb3IgZXhhbXBsZSB3aGVuIGNyZWF0aW5nIGFcbiAqIHV0aWxpdHkgd2hlcmUgc29tZXRoaW5nIGVsc2UgcGFzc2VzIGEgY29tcGF0aWJsZSB0ZXN0LlxuICpcbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uIGlzIGEgYml0IGZhc3RlciBiZWNhdXNlIGl0IGV4cGVjdHMgdmFsaWQgaW5wdXQgb25seTpcbiAqIGEgYG5vZGVgLCBgaW5kZXhgLCBhbmQgYHBhcmVudGAuXG4gKlxuICogQHBhcmFtIHRlc3RcbiAqICAgKiAgIHdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAqICAgKiAgIHdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gdGVzdGAuXG4gKiAgICogICB3aGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICogICAqICAgd2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICogICAqICAgd2hlbiBgYXJyYXlgLCBjaGVja3MgaWYgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAqIEByZXR1cm5zXG4gKiAgIEFuIGFzc2VydGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPEtpbmQgZXh0ZW5kcyBOb2RlPih0ZXN0OiBQcmVkaWNhdGVUZXN0PEtpbmQ+KSA9PiBBc3NlcnRQcmVkaWNhdGU8S2luZD4pICZcbiAgICogICAoKHRlc3Q/OiBUZXN0KSA9PiBBc3NlcnRBbnl0aGluZylcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGVzdCkge1xuICAgICAgaWYgKHRlc3QgPT09IHVuZGVmaW5lZCB8fCB0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBva1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRlc3QpID8gYW55RmFjdG9yeSh0ZXN0KSA6IHByb3BzRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNhc3RGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgUHJvcHMgfCBUZXN0RnVuY3Rpb25Bbnl0aGluZz59IHRlc3RzXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxBc3NlcnRBbnl0aGluZz59ICovXG4gIGNvbnN0IGNoZWNrcyA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYW55KVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHtBcnJheTx1bmtub3duPn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFueSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uY2FsbCh0aGlzLCAuLi5wYXJhbWV0ZXJzKSkgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYW4gb2JqZWN0IGludG8gYSB0ZXN0IGZvciBhIG5vZGUgd2l0aCBhIGNlcnRhaW4gZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7UHJvcHN9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHByb3BzRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkoYWxsKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbGwobm9kZSkge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBrZXlcblxuICAgIGZvciAoa2V5IGluIGNoZWNrKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBodXNoLCBpdCBzdXJlIHdvcmtzIGFzIGFuIGluZGV4LlxuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gY2hlY2tba2V5XSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSBzdHJpbmcgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB3aXRoIGEgY2VydGFpbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiB0eXBlRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkodHlwZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09IGNoZWNrXG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGEgY3VzdG9tIHRlc3QgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB0aGF0IHBhc3NlcyB0aGF0IHRlc3QuXG4gKlxuICogQHBhcmFtIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gY2FzdEZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGFzc2VydGlvblxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gICAqIEBwYXJhbSB7QXJyYXk8dW5rbm93bj59IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhc3NlcnRpb24obm9kZSwgLi4ucGFyYW1ldGVycykge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgbm9kZSAmJlxuICAgICAgICB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgJ3R5cGUnIGluIG5vZGUgJiZcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogZmluZS5cbiAgICAgICAgQm9vbGVhbihjaGVjay5jYWxsKHRoaXMsIG5vZGUsIC4uLnBhcmFtZXRlcnMpKVxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiJdLCJuYW1lcyI6WyJpcyIsIm5vZGUiLCJ0ZXN0IiwiaW5kZXgiLCJwYXJlbnQiLCJjb250ZXh0IiwiY2hlY2siLCJjb252ZXJ0IiwidW5kZWZpbmVkIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJFcnJvciIsImNoaWxkcmVuIiwidHlwZSIsIkJvb2xlYW4iLCJjYWxsIiwib2siLCJ0eXBlRmFjdG9yeSIsIkFycmF5IiwiaXNBcnJheSIsImFueUZhY3RvcnkiLCJwcm9wc0ZhY3RvcnkiLCJjYXN0RmFjdG9yeSIsInRlc3RzIiwiY2hlY2tzIiwibGVuZ3RoIiwiYW55IiwicGFyYW1ldGVycyIsImFsbCIsImtleSIsImFzc2VydGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-phrasing/node_modules/unist-util-is/lib/index.js\n");

/***/ })

};
;