import { r as __exportAll$1 } from "../_runtime.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-C0X-qdL4.js
var api_C0X_qdL4_exports = /* @__PURE__ */ __exportAll$1({
	a: () => fetchMyCourses,
	c: () => markLessonComplete,
	i: () => fetchCurrentUser,
	l: () => API_BASE_URL,
	n: () => fetchCoursePlayData,
	o: () => fetchProducts,
	r: () => fetchCourses,
	s: () => logoutUser,
	t: () => api_exports
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var API_BASE_URL = "http://localhost:3000/api/v1";
var api_exports = /* @__PURE__ */ __exportAll({
	fetchCoursePlayData: () => fetchCoursePlayData,
	fetchCourses: () => fetchCourses,
	fetchCurrentUser: () => fetchCurrentUser,
	fetchMyCourses: () => fetchMyCourses,
	fetchProducts: () => fetchProducts,
	logoutUser: () => logoutUser,
	markLessonComplete: () => markLessonComplete
});
async function authFetch(endpoint, options = {}) {
	return await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...options.headers
		}
	});
}
var fetchCourses = async () => {
	const response = await authFetch(`/courses`);
	if (!response.ok) throw new Error("Failed to fetch courses");
	return (await response.json()).data;
};
var fetchProducts = async () => {
	const response = await authFetch(`/products`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return (await response.json()).data;
};
var fetchMyCourses = async () => {
	const response = await authFetch(`/courses/my-courses`);
	if (!response.ok) throw new Error("Failed to fetch purchased courses");
	return (await response.json()).data;
};
var fetchCoursePlayData = async (courseId) => {
	const response = await authFetch(`/courses/${courseId}/play`);
	if (!response.ok) throw new Error("Failed to fetch course data or you don't have access");
	return (await response.json()).data;
};
var fetchCurrentUser = async () => {
	try {
		const response = await authFetch(`/users/me`);
		if (!response.ok) {
			if (response.status === 401) return null;
			throw new Error("Failed to fetch profile");
		}
		return (await response.json()).data;
	} catch (error) {
		console.error("fetchCurrentUser error:", error);
		return null;
	}
};
var markLessonComplete = async (lessonId) => {
	try {
		return (await authFetch(`/progress/complete`, {
			method: "POST",
			body: JSON.stringify({
				lessonId,
				isCompleted: true
			})
		})).ok;
	} catch (error) {
		console.error("Error marking lesson complete:", error);
		return false;
	}
};
var logoutUser = async () => {
	try {
		return (await authFetch(`/users/auth/logout`, { method: "POST" })).ok;
	} catch (error) {
		console.error("logout error:", error);
		return false;
	}
};
//#endregion
export { fetchCurrentUser as a, logoutUser as c, fetchCourses as i, markLessonComplete as l, api_C0X_qdL4_exports as n, fetchMyCourses as o, fetchCoursePlayData as r, fetchProducts as s, API_BASE_URL as t };
