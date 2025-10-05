import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Code, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Stack – From Raw Data to Smart Decisions",
      subtitle: "Build scalable data infrastructure and analytics",
      color: "from-primary to-primary-light",
      offerings: [
        {
          name: "Data Architecture & Engineering",
          description: "Design and build modern data warehouses (PostgreSQL, BigQuery, Snowflake) with validated ETL/ELT pipelines.",
          deliverables: ["Data models", "Pipeline automation", "Quality checks"],
        },
        {
          name: "Analytics Stack & KPI Layer",
          description: "Integrate dbt, Power BI, Looker Studio, Metabase. Auto-track KPIs across all functions.",
          deliverables: ["KPI dashboards", "Automated reporting", "Data catalogs"],
        },
        {
          name: "Advanced Dashboard Visibility",
          description: "Business-wide reporting with role-based dashboards for CXO, Ops, Product, Finance.",
          deliverables: ["Executive dashboards", "Team dashboards", "Alert systems"],
        },
      ],
    },
    {
      icon: Code,
      title: "Tech Stack – From Ideas to Working Systems",
      subtitle: "Engineer products, automation, and operational flows",
      color: "from-primary-light to-secondary",
      offerings: [
        {
          name: "Product Feature Development",
          description: "Build MVPs, APIs, automation systems, web apps from concept to production.",
          deliverables: ["API development", "Frontend apps", "Automation scripts"],
        },
        {
          name: "Ops Process Setup via Tech",
          description: "Field ops, customer support, communication flows—bridging process with technology.",
          deliverables: ["Workflow automation", "Integration systems", "Process dashboards"],
        },
        {
          name: "Management Control Centers",
          description: "Real-time control panels for daily business visibility via automation.",
          deliverables: ["CXO panels", "Live reporting", "Performance monitors"],
        },
      ],
    },
    {
      icon: Target,
      title: "Strategy Engine – From Clarity to Growth",
      subtitle: "Drive measurable outcomes through strategic execution",
      color: "from-secondary to-primary",
      offerings: [
        {
          name: "Unit Economics Improvement",
          description: "Deep-dive P&L modeling, cost optimization, and profitability analysis.",
          deliverables: ["Unit economics model", "Cost analysis", "Margin optimization"],
        },
        {
          name: "Process Optimization & Efficiency",
          description: "Streamline operations, reduce waste, improve productivity across teams.",
          deliverables: ["Process maps", "Efficiency metrics", "Improvement roadmap"],
        },
        {
          name: "Organization MIS Setup",
          description: "Build KPI frameworks, reporting cadence, and decision-making dashboards.",
          deliverables: ["KPI trees", "MIS architecture", "Report templates"],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We work with startups and mid-market firms across FinTech, SaaS, Logistics, Manufacturing, E-commerce, and D2C—anywhere data, tech, and strategy drive growth.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Discovery takes 1-2 weeks (free). Build sprints are 2-4 weeks each. Most clients see initial outcomes within 4-8 weeks from kickoff.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! After initial delivery, we offer Scale Retainers for monthly optimization, monitoring, and continuous improvement with SLAs.",
    },
    {
      question: "What's your tech stack?",
      answer: "We're tech-agnostic but favor: PostgreSQL, BigQuery, Snowflake, dbt, Power BI, Looker, Python, Node.js, React—chosen based on your needs and existing systems.",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                <span className="gradient-text">Data, Tech & Strategy</span>
                <br />
                Built for Outcomes
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We build the core systems that scale startups—from data pipelines to decision dashboards, from product automation to strategic execution.
              </p>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow">
                    Discuss Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-24">
              {services.map((service, idx) => (
                <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-glow flex-shrink-0`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {service.offerings.map((offering, offerIdx) => (
                      <div
                        key={offerIdx}
                        className="glass rounded-2xl p-6 hover-lift"
                      >
                        <h3 className="text-xl font-heading font-semibold mb-3">
                          {offering.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {offering.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Deliverables:
                          </p>
                          {offering.deliverables.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center text-sm">
                              <CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Proven <span className="gradient-text">Impact</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Metrics that matter across our engagements
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {[
                  { value: "1M+", label: "Rows Automated" },
                  { value: "40%", label: "Manual Work ↓" },
                  { value: "25%", label: "Productivity ↑" },
                  { value: "100%", label: "Delivery Rate" },
                ].map((stat, idx) => (
                  <div key={idx} className="glass rounded-2xl p-6 text-center hover-lift">
                    <div className="text-4xl font-bold font-mono gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <Link to="/work">
                  <Button variant="outline" size="lg" className="font-semibold">
                    View Case Studies
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-fade-up">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="glass rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl font-heading font-bold">
                Ready to Build Your Core Systems?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your data, tech, and strategy needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow">
                    Schedule a Call
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="font-semibold">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
