import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-BywTNSnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/place-reviews.functions-C2yUjZxF.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Verified Place ID for FIT NATION GYM, Amaravathi Layout, HMT Layout, Nagasandra, Bengaluru 560073 */
var PLACE_ID = "ChIJT5oJTwA9rjsRTrbhQt1uhzY";
var GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";
var CACHE_TTL_MS = 36e5;
var cache = null;
var emptyStats = () => ({
	reviewCount: 0,
	rating: null,
	reviews: []
});
var getPlaceReviewStats_createServerFn_handler = createServerRpc({
	id: "4806c9f44b39d23f672281c13024c92aa422e1d6cae6bfc889780e5a859438ea",
	name: "getPlaceReviewStats",
	filename: "src/lib/place-reviews.functions.ts"
}, (opts) => getPlaceReviewStats.__executeServer(opts));
var getPlaceReviewStats = createServerFn({ method: "GET" }).handler(getPlaceReviewStats_createServerFn_handler, async () => {
	const now = Date.now();
	if (cache && cache.expiresAt > now) return cache.value;
	const lovableApiKey = process.env["LOVABLE_API_KEY"];
	const mapsApiKey = process.env["GOOGLE_MAPS_API_KEY"];
	if (!lovableApiKey || !mapsApiKey) return cache?.value ?? emptyStats();
	try {
		const response = await fetch(`${GATEWAY_URL}/places/v1/places/${PLACE_ID}`, { headers: {
			Authorization: `Bearer ${lovableApiKey}`,
			"X-Connection-Api-Key": mapsApiKey,
			"X-Goog-FieldMask": "id,userRatingCount,rating,reviews"
		} });
		if (!response.ok) {
			console.error(`Places request failed [${response.status}]`);
			return cache?.value ?? emptyStats();
		}
		const data = await response.json();
		const value = {
			reviewCount: typeof data.userRatingCount === "number" ? data.userRatingCount : 0,
			rating: typeof data.rating === "number" ? data.rating : null,
			reviews: (data.reviews ?? []).map((review) => {
				const text = review.text?.text?.trim();
				const author = review.authorAttribution?.displayName?.trim();
				if (!text || !author) return null;
				return {
					text,
					author,
					rating: typeof review.rating === "number" ? review.rating : 0,
					publishedAt: review.relativePublishTimeDescription ?? null,
					authorUri: review.authorAttribution?.uri ?? null
				};
			}).filter((review) => review !== null)
		};
		cache = {
			value,
			expiresAt: now + CACHE_TTL_MS
		};
		return value;
	} catch (error) {
		console.error("Places request error:", error instanceof Error ? error.message : "unknown error");
		return cache?.value ?? emptyStats();
	}
});
//#endregion
export { getPlaceReviewStats_createServerFn_handler };
