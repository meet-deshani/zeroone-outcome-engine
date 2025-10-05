import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center space-y-8 animate-fade-up shadow-glow">
            {/* Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                🎯 Ready to Scale?
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Let's Go From{" "}
                <span className="gradient-text font-mono">0 → 1 → ∞</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Book a free discovery call. No billing until you're 99% satisfied with outcomes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white font-semibold text-lg px-8 py-6 shadow-glow hover:shadow-lg transition-all hover-lift">
                  <Calendar className="mr-2" size={20} />
                  Schedule Discovery Call
                </Button>
              </Link>
              <a href="mailto:hello@zeroonedts.com">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all">
                  <Mail className="mr-2" size={20} />
                  Email Us Directly
                </Button>
              </a>
            </div>

            {/* Trust Elements */}
            <div className="pt-8 border-t border-border space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">We reply within 24 hours.</span> NDA available on request.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  No commitment required
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  Fixed-cost projects
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  Outcome-based billing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
