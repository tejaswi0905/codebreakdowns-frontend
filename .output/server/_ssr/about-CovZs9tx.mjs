import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CM_IL3Hu.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Github, P as GraduationCap, U as CodeXml, i as Users, it as BookOpen, n as Youtube, o as Twitter, v as Quote, w as MapPin, x as MonitorPlay } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as Line, i as Graticule$1, n as Geographies, o as Marker, r as Geography$1, t as ComposableMap } from "../_libs/react-simple-maps+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CovZs9tx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
function GlobeMap({ userLocation, hqLocation }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full h-full relative cursor-crosshair",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposableMap, {
				projection: "geoOrthographic",
				projectionConfig: {
					scale: 280,
					rotate: (0, import_react.useMemo)(() => {
						if (!userLocation) return [
							-hqLocation.lng,
							-hqLocation.lat,
							0
						];
						let midLng = (hqLocation.lng + userLocation.lng) / 2;
						let midLat = (hqLocation.lat + userLocation.lat) / 2;
						if (Math.abs(hqLocation.lng - userLocation.lng) > 180) midLng += midLng > 0 ? -180 : 180;
						return [
							-midLng,
							-midLat - 10,
							0
						];
					}, [userLocation, hqLocation])
				},
				className: "w-full h-full animate-in fade-in duration-1000",
				style: {
					width: "100%",
					height: "100%",
					transition: "transform 1.5s ease-in-out"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Graticule$1, {
						stroke: "rgba(var(--color-primary), 0.1)",
						strokeWidth: .5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geographies, {
						geography: geoUrl,
						children: ({ geographies }) => geographies.map((geo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geography$1, {
							geography: geo,
							fill: "hsl(var(--muted))",
							stroke: "hsl(var(--background))",
							strokeWidth: .5,
							style: {
								default: { outline: "none" },
								hover: {
									fill: "hsl(var(--muted-foreground))",
									outline: "none"
								},
								pressed: { outline: "none" }
							}
						}, geo.rsmKey))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Marker, {
						coordinates: [hqLocation.lng, hqLocation.lat],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 6,
							fill: "hsl(var(--primary))",
							opacity: .3,
							className: "animate-ping"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 4,
							fill: "hsl(var(--primary))"
						})]
					}),
					userLocation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Marker, {
						coordinates: [userLocation.lng, userLocation.lat],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 6,
							fill: "hsl(var(--success))",
							opacity: .3,
							className: "animate-ping"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 4,
							fill: "hsl(var(--success))"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						from: [hqLocation.lng, hqLocation.lat],
						to: [userLocation.lng, userLocation.lat],
						stroke: "hsl(var(--primary))",
						strokeWidth: 2,
						strokeLinecap: "round",
						strokeDasharray: "4 4",
						className: "animate-in fade-in duration-1000",
						style: {
							strokeDasharray: "4 4",
							strokeDashoffset: 0,
							animation: "dash 2s linear infinite"
						}
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      ` })
		]
	});
}
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
	const R = 6371;
	const dLat = deg2rad(lat2 - lat1);
	const dLon = deg2rad(lon2 - lon1);
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const d = R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
	return Math.round(d);
}
function deg2rad(deg) {
	return deg * (Math.PI / 180);
}
var HQ_LOCATION = {
	lat: 17.448,
	lng: 78.3812,
	city: "Hyderabad"
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var fadeUpVariant = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: "easeOut"
		}
	}
};
function AboutPage() {
	const [distance, setDistance] = (0, import_react.useState)(null);
	const [isCalculating, setIsCalculating] = (0, import_react.useState)(false);
	const [userLocation, setUserLocation] = (0, import_react.useState)(null);
	const [userCity, setUserCity] = (0, import_react.useState)(null);
	const calculateDistance = async () => {
		setIsCalculating(true);
		try {
			const res = await fetch("https://ipapi.co/json/");
			if (!res.ok) throw new Error("Failed to fetch location");
			const data = await res.json();
			if (data.latitude && data.longitude) {
				setUserLocation({
					lat: data.latitude,
					lng: data.longitude
				});
				setUserCity(data.city || data.country_name || "your location");
				const dist = calculateDistanceKm(HQ_LOCATION.lat, HQ_LOCATION.lng, data.latitude, data.longitude);
				setDistance(dist);
			}
		} catch (error) {
			console.error("Geolocation failed:", error);
			setDistance(8420);
			setUserCity("a mysterious land");
		} finally {
			setIsCalculating(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-border),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-border),0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4",
						children: [
							"Built by engineers, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "for future engineers."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-muted-foreground max-w-2xl",
						children: "We believe the traditional way of preparing for tech interviews is broken. We're here to fix it with structured, pattern-based playbooks."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerContainer,
					initial: "hidden",
					animate: "visible",
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUpVariant,
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "h-full relative overflow-hidden border-border bg-card group p-8 flex flex-col justify-center min-h-[250px] shadow-sm hover:shadow-md transition-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-48 h-48 text-primary -mr-8 -mt-8 rotate-12" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 max-w-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorPlay, { className: "w-6 h-6 text-primary" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight",
											children: [
												"We left our software jobs ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												" for full-time teaching."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-lg",
											children: "We've been through the grind, built production systems, and sat on both sides of the interview table. Now, we're dedicated 100% to helping you do the same."
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUpVariant,
							className: "col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "h-full border-border bg-primary/5 group p-8 flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors min-h-[250px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-10 h-10 text-primary/40 mb-4 group-hover:scale-110 transition-transform origin-top-left" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug",
									children: "\"You miss 100% of the shots you don't take.\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[2px] w-8 bg-primary/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-muted-foreground uppercase tracking-widest",
										children: "Start Building"
									})]
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUpVariant,
							className: "col-span-1 md:col-span-2 lg:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "h-full overflow-hidden border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col group min-h-[300px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 bg-secondary/10 relative flex items-center justify-center overflow-hidden min-h-[300px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeMap, {
										userLocation,
										hqLocation: HQ_LOCATION
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 bg-card border-t border-border z-10 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-start justify-between mb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-bold text-foreground flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary" }),
												" HQ: ",
												HQ_LOCATION.city
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground mt-1",
											children: distance === null ? "Calculate distance from your browser to our servers." : `You are approximately ${distance.toLocaleString()} km away in ${userCity}!`
										})] })
									}), !distance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "w-full mt-4",
										onClick: calculateDistance,
										disabled: isCalculating,
										children: isCalculating ? "Calculating..." : "Ping HQ"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUpVariant,
							className: "col-span-1 md:col-span-2 lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "h-full border-border bg-card p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-shadow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-6 h-6 text-success" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight",
											children: [
												"We've coached hundreds offline.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												" Now we're moving online."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-lg mb-6",
											children: "For years, we've helped students crack technical interviews through intensive, in-person bootcamps. We are taking those exact, proven frameworks and making them accessible to developers globally."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-4 h-4 mr-2" }), " 500+ Offline Students"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4 mr-2" }), " Proven Curriculum"]
											})]
										})
									]
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card/50 border-y border-border py-24 md:py-32 px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight",
							children: [
								"Ready to stop grinding ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" and start learning?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-muted-foreground mb-10 max-w-2xl mx-auto",
							children: "Join the best learning platform for modern developers. Master the Blind 75, ace your system design rounds, and land the internship."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "rounded-full px-8 h-16 text-lg font-bold shadow-xl hover:shadow-2xl transition-all bg-foreground text-background hover:bg-foreground/90 group",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/login",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-3 w-6 h-6 group-hover:scale-110 transition-transform" }), "Sign up with GitHub"]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-background py-16 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground text-2xl tracking-tight block mb-4",
									children: "Codebreakdowns."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground max-w-xs mb-6",
									children: "The blueprint for tech internships and developer roles. Built by engineers, for engineers."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground/70",
									children: [
										"© ",
										(/* @__PURE__ */ new Date()).getFullYear(),
										" All rights reserved."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-foreground mb-4",
							children: "Courses"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: "Blind 75 Breakdown"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: "Blind 150 Extension"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: "Blind SQL 25"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: "Backend Essentials"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/courses",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: "Resume Projects"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-foreground mb-4",
							children: "Social"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://twitter.com",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center text-muted-foreground hover:text-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "w-4 h-4 mr-2" }), " Twitter"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://youtube.com",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center text-muted-foreground hover:text-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-4 h-4 mr-2" }), " YouTube"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center text-muted-foreground hover:text-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4 mr-2" }), " GitHub"]
								}) })
							]
						})] })
					]
				})
			})
		]
	});
}
//#endregion
export { AboutPage as component };
