import { motion } from "framer-motion";
import armyIcon from "@/assets/army-icon.png.asset.json";
import airforceIcon from "@/assets/airforce-icon.png.asset.json";

function ShipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 48h48l-8-24H16L8 48z" />
      <path d="M20 24V12h24v12" />
      <path d="M24 12V8h16v4" />
      <path d="M32 8V4" />
      <path d="M18 32h28" />
      <path d="M16 40h32" />
      <circle cx="32" cy="36" r="2" fill="currentColor" />
    </svg>
  );
}

type ForceItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  iconAlt?: string;
  title: string;
  desc: string;
};

const forces: ForceItem[] = [
  {
    icon: armyIcon.url,
    iconAlt: "Indian Army emblem marking free gym access for Army personnel",
    title: "ARMY",
    desc: "Active Army personnel train free of charge as a thank you for your service to the nation.",
  },
  {
    icon: ShipIcon,
    title: "NAVY",
    desc: "Navy personnel get complimentary access to all gym facilities and group sessions.",
  },
  {
    icon: airforceIcon.url,
    iconAlt: "Fighter jet illustration marking free gym access for Air Force personnel",
    title: "AIRFORCE",
    desc: "Air Force personnel train free with full access to equipment, classes, and recovery zones.",
  },
];

export function ArmedForces() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        FREE FOR INDIAN ARMED FORCES PERSONNEL
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {forces.map((force, i) => {
          const IconOrUrl = force.icon;
          return (
            <motion.div
              key={force.title}
              className="glass glass-hover p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                {typeof IconOrUrl === "string" ? (
                  <img
                    src={IconOrUrl}
                    alt={force.iconAlt ?? force.title}
                    loading="lazy"
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <IconOrUrl className="w-16 h-16 text-primary" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{force.title}</h3>
              <p className="text-muted-foreground">{force.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
