import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Download } from "lucide-react";

const Approach = () => {
  const tools = [
    "PostgreSQL", "BigQuery", "Snowflake", "dbt", "Power BI", 
    "Looker Studio", "Metabase", "FastAPI", "Airflow", "WhatsApp/IVR"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 animate-fade-in">
            0 Billing for 99% Outcome !!!
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our 0 → 1 → ∞ Method
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            From problem clarity to system build to scalable automation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Link to="/work">
              <Button size="lg" variant="outline" className="text-base">
                See Case Studies
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white text-base">
                Book Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">What We Believe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Execution &gt; Explanation. Simplicity &gt; Complexity. Data &gt; Opinion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Outcome-First</h3>
              <p className="text-muted-foreground">
                We define clear acceptance tests before we start. No vague deliverables.
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-2xl">₹</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Fixed-Cost Sprints</h3>
              <p className="text-muted-foreground">
                Transparent pricing. No surprises. Milestone-based billing.
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">D+T+S</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Full-Stack</h3>
              <p className="text-muted-foreground">
                Data + Tech + Strategy in one team. No handoffs, no excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Discover */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-start gap-8 mb-16">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent flex-shrink-0 flex items-center justify-center shadow-glow">
              <span className="text-white font-heading font-bold text-4xl">0</span>
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-4xl font-bold mb-4">Discover</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Audit data, map KPIs, align success criteria
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Activities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Stakeholder interviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Data profiling & system map</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Risk register</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Deliverables</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>KPI Tree</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Data Model Draft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Success Metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Scope & Milestones</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                <div>
                  <p className="text-sm font-medium mb-1">Timeline</p>
                  <p className="text-2xl font-bold">1–2 weeks</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium mb-1">Acceptance Test</p>
                  <p className="text-sm text-muted-foreground">Written scope + KPI baseline signed</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="gap-2">
                  <Download size={18} />
                  Download KPI Map Template
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline: Build */}
          <div className="flex items-start gap-8 mb-16">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent flex-shrink-0 flex items-center justify-center shadow-glow">
              <span className="text-white font-heading font-bold text-4xl">1</span>
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-4xl font-bold mb-4">Build</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Implement data pipelines, dashboards, product features, ops tooling
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Activities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>ETL/ELT with dbt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>BI setup & dashboard design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>APIs & automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Ops workflows & SOPs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Deliverables</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Data Warehouse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>BI Dashboard Pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Feature/API Suite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>SOPs & Runbook</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                <div>
                  <p className="text-sm font-medium mb-1">Timeline</p>
                  <p className="text-2xl font-bold">2–6 sprints</p>
                  <p className="text-xs text-muted-foreground">(custom to scope)</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium mb-1">Acceptance Test</p>
                  <p className="text-sm text-muted-foreground">Milestone dashboards & features pass UAT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline: Scale */}
          <div className="flex items-start gap-8">
            <div className="hidden md:block w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent flex-shrink-0 flex items-center justify-center shadow-glow">
              <span className="text-white font-heading font-bold text-4xl">∞</span>
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-4xl font-bold mb-4">Scale</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Automate, optimize, expand MIS & processes; reduce cost / increase output
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Activities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Alerting & monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Unit economics tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Efficiency optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Governance & compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Deliverables</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Automation Playbook</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>SLA Dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span>Optimization Backlog</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                <div>
                  <p className="text-sm font-medium mb-1">Timeline</p>
                  <p className="text-2xl font-bold">Ongoing</p>
                  <p className="text-xs text-muted-foreground">Monthly cycles</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium mb-1">Acceptance Test</p>
                  <p className="text-sm text-muted-foreground">% lift vs baseline (productivity, TAT, cost/case)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">Our Promise</h2>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 border-2 border-primary/20">
              <p className="text-3xl font-bold text-primary mb-6">
                "0 Billing for 99% Outcome !!!"
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Discovery ₹0</p>
                    <p className="text-sm text-muted-foreground">Scoping billed at zero</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Outcome Billing</p>
                    <p className="text-sm text-muted-foreground">Build fees tied to accepted UAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Fixed-Cost</p>
                    <p className="text-sm text-muted-foreground">Transparent milestone pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tooling & Stack */}
      <section className="py-20 px-4">
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
                We define clear acceptance tests upfront—KPI deltas, dashboard functionality, API response times, or process TAT reductions. You sign off on each milestone before billing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What happens if scope changes mid-sprint?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We re-scope and re-estimate. New milestones are documented and accepted before work begins. No surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                Typical timeline and team structure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Discovery: 1–2 weeks. Build: 2–6 sprints depending on scope. Team includes data engineer, analyst, developer, and strategist.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                How do you handle data security & NDAs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                NDA-ready from day one. We follow ISO-standard data handling. Your data stays your property. Code and IP transfer to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                Can you work with our internal engineers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We collaborate with your team, document everything, and ensure smooth handoff. No lock-in.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to go from 0 → 1 → ∞?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's map your journey and define clear outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white text-base">
                Start a Discovery
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="outline" className="text-base">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Approach;
