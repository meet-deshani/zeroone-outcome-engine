import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ArrowLeft, Calendar, Clock, Server, Shield, Wifi, WifiOff, IndianRupee, Terminal, MonitorSmartphone, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OnPremiseAiGuide = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="On-Premise AI — A No-Jargon Guide for Non-Technical Founders (2026)"
                description="A plain-language guide to on-premise AI for non-technical founders. What it means, what it costs, and how to deploy AI on your own servers — explained without jargon."
                keywords="on-premise AI deployment, local AI, deploy AI on server, on-premise AI guide, self-hosted AI for founders, AI deployment without cloud, on-premise machine learning, local AI deployment"
                canonical="https://zeroonedotsai.consulting/resources/on-premise-ai-guide"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "On-Premise AI — A No-Jargon Guide for Non-Technical Founders (2026)",
                        "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                        "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                        "datePublished": "2026-02-16",
                        "description": "A plain-language guide to on-premise AI for non-technical founders. What it means, what it costs, and how to deploy AI on your own servers — explained without jargon."
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How is on-premise AI different from cloud AI?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Cloud AI runs on someone else's computers (like OpenAI's servers in the USA). On-premise AI runs on YOUR computer in YOUR office. Your data stays with you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need to hire an AI engineer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For small setups, no. Modern tools like Ollama are designed for non-technical users. For bigger setups (50+ users), having someone who knows Linux is helpful. Or hire a company like ZeroOne D.O.T.S AI to manage it."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I run on-premise AI on my regular office computers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For basic models, a high-end laptop works. But for production use with multiple team members, you need a dedicated GPU server. Think of it as needing a proper oven if you want to cook for 50 people."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What's the total cost of ownership for on-premise AI?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Year 1: 5-15 lakh (hardware + setup). Year 2 onwards: 1-2 lakh/year (electricity + maintenance). Compare to cloud: 6-24 lakh per year, every year, forever."
                                }
                            }
                        ]
                    }
                ]}
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
                                <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20">On-Premise</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">Founders</Badge>
                                <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20">No Jargon</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                On-Premise AI — A No-Jargon Guide for Non-Technical Founders (2026)
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 16, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>9 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                You keep hearing "on-premise AI" and "self-hosted AI." But nobody explains what it actually means. This guide does.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                We wrote this for founders who don't have a tech background. No jargon. No assumptions. Just plain talk about running AI on your own computers.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                By the end, you'll know what hardware you need, what it costs, and exactly how to get started. If you can read a menu at a restaurant, you can understand this guide.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1: What Does "On-Premise" Even Mean? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Does "On-Premise" Even Mean?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                "On-premise" is just a fancy way of saying "in your building."
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                On-premise AI means AI that runs on computers inside your office, factory, or data center. Not on some company's computers far away.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Think of it like cooking at home vs. ordering delivery. Both give you food. But when you cook at home, you control everything. You pick the ingredients. You decide how much salt goes in. Nobody else touches your food.
                            </p>

                            <div className="bg-gradient-to-br from-dots-ops/10 to-transparent border border-dots-ops/30 p-8 rounded-2xl">
                                <h3 className="font-heading text-display-sm font-bold mb-4 text-ink">
                                    The Simple Comparison
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="bg-dots-strategy/10 p-3 rounded-xl shrink-0">
                                            <Wifi className="w-6 h-6 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">Cloud AI (like ChatGPT):</strong> You type a question. It goes to a computer in the USA. That computer thinks. The answer comes back to you. Your data travels through the internet.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-dots-ops/10 p-3 rounded-xl shrink-0">
                                            <Server className="w-6 h-6 text-dots-ops" />
                                        </div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">On-Premise AI:</strong> You type a question. The computer in YOUR office thinks. The answer appears. Your data never leaves the building.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-body-md text-slate-700 mt-6 leading-relaxed">
                                Want to see how this compares to cloud AI in detail? Read our <Link to="/resources/private-ai-vs-cloud" className="text-plum underline hover:no-underline">full comparison of private AI vs. cloud AI</Link>.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 2: Why Founders Are Going On-Premise */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Why Founders Are Going On-Premise
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Four big reasons smart founders are choosing on-premise AI.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Reason 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="bg-dots-data/10 p-4 rounded-xl w-fit mb-4">
                                        <Shield className="w-8 h-8 text-dots-data" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        You Own the AI
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        No one can take it away. No one can raise prices on you. No one can change the rules. It's yours. Like owning a car vs. renting one.
                                    </p>
                                </div>

                                {/* Reason 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="bg-dots-ops/10 p-4 rounded-xl w-fit mb-4">
                                        <Shield className="w-8 h-8 text-dots-ops" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Your Data Stays Private
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Customer info never leaves your building. No third party sees your business secrets. This matters a lot for healthcare, legal, and finance companies.
                                    </p>
                                </div>

                                {/* Reason 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="bg-dots-tech/10 p-4 rounded-xl w-fit mb-4">
                                        <IndianRupee className="w-8 h-8 text-dots-tech" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Cheaper Long-Term
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        No monthly subscription that keeps growing. You pay once for the hardware, then it's mostly free. Cloud AI bills add up fast. On-premise saves you money after 6-12 months.
                                    </p>
                                </div>

                                {/* Reason 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="bg-dots-strategy/10 p-4 rounded-xl w-fit mb-4">
                                        <WifiOff className="w-8 h-8 text-dots-strategy" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Works Without Internet
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Factories. Remote offices. Ships. Oil rigs. Anywhere with bad or no internet. Your AI keeps working because it runs locally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3: The Simple Version of How It Works */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                The Simple Version of How It Works
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Here's the whole thing, step by step. No tech degree needed.
                            </p>

                            <div className="space-y-4">
                                {/* Step 1 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-dots-data text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            You Buy a Powerful Computer
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            It's called a "server." It has a special chip called a GPU that's really good at AI math. Think of it as a super-powered desktop computer.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-dots-ops text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            You Install Free AI Software
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Tools like Ollama or vLLM. They're free and open-source. One command to install. That's it.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-dots-tech text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Your Team Connects Through the Office Network
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Anyone on your office Wi-Fi can use it. They open a browser and chat with AI. Just like ChatGPT. But it runs on your machine.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-dots-strategy text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        4
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                            Everything Stays Inside Your Network
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            No data goes to the internet. No third-party servers. Your questions, your answers, your data — all stay in your building.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>That's it.</strong> It really is that simple. The hard part used to be the software. But tools like Ollama have made it as easy as installing an app on your phone.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4: What Hardware Do You Need? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Hardware Do You Need?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Three levels. Pick the one that matches your team size and budget.
                            </p>

                            <div className="space-y-6">
                                {/* Starter */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl p-8">
                                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            Starter
                                        </h3>
                                        <Badge className="bg-dots-ops/20 text-dots-ops border-0">3-5 Lakh</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> A computer with an NVIDIA RTX 4090 GPU. This is a powerful graphics card that handles AI really well.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Good for:</strong> 5-10 users. Small teams exploring AI for the first time.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What it runs:</strong> 7-8 billion parameter models smoothly. That's enough for writing, summarizing, answering questions, and basic coding help.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Think of it as:</strong> A really smart assistant that's great at everyday office tasks.
                                    </p>
                                </div>

                                {/* Growth */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-8">
                                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            Growth
                                        </h3>
                                        <Badge className="bg-dots-data/20 text-dots-data border-0">8-15 Lakh</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> A server with an NVIDIA A100 GPU. This is the kind of hardware big AI companies use.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Good for:</strong> 20-50 users. Growing teams that use AI every day.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What it runs:</strong> 70 billion parameter models. That's serious AI. Complex analysis, detailed reports, advanced reasoning.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Think of it as:</strong> A team of expert analysts available 24/7.
                                    </p>
                                </div>

                                {/* Enterprise */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border border-dots-strategy/20 rounded-2xl p-8">
                                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            Enterprise
                                        </h3>
                                        <Badge className="bg-dots-strategy/20 text-dots-strategy border-0">25-50 Lakh</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> Multiple GPU servers working together. Maximum power.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Good for:</strong> 100+ users. Companies where AI is core to the business.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What it runs:</strong> Multiple models at the same time. Different AI for different departments. Translation, coding, analysis — all running together.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Think of it as:</strong> Your own mini AI data center.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5: Software You Need (All Free) */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Software You Need (All Free)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Here's the surprising part. The software costs nothing. Zero. Every piece of software you need is free and open-source.
                            </p>

                            <div className="bg-white border border-sand-200 rounded-2xl p-8">
                                <div className="space-y-5">
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-body-md text-ink font-semibold mb-1">Operating System: Ubuntu Server</p>
                                            <p className="text-body-sm text-slate-700 mb-0">Free. The most popular operating system for servers. Like Windows, but made for servers.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-body-md text-ink font-semibold mb-1">AI Runtime: Ollama or vLLM</p>
                                            <p className="text-body-sm text-slate-700 mb-0">Free. This is the engine that runs AI models. Ollama is the easiest to use. One command to install.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-body-md text-ink font-semibold mb-1">Web Interface: Open WebUI</p>
                                            <p className="text-body-sm text-slate-700 mb-0">Free. Gives your team a nice chat screen. Looks just like ChatGPT. Anyone can use it.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-body-md text-ink font-semibold mb-1">Model Files: Llama, Mistral, Gemma</p>
                                            <p className="text-body-sm text-slate-700 mb-0">Free. These are the actual AI brains. Made by Meta, Mistral, and Google. All open-source and free to use for business.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-body-md text-ink font-semibold mb-1">Monitoring: Grafana</p>
                                            <p className="text-body-sm text-slate-700 mb-0">Free. Shows you dashboards of how your AI is doing. How many people are using it. How fast it's responding.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-sand-200">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-dots-ops/10 px-4 py-2 rounded-full">
                                            <span className="font-mono font-bold text-dots-ops text-lg">Total Software Cost: ₹0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 6: Step-by-Step: Your First On-Premise AI */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Step-by-Step: Your First On-Premise AI
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Six steps. That's all it takes. Most of this can be done in a single day.
                            </p>

                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border-l-4 border-dots-data rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-data text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Buy a GPU Computer
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Order a computer with an NVIDIA GPU. For starters, an RTX 4090 is perfect. You can buy one from any IT hardware vendor in India. Tell them you need it for "AI inference."
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border-l-4 border-dots-ops rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-ops text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Install Ubuntu Server
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Your IT person can do this. Or we can do it for you. It takes about 30 minutes. Ubuntu is the most popular operating system for AI servers.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border-l-4 border-dots-tech rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Install Ollama
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        One single command. Copy and paste this into the terminal:
                                    </p>
                                    <div className="bg-ink text-cream-50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <code>curl -fsSL https://ollama.ai/install.sh | sh</code>
                                    </div>
                                    <p className="text-body-sm text-slate-700 mt-3 mb-0">
                                        That's it. Ollama is now installed. Took about 30 seconds.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border-l-4 border-dots-strategy rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            4
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Download an AI Model
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        Another single command:
                                    </p>
                                    <div className="bg-ink text-cream-50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <code>ollama pull llama3.1</code>
                                    </div>
                                    <p className="text-body-sm text-slate-700 mt-3 mb-0">
                                        This downloads Meta's Llama 3.1 model. It's free. Takes a few minutes depending on your internet speed. Now your server has AI.
                                    </p>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-gradient-to-br from-rose/5 to-transparent border-l-4 border-rose rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-rose text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            5
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Install Open WebUI
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        This gives your team a beautiful chat interface. It looks just like ChatGPT. Your team opens a browser, types a URL, and starts chatting with AI. No training needed.
                                    </p>
                                </div>

                                {/* Step 6 */}
                                <div className="bg-gradient-to-br from-lemon/10 to-transparent border-l-4 border-lemon rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            6
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Share the Link With Your Team
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Send the URL to your team. They open it in their browser. They start using AI. Done. You now have your own private AI that runs on your own servers.
                                    </p>
                                </div>
                            </div>

                            <p className="text-body-md text-slate-700 mt-8 leading-relaxed">
                                Want a full walkthrough with screenshots? Check our <Link to="/resources/ai-office-setup" className="text-plum underline hover:no-underline">complete AI office setup guide</Link>.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 7: Common Fears (And Why They're Wrong) */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Common Fears (And Why They're Wrong)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Every founder we talk to has the same worries. Here's why you can relax.
                            </p>

                            <div className="space-y-6">
                                {/* Fear 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-tech/10 p-4 rounded-xl shrink-0">
                                            <Terminal className="w-8 h-8 text-dots-tech" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                "It's Too Technical"
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                It used to be. Not anymore. Tools like Ollama are made for normal people. Installing AI on your server is now as easy as installing WhatsApp on your phone. One command. Done.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Reality:</strong> If your IT person can install Windows, they can set this up.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Fear 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-data/10 p-4 rounded-xl shrink-0">
                                            <HelpCircle className="w-8 h-8 text-dots-data" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                "What If It Breaks?"
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                AI models are just files. Like a PDF. If something goes wrong, you download the file again. Nothing is lost. Your data is separate from the AI model.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Reality:</strong> It's much harder to break than you think. And fixing it means re-running one command.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Fear 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-ops/10 p-4 rounded-xl shrink-0">
                                            <IndianRupee className="w-8 h-8 text-dots-ops" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                "I Can't Afford It"
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Let's do the math. Cloud AI for a team of 20 costs around ₹50,000 per month. That's ₹6 lakh per year. Every year. Forever.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                A starter on-premise setup costs ₹3-5 lakh. One time. After 6 months, it's already cheaper than cloud. After 2 years, you've saved ₹7+ lakh.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Reality:</strong> On-premise is the cheaper option. You just pay more upfront.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Fear 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-strategy/10 p-4 rounded-xl shrink-0">
                                            <MonitorSmartphone className="w-8 h-8 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                "My Team Won't Use It"
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                The interface looks exactly like ChatGPT. There's a text box. You type a question. You get an answer. That's it.
                                            </p>
                                            <p className="text-body-sm text-slate-700 mb-0">
                                                <strong className="text-ink">Reality:</strong> If your team can use WhatsApp, they can use this. We've never seen a team that couldn't figure it out within 5 minutes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Internal links callout */}
                    <AnimatedSection>
                        <div className="mb-16 bg-gradient-to-br from-dots-data/5 to-dots-strategy/5 border border-sand-200 rounded-2xl p-8">
                            <h3 className="font-heading text-display-sm font-bold mb-4 text-ink">
                                Keep Reading
                            </h3>
                            <div className="space-y-3">
                                <Link to="/private-ai/office" className="flex items-center gap-2 text-body-md text-plum hover:underline">
                                    <ArrowRight className="w-4 h-4" /> See our Private AI for Office product
                                </Link>
                                <Link to="/resources/ai-office-setup" className="flex items-center gap-2 text-body-md text-plum hover:underline">
                                    <ArrowRight className="w-4 h-4" /> Full AI Office setup guide
                                </Link>
                                <Link to="/resources/private-ai-vs-cloud" className="flex items-center gap-2 text-body-md text-plum hover:underline">
                                    <ArrowRight className="w-4 h-4" /> Compare private AI with cloud AI
                                </Link>
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
                                        How is on-premise AI different from cloud AI?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Cloud AI runs on someone else's computers (like OpenAI's servers in the USA). On-premise AI runs on YOUR computer in YOUR office. Your data stays with you. You don't depend on anyone else's service, pricing, or uptime.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Do I need to hire an AI engineer?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        For small setups, no. Modern tools like Ollama are designed for non-technical users. For bigger setups (50+ users), having someone who knows Linux is helpful. Or hire a company like us to manage it. We handle the technical side so you can focus on your business.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Can I run on-premise AI on my regular office computers?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        For basic models, a high-end laptop works. But for production use with multiple team members, you need a dedicated GPU server. Think of it as needing a proper oven if you want to cook for 50 people. A microwave won't cut it.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        What's the total cost of ownership for on-premise AI?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Year 1: ₹5-15 lakh (hardware + setup). Year 2 onwards: ₹1-2 lakh per year (electricity + maintenance). Compare to cloud AI: ₹6-24 lakh per year, every year, forever. On-premise breaks even in 6-12 months and saves you money every year after that.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Your AI. Your Servers. Your Rules.
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                We help non-technical founders deploy AI on their own servers. From hardware selection to team training — we handle everything.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/private-ai/office">
                                    Get Started with On-Premise AI <ArrowRight className="ml-2 w-5 h-5" />
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

export default OnPremiseAiGuide;
