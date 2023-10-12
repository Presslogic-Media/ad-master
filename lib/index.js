(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ad-master"] = factory();
	else
		root["ad-master"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ad-slot.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ad-master/AdMaster */ \"./src/ad-master/AdMaster.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    adUnitKey: {\n      type: String,\n      \"default\": 'M1'\n    },\n    advertisingText: {\n      type: String,\n      \"default\": '廣告'\n    },\n    /**\n     * 是否需要背景 或者 设置背景的颜色 \n     */\n    background: {\n      type: [Boolean, String],\n      \"default\": true\n    }\n  },\n  computed: {\n    currentBg: function currentBg() {\n      if (typeof this.background === 'boolean') {\n        return this.background ? '#f0f0f0' : 'transparent';\n      }\n      return this.background;\n    }\n  },\n  data: function data() {\n    return {\n      id: ''\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n    this.$nextTick(function () {\n      _this.initAdSlot();\n    });\n  },\n  methods: {\n    initAdSlot: function initAdSlot() {\n      this.id = _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_0__[\"AdMaster\"].generateId();\n      var adConfig = _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_0__[\"AdMaster\"].getAdUnit(this.adUnitKey);\n      var adMaster = new _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_0__[\"AdMaster\"](this.id, adConfig.adUnit, {\n        size: adConfig.size\n      });\n      console.log('adSlot adMaster: ', adMaster);\n    }\n  }\n});\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isMergeableObject = function isMergeableObject(value) {\n\treturn isNonNullObject(value)\n\t\t&& !isSpecial(value)\n};\n\nfunction isNonNullObject(value) {\n\treturn !!value && typeof value === 'object'\n}\n\nfunction isSpecial(value) {\n\tvar stringValue = Object.prototype.toString.call(value);\n\n\treturn stringValue === '[object RegExp]'\n\t\t|| stringValue === '[object Date]'\n\t\t|| isReactElement(value)\n}\n\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n\treturn value.$$typeof === REACT_ELEMENT_TYPE\n}\n\nfunction emptyTarget(val) {\n\treturn Array.isArray(val) ? [] : {}\n}\n\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n\treturn (options.clone !== false && options.isMergeableObject(value))\n\t\t? deepmerge(emptyTarget(value), value, options)\n\t\t: value\n}\n\nfunction defaultArrayMerge(target, source, options) {\n\treturn target.concat(source).map(function(element) {\n\t\treturn cloneUnlessOtherwiseSpecified(element, options)\n\t})\n}\n\nfunction getMergeFunction(key, options) {\n\tif (!options.customMerge) {\n\t\treturn deepmerge\n\t}\n\tvar customMerge = options.customMerge(key);\n\treturn typeof customMerge === 'function' ? customMerge : deepmerge\n}\n\nfunction getEnumerableOwnPropertySymbols(target) {\n\treturn Object.getOwnPropertySymbols\n\t\t? Object.getOwnPropertySymbols(target).filter(function(symbol) {\n\t\t\treturn Object.propertyIsEnumerable.call(target, symbol)\n\t\t})\n\t\t: []\n}\n\nfunction getKeys(target) {\n\treturn Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))\n}\n\nfunction propertyIsOnObject(object, property) {\n\ttry {\n\t\treturn property in object\n\t} catch(_) {\n\t\treturn false\n\t}\n}\n\n// Protects from prototype poisoning and unexpected merging up the prototype chain.\nfunction propertyIsUnsafe(target, key) {\n\treturn propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,\n\t\t&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,\n\t\t\t&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.\n}\n\nfunction mergeObject(target, source, options) {\n\tvar destination = {};\n\tif (options.isMergeableObject(target)) {\n\t\tgetKeys(target).forEach(function(key) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n\t\t});\n\t}\n\tgetKeys(source).forEach(function(key) {\n\t\tif (propertyIsUnsafe(target, key)) {\n\t\t\treturn\n\t\t}\n\n\t\tif (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {\n\t\t\tdestination[key] = getMergeFunction(key, options)(target[key], source[key], options);\n\t\t} else {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n\t\t}\n\t});\n\treturn destination\n}\n\nfunction deepmerge(target, source, options) {\n\toptions = options || {};\n\toptions.arrayMerge = options.arrayMerge || defaultArrayMerge;\n\toptions.isMergeableObject = options.isMergeableObject || isMergeableObject;\n\t// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()\n\t// implementations can use it. The caller may not replace it.\n\toptions.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;\n\n\tvar sourceIsArray = Array.isArray(source);\n\tvar targetIsArray = Array.isArray(target);\n\tvar sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n\tif (!sourceAndTargetTypesMatch) {\n\t\treturn cloneUnlessOtherwiseSpecified(source, options)\n\t} else if (sourceIsArray) {\n\t\treturn options.arrayMerge(target, source, options)\n\t} else {\n\t\treturn mergeObject(target, source, options)\n\t}\n}\n\ndeepmerge.all = function deepmergeAll(array, options) {\n\tif (!Array.isArray(array)) {\n\t\tthrow new Error('first argument should be an array')\n\t}\n\n\treturn array.reduce(function(prev, next) {\n\t\treturn deepmerge(prev, next, options)\n\t}, {})\n};\n\nvar deepmerge_1 = deepmerge;\n\nmodule.exports = deepmerge_1;\n\n\n//# sourceURL=webpack://ad-master/./node_modules/deepmerge/dist/cjs.js?");

/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = function load (src, opts, cb) {\n  var head = document.head || document.getElementsByTagName('head')[0]\n  var script = document.createElement('script')\n\n  if (typeof opts === 'function') {\n    cb = opts\n    opts = {}\n  }\n\n  opts = opts || {}\n  cb = cb || function() {}\n\n  script.type = opts.type || 'text/javascript'\n  script.charset = opts.charset || 'utf8';\n  script.async = 'async' in opts ? !!opts.async : true\n  script.src = src\n\n  if (opts.attrs) {\n    setAttributes(script, opts.attrs)\n  }\n\n  if (opts.text) {\n    script.text = '' + opts.text\n  }\n\n  var onend = 'onload' in script ? stdOnEnd : ieOnEnd\n  onend(script, cb)\n\n  // some good legacy browsers (firefox) fail the 'in' detection above\n  // so as a fallback we always set onload\n  // old IE will ignore this and new IE will set onload\n  if (!script.onload) {\n    stdOnEnd(script, cb);\n  }\n\n  head.appendChild(script)\n}\n\nfunction setAttributes(script, attrs) {\n  for (var attr in attrs) {\n    script.setAttribute(attr, attrs[attr]);\n  }\n}\n\nfunction stdOnEnd (script, cb) {\n  script.onload = function () {\n    this.onerror = this.onload = null\n    cb(null, script)\n  }\n  script.onerror = function () {\n    // this.onload = null here is necessary\n    // because even IE9 works not like others\n    this.onerror = this.onload = null\n    cb(new Error('Failed to load ' + this.src), script)\n  }\n}\n\nfunction ieOnEnd (script, cb) {\n  script.onreadystatechange = function () {\n    if (this.readyState != 'complete' && this.readyState != 'loaded') return\n    this.onreadystatechange = null\n    cb(null, script) // there is no way to catch loading errors in IE8\n  }\n}\n\n\n//# sourceURL=webpack://ad-master/./node_modules/load-script/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"ad-slot-wrap\", style: { \"--bg\": _vm.currentBg } },\n    [\n      _c(\"small\", [_vm._v(_vm._s(_vm.advertisingText))]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: _vm.id } }),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://ad-master/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/ad-master/AdMaster.ts":
/*!***********************************!*\
  !*** ./src/ad-master/AdMaster.ts ***!
  \***********************************/
/*! exports provided: AdMasterGlobal, AdMaster, InterObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdMasterGlobal\", function() { return AdMasterGlobal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdMaster\", function() { return AdMaster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InterObserver\", function() { return InterObserver; });\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\");\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/cjs.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/index */ \"./src/ad-master/types/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/ad-master/utils.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n// 参考文档: https://developers.google.com/publisher-tag/reference?hl=zh-cn\n// example: https://developers.google.com/publisher-tag/samples?hl=zh-cn\n\n/**\n * 广告日志\n */\nvar Logger = /*#__PURE__*/function () {\n  function Logger(name) {\n    _classCallCheck(this, Logger);\n    _defineProperty(this, \"name\", '');\n    /** 存放执行的log */\n    _defineProperty(this, \"logData\", []);\n    _defineProperty(this, \"adMaster\", null);\n    this.name = name;\n  }\n  _createClass(Logger, [{\n    key: \"setAdMaster\",\n    value: function setAdMaster(adMaster) {\n      this.adMaster = adMaster;\n    }\n  }, {\n    key: \"setLog\",\n    value: function setLog(data) {\n      var defaultLog = {\n        type: _types_index__WEBPACK_IMPORTED_MODULE_2__[\"ELogType\"].console,\n        status: _types_index__WEBPACK_IMPORTED_MODULE_2__[\"ELoStatus\"].log\n      };\n      var logData = Object.assign(defaultLog, data);\n      if (logData.status === _types_index__WEBPACK_IMPORTED_MODULE_2__[\"ELoStatus\"].error) {\n        var _this$adMaster;\n        console.error(\"------ Logger -------\".concat((_this$adMaster = this.adMaster) === null || _this$adMaster === void 0 ? void 0 : _this$adMaster.adSlotId, \"----\").concat(logData.title));\n      }\n      this.logData.push(logData);\n    }\n  }]);\n  return Logger;\n}();\n/**\n * 存储全局配置的单例\n */\nvar AdMasterGlobal = /*#__PURE__*/function () {\n  function AdMasterGlobal() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    _classCallCheck(this, AdMasterGlobal);\n    _defineProperty(this, \"config\", {});\n    _defineProperty(this, \"adUnitMap\", {});\n    this.config = options;\n  }\n\n  /** 获取当前全局的广告配置 */\n  _createClass(AdMasterGlobal, [{\n    key: \"getConfig\",\n    value: function getConfig() {\n      return this.config;\n    }\n  }, {\n    key: \"setAdUnitMap\",\n    value: function setAdUnitMap(map) {\n      this.adUnitMap = map;\n    }\n  }], [{\n    key: \"getInstance\",\n    value: function getInstance(options) {\n      if (!AdMasterGlobal.instance) {\n        AdMasterGlobal.instance = new AdMasterGlobal(options);\n      }\n      return AdMasterGlobal.instance;\n    }\n  }, {\n    key: \"initGoogletagCmd\",\n    value: function initGoogletagCmd() {\n      if (window.googletag) return;\n      window.googletag = window.googletag || {\n        cmd: []\n      };\n    }\n\n    /** 加载 gpt.js */\n  }, {\n    key: \"loadGpt\",\n    value: function loadGpt() {\n      AdMasterGlobal.logger.setLog({\n        type: _types_index__WEBPACK_IMPORTED_MODULE_2__[\"ELogType\"].loadScript,\n        title: '加载gpts.js'\n      });\n      AdMasterGlobal.initGoogletagCmd();\n      return new Promise(function (resolve, reject) {\n        load_script__WEBPACK_IMPORTED_MODULE_0___default()('https://securepubads.g.doubleclick.net/tag/js/gpt.js', function (err, _script) {\n          if (err) {\n            console.error('gpt.js load error!!!');\n            reject(err);\n          } else {\n            console.log('load success!!');\n            resolve(true);\n          }\n        });\n      });\n    }\n\n    /** 设置 local hooks */\n  }, {\n    key: \"setHooks\",\n    value: function setHooks(id, key, callback) {\n      var currentMap = AdMasterGlobal.globalHooksCallbackMap[id];\n      if (currentMap) {\n        currentMap[key] = callback;\n      } else {\n        AdMasterGlobal.globalHooksCallbackMap[id] = _defineProperty({}, key, callback);\n      }\n    }\n  }, {\n    key: \"enabledSlotRenderEnded\",\n    value: function enabledSlotRenderEnded(callback) {\n      if (!googletag) {\n        console.error('googletag not exist!');\n        return;\n      }\n      googletag.cmd.push(function () {\n        googletag.pubads().addEventListener('slotRenderEnded', function (evt) {\n          var _AdMasterGlobal$globa2;\n          var slotId = AdMaster.getSlotEleId(evt.slot);\n          var localSlotRenderEnded = (_AdMasterGlobal$globa2 = AdMasterGlobal.globalHooksCallbackMap[slotId]) === null || _AdMasterGlobal$globa2 === void 0 ? void 0 : _AdMasterGlobal$globa2.slotRenderEnded;\n          localSlotRenderEnded === null || localSlotRenderEnded === void 0 || localSlotRenderEnded(evt);\n          callback === null || callback === void 0 || callback(evt);\n        });\n      });\n    }\n  }, {\n    key: \"enabledImpressionViewable\",\n    value: function enabledImpressionViewable(callback) {\n      if (!googletag) {\n        console.error('googletag not exist!');\n        return;\n      }\n      googletag.cmd.push(function () {\n        googletag.pubads().addEventListener('impressionViewable', function (evt) {\n          var _AdMasterGlobal$globa3;\n          var slotId = AdMaster.getSlotEleId(evt.slot);\n          var localImpressionViewable = (_AdMasterGlobal$globa3 = AdMasterGlobal.globalHooksCallbackMap[slotId]) === null || _AdMasterGlobal$globa3 === void 0 ? void 0 : _AdMasterGlobal$globa3.impressionViewable;\n          localImpressionViewable === null || localImpressionViewable === void 0 || localImpressionViewable(evt);\n          callback === null || callback === void 0 || callback(evt);\n        });\n      });\n    }\n  }]);\n  return AdMasterGlobal;\n}();\n/**\n * 直译为 广告大师\n * 实例具有广告的基础能力\n */\n/** 存放全局的 slotRenderEnded hooks */\n_defineProperty(AdMasterGlobal, \"globalHooksCallbackMap\", {});\n/** 存储全部 AdMaster 实例 */\n_defineProperty(AdMasterGlobal, \"globalAllAdMaster\", []);\n_defineProperty(AdMasterGlobal, \"logger\", new Logger('Global Log'));\nvar AdMaster = /*#__PURE__*/function () {\n  function AdMaster(id, adUnit) {\n    var _this = this;\n    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    _classCallCheck(this, AdMaster);\n    /** 局部配置 */\n    _defineProperty(this, \"localConfig\", {});\n    /** 广告的唯一ID */\n    _defineProperty(this, \"adSlotId\", '');\n    /** 广告单元 */\n    _defineProperty(this, \"adUnit\", '');\n    /** 是否开启adsense测试模式 */\n    _defineProperty(this, \"adsenseTestMode\", false);\n    /** 是否展示受限广告 https://developers.google.com/publisher-tag/samples/display-limited-ad?hl=zh-cn */\n    _defineProperty(this, \"limitedAds\", false);\n    _defineProperty(this, \"globalConfig\", {});\n    _defineProperty(this, \"impressionViewable\", false);\n    _defineProperty(this, \"isEmpty\", false);\n    _defineProperty(this, \"adsenseUnfilled\", false);\n    _defineProperty(this, \"handleSlotRenderEnded\", function (evt) {\n      var isEmpty = evt.isEmpty;\n      if (isEmpty) {\n        _this.logger.setLog({\n          status: _types_index__WEBPACK_IMPORTED_MODULE_2__[\"ELoStatus\"].error,\n          title: 'adSlot isEmpty!!!'\n        });\n        _this.isEmpty = true;\n      }\n    });\n    _defineProperty(this, \"handleImpressionViewable\", function () {\n      _this.impressionViewable = true;\n      _this.logger.setLog({\n        title: 'ImpressionViewable'\n      });\n    });\n    this.adSlotId = id;\n    this.adUnit = adUnit;\n    this.localConfig = config;\n    var globalConfig = AdMasterGlobal.getInstance().getConfig();\n    this.globalConfig = globalConfig;\n    this.logger = new Logger(\"AdMaster logger - \".concat(this.adSlotId));\n    this.logger.setAdMaster(this);\n    this.initHooks();\n    this.initAdSlot();\n    AdMasterGlobal.globalAllAdMaster.push(this);\n  }\n\n  /**\n   * 初始化广告位\n   */\n  _createClass(AdMaster, [{\n    key: \"config\",\n    get: /** 当前广告的配置数据 */\n    function get() {\n      return deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(this.globalConfig, this.localConfig);\n    }\n  }, {\n    key: \"keyValue\",\n    get: function get() {\n      return this.localConfig.keyValue || this.globalConfig.keyValue || {};\n    }\n\n    /** 当前networkCode */\n  }, {\n    key: \"networkCode\",\n    get: function get() {\n      return this.localConfig.networkCode || this.globalConfig.networkCode;\n    }\n\n    /** 广告单元路径 */\n  }, {\n    key: \"adUnitPath\",\n    get: function get() {\n      return \"/\".concat(this.networkCode, \"/\").concat(this.adUnit);\n    }\n\n    /** 当前广告尺寸 */\n  }, {\n    key: \"size\",\n    get: function get() {\n      var defaultSize = [300, 250];\n      return this.config.size || defaultSize;\n    }\n\n    /** div 容器 */\n  }, {\n    key: \"adSlotWrap\",\n    get: function get() {\n      return document.querySelector(\"#\".concat(this.adSlotId));\n    }\n  }, {\n    key: \"initAdSlot\",\n    value: function initAdSlot() {\n      var _this2 = this;\n      var id = this.adSlotId;\n      googletag.cmd.push(function () {\n        var _googletag$defineSlot;\n        /** 开启 adsense 测试模式 */\n        if (_this2.adsenseTestMode) {\n          googletag.pubads().set('adsense_test_mode', 'on');\n        }\n        if (_this2.limitedAds) {\n          googletag.pubads().setPrivacySettings({\n            limitedAds: _this2.limitedAds\n          });\n        }\n        _this2.adSlot = (_googletag$defineSlot = googletag.defineSlot(_this2.adUnitPath, _this2.size, id)) === null || _googletag$defineSlot === void 0 ? void 0 : _googletag$defineSlot.addService(googletag.pubads());\n\n        /** 设置key-value */\n        Object.entries(_this2.keyValue).forEach(function (item) {\n          var _this2$adSlot;\n          var _item = _slicedToArray(item, 2),\n            key = _item[0],\n            value = _item[1];\n          (_this2$adSlot = _this2.adSlot) === null || _this2$adSlot === void 0 || _this2$adSlot.setTargeting(key, value);\n        });\n\n        /** 影响 ad exchange 广告的填充率 */\n        googletag.pubads().set('page_url', _this2.config.pageUrl || '');\n        // googletag.pubads().set('page_url', 'https://businessfocus.io')\n\n        googletag.enableServices();\n      });\n      var logger = this.logger;\n      /** 发起广告请求 */\n      googletag.cmd.push(function () {\n        logger.setLog({\n          title: 'googletag.display'\n        });\n        googletag.display(id);\n      });\n    }\n\n    /**\n     * 获取广告位的 element id\n     * @param slot 广告位数据\n     * @returns string\n     */\n  }, {\n    key: \"initHooks\",\n    value: function initHooks() {\n      var _this3 = this;\n      /** hooks 映射表 */\n      var hooksMap = {\n        slotRenderEnded: this.handleSlotRenderEnded.bind(this),\n        impressionViewable: this.handleImpressionViewable.bind(this)\n      };\n      Object.entries(hooksMap).forEach(function (item) {\n        var key = item[0];\n        var callback = item[1];\n        AdMasterGlobal.setHooks(_this3.adSlotId, key, function (evt) {\n          callback(evt);\n          var hooks = _this3.config.hooks;\n          var hooksItem = hooks === null || hooks === void 0 ? void 0 : hooks[key];\n          hooksItem === null || hooksItem === void 0 || hooksItem(evt);\n        });\n      });\n    }\n  }, {\n    key: \"destroySlots\",\n    value: function destroySlots() {\n      googletag.destroySlots([this.adSlot]);\n      if (this.adSlotWrap) {\n        this.adSlotWrap.innerHTML = '';\n      }\n    }\n  }, {\n    key: \"setAdsenseFilledStatus\",\n    value: function setAdsenseFilledStatus(status) {\n      this.adsenseUnfilled = !status;\n    }\n  }, {\n    key: \"enableAutoFrefresh\",\n    value: function enableAutoFrefresh() {\n      var _this4 = this;\n      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;\n      return setInterval(function () {\n        googletag.cmd.push(function () {\n          googletag.pubads().refresh([_this4.adSlot]);\n        });\n      }, time);\n    }\n  }], [{\n    key: \"getSlotEleId\",\n    value: function getSlotEleId(slot) {\n      return slot.getSlotElementId();\n    }\n  }, {\n    key: \"generateId\",\n    value: function generateId() {\n      return 'ad-id-' + Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"randomId\"])(6);\n    }\n\n    /** 获取对应的广告位配置 */\n  }, {\n    key: \"getAdUnit\",\n    value: function getAdUnit(key) {\n      var _adMasterGlobal$adUni;\n      var adMasterGlobal = AdMasterGlobal.getInstance();\n      return ((_adMasterGlobal$adUni = adMasterGlobal.adUnitMap) === null || _adMasterGlobal$adUni === void 0 ? void 0 : _adMasterGlobal$adUni[key]) || null;\n    }\n  }]);\n  return AdMaster;\n}();\n/**\n * 广告进入监控\n */\n/** 全局配置 */\n_defineProperty(AdMaster, \"globalConfig\", {});\nvar InterObserver = /*#__PURE__*/function () {\n  function InterObserver(ele) {\n    _classCallCheck(this, InterObserver);\n    _defineProperty(this, \"isEntered\", false);\n    _defineProperty(this, \"options\", {\n      rootMargin: '100px'\n      // threshold: [0.1, 0.2, 0.5, 0.8, 0.9, 1],\n    });\n\n    this.target = ele;\n    this.initObser();\n  }\n  _createClass(InterObserver, [{\n    key: \"initObser\",\n    value: function initObser() {\n      var _this5 = this;\n      this.observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            if (!_this5.isEntered) {\n              _this5.callback();\n              _this5.isEntered = true;\n            }\n          }\n        });\n      }, this.options);\n      this.observer.observe(this.target);\n    }\n  }, {\n    key: \"bindObserver\",\n    value: function bindObserver(callback) {\n      this.callback = callback;\n    }\n  }, {\n    key: \"destory\",\n    value: function destory() {\n      this.observer.unobserve(this.target);\n      this.observer.disconnect();\n    }\n  }]);\n  return InterObserver;\n}();\n\n\n//# sourceURL=webpack://ad-master/./src/ad-master/AdMaster.ts?");

/***/ }),

/***/ "./src/ad-master/types/index.ts":
/*!**************************************!*\
  !*** ./src/ad-master/types/index.ts ***!
  \**************************************/
/*! exports provided: ELogType, ELoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELogType\", function() { return ELogType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELoStatus\", function() { return ELoStatus; });\n/// <reference types=\"@types/google-publisher-tag\" />\n\nvar ELogType = /*#__PURE__*/function (ELogType) {\n  ELogType[\"hooks\"] = \"hooks\";\n  ELogType[\"console\"] = \"console\";\n  ELogType[\"loadScript\"] = \"loadScript\";\n  return ELogType;\n}({});\nvar ELoStatus = /*#__PURE__*/function (ELoStatus) {\n  ELoStatus[\"log\"] = \"log\";\n  ELoStatus[\"error\"] = \"error\";\n  ELoStatus[\"success\"] = \"success\";\n  return ELoStatus;\n}({});\n\n//# sourceURL=webpack://ad-master/./src/ad-master/types/index.ts?");

/***/ }),

/***/ "./src/ad-master/utils.ts":
/*!********************************!*\
  !*** ./src/ad-master/utils.ts ***!
  \********************************/
/*! exports provided: randomId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomId\", function() { return randomId; });\nvar randomId = function randomId() {\n  var leng = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;\n  var chart = 'abcdefghijklmnopqrstuvwxyz0123456789';\n  var list = new Array(leng).fill(null);\n  var id = list.reduce(function (id) {\n    var i = Math.floor(Math.random() * chart.length);\n    // eslint-disable-next-line no-return-assign\n    return id += chart[i];\n  }, '');\n  return id;\n};\n\n//# sourceURL=webpack://ad-master/./src/ad-master/utils.ts?");

/***/ }),

/***/ "./src/components/ad-slot.vue":
/*!************************************!*\
  !*** ./src/components/ad-slot.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad-slot.vue?vue&type=template&id=4de098f0&scoped=true& */ \"./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true&\");\n/* harmony import */ var _ad_slot_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-slot.vue?vue&type=script&lang=ts& */ \"./src/components/ad-slot.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true& */ \"./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ad_slot_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4de098f0\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ad-slot.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?");

/***/ }),

/***/ "./src/components/ad-slot.vue?vue&type=script&lang=ts&":
/*!*************************************************************!*\
  !*** ./src/components/ad-slot.vue?vue&type=script&lang=ts& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./ad-slot.vue?vue&type=script&lang=ts& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?");

/***/ }),

/***/ "./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=style&index=0&id=4de098f0&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_style_index_0_id_4de098f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?");

/***/ }),

/***/ "./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ad-slot.vue?vue&type=template&id=4de098f0&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ad-slot.vue?vue&type=template&id=4de098f0&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_slot_vue_vue_type_template_id_4de098f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://ad-master/./src/components/ad-slot.vue?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: AdMasterGlobal, AdMaster, InterObserver, AdSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ad_slot_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ad-slot.vue */ \"./src/components/ad-slot.vue\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AdSlot\", function() { return _components_ad_slot_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-master/AdMaster */ \"./src/ad-master/AdMaster.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AdMasterGlobal\", function() { return _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_1__[\"AdMasterGlobal\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AdMaster\", function() { return _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_1__[\"AdMaster\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InterObserver\", function() { return _ad_master_AdMaster__WEBPACK_IMPORTED_MODULE_1__[\"InterObserver\"]; });\n\n\n\n\n\n//# sourceURL=webpack://ad-master/./src/index.ts?");

/***/ })

/******/ });
});