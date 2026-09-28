import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { Phone } from "lucide-react";
import logoAsset from "@/assets/fit-nation-logo-transparent.png.asset.json";
import wordmarkAsset from "@/assets/fit-nation-wordmark.png.asset.json";

export function Nav() {
  const { scrollY } = useScroll();

  // Smoothly transform background and shadow based on scroll position
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(13, 13, 13, 0.55)", "rgba(13, 13, 13, 0.75)"],
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(20px) saturate(180%)", "blur(24px) saturate(180%)"],
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.3)"],
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        background,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        boxShadow: shadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/8 transition-colors duration-300"
    >
      <div className="flex items-center gap-2">
        <img src={logoAsset.url} alt="FIT NATION GYM logo" className="h-8 w-auto object-contain" />
        <img
          src={wordmarkAsset.url}
          alt="FIT NATION wordmark"
          className="h-5 sm:h-6 w-auto object-contain"
        />
      </div>
      <div className="flex gap-4">
        <a
          href="tel:+919632795977"
          onClick={() => trackEvent("call_now_click", { location: "nav" })}
          className="px-4 py-2 bg-transparent border border-white/15 hover:border-white/40 active:bg-white/5 active:scale-95 motion-safe:hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium text-white/90 rounded-[10px] flex items-center gap-2 group touch-manipulation"
        >
          <Phone className="w-4 h-4 text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300" />
          <span className="hidden sm:inline group-hover:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none">
            CALL NOW
          </span>
        </a>
        <a
          href="https://wa.me/919632795977"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "nav" })}
          className="px-4 py-2 bg-primary text-black hover:bg-primary/90 active:bg-primary/80 active:scale-95 hover:shadow-[0_4px_15px_rgba(255,213,0,0.3)] motion-safe:hover:-translate-y-0.5 transition-all duration-300 text-sm font-bold flex items-center gap-2 rounded-[10px] touch-manipulation"
          aria-label="WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="hidden sm:inline">WHATSAPP</span>
        </a>
      </div>
    </motion.nav>
  );
}
