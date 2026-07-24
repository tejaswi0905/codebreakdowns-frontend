import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as useAuthStore } from "./authStore-C2pVoj2B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProtectedRoute-w8xJ0Iul.js
var import_jsx_runtime = require_jsx_runtime();
function ProtectedRoute({ children }) {
	const { isAuthenticated, isLoading } = useAuthStore();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[80vh] w-full items-center justify-center",
		"data-tsd-source": "/src/components/ProtectedRoute.tsx:10:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "h-8 w-8 animate-spin text-primary",
			"data-tsd-source": "/src/components/ProtectedRoute.tsx:11:9"
		})
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true,
		"data-tsd-source": "/src/components/ProtectedRoute.tsx:17:12"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { ProtectedRoute as t };
