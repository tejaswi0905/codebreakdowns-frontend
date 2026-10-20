import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-DbF4Z_LC.js
var $$splitComponentImporter = () => import("./overview-Dh4BUb45.mjs");
var overviewSearchSchema = objectType({ courseId: stringType() });
var Route = createFileRoute("/overview")({
	validateSearch: overviewSearchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
