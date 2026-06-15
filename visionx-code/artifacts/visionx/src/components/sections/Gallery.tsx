import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import img1 from "@assets/IMG_20260612_164738298_1781530479748.jpg";
import img2 from "@assets/IMG_20260612_164732260_1781530479749.jpg";
import img3 from "@assets/IMG_20260612_164656760_1781530479749.jpg";
import img4 from "@assets/IMG_20260612_164631307_1781530479750.jpg";
import img5 from "@assets/IMG_20260612_164511344_1781530479751.jpg";
import img6 from "@assets/IMG_20260612_164153892_1781530479752.jpg";
import img7 from "@assets/IMG_20260612_164404918_1781530479752.jpg";
import img8 from "@assets/IMG_20260612_095340886_1781530479753.jpg";
import img9 from "@assets/IMG-20260604-WA0021_1781530479753.jpg";
import img10 from "@assets/IMG-20260604-WA0020_1781530479754.jpg";
import img11 from "@assets/IMG-20260604-WA0017_1781530479754.jpg";
import img12 from "@assets/IMG-20260604-WA0016_1781530479755.jpg";
import img13 from "@assets/IMG-20260604-WA0015_1781530479755.jpg";
import img14 from "@assets/IMG-20260604-WA0014_1781530479756.jpg";
import img15 from "@assets/IMG-20260604-WA0013_1781530479756.jpg";
import img16 from "@assets/IMG-20260530-WA0017_1781530479757.jpg";
import img17 from "@assets/IMG-20260530-WA0019_1781530479757.jpg";
import img18 from "@assets/IMG-20260530-WA0018_1781530479757.jpg";
import img19 from "@assets/IMG-20260215-WA0033_1781530479758.jpg";

const photos = [
  { src: img1, quote: "Every line of code is a step closer to the future you're building." },
  { src: img2, quote: "Champions don't wait for opportunities — they create them." },
  { src: img3, quote: "The best projects start with a single bold idea." },
  { src: img4, quote: "Innovation is not a talent — it's a choice made daily." },
  { src: img5, quote: "Together we don't just build products — we build each other." },
  { src: img6, quote: "Late nights, early breakthroughs — this is the builder's life." },
  { src: img7, quote: "Real breakthroughs come when comfort zones are left behind." },
  { src: img8, quote: "A team that laughs together, ships together." },
  { src: img9, quote: "Stand where giants stood. Then go further." },
  { src: img10, quote: "The future begins here — and you're already early." },
  { src: img11, quote: "One team. One vision. Zero limits." },
  { src: img12, quote: "Show up, build, repeat." },
  { src: img13, quote: "AI is the canvas. You are the artist." },
  { src: img14, quote: "Recognition earned through nights of relentless work." },
  { src: img15, quote: "Your tech stack matters less than your drive to ship." },
  { src: img16, quote: "Certificates are proof of the journey, not just the destination." },
  { src: img17, quote: "Stay consistent. The world rewards those who don't quit." },
  { src: img18, quote: "Every expert was once a beginner who refused to give up." },
  { src: img19, quote: "Every line of code begins with a spark of curiosity." }
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-24 bg-card/30 border-y border-border relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our <span className="text-primary">journey</span>.</h2>
            <p className="text-muted-foreground text-lg">Moments from the trenches, hackathons, and celebrations.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-muted"
              >
                <img 
                  src={photo.src} 
                  alt={`VisionX Gallery ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center"
                >
                  <p className="text-white font-medium text-lg italic drop-shadow-md">
                    "{photo.quote}"
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
