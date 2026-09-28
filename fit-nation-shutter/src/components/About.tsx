import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">A COMMUNITY</span>
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Fit Nation was built on a simple idea: fitness shouldn't feel transactional. 
          Tucked into HMT Layout, Nagasandra, this is a space where trainers know your name, 
          your goals, and your progress, not just your membership number. 
          From Zumba and CrossFit to quiet stretching and meditation sessions, 
          Fit Nation brings every kind of workout under one roof, for every kind of person. 
          Members don't just come here to train; they come back because it feels like home. 
          That's what 'Let's Get Nation Fit' really means, fitness built around people, 
          not just equipment.
        </motion.p>
      </div>
    </section>
  );
}