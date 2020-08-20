(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin.pages"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editorjs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js");
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_code__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/paragraph */ "./node_modules/@editorjs/paragraph/dist/bundle.js");
/* harmony import */ var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_paragraph__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_embed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/table */ "./node_modules/@editorjs/table/dist/bundle.js");
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/raw */ "./node_modules/@editorjs/raw/dist/bundle.js");
/* harmony import */ var _editorjs_raw__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_raw__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js");
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var editorjs_inline_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! editorjs-inline-image */ "./node_modules/editorjs-inline-image/dist/bundle.js");
/* harmony import */ var editorjs_inline_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(editorjs_inline_image__WEBPACK_IMPORTED_MODULE_12__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  data: function data() {
    var _this = this;

    return {
      editor: null,
      config: {
        tools: {
          header: {
            "class": _editorjs_header__WEBPACK_IMPORTED_MODULE_2___default.a,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 3
            }
          },
          image: {
            "class": _editorjs_image__WEBPACK_IMPORTED_MODULE_11___default.a,
            config: {
              uploader: {
                uploadByFile: function uploadByFile(file) {
                  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                    var pFileReader;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            pFileReader = function _pFileReader(file) {
                              return new Promise(function (resolve, reject) {
                                var fr = new FileReader();
                                fr.onload = resolve; // CHANGE to whatever function you want which would eventually call resolve

                                fr.readAsDataURL(file);
                              });
                            };

                            _context.next = 3;
                            return pFileReader(file).then(function (e) {
                              return {
                                success: 1,
                                file: {
                                  url: e.target.result
                                }
                              };
                            });

                          case 3:
                            return _context.abrupt("return", _context.sent);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))();
                }
              }
            }
          },
          list: {
            "class": _editorjs_list__WEBPACK_IMPORTED_MODULE_3___default.a,
            inlineToolbar: true
          },
          code: {
            "class": _editorjs_code__WEBPACK_IMPORTED_MODULE_4___default.a
          },
          paragraph: {
            "class": _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_5___default.a
          },
          embed: {
            "class": _editorjs_embed__WEBPACK_IMPORTED_MODULE_6___default.a,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            "class": _editorjs_table__WEBPACK_IMPORTED_MODULE_7___default.a,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3
            }
          },
          raw: _editorjs_raw__WEBPACK_IMPORTED_MODULE_8___default.a,
          quote: {
            "class": _editorjs_quote__WEBPACK_IMPORTED_MODULE_9___default.a,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author'
            }
          },
          delimiter: _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10___default.a
        },
        onReady: function onReady() {
          console.log('on ready');
        },
        onChange: function onChange(_ref) {
          var saver = _ref.saver;
          saver.save().then(function (outputData) {
            _this.$emit('input', outputData);
          })["catch"](function (error) {
            console.log('Saving failed: ', error);
          });
        },
        data: this.value
      }
    };
  },
  methods: {
    onInitialized: function onInitialized(editor) {
      console.log(editor);
    },
    processImageUpload: function processImageUpload(file) {
      console.log(file);
      return {
        url: ''
      };
    }
  },
  created: function created() {
    this.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1___default.a(this.config);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Editorjs */ "./resources/js/components/Editorjs.vue");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  components: {
    editor: _components_Editorjs__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Yes, got title huh?',
      content: {
        "time": 1597894788371,
        "blocks": [{
          "type": "header",
          "data": {
            "text": "Editor.js",
            "level": 2
          }
        }, {
          "type": "paragraph",
          "data": {
            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
          }
        }, {
          "type": "image",
          "data": {
            "file": {
              "url": "data:image/png;base64,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... (10025 total length)"
            },
            "caption": "Esta imagem vale mais que mil palavrs?",
            "withBorder": false,
            "stretched": true,
            "withBackground": false
          }
        }],
        "version": "2.18.0"
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cdx-list--unordered {\n   list-style: none;\n}\n.cdx-list {\n  padding-left: 0;\n}\n.ce-block__content {\n  max-width: none;\n  margin: auto;\n}\n.ce-delimiter:before {\n  font-size: 18px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Editorjs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "prose", attrs: { id: "editorjs" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("label", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.title,
            expression: "title"
          }
        ],
        staticClass: "text-3xl py-2 rounded",
        attrs: { placeholder: "Page Title Goes Here...", type: "text" },
        domProps: { value: _vm.title },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.title = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("editor", {
          model: {
            value: _vm.content,
            callback: function($$v) {
              _vm.content = $$v
            },
            expression: "content"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex justify-between" },
      [
        _c("h1", { staticClass: "text-2xl font-bold " }, [_vm._v("Pages")]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/admin/pages/create" } }, [
          _vm._v("Add")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "flex-1 max-w-3xl" }, [
      _c("div", [
        _c("div", { staticClass: "flex flex-col" }, [
          _c(
            "div",
            {
              staticClass:
                "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-md border-b border-gray-200"
                },
                [
                  _c(
                    "table",
                    { staticClass: "min-w-full divide-y divide-gray-200" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        { staticClass: "bg-white divide-y divide-gray-200" },
                        [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass:
                                  "px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "flex-shrink-0 h-10 w-10"
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            staticClass: "h-10 w-10",
                                            attrs: {
                                              viewBox: "0 0 128 128",
                                              xmlns:
                                                "http://www.w3.org/2000/svg"
                                            }
                                          },
                                          [
                                            _c("circle", {
                                              attrs: {
                                                cx: "64",
                                                cy: "63.997",
                                                fill: "#fedb41",
                                                r: "39.247"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "g",
                                              { attrs: { fill: "#fea832" } },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d:
                                                      "M95.247 65.747A1.749 1.749 0 0193.5 64 29.53 29.53 0 0064 34.5a1.75 1.75 0 010-3.5 33.035 33.035 0 0133 33 1.749 1.749 0 01-1.753 1.747zM64 16.75a47.252 47.252 0 018.5.781c.038-.545.063-1.1.063-1.658C72.562 8.072 64 1.747 64 1.747s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658A47.243 47.243 0 0164 16.75zM64 111.244a47.343 47.343 0 008.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 008.498.78zM97.409 30.588a47.349 47.349 0 015.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 016.562 5.457zM30.591 97.406a47.232 47.232 0 006.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934S18.4 97.488 23.917 91.971c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 005.457 6.562zM111.247 64a47.335 47.335 0 01-.78 8.5 23.71 23.71 0 001.657.064c7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 01.78 8.498zM16.753 64a47.335 47.335 0 00.78 8.5c-.544.038-1.1.064-1.657.064C8.075 72.56 1.75 64 1.75 64s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 00-.78 8.499zM97.409 97.406a47.349 47.349 0 01-6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 01-5.457 6.562zM30.591 30.588a47.349 47.349 0 00-5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 00-6.562 5.457z"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "ml-4 text-sm leading-5 font-medium text-gray-900"
                                      },
                                      [
                                        _vm._v(
                                          "\n                      About me\n                    "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._m(2)
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          },
          [_vm._v("\n                  Name\n                ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          },
          [_vm._v("\n                  Last Updated\n                ")]
        ),
        _vm._v(" "),
        _c("th", {
          staticClass: "px-4 py-3 border-b border-gray-200 bg-gray-50"
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      { staticClass: "px-4 py-4 whitespace-no-wrap border-b border-gray-200" },
      [
        _c(
          "span",
          {
            staticClass:
              "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          },
          [_vm._v("\n                  18/08/2020\n                ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass:
          "px-4 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
      },
      [
        _c(
          "a",
          {
            staticClass: "text-indigo-600 hover:text-indigo-900",
            attrs: { href: "#" }
          },
          [_vm._v("Edit")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Editorjs.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Editorjs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editorjs.vue?vue&type=template&id=0243f1e1& */ "./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1&");
/* harmony import */ var _Editorjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editorjs.vue?vue&type=script&lang=js& */ "./resources/js/components/Editorjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editorjs.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Editorjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Editorjs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Editorjs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Editorjs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Editorjs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Editorjs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Editorjs.vue?vue&type=template&id=0243f1e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Editorjs.vue?vue&type=template&id=0243f1e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editorjs_vue_vue_type_template_id_0243f1e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/pages/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/pages/create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=1df4ae10& */ "./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/pages/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=1df4ae10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/create.vue?vue&type=template&id=1df4ae10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1df4ae10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/pages/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/pages/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=95462b24& */ "./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=95462b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/pages/index.vue?vue&type=template&id=95462b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_95462b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);