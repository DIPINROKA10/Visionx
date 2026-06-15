import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiHtml5, SiTailwindcss, SiVuedotjs, SiSass,
  SiPython, SiFastapi, SiTensorflow, SiNodedotjs, SiOpenai,
  SiKubernetes, SiEthereum, SiDocker, SiMongodb, SiPostgresql,
  SiJavascript, SiTypescript, SiGithub, SiFlask, SiScikitlearn
} from "react-icons/si";

const categories = [
  {
    name: "Frontend",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "border-blue-500/30",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "Sass/CSS", icon: SiSass, color: "#CC6699" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    ]
  },
  {
    name: "Backend & AI",
    color: "from-primary/20 to-blue-600/10",
    accent: "border-primary/30",
    techs: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
    ]
  },
  {
    name: "Data & Infrastructure",
    color: "from-indigo-500/20 to-purple-500/10",
    accent: "border-indigo-500/30",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    ]
  }
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="tech" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Tools we <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">wield</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Framework-agnostic but highly opinionated about using the right tool for the job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`relative bg-card border ${cat.accent} rounded-2xl p-8 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 pointer-events-none rounded-2xl`} />

                <h3 className="text-lg font-bold font-display mb-6 relative z-10 text-foreground/90">{cat.name}</h3>

                <div className="grid grid-cols-3 gap-4 relative z-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                  {cat.techs.map((tech, j) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: i * 0.15 + j * 0.06, duration: 0.4 }}
                        whileHover={{ scale: 1.12, y: -3 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition-all cursor-default group"
                      >
                        <Icon
                          size={28}
                          style={{ color: tech.color }}
                          className="transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                        />
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
