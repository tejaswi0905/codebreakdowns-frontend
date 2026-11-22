globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon-v2.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1855e-w6eqltaFMhKjrlCACdEFOtmjzYs\"",
		"mtime": "2026-07-23T07:51:21.560Z",
		"size": 99678,
		"path": "../public/favicon-v2.ico"
	},
	"/assets/about-BS0v_FKo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e55b-QRommImyTRFZsx0k5jCv7n+tpVw\"",
		"mtime": "2026-11-22T07:22:56.526Z",
		"size": 124251,
		"path": "../public/assets/about-BS0v_FKo.js"
	},
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/accordion-C3IO_5cf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a15-CaceFm3WosFKQsWsDfxe11G2WCc\"",
		"mtime": "2026-11-22T07:22:56.527Z",
		"size": 6677,
		"path": "../public/assets/accordion-C3IO_5cf.js"
	},
	"/assets/arrow-left-B99rnX6Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-zLVM8AqEq53Mq8ZoH6N4wN6D5Iw\"",
		"mtime": "2026-11-22T07:22:56.528Z",
		"size": 154,
		"path": "../public/assets/arrow-left-B99rnX6Z.js"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"71029-mNvRFe2x/7bNjMcanMxwZvR2y88\"",
		"mtime": "2026-10-22T13:39:26.973Z",
		"size": 462889,
		"path": "../public/og-image.png"
	},
	"/assets/arrow-right-CJ9Ca85R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UYijJrvwpScgTKL/mhJcZt26vWY\"",
		"mtime": "2026-11-22T07:22:56.529Z",
		"size": 154,
		"path": "../public/assets/arrow-right-CJ9Ca85R.js"
	},
	"/assets/badge-jQY4tIIL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303-HrdnVmYMcraucbJsKTlvc1eEbnc\"",
		"mtime": "2026-11-22T07:22:56.532Z",
		"size": 771,
		"path": "../public/assets/badge-jQY4tIIL.js"
	},
	"/assets/card-DGokSew5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fc-jrLkFWkPNqYTaDkT00JIUZ9MsJo\"",
		"mtime": "2026-11-22T07:22:56.537Z",
		"size": 1020,
		"path": "../public/assets/card-DGokSew5.js"
	},
	"/assets/book-open-DQgXc9P3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-OVetQVTTCCsFgY1hQDL/7lVAD+0\"",
		"mtime": "2026-11-22T07:22:56.535Z",
		"size": 268,
		"path": "../public/assets/book-open-DQgXc9P3.js"
	},
	"/assets/bookmark-BxA_JfZH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db-ODfKW5qIxYuryHwvNzDdBTsoQV8\"",
		"mtime": "2026-11-22T07:22:56.536Z",
		"size": 219,
		"path": "../public/assets/bookmark-BxA_JfZH.js"
	},
	"/assets/circle-alert-c44tYh_O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-qrdBipQZuxwFnQp6kGagX/6Dc10\"",
		"mtime": "2026-11-22T07:22:56.539Z",
		"size": 239,
		"path": "../public/assets/circle-alert-c44tYh_O.js"
	},
	"/assets/circle-check-Bk4f-QDQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-+jQ10ccJYqpdXmqP4f0KwDvsZGM\"",
		"mtime": "2026-11-22T07:22:56.539Z",
		"size": 167,
		"path": "../public/assets/circle-check-Bk4f-QDQ.js"
	},
	"/assets/clock-u0zeT_8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-ebY2GsApqKfTw2XZtc1ej8OEjeQ\"",
		"mtime": "2026-11-22T07:22:56.540Z",
		"size": 158,
		"path": "../public/assets/clock-u0zeT_8Y.js"
	},
	"/assets/contact-C3TF5GUZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa8-6vDd8MKxEXk1VLXdjhu76Dfgu+A\"",
		"mtime": "2026-11-22T07:22:56.541Z",
		"size": 8104,
		"path": "../public/assets/contact-C3TF5GUZ.js"
	},
	"/assets/courses-CFOSGIuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ad60-AzEenM4HWKEZ6VlUHiKUgxmopGM\"",
		"mtime": "2026-11-22T07:22:56.544Z",
		"size": 109920,
		"path": "../public/assets/courses-CFOSGIuu.js"
	},
	"/assets/dashboard-Dm9RPvQ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"488f-DmATvfDJlyLkwB96Wy6xHUUiLdA\"",
		"mtime": "2026-11-22T07:22:56.545Z",
		"size": 18575,
		"path": "../public/assets/dashboard-Dm9RPvQ4.js"
	},
	"/assets/dialog-BzHVGHOd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21ca-l7xnTzROWESXSllxf7bcg7dg/00\"",
		"mtime": "2026-11-22T07:22:56.546Z",
		"size": 8650,
		"path": "../public/assets/dialog-BzHVGHOd.js"
	},
	"/assets/dist-CHB2yKgp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8cb0-UuU6FNN4R/IW1iiH65uzAZ1XlgI\"",
		"mtime": "2026-11-22T07:22:56.548Z",
		"size": 36016,
		"path": "../public/assets/dist-CHB2yKgp.js"
	},
	"/assets/flame-YwmC2glE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc-lMOI5ZEljYvZJ/mVOVG30Omr944\"",
		"mtime": "2026-11-22T07:22:56.549Z",
		"size": 188,
		"path": "../public/assets/flame-YwmC2glE.js"
	},
	"/assets/index-Coe3cmRF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bda8-QWHeT/RnwNvYqG7sDq65mvn0XGw\"",
		"mtime": "2026-11-22T07:22:56.523Z",
		"size": 441768,
		"path": "../public/assets/index-Coe3cmRF.js"
	},
	"/founder-avatar.png": {
		"type": "image/png",
		"etag": "\"ce8a8-TD7pCjfxQ/Y2ae99pAdSehP+nsk\"",
		"mtime": "2026-10-13T17:52:11.867Z",
		"size": 845992,
		"path": "../public/founder-avatar.png"
	},
	"/assets/input-CfjwBAZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"246-6q8+qANP7tN9RHYp6PNqsjtquZ4\"",
		"mtime": "2026-11-22T07:22:56.551Z",
		"size": 582,
		"path": "../public/assets/input-CfjwBAZ3.js"
	},
	"/assets/layers-BjBG9-xA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-EOVKqyz8ZdSKFLHvm1z9EPe9IO4\"",
		"mtime": "2026-11-22T07:22:56.553Z",
		"size": 410,
		"path": "../public/assets/layers-BjBG9-xA.js"
	},
	"/assets/link-DMFFKbu3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f886-tpYIOncLIMvaNfVoPNmQdGoRSR8\"",
		"mtime": "2026-11-22T07:22:56.554Z",
		"size": 63622,
		"path": "../public/assets/link-DMFFKbu3.js"
	},
	"/assets/loader-circle-ChO-xbjN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-s8DWnUNitxryB8z6YDyS1ZlpJms\"",
		"mtime": "2026-11-22T07:22:56.554Z",
		"size": 133,
		"path": "../public/assets/loader-circle-ChO-xbjN.js"
	},
	"/assets/lock-DjYJQBAP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-ePa27qB/HPvFwRS6cn3CyAsBXQI\"",
		"mtime": "2026-11-22T07:22:56.555Z",
		"size": 195,
		"path": "../public/assets/lock-DjYJQBAP.js"
	},
	"/assets/login-RN0y4-hb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f2-BcyJTGBVqacRZ5/NvUOu621FFGE\"",
		"mtime": "2026-11-22T07:22:56.556Z",
		"size": 6130,
		"path": "../public/assets/login-RN0y4-hb.js"
	},
	"/assets/play-DNlf4XA-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22f4-OnMCl1T5+yr8cARJ2Ud+uJn3bik\"",
		"mtime": "2026-11-22T07:22:56.561Z",
		"size": 8948,
		"path": "../public/assets/play-DNlf4XA-.js"
	},
	"/assets/overview-ClcfjVoW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3133-yq1Be3q0nvBardCgRAku4f2YKBM\"",
		"mtime": "2026-11-22T07:22:56.559Z",
		"size": 12595,
		"path": "../public/assets/overview-ClcfjVoW.js"
	},
	"/assets/pricing--T7DvguD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c9-1HWajrj4dJBLP9pfh9mypoHE1xw\"",
		"mtime": "2026-11-22T07:22:56.561Z",
		"size": 6345,
		"path": "../public/assets/pricing--T7DvguD.js"
	},
	"/assets/privacy-policy-BnJuparc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2347-T/TAZQa9MB1XOP7dSbxn0OUg7uQ\"",
		"mtime": "2026-11-22T07:22:56.563Z",
		"size": 9031,
		"path": "../public/assets/privacy-policy-BnJuparc.js"
	},
	"/assets/products-CXudULFU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"892f-Fdo1Eb3N07RtRPgN/8GEv1d59cI\"",
		"mtime": "2026-11-22T07:22:56.564Z",
		"size": 35119,
		"path": "../public/assets/products-CXudULFU.js"
	},
	"/assets/profile-N1IjDd_w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1968-T17UgxoE8BdFa7P1DwuL8DOjV7g\"",
		"mtime": "2026-11-22T07:22:56.566Z",
		"size": 6504,
		"path": "../public/assets/profile-N1IjDd_w.js"
	},
	"/assets/ProtectedRoute-Di9Hc4s8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c1-EoDMhxdAoH9/xUYem00CzQBxFeA\"",
		"mtime": "2026-11-22T07:22:56.523Z",
		"size": 449,
		"path": "../public/assets/ProtectedRoute-Di9Hc4s8.js"
	},
	"/assets/refund-policy-g1AKDcop.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e81-rGxyOkARbjfNPhlSHTwblKsVHrg\"",
		"mtime": "2026-11-22T07:22:56.569Z",
		"size": 7809,
		"path": "../public/assets/refund-policy-g1AKDcop.js"
	},
	"/assets/routes-CN0etQ83.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e61-+OUnUpGcsK0RA1dgd94jRNSV7KA\"",
		"mtime": "2026-11-22T07:22:56.571Z",
		"size": 69217,
		"path": "../public/assets/routes-CN0etQ83.js"
	},
	"/assets/proxy-p-z087na.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d80d-0lIXO5MMRYfMBXcRRhIcu7YibpM\"",
		"mtime": "2026-11-22T07:22:56.567Z",
		"size": 120845,
		"path": "../public/assets/proxy-p-z087na.js"
	},
	"/assets/sparkles-Br1jSR6S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-O4AqYN29TWTpMnBUJDZSmdCwuHs\"",
		"mtime": "2026-11-22T07:22:56.573Z",
		"size": 483,
		"path": "../public/assets/sparkles-Br1jSR6S.js"
	},
	"/assets/shield-CziI6DUM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-yR4ppbT2DktsNxm6/c6RisSNRhI\"",
		"mtime": "2026-11-22T07:22:56.572Z",
		"size": 261,
		"path": "../public/assets/shield-CziI6DUM.js"
	},
	"/assets/terms-and-conditions-DHYNFcjK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2044-JM8xpumQDMyb38fK0s+vagEj3gA\"",
		"mtime": "2026-11-22T07:22:56.575Z",
		"size": 8260,
		"path": "../public/assets/terms-and-conditions-DHYNFcjK.js"
	},
	"/assets/useRouter-CMJ8O5js.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-zSHFdPVib5h0kzdM3rON0KUCEAY\"",
		"mtime": "2026-11-22T07:22:56.575Z",
		"size": 145,
		"path": "../public/assets/useRouter-CMJ8O5js.js"
	},
	"/assets/styles-9voQc9Lt.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"247ca-yWjbw+pythOZXu3hTtSyFD9x65c\"",
		"mtime": "2026-11-22T07:22:56.581Z",
		"size": 149450,
		"path": "../public/assets/styles-9voQc9Lt.css"
	},
	"/assets/users-DvV1svOA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-vTZ8FV7fh/lUxuE4i4j9TyRd8lQ\"",
		"mtime": "2026-11-22T07:22:56.577Z",
		"size": 295,
		"path": "../public/assets/users-DvV1svOA.js"
	},
	"/assets/zap-wAWA6Kxw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-/hur1mR+TdtZrlCNBgekUA03Lh4\"",
		"mtime": "2026-11-22T07:22:56.579Z",
		"size": 446,
		"path": "../public/assets/zap-wAWA6Kxw.js"
	},
	"/assets/utils-Dg9KQAHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9130-ih7wQ9hE4TkQr8cif5Fy0HrFgXk\"",
		"mtime": "2026-11-22T07:22:56.578Z",
		"size": 37168,
		"path": "../public/assets/utils-Dg9KQAHE.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pELdL_ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pELdL_
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
