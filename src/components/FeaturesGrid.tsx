import { Mic, Sparkles, Calendar, Video, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FeatureIllustrations from "./FeatureIllustrations";

const features = [
  {
    icon: Sparkles,
    title: "Generate & Save",
    description: "Create custom activities tailored to your goals and save them for later.",
    size: "large",
  },
  {
    icon: Calendar,
    title: "Join Sessions",
    description: "Explore and join live peer sessions happening right now.",
    size: "small",
  },
  {
    icon: Mic,
    title: "Host a Session",
    description: "Create and lead your own sessions for any topic or level.",
    size: "small",
  },
  {
    icon: Video,
    title: "Recordings",
    description: "Review transcripts and recordings to track your improvement.",
    size: "large",
  },
] as const;

const FeaturesGrid = () => (
  <section className="py-8 md:py-12 bg-white">
    <div className="container max-w-5xl mx-auto">
      {/* Heading */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-2">
          Features
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          Everything You Need<br />to Speak Better
        </h2>
        <p className="text-gray-600 text-sm mt-2 max-w-sm">
          Tools built around real practice — not just lessons.
        </p>
      </motion.div>

      {/* Visual Illustrations */}

      <FeatureIllustrations />
    </div>
  </section>
);

export default FeaturesGrid;