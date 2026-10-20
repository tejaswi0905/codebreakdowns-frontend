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
	"/assets/accordion--gKVwucY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a13-DPSuSQc4AU4/lLQDn7NoKDm1Qs8\"",
		"mtime": "2026-10-20T18:15:26.591Z",
		"size": 6675,
		"path": "../public/assets/accordion--gKVwucY.js"
	},
	"/assets/arrow-right-CJ9Ca85R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UYijJrvwpScgTKL/mhJcZt26vWY\"",
		"mtime": "2026-10-20T18:15:26.592Z",
		"size": 154,
		"path": "../public/assets/arrow-right-CJ9Ca85R.js"
	},
	"/assets/about-CC4snsXU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f051-0nRPYJg7z41bF77Os0B7G/JQFy4\"",
		"mtime": "2026-10-20T18:15:26.591Z",
		"size": 127057,
		"path": "../public/assets/about-CC4snsXU.js"
	},
	"/assets/badge-ByC1F194.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303-dftyXZbKUSuGehY0hjbWUG3juiU\"",
		"mtime": "2026-10-20T18:15:26.592Z",
		"size": 771,
		"path": "../public/assets/badge-ByC1F194.js"
	},
	"/assets/card-DGokSew5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fc-jrLkFWkPNqYTaDkT00JIUZ9MsJo\"",
		"mtime": "2026-10-20T18:15:26.594Z",
		"size": 1020,
		"path": "../public/assets/card-DGokSew5.js"
	},
	"/assets/circle-alert-CcA_onRL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-CDwAqx12iB/GmysSsoKIGz0unwk\"",
		"mtime": "2026-10-20T18:15:26.594Z",
		"size": 416,
		"path": "../public/assets/circle-alert-CcA_onRL.js"
	},
	"/favicon-v2.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1855e-w6eqltaFMhKjrlCACdEFOtmjzYs\"",
		"mtime": "2026-07-23T07:51:21.560Z",
		"size": 99678,
		"path": "../public/favicon-v2.ico"
	},
	"/assets/clock-u0zeT_8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-ebY2GsApqKfTw2XZtc1ej8OEjeQ\"",
		"mtime": "2026-10-20T18:15:26.594Z",
		"size": 158,
		"path": "../public/assets/clock-u0zeT_8Y.js"
	},
	"/assets/book-open-DQgXc9P3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-OVetQVTTCCsFgY1hQDL/7lVAD+0\"",
		"mtime": "2026-10-20T18:15:26.592Z",
		"size": 268,
		"path": "../public/assets/book-open-DQgXc9P3.js"
	},
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/dialog-GGaGZer6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2335-9RGDNcA5hexGkOrwm0nwvC2u21o\"",
		"mtime": "2026-10-20T18:15:26.604Z",
		"size": 9013,
		"path": "../public/assets/dialog-GGaGZer6.js"
	},
	"/assets/courses-Dn53cF9_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1712b-TxikqFkm68b+hZsZ76rjVLgtuII\"",
		"mtime": "2026-10-20T18:15:26.601Z",
		"size": 94507,
		"path": "../public/assets/courses-Dn53cF9_.js"
	},
	"/assets/contact-BglSs2BZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4a-SWnHtTN0D5Yr9dksZ17wl6UspqE\"",
		"mtime": "2026-10-20T18:15:26.600Z",
		"size": 7242,
		"path": "../public/assets/contact-BglSs2BZ.js"
	},
	"/assets/dashboard-BoJ7peb-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28e0-rhqCHNfK+JbS/EfT5QYI62xHKQc\"",
		"mtime": "2026-10-20T18:15:26.602Z",
		"size": 10464,
		"path": "../public/assets/dashboard-BoJ7peb-.js"
	},
	"/assets/dist-CHB2yKgp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8cb0-UuU6FNN4R/IW1iiH65uzAZ1XlgI\"",
		"mtime": "2026-10-20T18:15:26.613Z",
		"size": 36016,
		"path": "../public/assets/dist-CHB2yKgp.js"
	},
	"/assets/input-CfjwBAZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"246-6q8+qANP7tN9RHYp6PNqsjtquZ4\"",
		"mtime": "2026-10-20T18:15:26.616Z",
		"size": 582,
		"path": "../public/assets/input-CfjwBAZ3.js"
	},
	"/assets/link-DMFFKbu3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f886-tpYIOncLIMvaNfVoPNmQdGoRSR8\"",
		"mtime": "2026-10-20T18:15:26.617Z",
		"size": 63622,
		"path": "../public/assets/link-DMFFKbu3.js"
	},
	"/assets/lock-DjYJQBAP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-ePa27qB/HPvFwRS6cn3CyAsBXQI\"",
		"mtime": "2026-10-20T18:15:26.618Z",
		"size": 195,
		"path": "../public/assets/lock-DjYJQBAP.js"
	},
	"/assets/index-B0J2E9DJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b48c-XwYdPC1LpnQJ8Hm5F4MMB8/2++g\"",
		"mtime": "2026-10-20T18:15:26.590Z",
		"size": 439436,
		"path": "../public/assets/index-B0J2E9DJ.js"
	},
	"/assets/login-85uQTFyd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1453-2TsJsHt6QIxHTOBDL7rGIEqHjUo\"",
		"mtime": "2026-10-20T18:15:26.619Z",
		"size": 5203,
		"path": "../public/assets/login-85uQTFyd.js"
	},
	"/assets/overview-CJWHxNOQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-VRTg9+PEGyNtSeuIEpADvW8PMl0\"",
		"mtime": "2026-10-20T18:15:26.619Z",
		"size": 8720,
		"path": "../public/assets/overview-CJWHxNOQ.js"
	},
	"/assets/play-Do4QcefU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236c-TyJmIk+3bFlnC0SxsrglxkqOrS4\"",
		"mtime": "2026-10-20T18:15:26.620Z",
		"size": 9068,
		"path": "../public/assets/play-Do4QcefU.js"
	},
	"/assets/pricing-cmxuUd0E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c9-/q6yPBUwgakEofjQ7kSFloo+MlY\"",
		"mtime": "2026-10-20T18:15:26.621Z",
		"size": 6345,
		"path": "../public/assets/pricing-cmxuUd0E.js"
	},
	"/assets/privacy-policy-BnJuparc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2347-T/TAZQa9MB1XOP7dSbxn0OUg7uQ\"",
		"mtime": "2026-10-20T18:15:26.621Z",
		"size": 9031,
		"path": "../public/assets/privacy-policy-BnJuparc.js"
	},
	"/founder-avatar.png": {
		"type": "image/png",
		"etag": "\"ce8a8-TD7pCjfxQ/Y2ae99pAdSehP+nsk\"",
		"mtime": "2026-10-13T17:52:11.867Z",
		"size": 845992,
		"path": "../public/founder-avatar.png"
	},
	"/assets/profile-pu6JSP9X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc9-tnq8e/O3vDhRJL0DXVT21AXrf4Y\"",
		"mtime": "2026-10-20T18:15:26.623Z",
		"size": 4041,
		"path": "../public/assets/profile-pu6JSP9X.js"
	},
	"/assets/ProtectedRoute-DTa9zd_K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f1-rLSHKEUstNtVWUJ3E583gH57XYw\"",
		"mtime": "2026-10-20T18:15:26.590Z",
		"size": 497,
		"path": "../public/assets/ProtectedRoute-DTa9zd_K.js"
	},
	"/assets/products-DwrfH5pz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"894c-YZOsoERS8Ui0lioYqeFMgMFopts\"",
		"mtime": "2026-10-20T18:15:26.622Z",
		"size": 35148,
		"path": "../public/assets/products-DwrfH5pz.js"
	},
	"/assets/proxy-p-z087na.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d80d-0lIXO5MMRYfMBXcRRhIcu7YibpM\"",
		"mtime": "2026-10-20T18:15:26.623Z",
		"size": 120845,
		"path": "../public/assets/proxy-p-z087na.js"
	},
	"/assets/refund-policy-g1AKDcop.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e81-rGxyOkARbjfNPhlSHTwblKsVHrg\"",
		"mtime": "2026-10-20T18:15:26.628Z",
		"size": 7809,
		"path": "../public/assets/refund-policy-g1AKDcop.js"
	},
	"/assets/routes-BONzlkWN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e1f-HTgrQKF4gRfIIjvUAXr/Yu5bn3I\"",
		"mtime": "2026-10-20T18:15:26.639Z",
		"size": 69151,
		"path": "../public/assets/routes-BONzlkWN.js"
	},
	"/assets/sparkles-Br1jSR6S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-O4AqYN29TWTpMnBUJDZSmdCwuHs\"",
		"mtime": "2026-10-20T18:15:26.662Z",
		"size": 483,
		"path": "../public/assets/sparkles-Br1jSR6S.js"
	},
	"/assets/shield-CziI6DUM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-yR4ppbT2DktsNxm6/c6RisSNRhI\"",
		"mtime": "2026-10-20T18:15:26.661Z",
		"size": 261,
		"path": "../public/assets/shield-CziI6DUM.js"
	},
	"/assets/terms-and-conditions-DHYNFcjK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2044-JM8xpumQDMyb38fK0s+vagEj3gA\"",
		"mtime": "2026-10-20T18:15:26.667Z",
		"size": 8260,
		"path": "../public/assets/terms-and-conditions-DHYNFcjK.js"
	},
	"/assets/useRouter-CMJ8O5js.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-zSHFdPVib5h0kzdM3rON0KUCEAY\"",
		"mtime": "2026-10-20T18:15:26.668Z",
		"size": 145,
		"path": "../public/assets/useRouter-CMJ8O5js.js"
	},
	"/assets/users-DvV1svOA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-vTZ8FV7fh/lUxuE4i4j9TyRd8lQ\"",
		"mtime": "2026-10-20T18:15:26.669Z",
		"size": 295,
		"path": "../public/assets/users-DvV1svOA.js"
	},
	"/assets/utils-Dg9KQAHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9130-ih7wQ9hE4TkQr8cif5Fy0HrFgXk\"",
		"mtime": "2026-10-20T18:15:26.669Z",
		"size": 37168,
		"path": "../public/assets/utils-Dg9KQAHE.js"
	},
	"/assets/zap-wAWA6Kxw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-/hur1mR+TdtZrlCNBgekUA03Lh4\"",
		"mtime": "2026-10-20T18:15:26.670Z",
		"size": 446,
		"path": "../public/assets/zap-wAWA6Kxw.js"
	},
	"/assets/styles-C7MRBium.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"23b9c-SgVTvTHnMDMsio03Ur8sLkwZ9nk\"",
		"mtime": "2026-10-20T18:15:26.672Z",
		"size": 146332,
		"path": "../public/assets/styles-C7MRBium.css"
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
