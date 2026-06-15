import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AnimatedCoder() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Orbit rings */}
      <motion.div
        className="absolute w-72 h-72 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-52 h-52 rounded-full border border-blue-400/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={{
            transformOrigin: "0 0",
          }}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{
              transform: `translate(134px, 0) translateY(-50%)`
            }}
          />
        </motion.div>
      ))}

      {/* Main SVG character */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <svg
          width="180"
          height="220"
          viewBox="0 0 180 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow behind character */}
          <ellipse cx="90" cy="210" rx="50" ry="8" fill="rgba(59,130,246,0.15)" />

          {/* Body */}
          <rect x="50" y="100" width="80" height="80" rx="16" fill="#1e3a5f" />
          <rect x="50" y="100" width="80" height="80" rx="16" fill="url(#bodyGrad)" />

          {/* Hoodie pocket */}
          <rect x="68" y="148" width="44" height="24" rx="8" fill="#162d4d" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />

          {/* Laptop */}
          <rect x="32" y="138" width="116" height="56" rx="8" fill="#0f1f3d" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="36" y="142" width="108" height="44" rx="5" fill="#0a1628" />
          {/* Screen content */}
          <rect x="42" y="148" width="50" height="4" rx="2" fill="#3b82f6" opacity="0.8" />
          <rect x="42" y="156" width="35" height="3" rx="2" fill="#60a5fa" opacity="0.5" />
          <rect x="42" y="163" width="42" height="3" rx="2" fill="#60a5fa" opacity="0.3" />
          {/* Cursor blink */}
          <motion.rect
            x="98" y="156"
            width="2" height="10"
            rx="1"
            fill="#3b82f6"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          {/* Laptop base */}
          <rect x="28" y="192" width="124" height="6" rx="3" fill="#0f1f3d" stroke="#3b82f6" strokeWidth="1" />

          {/* Head */}
          <circle cx="90" cy="78" r="30" fill="#1e3a5f" />
          <circle cx="90" cy="78" r="30" fill="url(#headGrad)" />

          {/* Face */}
          {/* Eyes */}
          <circle cx="80" cy="75" r="4.5" fill="#0a1628" />
          <circle cx="100" cy="75" r="4.5" fill="#0a1628" />
          <circle cx="81" cy="73" r="1.5" fill="white" />
          <circle cx="101" cy="73" r="1.5" fill="white" />
          {/* Smile */}
          <path d="M83 85 Q90 91 97 85" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Hair */}
          <rect x="62" y="52" width="56" height="14" rx="7" fill="#1a2d50" />
          <rect x="64" y="50" width="52" height="12" rx="6" fill="#243d6e" />

          {/* Arms */}
          <rect x="20" y="105" width="32" height="16" rx="8" fill="#1e3a5f" transform="rotate(-15 20 105)" />
          <rect x="128" y="105" width="32" height="16" rx="8" fill="#1e3a5f" transform="rotate(15 128 105)" />

          {/* Headphones */}
          <path d="M62 68 Q62 42 90 42 Q118 42 118 68" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="62" cy="70" r="7" fill="#1e40af" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="118" cy="70" r="7" fill="#1e40af" stroke="#3b82f6" strokeWidth="1.5" />

          {/* Floating code snippets */}
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="headGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating code badges */}
      <motion.div
        className="absolute top-4 right-4 bg-card/90 backdrop-blur border border-border rounded-lg px-3 py-2 text-xs font-mono text-primary"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        {"<vision />"}
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-0 bg-card/90 backdrop-blur border border-primary/30 rounded-lg px-3 py-2 text-xs font-mono text-blue-300"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        {"import { future }"}
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-2 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-1.5 text-xs font-mono text-green-400"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        ✓ build passed
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-800/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Student Innovation Team
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
                Building digital products &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                  intelligent solutions.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                A multidisciplinary student innovation team specializing in AI, Full Stack Development, Blockchain, Data Analytics, and Cybersecurity — turning ideas into impactful digital products.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-card/50 border-border focus-visible:ring-primary/50"
                />
              </div>
              <Button
                size="lg"
                className="h-12 px-8 font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] transition-shadow bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Connect With Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Quick stats row */}
            <motion.div variants={itemVariants} className="flex gap-8 mt-10 pt-8 border-t border-border/50">
              {[["25+", "Hackathons"], ["10+", "Projects"], ["5", "Builders"]].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold font-display text-primary">{num}</p>
                  <p className="text-xs text-muted-foreground font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated coder character */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block h-[520px] relative"
          >
            <AnimatedCoder />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
