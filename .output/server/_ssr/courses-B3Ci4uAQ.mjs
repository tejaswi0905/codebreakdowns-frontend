import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-B3Ci4uAQ.js
var $$splitComponentImporter = () => import("./courses-v8tWcZA7.mjs");
var courseSearchSchema = objectType({
	courseId: stringType().optional(),
	lessonId: stringType().optional()
});
var Route = createFileRoute("/courses")({
	validateSearch: courseSearchSchema,
	head: () => ({ meta: [{ title: "Course Curriculum & Player — CodeBreakdowns" }, {
		name: "description",
		content: "Explore structured breakdowns of DSA patterns, systems concepts, and real-world engineering modules."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
