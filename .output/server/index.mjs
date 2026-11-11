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
	"/assets/about-CQXg39rZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e55b-G79Zw8FmKvQdvtXUEA7xZ+wLhf4\"",
		"mtime": "2026-10-27T05:40:43.946Z",
		"size": 124251,
		"path": "../public/assets/about-CQXg39rZ.js"
	},
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/accordion-DjrZSUZM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a14-efdOan5kCvyCPWVawFmmMtffnpI\"",
		"mtime": "2026-10-27T05:40:43.946Z",
		"size": 6676,
		"path": "../public/assets/accordion-DjrZSUZM.js"
	},
	"/assets/arrow-left-B99rnX6Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-zLVM8AqEq53Mq8ZoH6N4wN6D5Iw\"",
		"mtime": "2026-10-27T05:40:43.947Z",
		"size": 154,
		"path": "../public/assets/arrow-left-B99rnX6Z.js"
	},
	"/assets/arrow-right-CJ9Ca85R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UYijJrvwpScgTKL/mhJcZt26vWY\"",
		"mtime": "2026-10-27T05:40:43.947Z",
		"size": 154,
		"path": "../public/assets/arrow-right-CJ9Ca85R.js"
	},
	"/assets/book-open-DQgXc9P3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-OVetQVTTCCsFgY1hQDL/7lVAD+0\"",
		"mtime": "2026-10-27T05:40:43.948Z",
		"size": 268,
		"path": "../public/assets/book-open-DQgXc9P3.js"
	},
	"/assets/badge-oAet6CH2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303-o2QWRcstA9wQ3550ySLd2snlK/8\"",
		"mtime": "2026-10-27T05:40:43.948Z",
		"size": 771,
		"path": "../public/assets/badge-oAet6CH2.js"
	},
	"/assets/bookmark-BxA_JfZH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db-ODfKW5qIxYuryHwvNzDdBTsoQV8\"",
		"mtime": "2026-10-27T05:40:43.949Z",
		"size": 219,
		"path": "../public/assets/bookmark-BxA_JfZH.js"
	},
	"/assets/card-DGokSew5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fc-jrLkFWkPNqYTaDkT00JIUZ9MsJo\"",
		"mtime": "2026-10-27T05:40:43.950Z",
		"size": 1020,
		"path": "../public/assets/card-DGokSew5.js"
	},
	"/assets/circle-alert-c44tYh_O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-qrdBipQZuxwFnQp6kGagX/6Dc10\"",
		"mtime": "2026-10-27T05:40:43.951Z",
		"size": 239,
		"path": "../public/assets/circle-alert-c44tYh_O.js"
	},
	"/assets/circle-check-Bk4f-QDQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-+jQ10ccJYqpdXmqP4f0KwDvsZGM\"",
		"mtime": "2026-10-27T05:40:43.951Z",
		"size": 167,
		"path": "../public/assets/circle-check-Bk4f-QDQ.js"
	},
	"/assets/contact-D5hpFJxw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4c-xdaiPQLsmodlGYtC6rWQgUncYVc\"",
		"mtime": "2026-10-27T05:40:43.953Z",
		"size": 7244,
		"path": "../public/assets/contact-D5hpFJxw.js"
	},
	"/assets/courses-B0_KVtUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ad5a-1N1kgM5K1jtU7kptuMwd21HS8m0\"",
		"mtime": "2026-10-27T05:40:43.954Z",
		"size": 109914,
		"path": "../public/assets/courses-B0_KVtUl.js"
	},
	"/assets/clock-u0zeT_8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-ebY2GsApqKfTw2XZtc1ej8OEjeQ\"",
		"mtime": "2026-10-27T05:40:43.952Z",
		"size": 158,
		"path": "../public/assets/clock-u0zeT_8Y.js"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"71029-mNvRFe2x/7bNjMcanMxwZvR2y88\"",
		"mtime": "2026-10-22T13:39:26.973Z",
		"size": 462889,
		"path": "../public/og-image.png"
	},
	"/assets/dashboard-CswshuV9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"488f-qGLxnmlP+OIfZS+2dwDWG+VnxhQ\"",
		"mtime": "2026-10-27T05:40:43.954Z",
		"size": 18575,
		"path": "../public/assets/dashboard-CswshuV9.js"
	},
	"/assets/dialog-35JRdz0K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c9-2dkP9oyP/zF8/+3Kt6tdCX7wV/k\"",
		"mtime": "2026-10-27T05:40:43.955Z",
		"size": 8649,
		"path": "../public/assets/dialog-35JRdz0K.js"
	},
	"/assets/dist-CHB2yKgp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8cb0-UuU6FNN4R/IW1iiH65uzAZ1XlgI\"",
		"mtime": "2026-10-27T05:40:43.971Z",
		"size": 36016,
		"path": "../public/assets/dist-CHB2yKgp.js"
	},
	"/assets/flame-YwmC2glE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc-lMOI5ZEljYvZJ/mVOVG30Omr944\"",
		"mtime": "2026-10-27T05:40:43.973Z",
		"size": 188,
		"path": "../public/assets/flame-YwmC2glE.js"
	},
	"/assets/input-CfjwBAZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"246-6q8+qANP7tN9RHYp6PNqsjtquZ4\"",
		"mtime": "2026-10-27T05:40:43.973Z",
		"size": 582,
		"path": "../public/assets/input-CfjwBAZ3.js"
	},
	"/assets/layers-BjBG9-xA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-EOVKqyz8ZdSKFLHvm1z9EPe9IO4\"",
		"mtime": "2026-10-27T05:40:43.974Z",
		"size": 410,
		"path": "../public/assets/layers-BjBG9-xA.js"
	},
	"/assets/link-DMFFKbu3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f886-tpYIOncLIMvaNfVoPNmQdGoRSR8\"",
		"mtime": "2026-10-27T05:40:43.975Z",
		"size": 63622,
		"path": "../public/assets/link-DMFFKbu3.js"
	},
	"/assets/index-BggalKhV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bc92-QOce8chDBURQmYJAmaorfF+VGvg\"",
		"mtime": "2026-10-27T05:40:43.944Z",
		"size": 441490,
		"path": "../public/assets/index-BggalKhV.js"
	},
	"/founder-avatar.png": {
		"type": "image/png",
		"etag": "\"ce8a8-TD7pCjfxQ/Y2ae99pAdSehP+nsk\"",
		"mtime": "2026-10-13T17:52:11.867Z",
		"size": 845992,
		"path": "../public/founder-avatar.png"
	},
	"/assets/lock-DjYJQBAP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-ePa27qB/HPvFwRS6cn3CyAsBXQI\"",
		"mtime": "2026-10-27T05:40:43.978Z",
		"size": 195,
		"path": "../public/assets/lock-DjYJQBAP.js"
	},
	"/assets/login-DN_DYIim.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f2-nH0W5eu/zqVJ9c0PSqbkdn4eXbE\"",
		"mtime": "2026-10-27T05:40:43.981Z",
		"size": 6130,
		"path": "../public/assets/login-DN_DYIim.js"
	},
	"/assets/overview-CSgOLnHg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3133-154gqHBcf9yWTene58ql1ZURaQU\"",
		"mtime": "2026-10-27T05:40:43.982Z",
		"size": 12595,
		"path": "../public/assets/overview-CSgOLnHg.js"
	},
	"/assets/loader-circle-ChO-xbjN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-s8DWnUNitxryB8z6YDyS1ZlpJms\"",
		"mtime": "2026-10-27T05:40:43.977Z",
		"size": 133,
		"path": "../public/assets/loader-circle-ChO-xbjN.js"
	},
	"/assets/play-BnkDZwDb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22f4-/C8EDj7RbV78rYoAH/S4Hgn8Cq4\"",
		"mtime": "2026-10-27T05:40:43.983Z",
		"size": 8948,
		"path": "../public/assets/play-BnkDZwDb.js"
	},
	"/assets/privacy-policy-BnJuparc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2347-T/TAZQa9MB1XOP7dSbxn0OUg7uQ\"",
		"mtime": "2026-10-27T05:40:43.987Z",
		"size": 9031,
		"path": "../public/assets/privacy-policy-BnJuparc.js"
	},
	"/assets/products-BSY7bPpu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"892f-XC8EaYioqlZp1EUu3EjO+kIgqhc\"",
		"mtime": "2026-10-27T05:40:43.989Z",
		"size": 35119,
		"path": "../public/assets/products-BSY7bPpu.js"
	},
	"/assets/profile-jSrYdI0L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1968-CA1t/HVVzzQ6N5BjVA1fKQSeitE\"",
		"mtime": "2026-10-27T05:40:43.990Z",
		"size": 6504,
		"path": "../public/assets/profile-jSrYdI0L.js"
	},
	"/assets/pricing-BYt9nNtJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c9-eiCTfbJHoZB3tMIsK3AuY/vrESg\"",
		"mtime": "2026-10-27T05:40:43.985Z",
		"size": 6345,
		"path": "../public/assets/pricing-BYt9nNtJ.js"
	},
	"/assets/ProtectedRoute-CfYTyf2i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c1-+YRVVBIEV2c9BMkgehZFp2of5ww\"",
		"mtime": "2026-10-27T05:40:43.944Z",
		"size": 449,
		"path": "../public/assets/ProtectedRoute-CfYTyf2i.js"
	},
	"/assets/refund-policy-g1AKDcop.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e81-rGxyOkARbjfNPhlSHTwblKsVHrg\"",
		"mtime": "2026-10-27T05:40:43.994Z",
		"size": 7809,
		"path": "../public/assets/refund-policy-g1AKDcop.js"
	},
	"/assets/routes-CqCJTwYE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e61-PvO4h8ogGY8e1Yp8CkEtzbijgTA\"",
		"mtime": "2026-10-27T05:40:43.996Z",
		"size": 69217,
		"path": "../public/assets/routes-CqCJTwYE.js"
	},
	"/assets/sparkles-Br1jSR6S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-O4AqYN29TWTpMnBUJDZSmdCwuHs\"",
		"mtime": "2026-10-27T05:40:43.998Z",
		"size": 483,
		"path": "../public/assets/sparkles-Br1jSR6S.js"
	},
	"/assets/proxy-p-z087na.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d80d-0lIXO5MMRYfMBXcRRhIcu7YibpM\"",
		"mtime": "2026-10-27T05:40:43.991Z",
		"size": 120845,
		"path": "../public/assets/proxy-p-z087na.js"
	},
	"/assets/terms-and-conditions-DHYNFcjK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2044-JM8xpumQDMyb38fK0s+vagEj3gA\"",
		"mtime": "2026-10-27T05:40:43.999Z",
		"size": 8260,
		"path": "../public/assets/terms-and-conditions-DHYNFcjK.js"
	},
	"/assets/useRouter-CMJ8O5js.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-zSHFdPVib5h0kzdM3rON0KUCEAY\"",
		"mtime": "2026-10-27T05:40:43.999Z",
		"size": 145,
		"path": "../public/assets/useRouter-CMJ8O5js.js"
	},
	"/assets/users-DvV1svOA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-vTZ8FV7fh/lUxuE4i4j9TyRd8lQ\"",
		"mtime": "2026-10-27T05:40:44.001Z",
		"size": 295,
		"path": "../public/assets/users-DvV1svOA.js"
	},
	"/assets/zap-wAWA6Kxw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-/hur1mR+TdtZrlCNBgekUA03Lh4\"",
		"mtime": "2026-10-27T05:40:44.028Z",
		"size": 446,
		"path": "../public/assets/zap-wAWA6Kxw.js"
	},
	"/assets/utils-Dg9KQAHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9130-ih7wQ9hE4TkQr8cif5Fy0HrFgXk\"",
		"mtime": "2026-10-27T05:40:44.001Z",
		"size": 37168,
		"path": "../public/assets/utils-Dg9KQAHE.js"
	},
	"/assets/shield-CziI6DUM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-yR4ppbT2DktsNxm6/c6RisSNRhI\"",
		"mtime": "2026-10-27T05:40:43.997Z",
		"size": 261,
		"path": "../public/assets/shield-CziI6DUM.js"
	},
	"/assets/styles-9voQc9Lt.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"247ca-yWjbw+pythOZXu3hTtSyFD9x65c\"",
		"mtime": "2026-10-27T05:40:44.030Z",
		"size": 149450,
		"path": "../public/assets/styles-9voQc9Lt.css"
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
