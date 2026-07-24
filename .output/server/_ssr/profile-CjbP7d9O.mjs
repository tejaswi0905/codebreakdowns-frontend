import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as Card } from "./card-j38Ih5p7.mjs";
import { P as Camera } from "../_libs/lucide-react.mjs";
import { t as ProtectedRoute } from "./ProtectedRoute-w8xJ0Iul.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as AvatarFallback, t as Avatar } from "./avatar-DpxNuZ9Y.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CjbP7d9O.js
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
		"data-tsd-source": "/src/routes/profile.tsx:102:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			"data-tsd-source": "/src/routes/profile.tsx:103:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight sm:text-3xl",
				"data-tsd-source": "/src/routes/profile.tsx:104:9",
				children: "My Profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/profile.tsx:107:9",
				children: "Manage your personal details and preferences."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 sm:p-8",
			"data-tsd-source": "/src/routes/profile.tsx:112:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 border-b border-border pb-6",
					"data-tsd-source": "/src/routes/profile.tsx:113:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						"data-tsd-source": "/src/routes/profile.tsx:114:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-20 w-20 border border-border",
							"data-tsd-source": "/src/routes/profile.tsx:115:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "bg-primary/10 text-xl font-semibold text-primary",
								"data-tsd-source": "/src/routes/profile.tsx:116:15",
								children: "AK"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Change photo",
							className: "absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105",
							"data-tsd-source": "/src/routes/profile.tsx:120:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
								className: "h-4 w-4",
								"data-tsd-source": "/src/routes/profile.tsx:125:15"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/profile.tsx:128:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-semibold",
							"data-tsd-source": "/src/routes/profile.tsx:129:13",
							children: values.fullName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							"data-tsd-source": "/src/routes/profile.tsx:130:13",
							children: values.email
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-8",
					"data-tsd-source": "/src/routes/profile.tsx:134:9",
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"data-tsd-source": "/src/routes/profile.tsx:136:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
							"data-tsd-source": "/src/routes/profile.tsx:137:15",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							"data-tsd-source": "/src/routes/profile.tsx:140:15",
							children: g.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								"data-tsd-source": "/src/routes/profile.tsx:142:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: f.key,
									"data-tsd-source": "/src/routes/profile.tsx:143:21",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: f.key,
									type: f.type ?? "text",
									value: values[f.key],
									onChange: (e) => set(f.key, e.target.value),
									"data-tsd-source": "/src/routes/profile.tsx:144:21"
								})]
							}, f.key))
						})]
					}, g.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-end gap-3 border-t border-border pt-6",
					"data-tsd-source": "/src/routes/profile.tsx:157:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onCancel,
						disabled: !dirty,
						"data-tsd-source": "/src/routes/profile.tsx:158:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onSave,
						disabled: !dirty,
						"data-tsd-source": "/src/routes/profile.tsx:161:11",
						children: "Save Changes"
					})]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	"data-tsd-source": "/src/routes/profile.tsx:22:5",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, { "data-tsd-source": "/src/routes/profile.tsx:23:7" })
});
//#endregion
export { SplitComponent as component };
