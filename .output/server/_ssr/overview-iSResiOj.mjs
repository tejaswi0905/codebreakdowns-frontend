import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-iSResiOj.js
var $$splitComponentImporter = () => import("./overview-DR0DzkkB.mjs");
var overviewSearchSchema = objectType({ courseId: stringType() });
var Route = createFileRoute("/overview")({
	validateSearch: overviewSearchSchema,
	head: () => ({ meta: [{ title: "Course Overview & Roadmap — CodeBreakdowns" }, {
		name: "description",
		content: "Track your modular milestone progression, solved problems, and course roadmap."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
