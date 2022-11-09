"use strict";
exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 4141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getDatas)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _getModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _getModels__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _getModels__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


(__webpack_require__(5142).config)();
async function getDatas({ entityTypeName , modelEntityTypeCode , returningProp , limitProp ,  }) {
    let modelFieldKeys = [];
    if (typeof returningProp === "undefined") {
        let modelParam = typeof modelEntityTypeCode !== "undefined" ? modelEntityTypeCode : entityTypeName.toUpperCase();
        modelFieldKeys = await (0,_getModels__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(modelParam);
        modelFieldKeys = modelFieldKeys.filter((f)=>!/active|acumatica|anonymized_at|archived_at|created_by|entity_type/i.test(f));
        console.log("model", modelFieldKeys, modelParam);
    }
    let returning = typeof returningProp !== "undefined" ? returningProp : modelFieldKeys.join(" ");
    const query = `query Get${entityTypeName[0].toUpperCase() + entityTypeName.slice(1)} {
        slug: ${entityTypeName}
            (${typeof limitProp !== "undefined" ? "limit: " + limitProp + ", " : ""}order_by: {created_at: desc}) {
                ${returning}
            }
        }`;
    // id
    // name
    let config = {
        url: process.env.GQL_ENDPOINT,
        headers: {
            "x-hasura-admin-secret": process.env.GQL_ADMIN_SECRET
        },
        data: {
            query: query
        },
        method: "POST"
    };
    try {
        let response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
        // console.log('response', response);
        if (response.data.errors) {
            console.log(response.data.errors);
        }
        let results = response.data.data.slug;
        return results;
    } catch (e) {
        console.log(e);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getModels)
/* harmony export */ });
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
    let response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
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
const queryModelByEntityType = `
    query GetModelsByEntityType($_ilike: String = "") {
        slug: entity_types(limit: 1, where: {code: {_ilike: $_ilike}}) {
            code
            model {
                field_key
            }
        }
    }`;
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

/***/ })

};
;