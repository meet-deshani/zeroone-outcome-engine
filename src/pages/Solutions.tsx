import { useState } from "react";
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
  TooltipProvider,
} from "@/components/ui/tooltip";
import ContactForm from "@/components/ContactForm";

const Solutions = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Launch My Agent");

  const openContactForm = (subject: string) => {
    setContactSubject(subject);
    setIsContactFormOpen(true);
  };
  const agentCategories = [
    {
      title: "Data Guardians (Revenue Protection)",
      color: "from-dots-data to-dots-ops",
      description: "Stop flying blind. We build smart AI tools that clean data and find where you're losing money.",
      agents: [
        {
          icon: LineChart,
          name: "Money You're Losing Detective",
          oneLiner: "Finds hidden costs and lost revenue in your logs.",
          inputs: ["Transaction Logs", "Inventory Data", "Ad Spend"],
          actions: ["Profile for discrepancies", "Detect margin erosion", "Identify fraud/waste"],
          outputs: ["Ranked Revenue Alerts", "Leakage Report", "Corrective Actions"],
        },
        {
          icon: Database,
          name: "Auto-Fix Your Data Feeds",
          oneLiner: "Keeps your dashboards full and correct, always.",
          inputs: ["API Sources", "Legacy DBs", "Excel Sheets"],
          actions: ["Auto-heal pipelines", "Retry failed jobs", "Backfill missing days"],
          outputs: ["Fresh Data 24/7", "0 Downtime Alerts", "Self-Healing Logs"],
        },
        {
          icon: LayoutDashboard,
          name: "The 'Board-Ready' Dashboard",
          oneLiner: "Exec-grade visibility without asking analysts for favors.",
          inputs: ["Metrics Catalog", "KPI Definitions"],
          actions: ["Real-time consolidation", "Trend analysis", "Variance explanation"],
          outputs: ["Live Profit View", "Investor Updates", "Drill-down Capability"],
        },
        {
          icon: Eraser,
          name: "Data Cleaner",
          oneLiner: "Removes duplicates and fixes bad contact info so you stop marketing to ghosts.",
          inputs: ["CRM Contacts", "Email Lists"],
          actions: ["Validate emails/phones", "Merge duplicates", "Standardize formats"],
          outputs: ["Clean Customer Golden Record", "Bounce Reduction", "Higher Deliverability"],
        },
      ],
    },
    {
      title: "Ops Velocity (Speed & Scale)",
      color: "from-dots-ops to-dots-tech",
      description: "Replace messy spreadsheets with smart workflows that run themselves.",
      agents: [
        {
          icon: ClipboardList,
          name: "Daily MIS Reporting Agent",
          oneLiner: "End the morning scramble. Reports land in your inbox by 8 AM.",
          inputs: ["CRM/Ticketing", "Dialer Logs", "Payment Gateways"],
          actions: ["Aggregate overnight data", "Calculate WoW growth", "Flag SLA breaches"],
          outputs: ["Auto-emailed PDF/Excel", "Slack Summary", "Exception List"],
        },
        {
          icon: Bell,
          name: "Noise-Canceling Alert Bot",
          oneLiner: "Pages you only when money is at risk. Ignores the rest.",
          inputs: ["System Health", "Business KPIs", "Thresholds"],
          actions: ["Filter noise", "Correlate symptoms", "Suggest root cause"],
          outputs: ["High-Fidelity Alerts", "Incident Context", "One-Click Fixes"],
        },
        {
          icon: Calendar,
          name: "Future Demand Predictor",
          oneLiner: "Predicts volume spikes so you don't overhire or underdeliver.",
          inputs: ["Historical Volume", "Seasonality Trends", "Marketing Calendar"],
          actions: ["Model capacity needs", "Simulate shock scenarios", "Optimize scheduling"],
          outputs: ["Staffing Plan", "Budget Forecast", "Capacity Risk Flags"],
        },
        {
          icon: Timer,
          name: "Deadline Watcher",
          oneLiner: "Chases your team for you. Nudges tickets *before* they breach.",
          inputs: ["Support Queue", "Order Fulfillment", "TAT Targets"],
          actions: ["Monitor countdowns", "Auto-escalate", "Nudge owners via Slack"],
          outputs: ["99% SLA Adherence", "Reduced Churn", "Happy Customers"],
        },
      ],
    },
    {
      title: "Tech Stability (Risk Reduction)",
      color: "from-dots-tech to-dots-strategy",
      description: "Make your tech stack boringly reliable. Less firefighting, more building.",
      agents: [
        {
          icon: Rocket,
          name: "Safe Code Launcher",
          oneLiner: "Prevents bad code from breaking revenue flows.",
          inputs: ["CI/CD Pipeline", "Test Suites", "Error Rates"],
          actions: ["Canary deployment checks", "Auto-rollback on error spike", "Verify core flows"],
          outputs: ["Safe Releases", "0 Downtime Deployments", "Sleep-Filled Nights"],
        },
        {
          icon: Wrench,
          name: "Quick Code Setup",
          oneLiner: "Spins up standardized, secure microservices in minutes.",
          inputs: ["Service Specs", "Security Policies"],
          actions: ["Generate repo structure", "Configure CI/CD", "Inject auth middleware"],
          outputs: ["Ready-to-Code Repos", "Standardized Architecture", "Faster Time-to-Market"],
        },
      ],
    },
    {
      title: "Strategic Clarity (Financial Outcomes)",
      color: "from-dots-data to-dots-strategy",
      description: "Test your decisions before you make them. CFO-level power in a bot.",
      agents: [
        {
          icon: DollarSign,
          name: "Profit Calculator",
          oneLiner: "Live LTV/CAC modeling. Know exactly when to step on the gas.",
          inputs: ["Ad Spend", "Churn Rate", "Expansion Revenue"],
          actions: ["Calculate repayment periods", "Simulate pricing changes", "Cohort analysis"],
          outputs: ["Live Unit Economics Model", "Breakeven Alerts", "Growth Levers"],
        },
        {
          icon: Zap,
          name: "Waste Finder",
          oneLiner: "Finds wasted time and recommends exactly what to automate next.",
          inputs: ["Time Tracking", "Process Maps", "Error Logs"],
          actions: ["Identify bottlenecks", "Quantify manual toil", "Estimate ROI of automation"],
          outputs: ["Automation Roadmap", "Cost-Savings Leaderboard", "Efficiency Score"],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "How do you define 'outcome' and acceptance?",
      answer: "We don't charge for time spent — we charge for results. Each agent has clear success targets (like 'cut invoice processing time by 80%' or 'hit 99% data accuracy'). You approve the proof of concept before full billing starts.",
    },
    {
      question: "Can we start small (The Wedge)?",
      answer: "Yes — we actually prefer it. We kick off with a quick, low-risk sprint to prove value on one specific problem. Only after you see real results do we talk about scaling up.",
    },
    {
      question: "Do I need a technical team to manage this?",
      answer: "Nope. We handle everything. We act as your behind-the-scenes AI team — keeping agents running, tuning them, and dealing with any API changes.",
    },
    {
      question: "What if the agent makes a mistake?",
      answer: "Our agents have built-in safety checks. High-confidence actions run automatically; anything uncertain gets flagged for a human to review. We always pick accuracy over speed.",
    },
    {
      question: "Do you own the code or do we?",
      answer: "You do. Unlike SaaS where you rent software, we build *your* code. When we're done, you own everything — the code, the agents, and the workflows. No lock-in.",
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen w-full">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-dots-data/5 via-cream-50 to-dots-strategy/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                  Automated Systems for <br />
                  <span className="text-plum italic">Margin & Revenue</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We don't just "do data." We build smart AI tools that protect your profit,
                  speed up operations, and wipe out boring repeat tasks.
                </p>
                <div className="pt-8 flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="brand"
                    className="font-semibold"
                    onClick={() => openContactForm("Get Your Data Check-Up")}
                  >
                    Get Your Data Check-Up (The Wedge)
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="font-semibold">
                      View Outcome Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Categories */}
          {agentCategories.map((category, catIdx) => (
            <section key={catIdx} className={catIdx % 2 === 0 ? "py-20 md:py-28" : "py-20 md:py-28 bg-cream-100"}>
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12">
                    <h2 className="text-3xl font-heading font-bold mb-2">
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {category.agents.map((agent, agentIdx) => (
                      <div key={agentIdx} className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border-2 border-transparent hover:border-sand-200">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <agent.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-semibold mb-1">
                              {agent.name}
                            </h3>
                            <p className="text-sm text-foreground/80 leading-snug">
                              {agent.oneLiner}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm mt-6 bg-background/50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <div className="col-span-1 border-r border-border/50 pr-2">
                              <p className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Reads From</p>
                              <div className="flex flex-wrap gap-1">
                                {agent.inputs.slice(0, 2).map((i, x) => (<span key={x} className="bg-dots-data/5 text-ink text-xs px-1.5 py-0.5 rounded">{i}</span>))}
                              </div>
                            </div>
                            <div className="col-span-2 pl-2">
                              <p className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Delivers Outcome</p>
                              <ul className="space-y-1">
                                {agent.outputs.slice(0, 2).map((o, x) => (
                                  <li key={x} className="flex items-start text-xs">
                                    <CheckCircle2 size={10} className="text-green-600 mr-1 mt-0.5" />
                                    <span>{o}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border flex justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-plum hover:text-ink group-hover:translate-x-1 transition-transform"
                            onClick={() => openContactForm(`Interested in ${agent.name}`)}
                          >
                            Deploy This Agent <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Approach CTA - Replaced "Approach Preview" with strong value prop */}
          <section className="py-20 md:py-28 bg-ink text-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Stop Paying for "Effort". Start Paying for Outcomes.
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Traditional consultants bill by the hour. We bill by the milestone.
                If the system doesn't work, you don't pay for the build.
              </p>
              <Button size="lg" variant="secondary" className="font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-500" onClick={() => openContactForm("Discuss Outcome Pricing")}>
                See Our Guarantee
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                  Common Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-sand-200 rounded-xl px-6 hover:border-dots-data/20 transition-colors">
                      <AccordionTrigger className="text-left font-semibold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

        </main>

        <ContactForm
          open={isContactFormOpen}
          onOpenChange={setIsContactFormOpen}
          defaultSubject={contactSubject}
        />

        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Solutions;
