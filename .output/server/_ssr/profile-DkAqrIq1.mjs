import { a as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { A as LoaderCircle, Y as CircleCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as updateUserProfile } from "./api-DgzOPn4j.mjs";
import { t as useAuthStore } from "./authStore-iwCKHJq-.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-CjFyEbHi.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-gunzrkKA.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DkAqrIq1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var emptyFields = {
	fullName: "",
	email: "",
	phone: "",
	college: "",
	degree: "",
	gradYear: "",
	city: "",
	state: "",
	country: "",
	linkedin: "",
	github: ""
};
function getInitials(name) {
	if (!name) return "U";
	const trimmed = name.trim();
	if (!trimmed) return "U";
	const parts = trimmed.split(/\s+/);
	if (parts.length >= 2) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
	return trimmed.slice(0, 2).toUpperCase();
}
var fieldGroups = [
	{
		title: "Personal Information",
		fields: [
			{
				key: "fullName",
				label: "Full Name",
				placeholder: "e.g. Alex Johnson"
			},
			{
				key: "email",
				label: "Email Address",
				placeholder: "alex@example.com",
				type: "email",
				readOnly: true,
				hint: "Managed via your OAuth provider (GitHub)"
			},
			{
				key: "phone",
				label: "Phone Number",
				placeholder: "+91 98765 43210"
			}
		]
	},
	{
		title: "Education & Academics",
		fields: [
			{
				key: "college",
				label: "College / University",
				placeholder: "e.g. Stanford University or IIT Delhi"
			},
			{
				key: "degree",
				label: "Degree & Major",
				placeholder: "e.g. B.Tech Computer Science"
			},
			{
				key: "gradYear",
				label: "Graduation Year",
				placeholder: "e.g. 2026"
			}
		]
	},
	{
		title: "Location",
		fields: [
			{
				key: "city",
				label: "City",
				placeholder: "e.g. Bengaluru"
			},
			{
				key: "state",
				label: "State / Province",
				placeholder: "e.g. Karnataka"
			},
			{
				key: "country",
				label: "Country",
				placeholder: "e.g. India"
			}
		]
	},
	{
		title: "Social & Professional Profiles",
		fields: [{
			key: "linkedin",
			label: "LinkedIn URL or Username",
			placeholder: "https://linkedin.com/in/username"
		}, {
			key: "github",
			label: "GitHub URL or Username",
			placeholder: "https://github.com/username"
		}]
	}
];
function ProfilePage() {
	const { user, setUser } = useAuthStore();
	const [values, setValues] = (0, import_react.useState)(emptyFields);
	const [saved, setSaved] = (0, import_react.useState)(emptyFields);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user) {
			const synced = {
				fullName: user.name || "",
				email: user.email || "",
				phone: user.phone || "",
				college: user.college || "",
				degree: user.degree || "",
				gradYear: user.gradYear || "",
				city: user.city || "",
				state: user.state || "",
				country: user.country || "",
				linkedin: user.linkedin || "",
				github: user.github || ""
			};
			setValues(synced);
			setSaved(synced);
		}
	}, [user]);
	const isDirty = JSON.stringify(values) !== JSON.stringify(saved);
	const handleFieldChange = (key, val) => {
		setValues((prev) => ({
			...prev,
			[key]: val
		}));
	};
	const handleSave = async (e) => {
		e.preventDefault();
		if (!isDirty || isSaving) return;
		if (!values.fullName.trim()) {
			toast.error("Full name cannot be empty.");
			return;
		}
		setIsSaving(true);
		try {
			const updatedUser = await updateUserProfile({
				name: values.fullName.trim(),
				phone: values.phone.trim() || null,
				college: values.college.trim() || null,
				degree: values.degree.trim() || null,
				gradYear: values.gradYear.trim() || null,
				city: values.city.trim() || null,
				state: values.state.trim() || null,
				country: values.country.trim() || null,
				linkedin: values.linkedin.trim() || null,
				github: values.github.trim() || null
			});
			setUser(updatedUser);
			setSaved(values);
			toast.success("Profile updated successfully! 🎉", { description: "Your changes have been saved to your account." });
		} catch (err) {
			toast.error(err.message || "Failed to update profile. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};
	const handleCancel = () => {
		setValues(saved);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
				children: "My Profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Manage your personal details, academic background, and hiring preferences."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 sm:p-8 border border-border shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
						className: "h-20 w-20 border border-border shadow-inner",
						children: [user?.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: user.avatarUrl,
							alt: values.fullName || user.name || "Student"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary/10 text-2xl font-bold text-primary",
							children: getInitials(values.fullName || user?.name)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold text-foreground",
							children: values.fullName || user?.name || "Student"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider",
							children: user?.role || "STUDENT"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground mt-0.5",
						children: user?.email
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Profile active on database" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSave,
				className: "mt-6 space-y-8",
				children: [fieldGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: group.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: f.key,
									className: "text-xs font-medium text-foreground",
									children: f.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: f.key,
									type: f.type ?? "text",
									placeholder: f.placeholder,
									value: values[f.key],
									disabled: f.readOnly,
									readOnly: f.readOnly,
									onChange: (e) => handleFieldChange(f.key, e.target.value),
									className: f.readOnly ? "bg-muted/50 cursor-not-allowed opacity-80" : ""
								}),
								f.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: f.hint
								})
							]
						}, f.key))
					})]
				}, group.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-end gap-3 border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: handleCancel,
						disabled: !isDirty || isSaving,
						children: "Discard Changes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: !isDirty || isSaving,
						className: "min-w-[130px] shadow-sm font-medium",
						children: isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Saving..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), "Save Changes"] })
					})]
				})]
			})]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, {}) });
//#endregion
export { SplitComponent as component };
