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
	"/iconBanner.png": {
		"type": "image/png",
		"etag": "\"1dd01-/I1MDeTYvSRhrxOIEGP5e5+h8LU\"",
		"mtime": "2026-07-23T07:53:46.169Z",
		"size": 122113,
		"path": "../public/iconBanner.png"
	},
	"/assets/book-open-CvpEHp0v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-RAGEj1Derai4kUqUqkv1olaMX78\"",
		"mtime": "2026-07-24T21:50:03.028Z",
		"size": 269,
		"path": "../public/assets/book-open-CvpEHp0v.js"
	},
	"/assets/api-QpXoVVFH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e7-HXcfIzpD+I/LbDxcfB8sCrp/NeA\"",
		"mtime": "2026-07-24T21:50:03.025Z",
		"size": 1511,
		"path": "../public/assets/api-QpXoVVFH.js"
	},
	"/assets/arrow-right-XES2XeEr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-oNzkKiPbnQUw85tYhubYZqvkd7M\"",
		"mtime": "2026-07-24T21:50:03.026Z",
		"size": 155,
		"path": "../public/assets/arrow-right-XES2XeEr.js"
	},
	"/assets/about-BXDwA1qV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"231cb-CiwsZUwBUQhMqaEdqGFPTHMRxyE\"",
		"mtime": "2026-07-24T21:50:03.024Z",
		"size": 143819,
		"path": "../public/assets/about-BXDwA1qV.js"
	},
	"/assets/avatar-JAw0khMM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a17-yWvlwPCtdyaWifiSW2S6D+dqYvc\"",
		"mtime": "2026-07-24T21:50:03.028Z",
		"size": 2583,
		"path": "../public/assets/avatar-JAw0khMM.js"
	},
	"/assets/authStore-CaqoG73F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52a-dZreZvm4dHvjo7uqc4DSodetM28\"",
		"mtime": "2026-07-24T21:50:03.026Z",
		"size": 1322,
		"path": "../public/assets/authStore-CaqoG73F.js"
	},
	"/assets/card-CMrCZ_SM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fd-FySVHqLK0XiW98Fjvdwb0uqPeoE\"",
		"mtime": "2026-07-24T21:50:03.030Z",
		"size": 1021,
		"path": "../public/assets/card-CMrCZ_SM.js"
	},
	"/assets/button-DVZbYzNr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ecca-yYsOR3qY1QKi7vV9yhfdsQ/s6bM\"",
		"mtime": "2026-07-24T21:50:03.029Z",
		"size": 60618,
		"path": "../public/assets/button-DVZbYzNr.js"
	},
	"/assets/circle-alert-BglgYywm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-B4Dx5HQJ6QbkC2oBmeP6z1rCPSU\"",
		"mtime": "2026-07-24T21:50:03.031Z",
		"size": 240,
		"path": "../public/assets/circle-alert-BglgYywm.js"
	},
	"/assets/chevron-right-B1XUNvvB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78-WfqwM0uAWlfgcx8HbPk7oI+Td7M\"",
		"mtime": "2026-07-24T21:50:03.030Z",
		"size": 120,
		"path": "../public/assets/chevron-right-B1XUNvvB.js"
	},
	"/assets/circle-check-B9HRCZbX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-Y1Z+abA/LA8kx3CuI6zXFw3Np2U\"",
		"mtime": "2026-07-24T21:50:03.032Z",
		"size": 168,
		"path": "../public/assets/circle-check-B9HRCZbX.js"
	},
	"/assets/code-xml-DGLK_E1O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-F8Giyj+35TvorGDVA+xjvkQBLDg\"",
		"mtime": "2026-07-24T21:50:03.032Z",
		"size": 198,
		"path": "../public/assets/code-xml-DGLK_E1O.js"
	},
	"/assets/database-Do9VQ3pR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-HK5NNH69BrsfOxko9hf3ciajdrM\"",
		"mtime": "2026-07-24T21:50:03.037Z",
		"size": 233,
		"path": "../public/assets/database-Do9VQ3pR.js"
	},
	"/assets/dashboard-qOmY41Ac.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2640-S8vtBo4C4I1pqBZIkVX+BTdpj1Y\"",
		"mtime": "2026-07-24T21:50:03.036Z",
		"size": 9792,
		"path": "../public/assets/dashboard-qOmY41Ac.js"
	},
	"/assets/dist-BuMZoSYL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f3c-SmlENBw7itrqFHPxSDhn2i15EfY\"",
		"mtime": "2026-07-24T21:50:03.039Z",
		"size": 32572,
		"path": "../public/assets/dist-BuMZoSYL.js"
	},
	"/assets/courses-Bnii2ctX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3c9-g+pxS9//bJSjKD4kag1sN6At1b4\"",
		"mtime": "2026-07-24T21:50:03.035Z",
		"size": 41929,
		"path": "../public/assets/courses-Bnii2ctX.js"
	},
	"/assets/courses-DxfM48RL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16da1-kjKvmX5fqK2vm+bzAlEHUGooECs\"",
		"mtime": "2026-07-24T21:50:03.035Z",
		"size": 93601,
		"path": "../public/assets/courses-DxfM48RL.js"
	},
	"/assets/graduation-cap-9EEiJFlF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-njCf25qzqG/fS9YT1jaRms8Sopo\"",
		"mtime": "2026-07-24T21:50:03.043Z",
		"size": 322,
		"path": "../public/assets/graduation-cap-9EEiJFlF.js"
	},
	"/assets/github-CISHhgIv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-SLWdkoJbHGRUMxQS2F5baqM73Hc\"",
		"mtime": "2026-07-24T21:50:03.042Z",
		"size": 397,
		"path": "../public/assets/github-CISHhgIv.js"
	},
	"/assets/dist-DgFydFs9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5d-3DuGfPbRkGYpttLVAN3V3nafu3w\"",
		"mtime": "2026-07-24T21:50:03.040Z",
		"size": 3933,
		"path": "../public/assets/dist-DgFydFs9.js"
	},
	"/assets/link-C-4Tbtvp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e69-LOjuTWac2UBkSA6Ac7P4dgsGnCc\"",
		"mtime": "2026-07-24T21:50:03.044Z",
		"size": 24169,
		"path": "../public/assets/link-C-4Tbtvp.js"
	},
	"/assets/login-B-b-mEr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d62-j2n53dgjh/Fub5CGcCd2zJsvgqg\"",
		"mtime": "2026-07-24T21:50:03.045Z",
		"size": 7522,
		"path": "../public/assets/login-B-b-mEr_.js"
	},
	"/assets/index-BOqUgEeJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f42e-F6SslPNf7xh1JvDlvADRvQdIzEk\"",
		"mtime": "2026-07-24T21:50:03.022Z",
		"size": 521262,
		"path": "../public/assets/index-BOqUgEeJ.js"
	},
	"/assets/play-CFh1kqWs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4-N4YrElCuUpFLkPkGAnUTTDNdrok\"",
		"mtime": "2026-07-24T21:50:03.047Z",
		"size": 180,
		"path": "../public/assets/play-CFh1kqWs.js"
	},
	"/assets/overview-B0NyufAc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30ac-iJ4Rq0z7qVJXrT/Lu9qXxcQeeJ8\"",
		"mtime": "2026-07-24T21:50:03.045Z",
		"size": 12460,
		"path": "../public/assets/overview-B0NyufAc.js"
	},
	"/assets/overview-DtAuBGbS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d9-AnwoxmF0dGKOnc3LqQ/glKHuw+c\"",
		"mtime": "2026-07-24T21:50:03.046Z",
		"size": 729,
		"path": "../public/assets/overview-DtAuBGbS.js"
	},
	"/assets/products-CoEuUtr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a6-UFAXlYX0aMr+4K9KBpgDvLOkkQI\"",
		"mtime": "2026-07-24T21:50:03.048Z",
		"size": 6566,
		"path": "../public/assets/products-CoEuUtr_.js"
	},
	"/assets/profile-D8xM99e4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16cd-ykNhBLmlEjuYA9eOwZVwL/QFp80\"",
		"mtime": "2026-07-24T21:50:03.048Z",
		"size": 5837,
		"path": "../public/assets/profile-D8xM99e4.js"
	},
	"/assets/ProtectedRoute-DnJ3DvJe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a5-BwIo7bolDsaFXWFQL5OkamAbQ14\"",
		"mtime": "2026-07-24T21:50:03.023Z",
		"size": 677,
		"path": "../public/assets/ProtectedRoute-DnJ3DvJe.js"
	},
	"/assets/proxy-DbR87Wkk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e06e-6MU2F4IhXxVQbpgsnz0ZC0dk+yo\"",
		"mtime": "2026-07-24T21:50:03.049Z",
		"size": 122990,
		"path": "../public/assets/proxy-DbR87Wkk.js"
	},
	"/assets/react-dom-BUVAeu7x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"241d-IWA2/OGAjVzoE98JpZgolKtYghM\"",
		"mtime": "2026-07-24T21:50:03.051Z",
		"size": 9245,
		"path": "../public/assets/react-dom-BUVAeu7x.js"
	},
	"/assets/routes-Bmt6x3n5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41dd-rAGh3hMJUStEGU5ChsPbNMDAKVc\"",
		"mtime": "2026-07-24T21:50:03.052Z",
		"size": 16861,
		"path": "../public/assets/routes-Bmt6x3n5.js"
	},
	"/assets/sparkles-CYgVKuE2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-LxbE4wfIkJhbXWN7Dif16691aeM\"",
		"mtime": "2026-07-24T21:50:03.052Z",
		"size": 484,
		"path": "../public/assets/sparkles-CYgVKuE2.js"
	},
	"/assets/QueryClientProvider-BnffG8GT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ebf-maMEnrfgtYSj9HTwiBxfYqyvRRI\"",
		"mtime": "2026-07-24T21:50:03.024Z",
		"size": 16063,
		"path": "../public/assets/QueryClientProvider-BnffG8GT.js"
	},
	"/assets/styles-DVmu--_k.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1aab0-K1PMbddp93GSrJITshQOHLWvhBM\"",
		"mtime": "2026-07-24T21:50:03.056Z",
		"size": 109232,
		"path": "../public/assets/styles-DVmu--_k.css"
	},
	"/assets/useQuery-ByHP2HGL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d5-e9R7FX2j+LsqP7fSvebrv/CNY6E\"",
		"mtime": "2026-07-24T21:50:03.055Z",
		"size": 9429,
		"path": "../public/assets/useQuery-ByHP2HGL.js"
	},
	"/assets/types-D7DGvYnQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6cc-5O5oXAgPDeGUJx8ZcscHbK8LG5g\"",
		"mtime": "2026-07-24T21:50:03.054Z",
		"size": 63180,
		"path": "../public/assets/types-D7DGvYnQ.js"
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
