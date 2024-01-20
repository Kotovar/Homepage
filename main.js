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
@media (max-height: 800px) and (orientation: landscape) {
  footer {
    -moz-column-gap: 5em;
         column-gap: 5em;
    flex-direction: row;
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
    margin-top: 0.5em;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFLQUEyRDtBQUN2Ryw0Q0FBNEMsaUpBQWlEO0FBQzdGLDRDQUE0Qyx5SUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEMsaWFBQWlhLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFFBQVEsVUFBVSxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLGlDQUFpQztBQUNqMUs7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNycUIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0ErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DLDJDQUEyQyxFQUFFO0FBQzdDLDZDQUE2QyxFQUFFO0FBQy9DLDJDQUEyQyxFQUFFO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL2Rpc3QvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9kaXN0L2Nzcy9zdHlsZS5jc3M/ZjE2ZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZm9udHMvUmVjdXJzaXZlX01vbm9zcGFjZS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2ZvbnRzL1dlbGxmbGVldC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL2ltZy9za2lsbHMvc29mdC1za2lsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJlY3Vyc2l2ZV9Nb25vc3BhY2VcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIldlbGxmbGVldC1SZWd1bGFyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbjpyb290IHtcbiAgLS1jb2xvci1oZWFkZXI6ICM3ZDc3Nzc7XG4gIC0tY29sb3ItbGlua3M6IHZhcigtLWNvbG9yLWhlYWRlcik7XG4gIC0tY29sb3ItbWFpbjogI2U3YmIyYjtcbiAgLS1jb2xvci1mb250LXBhbmVsOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvbnQtbWFpbjogIzIxMjEyMTtcbiAgLS1jb2xvci1mb250LWZlYXR1cmVzOiAjZjcyYjJiO1xuICAtLWNvbG9yLWhyOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICAtLWNvbG9yLWN1cnJlbnQtcGFnZTogI2UzYzE1NDtcbiAgLS1jb2xvci1ib3JkZXItYXZhdGFyOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICAtLWhlaWdodC1yaWdodC1wYW5lbDogMzV2aDtcbiAgLS1mb250LXNpemUtcGFuZWw6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAvIDgpO1xuICAtLWZvbnQtc2l6ZS1ncmVldGluZ3M6IGNsYW1wKDI0cHgsIDV2dywgNDBweCk7XG4gIC0tZm9udC1zaXplLXNlY29uZDogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDAuOCk7XG4gIC0tZm9udC1zaXplLXRoaXJkOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMC41KTtcbiAgLS1mb250LXNpemUtZGVzY3JpcHRpb246IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAwLjYpO1xuICAtLWZvbnQtc2l6ZS1uYW1lOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMi40KTtcbiAgLS1mb290ZXItaGVpZ2h0OiAxMHZoO1xuICAtLXNjcm9sbGJhci13aWR0aDogMTBweDtcbiAgLS1oZWlnaHQtaHI6IDJweDtcbiAgLS1jb21tb24td2lkdGg6IDUwdnc7XG4gIC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0czogNGVtO1xuICAtLXdpZHRoLXByb2plY3QtaW1hZ2U6IDYwMHB4O1xuICAtLXBhZGRpbmctcGFuZWw6IGNhbGMoMXZ3ICsgMTBweCk7XG4gIC0tc2hhZG93LW1haW46IDVweCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjcpO1xuICAtLXNoYWRvdy1idXR0b24tYmlnOiAwcHggMTBweCAxMHB4IHJnYigwIDAgMCAvIDAuNyk7XG4gIC0tc2hhZG93LWJ1dHRvbi1zbWFsbDogMHB4IDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNCk7XG4gIC0tc2hhZG93LWZvb3RlcjogNXB4IDVweCAyMHB4IHJnYigwIDAgMCAvIDAuNyk7XG4gIC0tYm9yZGVyLWF2YXRhcjogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItYXZhdGFyKTtcbiAgLS10cmFuc2l0aW9uOiAwLjJzO1xuICAtLXNjYWxlOiBzY2FsZSgxLjEpO1xuICAtLW1haW4tZm9udDogV2VsbGZsZWV0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gIC0tc2Vjb25kLWZvbnQ6IFwiUmVjdXJzaXZlX01vbm9zcGFjZVwiLCBtb25vc3BhY2U7XG59XG5cbi8qKlxuICDQndC+0YDQvNCw0LvQuNC30LDRhtC40Y8g0LHQu9C+0YfQvdC+0Lkg0LzQvtC00LXQu9C4XG4gKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdGD0YLRgNC10L3QvdC40LUg0L7RgtGB0YLRg9C/0Ysg0YHQu9C10LLQsCDRgtC10LPQsNC8INGB0L/QuNGB0LrQvtCyLFxuICAg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbjp3aGVyZSh1bCwgb2wpOndoZXJlKFtjbGFzc10pIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLIGJvZHkg0Lgg0LTQstGD0Lwg0LTRgNGD0LPQuNC8INGC0LXQs9Cw0LwsXG4gICDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuYm9keSxcbjp3aGVyZShibG9ja3F1b3RlLCBmaWd1cmUpOndoZXJlKFtjbGFzc10pIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLINCy0LXRgNGC0LjQutCw0LvQuCDQvdGD0LbQvdGL0Lwg0YLQtdCz0LDQvCxcbiAgINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG46d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdWwsIG9sLCBkbCk6d2hlcmUoW2NsYXNzXSkge1xuICBtYXJnaW4tYmxvY2s6IDA7XG59XG5cbjp3aGVyZShkZFtjbGFzc10pIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvNCw0YDQutC10YAg0LzQsNGA0LrQuNGA0L7QstCw0L3QvdC+0LzRgyDRgdC/0LjRgdC60YMsXG4gICDRgyDQutC+0YLQvtGA0L7Qs9C+INC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG46d2hlcmUodWxbY2xhc3NdKSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qKlxuICAg0KPQv9GA0L7RidCw0LXQvCDRgNCw0LHQvtGC0YMg0YEg0LjQt9C+0LHRgNCw0LbQtdC90LjRj9C80LhcbiAgKi9cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qKlxuICAg0J3QsNGB0LvQtdC00YPQtdC8INGB0LLQvtC50YHRgtCy0LAg0YjRgNC40YTRgiDQtNC70Y8g0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICovXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuYnV0dG9uIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIC8qKlxuICAgICAg0J/RgNC40LPQvtC00LjRgtGB0Y8g0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC40YLRg9Cw0YbQuNC5XG4gICAgICAo0LrQvtCz0LTQsCwg0L3QsNC/0YDQuNC80LXRgCwg0L3Rg9C20L3QviDQsdGD0LTQtdGCIFwi0L/RgNC40LbQsNGC0YxcIiDRhNGD0YLQtdGAINC6INC90LjQt9GDINGB0LDQudGC0LApXG4gICAgICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyoqXG4gICAgICDQn9C70LDQstC90YvQuSDRgdC60YDQvtC70LtcbiAgICAgKi9cbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAvKipcbiAgICAgINCf0YDQuNCz0L7QtNC40YLRgdGPINCyINCx0L7Qu9GM0YjQuNC90YHRgtCy0LUg0YHQuNGC0YPQsNGG0LjQuVxuICAgICAgKNC60L7Qs9C00LAsINC90LDQv9GA0LjQvNC10YAsINC90YPQttC90L4g0LHRg9C00LXRgiBcItC/0YDQuNC20LDRgtGMXCIg0YTRg9GC0LXRgCDQuiDQvdC40LfRgyDRgdCw0LnRgtCwKVxuICAgICAqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICAvKipcbiAgICAgINCj0L3QuNGE0LjRhtC40YDQvtCy0LDQvdC90YvQuSDQuNC90YLQtdGA0LvQuNC90YzRj9C2XG4gICAgICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qKlxuICAg0J/RgNC40LLQvtC00LjQvCDQuiDQtdC00LjQvdC+0LzRgyDRhtCy0LXRgtGDIHN2Zy3RjdC70LXQvNC10L3RgtGLXG4gICovXG5zdmcgKltmaWxsXSB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuc3ZnICpbc3Ryb2tlXSB7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xufVxuXG4vKipcbiAgINCn0LjQvdC40Lwg0LHQsNCzINC30LDQtNC10YDQttC60Lgg0YHQvNC10L3RiyDRhtCy0LXRgtCwINC/0YDQuCDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC4INGBIHN2Zy3RjdC70LXQvNC10L3RgtCw0LzQuFxuICAqL1xuc3ZnICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmaWxsLCBzdHJva2U7XG59XG5cbi8qKlxuICAg0KPQtNCw0LvRj9C10Lwg0LLRgdC1INCw0L3QuNC80LDRhtC40Lgg0Lgg0L/QtdGA0LXRhdC+0LTRiyDQtNC70Y8g0LvRjtC00LXQuSxcbiAgINC60L7RgtC+0YDRi9C1INC/0YDQtdC00L/QvtGH0LjRgtCw0Y7RgiDQuNGFINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMXG4gICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuKiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY29sb3ItbWFpbikgOTAlLCB2YXIoLS1jb2xvci1oZWFkZXIpIDkwJSk7XG59XG5cbmJvZHkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpO1xuICB6LWluZGV4OiAxMDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tc2hhZG93LW1haW4pKTtcbn1cbmhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMjkuOTc5MjQ2MTc5JSk7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDI5Ljk3OTI0NjE3OSUpO1xufVxuaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodC1yaWdodC1wYW5lbCkgKiAwLjkpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1wYW5lbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGEge1xuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93LW1haW4pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXBhbmVsKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcGFuZWwpO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uaGVhZGVyX19wYW5lbCBhOm5vdCguY3VycmVudCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHZhcigtLXNjYWxlKTtcbn1cblxubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xufVxubWFpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5mb290ZXIge1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9vdGVyKTtcbiAgei1pbmRleDogMTtcbiAgcm93LWdhcDogMC41ZW07XG59XG5cbi5saW5rc19zb2MxYWwgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbW96LWNvbHVtbi1nYXA6IDFyZW07XG4gICAgICAgY29sdW1uLWdhcDogMXJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5mb290ZXItc29jMWFsLWl0ZW0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb290ZXItc29jMWFsLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG59XG5cbkBrZXlmcmFtZXMgY3Vyc29yIHtcbiAgMCUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgfVxuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGN1cnNvcl9vZmYge1xuICBmcm9tIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIH1cbiAgdG8ge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGV4dF9hcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRvIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcmludGVkX3RleHQge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMganVtcCB7XG4gIDAlIHtcbiAgICB0b3A6IDBweDtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogLTVweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLmF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNSUgODUlIDIwJSA4MCUvODUlIDIwJSA4MCUgMTUlO1xuICBib3JkZXI6IHZhcigtLWJvcmRlci1hdmF0YXIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmF2YXRhciBpbWc6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA4NSUgMTUlIDg1JSAxNSUvMTUlIDg1JSAxNSUgODUlO1xufVxuXG4uZ3JlZXRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYW5pbWF0aW9uLXN0ZXBzOiAxMDtcbiAgLS1hbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAtLWJvcmRlci13aWR0aDogMC4wN2VtO1xuICAtLWFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pICsgMC4ycyk7XG59XG4uZ3JlZXRpbmcgZGl2IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmQtZm9udCk7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmdyZWV0aW5nID4gcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHRleHRfYXBwZWFyYW5jZSBjYWxjKHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgLyAxLjUpIGxpbmVhciA1LjJzIGZvcndhcmRzO1xufVxuXG4uY29udGFpbmVyX2FuaW1hdGlvbl9maXJzdCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKTtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIGFuaW1hdGlvbjogY3Vyc29yIDAuNzVzIHN0ZXAtZW5kLCBwcmludGVkX3RleHQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSBzdGVwcyh2YXIoLS1hbmltYXRpb24tc3RlcHMpKSwgY3Vyc29yX29mZiAwLjJzIGxpbmVhciB2YXIoLS1hbmltYXRpb24tZGVsYXkpIGZvcndhcmRzO1xufVxuXG4uY29udGFpbmVyX2FuaW1hdGlvbl9maXJzdCxcbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0IHAsXG4uY29udGFpbmVyX2FuaW1hdGlvbl9zZWNvbmQgcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCB7XG4gIC0tYW5pbWF0aW9uLXN0ZXBzOiA2O1xuICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcbn1cbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCBwIHtcbiAgd2lkdGg6IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hbWUpO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogY3Vyc29yIDAuNzVzIHN0ZXAtZW5kIHZhcigtLWFuaW1hdGlvbi1kZWxheSkgaW5maW5pdGUsIHByaW50ZWRfdGV4dCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIHZhcigtLWFuaW1hdGlvbi1kZWxheSkgc3RlcHModmFyKC0tYW5pbWF0aW9uLXN0ZXBzKSkgZm9yd2FyZHM7XG59XG5cbi5hYm91dCB7XG4gIC0tcm93LWdhcDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHJvdy1nYXA6IHZhcigtLXJvdy1nYXApO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1yb3ctZ2FwKSAqIDIpO1xufVxuLmFib3V0IHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG59XG4uYWJvdXQgcCBhIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmtzKTtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhyKTtcbiAgd2lkdGg6IHZhcigtLWNvbW1vbi13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0LWhyKTtcbn1cblxuLmhhcmQtc2tpbGxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmhhcmQtc2tpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAwLjVyZW07XG59XG4uaGFyZC1za2lsbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwZW07XG4gIHdpZHRoOiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tc2hhZG93LW1haW4pKTtcbn1cbi5oYXJkLXNraWxsIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xufVxuXG4uc29mdF9za2lsbHMge1xuICAtLXNwYWNlX3BzZXVkb19pbmxpbmU6IC0xLjVlbTtcbn1cbi5zb2Z0X3NraWxscyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDFlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnNvZnRfc2tpbGxzIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zb2Z0X3NraWxscyBsaTo6YmVmb3JlLFxuLnNvZnRfc2tpbGxzIGxpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4yNWVtO1xufVxuLnNvZnRfc2tpbGxzIGxpOjphZnRlciB7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZV9wc2V1ZG9faW5saW5lKTtcbn1cbi5zb2Z0X3NraWxscyBsaTo6YmVmb3JlIHtcbiAgbGVmdDogdmFyKC0tc3BhY2VfcHNldWRvX2lubGluZSk7XG59XG5cbi5wcm9qZWN0X2ZpZWxkIHtcbiAgLS1jb21tb24td2lkdGg6IDcwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9qZWN0X2ZpZWxkIGgxLFxuLnByb2plY3RfZmllbGQgLmFsbF9wcm9qZWN0c19maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0cykgLyAyKTtcbn1cblxuLnByb2plY3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciA1ZnI7XG4gIC1tb3otY29sdW1uLWdhcDogMWVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDFlbTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKTtcbn1cblxuLnByb2plY3RfaW1hZ2VfY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnByb2plY3RfaW1hZ2VfY29udGFpbmVyID4gZGl2Omxhc3QtY2hpbGQ6aG92ZXIgaW1nIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5wcm9qZWN0X2ltYWdlX2NvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcxLCAwLjgyKSB0cmFuc2xhdGVZKC0zJSk7XG59XG5cbi5wcm9qZWN0X2Rlc2NyaXB0aW9uIGgyICsgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbn1cbi5wcm9qZWN0X2Rlc2NyaXB0aW9uIGgyICsgcCArIHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10aGlyZCk7XG59XG5cbi5mcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiB2YXIoLS13aWR0aC1wcm9qZWN0LWltYWdlKTtcbn1cblxuLnByb2plY3RfZmVhdHVyZXMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1mZWF0dXJlcyk7XG59XG4ucHJvamVjdF9mZWF0dXJlcyArIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlua3MpO1xufVxuXG4ubmFtZV9wcm9qZWN0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZC1mb250KTtcbn1cblxuLnByb2plY3RfZmVhdHVyZXMsXG4ubmFtZV9wcm9qZWN0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b25zX3NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbW96LWNvbHVtbi1nYXA6IDJlbTtcbiAgICAgICBjb2x1bW4tZ2FwOiAyZW07XG59XG4uYnV0dG9uc19zZWN0aW9uIGJ1dHRvbiB7XG4gIHdpZHRoOiA1ZW07XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1idXR0b24tYmlnKTtcbn1cbi5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYnV0dG9uLXNtYWxsKTtcbn1cblxuLmFsbF9wcm9qZWN0c19maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxsX3Byb2plY3RzX2J1dHRvbiB7XG4gIHBhZGRpbmctaW5saW5lOiAxZW07XG59XG5cbi5jdXJyZW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtcGFnZSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1jdXJyZW50LXBhZ2UpO1xufVxuXG4ubWFpbl9ibG9ja193aWR0aCB7XG4gIG1heC13aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfaDEge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xufVxuXG4udGl0bGVfaDIge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zZWNvbmQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lX2luZm9ybWF0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDcwdnc7XG4gIH1cbiAgLm1haW5fYmxvY2tfd2lkdGgge1xuICAgIG1heC13aWR0aDogY2FsYyh2YXIoLS1jb21tb24td2lkdGgpICsgMjB2dyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyNXZoO1xuICAgIC0tZm9udC1zaXplLXBhbmVsOiAyZW07XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuNyk7XG4gIH1cbiAgLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHJvdy1nYXA6IDVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0X2ZpZWxkIHtcbiAgICAtLWNvbW1vbi13aWR0aDogNTB2dztcbiAgfVxuICAucHJvamVjdF9maWVsZCBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDQpO1xuICB9XG4gIC5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmJ1dHRvbnNfc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBmb290ZXIge1xuICAgIC1tb3otY29sdW1uLWdhcDogNWVtO1xuICAgICAgICAgY29sdW1uLWdhcDogNWVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBoZWFkZXIge1xuICAgIC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFlbTtcbiAgfVxuICBoZWFkZXIgLmhlYWRlcl9fcGFuZWwgYSB7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gIH1cbiAgLnByb2plY3RfZmllbGQge1xuICAgIC0tY29tbW9uLXdpZHRoOiA3MHZ3O1xuICB9XG4gIC5oYXJkLXNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICAuaGVhZGVyX19wYW5lbCB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIC5mb290ZXItc29jMWFsLWl0ZW06aG92ZXIge1xuICAgIGFuaW1hdGlvbjoganVtcCAwLjhzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpIGluZmluaXRlO1xuICB9XG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2NvbnN0YW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fYmFzaWMlMjBzdHJ1Y3R1cmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fcHJvamVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2NsYXNzZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19tZWRpYS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNDLGtDQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURDRDtBQ0VBO0VBQ0MsZ0NBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREFEO0FDR0E7RUFHQyx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7RUFHQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0EsNkNBQUE7RUFDQSwwREFBQTtFQUNBLHlEQUFBO0VBQ0EsK0RBQUE7RUFDQSx3REFBQTtFQUVBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUdBLGlDQUFBO0VBR0EsNENBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsOENBQUE7RUFHQSxzREFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSwwQ0FBQTtFQUNBLCtDQUFBO0FEaEJEOztBRWhEQTs7RUFBQTtBQUdBOzs7RUFHQyxzQkFBQTtBRm1ERDs7QUVoREE7OztHQUFBO0FBSUE7RUFDQyxlQUFBO0FGbUREOztBRWhEQTs7O0dBQUE7QUFJQTs7RUFFQyxTQUFBO0FGbUREOztBRWhEQTs7O0dBQUE7QUFJQTtFQUNDLGVBQUE7QUZtREQ7O0FFaERBO0VBQ0MsY0FBQTtBRm1ERDs7QUVoREE7OztHQUFBO0FBSUE7RUFDQyxnQkFBQTtBRm1ERDs7QUVoREE7O0dBQUE7QUFHQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FGbUREOztBRWhEQTs7R0FBQTtBQUdB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O0VBQ0M7SUFDQyxlQUFBO0VWdWtCQTtFVXBrQkQ7SUFDQywyQ0FBQTtFVnNrQkE7QUFDRjtBVW5rQkE7RUFDQztJQUNDLDBCQUFBO0lBQ0Esc0JBQUE7RVZxa0JBO0VVbmtCQTtJQUNDLDZDQUFBO0VWcWtCRDtFVWprQkQ7SUFDQyxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RVZta0JBO0VVaGtCRDtJQUNDLG9CQUFBO0VWa2tCQTtFVWprQkE7SUFDQyxzREFBQTtFVm1rQkQ7RVUvakJEO0lBQ0Msa0JBQUE7RVZpa0JBO0VVOWpCRDtJQUNDLHVCQUFBO0VWZ2tCQTtFVTlqQkE7SUFDQyxZQUFBO0VWZ2tCRDtFVTlqQkM7SUFDQyxXQUFBO0VWZ2tCRjtBQUNGO0FVM2pCQTtFQUNDO0lBQ0Msb0JBQUE7U0FBQSxlQUFBO0lBQ0EsbUJBQUE7RVY2akJBO0FBQ0Y7QVUxakJBO0VBQ0M7SUFDQywwQkFBQTtJQUdBLHVCQUFBO0VWMGpCQTtFVXhqQkE7SUFDQyxtQkFBQTtJQUVBLHVCQUFBO0lBQ0EsUUFBQTtFVnlqQkQ7RVV2akJDO0lBQ0MsY0FBQTtFVnlqQkY7RVVwakJEO0lBQ0Msb0JBQUE7RVZzakJBO0VVbmpCRDtJQUNDLHFDQUFBO0VWcWpCQTtFVWxqQkQ7SUFDQyxpQkFBQTtFVm9qQkE7QUFDRjtBVWhqQkE7RUFDQztJQUNDLHdEQUFBO0VWa2pCQTtBQUNGLENBQUEsb0NBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Rpc3QvY3NzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5jb25zdCB5ZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXInKTtcbnllYXIudGV4dENvbnRlbnQgPSBgwqkgJHtjdXJyZW50WWVhcn0gfCBEZXNpZ25lZCBhbmQgY29kZWQgYnkgRG1pdHJ5YDtcblxuLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INGB0LrRgNC+0LvQu9Cx0LDRgNCwXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5jb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3BhbmVsJyk7XG5jb25zdCByaWdodEluZGVudCA9XG5cdGdldENvbXB1dGVkU3R5bGUoaHRtbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zY3JvbGxiYXItd2lkdGgnKTtcbmNvbnN0IGhhc1Njcm9sbGJhciA9IGh0bWwuY2xpZW50SGVpZ2h0IDwgaHRtbC5zY3JvbGxIZWlnaHQ7XG5pZiAoIWhhc1Njcm9sbGJhcikge1xuXHRwYW5lbC5zdHlsZS5tYXJnaW5SaWdodCA9IHJpZ2h0SW5kZW50O1xuXHRmb290ZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcmlnaHRJbmRlbnQ7XG59XG5cbi8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQt9Cw0LzQtdC90Ysg0YHRgtCw0YLQuNGH0L3QvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQvdCwINCw0L3QuNC80LjRgNC+0LLQsNC90L3QvtC1INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0LrRg9GA0YHQvtGA0LBcbmZ1bmN0aW9uIGhvdmVyKHN1bVByb2plY3RzKSB7XG5cdGNvbnN0IHByb2plY3RNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9maWVsZCcpO1xuXHRjb25zdCBwcm9qZWN0SW1hZ2UgPSBbXG5cdFx0Li4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9pbWFnZV9pbWcnKSxcblx0XTtcblxuXHRjb25zdCBzdGF0aWNJbWFnZSA9IFtdO1xuXHRjb25zdCBhbmltYXRlZEltYWdlID0gW107XG5cdGNvbnN0IG1vYmlsZUltYWdlID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gc3VtUHJvamVjdHM7IGkrKykge1xuXHRcdHN0YXRpY0ltYWdlLnB1c2goYC4vaW1nL3Byb2plY3RfaW1hZ2VzLyR7aX0tc3RhdGljLnBuZ2ApO1xuXHRcdGFuaW1hdGVkSW1hZ2UucHVzaChgLi9pbWcvcHJvamVjdF9pbWFnZXMvJHtpfS1hbmltYXRlZC5naWZgKTtcblx0XHRtb2JpbGVJbWFnZS5wdXNoKGAuL2ltZy9wcm9qZWN0X2ltYWdlcy8ke2l9LXN0YXRpYy1tb2JpbGUud2VicGApO1xuXHR9XG5cblx0cHJvamVjdE1haW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcblx0XHRpZiAocHJvamVjdEltYWdlLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuXHRcdFx0Y2hvb3NlTW9kZShhbmltYXRlZEltYWdlLCBlLnRhcmdldCwgcHJvamVjdEltYWdlKTtcblx0XHR9XG5cdH0pO1xuXG5cdHByb2plY3RNYWluWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcblx0XHRpZiAocHJvamVjdEltYWdlLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuXHRcdFx0Y2hvb3NlTW9kZShzdGF0aWNJbWFnZSwgZS50YXJnZXQsIHByb2plY3RJbWFnZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2hvb3NlTW9kZShhcnJheSwgdGFyZ2V0LCBmaWVsZCkge1xuXHRpZiAoZmllbGQuaW5jbHVkZXModGFyZ2V0KSkge1xuXHRcdGxldCBpbmRleCA9IHRhcmdldC5hbHQ7XG5cdFx0aW5kZXggPSBpbmRleFtpbmRleC5sZW5ndGggLSAxXSAtIDE7XG5cdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyYXlbaW5kZXhdKTtcblx0fVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdF9maWVsZCcpLmxlbmd0aCA+IDApIHtcblx0aG92ZXIoNCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=