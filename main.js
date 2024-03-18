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
	font-family: 'Recursive_Monospace';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: 'Wellfleet-Regular';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
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
	--second-font: 'Recursive_Monospace', monospace;
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
	background: linear-gradient(
		180deg,
		var(--color-main) 95%,
		var(--color-header) 95%
	);
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
	content: '';
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
	content: '';
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
	animation: text_appearance calc(var(--animation-duration) / 1.5) linear 5.2s
		forwards;
}

.container_animation_first p {
	font-size: var(--font-size-greetings);
	border-right: var(--border-width) solid var(--color-font-main);
	animation:
		cursor 0.75s step-end,
		printed_text var(--animation-duration) steps(var(--animation-steps)),
		cursor_off 0.2s linear var(--animation-delay) forwards;
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
	animation:
		cursor 0.75s step-end var(--animation-delay) infinite,
		printed_text var(--animation-duration) var(--animation-delay)
			steps(var(--animation-steps)) forwards;
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
	content: '';
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
} /*# sourceMappingURL=style.css.map */
`, "",{"version":3,"sources":["webpack://./dist/css/style.css","webpack://./src/_constants.scss","webpack://./src/_reset.scss","webpack://./src/_basic%20structure.scss","webpack://./src/_mixins.scss","webpack://./src/_animations.scss","webpack://./src/_main.scss","webpack://./src/_about.scss","webpack://./src/_project.scss","webpack://./src/_classes.scss","webpack://./src/_media.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;CDCC,kCCAA;CDCA,4DCAA;CDCA,gBCAA;CDCA,kBCAA;CDCA,kBCAA;ADCD;ACEA;CDAC,gCCCA;CDAA,4DCCA;CDAA,gBCCA;CDAA,kBCCA;CDAA,kBCCA;ADAD;ACGA;CDDC,uBCIA;CDHA,kCCIA;CDHA,qBCIA;CDHA,2BCIA;CDHA,0BCIA;CDHA,8BCIA;CDHA,kCCIA;CDHA,6BCIA;CDHA,0CCIA;CDHA,0BCMA;CDLA,sDCMA;CDLA,6CCMA;CDLA,0DCMA;CDLA,yDCMA;CDLA,+DCMA;CDLA,wDCMA;CDLA,iCCMA;CDLA,oBCOA;CDNA,uBCOA;CDNA,gBCOA;CDNA,oBCOA;CDNA,6BCOA;CDNA,4BCOA;CDNA,iCCSA;CDRA,4CCWA;CDVA,mDCWA;CDVA,oDCWA;CDVA,8CCWA;CDVA,sDCaA;CDZA,kBCeA;CDdA,mBCeA;CDdA,0CCiBA;CDhBA,+CCiBA;ADhBD;;AEjDA;;EAAA;AAGA;;;CFsDC,sBEnDA;AFoDD;;AEjDA;;;GAAA;AAIA;CFoDC,eEnDA;AFoDD;;AEjDA;;;GAAA;AAIA;;CFqDC,SEnDA;AFoDD;;AEjDA;;;GAAA;AAIA;CFoDC,eEnDA;AFoDD;;AEjDA;CFoDC,cEnDA;AFoDD;;AEjDA;;;GAAA;AAIA;CFoDC,gBEnDA;AFoDD;;AEjDA;;GAAA;AAGA;CFoDC,cEnDA;CFoDA,eEnDA;AFoDD;;AEjDA;;GAAA;AAGA;;;;CFuDC,aEnDA;AFoDD;;AEjDA;CFoDC;;;MEnDA;CFuDA,YEnDA;CFoDA;;MEnDA;CFsDA,uBEnDA;AFoDD;;AEjDA;CFoDC;;;MEnDA;CFuDA,gBEnDA;CFoDA;;MEnDA;CFsDA,gBEnDA;AFoDD;;AEjDA;;GAAA;AAGA;CFoDC,kBEnDA;AFoDD;;AElDA;CFqDC,oBEpDA;AFqDD;;AElDA;;GAAA;AAGA;CFqDC,iCEpDA;AFqDD;;AElDA;;;GAAA;AAIA;CFqDC;EACC,qCEpDA;EFqDA,uCEpDA;EFqDA,sCEpDA;EFqDA,gCEpDA;CFqDD;AACD;AEjDA;CFmDC,yBElDA;CFmDA,sBEjDA;CFkDA,iBElDA;AFmDD;;AG5KA;CH+KC,6BG9KA;AH+KD;;AG5KA;CH+KC,qCG9KA;AH+KD;;AG5KA;CH+KC,6BG9KA;CH+KA;;;;EGtKA;AH2KD;;AAEA;CACC,yBG3KA;CH2KD,sBAAA;CAEC,iBAAiB;CGzKlB,cAAA;CH2KC,6BG1KA;AH2KD;;AAEA;CACC,kBGzKA;CH0KA,aGzKA;CHyKD,iCAAA;CGvKC,YAAA;CH0KA,yBGzKC;CH0KD,uCGzKC;AH0KF;AACA;CACC,WGzKC;CH0KD,kBInMA;CJoMA,WIpMA;CJmMD,QAAA;CGtKC,qCAAA;CH0KA,oEGzKC;CH0KD,4DGzKC;AH0KF;AACA;CACC,6CGzKC;CH0KD,oCGzKC;CHwKF,aAAA;CGrKC,sBAAA;CHyKA,6BGxKC;CHyKD,mBGxKC;AHyKF;AACA;CACC,+BGxKC;CHyKD,qBGxKC;CHuKF,8BAAA;CAGC,iCAAiC;CGtKlC,6BAAA;CHwKC,uCGvKA;AHsKD;;AGlKA;CHuKC,uBGtKA;AHuKD;;AAAA;CGnKC,mCAAA;CHuKA,oCGtKC;CHuKD,6BGtKC;AHuKF;AACA;CACC,WGtKC;CHqKF,kBAAA;CAGC,QAAQ;CGnKT,YAAA;CHqKC,yBGpKA;AHqKD;;AAEA;CACC,6BGpKA;CHqKA,4BGpKA;CHqKA,WGpKA;CHqKA,aGpKA;CHqKA,eGpKA;CHqKA,SGpKA;CHqKA,qCGpKA;CHqKA,8BGpKA;CHqKA,mBGpKA;CHqKA,uBGrKA;CHmKD,gCAAA;CAIC,UAAU;CGnKV,sBAAA;CHqKA,iBGpKC;AHqKF;;AAEA;CACC,aGrKC;CHkKF,qBAAA;CAKC,gBAAgB;CGnKjB,SAAA;CHqKC,eAAe;AAChB;;AAEA;;CAEC,kCGpKA;AHqKD;;AAFA;CAKC,qBAAqB;CGnKtB,kBAAA;CHqKC,cGpKA;AHqKD;;AAFA;CAKC,aAAa;CKhSd,UAAA;CLkSC,8BKjSA;ALkSD;;AAEA;CACC;EAHC,oCAAA;CAKD;CACA;EAHC,yBAAA;CACF;CKzRA;EACC,oCAAA;CL+RA;AACD;AACA;CACC;EAHC,oCAAA;CACF;CKvRA;EACC,yBAAA;CL6RA;AACD;AACA;CACC;EAHC,kBAAA;CACF;CKrRA;EACC,6BAAA;CL2RA;AACD;AACA;CACC;EAHC,QAAA;CACF;CKnRA;EACC,WAAA;CLyRA;AACD;AACA;CACC;EAHC,QAAA;CAKD;CACA;EAHC,SAAA;CACF;CM1UA;EACC,QAAA;CNgVA;AACD;AAHA;CM1UC,kBAAA;CNgVA,YM/UC;CNgVD,mBM/UC;ANgVF;AAHA;CAKC,8CAA8C;CM7U/C,4BAAA;CN+UC,oBM9UA;AN2UD;;AMxUA;CN+UC,8CM9UA;AN+UD;;AAEA;CACC,kBM9UA;CN2UD,qBAAA;CMzUC,wBAAA;CN+UA,sBM9UC;CN+UD,yDM9UC;AN+UF;AAHA;CMxUC,SAAA;CN8UA,+BM7UC;CN8UD,uBM7UC;AN8UF;AAHA;CAKC,uCAAuC;CM1UxC,kBAAA;CN4UC;UM1UA;AN4UD;;AAEA;CMtUA,qCAAA;CNwUC,8DAA8D;CAC9D;;;wDAGuD;AACxD;;AAFA;;CMjUA,qBAAA;ANwUA;AACA;;CMrUC,gBAAA;CNwUA,mBMvUC;ANwUF;;AAEA;CACC,oBMtUC;CNmUF,0BAAA;AAKA;AO3YA;CP6YC,QO5YA;CP6YA,gCO3YA;CP4YA,gBO3YA;CP4YA,mDO3YA;CP4YA;;;yCADD;AOtYC;;APyYD;COtYE,cAAA;CP4YD,kBO3YE;CPwYH,aAAA;CAKC,uBAAuB;COxYxB,sBAAA;CP0YC,mBOzYA;CP0YA,wCOzYA;AP0YD;AACA;CAHA,uCAAA;AAKA;AOxYA;CP0YC,yBOzYA;AP0YD;;AAEA;COxYA,YAAA;CP0YC,iCOzYA;CP0YA,0BOzYA;CP0YA,wBOzYA;AP0YD;;AOvYC;CP0YA,aOzYC;CP0YD,qCOzYC;AP0YF;;AAEA;CACC,aO1YC;CPsYF,sBAAA;COnYC,mBAAA;CP0YA,eOzYC;APqYF;AAMA;COvYA,eAAA;CPyYC,WOxYA;CPoYD,sBAAA;COlYC,mBAAA;CPyYA,uCOxYC;CPyYD,uCOxYC;APyYF;AACA;CACC,uBOxYC;APyYF;;AOrYC;CPwYA,6BOvYC;APwYF;AACA;CAJA,aAAA;COhYC,sBAAA;CPuYA,mBAAmB;CACnB,YOtYC;CPuYD,UOtYC;CPuYD,SOtYC;APuYF;AACA;CACC,qBOtYC;CPuYD,uCOtYC;CPuYD,kBOtYC;APkYF;AO/XC;;CPkYD,WAAA;CO9XC,qBAAA;CPqYA,UOpYC;CPgYF,WAAA;CAMC,yDAAmD;CQzdpD,wBAAA;CR2dC,kBQ1dA;CR2dA,WQzdA;ARqdD;AQndC;CR0dA,iCAAiC;AAClC;AAJA;CAMC,gCAAgC;AQvdjC;;AR0dA;CACC,oBQxdA;CRydA,kBQzdA;AR0dD;AACA;;CAEC,sDAAsD;AQtdrD;;ARmdF;CQhdG,aAAA;CRwdF,8BQvdG;CRkdJ,oBAAA;CQ9cE,eAAA;CRsdD,qBQrdE;CRsdF,4CQrdE;ARgdH;;AQ3cA;CRodC,gBQndA;AR8cD;AQ5cC;CRodA,mBQndC;AR8cF;AAOA;CQjdA,kBAAA;CRmdC,4CQldA;ARmdD;;AAEA;CQhdA,uCAAA;ARkdA;AALA;CQ1cC,iCAAA;ARkdD;;AAEA;CQ/cA,kBAAA;CRidC,qCQhdA;AR2cD;;AQxcA;CRidC,iCAAiC;AAClC;AALA;CAOC,yBAAyB;AQ9c1B;;ARidA;CACC,+BQhdA;AR0cD;;AASA;;CAEC,iBAAiB;AQ9clB;;ARidA;CACC,aQ/cA;CRgdA,oBQ/cA;CRgdA,eQ/cA;ARgdD;AACA;CANA,UAAA;AQvcC;;ARidD;CANA,mBAAA;CQtcC,8BAAA;CR+cA,6BQ9cC;CR+cD,6BQ9cC;CRwcF,uCAAA;CAQC,aAAa;CQ5cd,iCAAA;AR8cA;AACA;CANA,2BAAA;CAQC,oCAAoC;AQ5crC;AR8cA;CANA,2BAAA;CAQC,sCAAsC;ASxjBvC;;AT2jBA;CANA,aAAA;CAQC,uBAAuB;ASxjBxB;;AT2jBA;CACC,mBSzjBA;ATmjBD;;AShjBA;CT0jBC,gCSzjBA;CTmjBD,kDAAA;AAQA;;AAEA;CANA,8BAAA;CAQC,WAAW;CSxjBZ,cAAA;AT0jBA;;AAEA;CU/kBA,kBAAA;AVilBA;;AAEA;CACC,qCU/kBA;AVglBD;;AALA;CUtkBA,kCAAA;AV+kBA;;AAEA;CACC;EU7kBC,eAAA;CV+kBD;CACA;EU3kBA,2CAAA;CV6kBA;AACD;AACA;CACC;EANC,0BAAA;EUnkBD,sBAAA;CV4kBA;CACA;EU3kBC,6CAAA;CV6kBD;CACA;EUzkBA,aAAA;EV2kBC,8BU1kBA;EVokBA,YAAA;EUjkBD,mBAAA;CV0kBA;CACA;EUxkBC,oBAAA;CV0kBD;CACA;EUxkBE,sDAAA;CV0kBF;CACA;EAND,kBAAA;CU9jBA;CVukBC;EACC,uBUtkBA;CVukBD;CACA;EUrkBC,YAAA;CVukBD;CACA;EACC,WUrkBC;CVskBF;AACD;AACA;CACC;EAPC,0BAAA;EU1jBD,uBAAA;CVokBA;CACA;EUjkBA,mBAAA;EVmkBC,uBUlkBA;EV2jBA,oBAAA;EACF,eAAA;CUvjBA;CVikBC;EACC,cUhkBA;CVikBD;CAPD;EASE,oBAAoB;CACrB;CACA;EACC,qCAAqC;CACtC;CACA;EACC,wBAAwB;CACzB;AACD;AACA;CACC;EACC,wDAAwD;CACzD;AACD,EAAE,oCAAoC","sourceRoot":""}]);
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
	hover(6);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFLQUEyRDtBQUN2Ryw0Q0FBNEMsaUpBQWlEO0FBQzdGLDRDQUE0Qyx5SUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsT0FBTyxpYUFBaWEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxPQUFPLFFBQVEsS0FBSyxNQUFNLFlBQVksT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sUUFBUSxLQUFLLEtBQUssYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLFlBQVksWUFBWSxPQUFPLE9BQU8sS0FBSyxRQUFRLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLE9BQU8sS0FBSyxLQUFLLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxPQUFPLEtBQUssS0FBSyxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLFNBQVMsTUFBTSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxXQUFXLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxZQUFZLFVBQVUsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLE9BQU8sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsT0FBTyxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxRQUFRLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLGFBQWEsWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFdBQVcsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxTQUFTLE9BQU8sVUFBVSxZQUFZLFNBQVMsT0FBTyxhQUFhLFFBQVEsT0FBTyxlQUFlLGFBQWEsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxhQUFhLFFBQVEsS0FBSyxhQUFhLFFBQVEsS0FBSyxhQUFhLFFBQVEsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksZUFBZSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsZUFBZSxhQUFhLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sa0NBQWtDO0FBQzFqTDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9xQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkMsMkNBQTJDLEVBQUU7QUFDN0MsNkNBQTZDLEVBQUU7QUFDL0MsMkNBQTJDLEVBQUU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vZGlzdC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL2Rpc3QvY3NzL3N0eWxlLmNzcz9mMTZlIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9mb250cy9SZWN1cnNpdmVfTW9ub3NwYWNlLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvZm9udHMvV2VsbGZsZWV0LVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvaW1nL3NraWxscy9zb2Z0LXNraWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdSZWN1cnNpdmVfTW9ub3NwYWNlJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1dlbGxmbGVldC1SZWd1bGFyJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbjpyb290IHtcblx0LS1jb2xvci1oZWFkZXI6ICM3ZDc3Nzc7XG5cdC0tY29sb3ItbGlua3M6IHZhcigtLWNvbG9yLWhlYWRlcik7XG5cdC0tY29sb3ItbWFpbjogI2U3YmIyYjtcblx0LS1jb2xvci1mb250LXBhbmVsOiAjZmZmZmZmO1xuXHQtLWNvbG9yLWZvbnQtbWFpbjogIzIxMjEyMTtcblx0LS1jb2xvci1mb250LWZlYXR1cmVzOiAjZjcyYjJiO1xuXHQtLWNvbG9yLWhyOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuXHQtLWNvbG9yLWN1cnJlbnQtcGFnZTogI2UzYzE1NDtcblx0LS1jb2xvci1ib3JkZXItYXZhdGFyOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuXHQtLWhlaWdodC1yaWdodC1wYW5lbDogMzV2aDtcblx0LS1mb250LXNpemUtcGFuZWw6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAvIDgpO1xuXHQtLWZvbnQtc2l6ZS1ncmVldGluZ3M6IGNsYW1wKDI0cHgsIDV2dywgNDBweCk7XG5cdC0tZm9udC1zaXplLXNlY29uZDogY2FsYyh2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKSAqIDAuOCk7XG5cdC0tZm9udC1zaXplLXRoaXJkOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMC41KTtcblx0LS1mb250LXNpemUtZGVzY3JpcHRpb246IGNhbGModmFyKC0tZm9udC1zaXplLWdyZWV0aW5ncykgKiAwLjYpO1xuXHQtLWZvbnQtc2l6ZS1uYW1lOiBjYWxjKHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpICogMi40KTtcblx0LS1mb250LXNpemUtZm9vdGVyOiBtYXgoMXZ3LCAydmgpO1xuXHQtLWZvb3Rlci1oZWlnaHQ6IDV2aDtcblx0LS1zY3JvbGxiYXItd2lkdGg6IDEwcHg7XG5cdC0taGVpZ2h0LWhyOiAycHg7XG5cdC0tY29tbW9uLXdpZHRoOiA1MHZ3O1xuXHQtLW1hcmdpbi1ib3R0b20tcHJvamVjdHM6IDRlbTtcblx0LS13aWR0aC1wcm9qZWN0LWltYWdlOiA2MDBweDtcblx0LS1wYWRkaW5nLXBhbmVsOiBjYWxjKDF2dyArIDEwcHgpO1xuXHQtLXNoYWRvdy1tYWluOiA1cHggNXB4IDEwcHggcmdiKDAgMCAwIC8gMC43KTtcblx0LS1zaGFkb3ctYnV0dG9uLWJpZzogMHB4IDEwcHggMTBweCByZ2IoMCAwIDAgLyAwLjcpO1xuXHQtLXNoYWRvdy1idXR0b24tc21hbGw6IDBweCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjQpO1xuXHQtLXNoYWRvdy1mb290ZXI6IDVweCA1cHggMjBweCByZ2IoMCAwIDAgLyAwLjcpO1xuXHQtLWJvcmRlci1hdmF0YXI6IDEwcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLWF2YXRhcik7XG5cdC0tdHJhbnNpdGlvbjogMC4ycztcblx0LS1zY2FsZTogc2NhbGUoMS4xKTtcblx0LS1tYWluLWZvbnQ6IFdlbGxmbGVldC1SZWd1bGFyLCBzYW5zLXNlcmlmO1xuXHQtLXNlY29uZC1mb250OiAnUmVjdXJzaXZlX01vbm9zcGFjZScsIG1vbm9zcGFjZTtcbn1cblxuLyoqXG4gINCd0L7RgNC80LDQu9C40LfQsNGG0LjRjyDQsdC70L7Rh9C90L7QuSDQvNC+0LTQtdC70LhcbiAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyoqXG4gICDQo9Cx0LjRgNCw0LXQvCDQstC90YPRgtGA0LXQvdC90LjQtSDQvtGC0YHRgtGD0L/RiyDRgdC70LXQstCwINGC0LXQs9Cw0Lwg0YHQv9C40YHQutC+0LIsXG4gICDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuOndoZXJlKHVsLCBvbCk6d2hlcmUoW2NsYXNzXSkge1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdC10YjQvdC40LUg0L7RgtGB0YLRg9C/0YsgYm9keSDQuCDQtNCy0YPQvCDQtNGA0YPQs9C40Lwg0YLQtdCz0LDQvCxcbiAgINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG5ib2R5LFxuOndoZXJlKGJsb2NrcXVvdGUsIGZpZ3VyZSk6d2hlcmUoW2NsYXNzXSkge1xuXHRtYXJnaW46IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdC10YjQvdC40LUg0L7RgtGB0YLRg9C/0Ysg0LLQtdGA0YLQuNC60LDQu9C4INC90YPQttC90YvQvCDRgtC10LPQsNC8LFxuICAg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbjp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCB1bCwgb2wsIGRsKTp3aGVyZShbY2xhc3NdKSB7XG5cdG1hcmdpbi1ibG9jazogMDtcbn1cblxuOndoZXJlKGRkW2NsYXNzXSkge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLyoqXG4gICDQo9Cx0LjRgNCw0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INC80LDRgNC60LXRgCDQvNCw0YDQutC40YDQvtCy0LDQvdC90L7QvNGDINGB0L/QuNGB0LrRgyxcbiAgINGDINC60L7RgtC+0YDQvtCz0L4g0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbjp3aGVyZSh1bFtjbGFzc10pIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gICDQo9C/0YDQvtGJ0LDQtdC8INGA0LDQsdC+0YLRgyDRgSDQuNC30L7QsdGA0LDQttC10L3QuNGP0LzQuFxuICAqL1xuaW1nIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gICDQndCw0YHQu9C10LTRg9C10Lwg0YHQstC+0LnRgdGC0LLQsCDRiNGA0LjRhNGCINC00LvRjyDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgKi9cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5idXR0b24ge1xuXHRmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcblx0LyoqXG4gICAgICDQn9GA0LjQs9C+0LTQuNGC0YHRjyDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1INGB0LjRgtGD0LDRhtC40LlcbiAgICAgICjQutC+0LPQtNCwLCDQvdCw0L/RgNC40LzQtdGALCDQvdGD0LbQvdC+INCx0YPQtNC10YIgXCLQv9GA0LjQttCw0YLRjFwiINGE0YPRgtC10YAg0Log0L3QuNC30YMg0YHQsNC50YLQsClcbiAgICAgKi9cblx0aGVpZ2h0OiAxMDAlO1xuXHQvKipcbiAgICAgINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuICAgICAqL1xuXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG5cdC8qKlxuICAgICAg0J/RgNC40LPQvtC00LjRgtGB0Y8g0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC40YLRg9Cw0YbQuNC5XG4gICAgICAo0LrQvtCz0LTQsCwg0L3QsNC/0YDQuNC80LXRgCwg0L3Rg9C20L3QviDQsdGD0LTQtdGCIFwi0L/RgNC40LbQsNGC0YxcIiDRhNGD0YLQtdGAINC6INC90LjQt9GDINGB0LDQudGC0LApXG4gICAgICovXG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdC8qKlxuICAgICAg0KPQvdC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9C5INC40L3RgtC10YDQu9C40L3RjNGP0LZcbiAgICAgKi9cblx0bGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyoqXG4gICDQn9GA0LjQstC+0LTQuNC8INC6INC10LTQuNC90L7QvNGDINGG0LLQtdGC0YMgc3ZnLdGN0LvQtdC80LXQvdGC0YtcbiAgKi9cbnN2ZyAqW2ZpbGxdIHtcblx0ZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5zdmcgKltzdHJva2VdIHtcblx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG59XG5cbi8qKlxuICAg0KfQuNC90LjQvCDQsdCw0LMg0LfQsNC00LXRgNC20LrQuCDRgdC80LXQvdGLINGG0LLQtdGC0LAg0L/RgNC4INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Lgg0YEgc3ZnLdGN0LvQtdC80LXQvdGC0LDQvNC4XG4gICovXG5zdmcgKiB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IGZpbGwsIHN0cm9rZTtcbn1cblxuLyoqXG4gICDQo9C00LDQu9GP0LXQvCDQstGB0LUg0LDQvdC40LzQsNGG0LjQuCDQuCDQv9C10YDQtdGF0L7QtNGLINC00LvRjyDQu9GO0LTQtdC5LFxuICAg0LrQvtGC0L7RgNGL0LUg0L/RgNC10LTQv9C+0YfQuNGC0LDRjtGCINC40YUg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YxcbiAgKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG5cdCoge1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuXHRcdHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuXHR9XG59XG4qIHtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XG59XG5cbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdDE4MGRlZyxcblx0XHR2YXIoLS1jb2xvci1tYWluKSA5NSUsXG5cdFx0dmFyKC0tY29sb3ItaGVhZGVyKSA5NSVcblx0KTtcbn1cblxuYm9keSB7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHRoZWlnaHQ6IDEwMGR2aDtcblx0Zm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5cbmhlYWRlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiB2YXIoLS1oZWlnaHQtcmlnaHQtcGFuZWwpO1xuXHR6LWluZGV4OiAxMDA7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tc2hhZG93LW1haW4pKTtcbn1cbmhlYWRlcjpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAtMTtcblx0aW5zZXQ6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XG5cdC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDI5Ljk3OTI0NjE3OSUpO1xuXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMjkuOTc5MjQ2MTc5JSk7XG59XG5oZWFkZXIgLmhlYWRlcl9fcGFuZWwge1xuXHRoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuOSk7XG5cdHBhZGRpbmctaW5saW5lOiB2YXIoLS1wYWRkaW5nLXBhbmVsKTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgYSB7XG5cdHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWFpbik7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcGFuZWwpO1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wYW5lbCk7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5oZWFkZXJfX3BhbmVsIGE6bm90KC5jdXJyZW50KTpob3ZlciB7XG5cdHRyYW5zZm9ybTogdmFyKC0tc2NhbGUpO1xufVxuXG5tYWluIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XG5cdHBhZGRpbmctYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG59XG5tYWluOjpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRpbnNldDogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5mb290ZXIge1xuXHRmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcblx0aGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xuXHRjb2xvcjogdmFyKC0tY29sb3ItZm9udC1wYW5lbCk7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9vdGVyKTtcblx0ei1pbmRleDogMTtcblx0LW1vei1jb2x1bW4tZ2FwOiAwLjVlbTtcblx0Y29sdW1uLWdhcDogMC41ZW07XG59XG5cbi5saW5rc19zb2MxYWwgdWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtbW96LWNvbHVtbi1nYXA6IDFyZW07XG5cdGNvbHVtbi1nYXA6IDFyZW07XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubGlua3Nfc29jMWFsIHVsLFxuI3llYXIge1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1mb290ZXIpO1xufVxuXG4uZm9vdGVyLXNvYzFhbC1pdGVtIHtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdGVyLXNvYzFhbC1saW5rIHtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDJlbTtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcGFuZWwpO1xufVxuXG5Aa2V5ZnJhbWVzIGN1cnNvciB7XG5cdDAlIHtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG5cdH1cblx0NTAlIHtcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDEwMCUge1xuXHRcdGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcblx0fVxufVxuQGtleWZyYW1lcyBjdXJzb3Jfb2ZmIHtcblx0ZnJvbSB7XG5cdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuXHR9XG5cdHRvIHtcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5Aa2V5ZnJhbWVzIHRleHRfYXBwZWFyYW5jZSB7XG5cdGZyb20ge1xuXHRcdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHR0byB7XG5cdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG5cdH1cbn1cbkBrZXlmcmFtZXMgcHJpbnRlZF90ZXh0IHtcblx0ZnJvbSB7XG5cdFx0d2lkdGg6IDA7XG5cdH1cblx0dG8ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGp1bXAge1xuXHQwJSB7XG5cdFx0dG9wOiAwcHg7XG5cdH1cblx0NTAlIHtcblx0XHR0b3A6IC01cHg7XG5cdH1cblx0MTAwJSB7XG5cdFx0dG9wOiAwcHg7XG5cdH1cbn1cbi5hdmF0YXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAyMDBweDtcblx0bWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5hdmF0YXIgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogMTUlIDg1JSAyMCUgODAlLzg1JSAyMCUgODAlIDE1JTtcblx0Ym9yZGVyOiB2YXIoLS1ib3JkZXItYXZhdGFyKTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5hdmF0YXIgaW1nOmhvdmVyIHtcblx0Ym9yZGVyLXJhZGl1czogODUlIDE1JSA4NSUgMTUlLzE1JSA4NSUgMTUlIDg1JTtcbn1cblxuLmdyZWV0aW5nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQtLWFuaW1hdGlvbi1zdGVwczogMTA7XG5cdC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcblx0LS1ib3JkZXItd2lkdGg6IDAuMDdlbTtcblx0LS1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSArIDAuMnMpO1xufVxuLmdyZWV0aW5nIGRpdiBwIHtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogdmFyKC0tc2Vjb25kLWZvbnQpO1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5ncmVldGluZyA+IHAge1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG5cdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0YW5pbWF0aW9uOiB0ZXh0X2FwcGVhcmFuY2UgY2FsYyh2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIC8gMS41KSBsaW5lYXIgNS4yc1xuXHRcdGZvcndhcmRzO1xufVxuXG4uY29udGFpbmVyX2FuaW1hdGlvbl9maXJzdCBwIHtcblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZ3JlZXRpbmdzKTtcblx0Ym9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG5cdGFuaW1hdGlvbjpcblx0XHRjdXJzb3IgMC43NXMgc3RlcC1lbmQsXG5cdFx0cHJpbnRlZF90ZXh0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgc3RlcHModmFyKC0tYW5pbWF0aW9uLXN0ZXBzKSksXG5cdFx0Y3Vyc29yX29mZiAwLjJzIGxpbmVhciB2YXIoLS1hbmltYXRpb24tZGVsYXkpIGZvcndhcmRzO1xufVxuXG4uY29udGFpbmVyX2FuaW1hdGlvbl9maXJzdCxcbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb250YWluZXJfYW5pbWF0aW9uX2ZpcnN0IHAsXG4uY29udGFpbmVyX2FuaW1hdGlvbl9zZWNvbmQgcCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCB7XG5cdC0tYW5pbWF0aW9uLXN0ZXBzOiA2O1xuXHQtLWFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcbn1cbi5jb250YWluZXJfYW5pbWF0aW9uX3NlY29uZCBwIHtcblx0d2lkdGg6IDA7XG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hbWUpO1xuXHRsaW5lLWhlaWdodDogMS4xO1xuXHRib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdHJhbnNwYXJlbnQ7XG5cdGFuaW1hdGlvbjpcblx0XHRjdXJzb3IgMC43NXMgc3RlcC1lbmQgdmFyKC0tYW5pbWF0aW9uLWRlbGF5KSBpbmZpbml0ZSxcblx0XHRwcmludGVkX3RleHQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSB2YXIoLS1hbmltYXRpb24tZGVsYXkpXG5cdFx0XHRzdGVwcyh2YXIoLS1hbmltYXRpb24tc3RlcHMpKSBmb3J3YXJkcztcbn1cblxuLmFib3V0IHtcblx0LS1yb3ctZ2FwOiAxZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0cm93LWdhcDogdmFyKC0tcm93LWdhcCk7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXJvdy1nYXApICogMik7XG59XG4uYWJvdXQgcCB7XG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcbn1cbi5hYm91dCBwIGEge1xuXHRjb2xvcjogdmFyKC0tY29sb3ItbGlua3MpO1xufVxuXG5ociB7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaHIpO1xuXHR3aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcblx0aGVpZ2h0OiB2YXIoLS1oZWlnaHQtaHIpO1xufVxuXG4uaGFyZC1za2lsbHMge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uaGFyZC1za2lsbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHJvdy1nYXA6IDAuNXJlbTtcbn1cbi5oYXJkLXNraWxsIGltZyB7XG5cdG1heC13aWR0aDogMTBlbTtcblx0d2lkdGg6IDEwMCU7XG5cdC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcblx0ZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1zaGFkb3ctbWFpbikpO1xufVxuLmhhcmQtc2tpbGwgaW1nOmhvdmVyIHtcblx0dHJhbnNmb3JtOiB2YXIoLS1zY2FsZSk7XG59XG5cbi5zb2Z0X3NraWxscyB7XG5cdC0tc3BhY2VfcHNldWRvX2lubGluZTogLTEuNWVtO1xufVxuLnNvZnRfc2tpbGxzIHVsIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cm93LWdhcDogMWVtO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG4uc29mdF9za2lsbHMgbGkge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlc2NyaXB0aW9uKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvZnRfc2tpbGxzIGxpOjpiZWZvcmUsXG4uc29mdF9za2lsbHMgbGk6OmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDFlbTtcblx0aGVpZ2h0OiAxZW07XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMC4yNWVtO1xufVxuLnNvZnRfc2tpbGxzIGxpOjphZnRlciB7XG5cdHJpZ2h0OiB2YXIoLS1zcGFjZV9wc2V1ZG9faW5saW5lKTtcbn1cbi5zb2Z0X3NraWxscyBsaTo6YmVmb3JlIHtcblx0bGVmdDogdmFyKC0tc3BhY2VfcHNldWRvX2lubGluZSk7XG59XG5cbi5wcm9qZWN0X2ZpZWxkIHtcblx0LS1jb21tb24td2lkdGg6IDcwdnc7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9qZWN0X2ZpZWxkIGgxLFxuLnByb2plY3RfZmllbGQgLmFsbF9wcm9qZWN0c19maWVsZCB7XG5cdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0cykgLyAyKTtcbn1cblxuLnByb2plY3Qge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciA1ZnI7XG5cdC1tb3otY29sdW1uLWdhcDogMWVtO1xuXHRjb2x1bW4tZ2FwOiAxZW07XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbS1wcm9qZWN0cyk7XG59XG5cbi5wcm9qZWN0X2ltYWdlX2NvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkOmhvdmVyIHtcblx0YmFja2dyb3VuZDogbm9uZTtcbn1cbi5wcm9qZWN0X2ltYWdlX2NvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkOmhvdmVyIGltZyB7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucHJvamVjdF9pbWFnZV9jb250YWluZXIgPiBkaXY6bGFzdC1jaGlsZCBpbWcge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC43MSwgMC44MikgdHJhbnNsYXRlWSgtMyUpO1xufVxuXG4ucHJvamVjdF9kZXNjcmlwdGlvbiBoMiArIHAge1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG59XG4ucHJvamVjdF9kZXNjcmlwdGlvbiBoMiArIHAgKyBwIHtcblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGhpcmQpO1xufVxuXG4uZnJhbWUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1heC13aWR0aDogdmFyKC0td2lkdGgtcHJvamVjdC1pbWFnZSk7XG59XG5cbi5wcm9qZWN0X2ZlYXR1cmVzIHtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnQtZmVhdHVyZXMpO1xufVxuLnByb2plY3RfZmVhdHVyZXMgKyBhIHtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWxpbmtzKTtcbn1cblxuLm5hbWVfcHJvamVjdCB7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmQtZm9udCk7XG59XG5cbi5wcm9qZWN0X2ZlYXR1cmVzLFxuLm5hbWVfcHJvamVjdCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uc19zZWN0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0LW1vei1jb2x1bW4tZ2FwOiAyZW07XG5cdGNvbHVtbi1nYXA6IDJlbTtcbn1cbi5idXR0b25zX3NlY3Rpb24gYnV0dG9uIHtcblx0d2lkdGg6IDVlbTtcbn1cblxuLmJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlcjogNHB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZXNjcmlwdGlvbik7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5idXR0b246aG92ZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG5cdGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1idXR0b24tYmlnKTtcbn1cbi5idXR0b246YWN0aXZlIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuXHRib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYnV0dG9uLXNtYWxsKTtcbn1cblxuLmFsbF9wcm9qZWN0c19maWVsZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxsX3Byb2plY3RzX2J1dHRvbiB7XG5cdHBhZGRpbmctaW5saW5lOiAxZW07XG59XG5cbi5jdXJyZW50IHtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtcGFnZSk7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1jdXJyZW50LXBhZ2UpO1xufVxuXG4ubWFpbl9ibG9ja193aWR0aCB7XG5cdG1heC13aWR0aDogdmFyKC0tY29tbW9uLXdpZHRoKTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfaDEge1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1ncmVldGluZ3MpO1xufVxuXG4udGl0bGVfaDIge1xuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zZWNvbmQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cdC5ob21lX2luZm9ybWF0aW9uIHtcblx0XHRtYXgtd2lkdGg6IDcwdnc7XG5cdH1cblx0Lm1haW5fYmxvY2tfd2lkdGgge1xuXHRcdG1heC13aWR0aDogY2FsYyh2YXIoLS1jb21tb24td2lkdGgpICsgMjB2dyk7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXHRoZWFkZXIge1xuXHRcdC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyNXZoO1xuXHRcdC0tZm9udC1zaXplLXBhbmVsOiAyZW07XG5cdH1cblx0aGVhZGVyIC5oZWFkZXJfX3BhbmVsIHtcblx0XHRoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0LXJpZ2h0LXBhbmVsKSAqIDAuNyk7XG5cdH1cblx0LnByb2plY3Qge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRcdHJvdy1nYXA6IDVlbTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wcm9qZWN0X2ZpZWxkIHtcblx0XHQtLWNvbW1vbi13aWR0aDogNTB2dztcblx0fVxuXHQucHJvamVjdF9maWVsZCBoMSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tYXJnaW4tYm90dG9tLXByb2plY3RzKSAvIDQpO1xuXHR9XG5cdC5uYW1lIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmJ1dHRvbnNfc2VjdGlvbiB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0LmJ1dHRvbnNfc2VjdGlvbiBmb3JtIHtcblx0XHRmbGV4LWdyb3c6IDE7XG5cdH1cblx0LmJ1dHRvbnNfc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRoZWFkZXIge1xuXHRcdC0taGVpZ2h0LXJpZ2h0LXBhbmVsOiAyMHZoO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdGhlYWRlciAuaGVhZGVyX19wYW5lbCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHQtbW96LWNvbHVtbi1nYXA6IDJlbTtcblx0XHRjb2x1bW4tZ2FwOiAyZW07XG5cdH1cblx0aGVhZGVyIC5oZWFkZXJfX3BhbmVsIGEge1xuXHRcdGZvbnQtc2l6ZTogN3Z3O1xuXHR9XG5cdC5wcm9qZWN0X2ZpZWxkIHtcblx0XHQtLWNvbW1vbi13aWR0aDogNzB2dztcblx0fVxuXHQuaGFyZC1za2lsbHMge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG5cdH1cblx0Zm9vdGVyIHtcblx0XHQtLWZvbnQtc2l6ZS1mb290ZXI6IDE2cHg7XG5cdH1cbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG5cdC5mb290ZXItc29jMWFsLWl0ZW06aG92ZXIge1xuXHRcdGFuaW1hdGlvbjoganVtcCAwLjhzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpIGluZmluaXRlO1xuXHR9XG59IC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2NvbnN0YW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fYmFzaWMlMjBzdHJ1Y3R1cmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fcHJvamVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX2NsYXNzZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19tZWRpYS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjtDRENDLGtDQ0FBO0NEQ0EsNERDQUE7Q0RDQSxnQkNBQTtDRENBLGtCQ0FBO0NEQ0Esa0JDQUE7QURDRDtBQ0VBO0NEQUMsZ0NDQ0E7Q0RBQSw0RENDQTtDREFBLGdCQ0NBO0NEQUEsa0JDQ0E7Q0RBQSxrQkNDQTtBREFEO0FDR0E7Q0REQyx1QkNJQTtDREhBLGtDQ0lBO0NESEEscUJDSUE7Q0RIQSwyQkNJQTtDREhBLDBCQ0lBO0NESEEsOEJDSUE7Q0RIQSxrQ0NJQTtDREhBLDZCQ0lBO0NESEEsMENDSUE7Q0RIQSwwQkNNQTtDRExBLHNEQ01BO0NETEEsNkNDTUE7Q0RMQSwwRENNQTtDRExBLHlEQ01BO0NETEEsK0RDTUE7Q0RMQSx3RENNQTtDRExBLGlDQ01BO0NETEEsb0JDT0E7Q0ROQSx1QkNPQTtDRE5BLGdCQ09BO0NETkEsb0JDT0E7Q0ROQSw2QkNPQTtDRE5BLDRCQ09BO0NETkEsaUNDU0E7Q0RSQSw0Q0NXQTtDRFZBLG1EQ1dBO0NEVkEsb0RDV0E7Q0RWQSw4Q0NXQTtDRFZBLHNEQ2FBO0NEWkEsa0JDZUE7Q0RkQSxtQkNlQTtDRGRBLDBDQ2lCQTtDRGhCQSwrQ0NpQkE7QURoQkQ7O0FFakRBOztFQUFBO0FBR0E7OztDRnNEQyxzQkVuREE7QUZvREQ7O0FFakRBOzs7R0FBQTtBQUlBO0NGb0RDLGVFbkRBO0FGb0REOztBRWpEQTs7O0dBQUE7QUFJQTs7Q0ZxREMsU0VuREE7QUZvREQ7O0FFakRBOzs7R0FBQTtBQUlBO0NGb0RDLGVFbkRBO0FGb0REOztBRWpEQTtDRm9EQyxjRW5EQTtBRm9ERDs7QUVqREE7OztHQUFBO0FBSUE7Q0ZvREMsZ0JFbkRBO0FGb0REOztBRWpEQTs7R0FBQTtBQUdBO0NGb0RDLGNFbkRBO0NGb0RBLGVFbkRBO0FGb0REOztBRWpEQTs7R0FBQTtBQUdBOzs7O0NGdURDLGFFbkRBO0FGb0REOztBRWpEQTtDRm9EQzs7O01FbkRBO0NGdURBLFlFbkRBO0NGb0RBOztNRW5EQTtDRnNEQSx1QkVuREE7QUZvREQ7O0FFakRBO0NGb0RDOzs7TUVuREE7Q0Z1REEsZ0JFbkRBO0NGb0RBOztNRW5EQTtDRnNEQSxnQkVuREE7QUZvREQ7O0FFakRBOztHQUFBO0FBR0E7Q0ZvREMsa0JFbkRBO0FGb0REOztBRWxEQTtDRnFEQyxvQkVwREE7QUZxREQ7O0FFbERBOztHQUFBO0FBR0E7Q0ZxREMsaUNFcERBO0FGcUREOztBRWxEQTs7O0dBQUE7QUFJQTtDRnFEQztFQUNDLHFDRXBEQTtFRnFEQSx1Q0VwREE7RUZxREEsc0NFcERBO0VGcURBLGdDRXBEQTtDRnFERDtBQUNEO0FFakRBO0NGbURDLHlCRWxEQTtDRm1EQSxzQkVqREE7Q0ZrREEsaUJFbERBO0FGbUREOztBRzVLQTtDSCtLQyw2Qkc5S0E7QUgrS0Q7O0FHNUtBO0NIK0tDLHFDRzlLQTtBSCtLRDs7QUc1S0E7Q0grS0MsNkJHOUtBO0NIK0tBOzs7O0VHdEtBO0FIMktEOztBQUVBO0NBQ0MseUJHM0tBO0NIMktELHNCQUFBO0NBRUMsaUJBQWlCO0NHektsQixjQUFBO0NIMktDLDZCRzFLQTtBSDJLRDs7QUFFQTtDQUNDLGtCR3pLQTtDSDBLQSxhR3pLQTtDSHlLRCxpQ0FBQTtDR3ZLQyxZQUFBO0NIMEtBLHlCR3pLQztDSDBLRCx1Q0d6S0M7QUgwS0Y7QUFDQTtDQUNDLFdHektDO0NIMEtELGtCSW5NQTtDSm9NQSxXSXBNQTtDSm1NRCxRQUFBO0NHdEtDLHFDQUFBO0NIMEtBLG9FR3pLQztDSDBLRCw0REd6S0M7QUgwS0Y7QUFDQTtDQUNDLDZDR3pLQztDSDBLRCxvQ0d6S0M7Q0h3S0YsYUFBQTtDR3JLQyxzQkFBQTtDSHlLQSw2Qkd4S0M7Q0h5S0QsbUJHeEtDO0FIeUtGO0FBQ0E7Q0FDQywrQkd4S0M7Q0h5S0QscUJHeEtDO0NIdUtGLDhCQUFBO0NBR0MsaUNBQWlDO0NHdEtsQyw2QkFBQTtDSHdLQyx1Q0d2S0E7QUhzS0Q7O0FHbEtBO0NIdUtDLHVCR3RLQTtBSHVLRDs7QUFBQTtDR25LQyxtQ0FBQTtDSHVLQSxvQ0d0S0M7Q0h1S0QsNkJHdEtDO0FIdUtGO0FBQ0E7Q0FDQyxXR3RLQztDSHFLRixrQkFBQTtDQUdDLFFBQVE7Q0duS1QsWUFBQTtDSHFLQyx5QkdwS0E7QUhxS0Q7O0FBRUE7Q0FDQyw2QkdwS0E7Q0hxS0EsNEJHcEtBO0NIcUtBLFdHcEtBO0NIcUtBLGFHcEtBO0NIcUtBLGVHcEtBO0NIcUtBLFNHcEtBO0NIcUtBLHFDR3BLQTtDSHFLQSw4QkdwS0E7Q0hxS0EsbUJHcEtBO0NIcUtBLHVCR3JLQTtDSG1LRCxnQ0FBQTtDQUlDLFVBQVU7Q0duS1Ysc0JBQUE7Q0hxS0EsaUJHcEtDO0FIcUtGOztBQUVBO0NBQ0MsYUdyS0M7Q0hrS0YscUJBQUE7Q0FLQyxnQkFBZ0I7Q0duS2pCLFNBQUE7Q0hxS0MsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxrQ0dwS0E7QUhxS0Q7O0FBRkE7Q0FLQyxxQkFBcUI7Q0duS3RCLGtCQUFBO0NIcUtDLGNHcEtBO0FIcUtEOztBQUZBO0NBS0MsYUFBYTtDS2hTZCxVQUFBO0NMa1NDLDhCS2pTQTtBTGtTRDs7QUFFQTtDQUNDO0VBSEMsb0NBQUE7Q0FLRDtDQUNBO0VBSEMseUJBQUE7Q0FDRjtDS3pSQTtFQUNDLG9DQUFBO0NMK1JBO0FBQ0Q7QUFDQTtDQUNDO0VBSEMsb0NBQUE7Q0FDRjtDS3ZSQTtFQUNDLHlCQUFBO0NMNlJBO0FBQ0Q7QUFDQTtDQUNDO0VBSEMsa0JBQUE7Q0FDRjtDS3JSQTtFQUNDLDZCQUFBO0NMMlJBO0FBQ0Q7QUFDQTtDQUNDO0VBSEMsUUFBQTtDQUNGO0NLblJBO0VBQ0MsV0FBQTtDTHlSQTtBQUNEO0FBQ0E7Q0FDQztFQUhDLFFBQUE7Q0FLRDtDQUNBO0VBSEMsU0FBQTtDQUNGO0NNMVVBO0VBQ0MsUUFBQTtDTmdWQTtBQUNEO0FBSEE7Q00xVUMsa0JBQUE7Q05nVkEsWU0vVUM7Q05nVkQsbUJNL1VDO0FOZ1ZGO0FBSEE7Q0FLQyw4Q0FBOEM7Q003VS9DLDRCQUFBO0NOK1VDLG9CTTlVQTtBTjJVRDs7QU14VUE7Q04rVUMsOENNOVVBO0FOK1VEOztBQUVBO0NBQ0Msa0JNOVVBO0NOMlVELHFCQUFBO0NNelVDLHdCQUFBO0NOK1VBLHNCTTlVQztDTitVRCx5RE05VUM7QU4rVUY7QUFIQTtDTXhVQyxTQUFBO0NOOFVBLCtCTTdVQztDTjhVRCx1Qk03VUM7QU44VUY7QUFIQTtDQUtDLHVDQUF1QztDTTFVeEMsa0JBQUE7Q040VUM7VU0xVUE7QU40VUQ7O0FBRUE7Q010VUEscUNBQUE7Q053VUMsOERBQThEO0NBQzlEOzs7d0RBR3VEO0FBQ3hEOztBQUZBOztDTWpVQSxxQkFBQTtBTndVQTtBQUNBOztDTXJVQyxnQkFBQTtDTndVQSxtQk12VUM7QU53VUY7O0FBRUE7Q0FDQyxvQk10VUM7Q05tVUYsMEJBQUE7QUFLQTtBTzNZQTtDUDZZQyxRTzVZQTtDUDZZQSxnQ08zWUE7Q1A0WUEsZ0JPM1lBO0NQNFlBLG1ETzNZQTtDUDRZQTs7O3lDQUREO0FPdFlDOztBUHlZRDtDT3RZRSxjQUFBO0NQNFlELGtCTzNZRTtDUHdZSCxhQUFBO0NBS0MsdUJBQXVCO0NPeFl4QixzQkFBQTtDUDBZQyxtQk96WUE7Q1AwWUEsd0NPellBO0FQMFlEO0FBQ0E7Q0FIQSx1Q0FBQTtBQUtBO0FPeFlBO0NQMFlDLHlCT3pZQTtBUDBZRDs7QUFFQTtDT3hZQSxZQUFBO0NQMFlDLGlDT3pZQTtDUDBZQSwwQk96WUE7Q1AwWUEsd0JPellBO0FQMFlEOztBT3ZZQztDUDBZQSxhT3pZQztDUDBZRCxxQ096WUM7QVAwWUY7O0FBRUE7Q0FDQyxhTzFZQztDUHNZRixzQkFBQTtDT25ZQyxtQkFBQTtDUDBZQSxlT3pZQztBUHFZRjtBQU1BO0NPdllBLGVBQUE7Q1B5WUMsV094WUE7Q1BvWUQsc0JBQUE7Q09sWUMsbUJBQUE7Q1B5WUEsdUNPeFlDO0NQeVlELHVDT3hZQztBUHlZRjtBQUNBO0NBQ0MsdUJPeFlDO0FQeVlGOztBT3JZQztDUHdZQSw2Qk92WUM7QVB3WUY7QUFDQTtDQUpBLGFBQUE7Q09oWUMsc0JBQUE7Q1B1WUEsbUJBQW1CO0NBQ25CLFlPdFlDO0NQdVlELFVPdFlDO0NQdVlELFNPdFlDO0FQdVlGO0FBQ0E7Q0FDQyxxQk90WUM7Q1B1WUQsdUNPdFlDO0NQdVlELGtCT3RZQztBUGtZRjtBTy9YQzs7Q1BrWUQsV0FBQTtDTzlYQyxxQkFBQTtDUHFZQSxVT3BZQztDUGdZRixXQUFBO0NBTUMseURBQW1EO0NRemRwRCx3QkFBQTtDUjJkQyxrQlExZEE7Q1IyZEEsV1F6ZEE7QVJxZEQ7QVFuZEM7Q1IwZEEsaUNBQWlDO0FBQ2xDO0FBSkE7Q0FNQyxnQ0FBZ0M7QVF2ZGpDOztBUjBkQTtDQUNDLG9CUXhkQTtDUnlkQSxrQlF6ZEE7QVIwZEQ7QUFDQTs7Q0FFQyxzREFBc0Q7QVF0ZHJEOztBUm1kRjtDUWhkRyxhQUFBO0NSd2RGLDhCUXZkRztDUmtkSixvQkFBQTtDUTljRSxlQUFBO0NSc2RELHFCUXJkRTtDUnNkRiw0Q1FyZEU7QVJnZEg7O0FRM2NBO0NSb2RDLGdCUW5kQTtBUjhjRDtBUTVjQztDUm9kQSxtQlFuZEM7QVI4Y0Y7QUFPQTtDUWpkQSxrQkFBQTtDUm1kQyw0Q1FsZEE7QVJtZEQ7O0FBRUE7Q1FoZEEsdUNBQUE7QVJrZEE7QUFMQTtDUTFjQyxpQ0FBQTtBUmtkRDs7QUFFQTtDUS9jQSxrQkFBQTtDUmlkQyxxQ1FoZEE7QVIyY0Q7O0FReGNBO0NSaWRDLGlDQUFpQztBQUNsQztBQUxBO0NBT0MseUJBQXlCO0FROWMxQjs7QVJpZEE7Q0FDQywrQlFoZEE7QVIwY0Q7O0FBU0E7O0NBRUMsaUJBQWlCO0FROWNsQjs7QVJpZEE7Q0FDQyxhUS9jQTtDUmdkQSxvQlEvY0E7Q1JnZEEsZVEvY0E7QVJnZEQ7QUFDQTtDQU5BLFVBQUE7QVF2Y0M7O0FSaWREO0NBTkEsbUJBQUE7Q1F0Y0MsOEJBQUE7Q1IrY0EsNkJROWNDO0NSK2NELDZCUTljQztDUndjRix1Q0FBQTtDQVFDLGFBQWE7Q1E1Y2QsaUNBQUE7QVI4Y0E7QUFDQTtDQU5BLDJCQUFBO0NBUUMsb0NBQW9DO0FRNWNyQztBUjhjQTtDQU5BLDJCQUFBO0NBUUMsc0NBQXNDO0FTeGpCdkM7O0FUMmpCQTtDQU5BLGFBQUE7Q0FRQyx1QkFBdUI7QVN4akJ4Qjs7QVQyakJBO0NBQ0MsbUJTempCQTtBVG1qQkQ7O0FTaGpCQTtDVDBqQkMsZ0NTempCQTtDVG1qQkQsa0RBQUE7QUFRQTs7QUFFQTtDQU5BLDhCQUFBO0NBUUMsV0FBVztDU3hqQlosY0FBQTtBVDBqQkE7O0FBRUE7Q1Uva0JBLGtCQUFBO0FWaWxCQTs7QUFFQTtDQUNDLHFDVS9rQkE7QVZnbEJEOztBQUxBO0NVdGtCQSxrQ0FBQTtBVitrQkE7O0FBRUE7Q0FDQztFVTdrQkMsZUFBQTtDVitrQkQ7Q0FDQTtFVTNrQkEsMkNBQUE7Q1Y2a0JBO0FBQ0Q7QUFDQTtDQUNDO0VBTkMsMEJBQUE7RVVua0JELHNCQUFBO0NWNGtCQTtDQUNBO0VVM2tCQyw2Q0FBQTtDVjZrQkQ7Q0FDQTtFVXprQkEsYUFBQTtFVjJrQkMsOEJVMWtCQTtFVm9rQkEsWUFBQTtFVWprQkQsbUJBQUE7Q1Ywa0JBO0NBQ0E7RVV4a0JDLG9CQUFBO0NWMGtCRDtDQUNBO0VVeGtCRSxzREFBQTtDVjBrQkY7Q0FDQTtFQU5ELGtCQUFBO0NVOWpCQTtDVnVrQkM7RUFDQyx1QlV0a0JBO0NWdWtCRDtDQUNBO0VVcmtCQyxZQUFBO0NWdWtCRDtDQUNBO0VBQ0MsV1Vya0JDO0NWc2tCRjtBQUNEO0FBQ0E7Q0FDQztFQVBDLDBCQUFBO0VVMWpCRCx1QkFBQTtDVm9rQkE7Q0FDQTtFVWprQkEsbUJBQUE7RVZta0JDLHVCVWxrQkE7RVYyakJBLG9CQUFBO0VBQ0YsZUFBQTtDVXZqQkE7Q1Zpa0JDO0VBQ0MsY1Voa0JBO0NWaWtCRDtDQVBEO0VBU0Usb0JBQW9CO0NBQ3JCO0NBQ0E7RUFDQyxxQ0FBcUM7Q0FDdEM7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtBQUNEO0FBQ0E7Q0FDQztFQUNDLHdEQUF3RDtDQUN6RDtBQUNELEVBQUUsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9kaXN0L2Nzcy9zdHlsZS5jc3MnO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuY29uc3QgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyJyk7XG55ZWFyLnRleHRDb250ZW50ID0gYMKpICR7Y3VycmVudFllYXJ9IHwgRGVzaWduZWQgYW5kIGNvZGVkIGJ5IERtaXRyeWA7XG5cbi8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDRgdC60YDQvtC70LvQsdCw0YDQsFxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19wYW5lbCcpO1xuY29uc3QgcmlnaHRJbmRlbnQgPVxuXHRnZXRDb21wdXRlZFN0eWxlKGh0bWwpLmdldFByb3BlcnR5VmFsdWUoJy0tc2Nyb2xsYmFyLXdpZHRoJyk7XG5jb25zdCBoYXNTY3JvbGxiYXIgPSBodG1sLmNsaWVudEhlaWdodCA8IGh0bWwuc2Nyb2xsSGVpZ2h0O1xuaWYgKCFoYXNTY3JvbGxiYXIpIHtcblx0cGFuZWwuc3R5bGUubWFyZ2luUmlnaHQgPSByaWdodEluZGVudDtcblx0Zm9vdGVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHJpZ2h0SW5kZW50O1xufVxuXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LfQsNC80LXQvdGLINGB0YLQsNGC0LjRh9C90L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDQsNC90LjQvNC40YDQvtCy0LDQvdC90L7QtSDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC60YPRgNGB0L7RgNCwXG5mdW5jdGlvbiBob3ZlcihzdW1Qcm9qZWN0cykge1xuXHRjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKTtcblx0Y29uc3QgcHJvamVjdEltYWdlID0gW1xuXHRcdC4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfaW1hZ2VfaW1nJyksXG5cdF07XG5cblx0Y29uc3Qgc3RhdGljSW1hZ2UgPSBbXTtcblx0Y29uc3QgYW5pbWF0ZWRJbWFnZSA9IFtdO1xuXHRjb25zdCBtb2JpbGVJbWFnZSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDw9IHN1bVByb2plY3RzOyBpKyspIHtcblx0XHRzdGF0aWNJbWFnZS5wdXNoKGAuL2ltZy9wcm9qZWN0X2ltYWdlcy8ke2l9LXN0YXRpYy5wbmdgKTtcblx0XHRhbmltYXRlZEltYWdlLnB1c2goYC4vaW1nL3Byb2plY3RfaW1hZ2VzLyR7aX0tYW5pbWF0ZWQuZ2lmYCk7XG5cdFx0bW9iaWxlSW1hZ2UucHVzaChgLi9pbWcvcHJvamVjdF9pbWFnZXMvJHtpfS1zdGF0aWMtbW9iaWxlLndlYnBgKTtcblx0fVxuXG5cdHByb2plY3RNYWluWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoYW5pbWF0ZWRJbWFnZSwgZS50YXJnZXQsIHByb2plY3RJbWFnZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRwcm9qZWN0TWFpblswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG5cdFx0aWYgKHByb2plY3RJbWFnZS5pbmNsdWRlcyhlLnRhcmdldCkpIHtcblx0XHRcdGNob29zZU1vZGUoc3RhdGljSW1hZ2UsIGUudGFyZ2V0LCBwcm9qZWN0SW1hZ2UpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNob29zZU1vZGUoYXJyYXksIHRhcmdldCwgZmllbGQpIHtcblx0aWYgKGZpZWxkLmluY2x1ZGVzKHRhcmdldCkpIHtcblx0XHRsZXQgaW5kZXggPSB0YXJnZXQuYWx0O1xuXHRcdGluZGV4ID0gaW5kZXhbaW5kZXgubGVuZ3RoIC0gMV0gLSAxO1xuXHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycmF5W2luZGV4XSk7XG5cdH1cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RfZmllbGQnKS5sZW5ndGggPiAwKSB7XG5cdGhvdmVyKDYpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9