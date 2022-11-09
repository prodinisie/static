"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getCustomers)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

(__webpack_require__(5142).config)();
console.log(process.env);
async function getCustomers(id) {
    // console.log('process.env', process.env);
    let config = {
        url: process.env.GQL_ENDPOINT,
        headers: {
            "x-hasura-admin-secret": process.env.GQL_ADMIN_SECRET
        },
        data: {
            query: `query GetCustomers($condition: customers_bool_exp!, $offset: Int!, $order_by: [customers_order_by!]!) {
                customers(where: $condition, 
                          offset: $offset,
                          order_by: $order_by) {
                  id
                  name
                  customer_code
                  stage_name
                  parent_id
                  parent
                  owner_id
                  owner
                  sales_rep_id
                  sales_rep
                  brand_manager_id: account_manager_id
                  brand_manager: account_manager
                  users {
                    user_id
                    user_type
                    user_type_code
                    first_name
                    last_name
                    email
                    phone
                    role_code
                  }
                  active_project_count
                  created_at
                }
              }`,
            variables: {
                "condition": {
                    "_and": [
                        {
                            "name": {
                                "_ilike": "%%"
                            }
                        }, 
                    ]
                },
                "offset": 0,
                "order_by": {
                    "created_at": "desc"
                }
            }
        },
        method: "POST"
    };
    console.log("ID", id);
    if (typeof id !== "undefined") {
        config.data.variables.condition._and.push({
            id: {
                "_eq": id
            }
        });
    }
    ;
    console.log(config);
    let response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
    console.log("ID", id, response.data, "response.data.data");
    return response.data.data.customers.slice(0, 40);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_getCustomers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_getCustomers__WEBPACK_IMPORTED_MODULE_0__]);
lib_getCustomers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    try {
        let response = await (0,lib_getCustomers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
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
var __webpack_exports__ = (__webpack_exec__(181));
module.exports = __webpack_exports__;

})();