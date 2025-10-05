import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Zap, Shield, Gauge, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Execution",
      description: "Action over analysis. Working systems over talking points.",
    },
    {
      icon: Target,
      title: "Simplicity",
      description: "Clean solutions that work. Complexity is the enemy of scale.",
    },
    {
      icon: Shield,
      title: "Ownership",
      description: "Your problems are our problems. We stay until outcomes land.",
    },
    {
      icon: Gauge,
      title: "Precision",
      description: "Data-driven decisions. Metrics that matter. Zero guesswork.",
    },
    {
      icon: Users,
      title: "Velocity",
      description: "Fast execution. Clear milestones. No bandwidth excuses.",
    },
  ];

  const moatItems = [
    {
      title: "Problem-Solving First",
      description: "We don't just consult. We build, deploy, and validate outcomes.",
    },
    {
      title: "Fixed Costing",
      description: "Transparent sprint-based pricing. No hourly rate surprises.",
    },
    {
      title: "0 Billing for 99% Outcome !!!",
      description: "Discovery is free. Build billing only after acceptance.",
    },
    {
      title: "Full-Stack Team",
      description: "Data + Tech + Strategy in one cohesive unit. No handoffs.",
    },
  ];

  const stats = [
    { value: "15+", label: "Clients" },
    { value: "50+", label: "Dashboards Shipped" },
    { value: "1M+", label: "Rows Automated" },
    { value: "100%", label: "Delivery Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            We believe in 0 or 1 — nothing in between.
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Outcome over effort. Execution over explanation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="card-elevated p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Why ZeroOne Exists</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started ZeroOne after watching too many startups drown in reports instead of results. Teams were paying consultants by the hour, getting slides instead of systems, and struggling to connect strategy to execution.
              </p>
              <p>
                The problem wasn't lack of advice—it was lack of implementation. Founders needed someone to actually build the data foundations, engineer the dashboards, and automate the ops flows. Not just tell them what to do.
              </p>
              <p>
                So we built a different model: <span className="font-semibold text-foreground">0 → 1 → ∞</span>. Start with problem clarity, build working systems, and scale with automation. Outcome-based billing. Fixed-cost sprints. Full-stack execution.
              </p>
              <p className="font-semibold text-foreground text-lg">
                We believe in 0 or 1. Either the system works, or it doesn't. No gray area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Vision & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make every startup data-driven, scalable, and outcome-focused.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Moat */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">The Moat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {moatItems.map((item, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">The Team</h2>
            <p className="text-muted-foreground">We hire 0→1 problem solvers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card-elevated text-center group hover-lift">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary-light to-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-4xl">A</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Founder & Lead</h3>
                <p className="text-sm text-primary mb-3">Strategy + Data Architecture</p>
                <p className="text-sm text-muted-foreground">
                  10+ years building data systems. Ex-consultant turned operator. Believes systems beat slides.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="card-elevated text-center group hover-lift">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary-light to-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-4xl">B</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Tech Lead</h3>
                <p className="text-sm text-primary mb-3">Engineering + Product</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack engineer with ops process expertise. Builds APIs, automations, and dashboards that scale.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="card-elevated text-center group hover-lift">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary-light to-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-4xl">C</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1">Analytics Lead</h3>
                <p className="text-sm text-primary mb-3">BI + MIS + Dashboards</p>
                <p className="text-sm text-muted-foreground">
                  Specialist in KPI design, dashboard UX, and executive reporting. Makes data visible and actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers & Partners */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Numbers That Matter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="font-heading text-2xl font-semibold mb-6">Our Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["PostgreSQL", "BigQuery", "Snowflake", "dbt", "Power BI", "Looker Studio", "Metabase", "FastAPI", "Airflow"].map((tech) => (
                <div key={tech} className="px-4 py-2 rounded-lg bg-card border border-border font-mono text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-elevated p-8">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">Security & Trust</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle2 className="text-primary mx-auto mb-2" size={32} />
                <p className="font-semibold mb-1">NDA-Ready</p>
                <p className="text-sm text-muted-foreground">Available from day one</p>
              </div>
              <div>
                <CheckCircle2 className="text-primary mx-auto mb-2" size={32} />
                <p className="font-semibold mb-1">Data Security</p>
                <p className="text-sm text-muted-foreground">ISO-standard handling</p>
              </div>
              <div>
                <CheckCircle2 className="text-primary mx-auto mb-2" size={32} />
                <p className="font-semibold mb-1">IP Ownership</p>
                <p className="text-sm text-muted-foreground">All code transfers to client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Work with Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build systems that scale from 0 → 1 → ∞
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white text-base">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/approach">
              <Button size="lg" variant="outline" className="text-base">
                See Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
