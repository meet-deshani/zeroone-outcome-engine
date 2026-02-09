import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ArrowLeft, Calendar, Clock, Zap, Mail, FileText, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router-dom";

const AiAutomationGuide = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="AI Automation for Small Business — A Simple Guide for India"
                description="What AI automation really means for small and medium businesses in India. No jargon. Learn what you can automate, how much it costs, and where to start."
                keywords="AI automation small business India, AI automation guide, business automation AI, workflow automation AI, AI for SMEs India, AI automation cost India"
                canonical="https://zeroonedotsai.consulting/resources/ai-automation-guide"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "AI Automation for Small Business — A Simple Guide for India",
                    "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                    "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                    "datePublished": "2026-02-08",
                    "description": "What AI automation really means for small and medium businesses in India. No jargon. Learn what you can automate, how much it costs, and where to start."
                }}
            />
            <Navigation />

            <article className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Breadcrumb */}
                    <Link to="/resources" className="inline-flex items-center text-sm text-slate-700 hover:text-ink mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
                    </Link>

                    {/* Header */}
                    <AnimatedSection>
                        <header className="mb-12">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20">Automation</Badge>
                                <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20">AI Tools</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">SME Guide</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                AI Automation for Small Business — A Simple Guide for India
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 8, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>10 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                Everyone's talking about AI automation. But what does it actually mean for your business?
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                Simple. It means getting machines to do the boring, repetitive work. So your team can focus on what actually grows your business.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                This guide cuts through the hype. You'll learn exactly what you can automate, how much it costs, and where to start. No tech jargon. Just straight talk.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Is AI Automation? (In Simple Words)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Imagine you have an assistant who never sleeps. Never makes mistakes. Never needs a break.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                That assistant can answer customer questions. Sort your emails. Update spreadsheets. Send reminders. All by itself.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                That's AI automation. It's software that does tasks for you. Tasks that used to take hours now take seconds.
                            </p>

                            <div className="bg-gradient-to-br from-dots-ops/10 to-transparent border border-dots-ops/30 p-8 rounded-2xl">
                                <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                    Here's the Difference:
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="text-2xl">❌</div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">Old Way:</strong> Your team spends 2 hours every day answering "What's my order status?" emails.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-2xl">✅</div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">AI Way:</strong> A chatbot answers instantly. Your team gets those 2 hours back to focus on real problems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 2 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                5 Things AI Can Automate in Your Business Today
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                You don't need a huge tech team. These are things you can start automating this week.
                            </p>

                            <div className="space-y-6">
                                {/* Automation 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-ops/10 p-4 rounded-xl shrink-0">
                                            <Mail className="w-8 h-8 text-dots-ops" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                1. Customer Support
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Most customer questions are the same. "Where's my order?" "How do I return this?" "What are your hours?"
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                <strong className="text-ink">What AI does:</strong> Answers these questions instantly. 24/7. In multiple languages if needed.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Time saved:</strong> 10-15 hours per week for most small businesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Automation 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-data/10 p-4 rounded-xl shrink-0">
                                            <FileText className="w-8 h-8 text-dots-data" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                2. Data Entry
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Someone gets an order. They type it into the system. Then into the accounting software. Then into the inventory system.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                <strong className="text-ink">What AI does:</strong> Enters the data once. Updates all systems automatically. No typing. No mistakes.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Time saved:</strong> 5-8 hours per week. Plus fewer errors.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Automation 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-tech/10 p-4 rounded-xl shrink-0">
                                            <TrendingUp className="w-8 h-8 text-dots-tech" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                3. Lead Scoring
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                You get 100 leads. Only 10 will actually buy. But which 10? Your sales team wastes time chasing bad leads.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                <strong className="text-ink">What AI does:</strong> Looks at each lead. Predicts who's likely to buy. Your team focuses on the hot ones first.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Result:</strong> Sales teams close 20-30% more deals.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Automation 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-strategy/10 p-4 rounded-xl shrink-0">
                                            <Zap className="w-8 h-8 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                4. Report Generation
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Every Monday, someone spends 3 hours making a sales report. Copy-pasting numbers. Making charts. Sending it out.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                <strong className="text-ink">What AI does:</strong> Creates the report automatically. Every Monday at 9 AM. Perfect charts. Sent to everyone who needs it.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Time saved:</strong> 12 hours per month. Zero effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Automation 5 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-rose/10 p-4 rounded-xl shrink-0">
                                            <Package className="w-8 h-8 text-rose" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                5. Inventory Management
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                You run out of your best-selling product. Or you order too much of something that doesn't sell. Both cost you money.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                <strong className="text-ink">What AI does:</strong> Tracks what sells fast. Predicts when you'll run out. Orders more automatically before you're empty.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Result:</strong> Never run out of popular items. Never over-order slow items.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What It Costs (Honestly)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                AI automation isn't always expensive. Here's what you can expect to pay in India.
                            </p>

                            <div className="space-y-6">
                                {/* Price Level 1 */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹0 - ₹5,000/month
                                        </h3>
                                        <Badge className="bg-dots-data/20 text-dots-data border-0">Free & Starter Tools</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> Basic chatbots, simple email automation, basic CRM tools.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Examples:</strong> Tidio (chatbot), Zapier free plan, HubSpot free CRM.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Good for:</strong> Very small businesses just starting with automation.
                                    </p>
                                </div>

                                {/* Price Level 2 */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹10,000 - ₹50,000/month
                                        </h3>
                                        <Badge className="bg-dots-ops/20 text-dots-ops border-0">SaaS Subscriptions</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> Full automation platforms. AI chatbots, workflow automation, smart analytics.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Examples:</strong> Intercom, Zendesk AI, Make.com, Freshdesk.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Good for:</strong> Growing businesses with 10-50 employees.
                                    </p>
                                </div>

                                {/* Price Level 3 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border border-dots-tech/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹2 Lakh - ₹10 Lakh (one-time)
                                        </h3>
                                        <Badge className="bg-dots-tech/20 text-dots-tech border-0">Custom AI Build</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> AI built specifically for your business. Handles your exact workflow. Connects to all your systems.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Examples:</strong> Custom chatbot trained on your products, automated pricing system, smart inventory predictor.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Good for:</strong> Established businesses making ₹1 crore+ annually.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Reality check:</strong> Most small businesses start with ₹10,000-20,000/month in SaaS tools. If it saves your team 20 hours per month, it pays for itself.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                How to Know If Your Business Is Ready
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Not every business needs AI automation right now. Here are 3 signs you're ready.
                            </p>

                            <div className="space-y-6">
                                {/* Sign 1 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Your Team Complains About Repetitive Work
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            If people say "I spend half my day copying data" or "I answer the same questions every day," that's a sign. AI loves repetitive work.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 2 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            You're Hiring to Keep Up With Work
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Before you hire a new person for ₹25,000/month, ask: Could AI do this job for ₹10,000/month? Sometimes yes. Sometimes no. But always worth asking.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 3 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            You Make Decisions Based on Gut Feel
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            "I think we should order more of Product X." If you're guessing instead of knowing, AI can help. It looks at your actual sales data and tells you what to order.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Where to Start: A Simple 3-Step Plan
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Don't try to automate everything at once. Here's how to start small and grow.
                            </p>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border-l-4 border-dots-ops rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-ops text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Audit Your Processes
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        Spend one week tracking what your team actually does. Write it down.
                                    </p>
                                    <ul className="space-y-2 text-body-md text-slate-700">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-ops shrink-0 mt-0.5" />
                                            <span>What tasks take the most time?</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-ops shrink-0 mt-0.5" />
                                            <span>What's the same every day?</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-ops shrink-0 mt-0.5" />
                                            <span>What frustrates people the most?</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border-l-4 border-dots-tech rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Pick ONE Process to Automate
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        Don't automate everything. Pick the easiest win first.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Good first automation:</strong> Customer support chatbot. Email sorting. Order confirmations.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        <strong className="text-ink">Bad first automation:</strong> Complex pricing algorithms. Multi-system integrations. Stuff that's different every time.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border-l-4 border-dots-strategy rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Measure the Results
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        After one month, check:
                                    </p>
                                    <ul className="space-y-2 text-body-md text-slate-700">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-strategy shrink-0 mt-0.5" />
                                            <span>How much time did we save?</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-strategy shrink-0 mt-0.5" />
                                            <span>Are customers happier? (Check response times, satisfaction scores)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-dots-strategy shrink-0 mt-0.5" />
                                            <span>Did it pay for itself?</span>
                                        </li>
                                    </ul>
                                    <p className="text-body-md text-slate-700 mb-0 mt-4 leading-relaxed">
                                        If yes, automate the next process. If no, figure out why and fix it before moving on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* FAQ */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Common Questions
                            </h2>

                            <Accordion type="single" collapsible className="bg-white border border-sand-200 rounded-2xl px-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Will AI take away jobs from my team?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        AI takes away boring tasks, not jobs. Your team stops doing repetitive work and starts doing work that actually requires human judgment. Most businesses use AI to grow faster, which means they actually hire more people, not fewer.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        How long does it take to set up AI automation?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Simple tools like chatbots can be set up in a few hours. SaaS platforms take 1-2 weeks to configure properly. Custom AI builds take 2-3 months. Start with simple tools to see results fast, then expand.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        What if the AI makes mistakes?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Good AI automation includes human oversight. For example, a chatbot can answer 80% of questions, but sends the tricky 20% to a real person. You always keep humans in the loop for important decisions.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Can AI work with my existing software?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Most modern AI tools integrate with popular platforms like Shopify, QuickBooks, WhatsApp Business, and Gmail. If you're using common software, integration is usually easy. Custom or old software might need extra work.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Ready to Automate Your Business?
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                We help Indian businesses automate the right way. No wasted money on tools you don't need. Just practical AI that saves time and grows revenue.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/solutions">
                                    See Our AI Automation Solutions <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </article>

            <Footer />
            <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
        </div>
    );
};

export default AiAutomationGuide;
