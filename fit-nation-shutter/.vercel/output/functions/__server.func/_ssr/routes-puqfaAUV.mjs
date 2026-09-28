import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { U as isRedirect, b as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TSS_SERVER_FUNCTION, i as createServerFn, o as getServerFnById } from "./server-BywTNSnb.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { _ as ArrowRight, a as Phone, c as LoaderCircle, d as Gem, f as Dumbbell, g as Ban, h as Brain, i as ShieldCheck, l as HeartPulse, m as CircleCheck, n as Trophy, o as Mountain, p as Clock, r as Star, s as MapPin, t as Users, u as GlassWater } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-puqfaAUV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
/**
* Minimal, privacy-preserving event tracking.
*
* Only non-personal context (e.g. which button/section was used) should ever be
* passed here. As a safety net, any value that looks like an email address or a
* long digit sequence (phone number) is replaced with "[REDACTED]" before it is
* handed to an analytics provider, so visitor-entered details can never leak
* into third-party tracking events.
*/
var EMAIL_LIKE = /[^\s@]+@[^\s@]+\.[^\s@]+/;
var PHONE_LIKE = /\d[\d\s().-]{7,}/;
function redactValue(value) {
	if (typeof value !== "string") return value;
	if (EMAIL_LIKE.test(value) || PHONE_LIKE.test(value)) return "[REDACTED]";
	return value;
}
function redactProperties(properties) {
	const safe = {};
	for (const [key, value] of Object.entries(properties)) safe[key] = redactValue(value);
	return safe;
}
var trackEvent = (eventName, properties) => {
	const safeProperties = properties ? redactProperties(properties) : void 0;
	const gtag = globalThis.gtag;
	if (typeof window !== "undefined" && typeof gtag === "function") gtag("event", eventName, safeProperties);
};
var fit_nation_logo_transparent_png_asset_default = {
	version: 1,
	asset_id: "97202199-3c88-4606-9117-4180ee599450",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/97202199-3c88-4606-9117-4180ee599450/fit-nation-logo-transparent.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/97202199-3c88-4606-9117-4180ee599450/fit-nation-logo-transparent.png",
	original_filename: "fit-nation-logo-transparent.png",
	size: 396695,
	content_type: "image/png",
	created_at: "2026-09-02T10:10:29Z"
};
var fit_nation_wordmark_png_asset_default = {
	version: 1,
	asset_id: "e99c2d39-d321-4a66-8d67-f167f8bf09c3",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/e99c2d39-d321-4a66-8d67-f167f8bf09c3/fit-nation-wordmark.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/e99c2d39-d321-4a66-8d67-f167f8bf09c3/fit-nation-wordmark.png",
	original_filename: "fit-nation-wordmark.png",
	size: 13616,
	content_type: "image/png",
	created_at: "2026-09-10T10:58:55Z"
};
function Nav() {
	const { scrollY } = useScroll();
	const background = useTransform(scrollY, [0, 50], ["rgba(13, 13, 13, 0.55)", "rgba(13, 13, 13, 0.75)"]);
	const backdropBlur = useTransform(scrollY, [0, 50], ["blur(20px) saturate(180%)", "blur(24px) saturate(180%)"]);
	const shadow = useTransform(scrollY, [0, 50], ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.3)"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
		initial: { y: -100 },
		animate: { y: 0 },
		style: {
			background,
			backdropFilter: backdropBlur,
			WebkitBackdropFilter: backdropBlur,
			boxShadow: shadow
		},
		className: "fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/8 transition-colors duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: fit_nation_logo_transparent_png_asset_default.url,
				alt: "FIT NATION GYM logo",
				className: "h-8 w-auto object-contain"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: fit_nation_wordmark_png_asset_default.url,
				alt: "FIT NATION wordmark",
				className: "h-5 sm:h-6 w-auto object-contain"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "tel:+919632795977",
				onClick: () => trackEvent("call_now_click", { location: "nav" }),
				className: "px-4 py-2 bg-transparent border border-white/15 hover:border-white/40 active:bg-white/5 active:scale-95 motion-safe:hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium text-white/90 rounded-[10px] flex items-center gap-2 group touch-manipulation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline group-hover:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none",
					children: "CALL NOW"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/919632795977",
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("whatsapp_click", { location: "nav" }),
				className: "px-4 py-2 bg-primary text-black hover:bg-primary/90 active:bg-primary/80 active:scale-95 hover:shadow-[0_4px_15px_rgba(255,213,0,0.3)] motion-safe:hover:-translate-y-0.5 transition-all duration-300 text-sm font-bold flex items-center gap-2 rounded-[10px] touch-manipulation",
				"aria-label": "WhatsApp",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					width: "18",
					height: "18",
					fill: "currentColor",
					xmlns: "http://www.w3.org/2000/svg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "WHATSAPP"
				})]
			})]
		})]
	});
}
function Counter({ end, suffix = "", decimals = 0 }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, { once: true });
	(0, import_react.useEffect)(() => {
		if (isInView) {
			const duration = 2e3;
			const startTime = performance.now();
			const animate = (currentTime) => {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);
				const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
				setCount(easeProgress * end);
				if (progress < 1) requestAnimationFrame(animate);
			};
			requestAnimationFrame(animate);
		}
	}, [isInView, end]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [count.toFixed(decimals), suffix]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Verified Place ID for FIT NATION GYM, Amaravathi Layout, HMT Layout, Nagasandra, Bengaluru 560073 */
var getPlaceReviewStats = createServerFn({ method: "GET" }).handler(createSsrRpc("4806c9f44b39d23f672281c13024c92aa422e1d6cae6bfc889780e5a859438ea"));
function usePlaceReviews() {
	const fetchStats = useServerFn(getPlaceReviewStats);
	return useQuery({
		queryKey: ["place-review-stats"],
		queryFn: () => fetchStats(),
		staleTime: 36e5,
		gcTime: 36e5,
		refetchOnWindowFocus: false
	});
}
function Hero() {
	const headline = [
		"LET'S",
		"MAKE",
		"NATION",
		"FIT."
	];
	const { data: placeStats } = usePlaceReviews();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: fit_nation_logo_transparent_png_asset_default.url,
				alt: "",
				"aria-hidden": "true",
				draggable: false,
				initial: {
					opacity: 0,
					scale: .97
				},
				animate: {
					opacity: .1,
					scale: 1
				},
				transition: {
					duration: 1.2,
					ease: "easeOut"
				},
				className: "pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-screen max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain blur-[1.5px] md:w-[115vw] md:max-h-[82vh]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: [
						1,
						1.2,
						1
					],
					opacity: [
						.3,
						.5,
						.3
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute z-0 top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: [
						1,
						1.3,
						1
					],
					opacity: [
						.2,
						.4,
						.2
					]
				},
				transition: {
					duration: 15,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute z-0 bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl text-center z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						className: "text-6xl md:text-9xl font-bold mb-8 tracking-normal leading-[0.9] font-display",
						initial: "hidden",
						animate: "visible",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "FIT NATION GYM - gym and fitness centre in Nagasandra, Bengaluru. "
						}), headline.map((word, i) => {
							const isNeon = word === "NATION" || word === "FIT.";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: `inline-block mr-3 ${isNeon ? "text-[#39FF14]" : "bg-gradient-to-b from-[#C0C0C0] to-[#8A8A8A] bg-clip-text text-transparent"}`,
								initial: {
									opacity: 0,
									y: 50
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: i * .1,
									ease: [
										.215,
										.61,
										.355,
										1
									]
								},
								children: word
							}, i);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .8,
							duration: .8
						},
						children: "Zumba, CrossFit, HIIT, and real coaching, all in one gym that feels like home, right here in Nagasandra."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "flex flex-col items-center gap-8",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.2,
							duration: 1
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919632795977?text=Hi%2C%20I%20want%20to%20start%20a%20free%20trial%20at%20Fit%20Nation!",
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => {
								trackEvent("free_trial_click", { location: "hero" });
							},
							className: "px-12 py-6 bg-primary text-black font-black text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,213,0,0.2)] hover:shadow-[0_0_60px_rgba(255,213,0,0.4)] uppercase tracking-wider flex items-center gap-3",
							children: ["Book a Free Trial", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-6 h-6" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center items-center gap-x-8 gap-y-6 text-sm font-bold tracking-widest text-muted-foreground uppercase max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 text-primary fill-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center sm:items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-primary text-lg md:text-xl leading-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												end: placeStats?.rating ?? 4.7,
												decimals: 1
											}), "★"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-70",
											children: "RATING"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block w-px h-8 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center sm:items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary text-lg md:text-xl leading-none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												end: 36,
												suffix: "+"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-70",
											children: "REVIEWS"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block w-px h-8 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center sm:items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary text-lg md:text-xl leading-none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												end: 2e3,
												suffix: "+"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-70",
											children: "MEMBERS JOINED"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block w-px h-8 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center sm:items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white text-sm md:text-base leading-none",
											children: "HMT LAYOUT"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-70 uppercase",
											children: "NAGASANDRA"
										})]
									})]
								})
							]
						})]
					})
				]
			})
		]
	});
}
function Stats() {
	const { data: placeStats } = usePlaceReviews();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap justify-center gap-12 py-8 border-y border-white/10 glass my-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl font-bold text-primary mb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						end: placeStats?.rating ?? 4.7,
						decimals: 1,
						suffix: "★"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm tracking-widest text-muted-foreground",
					children: "RATING"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl font-bold text-primary mb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						end: 36,
						suffix: "+"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm tracking-widest text-muted-foreground",
					children: "REVIEWS"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-4xl font-bold text-primary mb-1 flex items-center gap-2 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 24 }), " NAGASANDRA"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm tracking-widest text-muted-foreground",
					children: "HMT LAYOUT"
				})]
			})
		]
	});
}
var zumba_aerobics_icon_new_png_asset_default = {
	version: 1,
	asset_id: "f04c7c6a-3e35-4e64-ad31-8d93aff783f0",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/f04c7c6a-3e35-4e64-ad31-8d93aff783f0/zumba-aerobics-icon-new.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/f04c7c6a-3e35-4e64-ad31-8d93aff783f0/zumba-aerobics-icon-new.png",
	original_filename: "zumba-aerobics-icon-new.png",
	size: 782117,
	content_type: "image/png",
	created_at: "2026-09-06T09:10:26Z"
};
var crossfit_icon_v2_png_asset_default = {
	version: 1,
	asset_id: "6bb415de-ca02-48e5-ab1d-7b1aa4394146",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/6bb415de-ca02-48e5-ab1d-7b1aa4394146/crossfit-icon-v2.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/6bb415de-ca02-48e5-ab1d-7b1aa4394146/crossfit-icon-v2.png",
	original_filename: "crossfit-icon-v2.png",
	size: 211173,
	content_type: "image/png",
	created_at: "2026-09-06T09:25:01Z"
};
function PlateIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.5 4v12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.5 16c0 1.5-1 2.5-1 3.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.5 4c0 2.5 1 3 1 5.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 4c0 2.5-1 3-1 5.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "5.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "8.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.5 4v7" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.5 12v7.5c0 1 .5 1.5.5 1.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.5 4c0-1.5 1-2 1.5-2v9" })
		]
	});
}
var services = [
	{
		icon: Dumbbell,
		title: "PERSONAL TRAINING",
		desc: "One-on-one coaching sessions tailored to your goals, form, and fitness level for faster, safer results."
	},
	{
		image: zumba_aerobics_icon_new_png_asset_default.url,
		imageAlt: "Zumba and aerobics class icon",
		title: "ZUMBA / AEROBICS",
		desc: "High-energy dance and rhythm-based sessions that improve coordination, stamina, and make every workout enjoyable."
	},
	{
		image: crossfit_icon_v2_png_asset_default.url,
		imageAlt: "CrossFit functional training icon",
		title: "CROSSFIT",
		desc: "Functional, high-intensity training that builds real-world strength for people who want to push their limits."
	},
	{
		icon: HeartPulse,
		title: "CARDIO",
		desc: "Heart-pumping workouts that improve stamina, support heart health, and help you stay active with confidence."
	},
	{
		icon: Brain,
		title: "STRETCHING & MEDITATION",
		desc: "Guided flexibility and mindfulness sessions to help your body recover and your mind reset."
	},
	{
		icon: Mountain,
		title: "TREKKING",
		desc: "Guided uphill adventures that build endurance, strengthen your legs, and bring fitness into the outdoors."
	},
	{
		icon: PlateIcon,
		title: "WEEKLY MEALS",
		desc: "Every Wednesday, enjoy complimentary bananas and eggs at the gym to support your nutrition and training."
	},
	{
		icon: Trophy,
		title: "CHALLENGES",
		desc: "Monthly fitness competitions and team challenges that keep you motivated, accountable, and progressing."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 px-6 max-w-7xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl md:text-5xl font-bold mb-16 text-center",
			children: "OUR SERVICES"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3 lg:grid-cols-4 gap-8",
			children: services.map((service, i) => {
				const Icon = service.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "glass glass-hover p-8",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					children: [
						service.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.imageAlt ?? "",
							loading: "lazy",
							className: "w-[84px] h-[84px] object-contain mb-6 opacity-100 contrast-125"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-12 h-12 text-primary mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold mb-4",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: service.desc
						})
					]
				}, i);
			})
		})]
	});
}
var fallbackTestimonials = [
	{
		text: "One of the best gyms I have ever seen — very good flooring, great lighting and ambience, and the trainers are excellent.",
		author: "Padmanabha P"
	},
	{
		text: "This gym in HMT Layout, Nagasandra offers experienced trainers who provide expert guidance and coaching. The facility is clean and well-maintained, with equipment neatly arranged — an ideal place to achieve your fitness goals.",
		author: "Lokesha S"
	},
	{
		text: "One of the best gyms around HMT Layout and Nagasandra — clean, aesthetic, and well-equipped. Great trainers, friendly staff, and an awesome workout environment.",
		author: "Goutham Gowda"
	},
	{
		text: "Aravind is the best trainer — good people, good family. It doesn't feel like a gym, it feels like home.",
		author: "Google Review"
	},
	{
		text: "Offers the best experience for a very reasonable price.",
		author: "Google Review"
	}
];
function Testimonials() {
	const { data } = usePlaceReviews();
	const testimonials = data?.reviews.length ? data.reviews : fallbackTestimonials;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 px-6 bg-brand-darker",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl font-bold mb-16 text-center",
					children: "WHAT OUR MEMBERS SAY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "glass p-8 flex flex-col justify-between",
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["rating" in t && t.rating > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 mb-4",
							"aria-label": `${t.rating} out of 5 stars`,
							children: Array.from({ length: 5 }, (_, star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "w-4 h-4 text-primary fill-primary",
								"aria-hidden": "true"
							}, star))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg italic mb-6 text-muted-foreground",
							children: [
								"\"",
								t.text,
								"\""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["authorUri" in t && t.authorUri ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: t.authorUri,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-bold text-primary hover:underline",
							children: ["— ", t.author]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold text-primary",
							children: ["— ", t.author]
						}), "publishedAt" in t && t.publishedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: t.publishedAt
						})] })]
					}, `${t.author}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: [
						"Reviews shown from Google.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline underline-offset-4",
							children: "Read all reviews on Google"
						})
					]
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				className: "text-4xl md:text-6xl font-bold mb-8 text-center",
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "A COMMUNITY"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "text-xl md:text-2xl text-muted-foreground leading-relaxed text-center",
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: { delay: .2 },
				children: "Fit Nation was built on a simple idea: fitness shouldn't feel transactional. Tucked into HMT Layout, Nagasandra, this is a space where trainers know your name, your goals, and your progress, not just your membership number. From Zumba and CrossFit to quiet stretching and meditation sessions, Fit Nation brings every kind of workout under one roof, for every kind of person. Members don't just come here to train; they come back because it feels like home. That's what 'Let's Get Nation Fit' really means, fitness built around people, not just equipment."
			})]
		})
	});
}
var facilityCategories = [
	{
		title: "STRENGTH AREA",
		image: {
			version: 1,
			asset_id: "0fe72220-e50b-4f7d-ad31-163c6fcd8f81",
			project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
			url: "/__l5e/assets-v1/0fe72220-e50b-4f7d-ad31-163c6fcd8f81/strength-area.jpg",
			r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/0fe72220-e50b-4f7d-ad31-163c6fcd8f81/strength-area.jpg",
			original_filename: "strength-area.jpg",
			size: 1958439,
			content_type: "image/jpeg",
			created_at: "2026-09-22T18:51:17Z"
		}.url,
		alt: "Strength training area with free weights and machines at FIT NATION GYM in Nagasandra, Bengaluru"
	},
	{
		title: "CARDIO AREA",
		image: {
			version: 1,
			asset_id: "b0ff7eff-bf7c-4a29-8332-6a5bb285a305",
			project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
			url: "/__l5e/assets-v1/b0ff7eff-bf7c-4a29-8332-6a5bb285a305/cardio-area.png",
			r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/b0ff7eff-bf7c-4a29-8332-6a5bb285a305/cardio-area.png",
			original_filename: "cardio-area.png",
			size: 2200723,
			content_type: "image/png",
			created_at: "2026-09-22T19:00:56Z"
		}.url,
		alt: "Row of treadmills in the cardio workout area at FIT NATION GYM in Nagasandra, Bengaluru"
	},
	{
		title: "GROUP CLASSES",
		image: {
			version: 1,
			asset_id: "c632f00c-c3c7-45be-83e8-737a1efc22e7",
			project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
			url: "/__l5e/assets-v1/c632f00c-c3c7-45be-83e8-737a1efc22e7/group-classes.jpg",
			r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/c632f00c-c3c7-45be-83e8-737a1efc22e7/group-classes.jpg",
			original_filename: "group-classes.jpg",
			size: 1948327,
			content_type: "image/jpeg",
			created_at: "2026-09-22T18:45:08Z"
		}.url,
		alt: "Group fitness class space used for Zumba and aerobics at FIT NATION GYM in Nagasandra, Bengaluru"
	},
	{
		title: "RECEPTION",
		image: {
			version: 1,
			asset_id: "0a307dd7-10a8-4b4a-b993-7fe690e03366",
			project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
			url: "/__l5e/assets-v1/0a307dd7-10a8-4b4a-b993-7fe690e03366/reception-area.jpg",
			r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/0a307dd7-10a8-4b4a-b993-7fe690e03366/reception-area.jpg",
			original_filename: "reception-area.jpg",
			size: 1967082,
			content_type: "image/jpeg",
			created_at: "2026-09-22T18:37:03Z"
		}.url,
		alt: "Reception desk at FIT NATION GYM in Nagasandra, Bengaluru"
	},
	{
		title: "JUICE BAR",
		image: {
			version: 1,
			asset_id: "b93b9dfa-aa22-4c8f-a4e5-bb6a98c1ac9a",
			project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
			url: "/__l5e/assets-v1/b93b9dfa-aa22-4c8f-a4e5-bb6a98c1ac9a/juice-bar.png",
			r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/b93b9dfa-aa22-4c8f-a4e5-bb6a98c1ac9a/juice-bar.png",
			original_filename: "juice-bar.png",
			size: 2218723,
			content_type: "image/png",
			created_at: "2026-09-24T14:14:31Z"
		}.url,
		alt: "Juice bar counter with fresh fruit and green neon lighting at FIT NATION GYM in Nagasandra, Bengaluru"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 px-6 max-w-7xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl md:text-5xl font-bold mb-16 text-center",
			children: "COSMOS OF 5000 SQ FT"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
			children: facilityCategories.map((item, i) => {
				const isLastOdd = i === facilityCategories.length - 1 && facilityCategories.length % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: `relative aspect-square glass overflow-hidden flex flex-col items-center p-8 border-white/5 ring-1 ring-inset ring-primary/10 ${isLastOdd ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center" : ""}`,
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { delay: i * .08 },
					children: [
						item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.alt,
							loading: "lazy",
							decoding: "async",
							className: "absolute inset-0 w-full h-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassWater, {
								className: "w-16 h-16 text-primary/40",
								strokeWidth: 1.25
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative z-10 mt-auto text-xs tracking-widest text-foreground uppercase",
							children: item.title
						})
					]
				}, i);
			})
		})]
	});
}
var WHATSAPP_NUMBER = "919632795977";
var LIMITS = {
	name: 80,
	phone: 20,
	message: 1e3
};
var SUBMIT_COOLDOWN_MS = 15e3;
/** Strip control characters and collapse whitespace; cap length. */
function clean(value, max) {
	return value.replace(/[\u0000-\u001f\u007f-\u009f]/g, " ").replace(/[ \t]{2,}/g, " ").trim().slice(0, max);
}
function Contact() {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [lastSubmitAt, setLastSubmitAt] = (0, import_react.useState)(0);
	const handleSubmit = (e) => {
		e.preventDefault();
		const safeName = clean(name, LIMITS.name);
		const safePhone = clean(phone, LIMITS.phone);
		const safeMessage = clean(message, LIMITS.message);
		const digits = safePhone.replace(/\D/g, "");
		if (safeName.length < 2) {
			setError("Please enter your name.");
			return;
		}
		if (digits.length < 10 || digits.length > 15) {
			setError("Please enter a valid phone number.");
			return;
		}
		if (Date.now() - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
			setError("Please wait a moment before sending again.");
			return;
		}
		setError("");
		setIsSubmitting(true);
		const text = [
			"New Enquiry - FIT NATION",
			"",
			`Name: ${safeName}`,
			`Phone: ${safePhone}`,
			`Enquiry: ${safeMessage || "I would like to know more about Fit Nation Gym."}`
		].join("\n");
		const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
		window.location.assign(waUrl);
		trackEvent("enquiry_form_submission", { form_name: "contact_section" });
		setLastSubmitAt(Date.now());
		setIsSubmitting(false);
		setIsSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				x: -20
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: { once: true },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl font-bold mb-8 uppercase",
					children: "GET IN TOUCH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Brahma Arcade, 147/77, HMT Layout, Amaravathi Layout, Nagasandra, Bengaluru, Karnataka 560073"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919632795977",
							onClick: () => trackEvent("call_now_click", { location: "contact_section" }),
							className: "flex gap-4 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "text-primary shrink-0 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "9632795977"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919632795977",
							onClick: () => trackEvent("whatsapp_click", { location: "contact_section" }),
							className: "flex gap-4 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								width: "24",
								height: "24",
								fill: "currentColor",
								className: "text-primary shrink-0 group-hover:scale-110 transition-transform",
								xmlns: "http://www.w3.org/2000/svg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "9632795977"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "MON — SAT: 5:30 AM — 10:00 PM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "SUN: 7:00 AM — 7:00 PM (CALL TO CONFIRM)"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 w-full glass hover:grayscale-0 transition-all overflow-hidden rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(57,255,20,0.1)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-video w-full relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackEvent("open_in_maps_click"),
								className: "absolute top-4 left-4 z-10 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-[10px] hover:shadow-[0_8px_20px_rgba(57,255,20,0.25)] transition-all",
								children: "Open in Maps"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6062725514753!2d77.5029671!3d13.0607149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7e94e43%3A0x86749964e528990!2sFit%20Nation!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
								width: "100%",
								height: "100%",
								style: { border: 0 },
								allowFullScreen: true,
								loading: "lazy",
								title: "Fit Nation Location",
								className: "absolute inset-0 pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackEvent("map_click"),
								"aria-label": "Open Fit Nation location in Google Maps",
								className: "absolute inset-0 z-[5] cursor-pointer"
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: !isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 1 },
					exit: {
						opacity: 0,
						y: -20
					},
					className: "bg-[rgba(20,20,20,0.6)] backdrop-blur-xl border border-white/8 p-8 md:p-10 rounded-[16px] shadow-2xl shadow-black/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90",
										children: "NAME"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										maxLength: 80,
										autoComplete: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Enter your name",
										className: "w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90",
										children: "PHONE NUMBER"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										maxLength: 20,
										inputMode: "tel",
										autoComplete: "tel",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										placeholder: "Your mobile number",
										className: "w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90",
									children: "MESSAGE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									required: true,
									maxLength: 1e3,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									placeholder: "How can we help you?",
									className: "w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm resize-none"
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								type: "submit",
								whileHover: { y: -2 },
								whileTap: { scale: .98 },
								disabled: isSubmitting,
								className: "w-full bg-primary text-black font-bold py-4 rounded-[12px] hover:shadow-[0_8px_20px_rgba(255,213,0,0.25)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin h-5 w-5" }) : "SUBMIT ENQUIRY"
							})
						]
					})
				}, "form") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "bg-[rgba(20,20,20,0.6)] backdrop-blur-xl border border-white/8 p-12 rounded-[16px] shadow-2xl text-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "text-primary h-16 w-16" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold uppercase tracking-wider",
							children: "Message Received!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Our team will get back to you within 24 hours. Get ready to transform."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setName("");
								setPhone("");
								setMessage("");
								setError("");
								setIsSubmitted(false);
							},
							className: "text-primary text-sm font-bold uppercase tracking-widest hover:underline mt-4",
							children: "Send another message"
						})
					]
				}, "success")
			})
		})]
	});
}
var reasons = [
	{
		icon: ShieldCheck,
		title: "Certified, Experienced Trainers",
		desc: "Not just staff who show you the machines, but real coaches invested in your journey."
	},
	{
		icon: CircleCheck,
		title: "Clean, Well-Maintained Facility",
		desc: "Good flooring, good lighting, and equipment kept in perfect order every single day."
	},
	{
		icon: Gem,
		title: "Real Value for Money",
		desc: "A premium fitness experience without the premium price tag."
	},
	{
		icon: Users,
		title: "A Gym That Feels Like Family",
		desc: "Members genuinely stick around because it feels like a home, not a transaction."
	},
	{
		icon: Ban,
		title: "100% Drug Free Gym",
		desc: "No shortcuts, no steroids, no anabolics, no enhancements."
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 px-6 bg-brand-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold mb-16 text-center",
				children: "WHY FIT NATION?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",
				children: reasons.map((reason, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "glass p-8 hover:border-primary/30 transition-colors group",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold mb-3",
							children: reason.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: reason.desc
						})
					]
				}, i))
			})]
		})
	});
}
var army_icon_png_asset_default = {
	version: 1,
	asset_id: "ed9eac6a-ae95-4cd0-9aee-cc08103ed022",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/ed9eac6a-ae95-4cd0-9aee-cc08103ed022/army-icon.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/ed9eac6a-ae95-4cd0-9aee-cc08103ed022/army-icon.png",
	original_filename: "army-icon.png",
	size: 134501,
	content_type: "image/png",
	created_at: "2026-09-12T04:11:32Z"
};
var airforce_icon_png_asset_default = {
	version: 1,
	asset_id: "0932f2fd-f950-4516-b1b7-d86a9574a444",
	project_id: "76e2892e-0c27-4afa-97d6-c933bf02eca6",
	url: "/__l5e/assets-v1/0932f2fd-f950-4516-b1b7-d86a9574a444/airforce-icon.png",
	r2_key: "a/v1/76e2892e-0c27-4afa-97d6-c933bf02eca6/0932f2fd-f950-4516-b1b7-d86a9574a444/airforce-icon.png",
	original_filename: "airforce-icon.png",
	size: 167326,
	content_type: "image/png",
	created_at: "2026-09-12T04:08:10Z"
};
function ShipIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 48h48l-8-24H16L8 48z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 24V12h24v12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12V8h16v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 8V4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 32h28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 40h32" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "36",
				r: "2",
				fill: "currentColor"
			})
		]
	});
}
var forces = [
	{
		icon: army_icon_png_asset_default.url,
		iconAlt: "Indian Army emblem marking free gym access for Army personnel",
		title: "ARMY",
		desc: "Active Army personnel train free of charge as a thank you for your service to the nation."
	},
	{
		icon: ShipIcon,
		title: "NAVY",
		desc: "Navy personnel get complimentary access to all gym facilities and group sessions."
	},
	{
		icon: airforce_icon_png_asset_default.url,
		iconAlt: "Fighter jet illustration marking free gym access for Air Force personnel",
		title: "AIRFORCE",
		desc: "Air Force personnel train free with full access to equipment, classes, and recovery zones."
	}
];
function ArmedForces() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 px-6 max-w-7xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl md:text-5xl font-bold mb-16 text-center",
			children: "FREE FOR INDIAN ARMED FORCES PERSONNEL"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3 gap-8",
			children: forces.map((force, i) => {
				const IconOrUrl = force.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "glass glass-hover p-8 text-center",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mb-6",
							children: typeof IconOrUrl === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IconOrUrl,
								alt: force.iconAlt ?? force.title,
								loading: "lazy",
								className: "w-16 h-16 object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconOrUrl, { className: "w-16 h-16 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold mb-4",
							children: force.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: force.desc
						})
					]
				}, force.title);
			})
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "https://wa.me/919632795977",
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => trackEvent("whatsapp_click", { location: "floating_button" }),
		initial: {
			opacity: 0,
			scale: 0
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		whileHover: { scale: 1.1 },
		className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-black px-4 py-3 rounded-full font-bold shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			width: "24",
			height: "24",
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat with us" })]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative bg-brand-dark min-h-screen text-white overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmedForces, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "py-12 px-6 border-t border-white/5 bg-brand-darker",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-bold font-stencil tracking-widest mb-4 text-[#39FF14]",
							style: { textShadow: "0 0 10px rgba(57, 255, 20, 0.4)" },
							children: "FIT NATION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-sm mb-6",
							children: "\"Let's Get Nation Fit\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-widest italic",
							children: "Built for people who show up"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-primary mb-4",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-xs normal-case",
							children: "Brahma Arcade, 147/77, Amaravathi Layout, HMT Layout, Nagasandra, Bengaluru, Karnataka 560073"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-primary mb-4",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919632795977",
								onClick: () => trackEvent("call_now_click", { location: "footer" }),
								className: "flex items-center gap-2 text-white/90 hover:text-white active:text-primary transition-all duration-300 group touch-manipulation",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "group-hover:underline group-active:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none",
									children: "9632795977"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/918073266112",
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackEvent("whatsapp_click", { location: "footer" }),
								className: "flex items-center gap-2 text-white/90 hover:text-white active:text-primary transition-all duration-300 group touch-manipulation",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									width: "16",
									height: "16",
									fill: "currentColor",
									className: "text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300",
									xmlns: "http://www.w3.org/2000/svg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "group-hover:underline group-active:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none",
									children: "8073266112"
								})]
							})]
						})] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-[10px] text-muted-foreground text-center uppercase tracking-widest",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" FIT NATION. ALL RIGHTS RESERVED."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
//#endregion
export { Index as component };
