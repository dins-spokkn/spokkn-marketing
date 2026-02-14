import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          className="bg-gradient-brand rounded-3xl p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
            Ready to speak confidently?
          </h2>
          <p className="mt-3 text-primary-foreground/80 text-base md:text-lg">
            Start your first session today.
          </p>
          <button className="mt-8 bg-card text-foreground font-semibold px-8 py-4 rounded-full hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex items-center gap-2 mx-auto text-sm md:text-base">
            Book Your First Session
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
