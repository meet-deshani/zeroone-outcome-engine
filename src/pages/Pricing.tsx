import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
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

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
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
                <Link to="/contact">
                  <Button variant="outline" className="w-full mt-4">
                    Start Discovery
                  </Button>
                </Link>
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
                      <span>Data Engineering & ETL/ELT</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Analytics & Dashboard Pack</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Feature/API Development</span>
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
                <Link to="/contact">
                  <Button className="w-full mt-4 gradient-primary text-white">
                    Get Custom Quote
                  </Button>
                </Link>
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
                      <span>SLA Dashboard Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Automation Upkeep</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Optimization Backlog</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Cost/Case Reduction Targets</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Productivity Lift Tracking</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="w-full mt-4">
                    Discuss Retainer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">
            Traditional vs ZeroOne DTS
          </h2>
          <div className="card-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-heading">Aspect</th>
                    <th className="text-left p-6 font-heading">Traditional Consulting</th>
                    <th className="text-left p-6 font-heading bg-primary/5">ZeroOne DTS</th>
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
                    <td className="p-6 font-medium">Scope Clarity</td>
                    <td className="p-6 text-muted-foreground">Vague, changes frequently</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Clear acceptance tests</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Deliverables</td>
                    <td className="p-6 text-muted-foreground">Slides & reports</td>
                    <td className="p-6 bg-primary/5">
                      <span className="font-semibold text-primary">Systems & dashboards</span>
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

      {/* Outcome Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-4 text-center">Real Outcome Examples</h2>
          <p className="text-center text-muted-foreground mb-12">
            Clear, measurable results from actual engagements
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-2xl">40%</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Manual Work Reduced</h3>
              <p className="text-sm text-muted-foreground">
                Automated reporting & data pipeline for fintech startup
              </p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-2xl">25%</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Ops Productivity Lift</h3>
              <p className="text-sm text-muted-foreground">
                Process optimization & dashboard visibility for logistics firm
              </p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">30d</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Executive MIS Live</h3>
              <p className="text-sm text-muted-foreground">
                Real-time CXO dashboard from zero to production in 30 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-8 text-center">Pricing FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                How do you define outcome acceptance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We define measurable acceptance tests upfront: KPI deltas, dashboard functionality, API response times, or process efficiency gains. You sign off on deliverables before billing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What if milestones aren't hit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No milestone acceptance = no billing for that sprint. We iterate until acceptance criteria are met or mutually agree to re-scope.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                Can we pause between sprints?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Sprints are independent. You can pause, re-prioritize, or continue at your pace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What about IP & code ownership?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All code, data models, and documentation transfer to you. Full IP ownership. No lock-in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                What stacks do you support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PostgreSQL, BigQuery, Snowflake, dbt, Power BI, Looker Studio, Metabase, FastAPI, Airflow, and more. We adapt to your constraints.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="card-elevated px-6">
              <AccordionTrigger className="text-left">
                Any hidden costs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                None. Fixed-cost per sprint. Infrastructure costs (cloud, licenses) are transparently passed through or billed separately upfront.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust Microcopy */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-elevated p-8 text-center">
            <h3 className="font-heading text-2xl font-semibold mb-4">Security & Ownership</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={18} />
                <span>NDA Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Data Remains Your Property</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Security Best Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Clear Invoice & Sign-off Flow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Calculate Your Outcome Plan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's scope your project and define clear milestones.
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

export default Pricing;
