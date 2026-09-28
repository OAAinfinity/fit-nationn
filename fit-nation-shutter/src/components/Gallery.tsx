import { motion } from "framer-motion";
import { GlassWater } from "lucide-react";
import receptionAsset from "@/assets/reception-area.jpg.asset.json";
import groupClassesAsset from "@/assets/group-classes.jpg.asset.json";
import strengthAreaAsset from "@/assets/strength-area.jpg.asset.json";
import cardioAreaAsset from "@/assets/cardio-area.png.asset.json";
import juiceBarAsset from "@/assets/juice-bar.png.asset.json";

const facilityCategories = [
  {
    title: "STRENGTH AREA",
    image: strengthAreaAsset.url,
    alt: "Strength training area with free weights and machines at FIT NATION GYM in Nagasandra, Bengaluru",
  },
  {
    title: "CARDIO AREA",
    image: cardioAreaAsset.url,
    alt: "Row of treadmills in the cardio workout area at FIT NATION GYM in Nagasandra, Bengaluru",
  },
  {
    title: "GROUP CLASSES",
    image: groupClassesAsset.url,
    alt: "Group fitness class space used for Zumba and aerobics at FIT NATION GYM in Nagasandra, Bengaluru",
  },
  {
    title: "RECEPTION",
    image: receptionAsset.url,
    alt: "Reception desk at FIT NATION GYM in Nagasandra, Bengaluru",
  },
  {
    title: "JUICE BAR",
    image: juiceBarAsset.url,
    alt: "Juice bar counter with fresh fruit and green neon lighting at FIT NATION GYM in Nagasandra, Bengaluru",
  },
] as { title: string; image: string; alt: string }[];

export function Gallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">COSMOS OF 5000 SQ FT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {facilityCategories.map((item, i) => {
          const isLastOdd =
            i === facilityCategories.length - 1 && facilityCategories.length % 2 === 1;
          return (
            <motion.div
              key={i}
              className={`relative aspect-square glass overflow-hidden flex flex-col items-center p-8 border-white/5 ring-1 ring-inset ring-primary/10 ${
                isLastOdd ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-background"
                >
                  <GlassWater className="w-16 h-16 text-primary/40" strokeWidth={1.25} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
              <p className="relative z-10 mt-auto text-xs tracking-widest text-foreground uppercase">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
