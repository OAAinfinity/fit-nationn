import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";
import logoAsset from "@/assets/fit-nation-logo-transparent.png.asset.json";
import { DISPLAY_REVIEW_COUNT, usePlaceReviews } from "@/hooks/useReviewCount";

export function Hero() {
  const headline = ["LET'S", "MAKE", "NATION", "FIT."];
  const { data: placeStats } = usePlaceReviews();
  const reviewCount = DISPLAY_REVIEW_COUNT;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Large faded logo watermark */}
      <motion.img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-screen max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain blur-[1.5px] md:w-[115vw] md:max-h-[82vh]"
      />

      {/* Background Parallax Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute z-0 top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute z-0 bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
      />

      <div className="max-w-4xl text-center z-10">
        <motion.h1
          className="text-6xl md:text-9xl font-bold mb-8 tracking-normal leading-[0.9] font-display"
          initial="hidden"
          animate="visible"
        >
          <span className="sr-only">
            FIT NATION GYM - gym and fitness centre in Nagasandra, Bengaluru.{" "}
          </span>
          {headline.map((word, i) => {
            const isNeon = word === "NATION" || word === "FIT.";
            return (
              <motion.span
                key={i}
                className={`inline-block mr-3 ${
                  isNeon
                    ? "text-[#39FF14]"
                    : "bg-gradient-to-b from-[#C0C0C0] to-[#8A8A8A] bg-clip-text text-transparent"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Zumba, CrossFit, HIIT, and real coaching, all in one gym that feels like home, right here
          in Nagasandra.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="https://wa.me/919632795977?text=Hi%2C%20I%20want%20to%20start%20a%20free%20trial%20at%20Fit%20Nation!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("free_trial_click", { location: "hero" });
            }}
            className="px-12 py-6 bg-primary text-black font-black text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,213,0,0.2)] hover:shadow-[0_0_60px_rgba(255,213,0,0.4)] uppercase tracking-wider flex items-center gap-3"
          >
            Book a Free Trial
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 text-sm font-bold tracking-widest text-muted-foreground uppercase max-w-3xl">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-primary text-lg md:text-xl leading-none">
                  <Counter end={placeStats?.rating ?? 4.7} decimals={1} />★
                </span>
                <span className="text-[10px] opacity-70">RATING</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-primary text-lg md:text-xl leading-none">
                  {reviewCount !== null ? <Counter end={reviewCount} suffix="+" /> : <>&nbsp;</>}
                </span>
                <span className="text-[10px] opacity-70">REVIEWS</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-primary text-lg md:text-xl leading-none">
                  <Counter end={2000} suffix="+" />
                </span>
                <span className="text-[10px] opacity-70">MEMBERS JOINED</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-sm md:text-base leading-none">HMT LAYOUT</span>
                <span className="text-[10px] opacity-70 uppercase">NAGASANDRA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
