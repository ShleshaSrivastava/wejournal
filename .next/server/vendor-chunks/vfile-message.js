"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-message";
exports.ids = ["vendor-chunks/vfile-message"];
exports.modules = {

/***/ "(ssr)/./node_modules/vfile-message/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile-message/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VFileMessage: () => (/* binding */ VFileMessage)\n/* harmony export */ });\n/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-stringify-position */ \"(ssr)/./node_modules/unist-util-stringify-position/lib/index.js\");\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Position} Position\n * @typedef {import('unist').Point} Point\n * @typedef {object & {type: string, position?: Position | undefined}} NodeLike\n */ \n/**\n * Message.\n */ class VFileMessage extends Error {\n    /**\n   * Create a message for `reason` at `place` from `origin`.\n   *\n   * When an error is passed in as `reason`, the `stack` is copied.\n   *\n   * @param {string | Error | VFileMessage} reason\n   *   Reason for message, uses the stack and message of the error if given.\n   *\n   *   > 👉 **Note**: you should use markdown.\n   * @param {Node | NodeLike | Position | Point | null | undefined} [place]\n   *   Place in file where the message occurred.\n   * @param {string | null | undefined} [origin]\n   *   Place in code where the message originates (example:\n   *   `'my-package:my-rule'` or `'my-rule'`).\n   * @returns\n   *   Instance of `VFileMessage`.\n   */ // To do: next major: expose `undefined` everywhere instead of `null`.\n    constructor(reason, place, origin){\n        /** @type {[string | null, string | null]} */ const parts = [\n            null,\n            null\n        ];\n        /** @type {Position} */ let position = {\n            // @ts-expect-error: we always follows the structure of `position`.\n            start: {\n                line: null,\n                column: null\n            },\n            // @ts-expect-error: \"\n            end: {\n                line: null,\n                column: null\n            }\n        };\n        super();\n        if (typeof place === \"string\") {\n            origin = place;\n            place = undefined;\n        }\n        if (typeof origin === \"string\") {\n            const index = origin.indexOf(\":\");\n            if (index === -1) {\n                parts[1] = origin;\n            } else {\n                parts[0] = origin.slice(0, index);\n                parts[1] = origin.slice(index + 1);\n            }\n        }\n        if (place) {\n            // Node.\n            if (\"type\" in place || \"position\" in place) {\n                if (place.position) {\n                    // To do: next major: deep clone.\n                    // @ts-expect-error: looks like a position.\n                    position = place.position;\n                }\n            } else if (\"start\" in place || \"end\" in place) {\n                // @ts-expect-error: looks like a position.\n                // To do: next major: deep clone.\n                position = place;\n            } else if (\"line\" in place || \"column\" in place) {\n                // To do: next major: deep clone.\n                position.start = place;\n            }\n        }\n        // Fields from `Error`.\n        /**\n     * Serialized positional info of error.\n     *\n     * On normal errors, this would be something like `ParseError`, buit in\n     * `VFile` messages we use this space to show where an error happened.\n     */ this.name = (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)(place) || \"1:1\";\n        /**\n     * Reason for message.\n     *\n     * @type {string}\n     */ this.message = typeof reason === \"object\" ? reason.message : reason;\n        /**\n     * Stack of message.\n     *\n     * This is used by normal errors to show where something happened in\n     * programming code, irrelevant for `VFile` messages,\n     *\n     * @type {string}\n     */ this.stack = \"\";\n        if (typeof reason === \"object\" && reason.stack) {\n            this.stack = reason.stack;\n        }\n        /**\n     * Reason for message.\n     *\n     * > 👉 **Note**: you should use markdown.\n     *\n     * @type {string}\n     */ this.reason = this.message;\n        /* eslint-disable no-unused-expressions */ /**\n     * State of problem.\n     *\n     * * `true` — marks associated file as no longer processable (error)\n     * * `false` — necessitates a (potential) change (warning)\n     * * `null | undefined` — for things that might not need changing (info)\n     *\n     * @type {boolean | null | undefined}\n     */ this.fatal;\n        /**\n     * Starting line of error.\n     *\n     * @type {number | null}\n     */ this.line = position.start.line;\n        /**\n     * Starting column of error.\n     *\n     * @type {number | null}\n     */ this.column = position.start.column;\n        /**\n     * Full unist position.\n     *\n     * @type {Position | null}\n     */ this.position = position;\n        /**\n     * Namespace of message (example: `'my-package'`).\n     *\n     * @type {string | null}\n     */ this.source = parts[0];\n        /**\n     * Category of message (example: `'my-rule'`).\n     *\n     * @type {string | null}\n     */ this.ruleId = parts[1];\n        /**\n     * Path of a file (used throughout the `VFile` ecosystem).\n     *\n     * @type {string | null}\n     */ this.file;\n        // The following fields are “well known”.\n        // Not standard.\n        // Feel free to add other non-standard fields to your messages.\n        /**\n     * Specify the source value that’s being reported, which is deemed\n     * incorrect.\n     *\n     * @type {string | null}\n     */ this.actual;\n        /**\n     * Suggest acceptable values that can be used instead of `actual`.\n     *\n     * @type {Array<string> | null}\n     */ this.expected;\n        /**\n     * Link to docs for the message.\n     *\n     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`\n     * > to `new URL(x)`.\n     *\n     * @type {string | null}\n     */ this.url;\n        /**\n     * Long form description of the message (you should use markdown).\n     *\n     * @type {string | null}\n     */ this.note;\n    /* eslint-enable no-unused-expressions */ }\n}\nVFileMessage.prototype.file = \"\";\nVFileMessage.prototype.name = \"\";\nVFileMessage.prototype.reason = \"\";\nVFileMessage.prototype.message = \"\";\nVFileMessage.prototype.stack = \"\";\nVFileMessage.prototype.fatal = null;\nVFileMessage.prototype.column = null;\nVFileMessage.prototype.line = null;\nVFileMessage.prototype.source = null;\nVFileMessage.prototype.ruleId = null;\nVFileMessage.prototype.position = null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUU4RDtBQUUvRDs7Q0FFQyxHQUNNLE1BQU1DLHFCQUFxQkM7SUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkMsR0FDRCxzRUFBc0U7SUFDdEVDLFlBQVlDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLENBQUU7UUFDakMsMkNBQTJDLEdBQzNDLE1BQU1DLFFBQVE7WUFBQztZQUFNO1NBQUs7UUFDMUIscUJBQXFCLEdBQ3JCLElBQUlDLFdBQVc7WUFDYixtRUFBbUU7WUFDbkVDLE9BQU87Z0JBQUNDLE1BQU07Z0JBQU1DLFFBQVE7WUFBSTtZQUNoQyxzQkFBc0I7WUFDdEJDLEtBQUs7Z0JBQUNGLE1BQU07Z0JBQU1DLFFBQVE7WUFBSTtRQUNoQztRQUVBLEtBQUs7UUFFTCxJQUFJLE9BQU9OLFVBQVUsVUFBVTtZQUM3QkMsU0FBU0Q7WUFDVEEsUUFBUVE7UUFDVjtRQUVBLElBQUksT0FBT1AsV0FBVyxVQUFVO1lBQzlCLE1BQU1RLFFBQVFSLE9BQU9TLE9BQU8sQ0FBQztZQUU3QixJQUFJRCxVQUFVLENBQUMsR0FBRztnQkFDaEJQLEtBQUssQ0FBQyxFQUFFLEdBQUdEO1lBQ2IsT0FBTztnQkFDTEMsS0FBSyxDQUFDLEVBQUUsR0FBR0QsT0FBT1UsS0FBSyxDQUFDLEdBQUdGO2dCQUMzQlAsS0FBSyxDQUFDLEVBQUUsR0FBR0QsT0FBT1UsS0FBSyxDQUFDRixRQUFRO1lBQ2xDO1FBQ0Y7UUFFQSxJQUFJVCxPQUFPO1lBQ1QsUUFBUTtZQUNSLElBQUksVUFBVUEsU0FBUyxjQUFjQSxPQUFPO2dCQUMxQyxJQUFJQSxNQUFNRyxRQUFRLEVBQUU7b0JBQ2xCLGlDQUFpQztvQkFDakMsMkNBQTJDO29CQUMzQ0EsV0FBV0gsTUFBTUcsUUFBUTtnQkFDM0I7WUFDRixPQUVLLElBQUksV0FBV0gsU0FBUyxTQUFTQSxPQUFPO2dCQUMzQywyQ0FBMkM7Z0JBQzNDLGlDQUFpQztnQkFDakNHLFdBQVdIO1lBQ2IsT0FFSyxJQUFJLFVBQVVBLFNBQVMsWUFBWUEsT0FBTztnQkFDN0MsaUNBQWlDO2dCQUNqQ0csU0FBU0MsS0FBSyxHQUFHSjtZQUNuQjtRQUNGO1FBRUEsdUJBQXVCO1FBQ3ZCOzs7OztLQUtDLEdBQ0QsSUFBSSxDQUFDWSxJQUFJLEdBQUdqQixnRkFBaUJBLENBQUNLLFVBQVU7UUFFeEM7Ozs7S0FJQyxHQUNELElBQUksQ0FBQ2EsT0FBTyxHQUFHLE9BQU9kLFdBQVcsV0FBV0EsT0FBT2MsT0FBTyxHQUFHZDtRQUU3RDs7Ozs7OztLQU9DLEdBQ0QsSUFBSSxDQUFDZSxLQUFLLEdBQUc7UUFFYixJQUFJLE9BQU9mLFdBQVcsWUFBWUEsT0FBT2UsS0FBSyxFQUFFO1lBQzlDLElBQUksQ0FBQ0EsS0FBSyxHQUFHZixPQUFPZSxLQUFLO1FBQzNCO1FBRUE7Ozs7OztLQU1DLEdBQ0QsSUFBSSxDQUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDYyxPQUFPO1FBRTFCLHdDQUF3QyxHQUN4Qzs7Ozs7Ozs7S0FRQyxHQUNELElBQUksQ0FBQ0UsS0FBSztRQUVWOzs7O0tBSUMsR0FDRCxJQUFJLENBQUNWLElBQUksR0FBR0YsU0FBU0MsS0FBSyxDQUFDQyxJQUFJO1FBRS9COzs7O0tBSUMsR0FDRCxJQUFJLENBQUNDLE1BQU0sR0FBR0gsU0FBU0MsS0FBSyxDQUFDRSxNQUFNO1FBRW5DOzs7O0tBSUMsR0FDRCxJQUFJLENBQUNILFFBQVEsR0FBR0E7UUFFaEI7Ozs7S0FJQyxHQUNELElBQUksQ0FBQ2EsTUFBTSxHQUFHZCxLQUFLLENBQUMsRUFBRTtRQUV0Qjs7OztLQUlDLEdBQ0QsSUFBSSxDQUFDZSxNQUFNLEdBQUdmLEtBQUssQ0FBQyxFQUFFO1FBRXRCOzs7O0tBSUMsR0FDRCxJQUFJLENBQUNnQixJQUFJO1FBRVQseUNBQXlDO1FBQ3pDLGdCQUFnQjtRQUNoQiwrREFBK0Q7UUFFL0Q7Ozs7O0tBS0MsR0FDRCxJQUFJLENBQUNDLE1BQU07UUFFWDs7OztLQUlDLEdBQ0QsSUFBSSxDQUFDQyxRQUFRO1FBRWI7Ozs7Ozs7S0FPQyxHQUNELElBQUksQ0FBQ0MsR0FBRztRQUVSOzs7O0tBSUMsR0FDRCxJQUFJLENBQUNDLElBQUk7SUFDVCx1Q0FBdUMsR0FDekM7QUFDRjtBQUVBMUIsYUFBYTJCLFNBQVMsQ0FBQ0wsSUFBSSxHQUFHO0FBQzlCdEIsYUFBYTJCLFNBQVMsQ0FBQ1gsSUFBSSxHQUFHO0FBQzlCaEIsYUFBYTJCLFNBQVMsQ0FBQ3hCLE1BQU0sR0FBRztBQUNoQ0gsYUFBYTJCLFNBQVMsQ0FBQ1YsT0FBTyxHQUFHO0FBQ2pDakIsYUFBYTJCLFNBQVMsQ0FBQ1QsS0FBSyxHQUFHO0FBQy9CbEIsYUFBYTJCLFNBQVMsQ0FBQ1IsS0FBSyxHQUFHO0FBQy9CbkIsYUFBYTJCLFNBQVMsQ0FBQ2pCLE1BQU0sR0FBRztBQUNoQ1YsYUFBYTJCLFNBQVMsQ0FBQ2xCLElBQUksR0FBRztBQUM5QlQsYUFBYTJCLFNBQVMsQ0FBQ1AsTUFBTSxHQUFHO0FBQ2hDcEIsYUFBYTJCLFNBQVMsQ0FBQ04sTUFBTSxHQUFHO0FBQ2hDckIsYUFBYTJCLFNBQVMsQ0FBQ3BCLFFBQVEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlLWpvdXJuYWwvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanM/ZWM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb3NpdGlvbn0gUG9zaXRpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9pbnR9IFBvaW50XG4gKiBAdHlwZWRlZiB7b2JqZWN0ICYge3R5cGU6IHN0cmluZywgcG9zaXRpb24/OiBQb3NpdGlvbiB8IHVuZGVmaW5lZH19IE5vZGVMaWtlXG4gKi9cblxuaW1wb3J0IHtzdHJpbmdpZnlQb3NpdGlvbn0gZnJvbSAndW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24nXG5cbi8qKlxuICogTWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZGaWxlTWVzc2FnZSBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG1lc3NhZ2UgZm9yIGByZWFzb25gIGF0IGBwbGFjZWAgZnJvbSBgb3JpZ2luYC5cbiAgICpcbiAgICogV2hlbiBhbiBlcnJvciBpcyBwYXNzZWQgaW4gYXMgYHJlYXNvbmAsIHRoZSBgc3RhY2tgIGlzIGNvcGllZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBFcnJvciB8IFZGaWxlTWVzc2FnZX0gcmVhc29uXG4gICAqICAgUmVhc29uIGZvciBtZXNzYWdlLCB1c2VzIHRoZSBzdGFjayBhbmQgbWVzc2FnZSBvZiB0aGUgZXJyb3IgaWYgZ2l2ZW4uXG4gICAqXG4gICAqICAgPiDwn5GJICoqTm90ZSoqOiB5b3Ugc2hvdWxkIHVzZSBtYXJrZG93bi5cbiAgICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBQb3NpdGlvbiB8IFBvaW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BsYWNlXVxuICAgKiAgIFBsYWNlIGluIGZpbGUgd2hlcmUgdGhlIG1lc3NhZ2Ugb2NjdXJyZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogICBQbGFjZSBpbiBjb2RlIHdoZXJlIHRoZSBtZXNzYWdlIG9yaWdpbmF0ZXMgKGV4YW1wbGU6XG4gICAqICAgYCdteS1wYWNrYWdlOm15LXJ1bGUnYCBvciBgJ215LXJ1bGUnYCkuXG4gICAqIEByZXR1cm5zXG4gICAqICAgSW5zdGFuY2Ugb2YgYFZGaWxlTWVzc2FnZWAuXG4gICAqL1xuICAvLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGB1bmRlZmluZWRgIGV2ZXJ5d2hlcmUgaW5zdGVhZCBvZiBgbnVsbGAuXG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgcGxhY2UsIG9yaWdpbikge1xuICAgIC8qKiBAdHlwZSB7W3N0cmluZyB8IG51bGwsIHN0cmluZyB8IG51bGxdfSAqL1xuICAgIGNvbnN0IHBhcnRzID0gW251bGwsIG51bGxdXG4gICAgLyoqIEB0eXBlIHtQb3NpdGlvbn0gKi9cbiAgICBsZXQgcG9zaXRpb24gPSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBhbHdheXMgZm9sbG93cyB0aGUgc3RydWN0dXJlIG9mIGBwb3NpdGlvbmAuXG4gICAgICBzdGFydDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH0sXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBcIlxuICAgICAgZW5kOiB7bGluZTogbnVsbCwgY29sdW1uOiBudWxsfVxuICAgIH1cblxuICAgIHN1cGVyKClcblxuICAgIGlmICh0eXBlb2YgcGxhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcmlnaW4gPSBwbGFjZVxuICAgICAgcGxhY2UgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHBhcnRzWzFdID0gb3JpZ2luXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0c1swXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgICAgcGFydHNbMV0gPSBvcmlnaW4uc2xpY2UoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwbGFjZSkge1xuICAgICAgLy8gTm9kZS5cbiAgICAgIGlmICgndHlwZScgaW4gcGxhY2UgfHwgJ3Bvc2l0aW9uJyBpbiBwbGFjZSkge1xuICAgICAgICBpZiAocGxhY2UucG9zaXRpb24pIHtcbiAgICAgICAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogZGVlcCBjbG9uZS5cbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBsb29rcyBsaWtlIGEgcG9zaXRpb24uXG4gICAgICAgICAgcG9zaXRpb24gPSBwbGFjZS5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBQb3NpdGlvbi5cbiAgICAgIGVsc2UgaWYgKCdzdGFydCcgaW4gcGxhY2UgfHwgJ2VuZCcgaW4gcGxhY2UpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogbG9va3MgbGlrZSBhIHBvc2l0aW9uLlxuICAgICAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogZGVlcCBjbG9uZS5cbiAgICAgICAgcG9zaXRpb24gPSBwbGFjZVxuICAgICAgfVxuICAgICAgLy8gUG9pbnQuXG4gICAgICBlbHNlIGlmICgnbGluZScgaW4gcGxhY2UgfHwgJ2NvbHVtbicgaW4gcGxhY2UpIHtcbiAgICAgICAgLy8gVG8gZG86IG5leHQgbWFqb3I6IGRlZXAgY2xvbmUuXG4gICAgICAgIHBvc2l0aW9uLnN0YXJ0ID0gcGxhY2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWVsZHMgZnJvbSBgRXJyb3JgLlxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZWQgcG9zaXRpb25hbCBpbmZvIG9mIGVycm9yLlxuICAgICAqXG4gICAgICogT24gbm9ybWFsIGVycm9ycywgdGhpcyB3b3VsZCBiZSBzb21ldGhpbmcgbGlrZSBgUGFyc2VFcnJvcmAsIGJ1aXQgaW5cbiAgICAgKiBgVkZpbGVgIG1lc3NhZ2VzIHdlIHVzZSB0aGlzIHNwYWNlIHRvIHNob3cgd2hlcmUgYW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gc3RyaW5naWZ5UG9zaXRpb24ocGxhY2UpIHx8ICcxOjEnXG5cbiAgICAvKipcbiAgICAgKiBSZWFzb24gZm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubWVzc2FnZSA9IHR5cGVvZiByZWFzb24gPT09ICdvYmplY3QnID8gcmVhc29uLm1lc3NhZ2UgOiByZWFzb25cblxuICAgIC8qKlxuICAgICAqIFN0YWNrIG9mIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgYnkgbm9ybWFsIGVycm9ycyB0byBzaG93IHdoZXJlIHNvbWV0aGluZyBoYXBwZW5lZCBpblxuICAgICAqIHByb2dyYW1taW5nIGNvZGUsIGlycmVsZXZhbnQgZm9yIGBWRmlsZWAgbWVzc2FnZXMsXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhY2sgPSAnJ1xuXG4gICAgaWYgKHR5cGVvZiByZWFzb24gPT09ICdvYmplY3QnICYmIHJlYXNvbi5zdGFjaykge1xuICAgICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYXNvbiBmb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqID4g8J+RiSAqKk5vdGUqKjogeW91IHNob3VsZCB1c2UgbWFya2Rvd24uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucmVhc29uID0gdGhpcy5tZXNzYWdlXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAvKipcbiAgICAgKiBTdGF0ZSBvZiBwcm9ibGVtLlxuICAgICAqXG4gICAgICogKiBgdHJ1ZWAg4oCUIG1hcmtzIGFzc29jaWF0ZWQgZmlsZSBhcyBubyBsb25nZXIgcHJvY2Vzc2FibGUgKGVycm9yKVxuICAgICAqICogYGZhbHNlYCDigJQgbmVjZXNzaXRhdGVzIGEgKHBvdGVudGlhbCkgY2hhbmdlICh3YXJuaW5nKVxuICAgICAqICogYG51bGwgfCB1bmRlZmluZWRgIOKAlCBmb3IgdGhpbmdzIHRoYXQgbWlnaHQgbm90IG5lZWQgY2hhbmdpbmcgKGluZm8pXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5mYXRhbFxuXG4gICAgLyoqXG4gICAgICogU3RhcnRpbmcgbGluZSBvZiBlcnJvci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXIgfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluZSA9IHBvc2l0aW9uLnN0YXJ0LmxpbmVcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0aW5nIGNvbHVtbiBvZiBlcnJvci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXIgfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY29sdW1uID0gcG9zaXRpb24uc3RhcnQuY29sdW1uXG5cbiAgICAvKipcbiAgICAgKiBGdWxsIHVuaXN0IHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge1Bvc2l0aW9uIHwgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cblxuICAgIC8qKlxuICAgICAqIE5hbWVzcGFjZSBvZiBtZXNzYWdlIChleGFtcGxlOiBgJ215LXBhY2thZ2UnYCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IHBhcnRzWzBdXG5cbiAgICAvKipcbiAgICAgKiBDYXRlZ29yeSBvZiBtZXNzYWdlIChleGFtcGxlOiBgJ215LXJ1bGUnYCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG5cbiAgICAvKipcbiAgICAgKiBQYXRoIG9mIGEgZmlsZSAodXNlZCB0aHJvdWdob3V0IHRoZSBgVkZpbGVgIGVjb3N5c3RlbSkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmZpbGVcblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIGFyZSDigJx3ZWxsIGtub3du4oCdLlxuICAgIC8vIE5vdCBzdGFuZGFyZC5cbiAgICAvLyBGZWVsIGZyZWUgdG8gYWRkIG90aGVyIG5vbi1zdGFuZGFyZCBmaWVsZHMgdG8geW91ciBtZXNzYWdlcy5cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgdGhlIHNvdXJjZSB2YWx1ZSB0aGF04oCZcyBiZWluZyByZXBvcnRlZCwgd2hpY2ggaXMgZGVlbWVkXG4gICAgICogaW5jb3JyZWN0LlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IG51bGx9XG4gICAgICovXG4gICAgdGhpcy5hY3R1YWxcblxuICAgIC8qKlxuICAgICAqIFN1Z2dlc3QgYWNjZXB0YWJsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGBhY3R1YWxgLlxuICAgICAqXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz4gfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZWN0ZWRcblxuICAgIC8qKlxuICAgICAqIExpbmsgdG8gZG9jcyBmb3IgdGhlIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiA+IPCfkYkgKipOb3RlKio6IHRoaXMgbXVzdCBiZSBhbiBhYnNvbHV0ZSBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFzIGB4YFxuICAgICAqID4gdG8gYG5ldyBVUkwoeClgLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IG51bGx9XG4gICAgICovXG4gICAgdGhpcy51cmxcblxuICAgIC8qKlxuICAgICAqIExvbmcgZm9ybSBkZXNjcmlwdGlvbiBvZiB0aGUgbWVzc2FnZSAoeW91IHNob3VsZCB1c2UgbWFya2Rvd24pLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IG51bGx9XG4gICAgICovXG4gICAgdGhpcy5ub3RlXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgfVxufVxuXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmZpbGUgPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5uYW1lID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUucmVhc29uID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUubWVzc2FnZSA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnN0YWNrID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuZmF0YWwgPSBudWxsXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmNvbHVtbiA9IG51bGxcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUubGluZSA9IG51bGxcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuc291cmNlID0gbnVsbFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5ydWxlSWQgPSBudWxsXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnBvc2l0aW9uID0gbnVsbFxuIl0sIm5hbWVzIjpbInN0cmluZ2lmeVBvc2l0aW9uIiwiVkZpbGVNZXNzYWdlIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsInBsYWNlIiwib3JpZ2luIiwicGFydHMiLCJwb3NpdGlvbiIsInN0YXJ0IiwibGluZSIsImNvbHVtbiIsImVuZCIsInVuZGVmaW5lZCIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsImZhdGFsIiwic291cmNlIiwicnVsZUlkIiwiZmlsZSIsImFjdHVhbCIsImV4cGVjdGVkIiwidXJsIiwibm90ZSIsInByb3RvdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/vfile-message/lib/index.js\n");

/***/ })

};
;