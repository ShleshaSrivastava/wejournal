"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-position/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/unist-util-position/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pointEnd: () => (/* binding */ pointEnd),\n/* harmony export */   pointStart: () => (/* binding */ pointStart),\n/* harmony export */   position: () => (/* binding */ position)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Position} Position\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n */ /**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n */ /**\n * Get the starting point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */ const pointStart = point(\"start\");\n/**\n * Get the ending point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */ const pointEnd = point(\"end\");\n/**\n * Get the positional info of `node`.\n *\n * @param {NodeLike | Node | null | undefined} [node]\n *   Node.\n * @returns {Position}\n *   Position.\n */ function position(node) {\n    return {\n        start: pointStart(node),\n        end: pointEnd(node)\n    };\n}\n/**\n * Get the positional info of `node`.\n *\n * @param {'start' | 'end'} type\n *   Side.\n * @returns\n *   Getter.\n */ function point(type) {\n    return point;\n    /**\n   * Get the point info of `node` at a bound side.\n   *\n   * @param {NodeLike | Node | null | undefined} [node]\n   * @returns {Point}\n   */ function point(node) {\n        const point = node && node.position && node.position[type] || {};\n        // To do: next major: don’t return points when invalid.\n        return {\n            // @ts-expect-error: in practice, null is allowed.\n            line: point.line || null,\n            // @ts-expect-error: in practice, null is allowed.\n            column: point.column || null,\n            // @ts-expect-error: in practice, null is allowed.\n            offset: point.offset > -1 ? point.offset : null\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Q0FJQyxHQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FFRDs7Ozs7OztDQU9DLEdBQ00sTUFBTUEsYUFBYUMsTUFBTSxTQUFRO0FBRXhDOzs7Ozs7O0NBT0MsR0FDTSxNQUFNQyxXQUFXRCxNQUFNLE9BQU07QUFFcEM7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNFLFNBQVNDLElBQUk7SUFDM0IsT0FBTztRQUFDQyxPQUFPTCxXQUFXSTtRQUFPRSxLQUFLSixTQUFTRTtJQUFLO0FBQ3REO0FBRUE7Ozs7Ozs7Q0FPQyxHQUNELFNBQVNILE1BQU1NLElBQUk7SUFDakIsT0FBT047SUFFUDs7Ozs7R0FLQyxHQUNELFNBQVNBLE1BQU1HLElBQUk7UUFDakIsTUFBTUgsUUFBUSxRQUFTRyxLQUFLRCxRQUFRLElBQUlDLEtBQUtELFFBQVEsQ0FBQ0ksS0FBSyxJQUFLLENBQUM7UUFFakUsdURBQXVEO1FBQ3ZELE9BQU87WUFDTCxrREFBa0Q7WUFDbERDLE1BQU1QLE1BQU1PLElBQUksSUFBSTtZQUNwQixrREFBa0Q7WUFDbERDLFFBQVFSLE1BQU1RLE1BQU0sSUFBSTtZQUN4QixrREFBa0Q7WUFDbERDLFFBQVFULE1BQU1TLE1BQU0sR0FBRyxDQUFDLElBQUlULE1BQU1TLE1BQU0sR0FBRztRQUM3QztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZS1qb3VybmFsLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vbGliL2luZGV4LmpzP2JhNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBQb3NpdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKiBAcHJvcGVydHkge1Bvc2l0aW9uTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtwb3NpdGlvbl1cbiAqXG4gKiBAdHlwZWRlZiBQb3NpdGlvbkxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICpcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbbGluZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbHVtbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqL1xuXG4vKipcbiAqIEdldCB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiAgIE5vZGUuXG4gKiBAcmV0dXJuc1xuICogICBQb2ludC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBvaW50U3RhcnQgPSBwb2ludCgnc3RhcnQnKVxuXG4vKipcbiAqIEdldCB0aGUgZW5kaW5nIHBvaW50IG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnNcbiAqICAgUG9pbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBwb2ludEVuZCA9IHBvaW50KCdlbmQnKVxuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb25hbCBpbmZvIG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaWtlIHwgTm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtub2RlXVxuICogICBOb2RlLlxuICogQHJldHVybnMge1Bvc2l0aW9ufVxuICogICBQb3NpdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIHtzdGFydDogcG9pbnRTdGFydChub2RlKSwgZW5kOiBwb2ludEVuZChub2RlKX1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uYWwgaW5mbyBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIHsnc3RhcnQnIHwgJ2VuZCd9IHR5cGVcbiAqICAgU2lkZS5cbiAqIEByZXR1cm5zXG4gKiAgIEdldHRlci5cbiAqL1xuZnVuY3Rpb24gcG9pbnQodHlwZSkge1xuICByZXR1cm4gcG9pbnRcblxuICAvKipcbiAgICogR2V0IHRoZSBwb2ludCBpbmZvIG9mIGBub2RlYCBhdCBhIGJvdW5kIHNpZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZUxpa2UgfCBOb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW25vZGVdXG4gICAqIEByZXR1cm5zIHtQb2ludH1cbiAgICovXG4gIGZ1bmN0aW9uIHBvaW50KG5vZGUpIHtcbiAgICBjb25zdCBwb2ludCA9IChub2RlICYmIG5vZGUucG9zaXRpb24gJiYgbm9kZS5wb3NpdGlvblt0eXBlXSkgfHwge31cblxuICAgIC8vIFRvIGRvOiBuZXh0IG1ham9yOiBkb27igJl0IHJldHVybiBwb2ludHMgd2hlbiBpbnZhbGlkLlxuICAgIHJldHVybiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBpbiBwcmFjdGljZSwgbnVsbCBpcyBhbGxvd2VkLlxuICAgICAgbGluZTogcG9pbnQubGluZSB8fCBudWxsLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogaW4gcHJhY3RpY2UsIG51bGwgaXMgYWxsb3dlZC5cbiAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uIHx8IG51bGwsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBpbiBwcmFjdGljZSwgbnVsbCBpcyBhbGxvd2VkLlxuICAgICAgb2Zmc2V0OiBwb2ludC5vZmZzZXQgPiAtMSA/IHBvaW50Lm9mZnNldCA6IG51bGxcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwb2ludFN0YXJ0IiwicG9pbnQiLCJwb2ludEVuZCIsInBvc2l0aW9uIiwibm9kZSIsInN0YXJ0IiwiZW5kIiwidHlwZSIsImxpbmUiLCJjb2x1bW4iLCJvZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-position/lib/index.js\n");

/***/ })

};
;