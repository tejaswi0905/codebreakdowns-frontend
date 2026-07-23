import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { E as Camera } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-DUOgzUW5.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as AvatarFallback, t as Avatar } from "./avatar-DpxNuZ9Y.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DGg3PtEa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var initial = {
	fullName: "Aditi Kumar",
	email: "aditi@example.com",
	phone: "+91 98765 43210",
	college: "Indian Institute of Technology, Delhi",
	degree: "B.Tech, Computer Science",
	gradYear: "2025",
	city: "New Delhi",
	state: "Delhi",
	country: "India",
	linkedin: "linkedin.com/in/aditi-kumar",
	github: "github.com/aditik"
};
var groups = [
	{
		title: "Personal",
		fields: [
			{
				key: "fullName",
				label: "Full Name"
			},
			{
				key: "email",
				label: "Email",
				type: "email"
			},
			{
				key: "phone",
				label: "Phone Number"
			}
		]
	},
	{
		title: "Education",
		fields: [
			{
				key: "college",
				label: "College"
			},
			{
				key: "degree",
				label: "Degree"
			},
			{
				key: "gradYear",
				label: "Graduation Year"
			}
		]
	},
	{
		title: "Location",
		fields: [
			{
				key: "city",
				label: "City"
			},
			{
				key: "state",
				label: "State"
			},
			{
				key: "country",
				label: "Country"
			}
		]
	},
	{
		title: "Social",
		fields: [{
			key: "linkedin",
			label: "LinkedIn"
		}, {
			key: "github",
			label: "GitHub"
		}]
	}
];
function ProfilePage() {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [saved, setSaved] = (0, import_react.useState)(initial);
	const dirty = JSON.stringify(values) !== JSON.stringify(saved);
	const set = (k, v) => setValues((p) => ({
		...p,
		[k]: v
	}));
	const onSave = () => {
		setSaved(values);
		toast.success("Profile updated", { description: "Your changes have been saved." });
	};
	const onCancel = () => setValues(saved);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				children: "My Profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Manage your personal details and preferences."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 border-b border-border pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-20 w-20 border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "bg-primary/10 text-xl font-semibold text-primary",
								children: "AK"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Change photo",
							className: "absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-semibold",
						children: values.fullName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: values.email
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-8",
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: g.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: f.key,
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: f.key,
								type: f.type ?? "text",
								value: values[f.key],
								onChange: (e) => set(f.key, e.target.value)
							})]
						}, f.key))
					})] }, g.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-end gap-3 border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onCancel,
						disabled: !dirty,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onSave,
						disabled: !dirty,
						children: "Save Changes"
					})]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, {}) });
//#endregion
export { SplitComponent as component };
