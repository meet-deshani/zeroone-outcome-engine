import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Download, TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Insights = () => {
  const [email, setEmail] = useState("");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const featuredPosts = [
    {
      title: "Designing KPI Trees for CXO MIS",
      hook: "Turn vague goals into measurable systems",
      readTime: "8 min",
      category: "Analytics & MIS",
      tags: ["MIS", "KPIs", "Strategy"],
    },
    {
      title: "From Manual MIS to Real-time Dashboards",
      hook: "The playbook to automate your reporting nightmare",
      readTime: "10 min",
      category: "Analytics & MIS",
      tags: ["Automation", "Dashboards", "Data"],
    },
    {
      title: "Unit Economics in the Real World",
      hook: "Beyond the slides—actually calculate and improve unit costs",
      readTime: "12 min",
      category: "Unit Economics & Strategy",
      tags: ["Unit Economics", "Strategy", "Ops"],
    },
    {
      title: "dbt + ELT for Startups",
      hook: "Build a modern data stack without the overhead",
      readTime: "9 min",
      category: "Data Architecture & Engineering",
      tags: ["dbt", "Data Engineering", "ELT"],
    },
    {
      title: "Ops Productivity: Metrics that Matter",
      hook: "Stop tracking vanity metrics. Here's what actually moves the needle",
      readTime: "7 min",
      category: "Ops & Process",
      tags: ["Productivity", "Ops", "Metrics"],
    },
    {
      title: "Outcome-Based Consulting: How It Works",
      hook: "Why effort-based billing is broken and what to do instead",
      readTime: "6 min",
      category: "Outcome Pricing",
      tags: ["Pricing", "Strategy", "Consulting"],
    },
  ];

  const categories = [
    "All",
    "Data Architecture & Engineering",
    "Analytics & MIS",
    "Product & Automation",
    "Ops & Process",
    "Unit Economics & Strategy",
    "Outcome Pricing",
  ];

  const caseStudies = [
    {
      title: "💰 FinTech SaaS",
      industry: "FinTech SaaS",
      problem: "Manual MIS and reconciliation took 40+ hours/month with recurring data mismatches.",
      agentDeployed: "🧠 Data Pipeline Agent",
      agentDescription: "Connected across CRM, Billing, and MIS tools to auto-reconcile, validate, and generate dashboards in real time.",
      howItWorked: "Agent auto-detected mismatched entries, flagged anomalies to Slack, and triggered re-runs using internal logic.",
      outcome: "✅ 100% automation, <1% reconciliation error, 25% faster CXO decision cycles.",
      metrics: [
        { label: "40 hrs/mo saved", icon: "⏱️" },
        { label: "<1% error", icon: "📉" },
        { label: "25% faster decisions", icon: "⚡" },
      ],
    },
    {
      title: "🚚 Logistics Startup",
      industry: "Logistics Startup",
      problem: "Field operations lacked visibility; no clarity on which zones were underperforming.",
      agentDeployed: "📍 Ops Tracking Agent + CXO Dashboard Agent",
      agentDescription: "Built tracking and visibility system for field operations.",
      howItWorked: "Agent fetched GPS pings and ticket logs, flagged inactive routes, and pushed weekly summary to WhatsApp via API integration.",
      outcome: "🚀 30% productivity boost, 2-day reduction in TAT, ₹8L/year cost savings.",
      metrics: [
        { label: "30% productivity boost", icon: "📈" },
        { label: "2-day TAT reduction", icon: "⚡" },
        { label: "₹8L/year saved", icon: "💰" },
      ],
    },
    {
      title: "🛒 D2C E-Commerce",
      industry: "D2C E-Commerce",
      problem: "Burning cash due to unclear P&L structure and inefficient ad spend.",
      agentDeployed: "📈 Financial Insight Agent",
      agentDescription: "Linked Shopify + Ad Manager + Inventory APIs to simulate real-time P&L models.",
      howItWorked: "Agent autonomously adjusted budget allocations based on ROI patterns.",
      outcome: "💡 ₹12L annual savings, 15% higher gross margins, ROI achieved within 3 months.",
      metrics: [
        { label: "₹12L annual savings", icon: "💰" },
        { label: "15% higher margins", icon: "📊" },
        { label: "3-month ROI", icon: "⚡" },
      ],
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Insights: Outcome Thinking
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Frameworks, playbooks, and practical guides for founders & operators.
          </p>
          <Button size="lg" className="gradient-primary text-white gap-2 animate-fade-in">
            <Download size={20} />
            Get the KPI Map Template (Free)
          </Button>
        </div>
      </section>

      {/* Category Tabs & Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-12 justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="All" className="mt-0">
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-3xl font-bold">Featured Series: 0→1 Playbooks</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredPosts.map((post, index) => (
                    <article key={index} className="card-elevated group hover-lift cursor-pointer">
                      <div className="p-6">
                        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                          {post.category}
                        </Badge>
                        <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {post.hook}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                          <ArrowRight 
                            size={20} 
                            className="text-primary group-hover:translate-x-1 transition-transform" 
                          />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredPosts
                    .filter((post) => post.category === category)
                    .map((post, index) => (
                      <article key={index} className="card-elevated group hover-lift cursor-pointer">
                        <div className="p-6">
                          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                            {post.category}
                          </Badge>
                          <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {post.hook}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock size={16} />
                              <span>{post.readTime}</span>
                            </div>
                            <ArrowRight 
                              size={20} 
                              className="text-primary group-hover:translate-x-1 transition-transform" 
                            />
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Proof of Intelligence in Action */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Proof of <span className="gradient-text">Intelligence in Action</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real AI Agent deployments. Real transformation. Real outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article key={index} className="card-elevated group hover-lift cursor-pointer">
                <div className="p-6">
                  {/* Title with emoji */}
                  <h3 className="font-heading text-2xl font-bold mb-4 text-center">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    {/* Problem */}
                    <div className="border-l-2 border-destructive pl-3">
                      <p className="font-semibold text-destructive mb-1 uppercase text-xs tracking-wide">Problem</p>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    
                    {/* AI Agent Deployed */}
                    <div className="border-l-2 border-primary pl-3">
                      <p className="font-semibold text-primary mb-1 uppercase text-xs tracking-wide">AI Agent Deployed</p>
                      <p className="text-foreground font-semibold">{study.agentDeployed}</p>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{study.agentDescription}</p>
                    </div>
                    
                    {/* How It Worked */}
                    <div className="border-l-2 border-primary-light pl-3">
                      <p className="font-semibold text-primary-light mb-1 uppercase text-xs tracking-wide">How It Worked</p>
                      <p className="text-muted-foreground leading-relaxed">{study.howItWorked}</p>
                    </div>
                    
                    {/* Outcome */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-lg p-3">
                      <p className="font-semibold text-primary mb-2 uppercase text-xs tracking-wide flex items-center gap-1">
                        <TrendingUp size={14} />
                        Outcome
                      </p>
                      <p className="text-foreground font-medium leading-relaxed">{study.outcome}</p>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <span className="text-lg">{metric.icon}</span>
                          <span className="font-medium text-foreground">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer note */}
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground italic text-center">
                        Deployed Inside Client Platform
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Footer tagline */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Powered by ZeroOne DOTS.ai Agents – seamlessly embedded in client environments
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get Outcome Insights Weekly
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            One practical insight a week. No fluff. Actionable systems.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="gradient-primary text-white">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Join 500+ founders and operators. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your AI Agent Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's design custom agents for your challenges
          </p>
          <Button 
            size="lg" 
            className="gradient-primary text-white text-base"
            onClick={() => setIsContactFormOpen(true)}
          >
            Launch My Agent
          </Button>
        </div>
      </section>

      <ContactForm 
        open={isContactFormOpen} 
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Launch My Agent"
      />

      <Footer />
    </div>
  );
};

export default Insights;
