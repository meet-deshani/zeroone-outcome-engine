import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Flag, Lock, Award } from "lucide-react";
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
            Private AI for Every Business
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xxl font-heading font-normal leading-[1.05] mb-8"
          >
            Own Your AI.
            <br />
            <em className="italic text-plum">Don't Rent It.</em>
          </motion.h1>

          {/* D.O.T.S. colored letters */}
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
            We build AI that runs on your servers, works without internet,
            and is 100% yours. You can even file a patent on it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/private-ai">
              <Button
                size="lg"
                variant="brand"
                className="text-base px-8 font-medium"
              >
                See How Private AI Works
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 font-medium"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Your Free Business Check-Up
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-sand-200">
              <Flag size={12} className="text-dots-tech" />
              Made in India
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-sand-200">
              <Lock size={12} className="text-dots-data" />
              100% Data Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-sand-200">
              <Award size={12} className="text-dots-strategy" />
              Patent-Ready IP
            </span>
          </motion.div>
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
