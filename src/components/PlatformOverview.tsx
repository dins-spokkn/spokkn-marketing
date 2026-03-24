import { Video, Grid3x3, Users } from "lucide-react";
import { motion } from "framer-motion";

const PlatformOverview = () => {
  const features = [
    {
      icon: Video,
      title: "Live Sessions",
      description: "Join real-time conversation sessions with peers",
    },
    {
      icon: Grid3x3,
      title: "Activity-Based",
      description: "Practice through storytelling, debates, role-play, and more",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Learn together in a supportive peer environment",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            More Than Just Language Learning
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
