import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nikitha V.",
    text: "Spokkn is an excellent platform for learning English with simple and practical lessons. The interactive sessions help build confidence and fluency effectively.",
    rating: 5,
  },
  {
    name: "Swatantra T.",
    text: "It's really good initiative for English speakers because they feel free to express emotions on given topics which makes a person feel comfortable talking on particular topics.",
    rating: 5,
  },
  {
    name: "Smriti S.",
    text: "It's an amazing platform for anyone who wants to build their confidence while speaking to others. The environment is very friendly and supportive.",
    rating: 5,
  },
  {
    name: "Kriya",
    text: "This platform is super helpful for all ages, and I've personally learned to speak confidently in front of groups. Highly recommend it to anyone keen on improving their English skills!",
    rating: 5,
  },
  {
    name: "Sefali M.",
    text: "It's really a very good platform to speak and build confidence. We can practice with everyone here, which helps us become more fluent and comfortable while speaking.",
    rating: 5,
  },
  {
    name: "Rajeswari S.",
    text: "I was looking for a good spoken English class and joined a few, but didn't see improvement. This platform is the best for learning spoken English. Now I can speak much more fluently.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-32 bg-white overflow-hidden">
    <div className="container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground mb-4">
          What Learners Say
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Real stories from people who transformed their speaking confidence with Spokkn.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-primary/5 border border-primary/10 rounded-md p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
