"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-prefers-color-scheme";
exports.ids = ["vendor-chunks/use-prefers-color-scheme"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-prefers-color-scheme/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/use-prefers-color-scheme/dist/index.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ d),\n/* harmony export */   usePrefersColorScheme: () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar a = ()=>{\n    let [c, i] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>{\n        if (true) return \"no-preference\";\n        let r = window.matchMedia(\"(prefers-color-scheme: dark)\"), e = window.matchMedia(\"(prefers-color-scheme: light)\");\n        return r.matches ? \"dark\" : e.matches ? \"light\" : \"no-preference\";\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        if (typeof window.matchMedia != \"function\") return;\n        let r = window.matchMedia(\"(prefers-color-scheme: dark)\"), e = window.matchMedia(\"(prefers-color-scheme: light)\");\n        if (typeof e.addEventListener == \"function\") {\n            let t = ({ matches: o })=>{\n                o && i(\"dark\");\n            }, s = ({ matches: o })=>{\n                o && i(\"light\");\n            };\n            return r.addEventListener(\"change\", t), e.addEventListener(\"change\", s), ()=>{\n                r.removeEventListener(\"change\", t), e.removeEventListener(\"change\", s);\n            };\n        }\n        if (typeof e.addListener == \"function\") {\n            let t = ()=>i(r.matches ? \"dark\" : e.matches ? \"light\" : \"no-preference\");\n            return r.addListener(t), e.addListener(t), ()=>{\n                r.removeListener(t), e.removeListener(t);\n            };\n        }\n    }, []), c;\n}, d = a;\n //# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXByZWZlcnMtY29sb3Itc2NoZW1lL2Rpc3QvaW5kZXguZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0I7QUFBQSxJQUFJQyxJQUFFO0lBQUssSUFBRyxDQUFDQyxHQUFFQyxFQUFFLEdBQUNILDJDQUFVLENBQUM7UUFBSyxJQUFHLElBQWlCLEVBQUMsT0FBTTtRQUFnQixJQUFJSyxJQUFFQyxPQUFPQyxVQUFVLENBQUMsaUNBQWdDQyxJQUFFRixPQUFPQyxVQUFVLENBQUM7UUFBaUMsT0FBT0YsRUFBRUksT0FBTyxHQUFDLFNBQU9ELEVBQUVDLE9BQU8sR0FBQyxVQUFRO0lBQWU7SUFBRyxPQUFPVCw0Q0FBVyxDQUFDO1FBQUssSUFBRyxPQUFPTSxPQUFPQyxVQUFVLElBQUUsWUFBVztRQUFPLElBQUlGLElBQUVDLE9BQU9DLFVBQVUsQ0FBQyxpQ0FBZ0NDLElBQUVGLE9BQU9DLFVBQVUsQ0FBQztRQUFpQyxJQUFHLE9BQU9DLEVBQUVHLGdCQUFnQixJQUFFLFlBQVc7WUFBQyxJQUFJQyxJQUFFLENBQUMsRUFBQ0gsU0FBUUksQ0FBQyxFQUFDO2dCQUFJQSxLQUFHVixFQUFFO1lBQU8sR0FBRVcsSUFBRSxDQUFDLEVBQUNMLFNBQVFJLENBQUMsRUFBQztnQkFBSUEsS0FBR1YsRUFBRTtZQUFRO1lBQUUsT0FBT0UsRUFBRU0sZ0JBQWdCLENBQUMsVUFBU0MsSUFBR0osRUFBRUcsZ0JBQWdCLENBQUMsVUFBU0csSUFBRztnQkFBS1QsRUFBRVUsbUJBQW1CLENBQUMsVUFBU0gsSUFBR0osRUFBRU8sbUJBQW1CLENBQUMsVUFBU0Q7WUFBRTtRQUFDO1FBQUMsSUFBRyxPQUFPTixFQUFFUSxXQUFXLElBQUUsWUFBVztZQUFDLElBQUlKLElBQUUsSUFBSVQsRUFBRUUsRUFBRUksT0FBTyxHQUFDLFNBQU9ELEVBQUVDLE9BQU8sR0FBQyxVQUFRO1lBQWlCLE9BQU9KLEVBQUVXLFdBQVcsQ0FBQ0osSUFBR0osRUFBRVEsV0FBVyxDQUFDSixJQUFHO2dCQUFLUCxFQUFFWSxjQUFjLENBQUNMLElBQUdKLEVBQUVTLGNBQWMsQ0FBQ0w7WUFBRTtRQUFDO0lBQUMsR0FBRSxFQUFFLEdBQUVWO0FBQUMsR0FBRWdCLElBQUVqQjtBQUFrRCxDQUMzN0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Utam91cm5hbC8uL25vZGVfbW9kdWxlcy91c2UtcHJlZmVycy1jb2xvci1zY2hlbWUvZGlzdC9pbmRleC5lc20uanM/YjIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQqYXMgbiBmcm9tXCJyZWFjdFwiO3ZhciBhPSgpPT57bGV0W2MsaV09bi51c2VTdGF0ZSgoKT0+e2lmKHR5cGVvZiB3aW5kb3c+XCJ1XCIpcmV0dXJuXCJuby1wcmVmZXJlbmNlXCI7bGV0IHI9d2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLGU9d2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiKTtyZXR1cm4gci5tYXRjaGVzP1wiZGFya1wiOmUubWF0Y2hlcz9cImxpZ2h0XCI6XCJuby1wcmVmZXJlbmNlXCJ9KTtyZXR1cm4gbi51c2VFZmZlY3QoKCk9PntpZih0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEhPVwiZnVuY3Rpb25cIilyZXR1cm47bGV0IHI9d2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLGU9d2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiKTtpZih0eXBlb2YgZS5hZGRFdmVudExpc3RlbmVyPT1cImZ1bmN0aW9uXCIpe2xldCB0PSh7bWF0Y2hlczpvfSk9PntvJiZpKFwiZGFya1wiKX0scz0oe21hdGNoZXM6b30pPT57byYmaShcImxpZ2h0XCIpfTtyZXR1cm4gci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsdCksZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIscyksKCk9PntyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIix0KSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixzKX19aWYodHlwZW9mIGUuYWRkTGlzdGVuZXI9PVwiZnVuY3Rpb25cIil7bGV0IHQ9KCk9Pmkoci5tYXRjaGVzP1wiZGFya1wiOmUubWF0Y2hlcz9cImxpZ2h0XCI6XCJuby1wcmVmZXJlbmNlXCIpO3JldHVybiByLmFkZExpc3RlbmVyKHQpLGUuYWRkTGlzdGVuZXIodCksKCk9PntyLnJlbW92ZUxpc3RlbmVyKHQpLGUucmVtb3ZlTGlzdGVuZXIodCl9fX0sW10pLGN9LGQ9YTtleHBvcnR7ZCBhcyBkZWZhdWx0LGEgYXMgdXNlUHJlZmVyc0NvbG9yU2NoZW1lfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJuIiwiYSIsImMiLCJpIiwidXNlU3RhdGUiLCJyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImUiLCJtYXRjaGVzIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInQiLCJvIiwicyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiZCIsImRlZmF1bHQiLCJ1c2VQcmVmZXJzQ29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-prefers-color-scheme/dist/index.esm.js\n");

/***/ })

};
;