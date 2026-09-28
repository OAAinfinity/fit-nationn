import { createServerFn } from "@tanstack/react-start";

/** Verified Place ID for FIT NATION GYM, Amaravathi Layout, HMT Layout, Nagasandra, Bengaluru 560073 */
const PLACE_ID = "ChIJT5oJTwA9rjsRTrbhQt1uhzY";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";
const CACHE_TTL_MS = 60 * 60 * 1000;

export type PlaceReview = {
  text: string;
  author: string;
  rating: number;
  publishedAt: string | null;
  authorUri: string | null;
};

export type PlaceStats = {
  reviewCount: number;
  rating: number | null;
  reviews: PlaceReview[];
};

let cache: { value: PlaceStats; expiresAt: number } | null = null;

const emptyStats = (): PlaceStats => ({ reviewCount: 0, rating: null, reviews: [] });

export const getPlaceReviewStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<PlaceStats> => {
    const now = Date.now();
    if (cache && cache.expiresAt > now) return cache.value;

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const mapsApiKey = process.env["GOOGLE_MAPS_API_KEY"];
    if (!lovableApiKey || !mapsApiKey) return cache?.value ?? emptyStats();

    try {
      const response = await fetch(`${GATEWAY_URL}/places/v1/places/${PLACE_ID}`, {
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": mapsApiKey,
          "X-Goog-FieldMask": "id,userRatingCount,rating,reviews",
        },
      });

      if (!response.ok) {
        console.error(`Places request failed [${response.status}]`);
        return cache?.value ?? emptyStats();
      }

      const data = (await response.json()) as {
        userRatingCount?: number;
        rating?: number;
        reviews?: Array<{
          rating?: number;
          relativePublishTimeDescription?: string;
          text?: { text?: string };
          authorAttribution?: { displayName?: string; uri?: string };
        }>;
      };
      const value: PlaceStats = {
        reviewCount: typeof data.userRatingCount === "number" ? data.userRatingCount : 0,
        rating: typeof data.rating === "number" ? data.rating : null,
        reviews: (data.reviews ?? [])
          .map((review): PlaceReview | null => {
            const text = review.text?.text?.trim();
            const author = review.authorAttribution?.displayName?.trim();
            if (!text || !author) return null;
            return {
              text,
              author,
              rating: typeof review.rating === "number" ? review.rating : 0,
              publishedAt: review.relativePublishTimeDescription ?? null,
              authorUri: review.authorAttribution?.uri ?? null,
            };
          })
          .filter((review): review is PlaceReview => review !== null),
      };
      cache = { value, expiresAt: now + CACHE_TTL_MS };
      return value;
    } catch (error) {
      console.error(
        "Places request error:",
        error instanceof Error ? error.message : "unknown error",
      );
      return cache?.value ?? emptyStats();
    }
  },
);
