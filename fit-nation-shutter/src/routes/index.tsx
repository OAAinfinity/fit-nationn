import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ArmedForces } from "../components/ArmedForces";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { createFileRoute } from "@tanstack/react-router";

const SITE_ORIGIN = "https://fit-nation-shutter.lovable.app";
const SITE_URL = `${SITE_ORIGIN}/`;
const shareImageUrl = "/assets/fit-nation-share.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FIT NATION GYM | Gym in Nagasandra, Bengaluru" },
      {
        name: "description",
        content:
          "FIT NATION GYM in Nagasandra, Bengaluru offers strength training, cardio, group fitness classes and personal coaching. Visit us and start your fitness journey.",
      },
      { property: "og:title", content: "FIT NATION GYM | Gym in Nagasandra, Bengaluru" },
      {
        property: "og:description",
        content:
          "Strength training, cardio, Zumba and group classes with real coaching at FIT NATION GYM, HMT Layout, Nagasandra, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_ORIGIN}${shareImageUrl}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FIT NATION GYM | Gym in Nagasandra, Bengaluru" },
      {
        name: "twitter:description",
        content:
          "Strength training, cardio, Zumba and group classes with real coaching at FIT NATION GYM, HMT Layout, Nagasandra, Bengaluru.",
      },
      { name: "twitter:image", content: `${SITE_ORIGIN}${shareImageUrl}` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Gym",
          name: "FIT NATION GYM",
          description:
            "Fitness centre in Nagasandra, Bengaluru offering strength training, cardio, group fitness classes, Zumba, CrossFit and personal coaching.",
          url: SITE_URL,
          image: `${SITE_ORIGIN}${shareImageUrl}`,
          telephone: "+91-9632795977",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Brahma Arcade, 147/77, Amaravathi Layout, HMT Layout, Nagasandra Post",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560073",
            addressCountry: "IN",
          },
          areaServed: [
            "Nagasandra, Bengaluru",
            "HMT Layout, Bengaluru",
            "Amaravathi Layout, Bengaluru",
            "Bagalagunte, Bengaluru",
            "Dasarahalli, Bengaluru",
          ],
          hasMap: "https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative bg-brand-dark min-h-screen text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <Stats />
      </div>
      <Services />
      <WhyChooseUs />
      <ArmedForces />
      <About />
      <Testimonials />
      <Gallery />
      <div id="contact">
        <Contact />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 bg-brand-darker">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div
              className="text-3xl font-bold font-stencil tracking-widest mb-4 text-[#39FF14]"
              style={{ textShadow: "0 0 10px rgba(57, 255, 20, 0.4)" }}
            >
              FIT NATION
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">"Let's Get Nation Fit"</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest italic">
              Built for people who show up
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-wider">
            <div>
              <h4 className="font-bold text-primary mb-4">Location</h4>
              <p className="text-muted-foreground max-w-xs normal-case">
                Brahma Arcade, 147/77, Amaravathi Layout, HMT Layout, Nagasandra, Bengaluru,
                Karnataka 560073
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Contact</h4>
              <div className="space-y-4">
                <a
                  href="tel:+919632795977"
                  onClick={() => trackEvent("call_now_click", { location: "footer" })}
                  className="flex items-center gap-2 text-white/90 hover:text-white active:text-primary transition-all duration-300 group touch-manipulation"
                >
                  <Phone className="w-4 h-4 text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300" />
                  <span className="group-hover:underline group-active:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none">
                    9632795977
                  </span>
                </a>
                <a
                  href="https://wa.me/918073266112"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
                  className="flex items-center gap-2 text-white/90 hover:text-white active:text-primary transition-all duration-300 group touch-manipulation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-primary group-hover:brightness-110 group-active:brightness-125 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="group-hover:underline group-active:underline group-hover:underline-offset-4 decoration-primary/50 decoration-1 transition-all duration-300 motion-reduce:transition-none">
                    8073266112
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-[10px] text-muted-foreground text-center uppercase tracking-widest">
          © {new Date().getFullYear()} FIT NATION. ALL RIGHTS RESERVED.
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
