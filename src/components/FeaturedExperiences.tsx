import { MessageCircle, BookOpen, Users, Zap, MessagesSquare, Trophy, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  { icon: MessageCircle, title: "Open Conversations", desc: "Join free-flowing discussions on everyday topics." },
  { icon: BookOpen, title: "Storytelling Drills", desc: "Build narrative skills and express ideas clearly." },
  { icon: Users, title: "Role-Play Practice", desc: "Simulate real-life scenarios like interviews or travel." },
  { icon: Zap, title: "Debate Topics", desc: "Argue perspectives and sharpen critical thinking." },
  { icon: MessagesSquare, title: "Discussion Groups", desc: "Collaborate with peers on engaging themes." },
  { icon: Trophy, title: "Speaking Challenges", desc: "Push your limits with timed speaking exercises." },
];

const FeaturedExperiences = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            What you can <span className="text-gradient">practice</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-lg bg-sky-light flex items-center justify-center mb-4">
                <exp.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{exp.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{exp.desc}</p>
              <button className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                Join Session <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
