import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 py-12 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-lg text-white">
            VX
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Vision<span className="text-primary">X</span>
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Team Vision X. Building the future.
        </p>

        <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full bg-background border border-border hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
}
