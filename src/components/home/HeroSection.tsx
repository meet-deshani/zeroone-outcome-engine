import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Subtle background glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,182,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(162,210,255,0.06),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mono overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] tracking-[3px] uppercase text-muted-foreground mb-8"
          >
            Outcome-Driven AI Consulting
          </motion.div>

          {/* Main Headline — Instrument Serif, simple language */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xxl font-heading font-normal leading-[1.05] mb-8"
          >
            We help businesses
            <br />
            <em className="italic text-plum">stop losing money</em>
            <br />
            using smart AI tools.
          </motion.h1>

          {/* D.O.T.S. colored letters — intrigue element */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-lg tracking-[6px] mb-10"
          >
            <span className="font-bold" style={{ color: "#C8B6FF" }}>D</span>
            <span className="text-sand-200 mx-1.5">·</span>
            <span className="font-bold" style={{ color: "#B8E0D2" }}>O</span>
            <span className="text-sand-200 mx-1.5">·</span>
            <span className="font-bold" style={{ color: "#FFCDB2" }}>T</span>
            <span className="text-sand-200 mx-1.5">·</span>
            <span className="font-bold" style={{ color: "#A2D2FF" }}>S</span>
          </motion.div>

          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12"
          >
            We find where your business leaks money, build AI tools that fix it,
            and you only pay when it works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              variant="brand"
              className="text-base px-8 font-medium"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Your Free Business Check-Up
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Link to="/community">
              <Button size="lg" variant="outline" className="text-base px-8 font-medium">
                See Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground/50"
          >
            Four pillars. One outcome.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-[1.5px] border-sand-200 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-dots-data/40" />
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Business Check-Up"
      />
    </section>
  );
};

export default HeroSection;
