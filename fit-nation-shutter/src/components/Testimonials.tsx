import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { usePlaceReviews } from "@/hooks/useReviewCount";

const fallbackTestimonials = [
  { text: "One of the best gyms I have ever seen — very good flooring, great lighting and ambience, and the trainers are excellent.", author: "Padmanabha P" },
  { text: "This gym in HMT Layout, Nagasandra offers experienced trainers who provide expert guidance and coaching. The facility is clean and well-maintained, with equipment neatly arranged — an ideal place to achieve your fitness goals.", author: "Lokesha S" },
  { text: "One of the best gyms around HMT Layout and Nagasandra — clean, aesthetic, and well-equipped. Great trainers, friendly staff, and an awesome workout environment.", author: "Goutham Gowda" },
  { text: "Aravind is the best trainer — good people, good family. It doesn't feel like a gym, it feels like home.", author: "Google Review" },
  { text: "Offers the best experience for a very reasonable price.", author: "Google Review" },
];

export function Testimonials() {
  const { data } = usePlaceReviews();
  const testimonials = data?.reviews.length ? data.reviews : fallbackTestimonials;

  return (
    <section className="py-24 px-6 bg-brand-darker">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">WHAT OUR MEMBERS SAY</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.author}-${i}`}
              className="glass p-8 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                {"rating" in t && t.rating > 0 && (
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
                    ))}
                  </div>
                )}
                <p className="text-lg italic mb-6 text-muted-foreground">"{t.text}"</p>
              </div>
              <div>
                {"authorUri" in t && t.authorUri ? (
                  <a
                    href={t.authorUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary hover:underline"
                  >
                    — {t.author}
                  </a>
                ) : (
                  <p className="font-bold text-primary">— {t.author}</p>
                )}
                {"publishedAt" in t && t.publishedAt && (
                  <p className="mt-2 text-xs text-muted-foreground">{t.publishedAt}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Reviews shown from Google.{" "}
          <a href="https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
            Read all reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
