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
		"mtime": "2026-07-23T20:34:37.216Z",
		"size": 42887,
		"path": "../public/assets/button-C88fU23l.js"
	},
	"/assets/card-_qF5nkUF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fd-x9sk9UfmqlxiKfwDojqTs+z3BEo\"",
		"mtime": "2026-07-23T20:34:37.218Z",
		"size": 1021,
		"path": "../public/assets/card-_qF5nkUF.js"
	},
	"/assets/courses-BhloMR2I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15321-0gTOx6wNAE8BLoqLJRTztZt1bqY\"",
		"mtime": "2026-07-23T20:34:37.220Z",
		"size": 86817,
		"path": "../public/assets/courses-BhloMR2I.js"
	},
	"/assets/circle-alert-C73llYbx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-CEj3dfvQ18EYNP0/cP9JHCPv8yQ\"",
		"mtime": "2026-07-23T20:34:37.219Z",
		"size": 240,
		"path": "../public/assets/circle-alert-C73llYbx.js"
	},
	"/assets/dashboard-G0hLmFok.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb1-GY8y4sp9cxYrxaWH+B6RPliqSeA\"",
		"mtime": "2026-07-23T20:34:37.220Z",
		"size": 3761,
		"path": "../public/assets/dashboard-G0hLmFok.js"
	},
	"/assets/code-xml-C-JnWMh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-9yAAVfuugRRvSkrXUaT9w1tuznE\"",
		"mtime": "2026-07-23T20:34:37.219Z",
		"size": 198,
		"path": "../public/assets/code-xml-C-JnWMh3.js"
	},
	"/favicon-v2.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1855e-w6eqltaFMhKjrlCACdEFOtmjzYs\"",
		"mtime": "2026-07-23T07:51:21.560Z",
		"size": 99678,
		"path": "../public/favicon-v2.ico"
	},
	"/assets/login-DvWgZEru.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a7-JX++VTqiJOSMjAM8SG70GzdNPV8\"",
		"mtime": "2026-07-23T20:34:37.222Z",
		"size": 5543,
		"path": "../public/assets/login-DvWgZEru.js"
	},
	"/assets/profile-IBwxAv8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"116b-IB+gNWP6F6dHbS3lAR7Yr0HY+Eg\"",
		"mtime": "2026-07-23T20:34:37.223Z",
		"size": 4459,
		"path": "../public/assets/profile-IBwxAv8Y.js"
	},
	"/assets/products-CDoGq9R7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1160-HuRdXhWft0N9WuQ6c51rPEQ1mn8\"",
		"mtime": "2026-07-23T20:34:37.223Z",
		"size": 4448,
		"path": "../public/assets/products-CDoGq9R7.js"
	},
	"/assets/routes-DtfgKhGu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e36-Cn8yjDB1HSfdmlqYHz9OtyRqAf4\"",
		"mtime": "2026-07-23T20:34:37.225Z",
		"size": 15926,
		"path": "../public/assets/routes-DtfgKhGu.js"
	},
	"/assets/react-dom-DCwV671j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd5-FBS33KbRRNUBq+PHiZhI9HCBxCw\"",
		"mtime": "2026-07-23T20:34:37.225Z",
		"size": 3541,
		"path": "../public/assets/react-dom-DCwV671j.js"
	},
	"/assets/proxy-BH3_mQZd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d884-/1mFvG4Tua5+x9Yfc/bgqkP3zSY\"",
		"mtime": "2026-07-23T20:34:37.224Z",
		"size": 120964,
		"path": "../public/assets/proxy-BH3_mQZd.js"
	},
	"/assets/sparkles-D5lxzfle.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b5-wEHvCb6M0xPpRNKPG5f9SelnK+E\"",
		"mtime": "2026-07-23T20:34:37.226Z",
		"size": 949,
		"path": "../public/assets/sparkles-D5lxzfle.js"
	},
	"/assets/styles-C08ZWtaT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19d3d-hQ7sR55OrCXEty7nHFnRjlzhKS0\"",
		"mtime": "2026-07-23T20:34:37.229Z",
		"size": 105789,
		"path": "../public/assets/styles-C08ZWtaT.css"
	},
	"/assets/ProtectedRoute-DHrmOea-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f2-UPL62cM3Jql7TAuWjIN/v70YuvU\"",
		"mtime": "2026-07-23T20:34:37.215Z",
		"size": 498,
		"path": "../public/assets/ProtectedRoute-DHrmOea-.js"
	},
	"/assets/index-CeCQH8Mj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f555-T50jzqOA633ZhEmar5gghEJwY20\"",
		"mtime": "2026-07-23T20:34:37.215Z",
		"size": 521557,
		"path": "../public/assets/index-CeCQH8Mj.js"
	},
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/useQuery-D4V3N2lC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2256-wNCGjFpgk/0ZMNhyBRJ0/vmON/I\"",
		"mtime": "2026-07-23T20:34:37.227Z",
		"size": 8790,
		"path": "../public/assets/useQuery-D4V3N2lC.js"
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
