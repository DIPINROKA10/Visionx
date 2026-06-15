import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative bg-background" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's build <span className="text-primary">together</span>.</h2>
            <p className="text-muted-foreground text-lg">
              Whether you're looking to collaborate on a project, hire top talent, or just say hi — our inbox is open.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-display mb-4">Reach out directly</h3>
                <a href="mailto:visionxofficial@zohomail.in" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">visionxofficial@zohomail.in</span>
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display mb-4">Connect online</h3>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">VisionX on LinkedIn</span>
                </a>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-card border-border focus-visible:ring-primary/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-card border-border focus-visible:ring-primary/50 h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <Input id="subject" placeholder="Collaboration Inquiry" className="bg-card border-border focus-visible:ring-primary/50 h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="bg-card border-border focus-visible:ring-primary/50 min-h-[150px] resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 font-bold group shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
