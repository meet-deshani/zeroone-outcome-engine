import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const CaseStudiesSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const caseStudies = [
    {
      title: "💰 FinTech SaaS",
      industry: "FinTech SaaS",
      problem: "Manual MIS and reconciliation took 40+ hours/month with recurring data mismatches.",
      agentDeployed: "🧠 Data Pipeline Agent",
      agentDescription: "Connected across CRM, Billing, and MIS tools to auto-reconcile, validate, and generate dashboards in real time.",
      howItWorked: "Agent auto-detected mismatched entries, flagged anomalies to Slack, and triggered re-runs using internal logic.",
      outcome: "✅ 100% automation, <1% reconciliation error, 25% faster CXO decision cycles.",
      metrics: [
        { label: "40 hrs/mo saved", icon: "⏱️" },
        { label: "<1% error", icon: "📉" },
        { label: "25% faster decisions", icon: "⚡" },
      ],
    },
    {
      title: "🚚 Logistics Startup",
      industry: "Logistics Startup",
      problem: "Field operations lacked visibility; no clarity on which zones were underperforming.",
      agentDeployed: "📍 Ops Tracking Agent + CXO Dashboard Agent",
      agentDescription: "Built tracking and visibility system for field operations.",
      howItWorked: "Agent fetched GPS pings and ticket logs, flagged inactive routes, and pushed weekly summary to WhatsApp via API integration.",
      outcome: "🚀 30% productivity boost, 2-day reduction in TAT, ₹8L/year cost savings.",
      metrics: [
        { label: "30% productivity boost", icon: "📈" },
        { label: "2-day TAT reduction", icon: "⚡" },
        { label: "₹8L/year saved", icon: "💰" },
      ],
    },
    {
      title: "🛒 D2C E-Commerce",
      industry: "D2C E-Commerce",
      problem: "Burning cash due to unclear P&L structure and inefficient ad spend.",
      agentDeployed: "📈 Financial Insight Agent",
      agentDescription: "Linked Shopify + Ad Manager + Inventory APIs to simulate real-time P&L models.",
      howItWorked: "Agent autonomously adjusted budget allocations based on ROI patterns.",
      outcome: "💡 ₹12L annual savings, 15% higher gross margins, ROI achieved within 3 months.",
      metrics: [
        { label: "₹12L annual savings", icon: "💰" },
        { label: "15% higher margins", icon: "📊" },
        { label: "3-month ROI", icon: "⚡" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Proof of <span className="gradient-text">Intelligence in Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real AI Agent deployments. Real transformation. Real outcomes.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="card-elevated group hover-lift cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Title with emoji */}
                  <h3 className="font-heading text-2xl font-bold mb-4 text-center">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    {/* Problem */}
                    <div className="border-l-2 border-destructive pl-3">
                      <p className="font-semibold text-destructive mb-1 uppercase text-xs tracking-wide">Problem</p>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    
                    {/* AI Agent Deployed */}
                    <div className="border-l-2 border-primary pl-3">
                      <p className="font-semibold text-primary mb-1 uppercase text-xs tracking-wide">AI Agent Deployed</p>
                      <p className="text-foreground font-semibold">{study.agentDeployed}</p>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{study.agentDescription}</p>
                    </div>
                    
                    {/* How It Worked */}
                    <div className="border-l-2 border-primary-light pl-3">
                      <p className="font-semibold text-primary-light mb-1 uppercase text-xs tracking-wide">How It Worked</p>
                      <p className="text-muted-foreground leading-relaxed">{study.howItWorked}</p>
                    </div>
                    
                    {/* Outcome */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-lg p-3">
                      <p className="font-semibold text-primary mb-2 uppercase text-xs tracking-wide flex items-center gap-1">
                        <TrendingUp size={14} />
                        Outcome
                      </p>
                      <p className="text-foreground font-medium leading-relaxed">{study.outcome}</p>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <span className="text-lg">{metric.icon}</span>
                          <span className="font-medium text-foreground">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer note */}
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground italic text-center">
                        Deployed Inside Client Platform
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer tagline & CTA */}
          <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <p className="text-sm text-muted-foreground">
              Powered by ZeroOne DOTS.ai Agents – seamlessly embedded in client environments
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold shadow-glow"
              onClick={() => setIsContactFormOpen(true)}
            >
              Launch My Agent
            </Button>
          </div>
        </div>
      </div>
      
      <ContactForm 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Launch My Agent"
      />
    </section>
  );
};

export default CaseStudiesSection;
