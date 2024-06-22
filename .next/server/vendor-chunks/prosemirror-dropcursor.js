"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-dropcursor";
exports.ids = ["vendor-chunks/prosemirror-dropcursor"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-dropcursor/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/prosemirror-dropcursor/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dropCursor: () => (/* binding */ dropCursor)\n/* harmony export */ });\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ \"(ssr)/./node_modules/prosemirror-transform/dist/index.js\");\n\n\n/**\nCreate a plugin that, when added to a ProseMirror instance,\ncauses a decoration to show up at the drop position when something\nis dragged over the editor.\n\nNodes may add a `disableDropCursor` property to their spec to\ncontrol the showing of a drop cursor inside them. This may be a\nboolean or a function, which will be called with a view and a\nposition, and should return a boolean.\n*/ function dropCursor(options = {}) {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({\n        view (editorView) {\n            return new DropCursorView(editorView, options);\n        }\n    });\n}\nclass DropCursorView {\n    constructor(editorView, options){\n        var _a;\n        this.editorView = editorView;\n        this.cursorPos = null;\n        this.element = null;\n        this.timeout = -1;\n        this.width = (_a = options.width) !== null && _a !== void 0 ? _a : 1;\n        this.color = options.color === false ? undefined : options.color || \"black\";\n        this.class = options.class;\n        this.handlers = [\n            \"dragover\",\n            \"dragend\",\n            \"drop\",\n            \"dragleave\"\n        ].map((name)=>{\n            let handler = (e)=>{\n                this[name](e);\n            };\n            editorView.dom.addEventListener(name, handler);\n            return {\n                name,\n                handler\n            };\n        });\n    }\n    destroy() {\n        this.handlers.forEach(({ name, handler })=>this.editorView.dom.removeEventListener(name, handler));\n    }\n    update(editorView, prevState) {\n        if (this.cursorPos != null && prevState.doc != editorView.state.doc) {\n            if (this.cursorPos > editorView.state.doc.content.size) this.setCursor(null);\n            else this.updateOverlay();\n        }\n    }\n    setCursor(pos) {\n        if (pos == this.cursorPos) return;\n        this.cursorPos = pos;\n        if (pos == null) {\n            this.element.parentNode.removeChild(this.element);\n            this.element = null;\n        } else {\n            this.updateOverlay();\n        }\n    }\n    updateOverlay() {\n        let $pos = this.editorView.state.doc.resolve(this.cursorPos);\n        let isBlock = !$pos.parent.inlineContent, rect;\n        if (isBlock) {\n            let before = $pos.nodeBefore, after = $pos.nodeAfter;\n            if (before || after) {\n                let node = this.editorView.nodeDOM(this.cursorPos - (before ? before.nodeSize : 0));\n                if (node) {\n                    let nodeRect = node.getBoundingClientRect();\n                    let top = before ? nodeRect.bottom : nodeRect.top;\n                    if (before && after) top = (top + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;\n                    rect = {\n                        left: nodeRect.left,\n                        right: nodeRect.right,\n                        top: top - this.width / 2,\n                        bottom: top + this.width / 2\n                    };\n                }\n            }\n        }\n        if (!rect) {\n            let coords = this.editorView.coordsAtPos(this.cursorPos);\n            rect = {\n                left: coords.left - this.width / 2,\n                right: coords.left + this.width / 2,\n                top: coords.top,\n                bottom: coords.bottom\n            };\n        }\n        let parent = this.editorView.dom.offsetParent;\n        if (!this.element) {\n            this.element = parent.appendChild(document.createElement(\"div\"));\n            if (this.class) this.element.className = this.class;\n            this.element.style.cssText = \"position: absolute; z-index: 50; pointer-events: none;\";\n            if (this.color) {\n                this.element.style.backgroundColor = this.color;\n            }\n        }\n        this.element.classList.toggle(\"prosemirror-dropcursor-block\", isBlock);\n        this.element.classList.toggle(\"prosemirror-dropcursor-inline\", !isBlock);\n        let parentLeft, parentTop;\n        if (!parent || parent == document.body && getComputedStyle(parent).position == \"static\") {\n            parentLeft = -pageXOffset;\n            parentTop = -pageYOffset;\n        } else {\n            let rect = parent.getBoundingClientRect();\n            parentLeft = rect.left - parent.scrollLeft;\n            parentTop = rect.top - parent.scrollTop;\n        }\n        this.element.style.left = rect.left - parentLeft + \"px\";\n        this.element.style.top = rect.top - parentTop + \"px\";\n        this.element.style.width = rect.right - rect.left + \"px\";\n        this.element.style.height = rect.bottom - rect.top + \"px\";\n    }\n    scheduleRemoval(timeout) {\n        clearTimeout(this.timeout);\n        this.timeout = setTimeout(()=>this.setCursor(null), timeout);\n    }\n    dragover(event) {\n        if (!this.editorView.editable) return;\n        let pos = this.editorView.posAtCoords({\n            left: event.clientX,\n            top: event.clientY\n        });\n        let node = pos && pos.inside >= 0 && this.editorView.state.doc.nodeAt(pos.inside);\n        let disableDropCursor = node && node.type.spec.disableDropCursor;\n        let disabled = typeof disableDropCursor == \"function\" ? disableDropCursor(this.editorView, pos, event) : disableDropCursor;\n        if (pos && !disabled) {\n            let target = pos.pos;\n            if (this.editorView.dragging && this.editorView.dragging.slice) {\n                let point = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.dropPoint)(this.editorView.state.doc, target, this.editorView.dragging.slice);\n                if (point != null) target = point;\n            }\n            this.setCursor(target);\n            this.scheduleRemoval(5000);\n        }\n    }\n    dragend() {\n        this.scheduleRemoval(20);\n    }\n    drop() {\n        this.scheduleRemoval(20);\n    }\n    dragleave(event) {\n        if (event.target == this.editorView.dom || !this.editorView.dom.contains(event.relatedTarget)) this.setCursor(null);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZHJvcGN1cnNvci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNPO0FBRWxEOzs7Ozs7Ozs7QUFTQSxHQUNBLFNBQVNFLFdBQVdDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSUgscURBQU1BLENBQUM7UUFDZEksTUFBS0MsVUFBVTtZQUFJLE9BQU8sSUFBSUMsZUFBZUQsWUFBWUY7UUFBVTtJQUN2RTtBQUNKO0FBQ0EsTUFBTUc7SUFDRkMsWUFBWUYsVUFBVSxFQUFFRixPQUFPLENBQUU7UUFDN0IsSUFBSUs7UUFDSixJQUFJLENBQUNILFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDSSxTQUFTLEdBQUc7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUc7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUNKLEtBQUtMLFFBQVFTLEtBQUssTUFBTSxRQUFRSixPQUFPLEtBQUssSUFBSUEsS0FBSztRQUNuRSxJQUFJLENBQUNLLEtBQUssR0FBR1YsUUFBUVUsS0FBSyxLQUFLLFFBQVFDLFlBQWFYLFFBQVFVLEtBQUssSUFBSTtRQUNyRSxJQUFJLENBQUNFLEtBQUssR0FBR1osUUFBUVksS0FBSztRQUMxQixJQUFJLENBQUNDLFFBQVEsR0FBRztZQUFDO1lBQVk7WUFBVztZQUFRO1NBQVksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQTtZQUM3RCxJQUFJQyxVQUFVLENBQUNDO2dCQUFRLElBQUksQ0FBQ0YsS0FBSyxDQUFDRTtZQUFJO1lBQ3RDZixXQUFXZ0IsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQ0osTUFBTUM7WUFDdEMsT0FBTztnQkFBRUQ7Z0JBQU1DO1lBQVE7UUFDM0I7SUFDSjtJQUNBSSxVQUFVO1FBQ04sSUFBSSxDQUFDUCxRQUFRLENBQUNRLE9BQU8sQ0FBQyxDQUFDLEVBQUVOLElBQUksRUFBRUMsT0FB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QUFDNkQ7WUFDZixJQUFJLENBQUNmLGVBQWUsQ0FBQztRQUN6QjtJQUNKO0lBQ0FtQixVQUFVO1FBQ04sSUFBSSxDQUFDbkIsZUFBZSxDQUFDO0lBQ3pCO0lBQ0FvQixPQUFPO1FBQ0gsSUFBSSxDQUFDcEIsZUFBZSxDQUFDO0lBQ3pCO0lBQ0FxQixVQUFVakIsS0FBSyxFQUFFO1FBQ2IsSUFBSUEsTUFBTVcsTUFBTSxJQUFJLElBQUksQ0FBQ3hGLFVBQVUsQ0FBQ2dCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2dCLEdBQUcsQ0FBQytFLFFBQVEsQ0FBQ2xCLE1BQU1tQixhQUFhLEdBQ3hGLElBQUksQ0FBQ3JFLFNBQVMsQ0FBQztJQUN2QjtBQUNKO0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Utam91cm5hbC8uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1kcm9wY3Vyc29yL2Rpc3QvaW5kZXguanM/OWVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdwcm9zZW1pcnJvci1zdGF0ZSc7XG5pbXBvcnQgeyBkcm9wUG9pbnQgfSBmcm9tICdwcm9zZW1pcnJvci10cmFuc2Zvcm0nO1xuXG4vKipcbkNyZWF0ZSBhIHBsdWdpbiB0aGF0LCB3aGVuIGFkZGVkIHRvIGEgUHJvc2VNaXJyb3IgaW5zdGFuY2UsXG5jYXVzZXMgYSBkZWNvcmF0aW9uIHRvIHNob3cgdXAgYXQgdGhlIGRyb3AgcG9zaXRpb24gd2hlbiBzb21ldGhpbmdcbmlzIGRyYWdnZWQgb3ZlciB0aGUgZWRpdG9yLlxuXG5Ob2RlcyBtYXkgYWRkIGEgYGRpc2FibGVEcm9wQ3Vyc29yYCBwcm9wZXJ0eSB0byB0aGVpciBzcGVjIHRvXG5jb250cm9sIHRoZSBzaG93aW5nIG9mIGEgZHJvcCBjdXJzb3IgaW5zaWRlIHRoZW0uIFRoaXMgbWF5IGJlIGFcbmJvb2xlYW4gb3IgYSBmdW5jdGlvbiwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHZpZXcgYW5kIGFcbnBvc2l0aW9uLCBhbmQgc2hvdWxkIHJldHVybiBhIGJvb2xlYW4uXG4qL1xuZnVuY3Rpb24gZHJvcEN1cnNvcihvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFBsdWdpbih7XG4gICAgICAgIHZpZXcoZWRpdG9yVmlldykgeyByZXR1cm4gbmV3IERyb3BDdXJzb3JWaWV3KGVkaXRvclZpZXcsIG9wdGlvbnMpOyB9XG4gICAgfSk7XG59XG5jbGFzcyBEcm9wQ3Vyc29yVmlldyB7XG4gICAgY29uc3RydWN0b3IoZWRpdG9yVmlldywgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuZWRpdG9yVmlldyA9IGVkaXRvclZpZXc7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gLTE7XG4gICAgICAgIHRoaXMud2lkdGggPSAoX2EgPSBvcHRpb25zLndpZHRoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxO1xuICAgICAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciA9PT0gZmFsc2UgPyB1bmRlZmluZWQgOiAob3B0aW9ucy5jb2xvciB8fCBcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcztcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtcImRyYWdvdmVyXCIsIFwiZHJhZ2VuZFwiLCBcImRyb3BcIiwgXCJkcmFnbGVhdmVcIl0ubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4geyB0aGlzW25hbWVdKGUpOyB9O1xuICAgICAgICAgICAgZWRpdG9yVmlldy5kb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGhhbmRsZXIgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoeyBuYW1lLCBoYW5kbGVyIH0pID0+IHRoaXMuZWRpdG9yVmlldy5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKSk7XG4gICAgfVxuICAgIHVwZGF0ZShlZGl0b3JWaWV3LCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yUG9zICE9IG51bGwgJiYgcHJldlN0YXRlLmRvYyAhPSBlZGl0b3JWaWV3LnN0YXRlLmRvYykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29yUG9zID4gZWRpdG9yVmlldy5zdGF0ZS5kb2MuY29udGVudC5zaXplKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKG51bGwpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEN1cnNvcihwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PSB0aGlzLmN1cnNvclBvcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSBwb3M7XG4gICAgICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgICBsZXQgJHBvcyA9IHRoaXMuZWRpdG9yVmlldy5zdGF0ZS5kb2MucmVzb2x2ZSh0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIGxldCBpc0Jsb2NrID0gISRwb3MucGFyZW50LmlubGluZUNvbnRlbnQsIHJlY3Q7XG4gICAgICAgIGlmIChpc0Jsb2NrKSB7XG4gICAgICAgICAgICBsZXQgYmVmb3JlID0gJHBvcy5ub2RlQmVmb3JlLCBhZnRlciA9ICRwb3Mubm9kZUFmdGVyO1xuICAgICAgICAgICAgaWYgKGJlZm9yZSB8fCBhZnRlcikge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5lZGl0b3JWaWV3Lm5vZGVET00odGhpcy5jdXJzb3JQb3MgLSAoYmVmb3JlID8gYmVmb3JlLm5vZGVTaXplIDogMCkpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlUmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3AgPSBiZWZvcmUgPyBub2RlUmVjdC5ib3R0b20gOiBub2RlUmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUgJiYgYWZ0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAodG9wICsgdGhpcy5lZGl0b3JWaWV3Lm5vZGVET00odGhpcy5jdXJzb3JQb3MpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICByZWN0ID0geyBsZWZ0OiBub2RlUmVjdC5sZWZ0LCByaWdodDogbm9kZVJlY3QucmlnaHQsIHRvcDogdG9wIC0gdGhpcy53aWR0aCAvIDIsIGJvdHRvbTogdG9wICsgdGhpcy53aWR0aCAvIDIgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWN0KSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gdGhpcy5lZGl0b3JWaWV3LmNvb3Jkc0F0UG9zKHRoaXMuY3Vyc29yUG9zKTtcbiAgICAgICAgICAgIHJlY3QgPSB7IGxlZnQ6IGNvb3Jkcy5sZWZ0IC0gdGhpcy53aWR0aCAvIDIsIHJpZ2h0OiBjb29yZHMubGVmdCArIHRoaXMud2lkdGggLyAyLCB0b3A6IGNvb3Jkcy50b3AsIGJvdHRvbTogY29vcmRzLmJvdHRvbSB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmVkaXRvclZpZXcuZG9tLm9mZnNldFBhcmVudDtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzKVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmNsYXNzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNTA7IHBvaW50ZXItZXZlbnRzOiBub25lO1wiO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInByb3NlbWlycm9yLWRyb3BjdXJzb3ItYmxvY2tcIiwgaXNCbG9jayk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvc2VtaXJyb3ItZHJvcGN1cnNvci1pbmxpbmVcIiwgIWlzQmxvY2spO1xuICAgICAgICBsZXQgcGFyZW50TGVmdCwgcGFyZW50VG9wO1xuICAgICAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQuYm9keSAmJiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgcGFyZW50TGVmdCA9IC1wYWdlWE9mZnNldDtcbiAgICAgICAgICAgIHBhcmVudFRvcCA9IC1wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgcGFyZW50TGVmdCA9IHJlY3QubGVmdCAtIHBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgcGFyZW50VG9wID0gcmVjdC50b3AgLSBwYXJlbnQuc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gKHJlY3QubGVmdCAtIHBhcmVudExlZnQpICsgXCJweFwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gKHJlY3QudG9wIC0gcGFyZW50VG9wKSArIFwicHhcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpICsgXCJweFwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApICsgXCJweFwiO1xuICAgIH1cbiAgICBzY2hlZHVsZVJlbW92YWwodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldEN1cnNvcihudWxsKSwgdGltZW91dCk7XG4gICAgfVxuICAgIGRyYWdvdmVyKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lZGl0b3JWaWV3LmVkaXRhYmxlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5lZGl0b3JWaWV3LnBvc0F0Q29vcmRzKHsgbGVmdDogZXZlbnQuY2xpZW50WCwgdG9wOiBldmVudC5jbGllbnRZIH0pO1xuICAgICAgICBsZXQgbm9kZSA9IHBvcyAmJiBwb3MuaW5zaWRlID49IDAgJiYgdGhpcy5lZGl0b3JWaWV3LnN0YXRlLmRvYy5ub2RlQXQocG9zLmluc2lkZSk7XG4gICAgICAgIGxldCBkaXNhYmxlRHJvcEN1cnNvciA9IG5vZGUgJiYgbm9kZS50eXBlLnNwZWMuZGlzYWJsZURyb3BDdXJzb3I7XG4gICAgICAgIGxldCBkaXNhYmxlZCA9IHR5cGVvZiBkaXNhYmxlRHJvcEN1cnNvciA9PSBcImZ1bmN0aW9uXCIgPyBkaXNhYmxlRHJvcEN1cnNvcih0aGlzLmVkaXRvclZpZXcsIHBvcywgZXZlbnQpIDogZGlzYWJsZURyb3BDdXJzb3I7XG4gICAgICAgIGlmIChwb3MgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcG9zLnBvcztcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvclZpZXcuZHJhZ2dpbmcgJiYgdGhpcy5lZGl0b3JWaWV3LmRyYWdnaW5nLnNsaWNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gZHJvcFBvaW50KHRoaXMuZWRpdG9yVmlldy5zdGF0ZS5kb2MsIHRhcmdldCwgdGhpcy5lZGl0b3JWaWV3LmRyYWdnaW5nLnNsaWNlKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcih0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVJlbW92YWwoNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhZ2VuZCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlbW92YWwoMjApO1xuICAgIH1cbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlUmVtb3ZhbCgyMCk7XG4gICAgfVxuICAgIGRyYWdsZWF2ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuZWRpdG9yVmlldy5kb20gfHwgIXRoaXMuZWRpdG9yVmlldy5kb20uY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihudWxsKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGRyb3BDdXJzb3IgfTtcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJkcm9wUG9pbnQiLCJkcm9wQ3Vyc29yIiwib3B0aW9ucyIsInZpZXciLCJlZGl0b3JWaWV3IiwiRHJvcEN1cnNvclZpZXciLCJjb25zdHJ1Y3RvciIsIl9hIiwiY3Vyc29yUG9zIiwiZWxlbWVudCIsInRpbWVvdXQiLCJ3aWR0aCIsImNvbG9yIiwidW5kZWZpbmVkIiwiY2xhc3MiLCJoYW5kbGVycyIsIm1hcCIsIm5hbWUiLCJoYW5kbGVyIiwiZSIsImRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJwcmV2U3RhdGUiLCJkb2MiLCJzdGF0ZSIsImNvbnRlbnQiLCJzaXplIiwic2V0Q3Vyc29yIiwidXBkYXRlT3ZlcmxheSIsInBvcyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIiRwb3MiLCJyZXNvbHZlIiwiaXNCbG9jayIsInBhcmVudCIsImlubGluZUNvbnRlbnQiLCJyZWN0IiwiYmVmb3JlIiwibm9kZUJlZm9yZSIsImFmdGVyIiwibm9kZUFmdGVyIiwibm9kZSIsIm5vZGVET00iLCJub2RlU2l6ZSIsIm5vZGVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY29vcmRzIiwiY29vcmRzQXRQb3MiLCJvZmZzZXRQYXJlbnQiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiY3NzVGV4dCIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhcmVudExlZnQiLCJwYXJlbnRUb3AiLCJib2R5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJoZWlnaHQiLCJzY2hlZHVsZVJlbW92YWwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZHJhZ292ZXIiLCJldmVudCIsImVkaXRhYmxlIiwicG9zQXRDb29yZHMiLCJjbGllbnRYIiwiY2xpZW50WSIsImluc2lkZSIsIm5vZGVBdCIsImRpc2FibGVEcm9wQ3Vyc29yIiwidHlwZSIsInNwZWMiLCJkaXNhYmxlZCIsInRhcmdldCIsImRyYWdnaW5nIiwic2xpY2UiLCJwb2ludCIsImRyYWdlbmQiLCJkcm9wIiwiZHJhZ2xlYXZlIiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-dropcursor/dist/index.js\n");

/***/ })

};
;