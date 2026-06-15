import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tags = [
  "Artificial Intelligence", "Web Development", "Backend Engineering", 
  "Cybersecurity", "Blockchain", "Data Analytics", 
  "Sustainability Tech", "Product Development"
];

const values = [
  { icon: "⚡", title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
  { icon: "🤝", title: "Collaboration", desc: "Building together, growing together." },
  { icon: "🎯", title: "Problem Solving", desc: "Tackling real-world challenges." },
  { icon: "🌿", title: "Sustainability", desc: "Coding for a greener future." },
  { icon: "🚀", title: "Leadership", desc: "Taking initiative and driving impact." },
  { icon: "📚", title: "Continuous Learning", desc: "Always exploring new horizons." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={variants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">A team built on <span className="text-primary">Innovation</span>.</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
              <p>
                VisionX isn't just another student club. We are a collective of driven builders, researchers, and engineers who treat hackathons like battlegrounds and projects like startups. We bridge the gap between academic learning and industry-grade product development.
              </p>
              <p>
                From AI-powered sustainability solutions to blockchain transparency tools, we focus on tech that matters. We don't just write code; we architect systems, design experiences, and ship solutions.
              </p>
            </div>
          </motion.div>

          <motion.div variants={variants} className="mb-20">
            <h3 className="text-xl font-bold font-display mb-6 text-center text-foreground/80">Domains of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={variants}>
            <h3 className="text-xl font-bold font-display mb-8 text-center text-foreground/80">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
