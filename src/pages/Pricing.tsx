import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Pricing = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Launch My Agent");

  const tools = [
    "PostgreSQL", "BigQuery", "Snowflake", "dbt", "Power BI", 
    "Looker Studio", "Metabase", "FastAPI", "Airflow", "WhatsApp/IVR"
  ];

  const openContactForm = (subject: string) => {
    setContactSubject(subject);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Outcome-Based Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-6 animate-fade-in">
            Discovery is free. Build is fixed-cost. Billing triggers only on accepted outcomes.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary-light/20 to-accent/20 border-2 border-primary/30 font-semibold text-lg animate-fade-in">
            0 Billing for 99% Outcome !!!
          </div>
        </div>
      </section>

      {/* The ZeroOne 0 → 1 → ∞ Approach */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">The ZeroOne 0 → 1 → ∞ Approach</h2>
          <p className="text-lg text-muted-foreground">
            From problem clarity to autonomous systems in three phases
          </p>
        </div>
        <div className="container mx-auto max-w-5xl">
          {/* Timeline: Discover */}
          <div className="flex items-start gap-8 mb-16">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex-shrink-0 flex items-center justify-center shadow-glow transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <span className="text-4xl">🔍</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-4xl font-bold mb-4">Discover</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From clarity to intelligent design
              </p>
              <p className="text-foreground mb-6">
                Problem RCA, KPI formulation, and AI Agent blueprinting. We identify where intelligence adds the most value.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Includes:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>🧩 Problem RCA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>📊 KPI Formation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>🤖 AI Agent Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>📈 Possible Projections</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Timeline</p>
                    <p className="text-2xl font-bold">1–2 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline: Build */}
          <div className="flex items-start gap-8 mb-16">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-700/20 flex-shrink-0 flex items-center justify-center shadow-glow transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <span className="text-4xl">🛠️</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-4xl font-bold mb-4">Build</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From plan to AI-powered MVP
              </p>
              <p className="text-foreground mb-6">
                Our Product Managers and Agent Engineers build deployable MVPs using our in-house Agent-Building Capabilities — connecting your data, workflows, and logic into smart operational agents.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Includes:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>🧠 AI Agent Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>📡 Data Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>📊 Dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>⚙️ Automation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Timeline</p>
                    <p className="text-2xl font-bold">2–6 sprints</p>
                    <p className="text-xs text-muted-foreground mt-1">(custom to scope)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline: Scale */}
          <div className="flex items-start gap-8">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex-shrink-0 flex items-center justify-center shadow-glow transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
              <span className="text-4xl">🚀</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-4xl font-bold mb-4">Scale</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From MVP to self-improving systems
              </p>
              <p className="text-foreground mb-6">
                We evolve your AI Agents with real-time analytics, monitoring, and continuous strategic improvement — all autonomously powered by LLMs, with minimal human intervention.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Includes:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>📈 Realtime Analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>🧭 Continuous Optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>🪄 LLM-backed Automation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Timeline</p>
                    <p className="text-2xl font-bold">Ongoing</p>
                    <p className="text-xs text-muted-foreground mt-1">Monthly cycles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Pricing Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Discovery */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Discovery & Scope</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">₹0</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  No billing until you accept the plan.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Deliverables:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>KPI Map & Tree</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Data Audit Report</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Scope & Milestones</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Success Criteria Document</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => openContactForm("Start Discovery")}
                >
                  Start Discovery
                </Button>
              </CardContent>
            </Card>

            {/* Build Sprints */}
            <Card className="relative overflow-hidden border-2 border-primary shadow-glow hover-lift">
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-bl-xl">
                MOST POPULAR
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-heading">Build Sprints</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  Fixed Fee <span className="text-base font-normal text-muted-foreground">/ sprint</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Transparent milestone pricing. UAT acceptance required.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>AI Agent Development</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Data Engineering & ETL/ELT</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Analytics & Dashboard Pack</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>SOPs & Documentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Acceptance Testing</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  className="w-full mt-4 gradient-primary text-white"
                  onClick={() => openContactForm("Get Custom Quote")}
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            {/* Scale Retainer */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Scale Retainer</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  Monthly <span className="text-base font-normal text-muted-foreground">SLA-based</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ongoing optimization and automation support.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Agent Optimization & Tuning</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>SLA Dashboard Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Automation Upkeep</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Cost/Case Reduction Targets</span>
                    </li>
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => openContactForm("Discuss Retainer")}
                >
                  Discuss Retainer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tooling & Stack */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">Tooling & Stack</h2>
          <p className="text-muted-foreground mb-8">
            Stack is chosen to fit your constraints—cloud/on-prem, security, budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {tools.map((tool) => (
              <div key={tool} className="px-6 py-3 rounded-xl bg-card border border-border font-mono text-sm hover-lift">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">
            Traditional vs ZeroOne DOTS.ai
          </h2>
          <div className="card-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-heading">Aspect</th>
                    <th className="text-left p-6 font-heading">Traditional Consulting</th>
                    <th className="text-left p-6 font-heading bg-primary/5">ZeroOne DOTS.ai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Billing Model</td>
                    <td className="p-6 text-muted-foreground">Effort-based hourly rates</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Outcome-based milestones</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Team Structure</td>
                    <td className="p-6 text-muted-foreground">Multiple consultants</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">1 PM + Dedicated AI Agents</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Deliverables</td>
                    <td className="p-6 text-muted-foreground">Slides & reports</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Systems & AI agents</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Pricing</td>
                    <td className="p-6 text-muted-foreground">Blended rates, unclear total</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Fixed-cost sprints</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Risk</td>
                    <td className="p-6 text-muted-foreground">Client bears all risk</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Shared—no billing until acceptance</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-8 text-center">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                How do you define "outcome" and acceptance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We define measurable acceptance tests upfront: KPI deltas, dashboard functionality, AI agent performance, API response times, or process efficiency gains. You sign off on deliverables before billing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What if scope changes mid-sprint?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We re-scope and re-baseline transparently. If changes materially alter effort, we update the milestone pricing with mutual agreement before proceeding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                How does 1 PM + AI Agents work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You get one dedicated PM who orchestrates specialized AI agents across Data, Ops, Tech, and Strategy. The PM designs the solution, coordinates agent tasks, and ensures quality—providing full-stack capability without large human teams.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What about data security & NDAs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                NDA available from day one. We follow bank-grade security practices: PII-minimised, AES-256 at rest, TLS 1.2+ in transit, role-based access, and full audit logs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                Can you work with our internal engineers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We integrate with your existing teams, provide documentation, and can train your engineers on the systems and agents we build. Full knowledge transfer included.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to go from 0 → 1 → ∞?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's design your custom AI agent solution
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white text-base"
              onClick={() => openContactForm("Start a Discovery")}
            >
              Start a Discovery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base"
              onClick={() => openContactForm("Get My Outcome Plan")}
            >
              Get My Outcome Plan
            </Button>
          </div>
        </div>
      </section>

      <ContactForm 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen}
        defaultSubject={contactSubject}
      />

      <Footer />
    </div>
  );
};

export default Pricing;
