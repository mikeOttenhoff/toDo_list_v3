/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: inherit;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

#root,
#__next {
  isolation: isolate;
}

button,
li,
a {
  all: unset;
}

/* Color Theme Swatches in RGBA */
body {
  background-color: rgb(241, 242, 239);
  position: relative;
}

.container {
  position: relative;
  padding: 1rem;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: start;
}

h1 {
  grid-column: 1/-1;
  text-align: center;
  align-self: center;
  font-size: 8rem;
}

.sort_todo_container {
  position: relative;
  grid-column: 2/-1;
  background-color: rgb(220, 220, 220);
  display: grid;
}
.sort_todo_container .sortToggle {
  grid-column: 1/-1;
  width: 20%;
  padding: 1rem;
  border: none;
  background-color: rgb(200, 200, 200);
}
.sort_todo_container .toDo_container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.sort_todo_container .toDo_container .toDo_project_container {
  min-height: 4rem;
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(200, 200, 200);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.sort_todo_container .toDo_container .toDo_project_container_title {
  font-size: 3rem;
  font-weight: 300;
}

.addToDo_btn {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  padding: 2rem;
  background-color: rgb(174, 42, 46);
  font-size: 4rem;
  font-weight: 900;
  color: rgb(241, 242, 239);
  transition: all 0.2s ease;
}
.addToDo_btn:hover {
  transform: scale(1.2);
  border-radius: 0.5rem;
}

.toDo_element {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  background-color: rgb(150, 150, 150);
  transition: all 200ms ease;
}
.toDo_element .toDo_title {
  display: flex;
  align-items: center;
}
.toDo_element .toDo_title_arrow {
  font-weight: 900;
}
.toDo_element .todo_content.hideContent {
  display: none;
  transform: translate(-2rem);
}
.toDo_element .todo_content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 3rem;
  margin-top: -0.7rem;
  transform: translate(0rem);
}
.toDo_element .todo_content p {
  grid-column: 1/-1;
}
.toDo_element .toDo_title_container {
  display: flex;
}
.toDo_element .toDo_title_container .toDo_title_arrow {
  display: inline-block;
  transition: transform 0.2s ease;
  margin-right: 1rem;
}
.toDo_element .toDo_title_container .toDo_title_arrow.expanded {
  transform: rotate(90deg);
}
.toDo_element .toDo_title_container .toDo_title {
  font-size: 2rem;
}
.toDo_element .toDo_edit_btn_img {
  width: 1.5rem;
  cursor: pointer;
  filter: invert(1) sepia(1) saturate(5) hue-rotate(180deg);
}

.toDo_input {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: visible;
}
.toDo_input::before {
  content: "";
}
.toDo_input input,
.toDo_input textarea {
  grid-column: 1/-1;
}
.toDo_input .send_btn {
  background-color: rgb(174, 42, 46);
  color: rgb(241, 242, 239);
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  padding: 1rem;
  justify-self: start;
}
.toDo_input .cancel_btn {
  position: fixed;
  right: -3rem;
  top: -3rem;
  font-size: 2em;
  font-weight: 900;
  color: rgb(241, 242, 239);
}

.toDo_overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  z-index: 50;
}

.sidebar {
  padding: 1rem;
  background-color: rgb(213, 216, 114);
}
.sidebar_projects_header {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3rem;
  margin-bottom: 1rem;
}
.sidebar_projects_header h2 {
  justify-self: start;
  align-self: center;
}
.sidebar_projects_header .addProject_btn {
  justify-self: end;
  align-self: center;
  font-size: 2.5rem;
  font-weight: 900;
  transition: all 200ms ease;
  cursor: pointer;
}
.sidebar_projects_header .addProject_btn:hover {
  transform: scale(1.2);
}
.sidebar_projects_list {
  display: flex;
  flex-direction: column;
}
.sidebar_projects_list_element {
  display: flex;
  align-items: center;
  gap: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE;IACE,gCAAgC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,iCAAiC;EACjC,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;;EAGE,UAAU;AACZ;;AAEA,iCAAiC;AACjC;EACE,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,aAAa;EACb,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,OAAO;EACP,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;EACf,yDAAyD;AAC3D;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 1.6rem;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbutton,\nli,\na {\n  all: unset;\n}\n\n/* Color Theme Swatches in RGBA */\nbody {\n  background-color: rgb(241, 242, 239);\n  position: relative;\n}\n\n.container {\n  position: relative;\n  padding: 1rem;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  justify-content: center;\n  align-items: start;\n}\n\nh1 {\n  grid-column: 1/-1;\n  text-align: center;\n  align-self: center;\n  font-size: 8rem;\n}\n\n.sort_todo_container {\n  position: relative;\n  grid-column: 2/-1;\n  background-color: rgb(220, 220, 220);\n  display: grid;\n}\n.sort_todo_container .sortToggle {\n  grid-column: 1/-1;\n  width: 20%;\n  padding: 1rem;\n  border: none;\n  background-color: rgb(200, 200, 200);\n}\n.sort_todo_container .toDo_container {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n.sort_todo_container .toDo_container .toDo_project_container {\n  min-height: 4rem;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgb(200, 200, 200);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sort_todo_container .toDo_container .toDo_project_container_title {\n  font-size: 3rem;\n  font-weight: 300;\n}\n\n.addToDo_btn {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1em;\n  height: 1em;\n  padding: 2rem;\n  background-color: rgb(174, 42, 46);\n  font-size: 4rem;\n  font-weight: 900;\n  color: rgb(241, 242, 239);\n  transition: all 0.2s ease;\n}\n.addToDo_btn:hover {\n  transform: scale(1.2);\n  border-radius: 0.5rem;\n}\n\n.toDo_element {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  background-color: rgb(150, 150, 150);\n  transition: all 200ms ease;\n}\n.toDo_element .toDo_title {\n  display: flex;\n  align-items: center;\n}\n.toDo_element .toDo_title_arrow {\n  font-weight: 900;\n}\n.toDo_element .todo_content.hideContent {\n  display: none;\n  transform: translate(-2rem);\n}\n.toDo_element .todo_content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-left: 3rem;\n  margin-top: -0.7rem;\n  transform: translate(0rem);\n}\n.toDo_element .todo_content p {\n  grid-column: 1/-1;\n}\n.toDo_element .toDo_title_container {\n  display: flex;\n}\n.toDo_element .toDo_title_container .toDo_title_arrow {\n  display: inline-block;\n  transition: transform 0.2s ease;\n  margin-right: 1rem;\n}\n.toDo_element .toDo_title_container .toDo_title_arrow.expanded {\n  transform: rotate(90deg);\n}\n.toDo_element .toDo_title_container .toDo_title {\n  font-size: 2rem;\n}\n.toDo_element .toDo_edit_btn_img {\n  width: 1.5rem;\n  cursor: pointer;\n  filter: invert(1) sepia(1) saturate(5) hue-rotate(180deg);\n}\n\n.toDo_input {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 50vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  overflow: visible;\n}\n.toDo_input::before {\n  content: \"\";\n}\n.toDo_input input,\n.toDo_input textarea {\n  grid-column: 1/-1;\n}\n.toDo_input .send_btn {\n  background-color: rgb(174, 42, 46);\n  color: rgb(241, 242, 239);\n  text-transform: uppercase;\n  font-weight: 900;\n  text-align: center;\n  padding: 1rem;\n  justify-self: start;\n}\n.toDo_input .cancel_btn {\n  position: fixed;\n  right: -3rem;\n  top: -3rem;\n  font-size: 2em;\n  font-weight: 900;\n  color: rgb(241, 242, 239);\n}\n\n.toDo_overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n}\n\n.sidebar {\n  padding: 1rem;\n  background-color: rgb(213, 216, 114);\n}\n.sidebar_projects_header {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 3rem;\n  margin-bottom: 1rem;\n}\n.sidebar_projects_header h2 {\n  justify-self: start;\n  align-self: center;\n}\n.sidebar_projects_header .addProject_btn {\n  justify-self: end;\n  align-self: center;\n  font-size: 2.5rem;\n  font-weight: 900;\n  transition: all 200ms ease;\n  cursor: pointer;\n}\n.sidebar_projects_header .addProject_btn:hover {\n  transform: scale(1.2);\n}\n.sidebar_projects_list {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar_projects_list_element {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca85cb1036635c3a2ecd.svg";

/***/ }),

/***/ "./src/js/_modules/_database.js":
/*!**************************************!*\
  !*** ./src/js/_modules/_database.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),
/* harmony export */   toDo_database: () => (/* binding */ toDo_database)
/* harmony export */ });
const toDo_database = {
  projects: {
    default: {
      createdAt: Date.now(),
      todos: [],
    },
  },
};

function addProject(projectName) {
  if (!toDo_database.projects[projectName]) {
    toDo_database.projects[projectName] = {
      createdAt: Date.now(),
      todos: [],
    };
    saveToLocalStorage(); // ← add this
  }
}

function addToDo(projectName, todo) {
  if (!toDo_database.projects[projectName]) {
    addProject(projectName); // ensures createdAt is set and saved
  }
  if (todo) {
    toDo_database.projects[projectName].todos.push({
      ...todo,
      createdAt: Date.now(),
    });
    saveToLocalStorage(); // ← add this
  }
}

function removeProject(projectName) {
  if (toDo_database.projects[projectName]) {
    delete toDo_database.projects[projectName];
    saveToLocalStorage(); // ← add this
  }
}

function saveToLocalStorage() {
  localStorage.setItem("toDo_database", JSON.stringify(toDo_database));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem("toDo_database");
  if (stored) {
    const parsed = JSON.parse(stored);
    toDo_database.projects = parsed.projects || {};
  }
}

console.log("Database after load:", toDo_database);


/***/ }),

/***/ "./src/js/_modules/_function_toDo_edit.js":
/*!************************************************!*\
  !*** ./src/js/_modules/_function_toDo_edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openEditTodo: () => (/* binding */ openEditTodo)
/* harmony export */ });
/* harmony import */ var _ui_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ui_input.js */ "./src/js/_modules/_ui_input.js");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");
// src/js/_modules/_ui_editTodo.js



/**
 * Opens the edit modal for a given todo item.
 * @param {Object} todoData - The todo's details.
 * @param {string} todoData.title
 * @param {string} todoData.description
 * @param {string} todoData.dueDate
 * @param {string} todoData.priority
 * @param {string} todoData.projectName
 * @param {number} todoData.createdAt
 */
function openEditTodo({
  title,
  description,
  dueDate,
  priority,
  projectName,
  createdAt,
  elements, // <-- new parameter
}) {
  console.log("Edit clicked for:", title);

  const { toDo_input, sendBtn } = (0,_ui_input_js__WEBPACK_IMPORTED_MODULE_0__.ui_input)();

  const overlay = document.createElement("div");
  overlay.classList.add("toDo_overlay");
  document.body.append(overlay, toDo_input);

  // Prefill
  toDo_input.querySelector("input[name='Title']").value = title;
  toDo_input.querySelector("textarea[name='Description']").value = description;
  toDo_input.querySelector("input[name='date']").value = dueDate;
  toDo_input.querySelector("select[name='Priority']").value =
    priority.toLowerCase();

  const handler = e => {
    e.preventDefault();

    const project = _database_js__WEBPACK_IMPORTED_MODULE_1__.toDo_database.projects[projectName];
    if (project) {
      const todo = project.todos.find(todo => todo.createdAt === createdAt);
      if (todo) {
        // Read new values
        const newTitle = toDo_input.querySelector("input[name='Title']").value;
        const newDesc = toDo_input.querySelector(
          "textarea[name='Description']"
        ).value;
        const newDate = toDo_input.querySelector("input[name='date']").value;
        const newPriority = toDo_input.querySelector(
          "select[name='Priority']"
        ).value;

        // Update database
        Object.assign(todo, {
          title: newTitle,
          description: newDesc,
          dueDate: newDate,
          priority: newPriority,
        });
        (0,_database_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();

        // Update DOM immediately
        elements.toDo_title.textContent = newTitle;
        elements.toDo_description.textContent = newDesc;
        elements.toDo_dueDate.textContent = newDate;
        elements.toDo_priority.textContent = newPriority;
      }
    }

    // Close and clean up
    toDo_input.remove();
    overlay.remove();
    sendBtn.removeEventListener("click", handler);
  };

  sendBtn.addEventListener("click", handler);
}


/***/ }),

/***/ "./src/js/_modules/_function_toDo_element.js":
/*!***************************************************!*\
  !*** ./src/js/_modules/_function_toDo_element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   function_toDoElement: () => (/* binding */ function_toDoElement)
/* harmony export */ });
/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ui_input */ "./src/js/_modules/_ui_input.js");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");
/* harmony import */ var _function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_function_toDo_renderElements.js */ "./src/js/_modules/_function_toDo_renderElements.js");




const function_toDoElement = function () {
  const toDo_container = document.querySelector(".toDo_container");
  const addToDo_btn = document.querySelector(".addToDo_btn");

  //Add the input context to the toDo container
  addToDo_btn.addEventListener("click", function () {
    const { toDo_input, sendBtn, chooseProject } = (0,_ui_input__WEBPACK_IMPORTED_MODULE_0__.ui_input)();

    Object.keys(_database_js__WEBPACK_IMPORTED_MODULE_1__.toDo_database.projects).forEach(projectName => {
      if (![...chooseProject.options].some(o => o.value === projectName)) {
        const option = document.createElement("option");
        option.value = projectName;
        option.textContent = projectName;
        chooseProject.appendChild(option);
      }
    });
    const toDo_overlay = document.createElement("div");
    toDo_overlay.classList.add("toDo_overlay");

    toDo_container.append(toDo_overlay, toDo_input);

    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const form = e.target.parentNode;

      const title = form.elements["Title"].value;
      const description = form.elements["Description"].value;
      const dueDate = form.elements["date"].value;
      const priority = form.elements["Priority"].value;
      const project = chooseProject.value || "default";

      (0,_database_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)(project, { title, description, dueDate, priority });

      (0,_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(toDo_container);

      toDo_input.remove();
      toDo_overlay.remove();
    });
  });
};


/***/ }),

/***/ "./src/js/_modules/_function_toDo_projects.js":
/*!****************************************************!*\
  !*** ./src/js/_modules/_function_toDo_projects.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   function_projects: () => (/* binding */ function_projects)
/* harmony export */ });
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");
/* harmony import */ var _function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_function_toDo_renderElements.js */ "./src/js/_modules/_function_toDo_renderElements.js");
/* harmony import */ var _ui_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ui_input.js */ "./src/js/_modules/_ui_input.js");




const function_projects = function ({
  addProjectBtn,
  sidebar_projects_list,
  toDo_container,
  chooseProject,
}) {
  if (!addProjectBtn || !sidebar_projects_list || !toDo_container) {
    console.error("Missing DOM elements for projects module!");
    return;
  }

  // Add new project
  addProjectBtn.addEventListener("click", () => {
    const {
      toDo_input,
      sendBtn,
      chooseProject: inputChooseProject,
    } = (0,_ui_input_js__WEBPACK_IMPORTED_MODULE_2__.ui_input)();

    const project_input_container = document.createElement("div");
    project_input_container.classList.add("project_input_container");

    const project_input = document.createElement("input");
    project_input.placeholder = "Enter project name";

    const project_sendBtn = document.createElement("button");
    project_sendBtn.type = "submit";
    project_sendBtn.textContent = "Send";

    project_input_container.append(project_input, project_sendBtn);
    sidebar_projects_list.append(project_input_container); // ✅ append to list

    project_sendBtn.addEventListener("click", e => {
      e.preventDefault();
      const projectName = project_input.value.trim();
      if (!projectName) return;

      // Add to database
      (0,_database_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);
      (0,_database_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();

      // Update sidebar and dropdowns
      (0,_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_1__.renderSidebarProjects)(sidebar_projects_list, toDo_container); // ✅ pass references
      updateDropdowns(projectName);

      project_input_container.remove();
      (0,_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_1__.renderToDos)(toDo_container);
    });

    function updateDropdowns(projectName) {
      [chooseProject, inputChooseProject].forEach(select => {
        if (!select) return;
        const exists = [...select.options].some(o => o.value === projectName);
        if (!exists) {
          const option = document.createElement("option");
          option.value = projectName;
          option.textContent = projectName;
          select.appendChild(option);
        }
      });
    }
  });
};


/***/ }),

/***/ "./src/js/_modules/_function_toDo_renderElements.js":
/*!**********************************************************!*\
  !*** ./src/js/_modules/_function_toDo_renderElements.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects),
/* harmony export */   renderToDos: () => (/* binding */ renderToDos)
/* harmony export */ });
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");
/* harmony import */ var _ui_toDo_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ui_toDo_element.js */ "./src/js/_modules/_ui_toDo_element.js");
/* harmony import */ var _function_toDo_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_function_toDo_sort.js */ "./src/js/_modules/_function_toDo_sort.js");




function renderToDos(container, sortMode = "alphabetical") {
  container.innerHTML = "";

  const sortedProjects = (0,_function_toDo_sort_js__WEBPACK_IMPORTED_MODULE_2__.toDo_sort)(_database_js__WEBPACK_IMPORTED_MODULE_0__.toDo_database.projects, sortMode);

  sortedProjects.forEach(([projectName, projectData]) => {
    const toDo_project_container = document.createElement("div");
    toDo_project_container.classList.add("toDo_project_container");

    if (projectName !== "default") {
      const title = document.createElement("h3");
      title.classList.add("toDo_project_container_title");
      title.textContent = projectName;
      toDo_project_container.appendChild(title);
    }

    (projectData.todos || []).forEach(todo => {
      const el = (0,_ui_toDo_element_js__WEBPACK_IMPORTED_MODULE_1__.ui_toDo_element)(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        projectName,
        todo.createdAt
      );
      toDo_project_container.appendChild(el);
    });

    container.appendChild(toDo_project_container);
  });
}

function renderSidebarProjects(sidebar_projects_list, toDo_container) {
  sidebar_projects_list.innerHTML = "";

  Object.keys(_database_js__WEBPACK_IMPORTED_MODULE_0__.toDo_database.projects).forEach(projectName => {
    if (projectName === "default") return;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("sidebar_projects_list_element");
    const title = document.createElement("h3");
    title.textContent = projectName;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", () => {
      (0,_database_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectName);
      renderSidebarProjects(sidebar_projects_list, toDo_container);
      renderToDos(toDo_container);
    });

    projectDiv.append(title, removeBtn);
    sidebar_projects_list.append(projectDiv);
  });
}


/***/ }),

/***/ "./src/js/_modules/_function_toDo_sort.js":
/*!************************************************!*\
  !*** ./src/js/_modules/_function_toDo_sort.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDo_sort: () => (/* binding */ toDo_sort)
/* harmony export */ });
const toDo_sort = function (projects, mode = "alphabetical") {
  const entries = Object.entries(projects);
  const defaultProject = entries.find(([name]) => name === "default");
  let otherProjects = entries.filter(([name]) => name !== "default");

  // --- Sort projects ---
  if (mode === "alphabetical") {
    otherProjects.sort(([a], [b]) => a.localeCompare(b));
  } else if (mode === "latest") {
    otherProjects.sort(
      ([, aData], [, bData]) => (bData.createdAt || 0) - (aData.createdAt || 0)
    );
  } else if (mode === "DueDate") {
    otherProjects.sort(([, aData], [, bData]) => {
      const aEarliest = Math.min(
        ...(aData.todos?.map(todo => new Date(todo.dueDate).getTime()) || [
          Infinity,
        ])
      );
      const bEarliest = Math.min(
        ...(bData.todos?.map(todo => new Date(todo.dueDate).getTime()) || [
          Infinity,
        ])
      );
      return aEarliest - bEarliest;
    });
  }

  // --- Sort todos inside each project ---
  const sortTodos = todos => {
    if (!todos) return;
    if (mode === "alphabetical") {
      todos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (mode === "latest") {
      todos.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (mode === "DueDate") {
      todos.sort(
        (a, b) =>
          (new Date(a.dueDate).getTime() || 0) -
          (new Date(b.dueDate).getTime() || 0)
      );
    }
  };

  otherProjects.forEach(([, projectData]) => sortTodos(projectData.todos));
  if (defaultProject) sortTodos(defaultProject[1].todos);

  return defaultProject ? [defaultProject, ...otherProjects] : otherProjects;
};


/***/ }),

/***/ "./src/js/_modules/_ui_basic.js":
/*!**************************************!*\
  !*** ./src/js/_modules/_ui_basic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ui_basic: () => (/* binding */ ui_basic)
/* harmony export */ });
/* harmony import */ var _ui_toDo_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ui_toDo_element.js */ "./src/js/_modules/_ui_toDo_element.js");
/* harmony import */ var _function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_function_toDo_renderElements.js */ "./src/js/_modules/_function_toDo_renderElements.js");



const ui_basic = function () {
  const container = document.createElement("div");
  container.classList.add("container");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "To-Do list";

  // sidebar
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const sidebar_projects = document.createElement("div");
  sidebar_projects.classList.add("sidebar_projects");

  const sidebar_projects_header = document.createElement("div");
  sidebar_projects_header.classList.add("sidebar_projects_header");

  const sidebar_projects_title = document.createElement("h2");
  sidebar_projects_title.textContent = "Projects";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProject_btn");
  addProjectBtn.textContent = "+";

  sidebar_projects_header.append(sidebar_projects_title, addProjectBtn);

  const sidebar_projects_list = document.createElement("div");
  sidebar_projects_list.classList.add("sidebar_projects_list");

  sidebar_projects.append(sidebar_projects_header, sidebar_projects_list);
  sidebar.append(sidebar_projects);

  // Todo container
  const toDo_container = document.createElement("div");
  toDo_container.classList.add("toDo_container");

  const sortSelect = document.createElement("select");
  sortSelect.classList.add("sortToggle");

  ["alphabetical", "latest", "dueDate"].forEach(mode => {
    const option = document.createElement("option");
    option.value = mode;
    if (mode === "alphabetical") option.textContent = "Alphabetical";
    else if (mode === "latest") option.textContent = "Latest";
    else if (mode === "dueDate") option.textContent = "Due Date";
    sortSelect.appendChild(option);
  });

  sortSelect.value = "alphabetical";

  sortSelect.addEventListener("change", e => {
    (0,_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_1__.renderToDos)(toDo_container, e.target.value);
  });

  const addToDoBtn = document.createElement("button");
  addToDoBtn.classList.add("addToDo_btn");
  addToDoBtn.textContent = "+";
  addToDoBtn.type = "button";

  const sort_todo_container = document.createElement("div");
  sort_todo_container.classList.add("sort_todo_container");

  sort_todo_container.append(sortSelect, toDo_container);
  container.append(mainTitle, sidebar, sort_todo_container, addToDoBtn);
  document.body.append(container);

  return {
    container,
    sidebar,
    sidebar_projects,
    sidebar_projects_list,
    addProjectBtn,
    toDo_container,
    addToDoBtn,
  };
};


/***/ }),

/***/ "./src/js/_modules/_ui_input.js":
/*!**************************************!*\
  !*** ./src/js/_modules/_ui_input.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ui_input: () => (/* binding */ ui_input)
/* harmony export */ });
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");


const ui_input = function () {
  const toDo_input = document.createElement("form");
  toDo_input.classList.add("toDo_input");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.name = "Title";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "Description";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "date";

  const prioritySelect = document.createElement("select");
  prioritySelect.name = "Priority";
  ["Low", "Medium", "High"].forEach(level => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    prioritySelect.appendChild(option);
  });

  const chooseProject = document.createElement("select");
  chooseProject.classList.add("chooseProject");
  chooseProject.name = "Project";

  // Function to populate dropdown from current database
  const populateProjects = () => {
    chooseProject.innerHTML = ""; // clear previous options
    Object.keys(_database_js__WEBPACK_IMPORTED_MODULE_0__.toDo_database.projects).forEach(projectName => {
      const option = document.createElement("option");
      option.value = projectName;
      option.textContent = projectName;
      chooseProject.appendChild(option);
    });
  };

  // Always populate when form is created
  populateProjects();

  // buttons
  const sendBtn = document.createElement("button");
  sendBtn.classList.add("send_btn");
  sendBtn.textContent = "Send";
  sendBtn.type = "submit";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel_btn");
  cancelBtn.textContent = "X";
  cancelBtn.type = "button";
  cancelBtn.addEventListener("click", function () {
    const toDo_overlay = document.querySelector(".toDo_overlay");
    toDo_input.remove();
    toDo_overlay.remove();
  });

  toDo_input.append(
    titleInput,
    descriptionInput,
    dueDateInput,
    prioritySelect,
    chooseProject,
    sendBtn,
    cancelBtn
  );
  return { toDo_input, sendBtn, chooseProject, populateProjects };
};

// export { chooseProject };


/***/ }),

/***/ "./src/js/_modules/_ui_toDo_element.js":
/*!*********************************************!*\
  !*** ./src/js/_modules/_ui_toDo_element.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ui_toDo_element: () => (/* binding */ ui_toDo_element)
/* harmony export */ });
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_database.js */ "./src/js/_modules/_database.js");
/* harmony import */ var _function_toDo_edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_function_toDo_edit.js */ "./src/js/_modules/_function_toDo_edit.js");




const ui_toDo_element = function (
  title,
  description,
  dueDate,
  priority,
  projectName,
  createdAt
) {
  const todo_element = document.createElement("div");
  todo_element.classList.add("toDo_element");

  const toDo_title_arrow = document.createElement("span");
  toDo_title_arrow.classList.add("toDo_title_arrow");
  toDo_title_arrow.textContent = ">";

  const toDo_title = document.createElement("h3");
  toDo_title.classList.add("toDo_title");
  toDo_title.textContent = title;
  toDo_title.style.cursor = "pointer";

  const toDo_title_container = document.createElement("div");
  toDo_title_container.classList.add("toDo_title_container");
  toDo_title_container.append(toDo_title_arrow, toDo_title);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("todo_content", "hideContent");

  const toDo_description = document.createElement("p");
  toDo_description.textContent = description;

  const toDo_dueDate = document.createElement("p");
  toDo_dueDate.textContent = dueDate;

  const toDo_priority = document.createElement("p");
  toDo_priority.textContent = priority;

  const toDo_edit_btn = document.createElement("button");
  const toDo_edit_btn_img = document.createElement("img");
  toDo_edit_btn_img.classList.add("toDo_edit_btn_img");
  toDo_edit_btn_img.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_0__;

  toDo_edit_btn.append(toDo_edit_btn_img);

  toDo_edit_btn.addEventListener("click", () => {
    (0,_function_toDo_edit_js__WEBPACK_IMPORTED_MODULE_2__.openEditTodo)({
      title,
      description,
      dueDate,
      priority,
      projectName,
      createdAt,
      elements: {
        toDo_title,
        toDo_description,
        toDo_dueDate,
        toDo_priority,
      },
    });
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel_btn");
  cancelBtn.textContent = "X";
  cancelBtn.type = "button";
  cancelBtn.addEventListener("click", function () {
    todo_element.remove();
    if (
      projectName &&
      _database_js__WEBPACK_IMPORTED_MODULE_1__.toDo_database.projects[projectName] &&
      createdAt !== undefined
    ) {
      _database_js__WEBPACK_IMPORTED_MODULE_1__.toDo_database.projects[projectName].todos = _database_js__WEBPACK_IMPORTED_MODULE_1__.toDo_database.projects[
        projectName
      ].todos.filter(todo => todo.createdAt !== createdAt);
      (0,_database_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(); // if using localStorage
    }
  });

  contentContainer.append(
    toDo_description,
    toDo_dueDate,
    toDo_priority,
    toDo_edit_btn,
    cancelBtn
  );

  todo_element.append(toDo_title_container, contentContainer);

  toDo_title_container.addEventListener("click", function () {
    contentContainer.classList.toggle("hideContent");
    toDo_title_arrow.classList.toggle("expanded");
  });

  return todo_element;
};


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _modules_ui_basic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_modules/_ui_basic.js */ "./src/js/_modules/_ui_basic.js");
/* harmony import */ var _modules_database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modules/_database.js */ "./src/js/_modules/_database.js");
/* harmony import */ var _modules_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_modules/_function_toDo_renderElements.js */ "./src/js/_modules/_function_toDo_renderElements.js");
/* harmony import */ var _modules_function_toDo_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_modules/_function_toDo_element.js */ "./src/js/_modules/_function_toDo_element.js");
/* harmony import */ var _modules_function_toDo_projects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_modules/_function_toDo_projects.js */ "./src/js/_modules/_function_toDo_projects.js");







document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Create the UI and get references
  const ui = (0,_modules_ui_basic_js__WEBPACK_IMPORTED_MODULE_1__.ui_basic)();

  // 2️⃣ Load database from localStorage
  (0,_modules_database_js__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)();

  const {
    toDo_container,
    addProjectBtn,
    addToDoBtn,
    sidebar_projects,
    sidebar_projects_list,
    chooseProject,
  } = ui;

  // 3️⃣ Render todos and sidebar
  (0,_modules_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_3__.renderToDos)(toDo_container);
  (0,_modules_function_toDo_renderElements_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebarProjects)(sidebar_projects_list, toDo_container);

  // 4️⃣ Initialize project & todo functionality, passing DOM refs
  (0,_modules_function_toDo_projects_js__WEBPACK_IMPORTED_MODULE_5__.function_projects)({
    addProjectBtn,
    toDo_container,
    sidebar_projects_list,
  });
  (0,_modules_function_toDo_element_js__WEBPACK_IMPORTED_MODULE_4__.function_toDoElement)({ toDo_container, sidebar_projects_list });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDJIQUEySCx5QkFBeUI7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxRQUFRLFVBQVUsTUFBTSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFL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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7O1dDQUEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQzBCO0FBQ1k7QUFJVjtBQUN1QjtBQUNGO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQVE7QUFDckI7QUFDQTtBQUNBLEVBQUUsMEVBQW9CO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUUscUZBQVc7QUFDYixFQUFFLCtGQUFxQjtBQUN2QjtBQUNBO0FBQ0EsRUFBRSxxRkFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsdUZBQW9CLEdBQUcsdUNBQXVDO0FBQ2hFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9fbGlzdF92My8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF92My8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF92My8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vc3JjL2pzL19tb2R1bGVzL19kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvanMvX21vZHVsZXMvX2Z1bmN0aW9uX3RvRG9fZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvanMvX21vZHVsZXMvX2Z1bmN0aW9uX3RvRG9fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvanMvX21vZHVsZXMvX2Z1bmN0aW9uX3RvRG9fcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vc3JjL2pzL19tb2R1bGVzL19mdW5jdGlvbl90b0RvX3JlbmRlckVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdF92My8uL3NyYy9qcy9fbW9kdWxlcy9fZnVuY3Rpb25fdG9Eb19zb3J0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdF92My8uL3NyYy9qcy9fbW9kdWxlcy9fdWlfYmFzaWMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vc3JjL2pzL19tb2R1bGVzL191aV9pbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvLi9zcmMvanMvX21vZHVsZXMvX3VpX3RvRG9fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3RfdjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdF92My93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdF92My93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0X3YzLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcbiAgaHRtbCB7XG4gICAgaW50ZXJwb2xhdGUtc2l6ZTogYWxsb3cta2V5d29yZHM7XG4gIH1cbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbnAge1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG4jcm9vdCxcbiNfX25leHQge1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbmJ1dHRvbixcbmxpLFxuYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIFJHQkEgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDIsIDIzOSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG5oMSB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4cmVtO1xufVxuXG4uc29ydF90b2RvX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5zb3J0X3RvZG9fY29udGFpbmVyIC5zb3J0VG9nZ2xlIHtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xufVxuLnNvcnRfdG9kb19jb250YWluZXIgLnRvRG9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuLnNvcnRfdG9kb19jb250YWluZXIgLnRvRG9fY29udGFpbmVyIC50b0RvX3Byb2plY3RfY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbi5zb3J0X3RvZG9fY29udGFpbmVyIC50b0RvX2NvbnRhaW5lciAudG9Eb19wcm9qZWN0X2NvbnRhaW5lcl90aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkZFRvRG9fYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgNDIsIDQ2KTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogcmdiKDI0MSwgMjQyLCAyMzkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmFkZFRvRG9fYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi50b0RvX2VsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG59XG4udG9Eb19lbGVtZW50IC50b0RvX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b0RvX2VsZW1lbnQgLnRvRG9fdGl0bGVfYXJyb3cge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLnRvRG9fZWxlbWVudCAudG9kb19jb250ZW50LmhpZGVDb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJyZW0pO1xufVxuLnRvRG9fZWxlbWVudCAudG9kb19jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHJlbSk7XG59XG4udG9Eb19lbGVtZW50IC50b2RvX2NvbnRlbnQgcCB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xufVxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZV9jb250YWluZXIgLnRvRG9fdGl0bGVfYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi50b0RvX2VsZW1lbnQgLnRvRG9fdGl0bGVfY29udGFpbmVyIC50b0RvX3RpdGxlX2Fycm93LmV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZV9jb250YWluZXIgLnRvRG9fdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG4udG9Eb19lbGVtZW50IC50b0RvX2VkaXRfYnRuX2ltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsdGVyOiBpbnZlcnQoMSkgc2VwaWEoMSkgc2F0dXJhdGUoNSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG4udG9Eb19pbnB1dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDUwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4udG9Eb19pbnB1dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cbi50b0RvX2lucHV0IGlucHV0LFxuLnRvRG9faW5wdXQgdGV4dGFyZWEge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbn1cbi50b0RvX2lucHV0IC5zZW5kX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDQyLCA0Nik7XG4gIGNvbG9yOiByZ2IoMjQxLCAyNDIsIDIzOSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cbi50b0RvX2lucHV0IC5jYW5jZWxfYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTNyZW07XG4gIHRvcDogLTNyZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogcmdiKDI0MSwgMjQyLCAyMzkpO1xufVxuXG4udG9Eb19vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiA1MDtcbn1cblxuLnNpZGViYXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEzLCAyMTYsIDExNCk7XG59XG4uc2lkZWJhcl9wcm9qZWN0c19oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnNpZGViYXJfcHJvamVjdHNfaGVhZGVyIGgyIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnNpZGViYXJfcHJvamVjdHNfaGVhZGVyIC5hZGRQcm9qZWN0X2J0biB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGViYXJfcHJvamVjdHNfaGVhZGVyIC5hZGRQcm9qZWN0X2J0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5zaWRlYmFyX3Byb2plY3RzX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpZGViYXJfcHJvamVjdHNfbGlzdF9lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VB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ckI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICBodG1sIHtcXG4gICAgaW50ZXJwb2xhdGUtc2l6ZTogYWxsb3cta2V5d29yZHM7XFxuICB9XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxucCB7XFxuICB0ZXh0LXdyYXA6IHByZXR0eTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuYnV0dG9uLFxcbmxpLFxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gUkdCQSAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQyLCAyMzkpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG5oMSB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG59XFxuXFxuLnNvcnRfdG9kb19jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uc29ydF90b2RvX2NvbnRhaW5lciAuc29ydFRvZ2dsZSB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG4uc29ydF90b2RvX2NvbnRhaW5lciAudG9Eb19jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcbi5zb3J0X3RvZG9fY29udGFpbmVyIC50b0RvX2NvbnRhaW5lciAudG9Eb19wcm9qZWN0X2NvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uc29ydF90b2RvX2NvbnRhaW5lciAudG9Eb19jb250YWluZXIgLnRvRG9fcHJvamVjdF9jb250YWluZXJfdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmFkZFRvRG9fYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDQyLCA0Nik7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHJnYigyNDEsIDI0MiwgMjM5KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcbi5hZGRUb0RvX2J0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b0RvX2VsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG59XFxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZV9hcnJvdyB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4udG9Eb19lbGVtZW50IC50b2RvX2NvbnRlbnQuaGlkZUNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycmVtKTtcXG59XFxuLnRvRG9fZWxlbWVudCAudG9kb19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcmVtKTtcXG59XFxuLnRvRG9fZWxlbWVudCAudG9kb19jb250ZW50IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbi50b0RvX2VsZW1lbnQgLnRvRG9fdGl0bGVfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b0RvX2VsZW1lbnQgLnRvRG9fdGl0bGVfY29udGFpbmVyIC50b0RvX3RpdGxlX2Fycm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi50b0RvX2VsZW1lbnQgLnRvRG9fdGl0bGVfY29udGFpbmVyIC50b0RvX3RpdGxlX2Fycm93LmV4cGFuZGVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLnRvRG9fZWxlbWVudCAudG9Eb190aXRsZV9jb250YWluZXIgLnRvRG9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4udG9Eb19lbGVtZW50IC50b0RvX2VkaXRfYnRuX2ltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMSkgc2VwaWEoMSkgc2F0dXJhdGUoNSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4udG9Eb19pbnB1dCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi50b0RvX2lucHV0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi50b0RvX2lucHV0IGlucHV0LFxcbi50b0RvX2lucHV0IHRleHRhcmVhIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG4udG9Eb19pbnB1dCAuc2VuZF9idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgNDIsIDQ2KTtcXG4gIGNvbG9yOiByZ2IoMjQxLCAyNDIsIDIzOSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4udG9Eb19pbnB1dCAuY2FuY2VsX2J0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTNyZW07XFxuICB0b3A6IC0zcmVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHJnYigyNDEsIDI0MiwgMjM5KTtcXG59XFxuXFxuLnRvRG9fb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMywgMjE2LCAxMTQpO1xcbn1cXG4uc2lkZWJhcl9wcm9qZWN0c19oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLnNpZGViYXJfcHJvamVjdHNfaGVhZGVyIGgyIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyX3Byb2plY3RzX2hlYWRlciAuYWRkUHJvamVjdF9idG4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXJfcHJvamVjdHNfaGVhZGVyIC5hZGRQcm9qZWN0X2J0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5zaWRlYmFyX3Byb2plY3RzX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlYmFyX3Byb2plY3RzX2xpc3RfZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IHRvRG9fZGF0YWJhc2UgPSB7XHJcbiAgcHJvamVjdHM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICB0b2RvczogW10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIGlmICghdG9Eb19kYXRhYmFzZS5wcm9qZWN0c1twcm9qZWN0TmFtZV0pIHtcclxuICAgIHRvRG9fZGF0YWJhc2UucHJvamVjdHNbcHJvamVjdE5hbWVdID0ge1xyXG4gICAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgIHRvZG9zOiBbXSxcclxuICAgIH07XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTsgLy8g4oaQIGFkZCB0aGlzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyhwcm9qZWN0TmFtZSwgdG9kbykge1xyXG4gIGlmICghdG9Eb19kYXRhYmFzZS5wcm9qZWN0c1twcm9qZWN0TmFtZV0pIHtcclxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpOyAvLyBlbnN1cmVzIGNyZWF0ZWRBdCBpcyBzZXQgYW5kIHNhdmVkXHJcbiAgfVxyXG4gIGlmICh0b2RvKSB7XHJcbiAgICB0b0RvX2RhdGFiYXNlLnByb2plY3RzW3Byb2plY3ROYW1lXS50b2Rvcy5wdXNoKHtcclxuICAgICAgLi4udG9kbyxcclxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTsgLy8g4oaQIGFkZCB0aGlzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIGlmICh0b0RvX2RhdGFiYXNlLnByb2plY3RzW3Byb2plY3ROYW1lXSkge1xyXG4gICAgZGVsZXRlIHRvRG9fZGF0YWJhc2UucHJvamVjdHNbcHJvamVjdE5hbWVdO1xyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7IC8vIOKGkCBhZGQgdGhpc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9fZGF0YWJhc2VcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb19kYXRhYmFzZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvX2RhdGFiYXNlXCIpO1xyXG4gIGlmIChzdG9yZWQpIHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc3RvcmVkKTtcclxuICAgIHRvRG9fZGF0YWJhc2UucHJvamVjdHMgPSBwYXJzZWQucHJvamVjdHMgfHwge307XHJcbiAgfVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcIkRhdGFiYXNlIGFmdGVyIGxvYWQ6XCIsIHRvRG9fZGF0YWJhc2UpO1xyXG4iLCIvLyBzcmMvanMvX21vZHVsZXMvX3VpX2VkaXRUb2RvLmpzXHJcbmltcG9ydCB7IHVpX2lucHV0IH0gZnJvbSBcIi4vX3VpX2lucHV0LmpzXCI7XHJcbmltcG9ydCB7IHRvRG9fZGF0YWJhc2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL19kYXRhYmFzZS5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIE9wZW5zIHRoZSBlZGl0IG1vZGFsIGZvciBhIGdpdmVuIHRvZG8gaXRlbS5cclxuICogQHBhcmFtIHtPYmplY3R9IHRvZG9EYXRhIC0gVGhlIHRvZG8ncyBkZXRhaWxzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9kb0RhdGEudGl0bGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHRvZG9EYXRhLmRlc2NyaXB0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2RvRGF0YS5kdWVEYXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2RvRGF0YS5wcmlvcml0eVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9kb0RhdGEucHJvamVjdE5hbWVcclxuICogQHBhcmFtIHtudW1iZXJ9IHRvZG9EYXRhLmNyZWF0ZWRBdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0VG9kbyh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZHVlRGF0ZSxcclxuICBwcmlvcml0eSxcclxuICBwcm9qZWN0TmFtZSxcclxuICBjcmVhdGVkQXQsXHJcbiAgZWxlbWVudHMsIC8vIDwtLSBuZXcgcGFyYW1ldGVyXHJcbn0pIHtcclxuICBjb25zb2xlLmxvZyhcIkVkaXQgY2xpY2tlZCBmb3I6XCIsIHRpdGxlKTtcclxuXHJcbiAgY29uc3QgeyB0b0RvX2lucHV0LCBzZW5kQnRuIH0gPSB1aV9pbnB1dCgpO1xyXG5cclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvX292ZXJsYXlcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQob3ZlcmxheSwgdG9Eb19pbnB1dCk7XHJcblxyXG4gIC8vIFByZWZpbGxcclxuICB0b0RvX2lucHV0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdUaXRsZSddXCIpLnZhbHVlID0gdGl0bGU7XHJcbiAgdG9Eb19pbnB1dC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFbbmFtZT0nRGVzY3JpcHRpb24nXVwiKS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gIHRvRG9faW5wdXQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2RhdGUnXVwiKS52YWx1ZSA9IGR1ZURhdGU7XHJcbiAgdG9Eb19pbnB1dC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W25hbWU9J1ByaW9yaXR5J11cIikudmFsdWUgPVxyXG4gICAgcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3QgPSB0b0RvX2RhdGFiYXNlLnByb2plY3RzW3Byb2plY3ROYW1lXTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmNyZWF0ZWRBdCA9PT0gY3JlYXRlZEF0KTtcclxuICAgICAgaWYgKHRvZG8pIHtcclxuICAgICAgICAvLyBSZWFkIG5ldyB2YWx1ZXNcclxuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IHRvRG9faW5wdXQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J1RpdGxlJ11cIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3RGVzYyA9IHRvRG9faW5wdXQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwidGV4dGFyZWFbbmFtZT0nRGVzY3JpcHRpb24nXVwiXHJcbiAgICAgICAgKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gdG9Eb19pbnB1dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZGF0ZSddXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gdG9Eb19pbnB1dC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCJzZWxlY3RbbmFtZT0nUHJpb3JpdHknXVwiXHJcbiAgICAgICAgKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGRhdGFiYXNlXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0b2RvLCB7XHJcbiAgICAgICAgICB0aXRsZTogbmV3VGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogbmV3RGVzYyxcclxuICAgICAgICAgIGR1ZURhdGU6IG5ld0RhdGUsXHJcbiAgICAgICAgICBwcmlvcml0eTogbmV3UHJpb3JpdHksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBET00gaW1tZWRpYXRlbHlcclxuICAgICAgICBlbGVtZW50cy50b0RvX3RpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XHJcbiAgICAgICAgZWxlbWVudHMudG9Eb19kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5ld0Rlc2M7XHJcbiAgICAgICAgZWxlbWVudHMudG9Eb19kdWVEYXRlLnRleHRDb250ZW50ID0gbmV3RGF0ZTtcclxuICAgICAgICBlbGVtZW50cy50b0RvX3ByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbG9zZSBhbmQgY2xlYW4gdXBcclxuICAgIHRvRG9faW5wdXQucmVtb3ZlKCk7XHJcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgc2VuZEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcbiAgfTtcclxuXHJcbiAgc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgdWlfaW5wdXQgfSBmcm9tIFwiLi9fdWlfaW5wdXRcIjtcclxuaW1wb3J0IHsgdG9Eb19kYXRhYmFzZSwgYWRkVG9EbyB9IGZyb20gXCIuL19kYXRhYmFzZS5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUb0RvcyB9IGZyb20gXCIuL19mdW5jdGlvbl90b0RvX3JlbmRlckVsZW1lbnRzLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZnVuY3Rpb25fdG9Eb0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdG9Eb19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9fY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGFkZFRvRG9fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb0RvX2J0blwiKTtcclxuXHJcbiAgLy9BZGQgdGhlIGlucHV0IGNvbnRleHQgdG8gdGhlIHRvRG8gY29udGFpbmVyXHJcbiAgYWRkVG9Eb19idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHsgdG9Eb19pbnB1dCwgc2VuZEJ0biwgY2hvb3NlUHJvamVjdCB9ID0gdWlfaW5wdXQoKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0b0RvX2RhdGFiYXNlLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3ROYW1lID0+IHtcclxuICAgICAgaWYgKCFbLi4uY2hvb3NlUHJvamVjdC5vcHRpb25zXS5zb21lKG8gPT4gby52YWx1ZSA9PT0gcHJvamVjdE5hbWUpKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICBjaG9vc2VQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgdG9Eb19vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvRG9fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidG9Eb19vdmVybGF5XCIpO1xyXG5cclxuICAgIHRvRG9fY29udGFpbmVyLmFwcGVuZCh0b0RvX292ZXJsYXksIHRvRG9faW5wdXQpO1xyXG5cclxuICAgIHNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbXCJUaXRsZVwiXS52YWx1ZTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzW1wiRGVzY3JpcHRpb25cIl0udmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzW1wiZGF0ZVwiXS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzW1wiUHJpb3JpdHlcIl0udmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjaG9vc2VQcm9qZWN0LnZhbHVlIHx8IFwiZGVmYXVsdFwiO1xyXG5cclxuICAgICAgYWRkVG9Ebyhwcm9qZWN0LCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSk7XHJcblxyXG4gICAgICByZW5kZXJUb0Rvcyh0b0RvX2NvbnRhaW5lcik7XHJcblxyXG4gICAgICB0b0RvX2lucHV0LnJlbW92ZSgpO1xyXG4gICAgICB0b0RvX292ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBhZGRQcm9qZWN0LFxyXG4gIHJlbW92ZVByb2plY3QsXHJcbiAgdG9Eb19kYXRhYmFzZSxcclxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UsXHJcbn0gZnJvbSBcIi4vX2RhdGFiYXNlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVuZGVyVG9Eb3MsXHJcbiAgcmVuZGVyU2lkZWJhclByb2plY3RzLFxyXG59IGZyb20gXCIuL19mdW5jdGlvbl90b0RvX3JlbmRlckVsZW1lbnRzLmpzXCI7XHJcbmltcG9ydCB7IHVpX2lucHV0IH0gZnJvbSBcIi4vX3VpX2lucHV0LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZnVuY3Rpb25fcHJvamVjdHMgPSBmdW5jdGlvbiAoe1xyXG4gIGFkZFByb2plY3RCdG4sXHJcbiAgc2lkZWJhcl9wcm9qZWN0c19saXN0LFxyXG4gIHRvRG9fY29udGFpbmVyLFxyXG4gIGNob29zZVByb2plY3QsXHJcbn0pIHtcclxuICBpZiAoIWFkZFByb2plY3RCdG4gfHwgIXNpZGViYXJfcHJvamVjdHNfbGlzdCB8fCAhdG9Eb19jb250YWluZXIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIERPTSBlbGVtZW50cyBmb3IgcHJvamVjdHMgbW9kdWxlIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBuZXcgcHJvamVjdFxyXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG9Eb19pbnB1dCxcclxuICAgICAgc2VuZEJ0bixcclxuICAgICAgY2hvb3NlUHJvamVjdDogaW5wdXRDaG9vc2VQcm9qZWN0LFxyXG4gICAgfSA9IHVpX2lucHV0KCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdF9pbnB1dF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdF9pbnB1dF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfaW5wdXRfY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwcm9qZWN0X2lucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0X3NlbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcHJvamVjdF9zZW5kQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgcHJvamVjdF9zZW5kQnRuLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcblxyXG4gICAgcHJvamVjdF9pbnB1dF9jb250YWluZXIuYXBwZW5kKHByb2plY3RfaW5wdXQsIHByb2plY3Rfc2VuZEJ0bik7XHJcbiAgICBzaWRlYmFyX3Byb2plY3RzX2xpc3QuYXBwZW5kKHByb2plY3RfaW5wdXRfY29udGFpbmVyKTsgLy8g4pyFIGFwcGVuZCB0byBsaXN0XHJcblxyXG4gICAgcHJvamVjdF9zZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RfaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICBpZiAoIXByb2plY3ROYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAvLyBBZGQgdG8gZGF0YWJhc2VcclxuICAgICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHNpZGViYXIgYW5kIGRyb3Bkb3duc1xyXG4gICAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMoc2lkZWJhcl9wcm9qZWN0c19saXN0LCB0b0RvX2NvbnRhaW5lcik7IC8vIOKchSBwYXNzIHJlZmVyZW5jZXNcclxuICAgICAgdXBkYXRlRHJvcGRvd25zKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgIHByb2plY3RfaW5wdXRfY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICByZW5kZXJUb0Rvcyh0b0RvX2NvbnRhaW5lcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVEcm9wZG93bnMocHJvamVjdE5hbWUpIHtcclxuICAgICAgW2Nob29zZVByb2plY3QsIGlucHV0Q2hvb3NlUHJvamVjdF0uZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgIGlmICghc2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gWy4uLnNlbGVjdC5vcHRpb25zXS5zb21lKG8gPT4gby52YWx1ZSA9PT0gcHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHRvRG9fZGF0YWJhc2UsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9fZGF0YWJhc2UuanNcIjtcclxuaW1wb3J0IHsgdWlfdG9Eb19lbGVtZW50IH0gZnJvbSBcIi4vX3VpX3RvRG9fZWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgeyB0b0RvX3NvcnQgfSBmcm9tIFwiLi9fZnVuY3Rpb25fdG9Eb19zb3J0LmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb3MoY29udGFpbmVyLCBzb3J0TW9kZSA9IFwiYWxwaGFiZXRpY2FsXCIpIHtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgc29ydGVkUHJvamVjdHMgPSB0b0RvX3NvcnQodG9Eb19kYXRhYmFzZS5wcm9qZWN0cywgc29ydE1vZGUpO1xyXG5cclxuICBzb3J0ZWRQcm9qZWN0cy5mb3JFYWNoKChbcHJvamVjdE5hbWUsIHByb2plY3REYXRhXSkgPT4ge1xyXG4gICAgY29uc3QgdG9Eb19wcm9qZWN0X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b0RvX3Byb2plY3RfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvX3Byb2plY3RfY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvX3Byb2plY3RfY29udGFpbmVyX3RpdGxlXCIpO1xyXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgICB0b0RvX3Byb2plY3RfY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICAocHJvamVjdERhdGEudG9kb3MgfHwgW10pLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGNvbnN0IGVsID0gdWlfdG9Eb19lbGVtZW50KFxyXG4gICAgICAgIHRvZG8udGl0bGUsXHJcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgICB0b2RvLmR1ZURhdGUsXHJcbiAgICAgICAgdG9kby5wcmlvcml0eSxcclxuICAgICAgICBwcm9qZWN0TmFtZSxcclxuICAgICAgICB0b2RvLmNyZWF0ZWRBdFxyXG4gICAgICApO1xyXG4gICAgICB0b0RvX3Byb2plY3RfY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvX3Byb2plY3RfY29udGFpbmVyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0cyhzaWRlYmFyX3Byb2plY3RzX2xpc3QsIHRvRG9fY29udGFpbmVyKSB7XHJcbiAgc2lkZWJhcl9wcm9qZWN0c19saXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIE9iamVjdC5rZXlzKHRvRG9fZGF0YWJhc2UucHJvamVjdHMpLmZvckVhY2gocHJvamVjdE5hbWUgPT4ge1xyXG4gICAgaWYgKHByb2plY3ROYW1lID09PSBcImRlZmF1bHRcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9wcm9qZWN0c19saXN0X2VsZW1lbnRcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMoc2lkZWJhcl9wcm9qZWN0c19saXN0LCB0b0RvX2NvbnRhaW5lcik7XHJcbiAgICAgIHJlbmRlclRvRG9zKHRvRG9fY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3REaXYuYXBwZW5kKHRpdGxlLCByZW1vdmVCdG4pO1xyXG4gICAgc2lkZWJhcl9wcm9qZWN0c19saXN0LmFwcGVuZChwcm9qZWN0RGl2KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgdG9Eb19zb3J0ID0gZnVuY3Rpb24gKHByb2plY3RzLCBtb2RlID0gXCJhbHBoYWJldGljYWxcIikge1xyXG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhwcm9qZWN0cyk7XHJcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBlbnRyaWVzLmZpbmQoKFtuYW1lXSkgPT4gbmFtZSA9PT0gXCJkZWZhdWx0XCIpO1xyXG4gIGxldCBvdGhlclByb2plY3RzID0gZW50cmllcy5maWx0ZXIoKFtuYW1lXSkgPT4gbmFtZSAhPT0gXCJkZWZhdWx0XCIpO1xyXG5cclxuICAvLyAtLS0gU29ydCBwcm9qZWN0cyAtLS1cclxuICBpZiAobW9kZSA9PT0gXCJhbHBoYWJldGljYWxcIikge1xyXG4gICAgb3RoZXJQcm9qZWN0cy5zb3J0KChbYV0sIFtiXSkgPT4gYS5sb2NhbGVDb21wYXJlKGIpKTtcclxuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwibGF0ZXN0XCIpIHtcclxuICAgIG90aGVyUHJvamVjdHMuc29ydChcclxuICAgICAgKFssIGFEYXRhXSwgWywgYkRhdGFdKSA9PiAoYkRhdGEuY3JlYXRlZEF0IHx8IDApIC0gKGFEYXRhLmNyZWF0ZWRBdCB8fCAwKVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiRHVlRGF0ZVwiKSB7XHJcbiAgICBvdGhlclByb2plY3RzLnNvcnQoKFssIGFEYXRhXSwgWywgYkRhdGFdKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFFYXJsaWVzdCA9IE1hdGgubWluKFxyXG4gICAgICAgIC4uLihhRGF0YS50b2Rvcz8ubWFwKHRvZG8gPT4gbmV3IERhdGUodG9kby5kdWVEYXRlKS5nZXRUaW1lKCkpIHx8IFtcclxuICAgICAgICAgIEluZmluaXR5LFxyXG4gICAgICAgIF0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJFYXJsaWVzdCA9IE1hdGgubWluKFxyXG4gICAgICAgIC4uLihiRGF0YS50b2Rvcz8ubWFwKHRvZG8gPT4gbmV3IERhdGUodG9kby5kdWVEYXRlKS5nZXRUaW1lKCkpIHx8IFtcclxuICAgICAgICAgIEluZmluaXR5LFxyXG4gICAgICAgIF0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBhRWFybGllc3QgLSBiRWFybGllc3Q7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSBTb3J0IHRvZG9zIGluc2lkZSBlYWNoIHByb2plY3QgLS0tXHJcbiAgY29uc3Qgc29ydFRvZG9zID0gdG9kb3MgPT4ge1xyXG4gICAgaWYgKCF0b2RvcykgcmV0dXJuO1xyXG4gICAgaWYgKG1vZGUgPT09IFwiYWxwaGFiZXRpY2FsXCIpIHtcclxuICAgICAgdG9kb3Muc29ydCgoYSwgYikgPT4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKTtcclxuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJsYXRlc3RcIikge1xyXG4gICAgICB0b2Rvcy5zb3J0KChhLCBiKSA9PiAoYi5jcmVhdGVkQXQgfHwgMCkgLSAoYS5jcmVhdGVkQXQgfHwgMCkpO1xyXG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBcIkR1ZURhdGVcIikge1xyXG4gICAgICB0b2Rvcy5zb3J0KFxyXG4gICAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgICAgKG5ldyBEYXRlKGEuZHVlRGF0ZSkuZ2V0VGltZSgpIHx8IDApIC1cclxuICAgICAgICAgIChuZXcgRGF0ZShiLmR1ZURhdGUpLmdldFRpbWUoKSB8fCAwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG90aGVyUHJvamVjdHMuZm9yRWFjaCgoWywgcHJvamVjdERhdGFdKSA9PiBzb3J0VG9kb3MocHJvamVjdERhdGEudG9kb3MpKTtcclxuICBpZiAoZGVmYXVsdFByb2plY3QpIHNvcnRUb2RvcyhkZWZhdWx0UHJvamVjdFsxXS50b2Rvcyk7XHJcblxyXG4gIHJldHVybiBkZWZhdWx0UHJvamVjdCA/IFtkZWZhdWx0UHJvamVjdCwgLi4ub3RoZXJQcm9qZWN0c10gOiBvdGhlclByb2plY3RzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1aV90b0RvX2VsZW1lbnQgfSBmcm9tIFwiLi9fdWlfdG9Eb19lbGVtZW50LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vX2Z1bmN0aW9uX3RvRG9fcmVuZGVyRWxlbWVudHMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1aV9iYXNpYyA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyBsaXN0XCI7XHJcblxyXG4gIC8vIHNpZGViYXJcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xyXG5cclxuICBjb25zdCBzaWRlYmFyX3Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaWRlYmFyX3Byb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX3Byb2plY3RzXCIpO1xyXG5cclxuICBjb25zdCBzaWRlYmFyX3Byb2plY3RzX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2lkZWJhcl9wcm9qZWN0c19oZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfcHJvamVjdHNfaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBzaWRlYmFyX3Byb2plY3RzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHNpZGViYXJfcHJvamVjdHNfdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RfYnRuXCIpO1xyXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgc2lkZWJhcl9wcm9qZWN0c19oZWFkZXIuYXBwZW5kKHNpZGViYXJfcHJvamVjdHNfdGl0bGUsIGFkZFByb2plY3RCdG4pO1xyXG5cclxuICBjb25zdCBzaWRlYmFyX3Byb2plY3RzX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGViYXJfcHJvamVjdHNfbGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9wcm9qZWN0c19saXN0XCIpO1xyXG5cclxuICBzaWRlYmFyX3Byb2plY3RzLmFwcGVuZChzaWRlYmFyX3Byb2plY3RzX2hlYWRlciwgc2lkZWJhcl9wcm9qZWN0c19saXN0KTtcclxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyX3Byb2plY3RzKTtcclxuXHJcbiAgLy8gVG9kbyBjb250YWluZXJcclxuICBjb25zdCB0b0RvX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9Eb19jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvRG9fY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzb3J0U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzb3J0VG9nZ2xlXCIpO1xyXG5cclxuICBbXCJhbHBoYWJldGljYWxcIiwgXCJsYXRlc3RcIiwgXCJkdWVEYXRlXCJdLmZvckVhY2gobW9kZSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gbW9kZTtcclxuICAgIGlmIChtb2RlID09PSBcImFscGhhYmV0aWNhbFwiKSBvcHRpb24udGV4dENvbnRlbnQgPSBcIkFscGhhYmV0aWNhbFwiO1xyXG4gICAgZWxzZSBpZiAobW9kZSA9PT0gXCJsYXRlc3RcIikgb3B0aW9uLnRleHRDb250ZW50ID0gXCJMYXRlc3RcIjtcclxuICAgIGVsc2UgaWYgKG1vZGUgPT09IFwiZHVlRGF0ZVwiKSBvcHRpb24udGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XHJcbiAgICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIHNvcnRTZWxlY3QudmFsdWUgPSBcImFscGhhYmV0aWNhbFwiO1xyXG5cclxuICBzb3J0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XHJcbiAgICByZW5kZXJUb0Rvcyh0b0RvX2NvbnRhaW5lciwgZS50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRUb0RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRUb0RvX2J0blwiKTtcclxuICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgYWRkVG9Eb0J0bi50eXBlID0gXCJidXR0b25cIjtcclxuXHJcbiAgY29uc3Qgc29ydF90b2RvX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc29ydF90b2RvX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29ydF90b2RvX2NvbnRhaW5lclwiKTtcclxuXHJcbiAgc29ydF90b2RvX2NvbnRhaW5lci5hcHBlbmQoc29ydFNlbGVjdCwgdG9Eb19jb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobWFpblRpdGxlLCBzaWRlYmFyLCBzb3J0X3RvZG9fY29udGFpbmVyLCBhZGRUb0RvQnRuKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29udGFpbmVyLFxyXG4gICAgc2lkZWJhcixcclxuICAgIHNpZGViYXJfcHJvamVjdHMsXHJcbiAgICBzaWRlYmFyX3Byb2plY3RzX2xpc3QsXHJcbiAgICBhZGRQcm9qZWN0QnRuLFxyXG4gICAgdG9Eb19jb250YWluZXIsXHJcbiAgICBhZGRUb0RvQnRuLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IHRvRG9fZGF0YWJhc2UgfSBmcm9tIFwiLi9fZGF0YWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1aV9pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0b0RvX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgdG9Eb19pbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb19pbnB1dFwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiO1xyXG4gIHRpdGxlSW5wdXQubmFtZSA9IFwiVGl0bGVcIjtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcIlByaW9yaXR5XCI7XHJcbiAgW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXS5mb3JFYWNoKGxldmVsID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBsZXZlbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGV2ZWw7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBjaG9vc2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjaG9vc2VQcm9qZWN0XCIpO1xyXG4gIGNob29zZVByb2plY3QubmFtZSA9IFwiUHJvamVjdFwiO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBwb3B1bGF0ZSBkcm9wZG93biBmcm9tIGN1cnJlbnQgZGF0YWJhc2VcclxuICBjb25zdCBwb3B1bGF0ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY2hvb3NlUHJvamVjdC5pbm5lckhUTUwgPSBcIlwiOyAvLyBjbGVhciBwcmV2aW91cyBvcHRpb25zXHJcbiAgICBPYmplY3Qua2V5cyh0b0RvX2RhdGFiYXNlLnByb2plY3RzKS5mb3JFYWNoKHByb2plY3ROYW1lID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgICBjaG9vc2VQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBBbHdheXMgcG9wdWxhdGUgd2hlbiBmb3JtIGlzIGNyZWF0ZWRcclxuICBwb3B1bGF0ZVByb2plY3RzKCk7XHJcblxyXG4gIC8vIGJ1dHRvbnNcclxuICBjb25zdCBzZW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzZW5kQnRuLmNsYXNzTGlzdC5hZGQoXCJzZW5kX2J0blwiKTtcclxuICBzZW5kQnRuLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcbiAgc2VuZEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbF9idG5cIik7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdG9Eb19vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvX292ZXJsYXlcIik7XHJcbiAgICB0b0RvX2lucHV0LnJlbW92ZSgpO1xyXG4gICAgdG9Eb19vdmVybGF5LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICB0b0RvX2lucHV0LmFwcGVuZChcclxuICAgIHRpdGxlSW5wdXQsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgcHJpb3JpdHlTZWxlY3QsXHJcbiAgICBjaG9vc2VQcm9qZWN0LFxyXG4gICAgc2VuZEJ0bixcclxuICAgIGNhbmNlbEJ0blxyXG4gICk7XHJcbiAgcmV0dXJuIHsgdG9Eb19pbnB1dCwgc2VuZEJ0biwgY2hvb3NlUHJvamVjdCwgcG9wdWxhdGVQcm9qZWN0cyB9O1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IHsgY2hvb3NlUHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgZWRpdEJ0biBmcm9tIFwiLi4vLi4vaW1nL2VkaXQuc3ZnXCI7XHJcbmltcG9ydCB7IHRvRG9fZGF0YWJhc2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL19kYXRhYmFzZS5qc1wiO1xyXG5pbXBvcnQgeyBvcGVuRWRpdFRvZG8gfSBmcm9tIFwiLi9fZnVuY3Rpb25fdG9Eb19lZGl0LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdWlfdG9Eb19lbGVtZW50ID0gZnVuY3Rpb24gKFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGR1ZURhdGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgcHJvamVjdE5hbWUsXHJcbiAgY3JlYXRlZEF0XHJcbikge1xyXG4gIGNvbnN0IHRvZG9fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb19lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b0RvX2VsZW1lbnRcIik7XHJcblxyXG4gIGNvbnN0IHRvRG9fdGl0bGVfYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICB0b0RvX3RpdGxlX2Fycm93LmNsYXNzTGlzdC5hZGQoXCJ0b0RvX3RpdGxlX2Fycm93XCIpO1xyXG4gIHRvRG9fdGl0bGVfYXJyb3cudGV4dENvbnRlbnQgPSBcIj5cIjtcclxuXHJcbiAgY29uc3QgdG9Eb190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICB0b0RvX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvX3RpdGxlXCIpO1xyXG4gIHRvRG9fdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICB0b0RvX3RpdGxlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG5cclxuICBjb25zdCB0b0RvX3RpdGxlX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9Eb190aXRsZV9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvRG9fdGl0bGVfY29udGFpbmVyXCIpO1xyXG4gIHRvRG9fdGl0bGVfY29udGFpbmVyLmFwcGVuZCh0b0RvX3RpdGxlX2Fycm93LCB0b0RvX3RpdGxlKTtcclxuXHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kb19jb250ZW50XCIsIFwiaGlkZUNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IHRvRG9fZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0b0RvX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IHRvRG9fZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRvRG9fZHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcblxyXG4gIGNvbnN0IHRvRG9fcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0b0RvX3ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0IHRvRG9fZWRpdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHRvRG9fZWRpdF9idG5faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b0RvX2VkaXRfYnRuX2ltZy5jbGFzc0xpc3QuYWRkKFwidG9Eb19lZGl0X2J0bl9pbWdcIik7XHJcbiAgdG9Eb19lZGl0X2J0bl9pbWcuc3JjID0gZWRpdEJ0bjtcclxuXHJcbiAgdG9Eb19lZGl0X2J0bi5hcHBlbmQodG9Eb19lZGl0X2J0bl9pbWcpO1xyXG5cclxuICB0b0RvX2VkaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuRWRpdFRvZG8oe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBwcm9qZWN0TmFtZSxcclxuICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHRvRG9fdGl0bGUsXHJcbiAgICAgICAgdG9Eb19kZXNjcmlwdGlvbixcclxuICAgICAgICB0b0RvX2R1ZURhdGUsXHJcbiAgICAgICAgdG9Eb19wcmlvcml0eSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsX2J0blwiKTtcclxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0b2RvX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHByb2plY3ROYW1lICYmXHJcbiAgICAgIHRvRG9fZGF0YWJhc2UucHJvamVjdHNbcHJvamVjdE5hbWVdICYmXHJcbiAgICAgIGNyZWF0ZWRBdCAhPT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgdG9Eb19kYXRhYmFzZS5wcm9qZWN0c1twcm9qZWN0TmFtZV0udG9kb3MgPSB0b0RvX2RhdGFiYXNlLnByb2plY3RzW1xyXG4gICAgICAgIHByb2plY3ROYW1lXHJcbiAgICAgIF0udG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jcmVhdGVkQXQgIT09IGNyZWF0ZWRBdCk7XHJcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpOyAvLyBpZiB1c2luZyBsb2NhbFN0b3JhZ2VcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmQoXHJcbiAgICB0b0RvX2Rlc2NyaXB0aW9uLFxyXG4gICAgdG9Eb19kdWVEYXRlLFxyXG4gICAgdG9Eb19wcmlvcml0eSxcclxuICAgIHRvRG9fZWRpdF9idG4sXHJcbiAgICBjYW5jZWxCdG5cclxuICApO1xyXG5cclxuICB0b2RvX2VsZW1lbnQuYXBwZW5kKHRvRG9fdGl0bGVfY29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgdG9Eb190aXRsZV9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVDb250ZW50XCIpO1xyXG4gICAgdG9Eb190aXRsZV9hcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0b2RvX2VsZW1lbnQ7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCB7IHVpX2Jhc2ljIH0gZnJvbSBcIi4vX21vZHVsZXMvX3VpX2Jhc2ljLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vX21vZHVsZXMvX2RhdGFiYXNlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVuZGVyVG9Eb3MsXHJcbiAgcmVuZGVyU2lkZWJhclByb2plY3RzLFxyXG59IGZyb20gXCIuL19tb2R1bGVzL19mdW5jdGlvbl90b0RvX3JlbmRlckVsZW1lbnRzLmpzXCI7XHJcbmltcG9ydCB7IGZ1bmN0aW9uX3RvRG9FbGVtZW50IH0gZnJvbSBcIi4vX21vZHVsZXMvX2Z1bmN0aW9uX3RvRG9fZWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgeyBmdW5jdGlvbl9wcm9qZWN0cyB9IGZyb20gXCIuL19tb2R1bGVzL19mdW5jdGlvbl90b0RvX3Byb2plY3RzLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gMe+4j+KDoyBDcmVhdGUgdGhlIFVJIGFuZCBnZXQgcmVmZXJlbmNlc1xyXG4gIGNvbnN0IHVpID0gdWlfYmFzaWMoKTtcclxuXHJcbiAgLy8gMu+4j+KDoyBMb2FkIGRhdGFiYXNlIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdG9Eb19jb250YWluZXIsXHJcbiAgICBhZGRQcm9qZWN0QnRuLFxyXG4gICAgYWRkVG9Eb0J0bixcclxuICAgIHNpZGViYXJfcHJvamVjdHMsXHJcbiAgICBzaWRlYmFyX3Byb2plY3RzX2xpc3QsXHJcbiAgICBjaG9vc2VQcm9qZWN0LFxyXG4gIH0gPSB1aTtcclxuXHJcbiAgLy8gM++4j+KDoyBSZW5kZXIgdG9kb3MgYW5kIHNpZGViYXJcclxuICByZW5kZXJUb0Rvcyh0b0RvX2NvbnRhaW5lcik7XHJcbiAgcmVuZGVyU2lkZWJhclByb2plY3RzKHNpZGViYXJfcHJvamVjdHNfbGlzdCwgdG9Eb19jb250YWluZXIpO1xyXG5cclxuICAvLyA077iP4oOjIEluaXRpYWxpemUgcHJvamVjdCAmIHRvZG8gZnVuY3Rpb25hbGl0eSwgcGFzc2luZyBET00gcmVmc1xyXG4gIGZ1bmN0aW9uX3Byb2plY3RzKHtcclxuICAgIGFkZFByb2plY3RCdG4sXHJcbiAgICB0b0RvX2NvbnRhaW5lcixcclxuICAgIHNpZGViYXJfcHJvamVjdHNfbGlzdCxcclxuICB9KTtcclxuICBmdW5jdGlvbl90b0RvRWxlbWVudCh7IHRvRG9fY29udGFpbmVyLCBzaWRlYmFyX3Byb2plY3RzX2xpc3QgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=