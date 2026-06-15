import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Database, Globe, Network, Shield, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TraceRelief",
    category: "Blockchain",
    desc: "Blockchain-based disaster relief fund transparency platform. Ensures donations reach intended recipients with immutable audit trails.",
    tags: ["Solidity", "React", "IPFS"],
    filter: "blockchain",
    icon: <Network className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10",
    githubUrl: "https://github.com/DIPINROKA10"
  },
  {
    id: 2,
    title: "EcoWise AI",
    category: "AI · Sustainability",
    desc: "AI-powered sustainability advisor providing personalized carbon footprint analysis and actionable recommendations.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    filter: "ai",
    icon: <Cpu className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10",
    githubUrl: "https://github.com/DIPINROKA10"
  },
  {
    id: 3,
    title: "AirSense",
    category: "AI · IoT",
    desc: "Real-time air quality monitoring and prediction system using ML models for environmental health insights.",
    tags: ["Python", "LSTM", "IoT"],
    filter: "ai",
    icon: <Globe className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10",
    githubUrl: "https://github.com/DIPINROKA10"
  },
  {
    id: 4,
    title: "City SOS",
    category: "Web · AI",
    desc: "Emergency dispatch coordination system with AI triage for faster emergency response across urban areas.",
    tags: ["React", "FastAPI", "WebSocket"],
    filter: "web",
    icon: <Shield className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10",
    githubUrl: "https://github.com/DIPINROKA10"
  },
  {
    id: 5,
    title: "VisionX Portal",
    category: "Web · Data",
    desc: "Team collaboration and project management portal built for the VisionX team ecosystem.",
    tags: ["React", "Node.js", "PostgreSQL"],
    filter: "web",
    icon: <Database className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10/Visionx",
    githubUrl: "https://github.com/DIPINROKA10/Visionx"
  },
  {
    id: 6,
    title: "GreenHack Platform",
    category: "Web · Sustainability",
    desc: "Hackathon management platform for green tech competitions, handling registrations and submissions.",
    tags: ["Vue.js", "Express", "MongoDB"],
    filter: "web",
    icon: <Code2 className="w-6 h-6" />,
    demoUrl: "https://github.com/DIPINROKA10",
    githubUrl: "https://github.com/DIPINROKA10"
  }
];

const filters = ["All", "Blockchain", "AI", "Web", "Data"];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(p =>
    activeFilter === "All" || p.filter.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <section id="works" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">Featured Works</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">What we've <span className="text-primary">built</span>.</h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
                <p className="text-xs text-primary font-medium mb-4 uppercase tracking-wider">{project.category}</p>
                <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/5 border border-primary/20 rounded text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-card border border-border text-muted-foreground text-xs font-semibold hover:border-primary/50 hover:text-foreground transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
