import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nikitha V.",
    text: "Spokkn is an excellent platform for learning English with simple and practical lessons. The interactive sessions help build confidence and fluency effectively.",
    rating: 5,
  },
  {
    name: "Swatantra T.",
    text: "It's really a good initiative for English speakers because they feel free to express emotions on given topics which makes a person feel comfortable talking on particular topics.",
    rating: 5,
  },
  {
    name: "Smriti S.",
    text: "It's an amazing platform for anyone who wants to build their confidence while speaking to others. The environment is very friendly and supportive.",
    rating: 5,
  },
  {
    name: "Kriya",
    text: "This platform is super helpful for all ages. I've personally learned to speak confidently in front of groups. Highly recommend it to anyone keen on improving their English skills!",
    rating: 5,
  },
  {
    name: "Sefali M.",
    text: "It's a very good platform to speak and build confidence. We can practice with everyone here, which helps us become more fluent and comfortable while speaking.",
    rating: 5,
  },
  {
    name: "Rajeswari S.",
    text: "I was looking for a good spoken English class and joined a few, but didn't see improvement. This platform is the best for spoken English. Now I can speak much more fluently.",
    rating: 5,
  },
];

// Deterministic initials + color from name
const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-background overflow-hidden">
    <div className="container">

      {/* Heading */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
          What Learners Say
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-sm">
          Real stories from people who transformed their speaking confidence with Spokkn.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4
              hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.08 }}
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <svg
                  key={j}
                  className="w-3.5 h-3.5 text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-foreground/80 text-sm leading-relaxed flex-1">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-1 border-t border-border">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  text-xs font-bold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                {getInitials(t.name)}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-none">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Verified learner</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;