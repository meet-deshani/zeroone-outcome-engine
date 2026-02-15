import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ArrowLeft, Calendar, Clock, Server, Shield, Zap, AlertCircle, Monitor, Cpu, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const AiOfficeSetup = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="How to Set Up an AI Office — Self-Hosted AI Guide for Business (2026)"
                description="Step-by-step guide to setting up a self-hosted AI office for your business. Learn what hardware you need, which AI models to use, and how to get your team started with private AI."
                keywords="AI office setup, self-hosted AI, private AI server, AI office for business, set up AI in office, local AI deployment, business AI infrastructure, self-hosted LLM"
                canonical="https://zeroonedotsai.consulting/resources/ai-office-setup"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "How to Set Up an AI Office — Self-Hosted AI Guide for Business (2026)",
                        "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                        "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                        "datePublished": "2026-02-16",
                        "description": "Step-by-step guide to setting up a self-hosted AI office for your business. Learn what hardware you need, which AI models to use, and how to get your team started with private AI."
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much space does an AI Office need?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not much. A single GPU server is about the size of a desktop computer. You need good ventilation and a power outlet. A small closet works fine."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can my whole team use the AI Office at the same time?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Modern AI servers handle 5-20 users at once. For bigger teams, you add more GPUs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need an IT team to maintain it?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For basic setup, no. Tools like Ollama make it simple. For larger deployments, having someone who knows Linux helps. Or we can manage it for you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What happens if the server breaks?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Same as any computer. Have backups of your AI models (they're just files). If hardware fails, buy a replacement and restore. Models don't store your data, so nothing is lost."
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
                                <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20">AI Office</Badge>
                                <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20">Self-Hosted</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">Setup Guide</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                How to Set Up an AI Office — Self-Hosted AI Guide for Business (2026)
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 16, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>11 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                What if your office had its own AI? Not rented from the internet. Not controlled by a big tech company. Your own AI, running on your own computer, inside your own building.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                That's exactly what an AI Office is. And more companies in India are building them every month.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                This guide shows you exactly how to set one up. Step by step. No tech degree needed.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1: What Is an AI Office? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Is an AI Office?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Think of it like this: Instead of renting AI from the internet (like ChatGPT or Gemini), you build your own AI room in your office. It runs on your computers. Your team can use it anytime. No internet needed. No monthly fees to big companies.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                It's like the difference between renting a house and owning one. When you rent, someone else controls it. When you own it, you make the rules.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Your AI Office is a computer (or a few computers) that sit in your building. They run smart AI models. Your team talks to them through a simple website on your office network. Just like ChatGPT, but completely private and completely yours.
                            </p>

                            <div className="bg-gradient-to-br from-dots-tech/10 to-transparent border border-dots-tech/30 p-8 rounded-2xl">
                                <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                    Here's the Simple Version:
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="text-2xl">☁️</div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">Cloud AI (like ChatGPT):</strong> Your data leaves your office. Goes to someone else's computer. You pay every month. They can change the rules anytime.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-2xl">🏢</div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">AI Office (self-hosted):</strong> Your data never leaves your building. You own everything. One-time cost. You control everything forever.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 2: Why Companies Are Building AI Offices */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Why Companies Are Building AI Offices
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Three big reasons. Every single one saves you money or protects your business.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Reason 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="bg-dots-data/10 p-4 rounded-xl w-fit mb-5">
                                        <Shield className="w-8 h-8 text-dots-data" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Data Privacy
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Everything stays inside your building. Customer data, business secrets, financial numbers. Nothing goes to the internet. Nobody can peek at your data. Total privacy.
                                    </p>
                                </div>

                                {/* Reason 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="bg-dots-ops/10 p-4 rounded-xl w-fit mb-5">
                                        <Zap className="w-8 h-8 text-dots-ops" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Speed
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        No waiting for the internet. No "server is busy, try again later." Your AI responds instantly because it's sitting right there in your office. Even if the internet goes down, your AI keeps working.
                                    </p>
                                </div>

                                {/* Reason 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="bg-dots-strategy/10 p-4 rounded-xl w-fit mb-5">
                                        <Monitor className="w-8 h-8 text-dots-strategy" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Lower Cost
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        After you buy the hardware, running costs are tiny. No monthly subscription fees that keep going up. Pay once. Use forever. Most businesses break even in 3-6 months.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3: What You Need — The Shopping List */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What You Need — The Shopping List
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Setting up an AI Office is simpler than you think. Here's everything you need.
                            </p>

                            <div className="bg-white border border-sand-200 rounded-2xl p-8 space-y-5">
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink mb-1">A Powerful Computer (GPU Server)</h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            This is the brain of your AI Office. It needs a strong graphics card (GPU). Starting price: around 3-5 lakh for a good setup. Think of it like buying a really smart office assistant — expensive upfront, but saves money every month.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink mb-1">A Small Room or Server Closet</h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            You don't need a data centre. A small closet or corner of a room works. Just make sure it has a power outlet and some space for air to flow.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink mb-1">Good Cooling</h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            AI computers run hot. Very hot. You need an air conditioner or at least good fans in the room. Without cooling, the hardware slows down or breaks. This is the most common mistake people make.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink mb-1">Network Setup</h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Connect the server to your office WiFi or LAN cable network. This lets everyone in your office use the AI from their own computer or phone. No internet needed — it all stays on your local network.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-dots-ops shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink mb-1">AI Software (Free and Open-Source)</h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Here's the best part: the AI software is free. Open-source models like Llama and Mistral cost nothing to download and use. No licence fees. No subscriptions. Free forever.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-dots-tech/5 border-l-4 border-dots-tech rounded-r-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Related:</strong> Already thinking about privacy? <Link to="/resources/on-premise-ai-guide" className="text-dots-tech underline hover:text-ink transition-colors">Read our on-premise deployment guide</Link> for a deeper look at keeping AI completely private.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4: Step-by-Step Setup Guide */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Step-by-Step Setup Guide
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Follow these 7 steps. In order. Take your time. Most businesses complete this in 1-2 weeks.
                            </p>

                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Pick a Room or Closet for Your Server
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Find a small room or closet with good ventilation. It should have a power outlet and be away from dust. You need about 1 metre of space. A server rack is nice but not required — a sturdy desk works fine for starters.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Buy or Rent GPU Hardware
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            This is the most important purchase. The GPU (graphics card) is what makes AI fast. Here's what we recommend:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="bg-cream-100 rounded-xl p-4">
                                                <p className="text-body-md text-ink font-semibold mb-1">Small team (5-10 people):</p>
                                                <p className="text-body-sm text-slate-700 mb-0">NVIDIA RTX 4090 (24GB). Handles most AI models. Around 2-3 lakh for the full computer.</p>
                                            </div>
                                            <div className="bg-cream-100 rounded-xl p-4">
                                                <p className="text-body-md text-ink font-semibold mb-1">Medium team (10-30 people):</p>
                                                <p className="text-body-sm text-slate-700 mb-0">NVIDIA A100 (80GB) or dual RTX 4090s. Runs bigger, smarter models. Around 5-10 lakh.</p>
                                            </div>
                                            <div className="bg-cream-100 rounded-xl p-4">
                                                <p className="text-body-md text-ink font-semibold mb-1">Large team (30+ people):</p>
                                                <p className="text-body-sm text-slate-700 mb-0">Multiple A100s or H100s. Enterprise-grade. 15 lakh and above. Talk to us before buying this.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Install Linux (Ubuntu Server)
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            AI runs best on Linux. Don't worry — you don't need to be a Linux expert. Ubuntu Server is free and has the biggest community. Thousands of guides online. If you can follow a recipe, you can install Ubuntu. It takes about 30 minutes.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        4
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Install AI Models (Ollama for Easy Setup)
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            Ollama is a free tool that makes installing AI models super easy. One command downloads and runs any AI model. It's like an app store for AI.
                                        </p>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            For production environments with higher traffic, use vLLM instead. It handles more users at once and is faster under heavy load. But Ollama is perfect for getting started.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        5
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Set Up a Web Interface (Open WebUI)
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Your team needs a nice, simple website to talk to the AI. Open WebUI is free and looks just like ChatGPT. It connects to Ollama automatically. Your team opens a browser, types a URL, and starts chatting with AI. No apps to install on their computers.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        6
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Connect Your Team
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            Share the URL on your office network. Anyone connected to your office WiFi or LAN can access the AI. Set up user accounts so you can see who's using it and how. No internet required. The AI lives on your network.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        7
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Train Your Team
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            This is the step most people skip. Don't skip it. Spend one hour showing your team how to use the AI. Show them how to ask good questions. Share examples of useful prompts for your industry.
                                        </p>
                                        <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                            A team that knows how to use AI well will get 10 times more value than a team that doesn't. The hardware doesn't matter if nobody knows how to talk to it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5: Best AI Models for an Office Setup */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Best AI Models for an Office Setup
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Not all AI models are the same. Here are the best ones you can run in your office. All are free and open-source.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Model 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-data/10 p-3 rounded-xl">
                                            <Cpu className="w-6 h-6 text-dots-data" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">Llama 3.1 (70B)</h3>
                                    </div>
                                    <Badge className="bg-dots-data/10 text-dots-data border-dots-data/20 mb-4">Great All-Rounder</Badge>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        Made by Meta. The best free model for most business tasks. Writing emails, answering questions, summarising documents, brainstorming ideas — it does it all.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Needs:</strong> At least 48GB GPU memory. Runs well on dual RTX 4090 or single A100.
                                    </p>
                                </div>

                                {/* Model 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-ops/10 p-3 rounded-xl">
                                            <Cpu className="w-6 h-6 text-dots-ops" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">Mistral Large</h3>
                                    </div>
                                    <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20 mb-4">Business Writing</Badge>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        Made in France. Excellent at writing professional emails, reports, and business documents. Very good at following instructions precisely. Great for teams that write a lot.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Needs:</strong> 48GB+ GPU memory. Similar hardware to Llama 3.1.
                                    </p>
                                </div>

                                {/* Model 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech/10 p-3 rounded-xl">
                                            <Cpu className="w-6 h-6 text-dots-tech" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">Gemma 2</h3>
                                    </div>
                                    <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20 mb-4">Coding Tasks</Badge>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        Made by Google. Very good at coding and technical tasks. If your team writes software or works with data, this is a strong choice. Surprisingly smart for its size.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Needs:</strong> 16-24GB GPU memory. Runs on a single RTX 4090.
                                    </p>
                                </div>

                                {/* Model 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy/10 p-3 rounded-xl">
                                            <Cpu className="w-6 h-6 text-dots-strategy" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">Phi-3</h3>
                                    </div>
                                    <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20 mb-4">Lightweight</Badge>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        Made by Microsoft. Small but powerful. If your budget is tight and you can't afford a big GPU, Phi-3 is your best friend. It runs on cheaper hardware and still gives solid results.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Needs:</strong> Just 8-16GB GPU memory. Runs on a basic gaming GPU.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 bg-dots-strategy/5 border-l-4 border-dots-strategy rounded-r-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Pro Tip:</strong> You can run multiple models at the same time. Use Llama for general tasks and Gemma for coding. Ollama makes switching between models easy.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 6: Common Mistakes to Avoid */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Common Mistakes to Avoid
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                We've helped many businesses set up AI Offices. These are the mistakes we see again and again.
                            </p>

                            <div className="space-y-6">
                                {/* Mistake 1 */}
                                <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertCircle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                Buying Too Little GPU Memory
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                This is the number one mistake. People buy a GPU with 8GB memory and wonder why the AI is slow and dumb. Good AI models need at least 24GB. Better models need 48GB or more. Don't cheap out on the GPU. It's the most important part.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mistake 2 */}
                                <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertCircle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                Forgetting About Cooling
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                GPUs produce a lot of heat. If the room gets too hot, the server slows down to protect itself. Or worse, it shuts off. You need an AC or a strong exhaust fan. Keep the room below 25°C. This is not optional in Indian summers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mistake 3 */}
                                <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertCircle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                Not Setting Up Backups
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                AI models are just files. If your hard drive dies and you don't have a backup, you'll need to download everything again. Keep a copy of your models on an external drive. It takes 5 minutes and can save you a full day of re-downloading.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mistake 4 */}
                                <div className="bg-rose/5 border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertCircle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                Making It Too Hard for Non-Tech Staff
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                If your team needs to open a terminal or type commands, they won't use it. Make sure you set up Open WebUI or a similar simple interface. It should be as easy as opening a website. Click, type, get answers. That's it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 7: AI Office vs Cloud AI — Running Costs */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                AI Office vs Cloud AI — Running Costs
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Let's talk money. This is the comparison most people want to see.
                            </p>

                            <div className="space-y-6">
                                {/* Cloud AI Cost */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            Cloud AI
                                        </h3>
                                        <Badge className="bg-dots-data/20 text-dots-data border-0">Ongoing Cost</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        <strong className="text-ink">Monthly cost:</strong> 50,000 to 2,00,000 per month (depending on usage and provider)
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        <strong className="text-ink">What you pay for:</strong> API calls, per-token charges, seat licences, premium features
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        <strong className="text-ink">The catch:</strong> Prices go up every year. You use more, you pay more. There's no ceiling. And your data goes to their servers.
                                    </p>
                                </div>

                                {/* AI Office Cost */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            AI Office (Self-Hosted)
                                        </h3>
                                        <Badge className="bg-dots-ops/20 text-dots-ops border-0">One-Time + Small Monthly</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        <strong className="text-ink">One-time cost:</strong> 5 to 10 lakh (hardware + setup)
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                        <strong className="text-ink">Monthly cost:</strong> 5,000 to 15,000 per month (electricity + internet + maintenance)
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        <strong className="text-ink">The win:</strong> After the initial purchase, your costs are tiny. Use it as much as you want. Unlimited users. Unlimited questions. No per-token charges.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Pro Tip:</strong> Most businesses break even in 3-6 months. If you're currently spending 1 lakh per month on cloud AI, a 5 lakh AI Office pays for itself in 5 months. After that, you're saving 80,000+ per month. Every single month. Forever.
                                </p>
                            </div>

                            <div className="mt-6 bg-dots-ops/5 border-l-4 border-dots-ops rounded-r-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Want to run AI without any internet at all?</strong> <Link to="/resources/offline-ai-guide" className="text-dots-ops underline hover:text-ink transition-colors">Learn about running AI completely offline</Link> — perfect for secure environments.
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
                                        How much space does an AI Office need?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Not much. A single GPU server is about the size of a desktop computer. You need good ventilation and a power outlet. A small closet works fine. You don't need a dedicated server room unless you're running multiple servers for a large team.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Can my whole team use the AI Office at the same time?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Yes. Modern AI servers handle 5-20 users at once depending on the hardware. For bigger teams, you add more GPUs. It works just like a shared printer — everyone connects, everyone uses it, and the server handles the queue.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Do I need an IT team to maintain it?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        For basic setup, no. Tools like Ollama make it very simple. For larger deployments with multiple GPUs, having someone who knows Linux helps. Or you can hire us to manage it for you. We offer ongoing support plans so you don't have to worry about the technical side.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        What happens if the server breaks?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Same as any computer. Have backups of your AI models (they're just files you can copy). If hardware fails, buy a replacement and restore from backup. The good news is that AI models don't store your conversation data by default, so nothing personal is lost. Most hardware issues can be fixed in 1-2 days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Need Help Setting Up Your AI Office?
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                We design and build AI Offices for Indian businesses. From hardware selection to team training. Your AI, your office, your rules.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/private-ai/office">
                                    Explore AI Office <ArrowRight className="ml-2 w-5 h-5" />
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

export default AiOfficeSetup;
