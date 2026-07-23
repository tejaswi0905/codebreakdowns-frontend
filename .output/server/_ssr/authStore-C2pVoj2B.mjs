import { a as fetchCurrentUser, c as logoutUser } from "./api-C0X-qdL4.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/authStore-C2pVoj2B.js
var useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	isLoading: true,
	checkAuth: async () => {
		try {
			set({ isLoading: true });
			const user = await fetchCurrentUser();
			if (user) set({
				user,
				isAuthenticated: true,
				isLoading: false
			});
			else set({
				user: null,
				isAuthenticated: false,
				isLoading: false
			});
		} catch (error) {
			set({
				user: null,
				isAuthenticated: false,
				isLoading: false
			});
		}
	},
	logout: async () => {
		try {
			set({ isLoading: true });
			if (await logoutUser()) set({
				user: null,
				isAuthenticated: false,
				isLoading: false
			});
			else set({ isLoading: false });
		} catch (error) {
			set({ isLoading: false });
		}
	}
}));
//#endregion
export { useAuthStore as t };
