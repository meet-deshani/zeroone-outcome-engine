import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Star, Zap, Users, MessageSquare, Database, LayoutDashboard, Clock, IndianRupee } from "lucide-react";

export default function AiToolsIndia() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Best AI Tools for Indian Businesses in 2026"
        description="A curated list of the best AI tools for Indian businesses. From free options to enterprise solutions. Covers automation, analytics, content, customer support, and more."
        keywords="best AI tools India 2026, AI tools for business, AI software India, business AI tools, AI automation tools, AI analytics tools India"
        canonical="https://zeroonedotsai.consulting/resources/ai-tools-india"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best AI Tools for Indian Businesses in 2026",
            "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
            "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
            "datePublished": "2026-02-08",
            "description": "A curated list of the best AI tools for Indian businesses in 2026."
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best AI Tools for Indian Businesses 2026",
            "numberOfItems": 6,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "ZeroOne DOTS — AI Agents for Revenue & Operations" },
              { "@type": "ListItem", "position": 2, "name": "ChatGPT / Claude — AI Assistants for Business" },
              { "@type": "ListItem", "position": 3, "name": "Zapier AI — Workflow Automation" },
              { "@type": "ListItem", "position": 4, "name": "Notion AI — Team Productivity" },
              { "@type": "ListItem", "position": 5, "name": "Zoho Zia — CRM Intelligence" },
              { "@type": "ListItem", "position": 6, "name": "Freshworks Freddy — Customer Support AI" }
            ]
          }
        ]}
      />

      <Navigation />

      <main className="bg-cream-50">
        {/* Hero */}
        <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dots-tech/10 text-dots-tech text-body-sm font-mono uppercase tracking-wide rounded-full">
                <Zap className="w-4 h-4" />
                Tool Guide
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sand-200/50 text-slate-700 text-body-sm rounded-full">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dots-data/10 text-dots-data text-body-sm rounded-full">
                <Star className="w-4 h-4" />
                Updated Feb 2026
              </span>
            </div>

            <h1 className="font-heading text-display-xl text-ink mb-6">
              Best AI Tools for Indian Businesses in 2026
            </h1>

            <p className="text-body-lg text-slate-700 mb-4">
              A curated list of AI tools that actually work for Indian businesses. From free options to enterprise solutions.
            </p>

            <p className="text-body-sm text-stone-500">
              Published February 8, 2026 · Updated monthly
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <AnimatedSection className="pb-12">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-6">
                  How We Picked These Tools
                </h2>

                <p className="text-body-md text-slate-700 mb-6">
                  We tested 50+ AI tools. These are the ones that passed our test for Indian businesses.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-dots-strategy flex-shrink-0" />
                      <h3 className="font-heading text-display-sm text-ink">Works in India</h3>
                    </div>
                    <p className="text-body-md text-slate-700">
                      No geo-restrictions. Supports Indian payment methods. Good customer support in IST hours.
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-dots-ops flex-shrink-0" />
                      <h3 className="font-heading text-display-sm text-ink">Affordable</h3>
                    </div>
                    <p className="text-body-md text-slate-700">
                      Either has a free plan or pricing that makes sense for small to mid-sized businesses.
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-dots-data flex-shrink-0" />
                      <h3 className="font-heading text-display-sm text-ink">Proven Results</h3>
                    </div>
                    <p className="text-body-md text-slate-700">
                      Used by real businesses. Not experimental. Has case studies and testimonials.
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-dots-tech flex-shrink-0" />
                      <h3 className="font-heading text-display-sm text-ink">Easy to Start</h3>
                    </div>
                    <p className="text-body-md text-slate-700">
                      No coding required. Quick setup. You can start seeing value in the first week.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-8">
                  AI Tools by Category
                </h2>

                <p className="text-body-md text-slate-700 mb-8">
                  We've organized these by what they help you do. Pick the category that matters most to your business right now.
                </p>

                {/* Featured: ZeroOne DOTS */}
                <div className="bg-gradient-to-br from-dots-data/10 via-dots-ops/10 to-dots-strategy/10 border-2 border-ink/10 rounded-2xl p-8 mb-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink text-cream-50 text-body-sm font-mono uppercase tracking-wide rounded-full">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  </div>

                  <h3 className="font-heading text-display-lg text-ink mb-3">
                    Revenue & Operations — ZeroOne DOTS
                  </h3>

                  <p className="text-body-lg text-slate-700 mb-6">
                    AI agents that find hidden money in your business and fix operations on autopilot.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Tracks where your money goes and finds leaks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Automates repetitive tasks like data entry and reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Predicts problems before they happen (like returns and chargebacks)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Built specifically for D2C brands, ecommerce, and SaaS in India</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm border border-sand-200/50 rounded-xl p-6 mb-6">
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Custom</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">D2C, Ecommerce, SaaS</p>
                      </div>
                    </div>
                    <p className="text-body-sm text-stone-500">
                      Free audit available. ROI-based pricing means you only pay when you save money.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-ink hover:bg-plum text-white rounded-full font-medium transition-colors duration-200"
                  >
                    <a href="/solutions" className="inline-flex items-center gap-2">
                      Learn More About ZeroOne
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>

                {/* ChatGPT / Claude */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-strategy/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-dots-strategy" />
                    </div>
                    <div>
                      <h3 className="font-heading text-display-lg text-ink mb-2">
                        AI Assistants — ChatGPT & Claude
                      </h3>
                      <p className="text-body-md text-slate-700 mb-4">
                        Your AI co-worker. Writes, summarizes, brainstorms, answers questions.
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Write emails, reports, and social media posts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Summarize long documents in seconds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Brainstorm ideas and solve problems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Analyze data and explain complex topics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cream-100 border border-sand-200 rounded-xl p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Free</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Pro Plans:</p>
                        <p className="text-body-md text-slate-700">₹1,600-2,000/mo</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">Everyone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zapier AI */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-ops/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-dots-ops" />
                    </div>
                    <div>
                      <h3 className="font-heading text-display-lg text-ink mb-2">
                        Workflow Automation — Zapier AI
                      </h3>
                      <p className="text-body-md text-slate-700 mb-4">
                        Connect your apps and automate repetitive tasks. No coding needed.
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Auto-save email attachments to Google Drive</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Send Slack alerts when you get new customers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Sync data between your CRM, accounting, and email tools</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Works with 5,000+ apps including Indian tools like Razorpay and Zoho</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cream-100 border border-sand-200 rounded-xl p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Free</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Paid Plans:</p>
                        <p className="text-body-md text-slate-700">From ₹1,600/mo</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">Operations teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notion AI */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-tech/10 flex items-center justify-center flex-shrink-0">
                      <LayoutDashboard className="w-6 h-6 text-dots-tech" />
                    </div>
                    <div>
                      <h3 className="font-heading text-display-lg text-ink mb-2">
                        Team Productivity — Notion AI
                      </h3>
                      <p className="text-body-md text-slate-700 mb-4">
                        All your docs, wikis, and projects in one place. AI helps you write and organize faster.
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Write meeting notes, PRDs, and project plans</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Auto-generate summaries of long documents</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Find information across all your team's docs instantly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Translate content into multiple languages</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cream-100 border border-sand-200 rounded-xl p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Free</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">AI Add-on:</p>
                        <p className="text-body-md text-slate-700">₹800/user/mo</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">Remote teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zoho Zia */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-data/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-dots-data" />
                    </div>
                    <div>
                      <h3 className="font-heading text-display-lg text-ink mb-2">
                        CRM Intelligence — Zoho Zia
                      </h3>
                      <p className="text-body-md text-slate-700 mb-4">
                        AI that lives inside your CRM. Predicts sales, suggests next steps, finds insights.
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Predicts which leads are most likely to buy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Suggests the best time to follow up with customers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Auto-logs emails and calls into your CRM</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Built by an Indian company, great support for Indian businesses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cream-100 border border-sand-200 rounded-xl p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Free tier</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Paid Plans:</p>
                        <p className="text-body-md text-slate-700">From ₹1,200/user/mo</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">Sales teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freshworks Freddy */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-ops/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-dots-ops" />
                    </div>
                    <div>
                      <h3 className="font-heading text-display-lg text-ink mb-2">
                        Customer Support — Freshworks Freddy
                      </h3>
                      <p className="text-body-md text-slate-700 mb-4">
                        AI chatbot that handles customer questions 24/7. Another Indian company.
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading text-display-sm text-ink mb-3">What it does:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Answer common customer questions instantly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Route complex issues to the right team member</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Suggest replies to support agents to save time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Works in multiple Indian languages</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cream-100 border border-sand-200 rounded-xl p-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Starting Price:</p>
                        <p className="font-heading text-display-sm text-ink">Free trial</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Paid Plans:</p>
                        <p className="text-body-md text-slate-700">From ₹1,200/mo</p>
                      </div>
                      <div>
                        <p className="text-body-sm text-stone-500 mb-1">Best For:</p>
                        <p className="text-body-md text-slate-700">Support teams</p>
                      </div>
                    </div>
                  </div>
                </div>

              </section>

              {/* Section 3: Comparison Table */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-6">
                  Quick Comparison Table
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-sand-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-cream-100">
                        <th className="text-left p-4 font-heading text-display-sm text-ink">Tool</th>
                        <th className="text-left p-4 font-heading text-display-sm text-ink">Best For</th>
                        <th className="text-left p-4 font-heading text-display-sm text-ink">Starting Price</th>
                        <th className="text-left p-4 font-heading text-display-sm text-ink">India-Friendly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-200">
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">ZeroOne DOTS</td>
                        <td className="p-4 text-body-md text-slate-700">Revenue & Operations</td>
                        <td className="p-4 text-body-md text-slate-700">Custom pricing</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">ChatGPT / Claude</td>
                        <td className="p-4 text-body-md text-slate-700">AI Assistant</td>
                        <td className="p-4 text-body-md text-slate-700">Free (Pro: ₹1,600-2,000)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">Zapier AI</td>
                        <td className="p-4 text-body-md text-slate-700">Workflow Automation</td>
                        <td className="p-4 text-body-md text-slate-700">Free (Paid: ₹1,600+)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">Notion AI</td>
                        <td className="p-4 text-body-md text-slate-700">Team Productivity</td>
                        <td className="p-4 text-body-md text-slate-700">Free (AI: ₹800/user)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">Zoho Zia</td>
                        <td className="p-4 text-body-md text-slate-700">CRM Intelligence</td>
                        <td className="p-4 text-body-md text-slate-700">Free tier (Paid: ₹1,200+)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes (Made in India)
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-cream-50 transition-colors">
                        <td className="p-4 font-medium text-body-md text-ink">Freshworks Freddy</td>
                        <td className="p-4 text-body-md text-slate-700">Customer Support</td>
                        <td className="p-4 text-body-md text-slate-700">Free trial (Paid: ₹1,200+)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-body-sm text-dots-strategy">
                            <CheckCircle2 className="w-4 h-4" />
                            Yes (Made in India)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-6">
                  How to Choose the Right AI Tool
                </h2>

                <p className="text-body-md text-slate-700 mb-8">
                  Don't try to use every tool. Start with one. Here are 3 questions to help you pick.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-dots-data rounded-r-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-3">
                      1. What's your biggest pain point right now?
                    </h3>
                    <p className="text-body-md text-slate-700">
                      If you're losing money and don't know why → ZeroOne DOTS.
                      If your team is drowning in repetitive tasks → Zapier AI.
                      If customer support is overwhelming → Freshworks Freddy.
                      If you just want to try AI → ChatGPT or Claude (they're free).
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-dots-ops rounded-r-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-3">
                      2. What's your budget?
                    </h3>
                    <p className="text-body-md text-slate-700">
                      Start with free tools first. ChatGPT, Notion, and Zapier all have free plans. Test them for 2 weeks. Only upgrade if you're actually using them daily. For custom solutions like ZeroOne, the ROI should be clear before you spend a rupee.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-dots-strategy rounded-r-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-3">
                      3. Do you need Indian support?
                    </h3>
                    <p className="text-body-md text-slate-700">
                      If you want support during IST hours and payment in rupees, go with Indian companies like ZeroOne, Zoho, or Freshworks. Global tools like ChatGPT and Notion work fine in India but support can be slower.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-8">
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Which AI tool should I start with?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      Start with ChatGPT or Claude. Both are free. Use them for 2 weeks to write emails, summarize documents, and brainstorm ideas. Once you're comfortable, move to specialized tools like Zapier for automation or ZeroOne for revenue optimization. Don't try to learn everything at once.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Are these tools actually worth the money?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      Yes, if you use them. Most businesses see 10x ROI on AI tools within 3 months. For example, if Zapier saves your team 5 hours per week, that's 20 hours a month. At ₹500/hour, you save ₹10,000 but only pay ₹1,600. The key is to actually use them, not just pay for them.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Do I need to know coding to use these tools?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      No. All the tools on this list are no-code. You use them like you'd use WhatsApp or Gmail. Click buttons, type instructions, see results. Zapier might feel a bit technical at first, but they have templates that make it easy. If you can use Google Sheets, you can use these tools.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Will these tools work for small businesses in India?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      Absolutely. That's why we picked them. Tools like Zoho and Freshworks are built by Indian companies for Indian businesses. They support rupee payments, Indian tax systems, and local customer support. Global tools like ChatGPT and Notion work perfectly in India too. Start small, scale when you're ready.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Final CTA */}
              <section>
                <div className="bg-gradient-to-br from-dots-data/20 via-dots-ops/20 to-dots-tech/20 border border-sand-200 rounded-2xl p-10 text-center">
                  <h2 className="font-heading text-display-lg text-ink mb-4">
                    Need Help Choosing?
                  </h2>
                  <p className="text-body-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                    Not sure which tool is right for your business? Talk to our AI experts. We'll help you pick the best tools and set them up for free.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setContactOpen(true)}
                    className="bg-ink hover:bg-plum text-white rounded-full font-medium transition-colors duration-200"
                  >
                    Get Free Tool Recommendations
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </section>

            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
