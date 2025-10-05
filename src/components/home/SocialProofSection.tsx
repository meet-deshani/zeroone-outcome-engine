import { Link } from "react-router-dom";
import { ArrowRight, Database, TrendingDown, TrendingUp, Target } from "lucide-react";

const SocialProofSection = () => {
  const metrics = [
    {
      icon: Database,
      value: "1M+",
      label: "Rows Automated",
      color: "text-primary",
    },
    {
      icon: TrendingDown,
      value: "40%",
      label: "Manual Work Reduced",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Ops Productivity Lift",
      color: "text-primary-light",
    },
    {
      icon: Target,
      value: "100%",
      label: "Delivery Rate",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <metric.icon className={`${metric.color} mb-4`} size={32} />
                <div className="space-y-1">
                  <div className={`text-4xl font-bold font-mono ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link
              to="/work"
              className="inline-flex items-center text-primary hover:text-primary-light font-semibold group transition-colors"
            >
              See how we measure outcomes
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
