import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ArrowLeft, Calendar, Clock, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessMarginGuide = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="How to Improve Business Margins with AI — A Simple Guide"
                description="Learn how AI finds and fixes the hidden places where your business loses money. Practical tips for Indian businesses to stop margin leakage and grow profits."
                keywords="business margin improvement AI, margin recovery AI India, how to improve profit margins, AI profit optimization, margin leakage detection, business margin calculator"
                canonical="https://zeroonedotsai.consulting/resources/business-margin-guide"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How to Improve Business Margins with AI — A Simple Guide for Indian Businesses",
                    "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                    "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                    "datePublished": "2026-02-08",
                    "description": "Learn how AI finds and fixes the hidden places where your business loses money."
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
                                <Badge className="bg-dots-data/10 text-dots-data border-dots-data/20">Business Growth</Badge>
                                <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20">AI Tools</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">Strategy</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                How to Improve Business Margins with AI — A Simple Guide
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 8, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>8 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                Every business loses money. Even the best ones.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                Not because they want to. But because money leaks out in tiny places that are hard to see. A discount here. A return there. Shipping costs that slowly creep up. Before you know it, you're making less money than you should.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                This guide shows you how AI finds those leaks and plugs them. No jargon. No technical stuff. Just simple ways to keep more of the money you earn.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Is a Business Margin?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Think of it like this: You sell something for ₹100. It costs you ₹70 to make and deliver. You keep ₹30. That ₹30 is your margin.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                The bigger your margin, the more money you keep. The smaller it gets, the harder it is to stay in business.
                            </p>
                            <div className="bg-dots-strategy/5 border-l-4 border-dots-strategy p-6 rounded-r-xl">
                                <p className="text-body-md text-slate-700 mb-0">
                                    <strong className="text-ink">Simple formula:</strong> Margin = What you sell for - What it costs you
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 2 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Where Do Most Businesses Lose Money?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Here are the five biggest places money disappears. Most business owners don't even notice until it's too late.
                            </p>

                            <div className="space-y-6">
                                {/* Leak 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-data/10 p-3 rounded-full shrink-0">
                                            <AlertCircle className="w-6 h-6 text-dots-data" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                1. Too Many Discounts
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                You give 10% off to close a sale. Then 15% for another customer. Before you know it, half your sales are discounted. Those discounts eat your margin fast.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Leak 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-ops/10 p-3 rounded-full shrink-0">
                                            <AlertCircle className="w-6 h-6 text-dots-ops" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                2. Returns and Refunds
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                Someone buys a product, uses it, then returns it. You lose the sale. You lose the shipping cost. Sometimes you can't even sell it again. Returns kill margins.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Leak 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-tech/10 p-3 rounded-full shrink-0">
                                            <AlertCircle className="w-6 h-6 text-dots-tech" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                3. Shipping Costs Creeping Up
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                Shipping used to cost ₹50. Now it's ₹80. But you're still charging customers ₹50. That extra ₹30 comes straight out of your pocket.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Leak 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-strategy/10 p-3 rounded-full shrink-0">
                                            <AlertCircle className="w-6 h-6 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                4. Operations Waste
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                Your team spends 3 hours doing something that should take 30 minutes. Or you're paying for software you don't use. Small waste adds up fast.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Leak 5 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-rose/10 p-3 rounded-full shrink-0">
                                            <AlertCircle className="w-6 h-6 text-rose" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                5. Pricing Mistakes
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                You charge ₹500 for a product. Turns out it costs you ₹480 to make and ship. You're only making ₹20. Sometimes you accidentally charge less than it costs. That's a disaster.
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
                                How AI Finds Money You're Losing
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                AI is like having a super-smart accountant who never sleeps. It looks at all your numbers. It spots patterns you can't see. Then it tells you exactly where you're losing money.
                            </p>

                            <div className="space-y-8">
                                {/* How 1 */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-data text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            It Spots Patterns You Can't See
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        AI looks at thousands of transactions. It notices that customers from City A return products 40% of the time. But customers from City B only return 5% of the time. Now you know where the problem is.
                                    </p>
                                </div>

                                {/* How 2 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border border-dots-tech/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            It Sends You Alerts in Real Time
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Instead of finding out next month that you lost money, AI tells you today. "Hey, your shipping costs just jumped 20%." Now you can fix it before it gets worse.
                                    </p>
                                </div>

                                {/* How 3 */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border border-dots-strategy/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            It Can Fix Things Automatically
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Some AI tools don't just find problems. They fix them. Like automatically adjusting prices when costs go up. Or stopping a discount code that's being abused. You don't have to do anything.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Real Examples
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Here's what happened when real Indian businesses used AI to fix their margins.
                            </p>

                            <div className="space-y-6">
                                {/* Example 1 */}
                                <div className="bg-white border-l-4 border-dots-data rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-dots-data" />
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            D2C Fashion Brand — Saved 12% on Returns
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        A clothing brand was losing ₹8 lakh every month to returns. AI found the problem: certain sizes were listed wrong. Customers ordered, got the wrong fit, and returned.
                                    </p>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        <strong className="text-ink">Result:</strong> Fixed the size guide. Returns dropped by 12%. That's ₹96,000 saved every month.
                                    </p>
                                </div>

                                {/* Example 2 */}
                                <div className="bg-white border-l-4 border-dots-ops rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-dots-ops" />
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            B2B Distributor — Found ₹3 Lakh/Month in Pricing Errors
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        A wholesale business had 5,000 products. Some were priced below cost by mistake. They didn't even know.
                                    </p>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        <strong className="text-ink">Result:</strong> AI scanned every product. Found 200 items losing money. Fixed the prices. Made an extra ₹3 lakh every month.
                                    </p>
                                </div>

                                {/* Example 3 */}
                                <div className="bg-white border-l-4 border-dots-tech rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-dots-tech" />
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            SaaS Startup — Cut Wasted Ad Spend by 30%
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        A software company was spending ₹2 lakh/month on ads. But most clicks weren't turning into customers.
                                    </p>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        <strong className="text-ink">Result:</strong> AI tracked which ads actually brought paying customers. Stopped the bad ads. Saved ₹60,000/month.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                5 Steps to Start Today
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                You don't need to be a tech expert. Here's how to start improving your margins with AI right now.
                            </p>

                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Find Your Biggest Leak
                                        </h3>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            Look at last month. Where did you lose the most money? Returns? Discounts? Shipping? Pick one problem to fix first.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Track Your Numbers
                                        </h3>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            You can't fix what you can't see. Start tracking: How much do discounts cost you each month? What's your return rate? Write it down.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Use Simple AI Tools
                                        </h3>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            You don't need fancy custom AI. Start with tools that already exist. Many e-commerce platforms have built-in AI for tracking returns and fraud. Turn them on.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        4
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Set Up Alerts
                                        </h3>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            Tell the AI: "Let me know if returns go above 15%." Or "Alert me if shipping costs jump more than 10%." Now you catch problems fast.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        5
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Measure What Changed
                                        </h3>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            After one month, check: Did your margin improve? Even a 2% improvement is huge. If you make ₹10 lakh/month, that's ₹20,000 extra in your pocket.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink font-semibold mb-0">
                                    💡 Pro Tip: Don't try to fix everything at once. Pick ONE thing. Fix it. Then move to the next.
                                </p>
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
                                        Do I need to be a tech person to use AI for margins?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Not at all. Most AI tools are designed for business owners, not programmers. If you can use Excel or Google Sheets, you can use AI margin tools. Many are point-and-click simple.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        How much does AI margin tracking cost?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        It depends. Some platforms (like Shopify or Amazon) include basic AI tools for free. Standalone tools cost ₹5,000 to ₹50,000 per month depending on your business size. Custom AI (like what we build) starts at ₹2 lakh but pays for itself in 2-3 months.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        How fast will I see results?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Some wins are instant. Like finding pricing errors or stopping fraudulent returns. Those fixes show up this month. Other wins take 2-3 months. Like reducing returns by improving product descriptions. But most businesses see improvement in the first 30 days.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        What if my business is too small for AI?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        If you're making more than ₹10 lakh per month in revenue, AI can help you. Even small improvements (like 3-5% margin boost) add up fast. A business making ₹20 lakh/month with a 5% margin improvement keeps an extra ₹1 lakh every month. That's ₹12 lakh per year.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Stop Losing Money. Start Keeping It.
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                Our AI finds exactly where your business loses money. Then it fixes it automatically. Most clients see results in the first 30 days.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/solutions">
                                    See Our AI Solutions <ArrowRight className="ml-2 w-5 h-5" />
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

export default BusinessMarginGuide;
