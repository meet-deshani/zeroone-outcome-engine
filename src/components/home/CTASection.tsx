import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const CTASection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-dots-data/5 via-cream-50 to-dots-strategy/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-3xl shadow-lg p-12 text-center space-y-8"
          >
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dots-strategy/10 text-ink font-mono text-xs tracking-[2px] uppercase mb-4">
                The Jio of AI
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Make AI Affordable for
                <br />
                <em className="italic text-plum">Every Business in India.</em>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Own your AI. Don't rent it. Start with a free business check-up
                and see how Private AI can transform your business.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                variant="brand"
                size="lg"
                className="font-semibold text-lg px-8 py-6"
                onClick={() => setIsContactFormOpen(true)}
              >
                <Calendar className="mr-2" size={20} />
                Get Your Free Check-Up
              </Button>
              <Link to="/private-ai">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-lg px-8 py-6 border-2 border-sand-200 hover:bg-cream-100/50 transition-all"
                >
                  Explore Private AI
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-8 border-t border-sand-200 space-y-3"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  We reply within 24 hours.
                </span>{" "}
                Your data stays private.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-dots-ops" />
                  No commitment needed
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-dots-ops" />
                  You own everything we build
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-dots-ops" />
                  Works without internet
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Schedule Discovery Call"
      />
    </section>
  );
};

export default CTASection;
