/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://galler.proj/./src/main.scss?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/melnica.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/gory.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/domik.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/cat.gif'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\nconst cards = [\r\n    {id: 1, title: 'Мельница у реки', img: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/melnica.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())},\r\n    {id: 2, title: 'Горы осенью', img: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/gory.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())},\r\n    {id: 3, title: 'Деревня летом', img: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/domik.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())},\r\n    {id: 4, title: 'Горы осенью', img: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../media/images/cat.gif'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())},\r\n    {id: 5, title: 'Горы осенью', audio},\r\n    {id: 6, title: 'Горы осенью', img:''},\r\n    {id: 7, title: 'Горы осенью', img:''},\r\n    {id: 8, title: 'Горы осенью', img:''},\r\n\r\n    {id: 9, title: 'Горы осенью', img:''}\r\n];\r\n\r\nconst infoCard = (card) => {\r\n    return `<div class=\"card-item\">\r\n                <img src=\"${card.img}\">\r\n                <p class=\"card-text\">${card.title}</p>\r\n            </div> `\r\n};\r\n\r\nconst runCard = list => {\r\n    document.querySelector('.gallery-cards').innerHTML = list.map(item => infoCard(item)).join('');\r\n}\r\n\r\nrunCard(cards);\n\n//# sourceURL=webpack://galler.proj/./src/cards.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://galler.proj/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;