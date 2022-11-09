"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

(__webpack_require__(5142).config)();
async function getModels(entityTypeCode) {
    // console.log('process.env', process.env);
    let config = {
        url: process.env.GQL_ENDPOINT,
        headers: {
            "x-hasura-admin-secret": process.env.GQL_ADMIN_SECRET
        },
        data: {
            query: queryModelByEntityType,
            variables: {
                _ilike: entityTypeCode
            }
        },
        method: "POST"
    };
    let response = await axios(config);
    let results = response.data.data.slug[0].model.map((m)=>m.field_key);
    // const getNestedArrayFirstLast = [
    //     'sales_rep_id',
    //     'account_manager_id',
    // ];
    const getNestedFullname = [
        "entity_type_id"
    ];
    let expandedResults = results.map((m)=>// getNestedArrayFirstLast.includes(m)
        //     ?
        //      `${m.replace('_id', '')} {
        //             id
        //             first_name
        //             last_name
        //         }`
        //     : 
        getNestedFullname.includes(m) ? `${m.replace("_id", "")} {
                        id
                        name
                    }` : m);
    return expandedResults;
}
const queryModelByEntityType = (/* unused pure expression or super */ null && (`
    query GetModelsByEntityType($_ilike: String = "") {
        slug: entity_types(limit: 1, where: {code: {_ilike: $_ilike}}) {
            code
            model {
                field_key
            }
        }
    }`));
// model {
//     field_key
//     field_name
//     field_type
//     description
//     required
//     hidden
// }
const variablesModelByEntityType = (/* unused pure expression or super */ null && ([
    "ORGANIZATIONS",
    // 'VENDORS',
    // 'CUSTOMER',
    "PROJECTS",
    // 'ORDERS',
    // 'FILE',
    // 'USERS',
    // 'BRAND',
    "PRODUCTS", 
]));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_getModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_getModels__WEBPACK_IMPORTED_MODULE_0__]);
lib_getModels__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    try {
        let response = await getCustomers();
        console.log(response, "testRESPOSNE");
        res.status(200).json(response.map((m)=>m.id));
    } catch (e) {
        console.log(e);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3616));
module.exports = __webpack_exports__;

})();