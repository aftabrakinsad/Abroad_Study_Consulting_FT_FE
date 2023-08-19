"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/layout */ \"./pages/component/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/footer */ \"./pages/component/footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            setLoading(true);\n            if (response.data.exists) {\n                // Email exists in the database, proceed to login\n                const loginResponse = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/admin/signin\", {\n                    email,\n                    password\n                });\n                console.log(\"res: \" + loginResponse.data);\n                sessionStorage.setItem(\"email\", loginResponse.data);\n                router.push(\"/admin/dashboard\");\n            } else {\n                setError(\"Email not found\"); // Display error if email doesn't exist\n            }\n            setLoading(false);\n        } catch (error) {\n            console.log(\"error22: \" + error.message);\n            setError(\"Invalid login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-screen dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded w-full max-w-md dark:bg-gray-800 dark:border-gray-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold mb-4 text-center text-white\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-white text-sm font-medium mb-1\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300\",\n                                            placeholder: \"Enter your email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-white text-sm font-medium mb-1\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300\",\n                                            placeholder: \"Enter your password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 mt-2\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/signin.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SignIn, \"qQ5032n9fQ761FI6qDkI2OORGX0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1A7QUFDZ0I7QUFDRjtBQUNBO0FBRXpCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsU0FBU1gsc0RBQVNBO0lBRXhCLE1BQU1ZLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNGSixXQUFXO1lBRVgsSUFBSUssU0FBU0MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ3hCLGlEQUFpRDtnQkFDakQsTUFBTUMsZ0JBQWdCLE1BQU1wQixrREFBVSxDQUFDLHNDQUFzQztvQkFBRUs7b0JBQU9FO2dCQUFTO2dCQUMvRmUsUUFBUUMsR0FBRyxDQUFDLFVBQVVILGNBQWNGLElBQUk7Z0JBRXhDTSxlQUFlQyxPQUFPLENBQUMsU0FBU0wsY0FBY0YsSUFBSTtnQkFDbERMLE9BQU9hLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xoQixTQUFTLG9CQUFvQix1Q0FBdUM7WUFDdEU7WUFFQUUsV0FBVztRQUNiLEVBQUUsT0FBT0gsT0FBTztZQUNkYSxRQUFRQyxHQUFHLENBQUMsY0FBY2QsTUFBTWtCLE9BQU87WUFDdkNqQixTQUFTO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1QseURBQVFBO2dCQUFDMkIsT0FBTTs7Ozs7OzBCQUNoQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXFEOzs7Ozs7c0NBQ25FLDhEQUFDRTs0QkFBS0MsVUFBVW5COzs4Q0FDZCw4REFBQ2U7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FBTUosV0FBVTtzREFBNEM7Ozs7OztzREFDN0QsOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMTixXQUFVOzRDQUNWTyxhQUFZOzRDQUNaQyxPQUFPakM7NENBQ1BrQyxVQUFVLENBQUNDLElBQU1sQyxTQUFTa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7OENBRzVDLDhEQUFDVDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUFNSixXQUFVO3NEQUE0Qzs7Ozs7O3NEQUM3RCw4REFBQ0s7NENBQ0NDLE1BQUs7NENBQ0xOLFdBQVU7NENBQ1ZPLGFBQVk7NENBQ1pDLE9BQU8vQjs0Q0FDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFlBQVlnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHL0MsOERBQUNJO29DQUNDTixNQUFLO29DQUNMTixXQUFVOzhDQUFtRzs7Ozs7Ozs7Ozs7O3dCQUloSHJCLHVCQUFTLDhEQUFDa0M7NEJBQUViLFdBQVU7c0NBQXFCckI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdoRCw4REFBQ04seURBQU1BOzs7Ozs7O0FBR2I7R0F0RXdCQzs7UUFLUEYsa0RBQVNBOzs7S0FMRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE15TGF5b3V0IGZyb20gJy4vY29tcG9uZW50L2xheW91dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50L2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmV4aXN0cykge1xuICAgICAgICAvLyBFbWFpbCBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLCBwcm9jZWVkIHRvIGxvZ2luXG4gICAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vc2lnbmluJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBsb2dpblJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgbG9naW5SZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKCdFbWFpbCBub3QgZm91bmQnKTsgLy8gRGlzcGxheSBlcnJvciBpZiBlbWFpbCBkb2Vzbid0IGV4aXN0XG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IyMjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0RXJyb3IoJ0ludmFsaWQgbG9naW4nKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE15TGF5b3V0IHRpdGxlPVwiTG9naW5cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQgdy1mdWxsIG1heC13LW1kIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0xXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMzAwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1tZWRpdW0gbWItMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbXQtMlwiPntlcnJvcn08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTXlMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJTaWduSW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImRhdGEiLCJleGlzdHMiLCJsb2dpblJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwibWVzc2FnZSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n"));

/***/ })

});