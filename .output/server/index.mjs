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
	"/assets/button-C88fU23l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a787-7yARrkE7TOb7Ixt8k1z0mG4oHZk\"",
		"mtime": "2026-07-24T20:15:26.721Z",
		"size": 42887,
		"path": "../public/assets/button-C88fU23l.js"
	},
	"/assets/card-_qF5nkUF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fd-x9sk9UfmqlxiKfwDojqTs+z3BEo\"",
		"mtime": "2026-07-24T20:15:26.722Z",
		"size": 1021,
		"path": "../public/assets/card-_qF5nkUF.js"
	},
	"/favicon-v2.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1855e-w6eqltaFMhKjrlCACdEFOtmjzYs\"",
		"mtime": "2026-07-23T07:51:21.560Z",
		"size": 99678,
		"path": "../public/favicon-v2.ico"
	},
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/code-xml-C-JnWMh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-9yAAVfuugRRvSkrXUaT9w1tuznE\"",
		"mtime": "2026-07-24T20:15:26.724Z",
		"size": 198,
		"path": "../public/assets/code-xml-C-JnWMh3.js"
	},
	"/assets/circle-alert-C73llYbx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-CEj3dfvQ18EYNP0/cP9JHCPv8yQ\"",
		"mtime": "2026-07-24T20:15:26.722Z",
		"size": 240,
		"path": "../public/assets/circle-alert-C73llYbx.js"
	},
	"/assets/dashboard-Bf9kelki.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5b-FaohpKPpg31am0r/blOYqQRmvqE\"",
		"mtime": "2026-07-24T20:15:26.725Z",
		"size": 3675,
		"path": "../public/assets/dashboard-Bf9kelki.js"
	},
	"/assets/courses-C65E5oYT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1552a-9vzSk13SPOQF7otP0IW/JRTfK/g\"",
		"mtime": "2026-07-24T20:15:26.725Z",
		"size": 87338,
		"path": "../public/assets/courses-C65E5oYT.js"
	},
	"/assets/login-Bd38wt4L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a2-KE6Up9Bs1yRsnbg5g39Eh4Aizas\"",
		"mtime": "2026-07-24T20:15:26.726Z",
		"size": 5538,
		"path": "../public/assets/login-Bd38wt4L.js"
	},
	"/assets/database-BKPpE_lD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-iJtcdiGVUcZBrWZHMx0lLL/+Vdo\"",
		"mtime": "2026-07-24T20:15:26.726Z",
		"size": 233,
		"path": "../public/assets/database-BKPpE_lD.js"
	},
	"/assets/play-BV8iQnRb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4-yrkk3UuWCsOewWdIgX9xyg98BKM\"",
		"mtime": "2026-07-24T20:15:26.727Z",
		"size": 180,
		"path": "../public/assets/play-BV8iQnRb.js"
	},
	"/assets/products-De00RZC5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140b-erFTyMFhG4Edjz/dUGI1Ty5J924\"",
		"mtime": "2026-07-24T20:15:26.728Z",
		"size": 5131,
		"path": "../public/assets/products-De00RZC5.js"
	},
	"/assets/profile-C_Tn-jQ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"116b-h9nuMa1jWSp4vMpjN8SOSlv/icQ\"",
		"mtime": "2026-07-24T20:15:26.728Z",
		"size": 4459,
		"path": "../public/assets/profile-C_Tn-jQ_.js"
	},
	"/assets/ProtectedRoute-IqRiz14I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f2-TOXRizcRg15cbvLWLwel6uiWQ6I\"",
		"mtime": "2026-07-24T20:15:26.720Z",
		"size": 498,
		"path": "../public/assets/ProtectedRoute-IqRiz14I.js"
	},
	"/assets/index-CtTjSHEd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f942-1zePEVYKYuFX404Mr4vKxy00goc\"",
		"mtime": "2026-07-24T20:15:26.720Z",
		"size": 522562,
		"path": "../public/assets/index-CtTjSHEd.js"
	},
	"/assets/proxy-BH3_mQZd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d884-/1mFvG4Tua5+x9Yfc/bgqkP3zSY\"",
		"mtime": "2026-07-24T20:15:26.729Z",
		"size": 120964,
		"path": "../public/assets/proxy-BH3_mQZd.js"
	},
	"/assets/routes-Bu5owWCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3239-iljc1HTVCsKgLAL0WT8TSr9GEY8\"",
		"mtime": "2026-07-24T20:15:26.731Z",
		"size": 12857,
		"path": "../public/assets/routes-Bu5owWCW.js"
	},
	"/assets/react-dom-DCwV671j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd5-FBS33KbRRNUBq+PHiZhI9HCBxCw\"",
		"mtime": "2026-07-24T20:15:26.730Z",
		"size": 3541,
		"path": "../public/assets/react-dom-DCwV671j.js"
	},
	"/assets/useQuery-B3y8WAAa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2256-rLQ29qLi/DyYbcJ21HVxks/dmZY\"",
		"mtime": "2026-07-24T20:15:26.732Z",
		"size": 8790,
		"path": "../public/assets/useQuery-B3y8WAAa.js"
	},
	"/assets/styles-LGX1A9eb.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19e7d-9rfclrz0Z+0qfwyvFm1bdC2uTZo\"",
		"mtime": "2026-07-24T20:15:26.734Z",
		"size": 106109,
		"path": "../public/assets/styles-LGX1A9eb.css"
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
