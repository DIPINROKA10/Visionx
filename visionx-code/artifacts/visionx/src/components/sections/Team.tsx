import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const team = [
  {
    name: "Neeraj Gahlout",
    role: "Co-Founder",
    tags: ["DATA", "WEB"],
    initials: "NG",
    photo: "/neeraj.jpeg",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    linkedin: "https://www.linkedin.com/company/visionx-nexus/"
  },
  {
    name: "Dipin Roka",
    role: "Web Dev & AI",
    tags: ["AI", "FRONTEND"],
    initials: "DR",
    photo: "/dipin.jpeg",
    color: "bg-primary/20 text-primary border-primary/30",
    linkedin: "https://www.linkedin.com/company/visionx-nexus/"
  },
  {
    name: "Prince Dubey",
    role: "Co-Founder",
    tags: ["ML", "BI"],
    initials: "PD",
    photo: "/prince.jpeg",
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    linkedin: "https://www.linkedin.com/company/visionx-nexus/"
  },
  {
    name: "Aryan Singh Thapa",
    role: "Backend & Cybersecurity",
    tags: ["BACKEND", "SECURITY"],
    initials: "AT",
    photo: "/aryan.jpeg",
    color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    linkedin: "https://www.linkedin.com/company/visionx-nexus/"
  },
  {
    name: "Sai Srujan Murthy",
    role: "Core Member",
    tags: ["AI", "PYTHON"],
    initials: "SM",
    photo: "/sai.jpeg",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    linkedin: "https://www.linkedin.com/company/visionx-nexus/"
  }
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-24 bg-card/30 border-y border-border relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <motion.div variants={variants} className="mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">Core Team</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">builders</span>.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A cross-functional unit of specialists sharing the same obsession with shipping quality products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={variants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors pointer-events-none" />

                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      className={`absolute inset-0 items-center justify-center font-display font-bold text-2xl border hidden ${member.color}`}
                      style={{ display: "none" }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display group-hover:text-primary transition-colors leading-tight">{member.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {member.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-bold tracking-wider bg-primary/10 border border-primary/20 rounded-md text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-6 border-t border-border">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
