import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Star, MapPin, Users } from "lucide-react";
import { DISPLAY_REVIEW_COUNT, usePlaceReviews } from "@/hooks/useReviewCount";

export function Stats() {
  const { data: placeStats } = usePlaceReviews();
  const reviewCount = DISPLAY_REVIEW_COUNT;
  return (
    <div className="flex flex-wrap justify-center gap-12 py-8 border-y border-white/10 glass my-12">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">
          <Counter end={placeStats?.rating ?? 4.7} decimals={1} suffix="★" />
        </div>
        <div className="text-sm tracking-widest text-muted-foreground">RATING</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">
          {reviewCount !== null ? <Counter end={reviewCount} suffix="+" /> : <>&nbsp;</>}
        </div>
        <div className="text-sm tracking-widest text-muted-foreground">REVIEWS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1 flex items-center gap-2 justify-center">
          <MapPin size={24} /> NAGASANDRA
        </div>
        <div className="text-sm tracking-widest text-muted-foreground">HMT LAYOUT</div>
      </div>
    </div>
  );
}
