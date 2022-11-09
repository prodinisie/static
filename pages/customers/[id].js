"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 1600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9362);
/* harmony import */ var lib_getDatas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4141);
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_getData__WEBPACK_IMPORTED_MODULE_2__, lib_getDatas__WEBPACK_IMPORTED_MODULE_3__]);
([lib_getData__WEBPACK_IMPORTED_MODULE_2__, lib_getDatas__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





let entityTypeName = "customers";
let singleQueryEntityTypeName = "organizations";
const model = [
    "customer_code",
    "account_manager",
    "active_project_count",
    "name",
    "id",
    "sales_rep",
    "stage_name", 
];
let returningProp = model.join(" ");
const model2 = [
    // 'customer_code',
    "account_manager { id first_name last_name }",
    // 'active_project_count',
    "name",
    "id",
    "sales_rep { id first_name last_name email }", 
];
let returningProp2 = model2.join(" ");
async function getStaticPaths() {
    let ids = await (0,lib_getDatas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        entityTypeName: entityTypeName,
        returningProp: returningProp
    });
    ids = ids.slice(0, 10);
    let paths = ids.map((m)=>({
            params: {
                id: m.id.toString()
            }
        }));
    return {
        paths: paths,
        fallback: false
    };
}
;
async function getStaticProps(context) {
    let data = await (0,lib_getData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        entityTypeName: singleQueryEntityTypeName,
        // entityTypeName: entityTypeName,
        id: context.params.id,
        returningProp: returningProp2
    });
    return {
        props: {
            data: data
        }
    };
}
;
function Page({ data  }) {
    console.log("DATA:", data, "\n::DATA");
    let subs = Object.keys(data).filter((f)=>data[f] && data[f].id).map((f)=>data[f].name ? data[f].name : data[f].first_name ? data[f].first_name + " " + data[f].last_name : "-");
    console.log(subs);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0px",
            left: "0px",
            backgroundColor: "azure"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: "400px",
                margin: "auto",
                marginTop: "2rem"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                values: [
                    data.id,
                    data.name,
                    subs[0],
                    subs[1],
                    "END",
                    data.name,
                    data.name, 
                ]
            })
        })
    });
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 6952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 8234:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Share");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [141,841], () => (__webpack_exec__(1600)));
module.exports = __webpack_exports__;

})();