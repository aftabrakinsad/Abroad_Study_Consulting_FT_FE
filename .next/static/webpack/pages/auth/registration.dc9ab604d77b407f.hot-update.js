"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/registration",{

/***/ "./pages/auth/registration.js":
/*!************************************!*\
  !*** ./pages/auth/registration.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _component_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/footer */ \"./pages/component/footer.js\");\n/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/layout */ \"./pages/component/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [registrationSuccess, setRegistrationSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/admin/signup\", {\n                username,\n                email,\n                password,\n                address\n            });\n            console.log(\"Registration response:\", response.data);\n            if (response.status === 200) {\n                alert(\"Registration successful\");\n            } else {\n                alert(\"Registration failed\");\n            }\n        // Handle success, perhaps redirect to a success page\n        } catch (error) {\n            console.error(\"Registration error:\", error);\n        // Handle error, display a message to the user, etc.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Registration\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-screen dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full max-w-sm p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl mb-4 text-white text-center\",\n                            children: \"Registration On Board\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-gray-700 font-medium mb-1 text-white\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    className: \"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-gray-700 font-medium mb-1 text-white\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    className: \"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-gray-700 font-medium mb-1 text-white\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"address\",\n                                    className: \"block text-gray-700 font-medium mb-1\",\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"address\",\n                                    className: \"w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500\",\n                                    value: address,\n                                    onChange: (e)=>setAddress(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300\",\n                            onClick: handleSubmit,\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RegistrationForm, \"/t6ggdy/Dogsnp7ntwkPiz4JHTw=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZWdpc3RyYXRpb24uanM/ODY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvZm9vdGVyJztcbmltcG9ydCBNeUxheW91dCBmcm9tICcuLi9jb21wb25lbnQvbGF5b3V0JztcblxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVnaXN0cmF0aW9uU3VjY2Vzcywgc2V0UmVnaXN0cmF0aW9uU3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkbWluL3NpZ251cCcsIHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygnUmVnaXN0cmF0aW9uIHJlc3BvbnNlOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgYWxlcnQoJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJyk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGFsZXJ0KCdSZWdpc3RyYXRpb24gZmFpbGVkJyk7XG4gICAgICB9XG4gICAgICAvLyBIYW5kbGUgc3VjY2VzcywgcGVyaGFwcyByZWRpcmVjdCB0byBhIHN1Y2Nlc3MgcGFnZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdSZWdpc3RyYXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgLy8gSGFuZGxlIGVycm9yLCBkaXNwbGF5IGEgbWVzc2FnZSB0byB0aGUgdXNlciwgZXRjLlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE15TGF5b3V0IHRpdGxlPVwiUmVnaXN0cmF0aW9uXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBwLTYgYmctd2hpdGUgcm91bmRlZC1sZyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+UmVnaXN0cmF0aW9uIE9uIEJvYXJkPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTEgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICBBZGRyZXNzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlJlZ2lzdGVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRm9vdGVyIiwiTXlMYXlvdXQiLCJSZWdpc3RyYXRpb25Gb3JtIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJyZWdpc3RyYXRpb25TdWNjZXNzIiwic2V0UmVnaXN0cmF0aW9uU3VjY2VzcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiYWxlcnQiLCJlcnJvciIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/registration.js\n"));

/***/ })

});