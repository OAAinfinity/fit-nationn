import { motion } from "framer-motion";
import { Brain, Dumbbell, HeartPulse, Mountain, Trophy } from "lucide-react";

const zumbaAerobicsIconUrl = "/assets/zumba-aerobics-icon-new.png";
const crossfitIconUrl = "/assets/crossfit-icon-v2.png";

function PlateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Fork */}
      <path d="M1.5 4v12" />
      <path d="M1.5 16c0 1.5-1 2.5-1 3.5" />
      <path d="M0.5 4c0 2.5 1 3 1 5.5" />
      <path d="M2.5 4c0 2.5-1 3-1 5.5" />
      {/* Plate */}
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="8.5" />
      {/* Knife */}
      <path d="M21.5 4v7" />
      <path d="M21.5 12v7.5c0 1 .5 1.5.5 1.5" />
      <path d="M21.5 4c0-1.5 1-2 1.5-2v9" />
    </svg>
  );
}

type ServiceItem = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string;
  imageAlt?: string;
  title: string;
  desc: string;
};

const services: ServiceItem[] = [
  {
    icon: Dumbbell,
    title: "PERSONAL TRAINING",
    desc: "One-on-one coaching sessions tailored to your goals, form, and fitness level for faster, safer results.",
  },
  {
    image: zumbaAerobicsIconUrl,
    imageAlt: "Zumba and aerobics class icon",
    title: "ZUMBA / AEROBICS",
    desc: "High-energy dance and rhythm-based sessions that improve coordination, stamina, and make every workout enjoyable.",
  },
  {
    image: crossfitIconUrl,
    imageAlt: "CrossFit functional training icon",
    title: "CROSSFIT",
    desc: "Functional, high-intensity training that builds real-world strength for people who want to push their limits.",
  },
  {
    icon: HeartPulse,
    title: "CARDIO",
    desc: "Heart-pumping workouts that improve stamina, support heart health, and help you stay active with confidence.",
  },
  {
    icon: Brain,
    title: "STRETCHING & MEDITATION",
    desc: "Guided flexibility and mindfulness sessions to help your body recover and your mind reset.",
  },
  {
    icon: Mountain,
    title: "TREKKING",
    desc: "Guided uphill adventures that build endurance, strengthen your legs, and bring fitness into the outdoors.",
  },
  {
    icon: PlateIcon,
    title: "WEEKLY MEALS",
    desc: "Every Wednesday, enjoy complimentary bananas and eggs at the gym to support your nutrition and training.",
  },
  {
    icon: Trophy,
    title: "CHALLENGES",
    desc: "Monthly fitness competitions and team challenges that keep you motivated, accountable, and progressing.",
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">OUR SERVICES</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon!;
          return (
            <motion.div
              key={i}
              className="glass glass-hover p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.imageAlt ?? ""}
                  loading="lazy"
                  className="w-[84px] h-[84px] object-contain mb-6 opacity-100 contrast-125"
                />
              ) : (
                <Icon className="w-12 h-12 text-primary mb-6" />
              )}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
