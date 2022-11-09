"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CustomApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigation"
const BottomNavigation_namespaceObject = require("@mui/material/BottomNavigation");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigationAction"
const BottomNavigationAction_namespaceObject = require("@mui/material/BottomNavigationAction");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Folder"
const Folder_namespaceObject = require("@mui/icons-material/Folder");
;// CONCATENATED MODULE: external "@mui/icons-material/Restore"
const Restore_namespaceObject = require("@mui/icons-material/Restore");
var Restore_default = /*#__PURE__*/__webpack_require__.n(Restore_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/BottomNavigation.js










function LabelBottomNavigation({ navItemsProp ,  }) {
    const [value, setValue] = external_react_.useState("recents");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let navItems = [
        {
            label: "customers",
            value: "customers",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Restore_default()), {})
        },
        {
            label: "projects",
            value: "projects",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
        },
        {
            label: "profile",
            value: "profile",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {})
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigation_default()), {
            sx: {
                width: 500
            },
            value: value,
            onChange: handleChange,
            children: navItems.map((nvitm)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: nvitm.value,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: nvitm.value,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                            label: nvitm.label,
                            value: nvitm.value,
                            icon: nvitm.icon
                        }, nvitm.label + "nvaitm")
                    })
                }, "nav_link" + nvitm.value))
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.js
// import { withFronteggApp } from '@frontegg/nextjs';



function CustomApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LabelBottomNavigation, {})
        ]
    });
} // export default withFronteggApp(CustomApp,
 //   {
 //     hostedLoginBox: false,
 //     authOptions: {
 //       // keepSessionAlive: true // Uncomment this in order to maintain the session alive
 //     }
 //   });


/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(2552)));
module.exports = __webpack_exports__;

})();