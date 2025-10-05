import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      industry: "FinTech SaaS",
      problem: "Manual MIS taking 40+ hours/month with errors",
      solution: "Built automated data pipeline + real-time dashboards",
      outcome: "100% automation, <1% error rate, 25% faster decisions",
      metrics: [
        { label: "Time Saved", value: "40hrs/mo" },
        { label: "Error Rate", value: "<1%" },
        { label: "Decision Speed", value: "+25%" },
      ],
      gradient: "from-primary to-primary-light",
    },
    {
      industry: "Logistics Startup",
      problem: "No visibility into field ops efficiency",
      solution: "Field ops tracking + CXO dashboard + alerts",
      outcome: "30% productivity gain, reduced TAT by 2 days",
      metrics: [
        { label: "Productivity", value: "+30%" },
        { label: "TAT Reduction", value: "2 days" },
        { label: "Cost Savings", value: "₹8L/yr" },
      ],
      gradient: "from-primary-light to-secondary",
    },
    {
      industry: "D2C E-commerce",
      problem: "Unit economics unclear, burning cash",
      solution: "P&L modeling + cost optimization analysis",
      outcome: "Identified ₹12L annual savings, improved margins by 15%",
      metrics: [
        { label: "Cost Saved", value: "₹12L/yr" },
        { label: "Margin Lift", value: "+15%" },
        { label: "RoI Time", value: "3 months" },
      ],
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Proof of <span className="gradient-text">Outcomes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real problems. Real solutions. Real results.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />

                <div className="p-6 space-y-4">
                  {/* Industry Tag */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium">
                    {study.industry}
                  </div>

                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      <Clock size={14} className="mr-2" />
                      Problem
                    </div>
                    <p className="text-sm leading-relaxed">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      <CheckCircle2 size={14} className="mr-2" />
                      What We Built
                    </div>
                    <p className="text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm font-semibold text-primary uppercase tracking-wide">
                      <TrendingUp size={14} className="mr-2" />
                      Outcome
                    </div>
                    <p className="text-sm font-medium leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold font-mono text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Link to="/work">
              <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow">
                View All Case Studies
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
