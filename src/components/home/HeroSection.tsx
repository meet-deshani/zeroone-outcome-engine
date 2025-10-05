import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          {/* USP Pill */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 animate-scale-in">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="text-sm font-semibold gradient-text">
              0 Billing for 99% Outcome !!!
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Your End-to-End Partner in{" "}
            <span className="gradient-text">Data, Tech & Strategy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build data foundations, engineer products & dashboards, and align strategy—so you scale from{" "}
            <span className="font-mono font-bold text-foreground">0 → 1 → ∞</span>{" "}
            with full visibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white font-semibold text-lg px-8 py-6 shadow-glow hover:shadow-lg transition-all hover-lift">
                Book a Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <a href="/service-deck.pdf" download>
              <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all">
                <Download className="mr-2" size={20} />
                Download Service Deck
              </Button>
            </a>
          </div>

          {/* Trust Strip */}
          <div className="pt-16 space-y-4">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Trusted by founders in
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60 font-medium">
              <span className="px-4 py-2 rounded-lg bg-card">FinTech</span>
              <span className="px-4 py-2 rounded-lg bg-card">SaaS</span>
              <span className="px-4 py-2 rounded-lg bg-card">Logistics</span>
              <span className="px-4 py-2 rounded-lg bg-card">Manufacturing</span>
              <span className="px-4 py-2 rounded-lg bg-card">E-commerce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
