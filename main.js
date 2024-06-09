/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/css/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/css/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Recursive_Monospace-Regular.woff2 */ "./fonts/Recursive_Monospace-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Wellfleet-Regular.woff2 */ "./fonts/Wellfleet-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/skills/soft-skill.svg */ "./img/skills/soft-skill.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Recursive_Monospace";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Wellfleet-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
:root {
  --color-header: #7d7777;
  --color-links: var(--color-header);
  --color-main: #e7bb2b;
  --color-font-panel: #ffffff;
  --color-font-main: #212121;
  --color-font-features: #f72b2b;
  --color-hr: var(--color-font-main);
  --color-current-page: #e3c154;
  --color-border-avatar: var(--color-header);
  --height-right-panel: 35vh;
  --font-size-panel: calc(var(--height-right-panel) / 8);
  --font-size-greetings: clamp(24px, 5vw, 40px);
  --font-size-second: calc(var(--font-size-greetings) * 0.8);
  --font-size-third: calc(var(--font-size-greetings) * 0.5);
  --font-size-description: calc(var(--font-size-greetings) * 0.6);
  --font-size-name: calc(var(--font-size-greetings) * 2.4);
  --font-size-footer: max(1vw, 2vh);
  --footer-height: 5vh;
  --scrollbar-width: 10px;
  --height-hr: 2px;
  --common-width: 50vw;
  --margin-bottom-projects: 4em;
  --width-project-image: 600px;
  --padding-panel: calc(1vw + 10px);
  --shadow-main: 5px 5px 10px rgb(0 0 0 / 0.7);
  --shadow-button-big: 0px 10px 10px rgb(0 0 0 / 0.7);
  --shadow-button-small: 0px 5px 10px rgb(0 0 0 / 0.4);
  --shadow-footer: 5px 5px 20px rgb(0 0 0 / 0.7);
  --border-avatar: 10px solid var(--color-border-avatar);
  --transition: 0.2s;
  --scale: scale(1.1);
  --main-font: Wellfleet-Regular, sans-serif;
  --second-font: "Recursive_Monospace", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:where(ul, ol):where([class]) {
  padding-left: 0;
}

body,
:where(blockquote, figure):where([class]) {
  margin: 0;
}

:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
  margin-block: 0;
}

:where(dd[class]) {
  margin-left: 0;
}

:where(ul[class]) {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

input,
textarea,
select,
button {
  font: inherit;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
}

svg *[fill] {
  fill: currentColor;
}

svg *[stroke] {
  stroke: currentColor;
}

svg * {
  transition-property: fill, stroke;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
* {
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
}

html::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

html::-webkit-scrollbar-thumb {
  background-color: var(--color-header);
}

html::-webkit-scrollbar-track {
  background: var(--color-main);
  background: linear-gradient(180deg, var(--color-main) 95%, var(--color-header) 95%);
}

body {
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  height: 100dvh;
  font-family: var(--main-font);
}

header {
  position: relative;
  display: flex;
  height: var(--height-right-panel);
  z-index: 100;
  justify-content: flex-end;
  filter: drop-shadow(var(--shadow-main));
}
header:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-color: var(--color-header);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 29.979246179%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 29.979246179%);
}
header .header__panel {
  height: calc(var(--height-right-panel) * 0.9);
  padding-inline: var(--padding-panel);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
header a {
  text-shadow: var(--shadow-main);
  text-decoration: none;
  color: var(--color-font-panel);
  font-size: var(--font-size-panel);
  font-family: var(--main-font);
  transition: transform var(--transition);
}

.header__panel a:not(.current):hover {
  transform: var(--scale);
}

main {
  background-color: var(--color-main);
  padding-bottom: var(--footer-height);
  color: var(--color-font-main);
}
main::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 100%;
  background-color: inherit;
}

footer {
  font-family: var(--main-font);
  height: var(--footer-height);
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: var(--color-header);
  color: var(--color-font-panel);
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-footer);
  z-index: 1;
  -moz-column-gap: 0.5em;
       column-gap: 0.5em;
}

.links_soc1al ul {
  display: flex;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  margin: 0;
  padding-left: 0;
}

.links_soc1al ul,
#year {
  font-size: var(--font-size-footer);
}

.footer-soc1al-item {
  list-style-type: none;
  position: relative;
  display: block;
}

.footer-soc1al-link {
  display: flex;
  width: 2em;
  color: var(--color-font-panel);
}

@keyframes cursor {
  0% {
    border-color: var(--color-font-main);
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: var(--color-font-main);
  }
}
@keyframes cursor_off {
  from {
    border-color: var(--color-font-main);
  }
  to {
    border-color: transparent;
  }
}
@keyframes text_appearance {
  from {
    color: transparent;
  }
  to {
    color: var(--color-font-main);
  }
}
@keyframes printed_text {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes jump {
  0% {
    top: 0px;
  }
  50% {
    top: -5px;
  }
  100% {
    top: 0px;
  }
}
.avatar {
  position: relative;
  width: 200px;
  margin-bottom: 24px;
}
.avatar img {
  border-radius: 15% 85% 20% 80%/85% 20% 80% 15%;
  border: var(--border-avatar);
  transition: all 0.2s;
}

.avatar img:hover {
  border-radius: 85% 15% 85% 15%/15% 85% 15% 85%;
}

.greeting {
  position: relative;
  --animation-steps: 10;
  --animation-duration: 3s;
  --border-width: 0.07em;
  --animation-delay: calc(var(--animation-duration) + 0.2s);
}
.greeting div p {
  margin: 0;
  font-family: var(--second-font);
  box-sizing: content-box;
}
.greeting > p {
  font-size: var(--font-size-description);
  color: transparent;
  animation: text_appearance calc(var(--animation-duration) / 1.5) linear 5.2s forwards;
}

.container_animation_first p {
  font-size: var(--font-size-greetings);
  border-right: var(--border-width) solid var(--color-font-main);
  animation: cursor 0.75s step-end, printed_text var(--animation-duration) steps(var(--animation-steps)), cursor_off 0.2s linear var(--animation-delay) forwards;
}

.container_animation_first,
.container_animation_second {
  display: inline-block;
}
.container_animation_first p,
.container_animation_second p {
  overflow: hidden;
  white-space: nowrap;
}

.container_animation_second {
  --animation-steps: 6;
  --animation-duration: 1.8s;
}
.container_animation_second p {
  width: 0;
  font-size: var(--font-size-name);
  line-height: 1.1;
  border-right: var(--border-width) solid transparent;
  animation: cursor 0.75s step-end var(--animation-delay) infinite, printed_text var(--animation-duration) var(--animation-delay) steps(var(--animation-steps)) forwards;
}

.about {
  --row-gap: 1em;
  position: relative;
  display: flex;
  row-gap: var(--row-gap);
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(var(--row-gap) * 2);
}
.about p {
  font-size: var(--font-size-description);
}
.about p a {
  color: var(--color-links);
}

hr {
  border: none;
  background-color: var(--color-hr);
  width: var(--common-width);
  height: var(--height-hr);
}

.hard-skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.hard-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}
.hard-skill img {
  max-width: 10em;
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  transition: transform var(--transition);
  filter: drop-shadow(var(--shadow-main));
}
.hard-skill img:hover {
  transform: var(--scale);
}

.soft_skills {
  --space_pseudo_inline: -1.5em;
}
.soft_skills ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  padding: 0;
  margin: 0;
}
.soft_skills li {
  list-style-type: none;
  font-size: var(--font-size-description);
  position: relative;
}
.soft_skills li::before,
.soft_skills li::after {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  position: absolute;
  top: 0.25em;
}
.soft_skills li::after {
  right: var(--space_pseudo_inline);
}
.soft_skills li::before {
  left: var(--space_pseudo_inline);
}

.project_field {
  --common-width: 70vw;
  position: relative;
}
.project_field h1,
.project_field .all_projects_field {
  margin-bottom: calc(var(--margin-bottom-projects) / 2);
}

.project {
  display: grid;
  grid-template-columns: 6fr 5fr;
  -moz-column-gap: 1em;
       column-gap: 1em;
  justify-items: center;
  margin-bottom: var(--margin-bottom-projects);
}

.project_image_container > div:last-child:hover {
  background: none;
}
.project_image_container > div:last-child:hover img {
  visibility: visible;
}
.project_image_container > div:last-child img {
  position: relative;
  transform: scale(0.71, 0.82) translateY(-3%);
}

.project_description h2 + p {
  font-size: var(--font-size-description);
}
.project_description h2 + p + p {
  font-size: var(--font-size-third);
}

.frame {
  position: absolute;
  max-width: var(--width-project-image);
}

.project_features {
  color: var(--color-font-features);
}
.project_features + a {
  color: var(--color-links);
}

.name_project {
  font-family: var(--second-font);
}

.project_features,
.name_project {
  font-weight: bold;
}

.buttons_section {
  display: flex;
  -moz-column-gap: 2em;
       column-gap: 2em;
}
.buttons_section button {
  width: 5em;
}

.button {
  border-radius: 20px;
  border: 4px solid currentColor;
  background-color: transparent;
  color: var(--color-font-main);
  font-size: var(--font-size-description);
  outline: none;
  transition: all var(--transition);
}
.button:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-button-big);
}
.button:active {
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-small);
}

.all_projects_field {
  display: flex;
  justify-content: center;
}

.all_projects_button {
  padding-inline: 1em;
}

.current {
  color: var(--color-current-page);
  border-bottom: 2px solid var(--color-current-page);
}

.main_block_width {
  max-width: var(--common-width);
  width: 100%;
  margin: 0 auto;
}

.center-align {
  text-align: center;
}

.title_h1 {
  font-size: var(--font-size-greetings);
}

.title_h2 {
  font-size: var(--font-size-second);
}

@media (max-width: 1200px) {
  .home_information {
    max-width: 70vw;
  }
  .main_block_width {
    max-width: calc(var(--common-width) + 20vw);
  }
}
@media (max-width: 800px) {
  header {
    --height-right-panel: 25vh;
    --font-size-panel: 2em;
  }
  header .header__panel {
    height: calc(var(--height-right-panel) * 0.7);
  }
  .project {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 5em;
    align-items: center;
  }
  .project_field {
    --common-width: 50vw;
  }
  .project_field h1 {
    margin-bottom: calc(var(--margin-bottom-projects) / 4);
  }
  .name {
    text-align: center;
  }
  .buttons_section {
    justify-content: center;
  }
  .buttons_section form {
    flex-grow: 1;
  }
  .buttons_section form button {
    width: 100%;
  }
}
@media (max-width: 576px) {
  header {
    --height-right-panel: 20vh;
    justify-content: center;
  }
  header .header__panel {
    flex-direction: row;
    align-items: flex-start;
    -moz-column-gap: 2em;
         column-gap: 2em;
  }
  header .header__panel a {
    font-size: 7vw;
  }
  .project_field {
    --common-width: 70vw;
  }
  .hard-skills {
    grid-template-columns: repeat(2, 1fr);
  }
  footer {
    --font-size-footer: 16px;
  }
}
@media (hover: hover) {
  .footer-soc1al-item:hover {
    animation: jump 0.8s cubic-bezier(0.4, 0, 1, 1) infinite;
  }
}/*# sourceMappingURL=style.css.map */`, "",{"version":3,"sources":["webpack://./src/_constants.scss","webpack://./dist/css/style.css","webpack://./src/_reset.scss","webpack://./src/_basic%20structure.scss","webpack://./src/_mixins.scss","webpack://./src/_animations.scss","webpack://./src/_main.scss","webpack://./src/_about.scss","webpack://./src/_project.scss","webpack://./src/_classes.scss","webpack://./src/_media.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./dist/css/style.css":
/*!****************************!*\
  !*** ./dist/css/style.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./dist/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./fonts/Recursive_Monospace-Regular.woff2":
/*!*************************************************!*\
  !*** ./fonts/Recursive_Monospace-Regular.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c3685ba69cb9dd12126.woff2";

/***/ }),

/***/ "./fonts/Wellfleet-Regular.woff2":
/*!***************************************!*\
  !*** ./fonts/Wellfleet-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "630b4a7a4c175d2b0c04.woff2";

/***/ }),

/***/ "./img/skills/soft-skill.svg":
/*!***********************************!*\
  !*** ./img/skills/soft-skill.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2bb0e9e4ad1c0742dac.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/css/style.css */ "./dist/css/style.css");


const date = new Date();
const currentYear = date.getFullYear();
const year = document.querySelector('#year');
year.textContent = `© ${currentYear} | Dmitry`;
const html = document.querySelector('html');
const footer = document.querySelector('footer');
const panel = document.querySelector('.header__panel');
const rightIndent =
	getComputedStyle(html).getPropertyValue('--scrollbar-width');
const hasScrollbar = html.clientHeight < html.scrollHeight;
const numberOfProjects = document.querySelectorAll('.project').length;

if (!hasScrollbar) {
	panel.style.marginRight = rightIndent;
	footer.style.paddingRight = rightIndent;
}

function hover(sumProjects) {
	if (!sumProjects) {
		return null;
	}

	const projectMain = document.querySelectorAll('.project_field');
	const projectImage = [...document.querySelectorAll('.project_image_img')];

	const staticImage = [];
	const animatedImage = [];

	for (let i = 1; i <= sumProjects; i++) {
		staticImage.push(`./img/project_images/${i}-static.png`);
		animatedImage.push(`./img/project_images/${i}-animated.gif`);
	}

	projectMain[0].addEventListener('mouseover', (e) => {
		if (projectImage.includes(e.target)) {
			chooseMode(animatedImage, e.target, projectImage);
		}
	});

	projectMain[0].addEventListener('mouseout', (e) => {
		if (projectImage.includes(e.target)) {
			chooseMode(staticImage, e.target, projectImage);
		}
	});
}

function chooseMode(array, target, field) {
	if (field.includes(target)) {
		let index = target.alt;
		index = index[index.length - 1] - 1;
		target.setAttribute('src', array[index]);
	}
}

hover(numberOfProjects);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFLQUEyRDtBQUN2Ryw0Q0FBNEMsaUpBQWlEO0FBQzdGLDRDQUE0Qyx5SUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEMsMFpBQTBaLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sU0FBUyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9kaXN0L2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vZGlzdC9jc3Mvc3R5bGUuY3NzP2YxNmUiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ZvbnRzL1JlY3Vyc2l2ZV9Nb25vc3BhY2UtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9mb250cy9XZWxsZmxlZXQtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9pbWcvc2tpbGxzL3NvZnQtc2tpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSZWN1cnNpdmVfTW9ub3NwYWNlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJXZWxsZmxlZXQtUmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG46cm9vdCB7XG4gIC0tY29sb3ItaGVhZGVyOiAjN2Q3Nzc3O1xuICAtLWNvbG9yLWxpbmtzOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICAtLWNvbG9yLW1haW46ICNlN2JiMmI7XG4gIC0tY29sb3ItZm9udC1wYW5lbDogI2ZmZmZmZjtcbiAgLS1jb2xvci1mb250LW1haW46ICMyMTIxMjE7XG4gIC0tY29sb3ItZm9udC1mZWF0dXJlczogI2Y3MmIyYjtcbiAgLS1jb2xvci1ocjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgLS1jb2xvci1jdXJyZW50LXBhZ2U6ICNlM2MxNTQ7XG4gIC0tY29sb3ItYm9yZGVyLWF2YXRhcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLS1oZWlnaHQtcmlnaHQtcGFuZWw6IDM1dmg7XG4gIC0tZm9udC1zaXplLXBhbmVsOiBjYWxjKHZhcigtLWhlaWdodC1yaWdodC1wYW5lbCkgLyA4KTtcbiAgLS1mb250LXNpemUtZ3JlZXRpbmdzOiBjbGFtcCgyNHB4LCA1dncsIDQwcHgpO1xuICAtLWZvbnQtc2l6ZS1zZWNvbmQ6IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAwLjgpO1xuICAtLWZvbnQtc2l6ZS10aGlyZDogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDAuNSk7XG4gIC0tZm9udC1zaXplLWRlc2NyaXB0aW9uOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMC42KTtcbiAgLS1mb250LXNpemUtbmFtZTogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDIuNCk7XG4gIC0tZm9udC1zaXplLWZvb3RlcjogbWF4KDF2dywgMnZoKTtcbiAgLS1mb290ZXItaGVpZ2h0OiA1dmg7XG4gIC0tc2Nyb2xsYmFyLXdpZHRoOiAxMHB4O1xuICAtLWhlaWdodC1ocjogMnB4O1xuICAtLWNvbW1vbi13aWR0aDogNTB2dztcbiAgLS1tYXJnaW4tYm90dG9tLXByb2plY3RzOiA0ZW07XG4gIC0td2lkdGgtcHJvamVjdC1pbWFnZTogNjAwcHg7XG4gIC0tcGFkZGluZy1wYW5lbDogY2FsYygxdncgKyAxMHB4KTtcbiAgLS1zaGFkb3ctbWFpbjogNXB4IDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNyk7XG4gIC0tc2hhZG93LWJ1dHRvbi1iaWc6IDBweCAxMHB4IDEwcHggcmdiKDAgMCAwIC8gMC43KTtcbiAgLS1zaGFkb3ctYnV0dG9uLXNtYWxsOiAwcHggNXB4IDEwcHggcmdiKDAgMCAwIC8gMC40KTtcbiAgLS1zaGFkb3ctZm9vdGVyOiA1cHggNXB4IDIwcHggcmdiKDAgMCAwIC8gMC43KTtcbiAgLS1ib3JkZXItYXZhdGFyOiAxMHB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1hdmF0YXIpO1xuICAtLXRyYW5zaXRpb246IDAuMnM7XG4gIC0tc2NhbGU6IHNjYWxlKDEuMSk7XG4gIC0tbWFpbi1mb250OiBXZWxsZmxlZXQtUmVndWxhciwgc2Fucy1zZXJpZjtcbiAgLS1zZWNvbmQtZm9udDogXCJSZWN1cnNpdmVfTW9ub3NwYWNlXCIsIG1vbm9zcGFjZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOndoZXJlKHVsLCBvbCk6d2hlcmUoW2NsYXNzXSkge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbmJvZHksXG46d2hlcmUoYmxvY2txdW90ZSwgZmlndXJlKTp3aGVyZShbY2xhc3NdKSB7XG4gIG1hcmdpbjogMDtcbn1cblxuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHVsLCBvbCwgZGwpOndoZXJlKFtjbGFzc10pIHtcbiAgbWFyZ2luLWJsb2NrOiAwO1xufVxuXG46d2hlcmUoZGRbY2xhc3NdKSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG46d2hlcmUodWxbY2xhc3NdKSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbnN2ZyAqW2ZpbGxdIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5zdmcgKltzdHJva2VdIHtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG59XG5cbnN2ZyAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZmlsbCwgc3Ryb2tlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuKiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY29sb3ItbWFpbikgOTUlLCB2YXIoLS1jb2xvci1oZWFkZXIpIDk1JSk7XG59XG5cbmJvZHkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpO1xuICB6LWluZGV4OiAxMDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tc2hhZG93LW1haW4pKTtcbn1cbmhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMjkuOTc5MjQ2MTc5JSk7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDI5Ljk3OTI0NjE3OSUpO1xufVxuaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodC1yaWdodC1wYW5lbCkgKiAwLjkpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1wYW5lbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGEge1xuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93LW1haW4pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXBhbmVsKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcGFuZWwpO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uaGVhZGVyX19wYW5lbCBhOm5vdCguY3VycmVudCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcbn1cblxubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xufVxubWFpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5mb290ZXIge1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9vdGVyKTtcbiAgei1pbmRleDogMTtcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjVlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjVlbTtcbn1cblxuLmxpbmtzX3NvYzFhbCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tb3otY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmxpbmtzX3NvYzFhbCB1bCxcbiN5ZWFyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZm9vdGVyKTtcbn1cblxuLmZvb3Rlci1zb2MxYWwtaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3Rlci1zb2MxYWwtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXBhbmVsKTtcbn1cblxuQGtleWZyYW1lcyBjdXJzb3Ige1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY3Vyc29yX29mZiB7XG4gIGZyb20ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgfVxuICB0byB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyB0ZXh0X2FwcGVhcmFuY2Uge1xuICBmcm9tIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgdG8ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByaW50ZWRfdGV4dCB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBqdW1wIHtcbiAgMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgdG9wOiAtNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JSA4NSUgMjAlIDgwJS84NSUgMjAlIDgwJSAxNSU7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWF2YXRhcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYXZhdGFyIGltZzpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDg1JSAxNSUgODUlIDE1JS8xNSUgODUlIDE1JSA4NSU7XG59XG5cbi5ncmVldGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1hbmltYXRpb24tc3RlcHM6IDEwO1xuICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjA3ZW07XG4gIC0tYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgKyAwLjJzKTtcbn1cbi5ncmVldGluZyBkaXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZC1mb250KTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uZ3JlZXRpbmcgPiBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogdGV4dF9hcHBlYXJhbmNlIGNhbGModmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSAvIDEuNSkgbGluZWFyIDUuMnMgZm9yd2FyZHM7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0IHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xuICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgYW5pbWF0aW9uOiBjdXJzb3IgMC43NXMgc3RlcC1lbmQsIHByaW50ZWRfdGV4dCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIHN0ZXBzKHZhcigtLWFuaW1hdGlvbi1zdGVwcykpLCBjdXJzb3Jfb2ZmIDAuMnMgbGluZWFyIHZhcigtLWFuaW1hdGlvbi1kZWxheSkgZm9yd2FyZHM7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0LFxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhaW5lcl9hbmltYXRpb25fZmlyc3QgcCxcbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCBwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHtcbiAgLS1hbmltYXRpb24tc3RlcHM6IDY7XG4gIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xufVxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHAge1xuICB3aWR0aDogMDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmFtZSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBjdXJzb3IgMC43NXMgc3RlcC1lbmQgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBpbmZpbml0ZSwgcHJpbnRlZF90ZXh0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBzdGVwcyh2YXIoLS1hbmltYXRpb24tc3RlcHMpKSBmb3J3YXJkcztcbn1cblxuLmFib3V0IHtcbiAgLS1yb3ctZ2FwOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcm93LWdhcDogdmFyKC0tcm93LWdhcCk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXJvdy1nYXApICogMik7XG59XG4uYWJvdXQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbn1cbi5hYm91dCBwIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlua3MpO1xufVxuXG5ociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaHIpO1xuICB3aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtaHIpO1xufVxuXG4uaGFyZC1za2lsbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uaGFyZC1za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDAuNXJlbTtcbn1cbi5oYXJkLXNraWxsIGltZyB7XG4gIG1heC13aWR0aDogMTBlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1zaGFkb3ctbWFpbikpO1xufVxuLmhhcmQtc2tpbGwgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XG59XG5cbi5zb2Z0X3NraWxscyB7XG4gIC0tc3BhY2VfcHNldWRvX2lubGluZTogLTEuNWVtO1xufVxuLnNvZnRfc2tpbGxzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMWVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uc29mdF9za2lsbHMgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvZnRfc2tpbGxzIGxpOjpiZWZvcmUsXG4uc29mdF9za2lsbHMgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1ZW07XG59XG4uc29mdF9za2lsbHMgbGk6OmFmdGVyIHtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlX3BzZXVkb19pbmxpbmUpO1xufVxuLnNvZnRfc2tpbGxzIGxpOjpiZWZvcmUge1xuICBsZWZ0OiB2YXIoLS1zcGFjZV9wc2V1ZG9faW5saW5lKTtcbn1cblxuLnByb2plY3RfZmllbGQge1xuICAtLWNvbW1vbi13aWR0aDogNzB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3RfZmllbGQgaDEsXG4ucHJvamVjdF9maWVsZCAuYWxsX3Byb2plY3RzX2ZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDIpO1xufVxuXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDVmcjtcbiAgLW1vei1jb2x1bW4tZ2FwOiAxZW07XG4gICAgICAgY29sdW1uLWdhcDogMWVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20tcHJvamVjdHMpO1xufVxuXG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZDpob3ZlciBpbWcge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnByb2plY3RfaW1hZ2VfY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzEsIDAuODIpIHRyYW5zbGF0ZVkoLTMlKTtcbn1cblxuLnByb2plY3RfZGVzY3JpcHRpb24gaDIgKyBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xufVxuLnByb2plY3RfZGVzY3JpcHRpb24gaDIgKyBwICsgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRoaXJkKTtcbn1cblxuLmZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLXByb2plY3QtaW1hZ2UpO1xufVxuXG4ucHJvamVjdF9mZWF0dXJlcyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWZlYXR1cmVzKTtcbn1cbi5wcm9qZWN0X2ZlYXR1cmVzICsgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rcyk7XG59XG5cbi5uYW1lX3Byb2plY3Qge1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kLWZvbnQpO1xufVxuXG4ucHJvamVjdF9mZWF0dXJlcyxcbi5uYW1lX3Byb2plY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbnNfc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tb3otY29sdW1uLWdhcDogMmVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDJlbTtcbn1cbi5idXR0b25zX3NlY3Rpb24gYnV0dG9uIHtcbiAgd2lkdGg6IDVlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1idXR0b24tYmlnKTtcbn1cbi5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYnV0dG9uLXNtYWxsKTtcbn1cblxuLmFsbF9wcm9qZWN0c19maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxsX3Byb2plY3RzX2J1dHRvbiB7XG4gIHBhZGRpbmctaW5saW5lOiAxZW07XG59XG5cbi5jdXJyZW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtcGFnZSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1jdXJyZW50LXBhZ2UpO1xufVxuXG4ubWFpbl9ibG9ja193aWR0aCB7XG4gIG1heC13aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfaDEge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xufVxuXG4udGl0bGVfaDIge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zZWNvbmQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lX2luZm9ybWF0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDcwdnc7XG4gIH1cbiAgLm1haW5fYmxvY2tfd2lkdGgge1xuICAgIG1heC13aWR0aDogY2FsYyh2YXIoLS1jb21tb24td2lkdGgpICsgMjB2dyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyNXZoO1xuICAgIC0tZm9udC1zaXplLXBhbmVsOiAyZW07XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuNyk7XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHJvdy1nYXA6IDVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0X2ZpZWxkIHtcbiAgICAtLWNvbW1vbi13aWR0aDogNTB2dztcbiAgfVxuICAucHJvamVjdF9maWVsZCBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDQpO1xuICB9XG4gIC5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtbW96LWNvbHVtbi1nYXA6IDJlbTtcbiAgICAgICAgIGNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuICBoZWFkZXIgLmhlYWRlcl9fcGFuZWwgYSB7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLnByb2plY3RfZmllbGQge1xuICAgIC0tY29tbW9uLXdpZHRoOiA3MHZ3O1xuICB9XG4gIC5oYXJkLXNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICBmb290ZXIge1xuICAgIC0tZm9udC1zaXplLWZvb3RlcjogMTZweDtcbiAgfVxufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLmZvb3Rlci1zb2MxYWwtaXRlbTpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBqdW1wIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgaW5maW5pdGU7XG4gIH1cbn0vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvX2NvbnN0YW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9kaXN0L2Nzcy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19iYXNpYyUyMHN0cnVjdHVyZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19wcm9qZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fY2xhc3Nlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX21lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDQyxrQ0FBQTtFQUNBLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURFQTtFQUNDLGdDQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBRDtBREdBO0VBQ0MsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBRUEsMEJBQUE7RUFDQSxzREFBQTtFQUNBLDZDQUFBO0VBQ0EsMERBQUE7RUFDQSx5REFBQTtFQUNBLCtEQUFBO0VBQ0Esd0RBQUE7RUFDQSxpQ0FBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLGlDQUFBO0VBRUEsNENBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsOENBQUE7RUFFQSxzREFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQ0FBQTtFQUNBLCtDQUFBO0FDUkQ7O0FDaERBOzs7RUFHQyxzQkFBQTtBRG1ERDs7QUNoREE7RUFDQyxlQUFBO0FEbUREOztBQ2hEQTs7RUFFQyxTQUFBO0FEbUREOztBQ2hEQTtFQUNDLGVBQUE7QURtREQ7O0FDaERBO0VBQ0MsY0FBQTtBRG1ERDs7QUNoREE7RUFDQyxnQkFBQTtBRG1ERDs7QUNoREE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBRG1ERDs7QUNoREE7Ozs7RUFJQyxhQUFBO0FEbUREOztBQ2hEQTtFQUNDLFlBQUE7RUFDQSx1QkFBQTtBRG1ERDs7QUNoREE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FEbUREOztBQ2hEQTtFQUNDLGtCQUFBO0FEbUREOztBQ2pEQTtFQUNDLG9CQUFBO0FEb0REOztBQ2pEQTtFQUNDLGlDQUFBO0FEb0REOztBQ2pEQTtFQUNDO0lBQ0MscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0lBQ0EsZ0NBQUE7RURvREE7QUFDRjtBQ2pEQTtFQUNDLHlCQUFBO0VBRUEsc0JBQUE7T0FBQSxpQkFBQTtBRG1ERDs7QUUzSEE7RUFDQyw2QkFBQTtBRjhIRDs7QUUzSEE7RUFDQyxxQ0FBQTtBRjhIRDs7QUUzSEE7RUFDQyw2QkFBQTtFQUNBLG1GQUFBO0FGOEhEOztBRXZIQTtFQUNDLHlCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRjBIRDs7QUV2SEE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFFQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FGeUhEO0FFdkhDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQ3ZCRCxvRUFBQTtVQUFBLDREQUFBO0FIaUpEO0FFdEhDO0VBQ0MsNkNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUZ3SEY7QUVySEM7RUFDQywrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7QUZ1SEY7O0FFbkhBO0VBQ0MsdUJBQUE7QUZzSEQ7O0FFbkhBO0VBQ0MsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FGc0hEO0FFcEhDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRnNIRjs7QUVsSEE7RUFDQyw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtBRnFIRDs7QUVqSEM7RUFDQyxhQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FGb0hGOztBRWhIQTs7RUFFQyxrQ0FBQTtBRm1IRDs7QUVoSEE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRm1IRDs7QUVoSEE7RUFDQyxhQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FGbUhEOztBSXpPQTtFQUNDO0lBQ0Msb0NBQUE7RUo0T0E7RUl6T0Q7SUFDQyx5QkFBQTtFSjJPQTtFSXhPRDtJQUNDLG9DQUFBO0VKME9BO0FBQ0Y7QUl2T0E7RUFDQztJQUNDLG9DQUFBO0VKeU9BO0VJdE9EO0lBQ0MseUJBQUE7RUp3T0E7QUFDRjtBSXJPQTtFQUNDO0lBQ0Msa0JBQUE7RUp1T0E7RUlwT0Q7SUFDQyw2QkFBQTtFSnNPQTtBQUNGO0FJbk9BO0VBQ0M7SUFDQyxRQUFBO0VKcU9BO0VJbE9EO0lBQ0MsV0FBQTtFSm9PQTtBQUNGO0FJak9BO0VBQ0M7SUFDQyxRQUFBO0VKbU9BO0VJaE9EO0lBQ0MsU0FBQTtFSmtPQTtFSS9ORDtJQUNDLFFBQUE7RUppT0E7QUFDRjtBS3hSQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FMMFJEO0FLeFJDO0VBQ0MsOENBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FMMFJGOztBS3RSQTtFQUNDLDhDQUFBO0FMeVJEOztBS3RSQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseURBQUE7QUx5UkQ7QUt2UkM7RUFDQyxTQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBTHlSRjtBS3RSQztFQUNDLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtBTHdSRjs7QUtuUkE7RUFDQyxxQ0FBQTtFQUNBLDhEQUFBO0VBRUEsOEpBQ0M7QUxvUkY7O0FLL1FBOztFQUVDLHFCQUFBO0FMa1JEO0FLaFJDOztFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QUxtUkY7O0FLL1FBO0VBQ0Msb0JBQUE7RUFDQSwwQkFBQTtBTGtSRDtBS2hSQztFQUNDLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFFQSxzS0FDQztBTGdSSDs7QU1wVkE7RUFDQyxjQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QU5zVkQ7QU1wVkM7RUFDQyx1Q0FBQTtBTnNWRjtBTXBWRTtFQUNDLHlCQUFBO0FOc1ZIOztBTWpWQTtFQUNDLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QU5vVkQ7O0FNalZBO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0FOb1ZEOztBTWpWQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBTm9WRDtBTWxWQztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7QU5vVkY7QU1qVkM7RUFDQyx1QkFBQTtBTm1WRjs7QU0vVUE7RUFDQyw2QkFBQTtBTmtWRDtBTWhWQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FOa1ZGO0FNL1VDO0VBQ0MscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FOaVZGO0FNOVVDOztFQUVDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBTmdWRjtBTTdVQztFQUNDLGlDQUFBO0FOK1VGO0FNNVVDO0VBQ0MsZ0NBQUE7QU44VUY7O0FPbmFBO0VBQ0Msb0JBQUE7RUFFQSxrQkFBQTtBUHFhRDtBT25hQzs7RUFFQyxzREFBQTtBUHFhRjs7QU9qYUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FQb2FEOztBTy9aRTtFQUNDLGdCQUFBO0FQa2FIO0FPaGFHO0VBQ0MsbUJBQUE7QVBrYUo7QU85WkU7RUFDQyxrQkFBQTtFQUNBLDRDQUFBO0FQZ2FIOztBTzNaQTtFQUNDLHVDQUFBO0FQOFpEO0FPNVpDO0VBQ0MsaUNBQUE7QVA4WkY7O0FPMVpBO0VBQ0Msa0JBQUE7RUFDQSxxQ0FBQTtBUDZaRDs7QU8xWkE7RUFDQyxpQ0FBQTtBUDZaRDtBTzNaQztFQUNDLHlCQUFBO0FQNlpGOztBT3paQTtFQUNDLCtCQUFBO0FQNFpEOztBT3paQTs7RUFFQyxpQkFBQTtBUDRaRDs7QU96WkE7RUFDQyxhQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0FQNFpEO0FPMVpDO0VBQ0MsVUFBQTtBUDRaRjs7QU94WkE7RUFDQyxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FQMlpEO0FPelpDO0VBQ0MsMkJBQUE7RUFDQSxvQ0FBQTtBUDJaRjtBT3haQztFQUNDLDJCQUFBO0VBQ0Esc0NBQUE7QVAwWkY7O0FPdFpBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FQeVpEOztBT3RaQTtFQUNDLG1CQUFBO0FQeVpEOztBUTlmQTtFQUNDLGdDQUFBO0VBQ0Esa0RBQUE7QVJpZ0JEOztBUTlmQTtFQUNDLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QVJpZ0JEOztBUTlmQTtFQUNDLGtCQUFBO0FSaWdCRDs7QVE5ZkE7RUFDQyxxQ0FBQTtBUmlnQkQ7O0FROWZBO0VBQ0Msa0NBQUE7QVJpZ0JEOztBU3JoQkE7RUFDQztJQUNDLGVBQUE7RVR3aEJBO0VTcmhCRDtJQUNDLDJDQUFBO0VUdWhCQTtBQUNGO0FTcGhCQTtFQUNDO0lBQ0MsMEJBQUE7SUFDQSxzQkFBQTtFVHNoQkE7RVNwaEJBO0lBQ0MsNkNBQUE7RVRzaEJEO0VTbGhCRDtJQUNDLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFVG9oQkE7RVNqaEJEO0lBQ0Msb0JBQUE7RVRtaEJBO0VTbGhCQTtJQUNDLHNEQUFBO0VUb2hCRDtFU2hoQkQ7SUFDQyxrQkFBQTtFVGtoQkE7RVMvZ0JEO0lBQ0MsdUJBQUE7RVRpaEJBO0VTL2dCQTtJQUNDLFlBQUE7RVRpaEJEO0VTL2dCQztJQUNDLFdBQUE7RVRpaEJGO0FBQ0Y7QVM1Z0JBO0VBQ0M7SUFDQywwQkFBQTtJQUNBLHVCQUFBO0VUOGdCQTtFUzVnQkE7SUFDQyxtQkFBQTtJQUVBLHVCQUFBO0lBQ0Esb0JBQUE7U0FBQSxlQUFBO0VUNmdCRDtFUzNnQkM7SUFDQyxjQUFBO0VUNmdCRjtFU3hnQkQ7SUFDQyxvQkFBQTtFVDBnQkE7RVN2Z0JEO0lBQ0MscUNBQUE7RVR5Z0JBO0VTdGdCRDtJQUNDLHdCQUFBO0VUd2dCQTtBQUNGO0FTcmdCQTtFQUNDO0lBQ0Msd0RBQUE7RVR1Z0JBO0FBQ0YsQ0FBQSxvQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vZGlzdC9jc3Mvc3R5bGUuY3NzJztcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbmNvbnN0IHllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVhcicpO1xueWVhci50ZXh0Q29udGVudCA9IGDCqSAke2N1cnJlbnRZZWFyfSB8IERtaXRyeWA7XG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5jb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3BhbmVsJyk7XG5jb25zdCByaWdodEluZGVudCA9XG5cdGdldENvbXB1dGVkU3R5bGUoaHRtbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zY3JvbGxiYXItd2lkdGgnKTtcbmNvbnN0IGhhc1Njcm9sbGJhciA9IGh0bWwuY2xpZW50SGVpZ2h0IDwgaHRtbC5zY3JvbGxIZWlnaHQ7XG5jb25zdCBudW1iZXJPZlByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKS5sZW5ndGg7XG5cbmlmICghaGFzU2Nyb2xsYmFyKSB7XG5cdHBhbmVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gcmlnaHRJbmRlbnQ7XG5cdGZvb3Rlci5zdHlsZS5wYWRkaW5nUmlnaHQgPSByaWdodEluZGVudDtcbn1cblxuZnVuY3Rpb24gaG92ZXIoc3VtUHJvamVjdHMpIHtcblx0aWYgKCFzdW1Qcm9qZWN0cykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9maWVsZCcpO1xuXHRjb25zdCBwcm9qZWN0SW1hZ2UgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfaW1hZ2VfaW1nJyldO1xuXG5cdGNvbnN0IHN0YXRpY0ltYWdlID0gW107XG5cdGNvbnN0IGFuaW1hdGVkSW1hZ2UgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMTsgaSA8PSBzdW1Qcm9qZWN0czsgaSsrKSB7XG5cdFx0c3RhdGljSW1hZ2UucHVzaChgLi9pbWcvcHJvamVjdF9pbWFnZXMvJHtpfS1zdGF0aWMucG5nYCk7XG5cdFx0YW5pbWF0ZWRJbWFnZS5wdXNoKGAuL2ltZy9wcm9qZWN0X2ltYWdlcy8ke2l9LWFuaW1hdGVkLmdpZmApO1xuXHR9XG5cblx0cHJvamVjdE1haW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRpZiAocHJvamVjdEltYWdlLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuXHRcdFx0Y2hvb3NlTW9kZShhbmltYXRlZEltYWdlLCBlLnRhcmdldCwgcHJvamVjdEltYWdlKTtcblx0XHR9XG5cdH0pO1xuXG5cdHByb2plY3RNYWluWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcblx0XHRpZiAocHJvamVjdEltYWdlLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuXHRcdFx0Y2hvb3NlTW9kZShzdGF0aWNJbWFnZSwgZS50YXJnZXQsIHByb2plY3RJbWFnZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2hvb3NlTW9kZShhcnJheSwgdGFyZ2V0LCBmaWVsZCkge1xuXHRpZiAoZmllbGQuaW5jbHVkZXModGFyZ2V0KSkge1xuXHRcdGxldCBpbmRleCA9IHRhcmdldC5hbHQ7XG5cdFx0aW5kZXggPSBpbmRleFtpbmRleC5sZW5ndGggLSAxXSAtIDE7XG5cdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyYXlbaW5kZXhdKTtcblx0fVxufVxuXG5ob3ZlcihudW1iZXJPZlByb2plY3RzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==