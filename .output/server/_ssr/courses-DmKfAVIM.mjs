import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-DmKfAVIM.js
var $$splitComponentImporter = () => import("./courses-Opbef-51.mjs");
var courseSearchSchema = objectType({ courseId: stringType().optional() });
var Route = createFileRoute("/courses")({
	validateSearch: courseSearchSchema,
	head: () => ({ meta: [{ title: "Course Player — CodeBreakdowns" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
