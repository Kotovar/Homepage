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
  --color-links: #7e7676;
  --color-header: #938888;
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
  --footer-height: 10vh;
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
  background: linear-gradient(180deg, var(--color-main) 90%, var(--color-header) 90%);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-footer);
  z-index: 1;
  row-gap: 0.5em;
}

.links_soc1al ul {
  display: flex;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  margin: 0;
  padding-left: 0;
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
  border: 3px solid var(--color-font-main);
  background-color: var(--color-header);
  color: var(--color-font-panel);
  font-size: var(--font-size-description);
  outline: none;
  transition: all var(--transition);
}
.button:hover {
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-font-main);
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
@media (max-height: 800px) and (orientation: landscape) {
  footer {
    -moz-column-gap: 5em;
         column-gap: 5em;
    flex-direction: row;
  }
}
@media (max-width: 576px) {
  header {
    justify-content: center;
  }
  header .header__panel {
    flex-direction: row;
    align-items: flex-start;
    gap: 1em;
  }
  header .header__panel a {
    font-size: 8vw;
  }
  .project_field {
    --common-width: 70vw;
  }
  .hard-skills {
    grid-template-columns: repeat(2, 1fr);
  }
  .header__panel {
    margin-top: 1em;
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
	hover(4);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFLQUEyRDtBQUN2Ryw0Q0FBNEMsaUpBQWlEO0FBQzdGLDRDQUE0Qyx5SUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QyxpYUFBaWEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssUUFBUSxVQUFVLE9BQU8sTUFBTSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxpQ0FBaUM7QUFDanlLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaHFCMUI7O0FBRWI7QUFD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V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixhQUFhOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQywyQ0FBMkMsRUFBRTtBQUM3Qyw2Q0FBNkMsRUFBRTtBQUMvQywyQ0FBMkMsRUFBRTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9kaXN0L2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vZGlzdC9jc3Mvc3R5bGUuY3NzP2YxNmUiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ZvbnRzL1JlY3Vyc2l2ZV9Nb25vc3BhY2UtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9mb250cy9XZWxsZmxlZXQtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9pbWcvc2tpbGxzL3NvZnQtc2tpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSZWN1cnNpdmVfTW9ub3NwYWNlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJXZWxsZmxlZXQtUmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG46cm9vdCB7XG4gIC0tY29sb3ItbGlua3M6ICM3ZTc2NzY7XG4gIC0tY29sb3ItaGVhZGVyOiAjOTM4ODg4O1xuICAtLWNvbG9yLW1haW46ICNlN2JiMmI7XG4gIC0tY29sb3ItZm9udC1wYW5lbDogI2ZmZmZmZjtcbiAgLS1jb2xvci1mb250LW1haW46ICMyMTIxMjE7XG4gIC0tY29sb3ItZm9udC1mZWF0dXJlczogI2Y3MmIyYjtcbiAgLS1jb2xvci1ocjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgLS1jb2xvci1jdXJyZW50LXBhZ2U6ICNlM2MxNTQ7XG4gIC0tY29sb3ItYm9yZGVyLWF2YXRhcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLS1oZWlnaHQtcmlnaHQtcGFuZWw6IDM1dmg7XG4gIC0tZm9udC1zaXplLXBhbmVsOiBjYWxjKHZhcigtLWhlaWdodC1yaWdodC1wYW5lbCkgLyA4KTtcbiAgLS1mb250LXNpemUtZ3JlZXRpbmdzOiBjbGFtcCgyNHB4LCA1dncsIDQwcHgpO1xuICAtLWZvbnQtc2l6ZS1zZWNvbmQ6IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAwLjgpO1xuICAtLWZvbnQtc2l6ZS10aGlyZDogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDAuNSk7XG4gIC0tZm9udC1zaXplLWRlc2NyaXB0aW9uOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMC42KTtcbiAgLS1mb250LXNpemUtbmFtZTogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDIuNCk7XG4gIC0tZm9vdGVyLWhlaWdodDogMTB2aDtcbiAgLS1zY3JvbGxiYXItd2lkdGg6IDEwcHg7XG4gIC0taGVpZ2h0LWhyOiAycHg7XG4gIC0tY29tbW9uLXdpZHRoOiA1MHZ3O1xuICAtLW1hcmdpbi1ib3R0b20tcHJvamVjdHM6IDRlbTtcbiAgLS13aWR0aC1wcm9qZWN0LWltYWdlOiA2MDBweDtcbiAgLS1wYWRkaW5nLXBhbmVsOiBjYWxjKDF2dyArIDEwcHgpO1xuICAtLXNoYWRvdy1tYWluOiA1cHggNXB4IDEwcHggcmdiKDAgMCAwIC8gMC43KTtcbiAgLS1zaGFkb3ctYnV0dG9uLWJpZzogMHB4IDEwcHggMTBweCByZ2IoMCAwIDAgLyAwLjcpO1xuICAtLXNoYWRvdy1idXR0b24tc21hbGw6IDBweCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjQpO1xuICAtLXNoYWRvdy1mb290ZXI6IDVweCA1cHggMjBweCByZ2IoMCAwIDAgLyAwLjcpO1xuICAtLWJvcmRlci1hdmF0YXI6IDEwcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLWF2YXRhcik7XG4gIC0tdHJhbnNpdGlvbjogMC4ycztcbiAgLS1zY2FsZTogc2NhbGUoMS4xKTtcbiAgLS1tYWluLWZvbnQ6IFdlbGxmbGVldC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xuICAtLXNlY29uZC1mb250OiBcIlJlY3Vyc2l2ZV9Nb25vc3BhY2VcIiwgbW9ub3NwYWNlO1xufVxuXG4vKipcbiAg0J3QvtGA0LzQsNC70LjQt9Cw0YbQuNGPINCx0LvQvtGH0L3QvtC5INC80L7QtNC10LvQuFxuICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INCy0L3Rg9GC0YDQtdC90L3QuNC1INC+0YLRgdGC0YPQv9GLINGB0LvQtdCy0LAg0YLQtdCz0LDQvCDRgdC/0LjRgdC60L7QsixcbiAgINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG46d2hlcmUodWwsIG9sKTp3aGVyZShbY2xhc3NdKSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLyoqXG4gICDQo9Cx0LjRgNCw0LXQvCDQstC90LXRiNC90LjQtSDQvtGC0YHRgtGD0L/RiyBib2R5INC4INC00LLRg9C8INC00YDRg9Cz0LjQvCDRgtC10LPQsNC8LFxuICAg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbmJvZHksXG46d2hlcmUoYmxvY2txdW90ZSwgZmlndXJlKTp3aGVyZShbY2xhc3NdKSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gICDQo9Cx0LjRgNCw0LXQvCDQstC90LXRiNC90LjQtSDQvtGC0YHRgtGD0L/RiyDQstC10YDRgtC40LrQsNC70Lgg0L3Rg9C20L3Ri9C8INGC0LXQs9Cw0LwsXG4gICDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHVsLCBvbCwgZGwpOndoZXJlKFtjbGFzc10pIHtcbiAgbWFyZ2luLWJsb2NrOiAwO1xufVxuXG46d2hlcmUoZGRbY2xhc3NdKSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INGB0YLQsNC90LTQsNGA0YLQvdGL0Lkg0LzQsNGA0LrQtdGAINC80LDRgNC60LjRgNC+0LLQsNC90L3QvtC80YMg0YHQv9C40YHQutGDLFxuICAg0YMg0LrQvtGC0L7RgNC+0LPQviDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuOndoZXJlKHVsW2NsYXNzXSkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKipcbiAgINCj0L/RgNC+0YnQsNC10Lwg0YDQsNCx0L7RgtGDINGBINC40LfQvtCx0YDQsNC20LXQvdC40Y/QvNC4XG4gICovXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAgINCd0LDRgdC70LXQtNGD0LXQvCDRgdCy0L7QudGB0YLQstCwINGI0YDQuNGE0YIg0LTQu9GPINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAqL1xuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCxcbmJ1dHRvbiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICAvKipcbiAgICAgINCf0YDQuNCz0L7QtNC40YLRgdGPINCyINCx0L7Qu9GM0YjQuNC90YHRgtCy0LUg0YHQuNGC0YPQsNGG0LjQuVxuICAgICAgKNC60L7Qs9C00LAsINC90LDQv9GA0LjQvNC10YAsINC90YPQttC90L4g0LHRg9C00LXRgiBcItC/0YDQuNC20LDRgtGMXCIg0YTRg9GC0LXRgCDQuiDQvdC40LfRgyDRgdCw0LnRgtCwKVxuICAgICAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qKlxuICAgICAg0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7XG4gICAgICovXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgLyoqXG4gICAgICDQn9GA0LjQs9C+0LTQuNGC0YHRjyDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1INGB0LjRgtGD0LDRhtC40LlcbiAgICAgICjQutC+0LPQtNCwLCDQvdCw0L/RgNC40LzQtdGALCDQvdGD0LbQvdC+INCx0YPQtNC10YIgXCLQv9GA0LjQttCw0YLRjFwiINGE0YPRgtC10YAg0Log0L3QuNC30YMg0YHQsNC50YLQsClcbiAgICAgKi9cbiAgbWluLWhlaWdodDogMTAwJTtcbiAgLyoqXG4gICAgICDQo9C90LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0Lkg0LjQvdGC0LXRgNC70LjQvdGM0Y/QtlxuICAgICAqL1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKipcbiAgINCf0YDQuNCy0L7QtNC40Lwg0Log0LXQtNC40L3QvtC80YMg0YbQstC10YLRgyBzdmct0Y3Qu9C10LzQtdC90YLRi1xuICAqL1xuc3ZnICpbZmlsbF0ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbnN2ZyAqW3N0cm9rZV0ge1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbn1cblxuLyoqXG4gICDQp9C40L3QuNC8INCx0LDQsyDQt9Cw0LTQtdGA0LbQutC4INGB0LzQtdC90Ysg0YbQstC10YLQsCDQv9GA0Lgg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQuCDRgSBzdmct0Y3Qu9C10LzQtdC90YLQsNC80LhcbiAgKi9cbnN2ZyAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZmlsbCwgc3Ryb2tlO1xufVxuXG4vKipcbiAgINCj0LTQsNC70Y/QtdC8INCy0YHQtSDQsNC90LjQvNCw0YbQuNC4INC4INC/0LXRgNC10YXQvtC00Ysg0LTQu9GPINC70Y7QtNC10LksXG4gICDQutC+0YLQvtGA0YvQtSDQv9GA0LXQtNC/0L7Rh9C40YLQsNGO0YIg0LjRhSDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjFxuICAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgKiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgpO1xufVxuXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWNvbG9yLW1haW4pIDkwJSwgdmFyKC0tY29sb3ItaGVhZGVyKSA5MCUpO1xufVxuXG5ib2R5IHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKTtcbiAgei1pbmRleDogMTAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLXNoYWRvdy1tYWluKSk7XG59XG5oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDI5Ljk3OTI0NjE3OSUpO1xuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAyOS45NzkyNDYxNzklKTtcbn1cbmhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpICogMC45KTtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXBhZGRpbmctcGFuZWwpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciBhIHtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tYWluKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXBhbmVsKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLmhlYWRlcl9fcGFuZWwgYTpub3QoLmN1cnJlbnQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbn1cbm1haW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcGFuZWwpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWZvb3Rlcik7XG4gIHotaW5kZXg6IDE7XG4gIHJvdy1nYXA6IDAuNWVtO1xufVxuXG4ubGlua3Nfc29jMWFsIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1vei1jb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uZm9vdGVyLXNvYzFhbC1pdGVtIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdGVyLXNvYzFhbC1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcGFuZWwpO1xufVxuXG5Aa2V5ZnJhbWVzIGN1cnNvciB7XG4gIDAlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjdXJzb3Jfb2ZmIHtcbiAgZnJvbSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG4gIHRvIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRleHRfYXBwZWFyYW5jZSB7XG4gIGZyb20ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICB0byB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJpbnRlZF90ZXh0IHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGp1bXAge1xuICAwJSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB0b3A6IC01cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cbi5hdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDg1JSAyMCUgODAlLzg1JSAyMCUgODAlIDE1JTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItYXZhdGFyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5hdmF0YXIgaW1nOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogODUlIDE1JSA4NSUgMTUlLzE1JSA4NSUgMTUlIDg1JTtcbn1cblxuLmdyZWV0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWFuaW1hdGlvbi1zdGVwczogMTA7XG4gIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgLS1ib3JkZXItd2lkdGg6IDAuMDdlbTtcbiAgLS1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSArIDAuMnMpO1xufVxuLmdyZWV0aW5nIGRpdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kLWZvbnQpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5ncmVldGluZyA+IHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiB0ZXh0X2FwcGVhcmFuY2UgY2FsYyh2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIC8gMS41KSBsaW5lYXIgNS4ycyBmb3J3YXJkcztcbn1cblxuLmNvbnRhaW5lcl9hbmltYXRpb25fZmlyc3QgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncyk7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBhbmltYXRpb246IGN1cnNvciAwLjc1cyBzdGVwLWVuZCwgcHJpbnRlZF90ZXh0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgc3RlcHModmFyKC0tYW5pbWF0aW9uLXN0ZXBzKSksIGN1cnNvcl9vZmYgMC4ycyBsaW5lYXIgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBmb3J3YXJkcztcbn1cblxuLmNvbnRhaW5lcl9hbmltYXRpb25fZmlyc3QsXG4uY29udGFpbmVyX2FuaW1hdGlvbl9zZWNvbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFpbmVyX2FuaW1hdGlvbl9maXJzdCBwLFxuLmNvbnRhaW5lcl9hbmltYXRpb25fc2Vjb25kIHAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29udGFpbmVyX2FuaW1hdGlvbl9zZWNvbmQge1xuICAtLWFuaW1hdGlvbi1zdGVwczogNjtcbiAgLS1hbmltYXRpb24tZHVyYXRpb246IDEuOHM7XG59XG4uY29udGFpbmVyX2FuaW1hdGlvbl9zZWNvbmQgcCB7XG4gIHdpZHRoOiAwO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYW1lKTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGN1cnNvciAwLjc1cyBzdGVwLWVuZCB2YXIoLS1hbmltYXRpb24tZGVsYXkpIGluZmluaXRlLCBwcmludGVkX3RleHQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSB2YXIoLS1hbmltYXRpb24tZGVsYXkpIHN0ZXBzKHZhcigtLWFuaW1hdGlvbi1zdGVwcykpIGZvcndhcmRzO1xufVxuXG4uYWJvdXQge1xuICAtLXJvdy1nYXA6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICByb3ctZ2FwOiB2YXIoLS1yb3ctZ2FwKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcm93LWdhcCkgKiAyKTtcbn1cbi5hYm91dCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xufVxuLmFib3V0IHAgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rcyk7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ocik7XG4gIHdpZHRoOiB2YXIoLS1jb21tb24td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodC1ocik7XG59XG5cbi5oYXJkLXNraWxscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5cbi5oYXJkLXNraWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMC41cmVtO1xufVxuLmhhcmQtc2tpbGwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMGVtO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24pO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLXNoYWRvdy1tYWluKSk7XG59XG4uaGFyZC1za2lsbCBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcbn1cblxuLnNvZnRfc2tpbGxzIHtcbiAgLS1zcGFjZV9wc2V1ZG9faW5saW5lOiAtMS41ZW07XG59XG4uc29mdF9za2lsbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAxZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5zb2Z0X3NraWxscyBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVzY3JpcHRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc29mdF9za2lsbHMgbGk6OmJlZm9yZSxcbi5zb2Z0X3NraWxscyBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMjVlbTtcbn1cbi5zb2Z0X3NraWxscyBsaTo6YWZ0ZXIge1xuICByaWdodDogdmFyKC0tc3BhY2VfcHNldWRvX2lubGluZSk7XG59XG4uc29mdF9za2lsbHMgbGk6OmJlZm9yZSB7XG4gIGxlZnQ6IHZhcigtLXNwYWNlX3BzZXVkb19pbmxpbmUpO1xufVxuXG4ucHJvamVjdF9maWVsZCB7XG4gIC0tY29tbW9uLXdpZHRoOiA3MHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvamVjdF9maWVsZCBoMSxcbi5wcm9qZWN0X2ZpZWxkIC5hbGxfcHJvamVjdHNfZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLW1hcmdpbi1ib3R0b20tcHJvamVjdHMpIC8gMik7XG59XG5cbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgNWZyO1xuICAtbW96LWNvbHVtbi1nYXA6IDFlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAxZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0cyk7XG59XG5cbi5wcm9qZWN0X2ltYWdlX2NvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5wcm9qZWN0X2ltYWdlX2NvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkOmhvdmVyIGltZyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43MSwgMC44MikgdHJhbnNsYXRlWSgtMyUpO1xufVxuXG4ucHJvamVjdF9kZXNjcmlwdGlvbiBoMiArIHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG59XG4ucHJvamVjdF9kZXNjcmlwdGlvbiBoMiArIHAgKyBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGhpcmQpO1xufVxuXG4uZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogdmFyKC0td2lkdGgtcHJvamVjdC1pbWFnZSk7XG59XG5cbi5wcm9qZWN0X2ZlYXR1cmVzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtZmVhdHVyZXMpO1xufVxuLnByb2plY3RfZmVhdHVyZXMgKyBhIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmtzKTtcbn1cblxuLm5hbWVfcHJvamVjdCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmQtZm9udCk7XG59XG5cbi5wcm9qZWN0X2ZlYXR1cmVzLFxuLm5hbWVfcHJvamVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uc19zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1vei1jb2x1bW4tZ2FwOiAyZW07XG4gICAgICAgY29sdW1uLWdhcDogMmVtO1xufVxuLmJ1dHRvbnNfc2VjdGlvbiBidXR0b24ge1xuICB3aWR0aDogNWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcGFuZWwpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYnV0dG9uLWJpZyk7XG59XG4uYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJ1dHRvbi1zbWFsbCk7XG59XG5cbi5hbGxfcHJvamVjdHNfZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsbF9wcm9qZWN0c19idXR0b24ge1xuICBwYWRkaW5nLWlubGluZTogMWVtO1xufVxuXG4uY3VycmVudCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXBhZ2UpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItY3VycmVudC1wYWdlKTtcbn1cblxuLm1haW5fYmxvY2tfd2lkdGgge1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbW1vbi13aWR0aCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlX2gxIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKTtcbn1cblxuLnRpdGxlX2gyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2Vjb25kKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaG9tZV9pbmZvcm1hdGlvbiB7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICB9XG4gIC5tYWluX2Jsb2NrX3dpZHRoIHtcbiAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY29tbW9uLXdpZHRoKSArIDIwdncpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuNyk7XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHJvdy1nYXA6IDVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0X2ZpZWxkIHtcbiAgICAtLWNvbW1vbi13aWR0aDogNTB2dztcbiAgfVxuICAucHJvamVjdF9maWVsZCBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDQpO1xuICB9XG4gIC5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBmb290ZXIge1xuICAgIC1tb3otY29sdW1uLWdhcDogNWVtO1xuICAgICAgICAgY29sdW1uLWdhcDogNWVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBoZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFlbTtcbiAgfVxuICBoZWFkZXIgLmhlYWRlcl9fcGFuZWwgYSB7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gIH1cbiAgLnByb2plY3RfZmllbGQge1xuICAgIC0tY29tbW9uLXdpZHRoOiA3MHZ3O1xuICB9XG4gIC5oYXJkLXNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICAuaGVhZGVyX19wYW5lbCB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG59XG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAuZm9vdGVyLXNvYzFhbC1pdGVtOmhvdmVyIHtcbiAgICBhbmltYXRpb246IGp1bXAgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSBpbmZpbml0ZTtcbiAgfVxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvY3NzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vc3JjL19jb25zdGFudHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2Jhc2ljJTIwc3RydWN0dXJlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX3Byb2plY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19jbGFzc2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDQyxrQ0FBQTtFQUNBLDREQUFBO0VBQ0Es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c0RBQUE7RVZra0JEO0VVOWpCRDtJQUNDLGtCQUFBO0VWZ2tCQTtFVTdqQkQ7SUFDQyx1QkFBQTtFVitqQkE7RVU3akJBO0lBQ0MsWUFBQTtFVitqQkQ7RVU3akJDO0lBQ0MsV0FBQTtFVitqQkY7QUFDRjtBVTFqQkE7RUFDQztJQUNDLG9CQUFBO1NBQUEsZUFBQTtJQUNBLG1CQUFBO0VWNGpCQTtBQUNGO0FVempCQTtFQUNDO0lBQ0MsdUJBQUE7RVYyakJBO0VVempCQTtJQUNDLG1CQUFBO0lBRUEsdUJBQUE7SUFDQSxRQUFBO0VWMGpCRDtFVXhqQkM7SUFDQyxjQUFBO0VWMGpCRjtFVXJqQkQ7SUFDQyxvQkFBQTtFVnVqQkE7RVVwakJEO0lBQ0MscUNBQUE7RVZzakJBO0VVbmpCRDtJQUNDLGVBQUE7RVZxakJBO0FBQ0Y7QVVqakJBO0VBQ0M7SUFDQyx3REFBQTtFVm1qQkE7QUFDRixDQUFBLG9DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9kaXN0L2Nzcy9zdHlsZS5jc3MnO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuY29uc3QgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyJyk7XG55ZWFyLnRleHRDb250ZW50ID0gYMKpICR7Y3VycmVudFllYXJ9IHwgRGVzaWduZWQgYW5kIGNvZGVkIGJ5IERtaXRyeWA7XG5cbi8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDRgdC60YDQvtC70LvQsdCw0YDQsFxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wYW5lbCcpO1xuY29uc3QgcmlnaHRJbmRlbnQgPVxuXHRnZXRDb21wdXRlZFN0eWxlKGh0bWwpLmdldFByb3BlcnR5VmFsdWUoJy0tc2Nyb2xsYmFyLXdpZHRoJyk7XG5jb25zdCBoYXNTY3JvbGxiYXIgPSBodG1sLmNsaWVudEhlaWdodCA8IGh0bWwuc2Nyb2xsSGVpZ2h0O1xuaWYgKCFoYXNTY3JvbGxiYXIpIHtcblx0cGFuZWwuc3R5bGUubWFyZ2luUmlnaHQgPSByaWdodEluZGVudDtcblx0Zm9vdGVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHJpZ2h0SW5kZW50O1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LfQsNC80LXQvdGLINGB0YLQsNGC0LjRh9C90L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDQsNC90LjQvNC40YDQvtCy0LDQvdC90L7QtSDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC60YPRgNGB0L7RgNCwXG5mdW5jdGlvbiBob3ZlcihzdW1Qcm9qZWN0cykge1xuXHRjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKTtcblx0Y29uc3QgcHJvamVjdEltYWdlID0gW1xuXHRcdC4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfaW1hZ2VfaW1nJyksXG5cdF07XG5cblx0Y29uc3Qgc3RhdGljSW1hZ2UgPSBbXTtcblx0Y29uc3QgYW5pbWF0ZWRJbWFnZSA9IFtdO1xuXHRjb25zdCBtb2JpbGVJbWFnZSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDw9IHN1bVByb2plY3RzOyBpKyspIHtcblx0XHRzdGF0aWNJbWFnZS5wdXNoKGAuL2ltZy9wcm9qZWN0X2ltYWdlcy8ke2l9LXN0YXRpYy5wbmdgKTtcblx0XHRhbmltYXRlZEltYWdlLnB1c2goYC4vaW1nL3Byb2plY3RfaW1hZ2VzLyR7aX0tYW5pbWF0ZWQuZ2lmYCk7XG5cdFx0bW9iaWxlSW1hZ2UucHVzaChgLi9pbWcvcHJvamVjdF9pbWFnZXMvJHtpfS1zdGF0aWMtbW9iaWxlLndlYnBgKTtcblx0fVxuXG5cdHByb2plY3RNYWluWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoYW5pbWF0ZWRJbWFnZSwgZS50YXJnZXQsIHByb2plY3RJbWFnZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRwcm9qZWN0TWFpblswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoc3RhdGljSW1hZ2UsIGUudGFyZ2V0LCBwcm9qZWN0SW1hZ2UpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNob29zZU1vZGUoYXJyYXksIHRhcmdldCwgZmllbGQpIHtcblx0aWYgKGZpZWxkLmluY2x1ZGVzKHRhcmdldCkpIHtcblx0XHRsZXQgaW5kZXggPSB0YXJnZXQuYWx0O1xuXHRcdGluZGV4ID0gaW5kZXhbaW5kZXgubGVuZ3RoIC0gMV0gLSAxO1xuXHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycmF5W2luZGV4XSk7XG5cdH1cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKS5sZW5ndGggPiAwKSB7XG5cdGhvdmVyKDQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9