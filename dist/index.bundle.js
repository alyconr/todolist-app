"use strict";
(self["webpackChunktodolist_app"] = self["webpackChunktodolist_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f351ed, #2058b2);
  padding: 10px;
}

.todo-head {
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 90%;
  gap: 10px;
  max-width: 500px;
  background: #e2dddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto 0;
}

.todo-head input {
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
  flex: 1;
  background: transparent;
  font-size: 30px;
  font-weight: 700;
  width: 80%;
  margin-top: -8px;
}

.col-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  background: #e2dddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto;
  flex: 1;
}

.row-head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.col-goal {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
}

.row-head h2 {
  font-size: 25px;
  font-weight: 500;
  color: #575454;
}

.col-goal h3 {
  font-size: 18px;
  font-weight: 400;
  color: #575454;
}

.row-goal {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.input-task {
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
  border-radius: 30px;
}

.row-input {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
}

.add {
  width: 50%;
}

.add-task-button {
  border: none;
  outline: none;
  padding: 10px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  background: #f17c23;
  border-radius: 40px;
}

.row-todo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  gap: 10px;
}

.row-todo h2 {
  font-size: 25px;
  font-weight: 500;
  color: #575454;
}

.task-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 5px;
  border-radius: 30px;
}

.list-tasks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tasks {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
}

.list {
  list-style: none;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
}

.btn-actions {
  background: transparent;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  width: 40px;
  height: 30px;
  align-items: center;
  border: none;
}

.li_actions {
  list-style: none;
  margin-left: 10px;
}

.unchecked {
  width: 30px;
  color: #e3aca6;
}

.dragging {
  border: 2px dashed #f17c23;
}

.dragover {
  border: 2px dashed #f17c23;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,qDAAqD;EACrD,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,OAAO;EACP,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;EAChB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,OAAO;EACP,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, #f351ed, #2058b2);\r\n  padding: 10px;\r\n}\r\n\r\n.todo-head {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n  width: 90%;\r\n  gap: 10px;\r\n  max-width: 500px;\r\n  background: #e2dddd;\r\n  border-radius: 5px;\r\n  padding: 20px;\r\n  margin: 20px auto 0;\r\n}\r\n\r\n.todo-head input {\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  flex: 1;\r\n  background: transparent;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  width: 80%;\r\n  margin-top: -8px;\r\n}\r\n\r\n.col-head {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  background: #e2dddd;\r\n  border-radius: 5px;\r\n  padding: 20px;\r\n  margin: 20px auto;\r\n  flex: 1;\r\n}\r\n\r\n.row-head {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.col-goal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.row-head h2 {\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  color: #575454;\r\n}\r\n\r\n.col-goal h3 {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #575454;\r\n}\r\n\r\n.row-goal {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.input-task {\r\n  border: none;\r\n  outline: none;\r\n  padding: 5px;\r\n  flex: 1;\r\n  border-radius: 30px;\r\n}\r\n\r\n.row-input {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 30px;\r\n}\r\n\r\n.add {\r\n  width: 50%;\r\n}\r\n\r\n.add-task-button {\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  background: #f17c23;\r\n  border-radius: 40px;\r\n}\r\n\r\n.row-todo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.row-todo h2 {\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  color: #575454;\r\n}\r\n\r\n.task-card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  background-color: #fff;\r\n  padding: 5px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.list-tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.tasks {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding-right: 10px;\r\n}\r\n\r\n.btn-actions {\r\n  background: transparent;\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 30px;\r\n  align-items: center;\r\n  border: none;\r\n}\r\n\r\n.li_actions {\r\n  list-style: none;\r\n  margin-left: 10px;\r\n}\r\n\r\n.unchecked {\r\n  width: 30px;\r\n  color: #e3aca6;\r\n}\r\n\r\n.dragging {\r\n  border: 2px dashed #f17c23;\r\n}\r\n\r\n.dragover {\r\n  border: 2px dashed #f17c23;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_TaskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TaskManager.js */ "./src/modules/TaskManager.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_images_icons8_cancel_48_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/icons8-cancel-48.png */ "./src/assets/images/icons8-cancel-48.png");
/* harmony import */ var _assets_images_icons8_save_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/icons8-save-48.png */ "./src/assets/images/icons8-save-48.png");
/* harmony import */ var _assets_images_icons8_bot_n_de_radio_sin_marcar_48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/icons8-botón-de-radio-sin-marcar-48.png */ "./src/assets/images/icons8-botón-de-radio-sin-marcar-48.png");
/* harmony import */ var _assets_images_icons8_ok_48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/icons8-ok-48.png */ "./src/assets/images/icons8-ok-48.png");
/* harmony import */ var _assets_images_icons8_editar_48_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/icons8-editar-48.png */ "./src/assets/images/icons8-editar-48.png");
/* harmony import */ var _assets_images_icons8_borrar_para_siempre_48_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/icons8-borrar-para-siempre-48.png */ "./src/assets/images/icons8-borrar-para-siempre-48.png");










// eslint-disable-next-line no-unused-vars
const taskManager = new _modules_TaskManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/modules/TaskManager.js":
/*!************************************!*\
  !*** ./src/modules/TaskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TaskManager {
  constructor() {
    this.tasks = [];
    this.attachEventListeners();
    this.loadTask();
  }

  addTask = (event) => {
    event.preventDefault();
    const taskDescriptionInput = document.getElementById('taskDescription').value;

    if (taskDescriptionInput.trim() === '') {
      const alertMessage = document.getElementById('alertMessage');
      alertMessage.textContent = 'Please enter a description for the task.';
      alertMessage.style.color = 'red';
      alertMessage.style.textAlign = 'center';
      alertMessage.style.display = 'block';
      return;
    }

    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'none';
    alertMessage.textContent = '';

    const task = {
      description: taskDescriptionInput,
    };

    this.tasks.push(task);
    this.renderTasks(task);
    this.saveTasktoLocalStorage();

    document.getElementById('taskDescription').value = '';
  };

  renderTasks = (task) => {
    const tasksListContainer = document.getElementById('tasksList');

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.draggable = true; // Enable drag functionality
    taskCard.addEventListener('dragstart', this.dragStart);
    taskCard.addEventListener('dragover', this.dragOver);
    taskCard.addEventListener('dragenter', this.dragEnter);
    taskCard.addEventListener('dragleave', this.dragLeave);
    taskCard.addEventListener('drop', this.drop);
    taskCard.addEventListener('dragend', this.dragEnd);

    const tasks = document.createElement('ul');
    tasks.className = 'tasks';
    const taskItem1 = document.createElement('li');
    taskItem1.className = 'list';
    taskItem1.textContent = task.description;
    const taskItem2 = document.createElement('li');
    taskItem2.className = 'list';
    const taskItem2Link = document.createElement('a');
    const taskItem2Image = document.createElement('img');
    taskItem2Image.className = 'unchecked';
    taskItem2Image.src = '/assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
    taskItem2Image.alt = 'unchecked';
    taskItem2Link.appendChild(taskItem2Image);
    taskItem2.appendChild(taskItem2Link);

    taskItem2Link.addEventListener('click', () => {
      if (taskItem2Image.classList.contains('unchecked')) {
        // Toggle to checked state
        taskItem2Image.src = '/assets/images/icons8-ok-48.png'; // Updated image path
        taskItem2Image.alt = 'checked';
        taskItem2Image.classList.remove('unchecked');
        taskItem1.style.textDecoration = 'line-through';
      } else {
        // Toggle to unchecked state
        taskItem2Image.src = '/assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
        taskItem2Image.alt = 'unchecked';
        taskItem2Image.addEventListener('mouseover', () => {
          taskItem2Image.style.cursor = 'pointer';
        });
        taskItem2Image.classList.add('unchecked');
        taskItem1.style.textDecoration = 'none';
      }
    });

    tasks.appendChild(taskItem1);
    tasks.appendChild(taskItem2);

    const actions = document.createElement('ul');
    actions.className = 'actions';
    const actionItemEdit = document.createElement('li');
    actionItemEdit.className = 'li_actions';
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn-actions';
    const imageEdit = document.createElement('img');
    imageEdit.src = '/assets/images/icons8-editar-48.png'; // Updated image path
    imageEdit.alt = 'button Edit';
    buttonEdit.appendChild(imageEdit);
    actionItemEdit.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', (event) => this.editTask(event));

    const actionItemDelete = document.createElement('li');
    actionItemDelete.className = 'li_actions';
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete btn-actions';
    const imageDelete = document.createElement('img');
    imageDelete.src = '/assets/images/icons8-borrar-para-siempre-48.png'; // Updated image path
    imageDelete.alt = 'button Delete';
    buttonDelete.appendChild(imageDelete);
    actionItemDelete.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', () => this.deleteTask(taskCard, task.description));

    actions.appendChild(actionItemEdit);
    actions.appendChild(actionItemDelete);

    taskCard.appendChild(tasks);
    taskCard.appendChild(actions);

    tasksListContainer.appendChild(taskCard);
  };

  editTask = (event) => {
    const targetTask = event.target.closest('.task-card');

    const taskDescription = targetTask.querySelector('.tasks .list');

    const taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.type = 'text';
    taskDescriptionInput.style.border = 'none';
    taskDescriptionInput.style.borderRadius = '5px';
    taskDescriptionInput.style.padding = '5px';
    taskDescriptionInput.style.backgroundColor = '#f2f2f2';

    taskDescriptionInput.value = taskDescription.textContent;

    const saveButton = document.createElement('button');
    saveButton.className = 'btn-actions';
    const saveImage = document.createElement('img');
    saveImage.style.width = '35px';
    saveImage.src = '/assets/images/icons8-save-48.png';
    saveImage.alt = 'button Save';
    saveButton.appendChild(saveImage);
    saveButton.addEventListener('click', () => this.saveTask(targetTask, taskDescription));

    const cancelButton = document.createElement('button');
    cancelButton.className = 'btn-actions';
    const cancelImage = document.createElement('img');
    cancelImage.style.width = '35px';
    cancelImage.src = '/assets/images/icons8-cancel-48.png';
    cancelImage.alt = 'button Cancel';
    cancelButton.appendChild(cancelImage);
    cancelButton.addEventListener('click', () => this.cancelTask(targetTask, taskDescription));

    taskDescription.textContent = '';
    taskDescription.appendChild(taskDescriptionInput);
    const actions = targetTask.querySelector('.actions');
    actions.textContent = '';
    actions.appendChild(saveButton);
    actions.appendChild(cancelButton);
  };

  deleteTask = (targetTask, taskDescription) => {
    targetTask.remove();

    const targetTaskIndex = this.tasks.findIndex(
      (task) => task.description === taskDescription
    );

    if (targetTaskIndex !== -1) {
      this.tasks.splice(targetTaskIndex, 1);
      this.saveTasktoLocalStorage();
    }
  };

  saveTask = (targetTask, taskDescription) => {
    const taskDescriptionInput = taskDescription.querySelector('input');
    const taskDescriptionText = taskDescriptionInput.value;

    if (taskDescriptionText) {
      taskDescription.textContent = taskDescriptionText;
    }

    const targetTaskIndex = Array.from(targetTask.parentNode.children).indexOf(
      targetTask
    );
    if (targetTaskIndex !== -1) {
      this.tasks[targetTaskIndex] = {
        description: taskDescriptionText,
      };
      this.saveTasktoLocalStorage();
    }

    window.location.reload();
  };

  cancelTask = (targetTask, taskDescription) => {
    const taskDescriptionInput = taskDescription.querySelector('input');
    const taskDescriptionText = taskDescriptionInput.value;

    if (taskDescriptionText) {
      taskDescription.textContent = taskDescriptionText;
    } else {
      targetTask.remove();
      const targetTaskIndex = Array.from(
        targetTask.parentNode.children
      ).indexOf(targetTask);
      if (targetTaskIndex !== -1) {
        this.tasks.splice(targetTaskIndex, 1);
        this.saveTasktoLocalStorage();
      }
    }
    window.location.reload();
  };

  loadTask = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.tasks.forEach((task) => this.renderTasks(task));
  };

  saveTasktoLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  attachEventListeners = () => {
    const addTaskForm = document.getElementById('taskForm');
    addTaskForm.addEventListener('submit', (event) => this.addTask(event));

    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach((card) => {
      card.addEventListener('dragstart', this.dragStart);
      card.addEventListener('dragover', this.dragOver);
      card.addEventListener('dragenter', this.dragEnter);
      card.addEventListener('dragleave', this.dragLeave);
      card.addEventListener('drop', this.drop);
      card.addEventListener('dragend', this.dragEnd);
    });
  };

  dragStart = (event) => {
    event.target.classList.add('dragging');
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  dragOver = (event) => {
    event.preventDefault();
  };

  dragEnter = (event) => {
    event.target.classList.add('dragover');
  };

  dragLeave = (event) => {
    event.target.classList.remove('dragover');
  };

  drop = (event) => {
    event.preventDefault();
    const draggedTaskId = event.dataTransfer.getData('text/plain');
    const draggedTask = document.getElementById(draggedTaskId);
    const dropZone = event.target.closest('.task-card');

    if (dropZone && draggedTask) {
      dropZone.classList.remove('dragover');
      dropZone.parentNode.insertBefore(draggedTask, dropZone.nextSibling);
    }
  };

  dragEnd = (event) => {
    event.target.classList.remove('dragging');
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskManager);


/***/ }),

/***/ "./src/assets/images/icons8-borrar-para-siempre-48.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/icons8-borrar-para-siempre-48.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-borrar-para-siempre-48.png";

/***/ }),

/***/ "./src/assets/images/icons8-botón-de-radio-sin-marcar-48.png":
/*!*******************************************************************!*\
  !*** ./src/assets/images/icons8-botón-de-radio-sin-marcar-48.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-botón-de-radio-sin-marcar-48.png";

/***/ }),

/***/ "./src/assets/images/icons8-cancel-48.png":
/*!************************************************!*\
  !*** ./src/assets/images/icons8-cancel-48.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-cancel-48.png";

/***/ }),

/***/ "./src/assets/images/icons8-editar-48.png":
/*!************************************************!*\
  !*** ./src/assets/images/icons8-editar-48.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-editar-48.png";

/***/ }),

/***/ "./src/assets/images/icons8-ok-48.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons8-ok-48.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-ok-48.png";

/***/ }),

/***/ "./src/assets/images/icons8-save-48.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons8-save-48.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/icons8-save-48.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/assets/css/style.css"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkZBQTJGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9UYXNrTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzNTFlZCwgIzIwNThiMik7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRvZG8taGVhZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTJkZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbn1cclxuXHJcbi50b2RvLWhlYWQgaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4uY29sLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmRkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnJvdy1oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2wtZ29hbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvdy1oZWFkIGgyIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzU3NTQ1NDtcclxufVxyXG5cclxuLmNvbC1nb2FsIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzU3NTQ1NDtcclxufVxyXG5cclxuLnJvdy1nb2FsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC10YXNrIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4ucm93LWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uYWRkIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYWRkLXRhc2stYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZjE3YzIzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5yb3ctdG9kbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucm93LXRvZG8gaDIge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNTc1NDU0O1xyXG59XHJcblxyXG4udGFzay1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5saXN0LXRhc2tzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4udGFza3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9ucyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpX2FjdGlvbnMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi51bmNoZWNrZWQge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbG9yOiAjZTNhY2E2O1xyXG59XHJcblxyXG4uZHJhZ2dpbmcge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE3YzIzO1xyXG59XHJcblxyXG4uZHJhZ292ZXIge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE3YzIzO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxREFBcUQ7RUFDckQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLE9BQU87RUFDUCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjM1MWVkLCAjMjA1OGIyKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTJkZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWQgaW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxyXFxufVxcclxcblxcclxcbi5jb2wtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2UyZGRkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5yb3ctaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbC1nb2FsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LWhlYWQgaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiAjNTc1NDU0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLWdvYWwgaDMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjNTc1NDU0O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LWdvYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2YxN2MyMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5yb3ctdG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yb3ctdG9kbyBoMiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6ICM1NzU0NTQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGFza3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hY3Rpb25zIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpX2FjdGlvbnMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udW5jaGVja2VkIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgY29sb3I6ICNlM2FjYTY7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2luZyB7XFxyXFxuICBib3JkZXI6IDJweCBkYXNoZWQgI2YxN2MyMztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE3YzIzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9UYXNrTWFuYWdlci5qcyc7XHJcbmltcG9ydCAgJy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pY29uczgtY2FuY2VsLTQ4LnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ljb25zOC1zYXZlLTQ4LnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ljb25zOC1ib3TDs24tZGUtcmFkaW8tc2luLW1hcmNhci00OC5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pY29uczgtb2stNDgucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbnM4LWVkaXRhci00OC5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pY29uczgtYm9ycmFyLXBhcmEtc2llbXByZS00OC5wbmcnO1xyXG5cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCB0YXNrTWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcigpO1xyXG4iLCJjbGFzcyBUYXNrTWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLmxvYWRUYXNrKCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XHJcblxyXG4gICAgaWYgKHRhc2tEZXNjcmlwdGlvbklucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgY29uc3QgYWxlcnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0TWVzc2FnZScpO1xyXG4gICAgICBhbGVydE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIGEgZGVzY3JpcHRpb24gZm9yIHRoZSB0YXNrLic7XHJcbiAgICAgIGFsZXJ0TWVzc2FnZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICBhbGVydE1lc3NhZ2Uuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIGFsZXJ0TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydE1lc3NhZ2UnKTtcclxuICAgIGFsZXJ0TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgYWxlcnRNZXNzYWdlLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbklucHV0LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnJlbmRlclRhc2tzKHRhc2spO1xyXG4gICAgdGhpcy5zYXZlVGFza3RvTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyVGFza3MgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza3NMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ2FyZC5jbGFzc05hbWUgPSAndGFzay1jYXJkJztcclxuICAgIHRhc2tDYXJkLmRyYWdnYWJsZSA9IHRydWU7IC8vIEVuYWJsZSBkcmFnIGZ1bmN0aW9uYWxpdHlcclxuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTtcclxuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlcik7XHJcbiAgICB0YXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmRyYWdFbnRlcik7XHJcbiAgICB0YXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XHJcbiAgICB0YXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wKTtcclxuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRhc2tzLmNsYXNzTmFtZSA9ICd0YXNrcyc7XHJcbiAgICBjb25zdCB0YXNrSXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFza0l0ZW0xLmNsYXNzTmFtZSA9ICdsaXN0JztcclxuICAgIHRhc2tJdGVtMS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCB0YXNrSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFza0l0ZW0yLmNsYXNzTmFtZSA9ICdsaXN0JztcclxuICAgIGNvbnN0IHRhc2tJdGVtMkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCB0YXNrSXRlbTJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgdGFza0l0ZW0ySW1hZ2UuY2xhc3NOYW1lID0gJ3VuY2hlY2tlZCc7XHJcbiAgICB0YXNrSXRlbTJJbWFnZS5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvaWNvbnM4LWJvdMOzbi1kZS1yYWRpby1zaW4tbWFyY2FyLTQ4LnBuZyc7IC8vIFVwZGF0ZWQgaW1hZ2UgcGF0aFxyXG4gICAgdGFza0l0ZW0ySW1hZ2UuYWx0ID0gJ3VuY2hlY2tlZCc7XHJcbiAgICB0YXNrSXRlbTJMaW5rLmFwcGVuZENoaWxkKHRhc2tJdGVtMkltYWdlKTtcclxuICAgIHRhc2tJdGVtMi5hcHBlbmRDaGlsZCh0YXNrSXRlbTJMaW5rKTtcclxuXHJcbiAgICB0YXNrSXRlbTJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGFza0l0ZW0ySW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCd1bmNoZWNrZWQnKSkge1xyXG4gICAgICAgIC8vIFRvZ2dsZSB0byBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgdGFza0l0ZW0ySW1hZ2Uuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2ljb25zOC1vay00OC5wbmcnOyAvLyBVcGRhdGVkIGltYWdlIHBhdGhcclxuICAgICAgICB0YXNrSXRlbTJJbWFnZS5hbHQgPSAnY2hlY2tlZCc7XHJcbiAgICAgICAgdGFza0l0ZW0ySW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgndW5jaGVja2VkJyk7XHJcbiAgICAgICAgdGFza0l0ZW0xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVG9nZ2xlIHRvIHVuY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgIHRhc2tJdGVtMkltYWdlLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9pY29uczgtYm90w7NuLWRlLXJhZGlvLXNpbi1tYXJjYXItNDgucG5nJzsgLy8gVXBkYXRlZCBpbWFnZSBwYXRoXHJcbiAgICAgICAgdGFza0l0ZW0ySW1hZ2UuYWx0ID0gJ3VuY2hlY2tlZCc7XHJcbiAgICAgICAgdGFza0l0ZW0ySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGFza0l0ZW0ySW1hZ2Uuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tJdGVtMkltYWdlLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZCcpO1xyXG4gICAgICAgIHRhc2tJdGVtMS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0l0ZW0xKTtcclxuICAgIHRhc2tzLmFwcGVuZENoaWxkKHRhc2tJdGVtMik7XHJcblxyXG4gICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdhY3Rpb25zJztcclxuICAgIGNvbnN0IGFjdGlvbkl0ZW1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGFjdGlvbkl0ZW1FZGl0LmNsYXNzTmFtZSA9ICdsaV9hY3Rpb25zJztcclxuICAgIGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkVkaXQuY2xhc3NOYW1lID0gJ2J0bi1hY3Rpb25zJztcclxuICAgIGNvbnN0IGltYWdlRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2VFZGl0LnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9pY29uczgtZWRpdGFyLTQ4LnBuZyc7IC8vIFVwZGF0ZWQgaW1hZ2UgcGF0aFxyXG4gICAgaW1hZ2VFZGl0LmFsdCA9ICdidXR0b24gRWRpdCc7XHJcbiAgICBidXR0b25FZGl0LmFwcGVuZENoaWxkKGltYWdlRWRpdCk7XHJcbiAgICBhY3Rpb25JdGVtRWRpdC5hcHBlbmRDaGlsZChidXR0b25FZGl0KTtcclxuICAgIGJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuZWRpdFRhc2soZXZlbnQpKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25JdGVtRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGFjdGlvbkl0ZW1EZWxldGUuY2xhc3NOYW1lID0gJ2xpX2FjdGlvbnMnO1xyXG4gICAgY29uc3QgYnV0dG9uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25EZWxldGUuY2xhc3NOYW1lID0gJ2RlbGV0ZSBidG4tYWN0aW9ucyc7XHJcbiAgICBjb25zdCBpbWFnZURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2VEZWxldGUuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2ljb25zOC1ib3JyYXItcGFyYS1zaWVtcHJlLTQ4LnBuZyc7IC8vIFVwZGF0ZWQgaW1hZ2UgcGF0aFxyXG4gICAgaW1hZ2VEZWxldGUuYWx0ID0gJ2J1dHRvbiBEZWxldGUnO1xyXG4gICAgYnV0dG9uRGVsZXRlLmFwcGVuZENoaWxkKGltYWdlRGVsZXRlKTtcclxuICAgIGFjdGlvbkl0ZW1EZWxldGUuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKTtcclxuICAgIGJ1dHRvbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlVGFzayh0YXNrQ2FyZCwgdGFzay5kZXNjcmlwdGlvbikpO1xyXG5cclxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYWN0aW9uSXRlbUVkaXQpO1xyXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhY3Rpb25JdGVtRGVsZXRlKTtcclxuXHJcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XHJcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuXHJcbiAgICB0YXNrc0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xyXG4gIH07XHJcblxyXG4gIGVkaXRUYXNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNhcmQnKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyAubGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjJmMmYyJztcclxuXHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcclxuXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4tYWN0aW9ucyc7XHJcbiAgICBjb25zdCBzYXZlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHNhdmVJbWFnZS5zdHlsZS53aWR0aCA9ICczNXB4JztcclxuICAgIHNhdmVJbWFnZS5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvaWNvbnM4LXNhdmUtNDgucG5nJztcclxuICAgIHNhdmVJbWFnZS5hbHQgPSAnYnV0dG9uIFNhdmUnO1xyXG4gICAgc2F2ZUJ1dHRvbi5hcHBlbmRDaGlsZChzYXZlSW1hZ2UpO1xyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2F2ZVRhc2sodGFyZ2V0VGFzaywgdGFza0Rlc2NyaXB0aW9uKSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2J0bi1hY3Rpb25zJztcclxuICAgIGNvbnN0IGNhbmNlbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjYW5jZWxJbWFnZS5zdHlsZS53aWR0aCA9ICczNXB4JztcclxuICAgIGNhbmNlbEltYWdlLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9pY29uczgtY2FuY2VsLTQ4LnBuZyc7XHJcbiAgICBjYW5jZWxJbWFnZS5hbHQgPSAnYnV0dG9uIENhbmNlbCc7XHJcbiAgICBjYW5jZWxCdXR0b24uYXBwZW5kQ2hpbGQoY2FuY2VsSW1hZ2UpO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jYW5jZWxUYXNrKHRhcmdldFRhc2ssIHRhc2tEZXNjcmlwdGlvbikpO1xyXG5cclxuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XHJcbiAgICBhY3Rpb25zLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZVRhc2sgPSAodGFyZ2V0VGFzaywgdGFza0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICB0YXJnZXRUYXNrLnJlbW92ZSgpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KFxyXG4gICAgICAodGFzaykgPT4gdGFzay5kZXNjcmlwdGlvbiA9PT0gdGFza0Rlc2NyaXB0aW9uXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0YXJnZXRUYXNrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRhcmdldFRhc2tJbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2F2ZVRhc2t0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNhdmVUYXNrID0gKHRhcmdldFRhc2ssIHRhc2tEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSB0YXNrRGVzY3JpcHRpb24ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvblRleHQgPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAodGFza0Rlc2NyaXB0aW9uVGV4dCkge1xyXG4gICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25UZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldFRhc2tJbmRleCA9IEFycmF5LmZyb20odGFyZ2V0VGFzay5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKFxyXG4gICAgICB0YXJnZXRUYXNrXHJcbiAgICApO1xyXG4gICAgaWYgKHRhcmdldFRhc2tJbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy50YXNrc1t0YXJnZXRUYXNrSW5kZXhdID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb25UZXh0LFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNhdmVUYXNrdG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgY2FuY2VsVGFzayA9ICh0YXJnZXRUYXNrLCB0YXNrRGVzY3JpcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gdGFza0Rlc2NyaXB0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25UZXh0ID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKHRhc2tEZXNjcmlwdGlvblRleHQpIHtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza0Rlc2NyaXB0aW9uVGV4dDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldFRhc2sucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IHRhcmdldFRhc2tJbmRleCA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgdGFyZ2V0VGFzay5wYXJlbnROb2RlLmNoaWxkcmVuXHJcbiAgICAgICkuaW5kZXhPZih0YXJnZXRUYXNrKTtcclxuICAgICAgaWYgKHRhcmdldFRhc2tJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXJnZXRUYXNrSW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRhc2t0b0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgbG9hZFRhc2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMucmVuZGVyVGFza3ModGFzaykpO1xyXG4gIH07XHJcblxyXG4gIHNhdmVUYXNrdG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgfTtcclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRm9ybScpO1xyXG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLmFkZFRhc2soZXZlbnQpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jYXJkJyk7XHJcbiAgICB0YXNrQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXIpO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuZHJhZ0VudGVyKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZSk7XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcCk7XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xyXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xyXG4gIH07XHJcblxyXG4gIGRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGRyYWdFbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdvdmVyJyk7XHJcbiAgfTtcclxuXHJcbiAgZHJhZ0xlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTtcclxuICB9O1xyXG5cclxuICBkcm9wID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZHJhZ2dlZFRhc2tJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICBjb25zdCBkcmFnZ2VkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnZWRUYXNrSWQpO1xyXG4gICAgY29uc3QgZHJvcFpvbmUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY2FyZCcpO1xyXG5cclxuICAgIGlmIChkcm9wWm9uZSAmJiBkcmFnZ2VkVGFzaykge1xyXG4gICAgICBkcm9wWm9uZS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnb3ZlcicpO1xyXG4gICAgICBkcm9wWm9uZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkcmFnZ2VkVGFzaywgZHJvcFpvbmUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRyYWdFbmQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=