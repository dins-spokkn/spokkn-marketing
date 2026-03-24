import { BookOpen, Drama, Zap, MessageSquare, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const Activities = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Storytelling",
      description: "Share and create stories together",
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Drama,
      title: "Role Play",
      description: "Practice real-life scenarios",
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Zap,
      title: "Improvisation",
      description: "Think fast, speak naturally",
      color: "from-yellow-500/10 to-yellow-600/10 border-yellow-500/20",
      iconColor: "text-yellow-600",
    },
    {
      icon: MessageSquare,
      title: "Debates",
      description: "Discuss topics and defend ideas",
      color: "from-red-500/10 to-red-600/10 border-red-500/20",
      iconColor: "text-red-600",
    },
    {
      icon: Users2,
      title: "Topic Discussions",
      description: "Explore interesting subjects",
      color: "from-green-500/10 to-green-600/10 border-green-500/20",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            5 Ways to Practice Speaking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from structured activities designed to improve your English conversation skills
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className={`bg-gradient-to-br ${activity.color} border rounded-2xl p-6 hover:shadow-lg transition-all group cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4 ${activity.iconColor}`}>
                <activity.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-muted-foreground text-sm">{activity.description}</p>
              <div className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Try Now →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
