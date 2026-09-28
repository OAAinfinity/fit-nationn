import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "919632795977";

const LIMITS = { name: 80, phone: 20, message: 1000 } as const;
const SUBMIT_COOLDOWN_MS = 15_000;

/** Strip control characters and collapse whitespace; cap length. */
function clean(value: string, max: number) {
  return (
    value
      // Remove ASCII and C1 control characters before forwarding form content.
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000-\u001f\u007f-\u009f]/g, " ")
      .replace(/[ \t]{2,}/g, " ")
      .trim()
      .slice(0, max)
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [lastSubmitAt, setLastSubmitAt] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const safeName = clean(name, LIMITS.name);
    const safePhone = clean(phone, LIMITS.phone);
    const safeMessage = clean(message, LIMITS.message);
    const digits = safePhone.replace(/\D/g, "");

    if (safeName.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (digits.length < 10 || digits.length > 15) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (Date.now() - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
      setError("Please wait a moment before sending again.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const text = [
      "New Enquiry - FIT NATION",
      "",
      `Name: ${safeName}`,
      `Phone: ${safePhone}`,
      `Enquiry: ${safeMessage || "I would like to know more about Fit Nation Gym."}`,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.location.assign(waUrl);

    trackEvent("enquiry_form_submission", { form_name: "contact_section" });
    setLastSubmitAt(Date.now());
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">GET IN TOUCH</h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="text-primary shrink-0" />
            <p className="text-muted-foreground">
              Brahma Arcade, 147/77, HMT Layout, Amaravathi Layout, Nagasandra, Bengaluru, Karnataka
              560073
            </p>
          </div>
          <a
            href="tel:+919632795977"
            onClick={() => trackEvent("call_now_click", { location: "contact_section" })}
            className="flex gap-4 group"
          >
            <Phone className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
            <p className="font-bold">9632795977</p>
          </a>
          <a
            href="https://wa.me/919632795977"
            onClick={() => trackEvent("whatsapp_click", { location: "contact_section" })}
            className="flex gap-4 group"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="text-primary shrink-0 group-hover:scale-110 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <p className="font-bold">9632795977</p>
          </a>
          <div className="flex gap-4">
            <Clock className="text-primary shrink-0" />
            <div>
              <p className="font-bold">MON — SAT: 5:30 AM — 10:00 PM</p>
              <p className="text-muted-foreground">SUN: 7:00 AM — 7:00 PM (CALL TO CONFIRM)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full glass hover:grayscale-0 transition-all overflow-hidden rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
          <div className="aspect-video w-full relative">
            <a
              href="https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("open_in_maps_click")}
              className="absolute top-4 left-4 z-10 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-[10px] hover:shadow-[0_8px_20px_rgba(57,255,20,0.25)] transition-all"
            >
              Open in Maps
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6062725514753!2d77.5029671!3d13.0607149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7e94e43%3A0x86749964e528990!2sFit%20Nation!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Fit Nation Location"
              className="absolute inset-0 pointer-events-none"
            />
            <a
              href="https://maps.app.goo.gl/mx2wKB3uTjVwcr6X7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("map_click")}
              aria-label="Open Fit Nation location in Google Maps"
              className="absolute inset-0 z-[5] cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[rgba(20,20,20,0.6)] backdrop-blur-xl border border-white/8 p-8 md:p-10 rounded-[16px] shadow-2xl shadow-black/50"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your mobile number"
                      className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    maxLength={1000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-[10px] focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 placeholder:text-white/20 text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary/90">
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-black font-bold py-4 rounded-[12px] hover:shadow-[0_8px_20px_rgba(255,213,0,0.25)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : "SUBMIT ENQUIRY"}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[rgba(20,20,20,0.6)] backdrop-blur-xl border border-white/8 p-12 rounded-[16px] shadow-2xl text-center space-y-4"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="text-primary h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider">Message Received!</h3>
              <p className="text-muted-foreground">
                Our team will get back to you within 24 hours. Get ready to transform.
              </p>
              <button
                onClick={() => {
                  setName("");
                  setPhone("");
                  setMessage("");
                  setError("");
                  setIsSubmitted(false);
                }}
                className="text-primary text-sm font-bold uppercase tracking-widest hover:underline mt-4"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
