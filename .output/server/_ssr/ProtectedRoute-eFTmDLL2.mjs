import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as useAuthStore } from "./authStore-CaRoAg4M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProtectedRoute-eFTmDLL2.js
var import_jsx_runtime = require_jsx_runtime();
function ProtectedRoute({ children }) {
	const { isAuthenticated, isLoading } = useAuthStore();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[80vh] w-full items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { ProtectedRoute as t };
