import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Trophy, Briefcase, Award, FlaskConical, Leaf, Rocket, X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@assets/IMG_20260612_164738298_1781530479748.jpg";
import img4 from "@assets/IMG_20260612_164631307_1781530479750.jpg";
import img7 from "@assets/IMG_20260612_164404918_1781530479752.jpg";
import img9 from "@assets/IMG-20260604-WA0021_1781530479753.jpg";
import img10 from "@assets/IMG-20260604-WA0020_1781530479754.jpg";
import img13 from "@assets/IMG-20260604-WA0015_1781530479755.jpg";
import img14 from "@assets/IMG-20260604-WA0014_1781530479756.jpg";
import img15 from "@assets/IMG-20260604-WA0013_1781530479756.jpg";
import img16 from "@assets/IMG-20260530-WA0017_1781530479757.jpg";
import img19 from "@assets/IMG-20260215-WA0033_1781530479758.jpg";

import cert1 from "@assets/dfc6ae9b-1dc0-4344-9c45-e605f0fa29bd_1781532517082.png";
import cert2 from "@assets/HCL_GUVI_Certification_-_719867I2u2VJ2p1Nj7_(2)_1781532517083.png";
import cert3 from "@assets/IMG-20260316-WA0008_1781532517084.jpg";
import cert4 from "@assets/3b98d0c0-aeb9-49e7-9d95-b3e4a98c7a67_(1)_1781532517085.jpg";
import cert5 from "@assets/neerajchangedphotogreenhack_1781532517085.jpeg";
import cert6 from "@assets/etaihac_1781532517086.png";
import cert7 from "@assets/Screenshot_2026-06-10_175848_1781532517087.png";
import cert8 from "@assets/Screenshot_2026-06-10_175610_1781532517090.png";
import cert9 from "@assets/Screenshot_2026-06-10_154645_1781532517090.png";
import cert10 from "@assets/cstcneerajsau_1781532517091.jpg";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Hackathons",
    subtitle: "30+ Participated",
    desc: "National and international including India AI Impact Buildathon, ET Gen AI Hackathon, GreenHack.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Internships",
    subtitle: "Multiple Experiences",
    desc: "AICTE × 1M1B Green Skills Internship, Codec Technologies, IIT Kanpur.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certifications",
    subtitle: "Continuous Learning",
    desc: "Top 20 National Quant Finance Olympiad (IIT Guwahati), Power BI, SQL, IBM Linux, JP Morgan.",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Research & Innovation",
    subtitle: "Emerging Tech",
    desc: "Blockchain, AI for sustainability, voice detection, predictive analytics.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainability",
    subtitle: "Green Tech Focus",
    desc: "EcoWise AI, AirSense, GreenHack — building for a greener planet.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Initiatives",
    subtitle: "Entrepreneurship",
    desc: "Vision X, VisionX Nexus, and multiple products in development.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20"
  }
];

const certificates = [
  { src: cert5, label: "2nd Place — Green Hack 2026", awardee: "Neeraj Gahlout", type: "🏆 Winner" },
  { src: cert8, label: "National Quant Finance Olympiad", awardee: "Aryan Singh Thapa", type: "🏅 Achievement" },
  { src: cert6, label: "ET-AI Hackathon 2026 — Semi-Finalist", awardee: "Neeraj Gahlout", type: "🥈 Semi-Finalist" },
  { src: cert2, label: "India AI Impact Buildathon", awardee: "Prince Dubey", type: "📜 Participation" },
  { src: cert7, label: "JP Morgan — Software Engineering Simulation", awardee: "Aryan Singh Thapa", type: "📜 Completion" },
  { src: cert9, label: "IIT Kanpur — Python for Data Science", awardee: "Prince Dubey", type: "📜 Completion" },
  { src: cert1, label: "Hackarena 2.0 — Ignite Room", awardee: "Neeraj Gahlout", type: "📜 Participation" },
  { src: cert3, label: "INNOVAT3 — Web3 Hackathon (IEM Kolkata)", awardee: "Neeraj Gahlout", type: "📜 Participation" },
  { src: cert4, label: "CodeX — Crack the Code (Garden City Univ.)", awardee: "Neeraj Gahlout", type: "📜 Participation" },
  { src: cert10, label: "Smart Campus Hackathon (SAU)", awardee: "Neeraj Gahlout (Team VisionX)", type: "📜 Participation" },
];

const photoStrip = [img1, img7, img9, img10, img13, img14, img15, img16, img4, img19];
const photoStrip2 = [...photoStrip].reverse();

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const prev = () => setLightbox(l => l !== null ? (l - 1 + certificates.length) % certificates.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % certificates.length : null);

  return (
    <section id="achievements" className="py-24 bg-card/30 border-y border-border relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-64 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">Achievements</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">recognition</span>.
            </h2>
            <p className="text-muted-foreground text-lg">The receipts of hard work and relentless building.</p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-card border ${item.border} rounded-xl p-6 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-1">{item.title}</h3>
                <p className={`text-sm font-medium ${item.color} mb-3`}>{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Certificates Gallery */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold font-display mb-2">Our <span className="text-primary">certificates</span>.</h3>
            <p className="text-muted-foreground text-sm mb-8">Click any certificate to view it full size.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -4 }}
                onClick={() => setLightbox(i)}
                className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 cursor-pointer bg-card transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-xs font-bold text-white leading-tight mb-1">{cert.label}</p>
                  <p className="text-xs text-primary/90">{cert.awardee}</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs bg-primary/90 text-white px-2 py-0.5 rounded-full font-medium">{cert.type}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Photo Strip */}
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-2xl font-bold font-display mb-2">Team <span className="text-primary">moments</span>.</h3>
            <p className="text-muted-foreground text-sm mb-8">Snapshots from our journey — hackathons, events, and milestones.</p>
          </motion.div>

          <div className="relative overflow-hidden mb-4 rounded-xl" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...photoStrip, ...photoStrip].map((src, i) => (
                <div key={i} className="w-52 h-36 flex-shrink-0 rounded-xl overflow-hidden border border-border group">
                  <img src={src} alt={`Team moment ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-xl" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <motion.div
              className="flex gap-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              style={{ width: "max-content" }}
            >
              {[...photoStrip2, ...photoStrip2].map((src, i) => (
                <div key={i} className="w-52 h-36 flex-shrink-0 rounded-xl overflow-hidden border border-border group">
                  <img src={src} alt={`Team moment ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-border"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={certificates[lightbox].src}
                alt={certificates[lightbox].label}
                className="w-full object-contain bg-white"
                style={{ maxHeight: "80vh" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent px-6 py-4">
                <p className="font-bold text-base">{certificates[lightbox].label}</p>
                <p className="text-sm text-primary">{certificates[lightbox].awardee} · {certificates[lightbox].type}</p>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-card transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-card hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-card hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === lightbox ? "bg-primary w-4" : "bg-border hover:bg-muted-foreground"}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
