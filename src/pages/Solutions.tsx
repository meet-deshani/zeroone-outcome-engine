import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, LineChart, LayoutDashboard, Eraser,
  ClipboardList, Bell, Calendar, Timer, TrendingUp,
  Rocket, Wrench,
  DollarSign, Zap, Scale,
  ArrowRight, CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Solutions = () => {
  const agentCategories = [
    {
      title: "Data Agents",
      color: "from-primary to-primary-light",
      agents: [
        {
          icon: LineChart,
          name: "Data Insight Agent",
          oneLiner: "Surfaces decision-ready insights from your databases, logs, and events.",
          inputs: ["Warehouses/DBs", "Event streams", "BI exports"],
          actions: ["Profile data", "Detect anomalies/segments", "Correlate metrics to outcomes"],
          outputs: ["Ranked insights", "Auto-generated charts", "Next actions alerts"],
        },
        {
          icon: Database,
          name: "Data Pipeline Agent",
          oneLiner: "Builds, fixes, and backfills ELT jobs autonomously.",
          inputs: ["Schemas", "Source creds", "SLAs/SLOs"],
          actions: ["Unit/data-quality tests", "Retry/backoff", "Backfills"],
          outputs: ["Fresh, validated tables", "Incident notes", "Runbook links"],
        },
        {
          icon: LayoutDashboard,
          name: "Data Dashboard Agent",
          oneLiner: "Ships exec-grade dashboards fast—kept fresh by the pipeline SLOs.",
          inputs: ["Metrics catalog", "SQL/semantic layer"],
          actions: ["Compose dashboards", "Add alerts on SLO breaches", "Explain changes"],
          outputs: ["Executive views", "Drilldowns", "Alert subscriptions"],
        },
        {
          icon: Eraser,
          name: "Data Cleaning Agent",
          oneLiner: "Dedupes, validates, and standardizes data at scale.",
          inputs: ["Raw tables", "Reference dictionaries"],
          actions: ["Schema checks", "Constraint testing", "Fuzzy matching/deduplication"],
          outputs: ["Clean, conformed datasets", "Exception queues", "Fix suggestions"],
        },
      ],
    },
    {
      title: "Ops Agents",
      color: "from-primary-light to-secondary",
      agents: [
        {
          icon: ClipboardList,
          name: "Ops Reporting Agent",
          oneLiner: "Daily MIS and ops packs—no chasing teams.",
          inputs: ["CRM/ticketing", "Dialer/IVR logs", "Payment/ops DBs"],
          actions: ["KPI aggregation", "Variance analysis", "SLA/TAT computation"],
          outputs: ["Auto-emailed MIS", "Exec summary", "Deep-dive tabs"],
        },
        {
          icon: Bell,
          name: "Ops Alert Agent",
          oneLiner: "Pages only when action is possible—cuts noise, boosts response.",
          inputs: ["KPIs & SLOs", "Thresholds", "On-call calendar"],
          actions: ["Symptom-based alerting", "Dedup & rate-limit", "Escalation policies"],
          outputs: ["Actionable pages", "Runbook link", "Post-incident notes"],
        },
        {
          icon: Calendar,
          name: "Ops Planning Agent",
          oneLiner: "Produces volume, capacity, and budget plans you can defend.",
          inputs: ["Historical volumes", "Productivity baselines", "Budget targets"],
          actions: ["Forecast demand", "Headcount/capacity modeling", "Cost scenarios"],
          outputs: ["Quarterly plan", "Hiring plan", "Budget sheet"],
        },
        {
          icon: Timer,
          name: "Ops Tracking Agent",
          oneLiner: "Real-time SLA/TAT trackers with nudges to keep goals on track.",
          inputs: ["Work queues", "SLA policies", "Shift rosters"],
          actions: ["SLA breach prediction", "Bottleneck detection", "Nudge routing"],
          outputs: ["Live trackers", "Breach prevention alerts", "Daily scorecards"],
        },
        {
          icon: TrendingUp,
          name: "Ops Productivity Agent",
          oneLiner: "Reallocates effort toward higher ROI activities automatically.",
          inputs: ["Activity logs", "Conversion by stage", "Cost per action"],
          actions: ["Elastic prioritization", "Stop/Start/More recommendations"],
          outputs: ["Daily effort plan", "ROI lift report", "Change log"],
        },
      ],
    },
    {
      title: "Tech Agents",
      color: "from-secondary to-primary",
      agents: [
        {
          icon: Rocket,
          name: "Tech DevOps Agent",
          oneLiner: "Safer releases with canaries, health checks, and instant rollback playbooks.",
          inputs: ["CI/CD config", "Health metrics", "Error budgets"],
          actions: ["Canary or blue-green rollout", "Auto-halt on SLO dip", "Rollback guides"],
          outputs: ["Release notes", "Rollout status", "Post-deploy checks"],
        },
        {
          icon: Wrench,
          name: "Tech Builder Agent",
          oneLiner: "Scaffolds services, tests, and docs so teams ship faster.",
          inputs: ["Service template", "Coding standards", "API contracts"],
          actions: ["Generate repo", "Add tests & CI", "Create docs/runbooks"],
          outputs: ["Ready-to-build service", "CI pipeline", "Developer README"],
        },
      ],
    },
    {
      title: "Strategy Agents",
      color: "from-primary to-secondary",
      agents: [
        {
          icon: DollarSign,
          name: "Unit Economics Agent",
          oneLiner: "Makes CAC/LTV, payback, and sensitivity modeling push-button.",
          inputs: ["Acquisition costs", "Cohort revenue", "Churn/retention"],
          actions: ["LTV/CAC modeling", "Payback", "Scenario & sensitivity analysis"],
          outputs: ["Board-ready model", "Risk bands", "Levers to pull"],
        },
        {
          icon: Zap,
          name: "Efficiency Optimiser Agent",
          oneLiner: "Finds waste, recommends lean changes, tracks realized savings.",
          inputs: ["Process timings", "Tool usage", "Error/rework logs"],
          actions: ["Bottleneck analysis", "Stop doing / Automate recs", "A/B of changes"],
          outputs: ["Savings tracker", "SOP updates", "ROI report"],
        },
        {
          icon: Scale,
          name: "Cost vs Opportunity Agent",
          oneLiner: "Automates trade-off analysis—what to cut, what to scale, now.",
          inputs: ["Costs", "Pipeline/ops outcomes", "Risk/impact thresholds"],
          actions: ["Decision scoring", "Scenario planning", "Guardrail checks"],
          outputs: ["Ranked options", "Decision memo", "Implement checklist"],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "How do you define 'outcome' and acceptance?",
      answer: "Each agent has clear success criteria defined during discovery—KPI deltas, SLA improvements, or cost reductions. We document acceptance tests upfront and bill only when you confirm they're met.",
    },
    {
      question: "Can we pilot an agent before committing?",
      answer: "Absolutely. Our standard approach includes a zero-billing pilot phase where we prove outcomes before scaling. You decide whether to proceed after seeing results.",
    },
    {
      question: "How do agents integrate with our existing tools?",
      answer: "We connect to 850+ platforms including warehouses (PostgreSQL, BigQuery, Snowflake), CRMs, dialers, helpdesks, and analytics tools—no ripping and replacing required.",
    },
    {
      question: "What about data security and privacy?",
      answer: "We follow Data Safeguard First principles: PII minimization, AES-256 encryption at rest, TLS 1.2+ in transit, least-privilege access, audit logs, and optional BYO-VPC deployment. See our Security page for details.",
    },
    {
      question: "How long does it take to deploy an agent?",
      answer: "Pilot phase typically takes 2-4 weeks. After proving outcomes, production deployment and handover happen in 1-2 weeks. Total time to value: 4-6 weeks on average.",
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen w-full">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
                <h1 className="text-5xl md:text-6xl font-heading font-bold">
                  <span className="gradient-text">AI Agents</span> for Business Growth
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Custom agents designed, deployed, and maintained for Data, Ops, Tech, and Strategy—driving 
                  real outcomes that plug into your existing stack.
                </p>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow">
                      Request Demo
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Categories */}
          {agentCategories.map((category, catIdx) => (
            <section key={catIdx} className={catIdx % 2 === 0 ? "py-24" : "py-24 bg-muted/30"}>
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12 animate-fade-up">
                    <h2 className="text-4xl font-heading font-bold mb-4">
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </span>
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                    {category.agents.map((agent, agentIdx) => (
                      <div key={agentIdx} className="glass rounded-2xl p-6 hover-lift">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                            <agent.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-semibold mb-2">
                              {agent.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {agent.oneLiner}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Inputs
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {agent.inputs.map((input, idx) => (
                                <span key={idx} className="px-2 py-1 rounded bg-primary/5 text-foreground">
                                  {input}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Actions
                            </p>
                            <ul className="space-y-1">
                              {agent.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle2 size={12} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{action}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Outputs
                            </p>
                            <ul className="space-y-1">
                              {agent.outputs.map((output, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle2 size={12} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-foreground">{output}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                          <Link to="/contact">
                            <Button variant="outline" size="sm" className="w-full">
                              Request Demo
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Approach Preview */}
          <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold">
                  Our <span className="gradient-text">5-Step Approach</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Diagnose → Design → Pilot → Prove → Scale
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We start with free diagnostics, design the agent with guardrails, pilot with clear success criteria, 
                  prove outcomes before billing, then scale and hand over with full documentation.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Link to="/approach">
                    <Button size="lg" variant="outline" className="font-semibold">
                      Learn More About Our Approach
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
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold">
                  Ready to Launch Your Agent?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Let's discuss which agent fits your needs and pilot it risk-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow">
                      Launch My Agent
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/work">
                    <Button size="lg" variant="outline" className="font-semibold">
                      See Live Demos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Solutions;
