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
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/card-CMrCZ_SM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fd-FySVHqLK0XiW98Fjvdwb0uqPeoE\"",
		"mtime": "2026-07-24T19:40:10.800Z",
		"size": 1021,
		"path": "../public/assets/card-CMrCZ_SM.js"
	},
	"/favicon-v2.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1855e-w6eqltaFMhKjrlCACdEFOtmjzYs\"",
		"mtime": "2026-07-23T07:51:21.560Z",
		"size": 99678,
		"path": "../public/favicon-v2.ico"
	},
	"/assets/code-xml-DGLK_E1O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-F8Giyj+35TvorGDVA+xjvkQBLDg\"",
		"mtime": "2026-07-24T19:40:10.801Z",
		"size": 198,
		"path": "../public/assets/code-xml-DGLK_E1O.js"
	},
	"/assets/circle-alert-BglgYywm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-B4Dx5HQJ6QbkC2oBmeP6z1rCPSU\"",
		"mtime": "2026-07-24T19:40:10.801Z",
		"size": 240,
		"path": "../public/assets/circle-alert-BglgYywm.js"
	},
	"/assets/button-DVZbYzNr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ecca-yYsOR3qY1QKi7vV9yhfdsQ/s6bM\"",
		"mtime": "2026-07-24T19:40:10.799Z",
		"size": 60618,
		"path": "../public/assets/button-DVZbYzNr.js"
	},
	"/assets/dashboard-DmSKKzgf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15cf-CffHCjL/K6OGgHb7tyiKNNy7ExM\"",
		"mtime": "2026-07-24T19:40:10.803Z",
		"size": 5583,
		"path": "../public/assets/dashboard-DmSKKzgf.js"
	},
	"/assets/courses-B6l03yp9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16cf6-2E1M0NVJDbDTydvJQLNWR9hpa4A\"",
		"mtime": "2026-07-24T19:40:10.802Z",
		"size": 93430,
		"path": "../public/assets/courses-B6l03yp9.js"
	},
	"/assets/database-Do9VQ3pR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-HK5NNH69BrsfOxko9hf3ciajdrM\"",
		"mtime": "2026-07-24T19:40:10.804Z",
		"size": 233,
		"path": "../public/assets/database-Do9VQ3pR.js"
	},
	"/assets/login-Btkl4Fzo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4d-eEF1Lu6OR7i4coUxHDvWK12E120\"",
		"mtime": "2026-07-24T19:40:10.805Z",
		"size": 7757,
		"path": "../public/assets/login-Btkl4Fzo.js"
	},
	"/assets/play-CFh1kqWs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4-N4YrElCuUpFLkPkGAnUTTDNdrok\"",
		"mtime": "2026-07-24T19:40:10.805Z",
		"size": 180,
		"path": "../public/assets/play-CFh1kqWs.js"
	},
	"/assets/products-CIipRfWE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b05-lr3LTfEhOMvMxOxYJ5z2mcKfTm4\"",
		"mtime": "2026-07-24T19:40:10.806Z",
		"size": 6917,
		"path": "../public/assets/products-CIipRfWE.js"
	},
	"/assets/profile-CN38H0cc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"168c-lzknml9CbntTlrS81tclw+fCDVU\"",
		"mtime": "2026-07-24T19:40:10.807Z",
		"size": 5772,
		"path": "../public/assets/profile-CN38H0cc.js"
	},
	"/assets/ProtectedRoute-CopL96Cm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a7-dm/V7z40FUvjlASnd/rXe+dqPiI\"",
		"mtime": "2026-07-24T19:40:10.797Z",
		"size": 679,
		"path": "../public/assets/ProtectedRoute-CopL96Cm.js"
	},
	"/assets/react-dom-BUVAeu7x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241d-IWA2/OGAjVzoE98JpZgolKtYghM\"",
		"mtime": "2026-07-24T19:40:10.809Z",
		"size": 9245,
		"path": "../public/assets/react-dom-BUVAeu7x.js"
	},
	"/assets/proxy-Cidd4uvq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e0ed-SuuA++ecFPIDGzT1mN5fVwUmA0s\"",
		"mtime": "2026-07-24T19:40:10.808Z",
		"size": 123117,
		"path": "../public/assets/proxy-Cidd4uvq.js"
	},
	"/assets/routes-RkpBSdOs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"418f-DcHz3q5s9O9M1N75CpFHAEk5fjs\"",
		"mtime": "2026-07-24T19:40:10.810Z",
		"size": 16783,
		"path": "../public/assets/routes-RkpBSdOs.js"
	},
	"/assets/styles-LGX1A9eb.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19e7d-9rfclrz0Z+0qfwyvFm1bdC2uTZo\"",
		"mtime": "2026-07-24T19:40:10.816Z",
		"size": 106109,
		"path": "../public/assets/styles-LGX1A9eb.css"
	},
	"/assets/useQuery-CP6V_-bb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24cc-1w8UfcpRGMMbzlU1DrLPcHdAti4\"",
		"mtime": "2026-07-24T19:40:10.810Z",
		"size": 9420,
		"path": "../public/assets/useQuery-CP6V_-bb.js"
	},
	"/assets/index-Bbl-WnUb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac4d3-zb6xYT22I4bQz92nmUJXscANZko\"",
		"mtime": "2026-07-24T19:40:10.795Z",
		"size": 705747,
		"path": "../public/assets/index-Bbl-WnUb.js"
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
