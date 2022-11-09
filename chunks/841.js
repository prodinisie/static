"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 8583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeReviewCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5732);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8234);
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16__);

















const ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((props)=>{
    const { expand , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
        ...other
    });
})(({ theme , expand  })=>({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    }));
function RecipeReviewCard({ values ,  }) {
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
            maxWidth: 345
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4___default()), {
                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9___default()), {
                    sx: {
                        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_12__.red[500]
                    },
                    "aria-label": "recipe",
                    children: values[1][0].toUpperCase()
                }),
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                    "aria-label": "settings",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_16___default()), {})
                }),
                title: values[1],
                // "Shrimp and Chorizo Paella"
                subheader: values[2]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default()), {
                component: "img",
                height: "194",
                image: "https://cdn2.hubspot.net/hubfs/263750/customer-base-marketing-2.png",
                alt: "Paella dish"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                    variant: "body2",
                    color: "text.secondary",
                    children: values[3]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                disableSpacing: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        "aria-label": "add to favorites",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        "aria-label": "share",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_14___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpandMore, {
                        expand: expanded,
                        onClick: handleExpandClick,
                        "aria-expanded": expanded,
                        "aria-label": "show more",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default()), {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default()), {
                in: expanded,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            paragraph: true,
                            children: "Method:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            paragraph: true,
                            children: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            paragraph: true,
                            children: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            paragraph: true,
                            children: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                            children: "Set aside off of the heat to let rest for 10 minutes, and then serve."
                        })
                    ]
                })
            })
        ]
    });
} // import * as React from 'react';
 // import Box from '@mui/material/Box';
 // import Card from '@mui/material/Card';
 // import CardActions from '@mui/material/CardActions';
 // import CardContent from '@mui/material/CardContent';
 // import Button from '@mui/material/Button';
 // import Typography from '@mui/material/Typography';
 // const bull = (
 //     <Box
 //         component="span"
 //         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
 //     >
 //         •
 //     </Box>
 // );
 // export default function BasicCard({
 //     values
 // }) {
 //     return (
 //         <Card sx={{ minWidth: 275 }}>
 //             <CardContent>
 //                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
 //                     {values[0]}
 //                     {/* Word of the Day */}
 //                 </Typography>
 //                 <Typography variant="h5" component="div">
 //                     {values[1]}
 //                     {/* be{bull}nev{bull}o{bull}lent */}
 //                 </Typography>
 //                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
 //                     {values[2]}
 //                     {/* adjective */}
 //                 </Typography>
 //                 <Typography variant="body2">
 //                     {values[3]}
 //                     {/* well meaning and kindly.
 //                     <br />
 //                     {'"a benevolent smile"'} */}
 //                 </Typography>
 //             </CardContent>
 //             <CardActions>
 //                 <Button size="small">Edit</Button>
 //             </CardActions>
 //         </Card>
 //     );
 // }


/***/ }),

/***/ 9362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _getModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _getModels__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _getModels__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

(__webpack_require__(5142).config)();

async function getData({ entityTypeName , id , returningProp ,  }) {
    let modelFieldKeys = [];
    if (typeof returningProp === "undefined") {
        modelFieldKeys = await (0,_getModels__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(entityTypeName.toUpperCase());
        console.log("model", modelFieldKeys);
    }
    ;
    let returning = typeof returningProp !== "undefined" ? returningProp : modelFieldKeys.join("\n");
    console.log("RETURNING:", returning);
    let query = `
        query Get${entityTypeName}(
            $id: bigint!,
            $attributes: [String!]
        ) {
            slug: ${entityTypeName.toLowerCase()}_by_pk(id: $id) {
                ${returning}
            }
        }`;
    let variables = {
        id: id
    };
    let config = {
        url: process.env.GQL_ENDPOINT,
        headers: {
            "x-hasura-admin-secret": process.env.GQL_ADMIN_SECRET
        },
        data: {
            query: query,
            variables: variables
        },
        method: "POST"
    };
    let response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
    if (response.data.errors) {
        console.log(response.data.errors);
    }
    console.log(response.data, "RES ERESRSPAOSNER");
    let results = response.data.data.slug;
    return results;
} //       customer_id: entity_id
 //       customer: organization {
 //         id
 //         name
 //       }
 //       name
 //       project_number
 //       description
 //       due_date
 //       brand_manager: account_manager {
 //         id
 //         first_name
 //         last_name
 //         email
 //       }
 //       brand_associate: project_manager {
 //         id
 //         first_name
 //         last_name
 //         email
 //       }
 //       contact: owner {
 //         id
 //         first_name
 //         last_name
 //         email
 //       }
 //       pipeline_stage {
 //         entity_pipeline_stage_id
 //         pipeline_id
 //         pipeline_name
 //         pipeline_stage_id
 //         stage_name
 //         effective_date
 //       }
 //       attributes(where: {attribute_code: {_in: $attributes}}) {
 //         attribute_id
 //         attribute_name
 //         attribute_code
 //         attribute_value
 //         field_type_id
 //         field_type
 //         field_type_code
 //         properties
 //         entity_attribute_id
 //       }
 //       tags {
 //         id
 //         name
 //         code
 //       }
 //       presentations: orders(where: {entity_type: {code: {_eq: "presentation"}}}) {
 //         id
 //         name
 //         entity_type {
 //           id
 //           name
 //           code
 //         }
 //         order_items {
 //           id
 //           name
 //           quantity
 //           price
 //         }
 //       }
 //       active
 //       created_at
 //       created_by: created_by_user {
 //         id
 //         first_name
 //         last_name
 //         email
 //       }
 //       updated_at
 //       updated_by: updated_by_user {
 //         id
 //         first_name
 //         last_name
 //         email
 //       }
 //     }
 //   }`

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;