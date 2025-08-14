"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/qss@3.0.0";
exports.ids = ["vendor-chunks/qss@3.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/qss@3.0.0/node_modules/qss/dist/qss.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/.pnpm/qss@3.0.0/node_modules/qss/dist/qss.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nfunction encode(obj, pfx) {\n\tvar k, i, tmp, str='';\n\n\tfor (k in obj) {\n\t\tif ((tmp = obj[k]) !== void 0) {\n\t\t\tif (Array.isArray(tmp)) {\n\t\t\t\tfor (i=0; i < tmp.length; i++) {\n\t\t\t\t\tstr && (str += '&');\n\t\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp[i]);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tstr && (str += '&');\n\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp);\n\t\t\t}\n\t\t}\n\t}\n\n\treturn (pfx || '') + str;\n}\n\nfunction toValue(mix) {\n\tif (!mix) return '';\n\tvar str = decodeURIComponent(mix);\n\tif (str === 'false') return false;\n\tif (str === 'true') return true;\n\treturn (+str * 0 === 0) ? (+str) : str;\n}\n\nfunction decode(str) {\n\tvar tmp, k, out={}, arr=str.split('&');\n\n\twhile (tmp = arr.shift()) {\n\t\ttmp = tmp.split('=');\n\t\tk = tmp.shift();\n\t\tif (out[k] !== void 0) {\n\t\t\tout[k] = [].concat(out[k], toValue(tmp.shift()));\n\t\t} else {\n\t\t\tout[k] = toValue(tmp.shift());\n\t\t}\n\t}\n\n\treturn out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcXNzQDMuMC4wL25vZGVfbW9kdWxlcy9xc3MvZGlzdC9xc3MubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FzYWFpLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3Fzc0AzLjAuMC9ub2RlX21vZHVsZXMvcXNzL2Rpc3QvcXNzLm1qcz8wZjZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlbmNvZGUob2JqLCBwZngpIHtcblx0dmFyIGssIGksIHRtcCwgc3RyPScnO1xuXG5cdGZvciAoayBpbiBvYmopIHtcblx0XHRpZiAoKHRtcCA9IG9ialtrXSkgIT09IHZvaWQgMCkge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodG1wKSkge1xuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHRtcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcmJyk7XG5cdFx0XHRcdFx0c3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChrKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0bXBbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnJicpO1xuXHRcdFx0XHRzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRtcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChwZnggfHwgJycpICsgc3RyO1xufVxuXG5mdW5jdGlvbiB0b1ZhbHVlKG1peCkge1xuXHRpZiAoIW1peCkgcmV0dXJuICcnO1xuXHR2YXIgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KG1peCk7XG5cdGlmIChzdHIgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcblx0aWYgKHN0ciA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuICgrc3RyICogMCA9PT0gMCkgPyAoK3N0cikgOiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG5cdHZhciB0bXAsIGssIG91dD17fSwgYXJyPXN0ci5zcGxpdCgnJicpO1xuXG5cdHdoaWxlICh0bXAgPSBhcnIuc2hpZnQoKSkge1xuXHRcdHRtcCA9IHRtcC5zcGxpdCgnPScpO1xuXHRcdGsgPSB0bXAuc2hpZnQoKTtcblx0XHRpZiAob3V0W2tdICE9PSB2b2lkIDApIHtcblx0XHRcdG91dFtrXSA9IFtdLmNvbmNhdChvdXRba10sIHRvVmFsdWUodG1wLnNoaWZ0KCkpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0W2tdID0gdG9WYWx1ZSh0bXAuc2hpZnQoKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG91dDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/qss@3.0.0/node_modules/qss/dist/qss.mjs\n");

/***/ })

};
;