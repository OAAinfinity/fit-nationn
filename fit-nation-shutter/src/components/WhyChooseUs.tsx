import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Gem, Users, Ban } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified, Experienced Trainers",
    desc: "Not just staff who show you the machines, but real coaches invested in your journey.",
  },
  {
    icon: CheckCircle2,
    title: "Clean, Well-Maintained Facility",
    desc: "Good flooring, good lighting, and equipment kept in perfect order every single day.",
  },
  {
    icon: Gem,
    title: "Real Value for Money",
    desc: "A premium fitness experience without the premium price tag.",
  },
  {
    icon: Users,
    title: "A Gym That Feels Like Family",
    desc: "Members genuinely stick around because it feels like a home, not a transaction.",
  },
  {
    icon: Ban,
    title: "100% Drug Free Gym",
    desc: "No shortcuts, no steroids, no anabolics, no enhancements.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">WHY FIT NATION?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="glass p-8 hover:border-primary/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <reason.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
