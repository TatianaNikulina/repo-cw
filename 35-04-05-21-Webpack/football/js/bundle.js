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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _club__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club */ \"./src/club.js\");\n\n\nfunction main() {\n  document.querySelector(\"#form\").addEventListener(\"submit\", _club__WEBPACK_IMPORTED_MODULE_0__.prepareCreate);\n}\n\nmain();\n\n//# sourceURL=webpack://football/./src/app.js?");

/***/ }),

/***/ "./src/club.js":
/*!*********************!*\
  !*** ./src/club.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prepareCreate\": () => (/* binding */ prepareCreate)\n/* harmony export */ });\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team */ \"./src/team.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nlet club = {};\n\nfunction createClub(clubName, year, city, staff) {\n  const club = {\n    clubName: clubName,\n    year: year,\n    city: city,\n    staff: staff,\n    team: (0,_team__WEBPACK_IMPORTED_MODULE_0__.createTeam)(staff),\n  };\n  return club;\n}\n\nconst renderClub = () => {\n  document.querySelector(\"#club-form\").classList.add(\"hide\");\n  const app = document.querySelector(\"#app\");\n\n  const h1 = document.createElement(\"h2\");\n  h1.innerText = `Футбольный клуб: ${club.clubName}`;\n  const h2_1 = document.createElement(\"h3\");\n  h2_1.innerText = `Год основания: ${club.year}`;\n  const h2_2 = document.createElement(\"h3\");\n  h2_2.innerText = `Город: ${club.city}`;\n\n  app.appendChild(h1);\n  app.appendChild(h2_1);\n  app.appendChild(h2_2);\n\n  const table = document.createElement(\"table\");\n\n  const places = {\n    gk: \"Вратари\",\n    df: \"Защитники\",\n    mf: \"Полузащитники\",\n    fw: \"Нападающие\",\n  };\n\n  for (let key in places) {\n    table.appendChild((0,_libs__WEBPACK_IMPORTED_MODULE_1__.rowHeader)(places[key]));\n    club.team[key].forEach((player) => {\n      table.appendChild((0,_player__WEBPACK_IMPORTED_MODULE_2__.rowPlayer)(player));\n    });\n  }\n\n  app.appendChild(table);\n};\n\nconst prepareCreate = (event) => {\n  event.preventDefault();\n  const inputs = document.querySelectorAll(\"#form input\");\n  const prepValue = {};\n  for (let element of inputs) {\n    prepValue[element.id] = element.value;\n  }\n\n  club = createClub(prepValue.clubName, prepValue.year, prepValue.city, {\n    gk: prepValue.gk,\n    df: prepValue.df,\n    mf: prepValue.mf,\n    fw: prepValue.fw,\n  });\n\n  for (let element of inputs) {\n    element.value = \"\";\n  }\n  renderClub();\n};\n\n\n\n//# sourceURL=webpack://football/./src/club.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AGE\": () => (/* binding */ AGE),\n/* harmony export */   \"CONTRACT\": () => (/* binding */ CONTRACT),\n/* harmony export */   \"NAME\": () => (/* binding */ NAME)\n/* harmony export */ });\nconst AGE = 18;\nconst CONTRACT = 2022;\nconst NAME = \"Player\";\n\n\n\n//# sourceURL=webpack://football/./src/constants.js?");

/***/ }),

/***/ "./src/libs.js":
/*!*********************!*\
  !*** ./src/libs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rowHeader\": () => (/* binding */ rowHeader)\n/* harmony export */ });\nconst rowHeader = (title) => {\n  const tr = document.createElement(\"tr\");\n  const td = document.createElement(\"th\");\n  td.setAttribute(\"colspan\", 3);\n  td.innerText = title;\n  tr.appendChild(td);\n  return tr;\n};\n\n\n\n\n//# sourceURL=webpack://football/./src/libs.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer),\n/* harmony export */   \"rowPlayer\": () => (/* binding */ rowPlayer)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction createPlayer(pos, number) {\n  return {\n    fName: `${_constants__WEBPACK_IMPORTED_MODULE_0__.NAME}_${pos}_${number + 1}`,\n    position: pos,\n    age: _constants__WEBPACK_IMPORTED_MODULE_0__.AGE + Math.floor(Math.random() * Math.floor(7)),\n    contract: _constants__WEBPACK_IMPORTED_MODULE_0__.CONTRACT + Math.floor(Math.random() * Math.floor(4)),\n  };\n}\n\nconst rowPlayer = (player) => {\n  const tr = document.createElement(\"tr\");\n\n  for (let id of [\"fName\", \"age\", \"contract\"]) {\n    const td = document.createElement(\"td\");\n    td.innerText = player[id];\n    tr.appendChild(td);\n  }\n  return tr;\n};\n\n\n\n\n//# sourceURL=webpack://football/./src/player.js?");

/***/ }),

/***/ "./src/team.js":
/*!*********************!*\
  !*** ./src/team.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTeam\": () => (/* binding */ createTeam)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nfunction createTeam(ns) {\n  const team = {};\n  for (let key in ns) {\n    team[key] = [];\n    for (let i = 0; i < ns[key]; i++) {\n      team[key].push((0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(key, i));\n    }\n  }\n  return team;\n}\n\n\n//# sourceURL=webpack://football/./src/team.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;