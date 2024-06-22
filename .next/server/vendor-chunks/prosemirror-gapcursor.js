"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-gapcursor";
exports.ids = ["vendor-chunks/prosemirror-gapcursor"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-gapcursor/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prosemirror-gapcursor/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GapCursor: () => (/* binding */ GapCursor),\n/* harmony export */   gapCursor: () => (/* binding */ gapCursor)\n/* harmony export */ });\n/* harmony import */ var prosemirror_keymap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-keymap */ \"(ssr)/./node_modules/prosemirror-keymap/dist/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-model */ \"(ssr)/./node_modules/prosemirror-model/dist/index.js\");\n/* harmony import */ var prosemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-view */ \"(ssr)/./node_modules/prosemirror-view/dist/index.js\");\n\n\n\n\n/**\nGap cursor selections are represented using this class. Its\n`$anchor` and `$head` properties both point at the cursor position.\n*/ class GapCursor extends prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection {\n    /**\n    Create a gap cursor.\n    */ constructor($pos){\n        super($pos, $pos);\n    }\n    map(doc, mapping) {\n        let $pos = doc.resolve(mapping.map(this.head));\n        return GapCursor.valid($pos) ? new GapCursor($pos) : prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.near($pos);\n    }\n    content() {\n        return prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Slice.empty;\n    }\n    eq(other) {\n        return other instanceof GapCursor && other.head == this.head;\n    }\n    toJSON() {\n        return {\n            type: \"gapcursor\",\n            pos: this.head\n        };\n    }\n    /**\n    @internal\n    */ static fromJSON(doc, json) {\n        if (typeof json.pos != \"number\") throw new RangeError(\"Invalid input for GapCursor.fromJSON\");\n        return new GapCursor(doc.resolve(json.pos));\n    }\n    /**\n    @internal\n    */ getBookmark() {\n        return new GapBookmark(this.anchor);\n    }\n    /**\n    @internal\n    */ static valid($pos) {\n        let parent = $pos.parent;\n        if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos)) return false;\n        let override = parent.type.spec.allowGapCursor;\n        if (override != null) return override;\n        let deflt = parent.contentMatchAt($pos.index()).defaultType;\n        return deflt && deflt.isTextblock;\n    }\n    /**\n    @internal\n    */ static findGapCursorFrom($pos, dir, mustMove = false) {\n        search: for(;;){\n            if (!mustMove && GapCursor.valid($pos)) return $pos;\n            let pos = $pos.pos, next = null;\n            // Scan up from this position\n            for(let d = $pos.depth;; d--){\n                let parent = $pos.node(d);\n                if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {\n                    next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);\n                    break;\n                } else if (d == 0) {\n                    return null;\n                }\n                pos += dir;\n                let $cur = $pos.doc.resolve(pos);\n                if (GapCursor.valid($cur)) return $cur;\n            }\n            // And then down into the next node\n            for(;;){\n                let inside = dir > 0 ? next.firstChild : next.lastChild;\n                if (!inside) {\n                    if (next.isAtom && !next.isText && !prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(next)) {\n                        $pos = $pos.doc.resolve(pos + next.nodeSize * dir);\n                        mustMove = false;\n                        continue search;\n                    }\n                    break;\n                }\n                next = inside;\n                pos += dir;\n                let $cur = $pos.doc.resolve(pos);\n                if (GapCursor.valid($cur)) return $cur;\n            }\n            return null;\n        }\n    }\n}\nGapCursor.prototype.visible = false;\nGapCursor.findFrom = GapCursor.findGapCursorFrom;\nprosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.jsonID(\"gapcursor\", GapCursor);\nclass GapBookmark {\n    constructor(pos){\n        this.pos = pos;\n    }\n    map(mapping) {\n        return new GapBookmark(mapping.map(this.pos));\n    }\n    resolve(doc) {\n        let $pos = doc.resolve(this.pos);\n        return GapCursor.valid($pos) ? new GapCursor($pos) : prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.near($pos);\n    }\n}\nfunction closedBefore($pos) {\n    for(let d = $pos.depth; d >= 0; d--){\n        let index = $pos.index(d), parent = $pos.node(d);\n        // At the start of this parent, look at next one\n        if (index == 0) {\n            if (parent.type.spec.isolating) return true;\n            continue;\n        }\n        // See if the node before (or its first ancestor) is closed\n        for(let before = parent.child(index - 1);; before = before.lastChild){\n            if (before.childCount == 0 && !before.inlineContent || before.isAtom || before.type.spec.isolating) return true;\n            if (before.inlineContent) return false;\n        }\n    }\n    // Hit start of document\n    return true;\n}\nfunction closedAfter($pos) {\n    for(let d = $pos.depth; d >= 0; d--){\n        let index = $pos.indexAfter(d), parent = $pos.node(d);\n        if (index == parent.childCount) {\n            if (parent.type.spec.isolating) return true;\n            continue;\n        }\n        for(let after = parent.child(index);; after = after.firstChild){\n            if (after.childCount == 0 && !after.inlineContent || after.isAtom || after.type.spec.isolating) return true;\n            if (after.inlineContent) return false;\n        }\n    }\n    return true;\n}\n/**\nCreate a gap cursor plugin. When enabled, this will capture clicks\nnear and arrow-key-motion past places that don't have a normally\nselectable position nearby, and create a gap cursor selection for\nthem. The cursor is drawn as an element with class\n`ProseMirror-gapcursor`. You can either include\n`style/gapcursor.css` from the package's directory or add your own\nstyles to make it visible.\n*/ function gapCursor() {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({\n        props: {\n            decorations: drawGapCursor,\n            createSelectionBetween (_view, $anchor, $head) {\n                return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;\n            },\n            handleClick,\n            handleKeyDown,\n            handleDOMEvents: {\n                beforeinput: beforeinput\n            }\n        }\n    });\n}\nconst handleKeyDown = (0,prosemirror_keymap__WEBPACK_IMPORTED_MODULE_2__.keydownHandler)({\n    \"ArrowLeft\": arrow(\"horiz\", -1),\n    \"ArrowRight\": arrow(\"horiz\", 1),\n    \"ArrowUp\": arrow(\"vert\", -1),\n    \"ArrowDown\": arrow(\"vert\", 1)\n});\nfunction arrow(axis, dir) {\n    const dirStr = axis == \"vert\" ? dir > 0 ? \"down\" : \"up\" : dir > 0 ? \"right\" : \"left\";\n    return function(state, dispatch, view) {\n        let sel = state.selection;\n        let $start = dir > 0 ? sel.$to : sel.$from, mustMove = sel.empty;\n        if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) {\n            if (!view.endOfTextblock(dirStr) || $start.depth == 0) return false;\n            mustMove = false;\n            $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());\n        }\n        let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);\n        if (!$found) return false;\n        if (dispatch) dispatch(state.tr.setSelection(new GapCursor($found)));\n        return true;\n    };\n}\nfunction handleClick(view, pos, event) {\n    if (!view || !view.editable) return false;\n    let $pos = view.state.doc.resolve(pos);\n    if (!GapCursor.valid($pos)) return false;\n    let clickPos = view.posAtCoords({\n        left: event.clientX,\n        top: event.clientY\n    });\n    if (clickPos && clickPos.inside > -1 && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(view.state.doc.nodeAt(clickPos.inside))) return false;\n    view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));\n    return true;\n}\n// This is a hack that, when a composition starts while a gap cursor\n// is active, quickly creates an inline context for the composition to\n// happen in, to avoid it being aborted by the DOM selection being\n// moved into a valid position.\nfunction beforeinput(view, event) {\n    if (event.inputType != \"insertCompositionText\" || !(view.state.selection instanceof GapCursor)) return false;\n    let { $from } = view.state.selection;\n    let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view.state.schema.nodes.text);\n    if (!insert) return false;\n    let frag = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Fragment.empty;\n    for(let i = insert.length - 1; i >= 0; i--)frag = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Fragment.from(insert[i].createAndFill(null, frag));\n    let tr = view.state.tr.replace($from.pos, $from.pos, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.Slice(frag, 0, 0));\n    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection.near(tr.doc.resolve($from.pos + 1)));\n    view.dispatch(tr);\n    return false;\n}\nfunction drawGapCursor(state) {\n    if (!(state.selection instanceof GapCursor)) return null;\n    let node = document.createElement(\"div\");\n    node.className = \"ProseMirror-gapcursor\";\n    return prosemirror_view__WEBPACK_IMPORTED_MODULE_3__.DecorationSet.create(state.doc, [\n        prosemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.widget(state.selection.head, node, {\n            key: \"gapcursor\"\n        })\n    ]);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZ2FwY3Vyc29yL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9EO0FBQ2dDO0FBQ2hDO0FBQ1M7QUFFN0Q7OztBQUdBLEdBQ0EsTUFBTVMsa0JBQWtCUix3REFBU0E7SUFDN0I7O0lBRUEsR0FDQVMsWUFBWUMsSUFBSSxDQUFFO1FBQ2QsS0FBSyxDQUFDQSxNQUFNQTtJQUNoQjtJQUNBQyxJQUFJQyxHQUFHLEVBQUVDLE9BQU8sRUFBRTtRQUNkLElBQUlILE9BQU9FLElBQUlFLE9BQU8sQ0FBQ0QsUUFBUUYsR0FBRyxDQUFDLElBQUksQ0FBQ0ksSUFBSTtRQUM1QyxPQUFPUCxVQUFVUSxLQUFLLENBQUNOLFFBQVEsSUFBSUYsVUFBVUUsUUFBUVYsd0RBQVNBLENBQUNpQixJQUFJLENBQUNQO0lBQ3hFO0lBQ0FRLFVBQVU7UUFBRSxPQUFPZCxvREFBS0EsQ0FBQ2UsS0FBSztJQUFFO0lBQ2hDQyxHQUFHQyxLQUFLLEVBQUU7UUFDTixPQUFPQSxpQkFBaUJiLGFBQWFhLE1BQU1OLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUk7SUFDaEU7SUFDQU8sU0FBUztRQUNMLE9BQU87WUFBRUMsTUFBTTtZQUFhQyxLQUFLLElBQUksQ0FBQ1QsSUFBSTtRQUFDO0lBQy9DO0lBQ0E7O0lBRUEsR0FDQSxPQUFPVSxTQUFTYixHQUFHLEVBQUVjLElBQUksRUFBRTtRQUN2QixJQUFJLE9BQU9BLEtBQUtGLEdBQUcsSUFBSSxVQUNuQixNQUFNLElBQUlHLFdBQVc7UUFDekIsT0FBTyxJQUFJbkIsVUFBVUksSUFBSUUsT0FBTyxDQUFDWSxLQUFLRixHQUFHO0lBQzdDO0lBQ0E7O0lBRUEsR0FDQUksY0FBYztRQUFFLE9BQU8sSUFBSUMsWUFBWSxJQUFJLENBQUNDLE1BQU07SUFBRztJQUNyRDs7SUFFQSxHQUNBLE9BQU9kLE1BQU1OLElBQUksRUFBRTtRQUNmLElBQUlxQixTQUFTckIsS0FBS3FCLE1B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U0FBUyxDQUFDekUsSUFBSSxFQUFFa0MsTUFBTTtZQUFFeUUsS0FBSztRQUFZO0tBQUc7QUFDaEg7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZS1qb3VybmFsLy4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWdhcGN1cnNvci9kaXN0L2luZGV4LmpzPzVkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5ZG93bkhhbmRsZXIgfSBmcm9tICdwcm9zZW1pcnJvci1rZXltYXAnO1xuaW1wb3J0IHsgU2VsZWN0aW9uLCBOb2RlU2VsZWN0aW9uLCBUZXh0U2VsZWN0aW9uLCBQbHVnaW4gfSBmcm9tICdwcm9zZW1pcnJvci1zdGF0ZSc7XG5pbXBvcnQgeyBTbGljZSwgRnJhZ21lbnQgfSBmcm9tICdwcm9zZW1pcnJvci1tb2RlbCc7XG5pbXBvcnQgeyBEZWNvcmF0aW9uU2V0LCBEZWNvcmF0aW9uIH0gZnJvbSAncHJvc2VtaXJyb3Itdmlldyc7XG5cbi8qKlxuR2FwIGN1cnNvciBzZWxlY3Rpb25zIGFyZSByZXByZXNlbnRlZCB1c2luZyB0aGlzIGNsYXNzLiBJdHNcbmAkYW5jaG9yYCBhbmQgYCRoZWFkYCBwcm9wZXJ0aWVzIGJvdGggcG9pbnQgYXQgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiovXG5jbGFzcyBHYXBDdXJzb3IgZXh0ZW5kcyBTZWxlY3Rpb24ge1xuICAgIC8qKlxuICAgIENyZWF0ZSBhIGdhcCBjdXJzb3IuXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigkcG9zKSB7XG4gICAgICAgIHN1cGVyKCRwb3MsICRwb3MpO1xuICAgIH1cbiAgICBtYXAoZG9jLCBtYXBwaW5nKSB7XG4gICAgICAgIGxldCAkcG9zID0gZG9jLnJlc29sdmUobWFwcGluZy5tYXAodGhpcy5oZWFkKSk7XG4gICAgICAgIHJldHVybiBHYXBDdXJzb3IudmFsaWQoJHBvcykgPyBuZXcgR2FwQ3Vyc29yKCRwb3MpIDogU2VsZWN0aW9uLm5lYXIoJHBvcyk7XG4gICAgfVxuICAgIGNvbnRlbnQoKSB7IHJldHVybiBTbGljZS5lbXB0eTsgfVxuICAgIGVxKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIEdhcEN1cnNvciAmJiBvdGhlci5oZWFkID09IHRoaXMuaGVhZDtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBcImdhcGN1cnNvclwiLCBwb3M6IHRoaXMuaGVhZCB9O1xuICAgIH1cbiAgICAvKipcbiAgICBAaW50ZXJuYWxcbiAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihkb2MsIGpzb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uLnBvcyAhPSBcIm51bWJlclwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBHYXBDdXJzb3IuZnJvbUpTT05cIik7XG4gICAgICAgIHJldHVybiBuZXcgR2FwQ3Vyc29yKGRvYy5yZXNvbHZlKGpzb24ucG9zKSk7XG4gICAgfVxuICAgIC8qKlxuICAgIEBpbnRlcm5hbFxuICAgICovXG4gICAgZ2V0Qm9va21hcmsoKSB7IHJldHVybiBuZXcgR2FwQm9va21hcmsodGhpcy5hbmNob3IpOyB9XG4gICAgLyoqXG4gICAgQGludGVybmFsXG4gICAgKi9cbiAgICBzdGF0aWMgdmFsaWQoJHBvcykge1xuICAgICAgICBsZXQgcGFyZW50ID0gJHBvcy5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQuaXNUZXh0YmxvY2sgfHwgIWNsb3NlZEJlZm9yZSgkcG9zKSB8fCAhY2xvc2VkQWZ0ZXIoJHBvcykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBvdmVycmlkZSA9IHBhcmVudC50eXBlLnNwZWMuYWxsb3dHYXBDdXJzb3I7XG4gICAgICAgIGlmIChvdmVycmlkZSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlO1xuICAgICAgICBsZXQgZGVmbHQgPSBwYXJlbnQuY29udGVudE1hdGNoQXQoJHBvcy5pbmRleCgpKS5kZWZhdWx0VHlwZTtcbiAgICAgICAgcmV0dXJuIGRlZmx0ICYmIGRlZmx0LmlzVGV4dGJsb2NrO1xuICAgIH1cbiAgICAvKipcbiAgICBAaW50ZXJuYWxcbiAgICAqL1xuICAgIHN0YXRpYyBmaW5kR2FwQ3Vyc29yRnJvbSgkcG9zLCBkaXIsIG11c3RNb3ZlID0gZmFsc2UpIHtcbiAgICAgICAgc2VhcmNoOiBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpZiAoIW11c3RNb3ZlICYmIEdhcEN1cnNvci52YWxpZCgkcG9zKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJHBvcztcbiAgICAgICAgICAgIGxldCBwb3MgPSAkcG9zLnBvcywgbmV4dCA9IG51bGw7XG4gICAgICAgICAgICAvLyBTY2FuIHVwIGZyb20gdGhpcyBwb3NpdGlvblxuICAgICAgICAgICAgZm9yIChsZXQgZCA9ICRwb3MuZGVwdGg7OyBkLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICAgICAgICAgIGlmIChkaXIgPiAwID8gJHBvcy5pbmRleEFmdGVyKGQpIDwgcGFyZW50LmNoaWxkQ291bnQgOiAkcG9zLmluZGV4KGQpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gcGFyZW50LmNoaWxkKGRpciA+IDAgPyAkcG9zLmluZGV4QWZ0ZXIoZCkgOiAkcG9zLmluZGV4KGQpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvcyArPSBkaXI7XG4gICAgICAgICAgICAgICAgbGV0ICRjdXIgPSAkcG9zLmRvYy5yZXNvbHZlKHBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKEdhcEN1cnNvci52YWxpZCgkY3VyKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbmQgdGhlbiBkb3duIGludG8gdGhlIG5leHQgbm9kZVxuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIGxldCBpbnNpZGUgPSBkaXIgPiAwID8gbmV4dC5maXJzdENoaWxkIDogbmV4dC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuaXNBdG9tICYmICFuZXh0LmlzVGV4dCAmJiAhTm9kZVNlbGVjdGlvbi5pc1NlbGVjdGFibGUobmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwb3MgPSAkcG9zLmRvYy5yZXNvbHZlKHBvcyArIG5leHQubm9kZVNpemUgKiBkaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHNlYXJjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCA9IGluc2lkZTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gZGlyO1xuICAgICAgICAgICAgICAgIGxldCAkY3VyID0gJHBvcy5kb2MucmVzb2x2ZShwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChHYXBDdXJzb3IudmFsaWQoJGN1cikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5HYXBDdXJzb3IucHJvdG90eXBlLnZpc2libGUgPSBmYWxzZTtcbkdhcEN1cnNvci5maW5kRnJvbSA9IEdhcEN1cnNvci5maW5kR2FwQ3Vyc29yRnJvbTtcblNlbGVjdGlvbi5qc29uSUQoXCJnYXBjdXJzb3JcIiwgR2FwQ3Vyc29yKTtcbmNsYXNzIEdhcEJvb2ttYXJrIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgfVxuICAgIG1hcChtYXBwaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2FwQm9va21hcmsobWFwcGluZy5tYXAodGhpcy5wb3MpKTtcbiAgICB9XG4gICAgcmVzb2x2ZShkb2MpIHtcbiAgICAgICAgbGV0ICRwb3MgPSBkb2MucmVzb2x2ZSh0aGlzLnBvcyk7XG4gICAgICAgIHJldHVybiBHYXBDdXJzb3IudmFsaWQoJHBvcykgPyBuZXcgR2FwQ3Vyc29yKCRwb3MpIDogU2VsZWN0aW9uLm5lYXIoJHBvcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xvc2VkQmVmb3JlKCRwb3MpIHtcbiAgICBmb3IgKGxldCBkID0gJHBvcy5kZXB0aDsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gJHBvcy5pbmRleChkKSwgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICAvLyBBdCB0aGUgc3RhcnQgb2YgdGhpcyBwYXJlbnQsIGxvb2sgYXQgbmV4dCBvbmVcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlZSBpZiB0aGUgbm9kZSBiZWZvcmUgKG9yIGl0cyBmaXJzdCBhbmNlc3RvcikgaXMgY2xvc2VkXG4gICAgICAgIGZvciAobGV0IGJlZm9yZSA9IHBhcmVudC5jaGlsZChpbmRleCAtIDEpOzsgYmVmb3JlID0gYmVmb3JlLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgaWYgKChiZWZvcmUuY2hpbGRDb3VudCA9PSAwICYmICFiZWZvcmUuaW5saW5lQ29udGVudCkgfHwgYmVmb3JlLmlzQXRvbSB8fCBiZWZvcmUudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChiZWZvcmUuaW5saW5lQ29udGVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGl0IHN0YXJ0IG9mIGRvY3VtZW50XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBjbG9zZWRBZnRlcigkcG9zKSB7XG4gICAgZm9yIChsZXQgZCA9ICRwb3MuZGVwdGg7IGQgPj0gMDsgZC0tKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICRwb3MuaW5kZXhBZnRlcihkKSwgcGFyZW50ID0gJHBvcy5ub2RlKGQpO1xuICAgICAgICBpZiAoaW5kZXggPT0gcGFyZW50LmNoaWxkQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZS5zcGVjLmlzb2xhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGFmdGVyID0gcGFyZW50LmNoaWxkKGluZGV4KTs7IGFmdGVyID0gYWZ0ZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaWYgKChhZnRlci5jaGlsZENvdW50ID09IDAgJiYgIWFmdGVyLmlubGluZUNvbnRlbnQpIHx8IGFmdGVyLmlzQXRvbSB8fCBhZnRlci50eXBlLnNwZWMuaXNvbGF0aW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKGFmdGVyLmlubGluZUNvbnRlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbkNyZWF0ZSBhIGdhcCBjdXJzb3IgcGx1Z2luLiBXaGVuIGVuYWJsZWQsIHRoaXMgd2lsbCBjYXB0dXJlIGNsaWNrc1xubmVhciBhbmQgYXJyb3cta2V5LW1vdGlvbiBwYXN0IHBsYWNlcyB0aGF0IGRvbid0IGhhdmUgYSBub3JtYWxseVxuc2VsZWN0YWJsZSBwb3NpdGlvbiBuZWFyYnksIGFuZCBjcmVhdGUgYSBnYXAgY3Vyc29yIHNlbGVjdGlvbiBmb3JcbnRoZW0uIFRoZSBjdXJzb3IgaXMgZHJhd24gYXMgYW4gZWxlbWVudCB3aXRoIGNsYXNzXG5gUHJvc2VNaXJyb3ItZ2FwY3Vyc29yYC4gWW91IGNhbiBlaXRoZXIgaW5jbHVkZVxuYHN0eWxlL2dhcGN1cnNvci5jc3NgIGZyb20gdGhlIHBhY2thZ2UncyBkaXJlY3Rvcnkgb3IgYWRkIHlvdXIgb3duXG5zdHlsZXMgdG8gbWFrZSBpdCB2aXNpYmxlLlxuKi9cbmZ1bmN0aW9uIGdhcEN1cnNvcigpIHtcbiAgICByZXR1cm4gbmV3IFBsdWdpbih7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uczogZHJhd0dhcEN1cnNvcixcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdGlvbkJldHdlZW4oX3ZpZXcsICRhbmNob3IsICRoZWFkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRhbmNob3IucG9zID09ICRoZWFkLnBvcyAmJiBHYXBDdXJzb3IudmFsaWQoJGhlYWQpID8gbmV3IEdhcEN1cnNvcigkaGVhZCkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrLFxuICAgICAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgIGhhbmRsZURPTUV2ZW50czogeyBiZWZvcmVpbnB1dDogYmVmb3JlaW5wdXQgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5jb25zdCBoYW5kbGVLZXlEb3duID0ga2V5ZG93bkhhbmRsZXIoe1xuICAgIFwiQXJyb3dMZWZ0XCI6IGFycm93KFwiaG9yaXpcIiwgLTEpLFxuICAgIFwiQXJyb3dSaWdodFwiOiBhcnJvdyhcImhvcml6XCIsIDEpLFxuICAgIFwiQXJyb3dVcFwiOiBhcnJvdyhcInZlcnRcIiwgLTEpLFxuICAgIFwiQXJyb3dEb3duXCI6IGFycm93KFwidmVydFwiLCAxKVxufSk7XG5mdW5jdGlvbiBhcnJvdyhheGlzLCBkaXIpIHtcbiAgICBjb25zdCBkaXJTdHIgPSBheGlzID09IFwidmVydFwiID8gKGRpciA+IDAgPyBcImRvd25cIiA6IFwidXBcIikgOiAoZGlyID4gMCA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBkaXNwYXRjaCwgdmlldykge1xuICAgICAgICBsZXQgc2VsID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgJHN0YXJ0ID0gZGlyID4gMCA/IHNlbC4kdG8gOiBzZWwuJGZyb20sIG11c3RNb3ZlID0gc2VsLmVtcHR5O1xuICAgICAgICBpZiAoc2VsIGluc3RhbmNlb2YgVGV4dFNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKCF2aWV3LmVuZE9mVGV4dGJsb2NrKGRpclN0cikgfHwgJHN0YXJ0LmRlcHRoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbXVzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICRzdGFydCA9IHN0YXRlLmRvYy5yZXNvbHZlKGRpciA+IDAgPyAkc3RhcnQuYWZ0ZXIoKSA6ICRzdGFydC5iZWZvcmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0ICRmb3VuZCA9IEdhcEN1cnNvci5maW5kR2FwQ3Vyc29yRnJvbSgkc3RhcnQsIGRpciwgbXVzdE1vdmUpO1xuICAgICAgICBpZiAoISRmb3VuZClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRpc3BhdGNoKVxuICAgICAgICAgICAgZGlzcGF0Y2goc3RhdGUudHIuc2V0U2VsZWN0aW9uKG5ldyBHYXBDdXJzb3IoJGZvdW5kKSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaGFuZGxlQ2xpY2sodmlldywgcG9zLCBldmVudCkge1xuICAgIGlmICghdmlldyB8fCAhdmlldy5lZGl0YWJsZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCAkcG9zID0gdmlldy5zdGF0ZS5kb2MucmVzb2x2ZShwb3MpO1xuICAgIGlmICghR2FwQ3Vyc29yLnZhbGlkKCRwb3MpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNsaWNrUG9zID0gdmlldy5wb3NBdENvb3Jkcyh7IGxlZnQ6IGV2ZW50LmNsaWVudFgsIHRvcDogZXZlbnQuY2xpZW50WSB9KTtcbiAgICBpZiAoY2xpY2tQb3MgJiYgY2xpY2tQb3MuaW5zaWRlID4gLTEgJiYgTm9kZVNlbGVjdGlvbi5pc1NlbGVjdGFibGUodmlldy5zdGF0ZS5kb2Mubm9kZUF0KGNsaWNrUG9zLmluc2lkZSkpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmlldy5kaXNwYXRjaCh2aWV3LnN0YXRlLnRyLnNldFNlbGVjdGlvbihuZXcgR2FwQ3Vyc29yKCRwb3MpKSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyBUaGlzIGlzIGEgaGFjayB0aGF0LCB3aGVuIGEgY29tcG9zaXRpb24gc3RhcnRzIHdoaWxlIGEgZ2FwIGN1cnNvclxuLy8gaXMgYWN0aXZlLCBxdWlja2x5IGNyZWF0ZXMgYW4gaW5saW5lIGNvbnRleHQgZm9yIHRoZSBjb21wb3NpdGlvbiB0b1xuLy8gaGFwcGVuIGluLCB0byBhdm9pZCBpdCBiZWluZyBhYm9ydGVkIGJ5IHRoZSBET00gc2VsZWN0aW9uIGJlaW5nXG4vLyBtb3ZlZCBpbnRvIGEgdmFsaWQgcG9zaXRpb24uXG5mdW5jdGlvbiBiZWZvcmVpbnB1dCh2aWV3LCBldmVudCkge1xuICAgIGlmIChldmVudC5pbnB1dFR5cGUgIT0gXCJpbnNlcnRDb21wb3NpdGlvblRleHRcIiB8fCAhKHZpZXcuc3RhdGUuc2VsZWN0aW9uIGluc3RhbmNlb2YgR2FwQ3Vyc29yKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB7ICRmcm9tIH0gPSB2aWV3LnN0YXRlLnNlbGVjdGlvbjtcbiAgICBsZXQgaW5zZXJ0ID0gJGZyb20ucGFyZW50LmNvbnRlbnRNYXRjaEF0KCRmcm9tLmluZGV4KCkpLmZpbmRXcmFwcGluZyh2aWV3LnN0YXRlLnNjaGVtYS5ub2Rlcy50ZXh0KTtcbiAgICBpZiAoIWluc2VydClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBmcmFnID0gRnJhZ21lbnQuZW1wdHk7XG4gICAgZm9yIChsZXQgaSA9IGluc2VydC5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgICAgZnJhZyA9IEZyYWdtZW50LmZyb20oaW5zZXJ0W2ldLmNyZWF0ZUFuZEZpbGwobnVsbCwgZnJhZykpO1xuICAgIGxldCB0ciA9IHZpZXcuc3RhdGUudHIucmVwbGFjZSgkZnJvbS5wb3MsICRmcm9tLnBvcywgbmV3IFNsaWNlKGZyYWcsIDAsIDApKTtcbiAgICB0ci5zZXRTZWxlY3Rpb24oVGV4dFNlbGVjdGlvbi5uZWFyKHRyLmRvYy5yZXNvbHZlKCRmcm9tLnBvcyArIDEpKSk7XG4gICAgdmlldy5kaXNwYXRjaCh0cik7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZHJhd0dhcEN1cnNvcihzdGF0ZSkge1xuICAgIGlmICghKHN0YXRlLnNlbGVjdGlvbiBpbnN0YW5jZW9mIEdhcEN1cnNvcikpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IFwiUHJvc2VNaXJyb3ItZ2FwY3Vyc29yXCI7XG4gICAgcmV0dXJuIERlY29yYXRpb25TZXQuY3JlYXRlKHN0YXRlLmRvYywgW0RlY29yYXRpb24ud2lkZ2V0KHN0YXRlLnNlbGVjdGlvbi5oZWFkLCBub2RlLCB7IGtleTogXCJnYXBjdXJzb3JcIiB9KV0pO1xufVxuXG5leHBvcnQgeyBHYXBDdXJzb3IsIGdhcEN1cnNvciB9O1xuIl0sIm5hbWVzIjpbImtleWRvd25IYW5kbGVyIiwiU2VsZWN0aW9uIiwiTm9kZVNlbGVjdGlvbiIsIlRleHRTZWxlY3Rpb24iLCJQbHVnaW4iLCJTbGljZSIsIkZyYWdtZW50IiwiRGVjb3JhdGlvblNldCIsIkRlY29yYXRpb24iLCJHYXBDdXJzb3IiLCJjb25zdHJ1Y3RvciIsIiRwb3MiLCJtYXAiLCJkb2MiLCJtYXBwaW5nIiwicmVzb2x2ZSIsImhlYWQiLCJ2YWxpZCIsIm5lYXIiLCJjb250ZW50IiwiZW1wdHkiLCJlcSIsIm90aGVyIiwidG9KU09OIiwidHlwZSIsInBvcyIsImZyb21KU09OIiwianNvbiIsIlJhbmdlRXJyb3IiLCJnZXRCb29rbWFyayIsIkdhcEJvb2ttYXJrIiwiYW5jaG9yIiwicGFyZW50IiwiaXNUZXh0YmxvY2siLCJjbG9zZWRCZWZvcmUiLCJjbG9zZWRBZnRlciIsIm92ZXJyaWRlIiwic3BlYyIsImFsbG93R2FwQ3Vyc29yIiwiZGVmbHQiLCJjb250ZW50TWF0Y2hBdCIsImluZGV4IiwiZGVmYXVsdFR5cGUiLCJmaW5kR2FwQ3Vyc29yRnJvbSIsImRpciIsIm11c3RNb3ZlIiwic2VhcmNoIiwibmV4dCIsImQiLCJkZXB0aCIsIm5vZGUiLCJpbmRleEFmdGVyIiwiY2hpbGRDb3VudCIsImNoaWxkIiwiJGN1ciIsImluc2lkZSIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc0F0b20iLCJpc1RleHQiLCJpc1NlbGVjdGFibGUiLCJub2RlU2l6ZSIsInByb3RvdHlwZSIsInZpc2libGUiLCJmaW5kRnJvbSIsImpzb25JRCIsImlzb2xhdGluZyIsImJlZm9yZSIsImlubGluZUNvbnRlbnQiLCJhZnRlciIsImdhcEN1cnNvciIsInByb3BzIiwiZGVjb3JhdGlvbnMiLCJkcmF3R2FwQ3Vyc29yIiwiY3JlYXRlU2VsZWN0aW9uQmV0d2VlbiIsIl92aWV3IiwiJGFuY2hvciIsIiRoZWFkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRE9NRXZlbnRzIiwiYmVmb3JlaW5wdXQiLCJhcnJvdyIsImF4aXMiLCJkaXJTdHIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidmlldyIsInNlbCIsInNlbGVjdGlvbiIsIiRzdGFydCIsIiR0byIsIiRmcm9tIiwiZW5kT2ZUZXh0YmxvY2siLCIkZm91bmQiLCJ0ciIsInNldFNlbGVjdGlvbiIsImV2ZW50IiwiZWRpdGFibGUiLCJjbGlja1BvcyIsInBvc0F0Q29vcmRzIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwibm9kZUF0IiwiaW5wdXRUeXBlIiwiaW5zZXJ0IiwiZmluZFdyYXBwaW5nIiwic2NoZW1hIiwibm9kZXMiLCJ0ZXh0IiwiZnJhZyIsImkiLCJsZW5ndGgiLCJmcm9tIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ3aWRnZXQiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-gapcursor/dist/index.js\n");

/***/ })

};
;