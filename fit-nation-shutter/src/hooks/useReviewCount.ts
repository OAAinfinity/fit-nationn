import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getPlaceReviewStats } from "@/lib/place-reviews.functions";

export const DISPLAY_REVIEW_COUNT = 36;

/** Live Google review count for FIT NATION GYM, cached ~1 hour. */
export function useReviewCount() {
  const fetchStats = useServerFn(getPlaceReviewStats);
  const { data } = useQuery({
    queryKey: ["place-review-stats"],
    queryFn: () => fetchStats(),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return data?.reviewCount && data.reviewCount > 0 ? DISPLAY_REVIEW_COUNT : null;
}

export function usePlaceReviews() {
  const fetchStats = useServerFn(getPlaceReviewStats);
  return useQuery({
    queryKey: ["place-review-stats"],
    queryFn: () => fetchStats(),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
