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
      title: "Ops Alert Agent: 38% TAT Reduction in 6 Weeks",
      metric: "38%",
      metricLabel: "TAT Reduction",
      challenge: "Manual ops monitoring causing delays",
      solution: "Deployed Ops Alert Agent with real-time SLA tracking",
      outcome: "Cut turnaround time by 38% and reduced alert fatigue by 50%",
    },
    {
      title: "Data Pipeline Agent: 72% Manual Hours Saved",
      metric: "72%",
      metricLabel: "Hours Saved",
      challenge: "Daily manual data exports and transformations",
      solution: "Built automated ETL pipeline with quality checks",
      outcome: "Team reallocated 72% of manual hours to strategic work",
    },
    {
      title: "Strategy Agent: 14% Unit Economics Improvement",
      metric: "14%",
      metricLabel: "Economics Lift",
      challenge: "CAC/LTV modeling done ad-hoc in spreadsheets",
      solution: "Unit Economics Agent with real-time cohort tracking",
      outcome: "Improved unit economics by 14% through data-driven decisions",
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

      {/* Case Studies */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes from AI agent deployments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article key={index} className="card-elevated group hover-lift cursor-pointer">
                <div className="p-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <div className="text-center">
                      <div className="text-white font-bold text-2xl">{study.metric}</div>
                      <div className="text-white text-xs">{study.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-4 text-center group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Challenge:</p>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Solution:</p>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 flex items-center gap-1">
                        <TrendingUp size={14} className="text-primary" />
                        Outcome:
                      </p>
                      <p className="text-muted-foreground">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
