"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/manga/[mangaId]/page",{

/***/ "(app-pages-browser)/./src/app/manga/[mangaId]/page.tsx":
/*!******************************************!*\
  !*** ./src/app/manga/[mangaId]/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Manga; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst baseUrl = \"https://api.mangadex.org\";\nconst axios = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/dist/browser/axios.cjs\");\nconst findObjectByType = (data, type)=>{\n    return Object.values(data).find((obj)=>obj.type === type);\n};\nfunction MangaDescription(param) {\n    let { id } = param;\n    _s();\n    const [manga, setManga] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchManga = async (id)=>{\n            var _findObjectByType;\n            const res = await axios({\n                method: \"GET\",\n                url: \"\".concat(baseUrl, \"/manga/\").concat(id),\n                params: {\n                    \"includes[]\": \"cover_art\"\n                }\n            });\n            const data = res.data.data;\n            console.log(data);\n            return {\n                id: data.id,\n                title: data.attributes.title.en,\n                description: data.attributes.description[0],\n                last_chapter: data.attributes.lastChapter,\n                cover_filename: (_findObjectByType = findObjectByType(data.relationships, \"cover_art\")) === null || _findObjectByType === void 0 ? void 0 : _findObjectByType.attributes.fileName\n            };\n        };\n        fetchManga(id).then((manga)=>{\n            setManga(manga);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(\"error fetching manga\");\n            setLoading(false);\n        });\n    }, [\n        id\n    ]);\n    if (!manga) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error while fetching manga\"\n        }, void 0, false, {\n            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n            lineNumber: 77,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: manga.cover_filename && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"manga-cover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://uploads.mangadex.org/covers/\".concat(manga.id, \"/\").concat(manga.cover_filename),\n                        alt: \"\".concat(manga.title, \" cover\"),\n                        width: 500\n                    }, void 0, false, {\n                        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Title : \",\n                            manga.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    manga.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Description:\"\n                            }, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            manga.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    manga.last_chapter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Last Chapter:\"\n                            }, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            manga.last_chapter\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(MangaDescription, \"WSd+LNbX02AskGgEtfRYhwt1oVQ=\");\n_c = MangaDescription;\nfunction Chapters(param) {\n    let { id } = param;\n    _s1();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [chapters, setChapters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchChapters = async (id)=>{\n            const res = await axios({\n                method: \"GET\",\n                url: \"\".concat(baseUrl, \"/manga/\").concat(id, \"/feed\"),\n                params: {\n                    offset: 96 * (page - 1),\n                    limit: 10,\n                    \"order[chapter]\": \"desc\",\n                    \"order[volume]\": \"desc\",\n                    translatedLanguage: [\n                        \"en\",\n                        \"fr\"\n                    ]\n                }\n            });\n            const chapters = res.data.data.map((chapter)=>{\n                return {\n                    id: chapter.id,\n                    chapter_number: chapter.attributes.chapter,\n                    language: chapter.attributes.translatedLanguage,\n                    title: chapter.attributes.title\n                };\n            });\n            return chapters;\n        };\n        fetchChapters(id).then((chapters)=>{\n            console.log(chapters);\n            setChapters(chapters);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(\"Error fetching chapters\");\n            setLoading(false);\n        });\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"\",\n                children: \"Chapters\"\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\",\n                children: chapters.map((chapter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/chapter/\".concat(chapter.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex flex-col justify-between p-6 border w-[25em] h-[6em]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Title:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                            lineNumber: 163,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        chapter.title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Chapter:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                            lineNumber: 166,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        chapter.chapter_number\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Language:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                            lineNumber: 169,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        chapter.language\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, chapter.id, true, {\n                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationPrevious, {\n                                href: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationLink, {\n                                href: \"#\",\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationEllipsis, {}, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 184,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationNext, {\n                                href: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                                lineNumber: 187,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                            lineNumber: 186,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s1(Chapters, \"ZE+EOvAz5YQI6JBC7YqA4o4mts4=\");\n_c1 = Chapters;\nfunction Manga(param) {\n    let { params } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center p-24 bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MangaDescription, {\n                id: params.mangaId\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chapters, {\n                id: params.mangaId\n            }, void 0, false, {\n                fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n                lineNumber: 199,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ybelatar/Projects/mango/src/app/manga/[mangaId]/page.tsx\",\n        lineNumber: 197,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Manga;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MangaDescription\");\n$RefreshReg$(_c1, \"Chapters\");\n$RefreshReg$(_c2, \"Manga\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuZ2EvW21hbmdhSWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ3NCO0FBU2Y7QUFtQnBDLE1BQU1XLFVBQVU7QUFDaEIsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUMsOEVBQU87QUFFN0IsTUFBTUMsbUJBQW1CLENBQUNDLE1BQWFDO0lBQ3JDLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ0gsTUFBTUksSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlKLElBQUksS0FBS0E7QUFDeEQ7QUFFQSxTQUFTSyxpQkFBaUIsS0FBc0I7UUFBdEIsRUFBRUMsRUFBRSxFQUFrQixHQUF0Qjs7SUFDeEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBMEI7SUFDNUQsTUFBTSxDQUFDc0IsU0FBU0MsV0FBVyxHQUFHdkIsK0NBQVFBLENBQVU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXlCLGFBQWEsT0FBT0w7Z0JBZ0JOUjtZQWZsQixNQUFNYyxNQUFNLE1BQU1oQixNQUFNO2dCQUN0QmlCLFFBQVE7Z0JBQ1JDLEtBQUssR0FBb0JSLE9BQWpCWCxTQUFRLFdBQVksT0FBSFc7Z0JBQ3pCUyxRQUFRO29CQUNOLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFFQSxNQUFNaEIsT0FBT2EsSUFBSWIsSUFBSSxDQUFDQSxJQUFJO1lBQzFCaUIsUUFBUUMsR0FBRyxDQUFDbEI7WUFDWixPQUFPO2dCQUNMTyxJQUFJUCxLQUFLTyxFQUFFO2dCQUNYWSxPQUFPbkIsS0FBS29CLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDRSxFQUFFO2dCQUMvQkMsYUFBYXRCLEtBQUtvQixVQUFVLENBQUNFLFdBQVcsQ0FBQyxFQUFFO2dCQUMzQ0MsY0FBY3ZCLEtBQUtvQixVQUFVLENBQUNJLFdBQVc7Z0JBQ3pDQyxjQUFjLEdBQUUxQixvQkFBQUEsaUJBQWlCQyxLQUFLMEIsYUFBYSxFQUFFLDBCQUFyQzNCLHdD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QU0sWUFBdUIsT0FBWEwsUUFBUTFDLEVBQUU7a0NBQ2hDLDRFQUFDZ0Q7NEJBRUN2QixXQUFVOzs4Q0FFViw4REFBQ0s7O3NEQUNDLDhEQUFDQztzREFBTzs7Ozs7O3dDQUFlO3dDQUFFVyxRQUFROUIsS0FBSzs7Ozs7Ozs4Q0FFeEMsOERBQUNrQjs7c0RBQ0MsOERBQUNDO3NEQUFPOzs7Ozs7d0NBQWlCO3dDQUFFVyxRQUFRQyxjQUFjOzs7Ozs7OzhDQUVuRCw4REFBQ2I7O3NEQUNDLDhEQUFDQztzREFBTzs7Ozs7O3dDQUFrQjt3Q0FBRVcsUUFBUUUsUUFBUTs7Ozs7Ozs7MkJBVnpDRixRQUFRMUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzBCQWdCdkIsOERBQUNsQixpRUFBVUE7MEJBQ1QsNEVBQUNDLHdFQUFpQkE7O3NDQUNoQiw4REFBQ0UscUVBQWNBO3NDQUNiLDRFQUFDRyx5RUFBa0JBO2dDQUFDMkQsTUFBSzs7Ozs7Ozs7Ozs7c0NBRTNCLDhEQUFDOUQscUVBQWNBO3NDQUNiLDRFQUFDQyxxRUFBY0E7Z0NBQUM2RCxNQUFLOzBDQUFJOzs7Ozs7Ozs7OztzQ0FFM0IsOERBQUM5RCxxRUFBY0E7c0NBQ2IsNEVBQUNELHlFQUFrQkE7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDQyxxRUFBY0E7c0NBQ2IsNEVBQUNFLHFFQUFjQTtnQ0FBQzRELE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7SUFwRlNmO01BQUFBO0FBc0ZNLFNBQVNpQixNQUFNLEtBQTJDO1FBQTNDLEVBQUV4QyxNQUFNLEVBQW1DLEdBQTNDO0lBQzVCLHFCQUNFLDhEQUFDeUM7UUFBS3pCLFdBQVU7OzBCQUNkLDhEQUFDMUI7Z0JBQWlCQyxJQUFJUyxPQUFPMEMsT0FBTzs7Ozs7OzBCQUNwQyw4REFBQ25CO2dCQUFTaEMsSUFBSVMsT0FBTzBDLE9BQU87Ozs7Ozs7Ozs7OztBQUdsQztNQVB3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYW5nYS9bbWFuZ2FJZF0vcGFnZS50c3g/ZGIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFBhZ2luYXRpb24sXG4gIFBhZ2luYXRpb25Db250ZW50LFxuICBQYWdpbmF0aW9uRWxsaXBzaXMsXG4gIFBhZ2luYXRpb25JdGVtLFxuICBQYWdpbmF0aW9uTGluayxcbiAgUGFnaW5hdGlvbk5leHQsXG4gIFBhZ2luYXRpb25QcmV2aW91cyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9wYWdpbmF0aW9uXCI7XG5cbi8vIGltcG9ydCB7IE1hbmdhUGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21hbmdhcGFnZVwiO1xuXG5pbnRlcmZhY2UgTWFuZ2FEZXNjcmlwdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYXN0X2NoYXB0ZXI/OiBzdHJpbmc7XG4gIGNvdmVyX2ZpbGVuYW1lPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2hhcHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGNoYXB0ZXJfbnVtYmVyOiBzdHJpbmc7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLm1hbmdhZGV4Lm9yZ1wiO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmNvbnN0IGZpbmRPYmplY3RCeVR5cGUgPSAoZGF0YTogYW55W10sIHR5cGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKChvYmopID0+IG9iai50eXBlID09PSB0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIE1hbmdhRGVzY3JpcHRpb24oeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkge1xuICBjb25zdCBbbWFuZ2EsIHNldE1hbmdhXSA9IHVzZVN0YXRlPE1hbmdhRGVzY3JpcHRpb24gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1hbmdhID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB1cmw6IGAke2Jhc2VVcmx9L21hbmdhLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgXCJpbmNsdWRlc1tdXCI6IFwiY292ZXJfYXJ0XCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICB0aXRsZTogZGF0YS5hdHRyaWJ1dGVzLnRpdGxlLmVuLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uWzBdLFxuICAgICAgICBsYXN0X2NoYXB0ZXI6IGRhdGEuYXR0cmlidXRlcy5sYXN0Q2hhcHRlcixcbiAgICAgICAgY292ZXJfZmlsZW5hbWU6IGZpbmRPYmplY3RCeVR5cGUoZGF0YS5yZWxhdGlvbnNoaXBzLCBcImNvdmVyX2FydFwiKVxuICAgICAgICAgID8uYXR0cmlidXRlcy5maWxlTmFtZSxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZldGNoTWFuZ2EoaWQpXG4gICAgICAudGhlbigobWFuZ2EpID0+IHtcbiAgICAgICAgc2V0TWFuZ2EobWFuZ2EpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZmV0Y2hpbmcgbWFuZ2FcIik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGlmICghbWFuZ2EpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvciB3aGlsZSBmZXRjaGluZyBtYW5nYTwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAge21hbmdhLmNvdmVyX2ZpbGVuYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmdhLWNvdmVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vdXBsb2Fkcy5tYW5nYWRleC5vcmcvY292ZXJzLyR7bWFuZ2EuaWR9LyR7bWFuZ2EuY292ZXJfZmlsZW5hbWV9YH1cbiAgICAgICAgICAgICAgYWx0PXtgJHttYW5nYS50aXRsZX0gY292ZXJgfVxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VGl0bGUgOiB7bWFuZ2EudGl0bGV9PC9wPlxuICAgICAgICB7bWFuZ2EuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz4ge21hbmdhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAge21hbmdhLmxhc3RfY2hhcHRlciAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkxhc3QgQ2hhcHRlcjo8L3N0cm9uZz4ge21hbmdhLmxhc3RfY2hhcHRlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2hhcHRlcnMoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbY2hhcHRlcnMsIHNldENoYXB0ZXJzXSA9IHVzZVN0YXRlPENoYXB0ZXJbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ2hhcHRlcnMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIHVybDogYCR7YmFzZVVybH0vbWFuZ2EvJHtpZH0vZmVlZGAsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG9mZnNldDogOTYgKiAocGFnZSAtIDEpLFxuICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICBcIm9yZGVyW2NoYXB0ZXJdXCI6IFwiZGVzY1wiLFxuICAgICAgICAgIFwib3JkZXJbdm9sdW1lXVwiOiBcImRlc2NcIixcbiAgICAgICAgICB0cmFuc2xhdGVkTGFuZ3VhZ2U6IFtcImVuXCIsIFwiZnJcIl0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2hhcHRlcnM6IENoYXB0ZXJbXSA9IHJlcy5kYXRhLmRhdGEubWFwKChjaGFwdGVyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGNoYXB0ZXIuaWQsXG4gICAgICAgICAgY2hhcHRlcl9udW1iZXI6IGNoYXB0ZXIuYXR0cmlidXRlcy5jaGFwdGVyLFxuICAgICAgICAgIGxhbmd1YWdlOiBjaGFwdGVyLmF0dHJpYnV0ZXMudHJhbnNsYXRlZExhbmd1YWdlLFxuICAgICAgICAgIHRpdGxlOiBjaGFwdGVyLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNoYXB0ZXJzO1xuICAgIH07XG5cbiAgICBmZXRjaENoYXB0ZXJzKGlkKVxuICAgICAgLnRoZW4oKGNoYXB0ZXJzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXB0ZXJzKTtcbiAgICAgICAgc2V0Q2hhcHRlcnMoY2hhcHRlcnMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY2hhcHRlcnNcIik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtwYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPkNoYXB0ZXJzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge2NoYXB0ZXJzLm1hcCgoY2hhcHRlcikgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhcHRlci8ke2NoYXB0ZXIuaWR9YH0+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtjaGFwdGVyLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTYgYm9yZGVyIHctWzI1ZW1dIGgtWzZlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRpdGxlOjwvc3Ryb25nPiB7Y2hhcHRlci50aXRsZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNoYXB0ZXI6PC9zdHJvbmc+IHtjaGFwdGVyLmNoYXB0ZXJfbnVtYmVyfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TGFuZ3VhZ2U6PC9zdHJvbmc+IHtjaGFwdGVyLmxhbmd1YWdlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPFBhZ2luYXRpb24+XG4gICAgICAgIDxQYWdpbmF0aW9uQ29udGVudD5cbiAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblByZXZpb3VzIGhyZWY9XCIjXCIgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uTGluayBocmVmPVwiI1wiPjE8L1BhZ2luYXRpb25MaW5rPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25FbGxpcHNpcyAvPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25OZXh0IGhyZWY9XCIjXCIgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICA8L1BhZ2luYXRpb25Db250ZW50PlxuICAgICAgPC9QYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5nYSh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBtYW5nYUlkOiBzdHJpbmcgfSB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjQgYmctbGlnaHRcIj5cbiAgICAgIDxNYW5nYURlc2NyaXB0aW9uIGlkPXtwYXJhbXMubWFuZ2FJZH0gLz5cbiAgICAgIDxDaGFwdGVycyBpZD17cGFyYW1zLm1hbmdhSWR9IC8+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnaW5hdGlvbiIsIlBhZ2luYXRpb25Db250ZW50IiwiUGFnaW5hdGlvbkVsbGlwc2lzIiwiUGFnaW5hdGlvbkl0ZW0iLCJQYWdpbmF0aW9uTGluayIsIlBhZ2luYXRpb25OZXh0IiwiUGFnaW5hdGlvblByZXZpb3VzIiwiYmFzZVVybCIsImF4aW9zIiwicmVxdWlyZSIsImZpbmRPYmplY3RCeVR5cGUiLCJkYXRhIiwidHlwZSIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJvYmoiLCJNYW5nYURlc2NyaXB0aW9uIiwiaWQiLCJtYW5nYSIsInNldE1hbmdhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaE1hbmdhIiwicmVzIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYXR0cmlidXRlcyIsImVuIiwiZGVzY3JpcHRpb24iLCJsYXN0X2NoYXB0ZXIiLCJsYXN0Q2hhcHRlciIsImNvdmVyX2ZpbGVuYW1lIiwicmVsYXRpb25zaGlwcyIsImZpbGVOYW1lIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInAiLCJzdHJvbmciLCJDaGFwdGVycyIsInBhZ2UiLCJzZXRQYWdlIiwiY2hhcHRlcnMiLCJzZXRDaGFwdGVycyIsImZldGNoQ2hhcHRlcnMiLCJvZmZzZXQiLCJsaW1pdCIsInRyYW5zbGF0ZWRMYW5ndWFnZSIsIm1hcCIsImNoYXB0ZXIiLCJjaGFwdGVyX251bWJlciIsImxhbmd1YWdlIiwiaDIiLCJ1bCIsImhyZWYiLCJsaSIsIk1hbmdhIiwibWFpbiIsIm1hbmdhSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/manga/[mangaId]/page.tsx\n"));

/***/ })

});