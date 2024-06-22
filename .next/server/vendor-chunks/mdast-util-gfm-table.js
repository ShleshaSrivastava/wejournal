"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-table";
exports.ids = ["vendor-chunks/mdast-util-gfm-table"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-table/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTableFromMarkdown: () => (/* binding */ gfmTableFromMarkdown),\n/* harmony export */   gfmTableToMarkdown: () => (/* binding */ gfmTableToMarkdown)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_handle_inline_code_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/inline-code.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js\");\n/* harmony import */ var markdown_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-table */ \"(ssr)/./node_modules/markdown-table/index.js\");\n/**\n * @typedef {import('mdast').Table} Table\n * @typedef {import('mdast').TableRow} TableRow\n * @typedef {import('mdast').TableCell} TableCell\n * @typedef {import('mdast').InlineCode} InlineCode\n *\n * @typedef {import('markdown-table').MarkdownTableOptions} MarkdownTableOptions\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Context} ToMarkdownContext\n * @typedef {import('mdast-util-to-markdown').SafeOptions} SafeOptions\n */ /**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [tableCellPadding=true]\n *   Whether to add a space of padding between delimiters and cells.\n * @property {boolean | null | undefined} [tablePipeAlign=true]\n *   Whether to align the delimiters.\n * @property {MarkdownTableOptions['stringLength'] | null | undefined} [stringLength]\n *   Function to detect the length of table cell content, used when aligning\n *   the delimiters between cells\n */ \n\n\n// To do: next major: use `state` and `state` utilities from `mdast-util-to-markdown`.\n// To do: next major: use `defaultHandlers.inlineCode`.\n// To do: next major: expose functions.\n/**\n * Extension for `mdast-util-from-markdown` to enable GFM tables.\n *\n * @type {FromMarkdownExtension}\n */ const gfmTableFromMarkdown = {\n    enter: {\n        table: enterTable,\n        tableData: enterCell,\n        tableHeader: enterCell,\n        tableRow: enterRow\n    },\n    exit: {\n        codeText: exitCodeText,\n        table: exitTable,\n        tableData: exit,\n        tableHeader: exit,\n        tableRow: exit\n    }\n};\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterTable(token) {\n    /** @type {Array<'left' | 'right' | 'center' | 'none'>} */ // @ts-expect-error: `align` is custom.\n    const align = token._align;\n    this.enter({\n        type: \"table\",\n        align: align.map((d)=>d === \"none\" ? null : d),\n        children: []\n    }, token);\n    this.setData(\"inTable\", true);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitTable(token) {\n    this.exit(token);\n    this.setData(\"inTable\");\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterRow(token) {\n    this.enter({\n        type: \"tableRow\",\n        children: []\n    }, token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exit(token) {\n    this.exit(token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterCell(token) {\n    this.enter({\n        type: \"tableCell\",\n        children: []\n    }, token);\n}\n// Overwrite the default code text data handler to unescape escaped pipes when\n// they are in tables.\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitCodeText(token) {\n    let value = this.resume();\n    if (this.getData(\"inTable\")) {\n        value = value.replace(/\\\\([\\\\|])/g, replace);\n    }\n    const node = /** @type {InlineCode} */ this.stack[this.stack.length - 1];\n    node.value = value;\n    this.exit(token);\n}\n/**\n * @param {string} $0\n * @param {string} $1\n * @returns {string}\n */ function replace($0, $1) {\n    // Pipes work, backslashes don’t (but can’t escape pipes).\n    return $1 === \"|\" ? $1 : $0;\n}\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM tables in\n * markdown.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM tables.\n */ function gfmTableToMarkdown(options) {\n    const settings = options || {};\n    const padding = settings.tableCellPadding;\n    const alignDelimiters = settings.tablePipeAlign;\n    const stringLength = settings.stringLength;\n    const around = padding ? \" \" : \"|\";\n    return {\n        unsafe: [\n            {\n                character: \"\\r\",\n                inConstruct: \"tableCell\"\n            },\n            {\n                character: \"\\n\",\n                inConstruct: \"tableCell\"\n            },\n            // A pipe, when followed by a tab or space (padding), or a dash or colon\n            // (unpadded delimiter row), could result in a table.\n            {\n                atBreak: true,\n                character: \"|\",\n                after: \"[\t :-]\"\n            },\n            // A pipe in a cell must be encoded.\n            {\n                character: \"|\",\n                inConstruct: \"tableCell\"\n            },\n            // A colon must be followed by a dash, in which case it could start a\n            // delimiter row.\n            {\n                atBreak: true,\n                character: \":\",\n                after: \"-\"\n            },\n            // A delimiter row can also start with a dash, when followed by more\n            // dashes, a colon, or a pipe.\n            // This is a stricter version than the built in check for lists, thematic\n            // breaks, and setex heading underlines though:\n            // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>\n            {\n                atBreak: true,\n                character: \"-\",\n                after: \"[:|-]\"\n            }\n        ],\n        handlers: {\n            table: handleTable,\n            tableRow: handleTableRow,\n            tableCell: handleTableCell,\n            inlineCode: inlineCodeWithTable\n        }\n    };\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {Table} node\n   */ function handleTable(node, _, context, safeOptions) {\n        return serializeData(handleTableAsData(node, context, safeOptions), node.align);\n    }\n    /**\n   * This function isn’t really used normally, because we handle rows at the\n   * table level.\n   * But, if someone passes in a table row, this ensures we make somewhat sense.\n   *\n   * @type {ToMarkdownHandle}\n   * @param {TableRow} node\n   */ function handleTableRow(node, _, context, safeOptions) {\n        const row = handleTableRowAsData(node, context, safeOptions);\n        const value = serializeData([\n            row\n        ]);\n        // `markdown-table` will always add an align row\n        return value.slice(0, value.indexOf(\"\\n\"));\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {TableCell} node\n   */ function handleTableCell(node, _, context, safeOptions) {\n        const exit = context.enter(\"tableCell\");\n        const subexit = context.enter(\"phrasing\");\n        const value = (0,mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_0__.containerPhrasing)(node, context, {\n            ...safeOptions,\n            before: around,\n            after: around\n        });\n        subexit();\n        exit();\n        return value;\n    }\n    /**\n   * @param {Array<Array<string>>} matrix\n   * @param {Array<string | null | undefined> | null | undefined} [align]\n   */ function serializeData(matrix, align) {\n        return (0,markdown_table__WEBPACK_IMPORTED_MODULE_1__.markdownTable)(matrix, {\n            align,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            alignDelimiters,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            padding,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            stringLength\n        });\n    }\n    /**\n   * @param {Table} node\n   * @param {ToMarkdownContext} context\n   * @param {SafeOptions} safeOptions\n   */ function handleTableAsData(node, context, safeOptions) {\n        const children = node.children;\n        let index = -1;\n        /** @type {Array<Array<string>>} */ const result = [];\n        const subexit = context.enter(\"table\");\n        while(++index < children.length){\n            result[index] = handleTableRowAsData(children[index], context, safeOptions);\n        }\n        subexit();\n        return result;\n    }\n    /**\n   * @param {TableRow} node\n   * @param {ToMarkdownContext} context\n   * @param {SafeOptions} safeOptions\n   */ function handleTableRowAsData(node, context, safeOptions) {\n        const children = node.children;\n        let index = -1;\n        /** @type {Array<string>} */ const result = [];\n        const subexit = context.enter(\"tableRow\");\n        while(++index < children.length){\n            // Note: the positional info as used here is incorrect.\n            // Making it correct would be impossible due to aligning cells?\n            // And it would need copy/pasting `markdown-table` into this project.\n            result[index] = handleTableCell(children[index], node, context, safeOptions);\n        }\n        subexit();\n        return result;\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineCode} node\n   */ function inlineCodeWithTable(node, parent, context) {\n        let value = (0,mdast_util_to_markdown_lib_handle_inline_code_js__WEBPACK_IMPORTED_MODULE_2__.inlineCode)(node, parent, context);\n        if (context.stack.includes(\"tableCell\")) {\n            value = value.replace(/\\|/g, \"\\\\$&\");\n        }\n        return value;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkMsR0FFRDs7Ozs7Ozs7OztDQVVDLEdBRXNGO0FBQ1o7QUFDL0I7QUFFNUMsc0ZBQXNGO0FBQ3RGLHVEQUF1RDtBQUN2RCx1Q0FBdUM7QUFFdkM7Ozs7Q0FJQyxHQUNNLE1BQU1HLHVCQUF1QjtJQUNsQ0MsT0FBTztRQUNMQyxPQUFPQztRQUNQQyxXQUFXQztRQUNYQyxhQUFhRDtRQUNiRSxVQUFVQztJQUNaO0lBQ0FDLE1BQU07UUFDSkMsVUFBVUM7UUFDVlQsT0FBT1U7UUFDUFIsV0FBV0s7UUFDWEgsYUFBYUc7UUFDYkYsVUFBVUU7SUFDWjtBQUNGLEVBQUM7QUFFRDs7O0NBR0MsR0FDRCxTQUFTTixXQUFXVSxLQUFLO0lBQ3ZCLHdEQUF3RCxHQUN4RCx1Q0FBdUM7SUFDdkMsTUFBTUMsUUFBUUQsTUFBTUUsTUFBTTtJQUMxQixJQUFJLENBQUNkLEtBQUssQ0FDUjtRQUNFZSxNQUFNO1FBQ05GLE9BQU9BLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxJQUFPQSxNQUFNLFNBQVMsT0FBT0E7UUFDL0NDLFVBQVUsRUFBRTtJQUNkLEdBQ0FOO0lBRUYsSUFBSSxDQUFDTyxPQUFPLENBQUMsV0FBVztBQUMxQjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNSLFVBQVVDLEtBQUs7SUFDdEIsSUFBSSxDQUFDSixJQUFJLENBQUNJO0lBQ1YsSUFBSSxDQUFDTyxPQUFPLENBQUM7QUFDZjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNaLFNBQVNLLEtBQUs7SUFDckIsSUFBSSxDQUFDWixLQUFLLENBQUM7UUFBQ2UsTUFBTTtRQUFZRyxVQUFVLEVBQUU7SUFBQSxHQUFHTjtBQUMvQztBQUVBOzs7Q0FHQyxHQUNELFNBQVNKLEtBQUtJLEtBQUs7SUFDakIsSUFBSSxDQUFDSixJQUFJLENBQUNJO0FBQ1o7QUFFQTs7O0NBR0MsR0FDRCxTQUFTUixVQUFVUSxLQUFLO0lBQ3RCLElBQUksQ0FBQ1osS0FBSyxDQUFDO1FBQUNlLE1BQU07UUFBYUcsVUFBVSxFQUFFO0lBQUEsR0FBR047QUFDaEQ7QUFFQSw4RUFBOEU7QUFDOUUsc0JBQXNCO0FBQ3RCOzs7Q0FHQyxHQUNELFNBQVNGLGFBQWFFLEtBQUs7SUFDekIsSUFBSVEsUUFBUSxJQUFJLENBQUNDLE1BQU07SUFFdkIsSUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxZQUFZO1FBQzNCRixRQUFRQSxNQUFNRyxPQUFPLENBQUMsY0FBY0E7SUFDdEM7SUFFQSxNQUFNQyxPQUFPLHVCQUF1QixHQUFJLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUN6RUYsS0FBS0osS0FBSyxHQUFHQTtJQUNiLElBQUksQ0FBQ1osSUFBSSxDQUFDSTtBQUNaO0FBRUE7Ozs7Q0FJQyxHQUNELFNBQVNXLFFBQVFJLEVBQUUsRUFBRUMsRUFBRTtJQUNyQiwwREFBMEQ7SUFDMUQsT0FBT0EsT0FBTyxNQUFNQSxLQUFLRDtBQUMzQjtBQUVBOzs7Ozs7OztDQVFDLEdBQ00sU0FBU0UsbUJBQW1CQyxPQUFPO0lBQ3hDLE1BQU1DLFdBQVdELFdBQVcsQ0FBQztJQUM3QixNQUFNRSxVQUFVRCxTQUFTRSxnQkFBZ0I7SUFDekMsTUFBTUMsa0JBQWtCSCxTQUFTSSxjQUFjO0lBQy9DLE1BQU1DLGVBQWVMLFNBQVNLLFlBQVk7SUFDMUMsTUFBTUMsU0FBU0wsVUFBVSxNQUFNO0lBRS9CLE9BQU87UUFDTE0sUUFBUTtZQUNOO2dCQUFDQyxXQUFXO2dCQUFNQyxhQUFhO1lBQVc7WUFDMUM7Z0JBQUNELFdBQVc7Z0JBQU1DLGFBQWE7WUFBVztZQUMxQyx3RUFBd0U7WUFDeEUscURBQXFEO1lBQ3JEO2dCQUFDQyxTQUFTO2dCQUFNRixXQUFXO2dCQUFLRyxPQUFPO1lBQVM7WUFDaEQsb0NBQW9DO1lBQ3BDO2dCQUFDSCxXQUFXO2dCQUFLQyxhQUFhO1lBQVc7WUFDekMscUVBQXFFO1lBQ3JFLGlCQUFpQjtZQUNqQjtnQkFBQ0MsU0FBUztnQkFBTUYsV0FBVztnQkFBS0csT0FBTztZQUFHO1lBQzFDLG9FQUFvRTtZQUNwRSw4QkFBOEI7WUFDOUIseUVBQXlFO1lBQ3pFLCtDQUErQztZQUMvQyx5RkFBeUY7WUFDekY7Z0JBQUNELFNBQVM7Z0JBQU1GLFdBQVc7Z0JBQUtHLE9BQU87WUFBTztTQUMvQztRQUNEQyxVQUFVO1lBQ1IxQyxPQUFPMkM7WUFDUHRDLFVBQVV1QztZQUNWQyxXQUFXQztZQUNYbEQsWUFBWW1EO1FBQ2Q7SUFDRjtJQUVBOzs7R0FHQyxHQUNELFNBQVNKLFlBQVlwQixJQUFJLEVBQUV5QixDQUFDLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztRQUNoRCxPQUFPQyxjQUNMQyxrQkFBa0I3QixNQUFNMEIsU0FBU0MsY0FDakMzQixLQUFLWCxLQUFLO0lBRWQ7SUFFQTs7Ozs7OztHQU9DLEdBQ0QsU0FBU2dDLGVBQWVyQixJQUFJLEVBQUV5QixDQUFDLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztRQUNuRCxNQUFNRyxNQUFNQyxxQkFBcUIvQixNQUFNMEIsU0FBU0M7UUFDaEQsTUFBTS9CLFFBQVFnQyxjQUFjO1lBQUNFO1NBQUk7UUFDakMsZ0RBQWdEO1FBQ2hELE9BQU9sQyxNQUFNb0MsS0FBSyxDQUFDLEdBQUdwQyxNQUFNcUMsT0FBTyxDQUFDO0lBQ3RDO0lBRUE7OztHQUdDLEdBQ0QsU0FBU1YsZ0JBQWdCdkIsSUFBSSxFQUFFeUIsQ0FBQyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7UUFDcEQsTUFBTTNDLE9BQU8wQyxRQUFRbEQsS0FBSyxDQUFDO1FBQzNCLE1BQU0wRCxVQUFVUixRQUFRbEQsS0FBSyxDQUFDO1FBQzlCLE1BQU1vQixRQUFReEIsd0dBQWlCQSxDQUFDNEIsTUFBTTBCLFNBQVM7WUFDN0MsR0FBR0MsV0FBVztZQUNkUSxRQUFRdEI7WUFDUkssT0FBT0w7UUFDVDtRQUNBcUI7UUFDQWxEO1FBQ0EsT0FBT1k7SUFDVDtJQUVBOzs7R0FHQyxHQUNELFNBQVNnQyxjQUFjUSxNQUFNLEVBQUUvQyxLQUFLO1FBQ2xDLE9BQU9mLDZEQUFhQSxDQUFDOEQsUUFBUTtZQUMzQi9DO1lBQ0Esa0VBQWtFO1lBQ2xFcUI7WUFDQSxrRUFBa0U7WUFDbEVGO1lBQ0Esa0VBQWtFO1lBQ2xFSTtRQUNGO0lBQ0Y7SUFFQTs7OztHQUlDLEdBQ0QsU0FBU2lCLGtCQUFrQjdCLElBQUksRUFBRTBCLE9BQU8sRUFBRUMsV0FBVztRQUNuRCxNQUFNakMsV0FBV00sS0FBS04sUUFBUTtRQUM5QixJQUFJMkMsUUFBUSxDQUFDO1FBQ2IsaUNBQWlDLEdBQ2pDLE1BQU1DLFNBQVMsRUFBRTtRQUNqQixNQUFNSixVQUFVUixRQUFRbEQsS0FBSyxDQUFDO1FBRTlCLE1BQU8sRUFBRTZELFFBQVEzQyxTQUFTUSxNQUFNLENBQUU7WUFDaENvQyxNQUFNLENBQUNELE1BQU0sR0FBR04scUJBQ2RyQyxRQUFRLENBQUMyQyxNQUFNLEVBQ2ZYLFNBQ0FDO1FBRUo7UUFFQU87UUFFQSxPQUFPSTtJQUNUO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNQLHFCQUFxQi9CLElBQUksRUFBRTBCLE9BQU8sRUFBRUMsV0FBVztRQUN0RCxNQUFNakMsV0FBV00sS0FBS04sUUFBUTtRQUM5QixJQUFJMkMsUUFBUSxDQUFDO1FBQ2IsMEJBQTBCLEdBQzFCLE1BQU1DLFNBQVMsRUFBRTtRQUNqQixNQUFNSixVQUFVUixRQUFRbEQsS0FBSyxDQUFDO1FBRTlCLE1BQU8sRUFBRTZELFFBQVEzQyxTQUFTUSxNQUFNLENBQUU7WUFDaEMsdURBQXVEO1lBQ3ZELCtEQUErRDtZQUMvRCxxRUFBcUU7WUFDckVvQyxNQUFNLENBQUNELE1BQU0sR0FBR2QsZ0JBQ2Q3QixRQUFRLENBQUMyQyxNQUFNLEVBQ2ZyQyxNQUNBMEIsU0FDQUM7UUFFSjtRQUVBTztRQUVBLE9BQU9JO0lBQ1Q7SUFFQTs7O0dBR0MsR0FDRCxTQUFTZCxvQkFBb0J4QixJQUFJLEVBQUV1QyxNQUFNLEVBQUViLE9BQU87UUFDaEQsSUFBSTlCLFFBQVF2Qiw0RkFBVUEsQ0FBQzJCLE1BQU11QyxRQUFRYjtRQUVyQyxJQUFJQSxRQUFRekIsS0FBSyxDQUFDdUMsUUFBUSxDQUFDLGNBQWM7WUFDdkM1QyxRQUFRQSxNQUFNRyxPQUFPLENBQUMsT0FBTztRQUMvQjtRQUVBLE9BQU9IO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlLWpvdXJuYWwvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzPzY3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRhYmxlfSBUYWJsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5UYWJsZVJvd30gVGFibGVSb3dcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuVGFibGVDZWxsfSBUYWJsZUNlbGxcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuSW5saW5lQ29kZX0gSW5saW5lQ29kZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21hcmtkb3duLXRhYmxlJykuTWFya2Rvd25UYWJsZU9wdGlvbnN9IE1hcmtkb3duVGFibGVPcHRpb25zXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkhhbmRsZX0gVG9NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkNvbnRleHR9IFRvTWFya2Rvd25Db250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuU2FmZU9wdGlvbnN9IFNhZmVPcHRpb25zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdGFibGVDZWxsUGFkZGluZz10cnVlXVxuICogICBXaGV0aGVyIHRvIGFkZCBhIHNwYWNlIG9mIHBhZGRpbmcgYmV0d2VlbiBkZWxpbWl0ZXJzIGFuZCBjZWxscy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFt0YWJsZVBpcGVBbGlnbj10cnVlXVxuICogICBXaGV0aGVyIHRvIGFsaWduIHRoZSBkZWxpbWl0ZXJzLlxuICogQHByb3BlcnR5IHtNYXJrZG93blRhYmxlT3B0aW9uc1snc3RyaW5nTGVuZ3RoJ10gfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RyaW5nTGVuZ3RoXVxuICogICBGdW5jdGlvbiB0byBkZXRlY3QgdGhlIGxlbmd0aCBvZiB0YWJsZSBjZWxsIGNvbnRlbnQsIHVzZWQgd2hlbiBhbGlnbmluZ1xuICogICB0aGUgZGVsaW1pdGVycyBiZXR3ZWVuIGNlbGxzXG4gKi9cblxuaW1wb3J0IHtjb250YWluZXJQaHJhc2luZ30gZnJvbSAnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItcGhyYXNpbmcuanMnXG5pbXBvcnQge2lubGluZUNvZGV9IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9pbmxpbmUtY29kZS5qcydcbmltcG9ydCB7bWFya2Rvd25UYWJsZX0gZnJvbSAnbWFya2Rvd24tdGFibGUnXG5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiB1c2UgYHN0YXRlYCBhbmQgYHN0YXRlYCB1dGlsaXRpZXMgZnJvbSBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogdXNlIGBkZWZhdWx0SGFuZGxlcnMuaW5saW5lQ29kZWAuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9ucy5cblxuLyoqXG4gKiBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFibGVzLlxuICpcbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKi9cbmV4cG9ydCBjb25zdCBnZm1UYWJsZUZyb21NYXJrZG93biA9IHtcbiAgZW50ZXI6IHtcbiAgICB0YWJsZTogZW50ZXJUYWJsZSxcbiAgICB0YWJsZURhdGE6IGVudGVyQ2VsbCxcbiAgICB0YWJsZUhlYWRlcjogZW50ZXJDZWxsLFxuICAgIHRhYmxlUm93OiBlbnRlclJvd1xuICB9LFxuICBleGl0OiB7XG4gICAgY29kZVRleHQ6IGV4aXRDb2RlVGV4dCxcbiAgICB0YWJsZTogZXhpdFRhYmxlLFxuICAgIHRhYmxlRGF0YTogZXhpdCxcbiAgICB0YWJsZUhlYWRlcjogZXhpdCxcbiAgICB0YWJsZVJvdzogZXhpdFxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJUYWJsZSh0b2tlbikge1xuICAvKiogQHR5cGUge0FycmF5PCdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdub25lJz59ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBhbGlnbmAgaXMgY3VzdG9tLlxuICBjb25zdCBhbGlnbiA9IHRva2VuLl9hbGlnblxuICB0aGlzLmVudGVyKFxuICAgIHtcbiAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICBhbGlnbjogYWxpZ24ubWFwKChkKSA9PiAoZCA9PT0gJ25vbmUnID8gbnVsbCA6IGQpKSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0sXG4gICAgdG9rZW5cbiAgKVxuICB0aGlzLnNldERhdGEoJ2luVGFibGUnLCB0cnVlKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRUYWJsZSh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG4gIHRoaXMuc2V0RGF0YSgnaW5UYWJsZScpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJSb3codG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ3RhYmxlUm93JywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdCh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJDZWxsKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICd0YWJsZUNlbGwnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuLy8gT3ZlcndyaXRlIHRoZSBkZWZhdWx0IGNvZGUgdGV4dCBkYXRhIGhhbmRsZXIgdG8gdW5lc2NhcGUgZXNjYXBlZCBwaXBlcyB3aGVuXG4vLyB0aGV5IGFyZSBpbiB0YWJsZXMuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRDb2RlVGV4dCh0b2tlbikge1xuICBsZXQgdmFsdWUgPSB0aGlzLnJlc3VtZSgpXG5cbiAgaWYgKHRoaXMuZ2V0RGF0YSgnaW5UYWJsZScpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFxcKFtcXFxcfF0pL2csIHJlcGxhY2UpXG4gIH1cblxuICBjb25zdCBub2RlID0gLyoqIEB0eXBlIHtJbmxpbmVDb2RlfSAqLyAodGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdKVxuICBub2RlLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlKCQwLCAkMSkge1xuICAvLyBQaXBlcyB3b3JrLCBiYWNrc2xhc2hlcyBkb27igJl0IChidXQgY2Fu4oCZdCBlc2NhcGUgcGlwZXMpLlxuICByZXR1cm4gJDEgPT09ICd8JyA/ICQxIDogJDBcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMgaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFibGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFibGVUb01hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIGNvbnN0IHBhZGRpbmcgPSBzZXR0aW5ncy50YWJsZUNlbGxQYWRkaW5nXG4gIGNvbnN0IGFsaWduRGVsaW1pdGVycyA9IHNldHRpbmdzLnRhYmxlUGlwZUFsaWduXG4gIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aFxuICBjb25zdCBhcm91bmQgPSBwYWRkaW5nID8gJyAnIDogJ3wnXG5cbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFtcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXHInLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAge2NoYXJhY3RlcjogJ1xcbicsIGluQ29uc3RydWN0OiAndGFibGVDZWxsJ30sXG4gICAgICAvLyBBIHBpcGUsIHdoZW4gZm9sbG93ZWQgYnkgYSB0YWIgb3Igc3BhY2UgKHBhZGRpbmcpLCBvciBhIGRhc2ggb3IgY29sb25cbiAgICAgIC8vICh1bnBhZGRlZCBkZWxpbWl0ZXIgcm93KSwgY291bGQgcmVzdWx0IGluIGEgdGFibGUuXG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnfCcsIGFmdGVyOiAnW1xcdCA6LV0nfSxcbiAgICAgIC8vIEEgcGlwZSBpbiBhIGNlbGwgbXVzdCBiZSBlbmNvZGVkLlxuICAgICAge2NoYXJhY3RlcjogJ3wnLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAgLy8gQSBjb2xvbiBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGFzaCwgaW4gd2hpY2ggY2FzZSBpdCBjb3VsZCBzdGFydCBhXG4gICAgICAvLyBkZWxpbWl0ZXIgcm93LlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJzonLCBhZnRlcjogJy0nfSxcbiAgICAgIC8vIEEgZGVsaW1pdGVyIHJvdyBjYW4gYWxzbyBzdGFydCB3aXRoIGEgZGFzaCwgd2hlbiBmb2xsb3dlZCBieSBtb3JlXG4gICAgICAvLyBkYXNoZXMsIGEgY29sb24sIG9yIGEgcGlwZS5cbiAgICAgIC8vIFRoaXMgaXMgYSBzdHJpY3RlciB2ZXJzaW9uIHRoYW4gdGhlIGJ1aWx0IGluIGNoZWNrIGZvciBsaXN0cywgdGhlbWF0aWNcbiAgICAgIC8vIGJyZWFrcywgYW5kIHNldGV4IGhlYWRpbmcgdW5kZXJsaW5lcyB0aG91Z2g6XG4gICAgICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi81MWEyMDM4L2xpYi91bnNhZmUuanMjTDU3PlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJy0nLCBhZnRlcjogJ1s6fC1dJ31cbiAgICBdLFxuICAgIGhhbmRsZXJzOiB7XG4gICAgICB0YWJsZTogaGFuZGxlVGFibGUsXG4gICAgICB0YWJsZVJvdzogaGFuZGxlVGFibGVSb3csXG4gICAgICB0YWJsZUNlbGw6IGhhbmRsZVRhYmxlQ2VsbCxcbiAgICAgIGlubGluZUNvZGU6IGlubGluZUNvZGVXaXRoVGFibGVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7VGFibGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlKG5vZGUsIF8sIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZURhdGEoXG4gICAgICBoYW5kbGVUYWJsZUFzRGF0YShub2RlLCBjb250ZXh0LCBzYWZlT3B0aW9ucyksXG4gICAgICBub2RlLmFsaWduXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXNu4oCZdCByZWFsbHkgdXNlZCBub3JtYWxseSwgYmVjYXVzZSB3ZSBoYW5kbGUgcm93cyBhdCB0aGVcbiAgICogdGFibGUgbGV2ZWwuXG4gICAqIEJ1dCwgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB0YWJsZSByb3csIHRoaXMgZW5zdXJlcyB3ZSBtYWtlIHNvbWV3aGF0IHNlbnNlLlxuICAgKlxuICAgKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAgICogQHBhcmFtIHtUYWJsZVJvd30gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVSb3cobm9kZSwgXywgY29udGV4dCwgc2FmZU9wdGlvbnMpIHtcbiAgICBjb25zdCByb3cgPSBoYW5kbGVUYWJsZVJvd0FzRGF0YShub2RlLCBjb250ZXh0LCBzYWZlT3B0aW9ucylcbiAgICBjb25zdCB2YWx1ZSA9IHNlcmlhbGl6ZURhdGEoW3Jvd10pXG4gICAgLy8gYG1hcmtkb3duLXRhYmxlYCB3aWxsIGFsd2F5cyBhZGQgYW4gYWxpZ24gcm93XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHZhbHVlLmluZGV4T2YoJ1xcbicpKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge1RhYmxlQ2VsbH0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVDZWxsKG5vZGUsIF8sIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gICAgY29uc3QgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3RhYmxlQ2VsbCcpXG4gICAgY29uc3Qgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3BocmFzaW5nJylcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRhaW5lclBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtcbiAgICAgIC4uLnNhZmVPcHRpb25zLFxuICAgICAgYmVmb3JlOiBhcm91bmQsXG4gICAgICBhZnRlcjogYXJvdW5kXG4gICAgfSlcbiAgICBzdWJleGl0KClcbiAgICBleGl0KClcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PHN0cmluZz4+fSBtYXRyaXhcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPiB8IG51bGwgfCB1bmRlZmluZWR9IFthbGlnbl1cbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGEobWF0cml4LCBhbGlnbikge1xuICAgIHJldHVybiBtYXJrZG93blRhYmxlKG1hdHJpeCwge1xuICAgICAgYWxpZ24sXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbWFya2Rvd24tdGFibGVgIHR5cGVzIHNob3VsZCBzdXBwb3J0IGBudWxsYC5cbiAgICAgIGFsaWduRGVsaW1pdGVycyxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBtYXJrZG93bi10YWJsZWAgdHlwZXMgc2hvdWxkIHN1cHBvcnQgYG51bGxgLlxuICAgICAgcGFkZGluZyxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBtYXJrZG93bi10YWJsZWAgdHlwZXMgc2hvdWxkIHN1cHBvcnQgYG51bGxgLlxuICAgICAgc3RyaW5nTGVuZ3RoXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RhYmxlfSBub2RlXG4gICAqIEBwYXJhbSB7VG9NYXJrZG93bkNvbnRleHR9IGNvbnRleHRcbiAgICogQHBhcmFtIHtTYWZlT3B0aW9uc30gc2FmZU9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlQXNEYXRhKG5vZGUsIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PEFycmF5PHN0cmluZz4+fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgY29uc3Qgc3ViZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3RhYmxlJylcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gaGFuZGxlVGFibGVSb3dBc0RhdGEoXG4gICAgICAgIGNoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc2FmZU9wdGlvbnNcbiAgICAgIClcbiAgICB9XG5cbiAgICBzdWJleGl0KClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RhYmxlUm93fSBub2RlXG4gICAqIEBwYXJhbSB7VG9NYXJrZG93bkNvbnRleHR9IGNvbnRleHRcbiAgICogQHBhcmFtIHtTYWZlT3B0aW9uc30gc2FmZU9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlUm93QXNEYXRhKG5vZGUsIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBjb25zdCBzdWJleGl0ID0gY29udGV4dC5lbnRlcigndGFibGVSb3cnKVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIC8vIE5vdGU6IHRoZSBwb3NpdGlvbmFsIGluZm8gYXMgdXNlZCBoZXJlIGlzIGluY29ycmVjdC5cbiAgICAgIC8vIE1ha2luZyBpdCBjb3JyZWN0IHdvdWxkIGJlIGltcG9zc2libGUgZHVlIHRvIGFsaWduaW5nIGNlbGxzP1xuICAgICAgLy8gQW5kIGl0IHdvdWxkIG5lZWQgY29weS9wYXN0aW5nIGBtYXJrZG93bi10YWJsZWAgaW50byB0aGlzIHByb2plY3QuXG4gICAgICByZXN1bHRbaW5kZXhdID0gaGFuZGxlVGFibGVDZWxsKFxuICAgICAgICBjaGlsZHJlbltpbmRleF0sXG4gICAgICAgIG5vZGUsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHNhZmVPcHRpb25zXG4gICAgICApXG4gICAgfVxuXG4gICAgc3ViZXhpdCgpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7SW5saW5lQ29kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaW5saW5lQ29kZVdpdGhUYWJsZShub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBpbmxpbmVDb2RlKG5vZGUsIHBhcmVudCwgY29udGV4dClcblxuICAgIGlmIChjb250ZXh0LnN0YWNrLmluY2x1ZGVzKCd0YWJsZUNlbGwnKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHwvZywgJ1xcXFwkJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb250YWluZXJQaHJhc2luZyIsImlubGluZUNvZGUiLCJtYXJrZG93blRhYmxlIiwiZ2ZtVGFibGVGcm9tTWFya2Rvd24iLCJlbnRlciIsInRhYmxlIiwiZW50ZXJUYWJsZSIsInRhYmxlRGF0YSIsImVudGVyQ2VsbCIsInRhYmxlSGVhZGVyIiwidGFibGVSb3ciLCJlbnRlclJvdyIsImV4aXQiLCJjb2RlVGV4dCIsImV4aXRDb2RlVGV4dCIsImV4aXRUYWJsZSIsInRva2VuIiwiYWxpZ24iLCJfYWxpZ24iLCJ0eXBlIiwibWFwIiwiZCIsImNoaWxkcmVuIiwic2V0RGF0YSIsInZhbHVlIiwicmVzdW1lIiwiZ2V0RGF0YSIsInJlcGxhY2UiLCJub2RlIiwic3RhY2siLCJsZW5ndGgiLCIkMCIsIiQxIiwiZ2ZtVGFibGVUb01hcmtkb3duIiwib3B0aW9ucyIsInNldHRpbmdzIiwicGFkZGluZyIsInRhYmxlQ2VsbFBhZGRpbmciLCJhbGlnbkRlbGltaXRlcnMiLCJ0YWJsZVBpcGVBbGlnbiIsInN0cmluZ0xlbmd0aCIsImFyb3VuZCIsInVuc2FmZSIsImNoYXJhY3RlciIsImluQ29uc3RydWN0IiwiYXRCcmVhayIsImFmdGVyIiwiaGFuZGxlcnMiLCJoYW5kbGVUYWJsZSIsImhhbmRsZVRhYmxlUm93IiwidGFibGVDZWxsIiwiaGFuZGxlVGFibGVDZWxsIiwiaW5saW5lQ29kZVdpdGhUYWJsZSIsIl8iLCJjb250ZXh0Iiwic2FmZU9wdGlvbnMiLCJzZXJpYWxpemVEYXRhIiwiaGFuZGxlVGFibGVBc0RhdGEiLCJyb3ciLCJoYW5kbGVUYWJsZVJvd0FzRGF0YSIsInNsaWNlIiwiaW5kZXhPZiIsInN1YmV4aXQiLCJiZWZvcmUiLCJtYXRyaXgiLCJpbmRleCIsInJlc3VsdCIsInBhcmVudCIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-table/lib/index.js\n");

/***/ })

};
;