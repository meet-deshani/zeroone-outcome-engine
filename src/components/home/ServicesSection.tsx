import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Code, Target, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Stack",
      description: "Transform raw data into strategic intelligence",
      outcomes: [
        "Data Architecture & Engineering (warehouses, ETL/ELT, dbt)",
        "Analytics Stack & KPI Layer (Power BI / Looker Studio)",
        "Advanced Dashboard Visibility (role-based MIS, alerts)",
      ],
      color: "from-primary to-primary-light",
    },
    {
      icon: Code,
      title: "Tech Stack",
      description: "Build scalable systems and automation",
      outcomes: [
        "Product Feature Development (MVP → prod, APIs)",
        "Ops Process Setup & Tech Enablement (field/sales flows)",
        "Management Control Centers (CXO panels, live reporting)",
      ],
      color: "from-primary-light to-secondary",
    },
    {
      icon: Target,
      title: "Strategy Engine",
      description: "Drive measurable business outcomes",
      outcomes: [
        "Unit Economics Improvement & Cost Optimization",
        "Process Improvement & Efficiency Gains",
        "Organization MIS & KPI Frameworks",
      ],
      color: "from-secondary to-primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Full-Stack <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end execution across data, technology, and strategy
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-glow`}>
                  <service.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Outcomes List */}
                <ul className="space-y-3">
                  {service.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
