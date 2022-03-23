self["webpackHotUpdateindex"]("index",{

/***/ "./dist/funcs/index.js":
/*!*****************************!*\
  !*** ./dist/funcs/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callFunc": () => (/* binding */ callFunc)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! C:\Users\admin\AppData\Roaming\npm\node_modules\@tencent\wuji-cli\node_modules\@pmmmwh\react-refresh-webpack-plugin\lib\runtime\RefreshUtils.js */ "C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\@tencent\\wuji-cli\\node_modules\\@pmmmwh\\react-refresh-webpack-plugin\\lib\\runtime\\RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! C:\Users\admin\AppData\Roaming\npm\node_modules\@tencent\wuji-cli\node_modules\react-refresh\runtime.js */ "C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\@tencent\\wuji-cli\\node_modules\\react-refresh\\runtime.js");

const funcObj = {
  'get_integral_data': {
    id: 'get_integral_data'
  },
  '/func/get_integral_data_GET': {
    id: '/func/get_integral_data_GET'
  },
  'update_point_data': {
    id: 'update_point_data'
  },
  '/func/update_point_data_GET': {
    id: '/func/update_point_data_GET'
  }
};
const apis = Object.keys(funcObj);
const callFunc = (api, axiosOptions) => {
  if (!apis.includes(api)) {
    throw new Error(`api "${api}" is not exist`);
  }

  const utilsLoader = window.utilsLoader;

  if (!utilsLoader || !utilsLoader.load) {
    throw new Error(`window.utilsLoader is not defined.`);
  }

  const scfLoader = utilsLoader.load('scfLoader');

  if (!scfLoader) {
    throw new Error(`"scfLoader" is not defined in "window.utilsLoader"`);
  }

  return scfLoader.callFunc({
    debuging: true,
    funcName: api,
    host: "127.0.0.1:9998",
    projectId: "qb_prop_conf"
  }, axiosOptions);
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5b8a211d10f650cb3993")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f40e5a7ea047e3b33cac.hot-update.js.map