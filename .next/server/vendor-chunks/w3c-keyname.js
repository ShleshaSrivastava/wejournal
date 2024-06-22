"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/w3c-keyname";
exports.ids = ["vendor-chunks/w3c-keyname"];
exports.modules = {

/***/ "(ssr)/./node_modules/w3c-keyname/index.js":
/*!*******************************************!*\
  !*** ./node_modules/w3c-keyname/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   base: () => (/* binding */ base),\n/* harmony export */   keyName: () => (/* binding */ keyName),\n/* harmony export */   shift: () => (/* binding */ shift)\n/* harmony export */ });\nvar base = {\n    8: \"Backspace\",\n    9: \"Tab\",\n    10: \"Enter\",\n    12: \"NumLock\",\n    13: \"Enter\",\n    16: \"Shift\",\n    17: \"Control\",\n    18: \"Alt\",\n    20: \"CapsLock\",\n    27: \"Escape\",\n    32: \" \",\n    33: \"PageUp\",\n    34: \"PageDown\",\n    35: \"End\",\n    36: \"Home\",\n    37: \"ArrowLeft\",\n    38: \"ArrowUp\",\n    39: \"ArrowRight\",\n    40: \"ArrowDown\",\n    44: \"PrintScreen\",\n    45: \"Insert\",\n    46: \"Delete\",\n    59: \";\",\n    61: \"=\",\n    91: \"Meta\",\n    92: \"Meta\",\n    106: \"*\",\n    107: \"+\",\n    108: \",\",\n    109: \"-\",\n    110: \".\",\n    111: \"/\",\n    144: \"NumLock\",\n    145: \"ScrollLock\",\n    160: \"Shift\",\n    161: \"Shift\",\n    162: \"Control\",\n    163: \"Control\",\n    164: \"Alt\",\n    165: \"Alt\",\n    173: \"-\",\n    186: \";\",\n    187: \"=\",\n    188: \",\",\n    189: \"-\",\n    190: \".\",\n    191: \"/\",\n    192: \"`\",\n    219: \"[\",\n    220: \"\\\\\",\n    221: \"]\",\n    222: \"'\"\n};\nvar shift = {\n    48: \")\",\n    49: \"!\",\n    50: \"@\",\n    51: \"#\",\n    52: \"$\",\n    53: \"%\",\n    54: \"^\",\n    55: \"&\",\n    56: \"*\",\n    57: \"(\",\n    59: \":\",\n    61: \"+\",\n    173: \"_\",\n    186: \":\",\n    187: \"+\",\n    188: \"<\",\n    189: \"_\",\n    190: \">\",\n    191: \"?\",\n    192: \"~\",\n    219: \"{\",\n    220: \"|\",\n    221: \"}\",\n    222: '\"'\n};\nvar mac = typeof navigator != \"undefined\" && /Mac/.test(navigator.platform);\nvar ie = typeof navigator != \"undefined\" && /MSIE \\d|Trident\\/(?:[7-9]|\\d{2,})\\..*rv:(\\d+)/.exec(navigator.userAgent);\n// Fill in the digit keys\nfor(var i = 0; i < 10; i++)base[48 + i] = base[96 + i] = String(i);\n// The function keys\nfor(var i = 1; i <= 24; i++)base[i + 111] = \"F\" + i;\n// And the alphabetic keys\nfor(var i = 65; i <= 90; i++){\n    base[i] = String.fromCharCode(i + 32);\n    shift[i] = String.fromCharCode(i);\n}\n// For each code that doesn't have a shift-equivalent, copy the base name\nfor(var code in base)if (!shift.hasOwnProperty(code)) shift[code] = base[code];\nfunction keyName(event) {\n    // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.\n    // On IE, shift effect is never included in `.key`.\n    var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == \"Unidentified\";\n    var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || \"Unidentified\";\n    // Edge sometimes produces wrong names (Issue #3)\n    if (name == \"Esc\") name = \"Escape\";\n    if (name == \"Del\") name = \"Delete\";\n    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/\n    if (name == \"Left\") name = \"ArrowLeft\";\n    if (name == \"Up\") name = \"ArrowUp\";\n    if (name == \"Right\") name = \"ArrowRight\";\n    if (name == \"Down\") name = \"ArrowDown\";\n    return name;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBSUEsT0FBTztJQUNoQixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1AsRUFBQztBQUVNLElBQUlDLFFBQVE7SUFDakIsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1AsRUFBQztBQUVELElBQUlDLE1BQU0sT0FBT0MsYUFBYSxlQUFlLE1BQU1DLElBQUksQ0FBQ0QsVUFBVUUsUUFBUTtBQUMxRSxJQUFJQyxLQUFLLE9BQU9ILGFBQWEsZUFBZSxnREFBZ0RJLElBQUksQ0FBQ0osVUFBVUssU0FBUztBQUVwSCx5QkFBeUI7QUFDekIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBS1QsSUFBSSxDQUFDLEtBQUtTLEVBQUUsR0FBR1QsSUFBSSxDQUFDLEtBQUtTLEVBQUUsR0FBR0MsT0FBT0Q7QUFFbEUsb0JBQW9CO0FBQ3BCLElBQUssSUFBSUEsSUFBSSxHQUFHQSxLQUFLLElBQUlBLElBQUtULElBQUksQ0FBQ1MsSUFBSSxJQUFJLEdBQUcsTUFBTUE7QUFFcEQsMEJBQTBCO0FBQzFCLElBQUssSUFBSUEsSUFBSSxJQUFJQSxLQUFLLElBQUlBLElBQUs7SUFDN0JULElBQUksQ0FBQ1MsRUFBRSxHQUFHQyxPQUFPQyxZQUFZLENBQUNGLElBQUk7SUFDbENSLEtBQUssQ0FBQ1EsRUFBRSxHQUFHQyxPQUFPQyxZQUFZLENBQUNGO0FBQ2pDO0FBRUEseUVBQXlFO0FBQ3pFLElBQUssSUFBSUcsUUFBUVosS0FBTSxJQUFJLENBQUNDLE1BQU1ZLGNBQWMsQ0FBQ0QsT0FBT1gsS0FBSyxDQUFDVyxLQUFLLEdBQUdaLElBQUksQ0FBQ1ksS0FBSztBQUV6RSxTQUFTRSxRQUFRQyxLQUFLO0lBQzNCLHNGQUFzRjtJQUN0RixtREFBbUQ7SUFDbkQsSUFBSUMsWUFBWWQsT0FBT2EsTUFBTUUsT0FBTyxJQUFJRixNQUFNRyxRQUFRLElBQUksQ0FBQ0gsTUFBTUksT0FBTyxJQUFJLENBQUNKLE1BQU1LLE1BQU0sSUFDckZkLE1BQU1TLE1BQU1HLFFBQVEsSUFBSUgsTUFBTU0sR0FBRyxJQUFJTixNQUFNTSxHQUFHLENBQUNDLE1BQU0sSUFBSSxLQUN6RFAsTUFBTU0sR0FBRyxJQUFJO0lBQ2pCLElBQUlFLE9BQU8sQ0FBRVAsYUFBYUQsTUFBTU0sR0FBRyxJQUNqQyxDQUFDTixNQUFNRyxRQUFRLEdBQUdqQixRQUFRRCxJQUFHLENBQUUsQ0FBQ2UsTUFBTVMsT0FBTyxDQUFDLElBQzlDVCxNQUFNTSxHQUFHLElBQUk7SUFDZixpREFBaUQ7SUFDakQsSUFBSUUsUUFBUSxPQUFPQSxPQUFPO0lBQzFCLElBQUlBLFFBQVEsT0FBT0EsT0FBTztJQUMxQixnRkFBZ0Y7SUFDaEYsSUFBSUEsUUFBUSxRQUFRQSxPQUFPO0lBQzNCLElBQUlBLFFBQVEsTUFBTUEsT0FBTztJQUN6QixJQUFJQSxRQUFRLFNBQVNBLE9BQU87SUFDNUIsSUFBSUEsUUFBUSxRQUFRQSxPQUFPO0lBQzNCLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZS1qb3VybmFsLy4vbm9kZV9tb2R1bGVzL3czYy1rZXluYW1lL2luZGV4LmpzPzBmYTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBiYXNlID0ge1xuICA4OiBcIkJhY2tzcGFjZVwiLFxuICA5OiBcIlRhYlwiLFxuICAxMDogXCJFbnRlclwiLFxuICAxMjogXCJOdW1Mb2NrXCIsXG4gIDEzOiBcIkVudGVyXCIsXG4gIDE2OiBcIlNoaWZ0XCIsXG4gIDE3OiBcIkNvbnRyb2xcIixcbiAgMTg6IFwiQWx0XCIsXG4gIDIwOiBcIkNhcHNMb2NrXCIsXG4gIDI3OiBcIkVzY2FwZVwiLFxuICAzMjogXCIgXCIsXG4gIDMzOiBcIlBhZ2VVcFwiLFxuICAzNDogXCJQYWdlRG93blwiLFxuICAzNTogXCJFbmRcIixcbiAgMzY6IFwiSG9tZVwiLFxuICAzNzogXCJBcnJvd0xlZnRcIixcbiAgMzg6IFwiQXJyb3dVcFwiLFxuICAzOTogXCJBcnJvd1JpZ2h0XCIsXG4gIDQwOiBcIkFycm93RG93blwiLFxuICA0NDogXCJQcmludFNjcmVlblwiLFxuICA0NTogXCJJbnNlcnRcIixcbiAgNDY6IFwiRGVsZXRlXCIsXG4gIDU5OiBcIjtcIixcbiAgNjE6IFwiPVwiLFxuICA5MTogXCJNZXRhXCIsXG4gIDkyOiBcIk1ldGFcIixcbiAgMTA2OiBcIipcIixcbiAgMTA3OiBcIitcIixcbiAgMTA4OiBcIixcIixcbiAgMTA5OiBcIi1cIixcbiAgMTEwOiBcIi5cIixcbiAgMTExOiBcIi9cIixcbiAgMTQ0OiBcIk51bUxvY2tcIixcbiAgMTQ1OiBcIlNjcm9sbExvY2tcIixcbiAgMTYwOiBcIlNoaWZ0XCIsXG4gIDE2MTogXCJTaGlmdFwiLFxuICAxNjI6IFwiQ29udHJvbFwiLFxuICAxNjM6IFwiQ29udHJvbFwiLFxuICAxNjQ6IFwiQWx0XCIsXG4gIDE2NTogXCJBbHRcIixcbiAgMTczOiBcIi1cIixcbiAgMTg2OiBcIjtcIixcbiAgMTg3OiBcIj1cIixcbiAgMTg4OiBcIixcIixcbiAgMTg5OiBcIi1cIixcbiAgMTkwOiBcIi5cIixcbiAgMTkxOiBcIi9cIixcbiAgMTkyOiBcImBcIixcbiAgMjE5OiBcIltcIixcbiAgMjIwOiBcIlxcXFxcIixcbiAgMjIxOiBcIl1cIixcbiAgMjIyOiBcIidcIlxufVxuXG5leHBvcnQgdmFyIHNoaWZ0ID0ge1xuICA0ODogXCIpXCIsXG4gIDQ5OiBcIiFcIixcbiAgNTA6IFwiQFwiLFxuICA1MTogXCIjXCIsXG4gIDUyOiBcIiRcIixcbiAgNTM6IFwiJVwiLFxuICA1NDogXCJeXCIsXG4gIDU1OiBcIiZcIixcbiAgNTY6IFwiKlwiLFxuICA1NzogXCIoXCIsXG4gIDU5OiBcIjpcIixcbiAgNjE6IFwiK1wiLFxuICAxNzM6IFwiX1wiLFxuICAxODY6IFwiOlwiLFxuICAxODc6IFwiK1wiLFxuICAxODg6IFwiPFwiLFxuICAxODk6IFwiX1wiLFxuICAxOTA6IFwiPlwiLFxuICAxOTE6IFwiP1wiLFxuICAxOTI6IFwiflwiLFxuICAyMTk6IFwie1wiLFxuICAyMjA6IFwifFwiLFxuICAyMjE6IFwifVwiLFxuICAyMjI6IFwiXFxcIlwiXG59XG5cbnZhciBtYWMgPSB0eXBlb2YgbmF2aWdhdG9yICE9IFwidW5kZWZpbmVkXCIgJiYgL01hYy8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pXG52YXIgaWUgPSB0eXBlb2YgbmF2aWdhdG9yICE9IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgXFxkfFRyaWRlbnRcXC8oPzpbNy05XXxcXGR7Mix9KVxcLi4qcnY6KFxcZCspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbi8vIEZpbGwgaW4gdGhlIGRpZ2l0IGtleXNcbmZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykgYmFzZVs0OCArIGldID0gYmFzZVs5NiArIGldID0gU3RyaW5nKGkpXG5cbi8vIFRoZSBmdW5jdGlvbiBrZXlzXG5mb3IgKHZhciBpID0gMTsgaSA8PSAyNDsgaSsrKSBiYXNlW2kgKyAxMTFdID0gXCJGXCIgKyBpXG5cbi8vIEFuZCB0aGUgYWxwaGFiZXRpYyBrZXlzXG5mb3IgKHZhciBpID0gNjU7IGkgPD0gOTA7IGkrKykge1xuICBiYXNlW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgMzIpXG4gIHNoaWZ0W2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKVxufVxuXG4vLyBGb3IgZWFjaCBjb2RlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2hpZnQtZXF1aXZhbGVudCwgY29weSB0aGUgYmFzZSBuYW1lXG5mb3IgKHZhciBjb2RlIGluIGJhc2UpIGlmICghc2hpZnQuaGFzT3duUHJvcGVydHkoY29kZSkpIHNoaWZ0W2NvZGVdID0gYmFzZVtjb2RlXVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5TmFtZShldmVudCkge1xuICAvLyBPbiBtYWNPUywga2V5cyBoZWxkIHdpdGggU2hpZnQgYW5kIENtZCBkb24ndCByZWZsZWN0IHRoZSBlZmZlY3Qgb2YgU2hpZnQgaW4gYC5rZXlgLlxuICAvLyBPbiBJRSwgc2hpZnQgZWZmZWN0IGlzIG5ldmVyIGluY2x1ZGVkIGluIGAua2V5YC5cbiAgdmFyIGlnbm9yZUtleSA9IG1hYyAmJiBldmVudC5tZXRhS2V5ICYmIGV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5hbHRLZXkgfHxcbiAgICAgIGllICYmIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSAmJiBldmVudC5rZXkubGVuZ3RoID09IDEgfHxcbiAgICAgIGV2ZW50LmtleSA9PSBcIlVuaWRlbnRpZmllZFwiXG4gIHZhciBuYW1lID0gKCFpZ25vcmVLZXkgJiYgZXZlbnQua2V5KSB8fFxuICAgIChldmVudC5zaGlmdEtleSA/IHNoaWZ0IDogYmFzZSlbZXZlbnQua2V5Q29kZV0gfHxcbiAgICBldmVudC5rZXkgfHwgXCJVbmlkZW50aWZpZWRcIlxuICAvLyBFZGdlIHNvbWV0aW1lcyBwcm9kdWNlcyB3cm9uZyBuYW1lcyAoSXNzdWUgIzMpXG4gIGlmIChuYW1lID09IFwiRXNjXCIpIG5hbWUgPSBcIkVzY2FwZVwiXG4gIGlmIChuYW1lID09IFwiRGVsXCIpIG5hbWUgPSBcIkRlbGV0ZVwiXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzg4NjA1NzEvXG4gIGlmIChuYW1lID09IFwiTGVmdFwiKSBuYW1lID0gXCJBcnJvd0xlZnRcIlxuICBpZiAobmFtZSA9PSBcIlVwXCIpIG5hbWUgPSBcIkFycm93VXBcIlxuICBpZiAobmFtZSA9PSBcIlJpZ2h0XCIpIG5hbWUgPSBcIkFycm93UmlnaHRcIlxuICBpZiAobmFtZSA9PSBcIkRvd25cIikgbmFtZSA9IFwiQXJyb3dEb3duXCJcbiAgcmV0dXJuIG5hbWVcbn1cbiJdLCJuYW1lcyI6WyJiYXNlIiwic2hpZnQiLCJtYWMiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwicGxhdGZvcm0iLCJpZSIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY29kZSIsImhhc093blByb3BlcnR5Iiwia2V5TmFtZSIsImV2ZW50IiwiaWdub3JlS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiY3RybEtleSIsImFsdEtleSIsImtleSIsImxlbmd0aCIsIm5hbWUiLCJrZXlDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/w3c-keyname/index.js\n");

/***/ })

};
;