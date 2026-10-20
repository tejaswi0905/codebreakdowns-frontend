//#region node_modules/.nitro/vite/services/ssr/assets/api-BUiRiYXp.js
var API_BASE_URL = "http://localhost:3000/api/v1";
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
	try {
		const response = await authFetch(`/courses/my-courses`);
		if (!response.ok) {
			if (response.status === 401) return [];
			throw new Error("Failed to fetch purchased courses");
		}
		return (await response.json()).data || [];
	} catch {
		return [];
	}
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
var markLessonCompletedApi = async (lessonId) => {
	try {
		const response = await authFetch(`/progress/complete`, {
			method: "POST",
			body: JSON.stringify({
				lessonId,
				isCompleted: true
			})
		});
		if (!response.ok) return {
			success: false,
			error: (await response.json().catch(() => ({}))).message || "Failed to mark lesson complete"
		};
		return { success: true };
	} catch (error) {
		console.error("Error marking lesson complete:", error);
		return {
			success: false,
			error: error?.message || "Network error"
		};
	}
};
var recordHeartbeat = async (lessonId, currentTime) => {
	try {
		return (await authFetch(`/progress/heartbeat`, {
			method: "POST",
			body: JSON.stringify({
				lessonId,
				currentTime
			})
		})).ok;
	} catch (error) {
		console.error("Error recording heartbeat:", error);
		return false;
	}
};
var toggleBookmarkApi = async (lessonId, isBookmarked) => {
	try {
		return (await authFetch(`/progress/bookmark`, {
			method: "POST",
			body: JSON.stringify({
				lessonId,
				isBookmarked
			})
		})).ok;
	} catch (error) {
		console.error("Error toggling bookmark:", error);
		return false;
	}
};
var fetchDashboardStats = async () => {
	const response = await authFetch(`/progress/stats`);
	if (!response.ok) throw new Error("Failed to fetch dashboard stats");
	return (await response.json()).data;
};
var logoutUser = async () => {
	try {
		return (await authFetch(`/users/auth/logout`, { method: "POST" })).ok;
	} catch (error) {
		console.error("logout error:", error);
		return false;
	}
};
var createCheckoutOrder = async (productId) => {
	const response = await authFetch(`/payments/checkout/${productId}`, { method: "POST" });
	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(errorData.message || "Failed to initiate checkout");
	}
	return (await response.json()).data;
};
var verifyPayment = async (payload) => {
	const response = await authFetch(`/payments/verify`, {
		method: "POST",
		body: JSON.stringify(payload)
	});
	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(errorData.message || "Payment verification failed");
	}
	return true;
};
//#endregion
export { fetchCurrentUser as a, fetchProducts as c, recordHeartbeat as d, toggleBookmarkApi as f, fetchCourses as i, logoutUser as l, createCheckoutOrder as n, fetchDashboardStats as o, verifyPayment as p, fetchCoursePlayData as r, fetchMyCourses as s, API_BASE_URL as t, markLessonCompletedApi as u };
