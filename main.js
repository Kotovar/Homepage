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
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
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

/**
  Нормализация блочной модели
 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/**
   Убираем внутренние отступы слева тегам списков,
   у которых есть атрибут class
  */
:where(ul, ol):where([class]) {
  padding-left: 0;
}

/**
   Убираем внешние отступы body и двум другим тегам,
   у которых есть атрибут class
  */
body,
:where(blockquote, figure):where([class]) {
  margin: 0;
}

/**
   Убираем внешние отступы вертикали нужным тегам,
   у которых есть атрибут class
  */
:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
  margin-block: 0;
}

:where(dd[class]) {
  margin-left: 0;
}

/**
   Убираем стандартный маркер маркированному списку,
   у которого есть атрибут class
  */
:where(ul[class]) {
  list-style: none;
}

/**
   Упрощаем работу с изображениями
  */
img {
  display: block;
  max-width: 100%;
}

/**
   Наследуем свойства шрифт для полей ввода
  */
input,
textarea,
select,
button {
  font: inherit;
}

html {
  /**
      Пригодится в большинстве ситуаций
      (когда, например, нужно будет "прижать" футер к низу сайта)
     */
  height: 100%;
  /**
      Плавный скролл
     */
  scroll-behavior: smooth;
}

body {
  /**
      Пригодится в большинстве ситуаций
      (когда, например, нужно будет "прижать" футер к низу сайта)
     */
  min-height: 100%;
  /**
      Унифицированный интерлиньяж
     */
  line-height: 1.5;
}

/**
   Приводим к единому цвету svg-элементы
  */
svg *[fill] {
  fill: currentColor;
}

svg *[stroke] {
  stroke: currentColor;
}

/**
   Чиним баг задержки смены цвета при взаимодействии с svg-элементами
  */
svg * {
  transition-property: fill, stroke;
}

/**
   Удаляем все анимации и переходы для людей,
   которые предпочитают их не использовать
  */
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
}
@media (hover: hover) {
  .footer-soc1al-item:hover {
    animation: jump 0.8s cubic-bezier(0.4, 0, 1, 1) infinite;
  }
}/*# sourceMappingURL=style.css.map */`, "",{"version":3,"sources":["webpack://./dist/css/style.css","webpack://./src/_constants.scss","webpack://./src/_reset.scss","webpack://./src/_basic%20structure.scss","webpack://./src/_mixins.scss","webpack://./src/_animations.scss","webpack://./src/_main.scss","webpack://./src/_about.scss","webpack://./src/_project.scss","webpack://./src/_classes.scss","webpack://./src/_media.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
const year = document.getElementById('year');
year.textContent = `© ${currentYear} | Designed and coded by Dmitry`;

// проверка на наличие скроллбара
const html = document.querySelector('html');
const footer = document.querySelector('footer');
const panel = document.querySelector('.header__panel');
const rightIndent =
	getComputedStyle(html).getPropertyValue('--scrollbar-width');
const hasScrollbar = html.clientHeight < html.scrollHeight;
if (!hasScrollbar) {
	panel.style.marginRight = rightIndent;
	footer.style.paddingRight = rightIndent;
}

// функция для замены статичного изображения на анимированное при наведении курсора
function hover(sumProjects) {
	const projectMain = document.getElementsByClassName('project_field');
	const projectImage = [
		...document.getElementsByClassName('project_image_img'),
	];

	const staticImage = [];
	const animatedImage = [];
	const mobileImage = [];

	for (let i = 1; i <= sumProjects; i++) {
		staticImage.push(`./img/project_images/${i}-static.png`);
		animatedImage.push(`./img/project_images/${i}-animated.gif`);
		mobileImage.push(`./img/project_images/${i}-static-mobile.webp`);
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

if (document.getElementsByClassName('project_field').length > 0) {
	hover(5);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFLQUEyRDtBQUN2Ryw0Q0FBNEMsaUpBQWlEO0FBQzdGLDRDQUE0Qyx5SUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDLGlhQUFpYSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFFBQVEsVUFBVSxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8saUNBQWlDO0FBQzF4SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hxQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkMsMkNBQTJDLEVBQUU7QUFDN0MsNkNBQTZDLEVBQUU7QUFDL0MsMkNBQTJDLEVBQUU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vZGlzdC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL2Rpc3QvY3NzL3N0eWxlLmNzcz9mMTZlIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9mb250cy9SZWN1cnNpdmVfTW9ub3NwYWNlLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvZm9udHMvV2VsbGZsZWV0LVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvaW1nL3NraWxscy9zb2Z0LXNraWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmVjdXJzaXZlX01vbm9zcGFjZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiV2VsbGZsZWV0LVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuOnJvb3Qge1xuICAtLWNvbG9yLWhlYWRlcjogIzdkNzc3NztcbiAgLS1jb2xvci1saW5rczogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLS1jb2xvci1tYWluOiAjZTdiYjJiO1xuICAtLWNvbG9yLWZvbnQtcGFuZWw6ICNmZmZmZmY7XG4gIC0tY29sb3ItZm9udC1tYWluOiAjMjEyMTIxO1xuICAtLWNvbG9yLWZvbnQtZmVhdHVyZXM6ICNmNzJiMmI7XG4gIC0tY29sb3ItaHI6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIC0tY29sb3ItY3VycmVudC1wYWdlOiAjZTNjMTU0O1xuICAtLWNvbG9yLWJvcmRlci1hdmF0YXI6IHZhcigtLWNvbG9yLWhlYWRlcik7XG4gIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAzNXZoO1xuICAtLWZvbnQtc2l6ZS1wYW5lbDogY2FsYyh2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpIC8gOCk7XG4gIC0tZm9udC1zaXplLWdyZWV0aW5nczogY2xhbXAoMjRweCwgNXZ3LCA0MHB4KTtcbiAgLS1mb250LXNpemUtc2Vjb25kOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMC44KTtcbiAgLS1mb250LXNpemUtdGhpcmQ6IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAwLjUpO1xuICAtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbjogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDAuNik7XG4gIC0tZm9udC1zaXplLW5hbWU6IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAyLjQpO1xuICAtLWZvbnQtc2l6ZS1mb290ZXI6IG1heCgxdncsIDJ2aCk7XG4gIC0tZm9vdGVyLWhlaWdodDogNXZoO1xuICAtLXNjcm9sbGJhci13aWR0aDogMTBweDtcbiAgLS1oZWlnaHQtaHI6IDJweDtcbiAgLS1jb21tb24td2lkdGg6IDUwdnc7XG4gIC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0czogNGVtO1xuICAtLXdpZHRoLXByb2plY3QtaW1hZ2U6IDYwMHB4O1xuICAtLXBhZGRpbmctcGFuZWw6IGNhbGMoMXZ3ICsgMTBweCk7XG4gIC0tc2hhZG93LW1haW46IDVweCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjcpO1xuICAtLXNoYWRvdy1idXR0b24tYmlnOiAwcHggMTBweCAxMHB4IHJnYigwIDAgMCAvIDAuNyk7XG4gIC0tc2hhZG93LWJ1dHRvbi1zbWFsbDogMHB4IDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNCk7XG4gIC0tc2hhZG93LWZvb3RlcjogNXB4IDVweCAyMHB4IHJnYigwIDAgMCAvIDAuNyk7XG4gIC0tYm9yZGVyLWF2YXRhcjogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItYXZhdGFyKTtcbiAgLS10cmFuc2l0aW9uOiAwLjJzO1xuICAtLXNjYWxlOiBzY2FsZSgxLjEpO1xuICAtLW1haW4tZm9udDogV2VsbGZsZWV0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gIC0tc2Vjb25kLWZvbnQ6IFwiUmVjdXJzaXZlX01vbm9zcGFjZVwiLCBtb25vc3BhY2U7XG59XG5cbi8qKlxuICDQndC+0YDQvNCw0LvQuNC30LDRhtC40Y8g0LHQu9C+0YfQvdC+0Lkg0LzQvtC00LXQu9C4XG4gKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdGD0YLRgNC10L3QvdC40LUg0L7RgtGB0YLRg9C/0Ysg0YHQu9C10LLQsCDRgtC10LPQsNC8INGB0L/QuNGB0LrQvtCyLFxuICAg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbjp3aGVyZSh1bCwgb2wpOndoZXJlKFtjbGFzc10pIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLIGJvZHkg0Lgg0LTQstGD0Lwg0LTRgNGD0LPQuNC8INGC0LXQs9Cw0LwsXG4gICDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuYm9keSxcbjp3aGVyZShibG9ja3F1b3RlLCBmaWd1cmUpOndoZXJlKFtjbGFzc10pIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLINCy0LXRgNGC0LjQutCw0LvQuCDQvdGD0LbQvdGL0Lwg0YLQtdCz0LDQvCxcbiAgINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG46d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdWwsIG9sLCBkbCk6d2hlcmUoW2NsYXNzXSkge1xuICBtYXJnaW4tYmxvY2s6IDA7XG59XG5cbjp3aGVyZShkZFtjbGFzc10pIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvNCw0YDQutC10YAg0LzQsNGA0LrQuNGA0L7QstCw0L3QvdC+0LzRgyDRgdC/0LjRgdC60YMsXG4gICDRgyDQutC+0YLQvtGA0L7Qs9C+INC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG46d2hlcmUodWxbY2xhc3NdKSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qKlxuICAg0KPQv9GA0L7RidCw0LXQvCDRgNCw0LHQvtGC0YMg0YEg0LjQt9C+0LHRgNCw0LbQtdC90LjRj9C80LhcbiAgKi9cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qKlxuICAg0J3QsNGB0LvQtdC00YPQtdC8INGB0LLQvtC50YHRgtCy0LAg0YjRgNC40YTRgiDQtNC70Y8g0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICovXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuYnV0dG9uIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIC8qKlxuICAgICAg0J/RgNC40LPQvtC00LjRgtGB0Y8g0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC40YLRg9Cw0YbQuNC5XG4gICAgICAo0LrQvtCz0LTQsCwg0L3QsNC/0YDQuNC80LXRgCwg0L3Rg9C20L3QviDQsdGD0LTQtdGCIFwi0L/RgNC40LbQsNGC0YxcIiDRhNGD0YLQtdGAINC6INC90LjQt9GDINGB0LDQudGC0LApXG4gICAgICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyoqXG4gICAgICDQn9C70LDQstC90YvQuSDRgdC60YDQvtC70LtcbiAgICAgKi9cbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKipcbiAgICAgINCf0YDQuNCz0L7QtNC40YLRgdGPINCyINCx0L7Qu9GM0YjQuNC90YHRgtCy0LUg0YHQuNGC0YPQsNGG0LjQuVxuICAgICAgKNC60L7Qs9C00LAsINC90LDQv9GA0LjQvNC10YAsINC90YPQttC90L4g0LHRg9C00LXRgiBcItC/0YDQuNC20LDRgtGMXCIg0YTRg9GC0LXRgCDQuiDQvdC40LfRgyDRgdCw0LnRgtCwKVxuICAgICAqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICAvKipcbiAgICAgINCj0L3QuNGE0LjRhtC40YDQvtCy0LDQvdC90YvQuSDQuNC90YLQtdGA0LvQuNC90YzRj9C2XG4gICAgICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qKlxuICAg0J/RgNC40LLQvtC00LjQvCDQuiDQtdC00LjQvdC+0LzRgyDRhtCy0LXRgtGDIHN2Zy3RjdC70LXQvNC10L3RgtGLXG4gICovXG5zdmcgKltmaWxsXSB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuc3ZnICpbc3Ryb2tlXSB7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xufVxuXG4vKipcbiAgINCn0LjQvdC40Lwg0LHQsNCzINC30LDQtNC10YDQttC60Lgg0YHQvNC10L3RiyDRhtCy0LXRgtCwINC/0YDQuCDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC4INGBIHN2Zy3RjdC70LXQvNC10L3RgtCw0LzQuFxuICAqL1xuc3ZnICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmaWxsLCBzdHJva2U7XG59XG5cbi8qKlxuICAg0KPQtNCw0LvRj9C10Lwg0LLRgdC1INCw0L3QuNC80LDRhtC40Lgg0Lgg0L/QtdGA0LXRhdC+0LTRiyDQtNC70Y8g0LvRjtC00LXQuSxcbiAgINC60L7RgtC+0YDRi9C1INC/0YDQtdC00L/QvtGH0LjRgtCw0Y7RgiDQuNGFINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMXG4gICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuKiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY29sb3ItbWFpbikgOTUlLCB2YXIoLS1jb2xvci1oZWFkZXIpIDk1JSk7XG59XG5cbmJvZHkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpO1xuICB6LWluZGV4OiAxMDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tc2hhZG93LW1haW4pKTtcbn1cbmhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMjkuOTc5MjQ2MTc5JSk7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDI5Ljk3OTI0NjE3OSUpO1xufVxuaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodC1yaWdodC1wYW5lbCkgKiAwLjkpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1wYW5lbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGEge1xuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93LW1haW4pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXBhbmVsKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcGFuZWwpO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uaGVhZGVyX19wYW5lbCBhOm5vdCguY3VycmVudCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcbn1cblxubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xufVxubWFpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5mb290ZXIge1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9vdGVyKTtcbiAgei1pbmRleDogMTtcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjVlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjVlbTtcbn1cblxuLmxpbmtzX3NvYzFhbCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tb3otY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmxpbmtzX3NvYzFhbCB1bCxcbiN5ZWFyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZm9vdGVyKTtcbn1cblxuLmZvb3Rlci1zb2MxYWwtaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3Rlci1zb2MxYWwtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXBhbmVsKTtcbn1cblxuQGtleWZyYW1lcyBjdXJzb3Ige1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY3Vyc29yX29mZiB7XG4gIGZyb20ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgfVxuICB0byB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyB0ZXh0X2FwcGVhcmFuY2Uge1xuICBmcm9tIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgdG8ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByaW50ZWRfdGV4dCB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBqdW1wIHtcbiAgMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgdG9wOiAtNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JSA4NSUgMjAlIDgwJS84NSUgMjAlIDgwJSAxNSU7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWF2YXRhcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYXZhdGFyIGltZzpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDg1JSAxNSUgODUlIDE1JS8xNSUgODUlIDE1JSA4NSU7XG59XG5cbi5ncmVldGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1hbmltYXRpb24tc3RlcHM6IDEwO1xuICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjA3ZW07XG4gIC0tYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgKyAwLjJzKTtcbn1cbi5ncmVldGluZyBkaXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZC1mb250KTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uZ3JlZXRpbmcgPiBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogdGV4dF9hcHBlYXJhbmNlIGNhbGModmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSAvIDEuNSkgbGluZWFyIDUuMnMgZm9yd2FyZHM7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0IHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xuICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgYW5pbWF0aW9uOiBjdXJzb3IgMC43NXMgc3RlcC1lbmQsIHByaW50ZWRfdGV4dCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIHN0ZXBzKHZhcigtLWFuaW1hdGlvbi1zdGVwcykpLCBjdXJzb3Jfb2ZmIDAuMnMgbGluZWFyIHZhcigtLWFuaW1hdGlvbi1kZWxheSkgZm9yd2FyZHM7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0LFxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhaW5lcl9hbmltYXRpb25fZmlyc3QgcCxcbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCBwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHtcbiAgLS1hbmltYXRpb24tc3RlcHM6IDY7XG4gIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xufVxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHAge1xuICB3aWR0aDogMDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmFtZSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBjdXJzb3IgMC43NXMgc3RlcC1lbmQgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBpbmZpbml0ZSwgcHJpbnRlZF90ZXh0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBzdGVwcyh2YXIoLS1hbmltYXRpb24tc3RlcHMpKSBmb3J3YXJkcztcbn1cblxuLmFib3V0IHtcbiAgLS1yb3ctZ2FwOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcm93LWdhcDogdmFyKC0tcm93LWdhcCk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXJvdy1nYXApICogMik7XG59XG4uYWJvdXQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbn1cbi5hYm91dCBwIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlua3MpO1xufVxuXG5ociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaHIpO1xuICB3aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtaHIpO1xufVxuXG4uaGFyZC1za2lsbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uaGFyZC1za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDAuNXJlbTtcbn1cbi5oYXJkLXNraWxsIGltZyB7XG4gIG1heC13aWR0aDogMTBlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1zaGFkb3ctbWFpbikpO1xufVxuLmhhcmQtc2tpbGwgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XG59XG5cbi5zb2Z0X3NraWxscyB7XG4gIC0tc3BhY2VfcHNldWRvX2lubGluZTogLTEuNWVtO1xufVxuLnNvZnRfc2tpbGxzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMWVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uc29mdF9za2lsbHMgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvZnRfc2tpbGxzIGxpOjpiZWZvcmUsXG4uc29mdF9za2lsbHMgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1ZW07XG59XG4uc29mdF9za2lsbHMgbGk6OmFmdGVyIHtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlX3BzZXVkb19pbmxpbmUpO1xufVxuLnNvZnRfc2tpbGxzIGxpOjpiZWZvcmUge1xuICBsZWZ0OiB2YXIoLS1zcGFjZV9wc2V1ZG9faW5saW5lKTtcbn1cblxuLnByb2plY3RfZmllbGQge1xuICAtLWNvbW1vbi13aWR0aDogNzB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3RfZmllbGQgaDEsXG4ucHJvamVjdF9maWVsZCAuYWxsX3Byb2plY3RzX2ZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDIpO1xufVxuXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDVmcjtcbiAgLW1vei1jb2x1bW4tZ2FwOiAxZW07XG4gICAgICAgY29sdW1uLWdhcDogMWVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20tcHJvamVjdHMpO1xufVxuXG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZDpob3ZlciBpbWcge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnByb2plY3RfaW1hZ2VfY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzEsIDAuODIpIHRyYW5zbGF0ZVkoLTMlKTtcbn1cblxuLnByb2plY3RfZGVzY3JpcHRpb24gaDIgKyBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xufVxuLnByb2plY3RfZGVzY3JpcHRpb24gaDIgKyBwICsgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRoaXJkKTtcbn1cblxuLmZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoLXByb2plY3QtaW1hZ2UpO1xufVxuXG4ucHJvamVjdF9mZWF0dXJlcyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWZlYXR1cmVzKTtcbn1cbi5wcm9qZWN0X2ZlYXR1cmVzICsgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rcyk7XG59XG5cbi5uYW1lX3Byb2plY3Qge1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kLWZvbnQpO1xufVxuXG4ucHJvamVjdF9mZWF0dXJlcyxcbi5uYW1lX3Byb2plY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbnNfc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tb3otY29sdW1uLWdhcDogMmVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDJlbTtcbn1cbi5idXR0b25zX3NlY3Rpb24gYnV0dG9uIHtcbiAgd2lkdGg6IDVlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1idXR0b24tYmlnKTtcbn1cbi5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYnV0dG9uLXNtYWxsKTtcbn1cblxuLmFsbF9wcm9qZWN0c19maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxsX3Byb2plY3RzX2J1dHRvbiB7XG4gIHBhZGRpbmctaW5saW5lOiAxZW07XG59XG5cbi5jdXJyZW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtcGFnZSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1jdXJyZW50LXBhZ2UpO1xufVxuXG4ubWFpbl9ibG9ja193aWR0aCB7XG4gIG1heC13aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfaDEge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xufVxuXG4udGl0bGVfaDIge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zZWNvbmQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lX2luZm9ybWF0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDcwdnc7XG4gIH1cbiAgLm1haW5fYmxvY2tfd2lkdGgge1xuICAgIG1heC13aWR0aDogY2FsYyh2YXIoLS1jb21tb24td2lkdGgpICsgMjB2dyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyNXZoO1xuICAgIC0tZm9udC1zaXplLXBhbmVsOiAyZW07XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuNyk7XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHJvdy1nYXA6IDVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0X2ZpZWxkIHtcbiAgICAtLWNvbW1vbi13aWR0aDogNTB2dztcbiAgfVxuICAucHJvamVjdF9maWVsZCBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDQpO1xuICB9XG4gIC5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtbW96LWNvbHVtbi1nYXA6IDJlbTtcbiAgICAgICAgIGNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuICBoZWFkZXIgLmhlYWRlcl9fcGFuZWwgYSB7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLnByb2plY3RfZmllbGQge1xuICAgIC0tY29tbW9uLXdpZHRoOiA3MHZ3O1xuICB9XG4gIC5oYXJkLXNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLmZvb3Rlci1zb2MxYWwtaXRlbTpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBqdW1wIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgaW5maW5pdGU7XG4gIH1cbn0vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L2Nzcy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fY29uc3RhbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19iYXNpYyUyMHN0cnVjdHVyZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19wcm9qZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fY2xhc3Nlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX21lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0Msa0NBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRENE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RVZxa0JBO0VVcGtCQTtJQUNDLHNEQUFBO0VWc2tCRDtFVWxrQkQ7SUFDQyxrQkFBQTtFVm9rQkE7RVVqa0JEO0lBQ0MsdUJBQUE7RVZta0JBO0VVamtCQTtJQUNDLFlBQUE7RVZta0JEO0VVamtCQztJQUNDLFdBQUE7RVZta0JGO0FBQ0Y7QVU5akJBO0VBQ0M7SUFDQywwQkFBQTtJQUNBLHVCQUFBO0VWZ2tCQTtFVTlqQkE7SUFDQyxtQkFBQTtJQUVBLHVCQUFBO0lBQ0Esb0JBQUE7U0FBQSxlQUFBO0VWK2pCRDtFVTdqQkM7SUFDQyxjQUFBO0VWK2pCRjtFVTFqQkQ7SUFDQyxvQkFBQTtFVjRqQkE7RVV6akJEO0lBQ0MscUNBQUE7RVYyakJBO0FBQ0Y7QVV2akJBO0VBQ0M7SUFDQyx3REFBQTtFVnlqQkE7QUFDRixDQUFBLG9DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9kaXN0L2Nzcy9zdHlsZS5jc3MnO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuY29uc3QgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyJyk7XG55ZWFyLnRleHRDb250ZW50ID0gYMKpICR7Y3VycmVudFllYXJ9IHwgRGVzaWduZWQgYW5kIGNvZGVkIGJ5IERtaXRyeWA7XG5cbi8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDRgdC60YDQvtC70LvQsdCw0YDQsFxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wYW5lbCcpO1xuY29uc3QgcmlnaHRJbmRlbnQgPVxuXHRnZXRDb21wdXRlZFN0eWxlKGh0bWwpLmdldFByb3BlcnR5VmFsdWUoJy0tc2Nyb2xsYmFyLXdpZHRoJyk7XG5jb25zdCBoYXNTY3JvbGxiYXIgPSBodG1sLmNsaWVudEhlaWdodCA8IGh0bWwuc2Nyb2xsSGVpZ2h0O1xuaWYgKCFoYXNTY3JvbGxiYXIpIHtcblx0cGFuZWwuc3R5bGUubWFyZ2luUmlnaHQgPSByaWdodEluZGVudDtcblx0Zm9vdGVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHJpZ2h0SW5kZW50O1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LfQsNC80LXQvdGLINGB0YLQsNGC0LjRh9C90L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDQsNC90LjQvNC40YDQvtCy0LDQvdC90L7QtSDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC60YPRgNGB0L7RgNCwXG5mdW5jdGlvbiBob3ZlcihzdW1Qcm9qZWN0cykge1xuXHRjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKTtcblx0Y29uc3QgcHJvamVjdEltYWdlID0gW1xuXHRcdC4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfaW1hZ2VfaW1nJyksXG5cdF07XG5cblx0Y29uc3Qgc3RhdGljSW1hZ2UgPSBbXTtcblx0Y29uc3QgYW5pbWF0ZWRJbWFnZSA9IFtdO1xuXHRjb25zdCBtb2JpbGVJbWFnZSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDw9IHN1bVByb2plY3RzOyBpKyspIHtcblx0XHRzdGF0aWNJbWFnZS5wdXNoKGAuL2ltZy9wcm9qZWN0X2ltYWdlcy8ke2l9LXN0YXRpYy5wbmdgKTtcblx0XHRhbmltYXRlZEltYWdlLnB1c2goYC4vaW1nL3Byb2plY3RfaW1hZ2VzLyR7aX0tYW5pbWF0ZWQuZ2lmYCk7XG5cdFx0bW9iaWxlSW1hZ2UucHVzaChgLi9pbWcvcHJvamVjdF9pbWFnZXMvJHtpfS1zdGF0aWMtbW9iaWxlLndlYnBgKTtcblx0fVxuXG5cdHByb2plY3RNYWluWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoYW5pbWF0ZWRJbWFnZSwgZS50YXJnZXQsIHByb2plY3RJbWFnZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRwcm9qZWN0TWFpblswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoc3RhdGljSW1hZ2UsIGUudGFyZ2V0LCBwcm9qZWN0SW1hZ2UpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNob29zZU1vZGUoYXJyYXksIHRhcmdldCwgZmllbGQpIHtcblx0aWYgKGZpZWxkLmluY2x1ZGVzKHRhcmdldCkpIHtcblx0XHRsZXQgaW5kZXggPSB0YXJnZXQuYWx0O1xuXHRcdGluZGV4ID0gaW5kZXhbaW5kZXgubGVuZ3RoIC0gMV0gLSAxO1xuXHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycmF5W2luZGV4XSk7XG5cdH1cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKS5sZW5ndGggPiAwKSB7XG5cdGhvdmVyKDUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9