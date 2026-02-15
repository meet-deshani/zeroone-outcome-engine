import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ArrowRight,
    CheckCircle2,
    ArrowLeft,
    Calendar,
    Clock,
    Shield,
    Zap,
    WifiOff,
    MapPin,
    Lock,
    Mail,
    FileText,
    Languages,
    BookOpen,
    Code,
    BarChart3,
    Image,
    AlertTriangle,
    Globe,
    Database,
    Cpu,
    Smartphone,
    Sparkles,
    Terminal,
    Factory,
    Scale,
    HeartPulse,
    Landmark,
    ShieldAlert
} from "lucide-react";
import { Link } from "react-router-dom";

const OfflineAiGuide = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="Offline AI in 2026 — What Actually Works Without Internet"
                description="What AI actually works without internet in 2026? A practical guide to offline AI models, on-device AI, and air-gapped setups for businesses that need AI without cloud dependency."
                keywords="offline AI, AI without internet, on-device AI, local AI models, offline LLM, AI no internet required, air-gapped AI, offline artificial intelligence"
                canonical="https://zeroonedotsai.consulting/resources/offline-ai-guide"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Offline AI in 2026 — What Actually Works Without Internet",
                        "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                        "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                        "datePublished": "2026-02-16",
                        "description": "What AI actually works without internet in 2026? A practical guide to offline AI models, on-device AI, and air-gapped setups for businesses that need AI without cloud dependency."
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do I need a powerful computer for offline AI?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For basic models (7-8 billion parameters), a modern laptop with 16GB RAM works. For bigger models, you need a computer with a GPU (graphics card). Budget: ₹50,000 for basic, ₹3-5 lakh for powerful."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is offline AI as good as ChatGPT?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Smaller offline models are about 70-80% as good. Larger offline models (70B+) are very close. For most business tasks, offline AI is good enough. And it's getting better every month."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can offline AI learn from my company's documents?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! You can use a technique called RAG (Retrieval Augmented Generation). You feed it your documents, and it answers questions based on them. All offline. All private."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does ZeroOne offer offline AI solutions?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our AI Without Internet product sets up offline AI for businesses. We pick the right models, install them, connect your documents, and train your team."
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
                                <Badge className="bg-dots-tech/10 text-dots-tech border-dots-tech/20">Offline AI</Badge>
                                <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20">No Internet</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">Guide</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                Offline AI in 2026 — What Actually Works Without Internet
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
                                Most people think AI needs the internet. That was true in 2023. Not anymore.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                In 2026, you can run powerful AI models on a regular computer. No WiFi. No cloud servers. Just your machine and the AI, working together.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                This guide shows you exactly what offline AI can do today, which models work best, and how to set it up yourself in under 10 minutes.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1: Can AI Really Work Without Internet? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Can AI Really Work Without Internet?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Yes. 100%.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                When you use ChatGPT or Google Gemini, your question goes to a server far away. That server runs the AI. It sends the answer back to you. That's why you need internet.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                But here's what changed: the AI models themselves got smaller. Much smaller. Small enough to fit on your laptop. Small enough to fit on your phone.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                When the AI runs on your own machine, it doesn't need the internet at all. Your data stays on your device. Your questions never leave your building. Everything happens locally.
                            </p>

                            <div className="bg-gradient-to-br from-dots-tech/10 to-transparent border border-dots-tech/30 p-8 rounded-2xl">
                                <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                    Think of It Like This:
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="text-2xl">
                                            <Globe className="w-7 h-7 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">Cloud AI:</strong> Like ordering food from a restaurant. You send your order, wait for it to arrive. Needs a delivery route (internet).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-2xl">
                                            <Cpu className="w-7 h-7 text-dots-tech" />
                                        </div>
                                        <div>
                                            <p className="text-body-md text-slate-700 mb-0">
                                                <strong className="text-ink">Offline AI:</strong> Like cooking at home. Everything you need is already in your kitchen. No delivery needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 2: Why Would You Want Offline AI? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Why Would You Want Offline AI?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Five good reasons businesses are choosing offline AI over cloud AI.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Reason 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-data/10 p-4 rounded-xl w-fit mb-4">
                                        <Shield className="w-8 h-8 text-dots-data" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        1. Privacy
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Your data never leaves your device. No third-party servers see your files. What you ask the AI stays between you and your computer.
                                    </p>
                                </div>

                                {/* Reason 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-ops/10 p-4 rounded-xl w-fit mb-4">
                                        <Zap className="w-8 h-8 text-dots-ops" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        2. Speed
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        No waiting for servers to respond. No "high traffic" delays. The AI runs right on your machine, so answers come instantly.
                                    </p>
                                </div>

                                {/* Reason 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-tech/10 p-4 rounded-xl w-fit mb-4">
                                        <WifiOff className="w-8 h-8 text-dots-tech" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        3. Reliability
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Internet goes down? No problem. Offline AI keeps working. No outages. No server crashes. It works when you need it.
                                    </p>
                                </div>

                                {/* Reason 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-strategy/10 p-4 rounded-xl w-fit mb-4">
                                        <MapPin className="w-8 h-8 text-dots-strategy" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        4. Remote Locations
                                    </h3>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Factories, ships, rural offices, construction sites. Many places don't have reliable internet. Offline AI works everywhere.
                                    </p>
                                </div>

                                {/* Reason 5 */}
                                <div className="md:col-span-2 bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-rose/10 p-4 rounded-xl shrink-0">
                                            <Lock className="w-8 h-8 text-rose" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                5. Security (Air-Gapped Systems)
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                Some businesses handle classified or highly sensitive data. They use computers that are never connected to the internet. These are called "air-gapped" systems. Offline AI is the only way to bring AI to these environments.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3: What Offline AI Can Do Today */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Offline AI Can Do Today
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Offline AI in 2026 is surprisingly capable. Here's what you can do without any internet connection.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Capability 1 */}
                                <div className="bg-gradient-to-br from-dots-data/10 to-transparent border border-dots-data/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-dots-data shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Write Emails & Documents</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Draft emails, write reports, create proposals. The AI writes clearly and quickly.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 2 */}
                                <div className="bg-gradient-to-br from-dots-ops/10 to-transparent border border-dots-ops/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <FileText className="w-6 h-6 text-dots-ops shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Answer Questions About Your Files</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Feed it your PDFs, docs, and spreadsheets. Ask anything. Get answers from your own data.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 3 */}
                                <div className="bg-gradient-to-br from-dots-tech/10 to-transparent border border-dots-tech/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <Languages className="w-6 h-6 text-dots-tech shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Translate Between Languages</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Translate documents, messages, and text between dozens of languages. All on your machine.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 4 */}
                                <div className="bg-gradient-to-br from-dots-strategy/10 to-transparent border border-dots-strategy/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <BookOpen className="w-6 h-6 text-dots-strategy shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Summarize Long Reports</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Give it a 50-page report. Get a 1-page summary in seconds. Saves hours of reading.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 5 */}
                                <div className="bg-gradient-to-br from-rose/10 to-transparent border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <Code className="w-6 h-6 text-rose shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Generate Code</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Write Python, JavaScript, SQL, and more. Great for developers who work in secure environments.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 6 */}
                                <div className="bg-gradient-to-br from-lemon/20 to-transparent border border-lemon/40 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <BarChart3 className="w-6 h-6 text-ink shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Analyze Data in Spreadsheets</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Point it at your CSV or Excel files. Find patterns, outliers, and trends without uploading anything.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability 7 */}
                                <div className="md:col-span-2 bg-gradient-to-br from-dots-data/5 to-dots-tech/5 border border-dots-data/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <Image className="w-6 h-6 text-dots-data shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Basic Image Understanding</h3>
                                            <p className="text-body-sm text-slate-700 mb-0">Some offline models can describe photos, read text from images, and classify objects. Not as advanced as cloud models, but useful for many tasks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4: What Offline AI Can NOT Do (Yet) */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Offline AI Can NOT Do (Yet)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Let's be honest. Offline AI is powerful, but it has limits. Here's what you should know before you start.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Can't Browse the Web</h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                Obviously. No internet means no web searches, no live stock prices, no checking weather. The AI only knows what's on your machine.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">No Real-Time Data</h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                It can't pull live information. No current news, no live exchange rates. It works with the knowledge it was trained on and the files you give it.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Smaller Models Are Less Smart</h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                A 7B model on your laptop won't match the best cloud models. It's like comparing a scooter to a car. The scooter gets you there, but the car is faster and smoother. For most tasks though, the scooter is enough.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">Needs Decent Hardware for Speed</h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                On an old computer with 8GB RAM, responses will be slow. You need at least 16GB RAM for a comfortable experience. For big models, you need a GPU.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-rose/20 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="w-6 h-6 text-rose shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">No Image Generation on Basic Hardware</h3>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                Creating images with AI needs a powerful GPU. A basic laptop can't do it. You'll need dedicated hardware if you want offline image generation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5: Best Offline AI Models in 2026 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Best Offline AI Models in 2026
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                These are the top open-source models you can download and run on your own hardware. All free. All offline.
                            </p>

                            <div className="space-y-6">
                                {/* Model 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className="bg-dots-data/10 p-4 rounded-xl shrink-0 w-fit">
                                            <Database className="w-8 h-8 text-dots-data" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                                <h3 className="font-heading text-display-sm font-bold text-ink">Llama 3.1 (8B)</h3>
                                                <Badge className="bg-dots-ops/20 text-dots-ops border-0">Best for Laptops</Badge>
                                            </div>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Made by Meta. The most popular offline model. Runs smoothly on a regular laptop with 16GB RAM. Great for writing, answering questions, and general tasks.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-body-sm text-slate-700">
                                                <span><strong className="text-ink">Size:</strong> ~4.7 GB</span>
                                                <span><strong className="text-ink">RAM needed:</strong> 16 GB</span>
                                                <span><strong className="text-ink">Best for:</strong> Writing, Q&A</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className="bg-dots-strategy/10 p-4 rounded-xl shrink-0 w-fit">
                                            <Sparkles className="w-8 h-8 text-dots-strategy" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                                <h3 className="font-heading text-display-sm font-bold text-ink">Llama 3.1 (70B)</h3>
                                                <Badge className="bg-dots-strategy/20 text-dots-strategy border-0">Most Powerful</Badge>
                                            </div>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                The big version. Nearly as smart as the best cloud models. Needs a GPU server, but delivers amazing results for coding, analysis, and complex reasoning.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-body-sm text-slate-700">
                                                <span><strong className="text-ink">Size:</strong> ~40 GB</span>
                                                <span><strong className="text-ink">RAM needed:</strong> 48+ GB + GPU</span>
                                                <span><strong className="text-ink">Best for:</strong> Everything</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className="bg-dots-tech/10 p-4 rounded-xl shrink-0 w-fit">
                                            <Code className="w-8 h-8 text-dots-tech" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                                <h3 className="font-heading text-display-sm font-bold text-ink">Mistral 7B</h3>
                                                <Badge className="bg-dots-tech/20 text-dots-tech border-0">Best for Coding</Badge>
                                            </div>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Made by Mistral AI (France). Fast and efficient. Especially good at writing code and technical tasks. Runs well on modest hardware.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-body-sm text-slate-700">
                                                <span><strong className="text-ink">Size:</strong> ~4 GB</span>
                                                <span><strong className="text-ink">RAM needed:</strong> 16 GB</span>
                                                <span><strong className="text-ink">Best for:</strong> Coding, technical writing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model 4 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className="bg-rose/10 p-4 rounded-xl shrink-0 w-fit">
                                            <Smartphone className="w-8 h-8 text-rose" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                                <h3 className="font-heading text-display-sm font-bold text-ink">Phi-3 Mini</h3>
                                                <Badge className="bg-rose/20 text-rose border-0">Smallest</Badge>
                                            </div>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Made by Microsoft. Incredibly tiny but surprisingly smart. Can even run on phones and tablets. Perfect when hardware is limited.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-body-sm text-slate-700">
                                                <span><strong className="text-ink">Size:</strong> ~2.3 GB</span>
                                                <span><strong className="text-ink">RAM needed:</strong> 8 GB</span>
                                                <span><strong className="text-ink">Best for:</strong> Mobile, lightweight tasks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model 5 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className="bg-lemon/30 p-4 rounded-xl shrink-0 w-fit">
                                            <Sparkles className="w-8 h-8 text-ink" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                                <h3 className="font-heading text-display-sm font-bold text-ink">Gemma 2 (9B)</h3>
                                                <Badge className="bg-lemon/40 text-ink border-0">Best Quality</Badge>
                                            </div>
                                            <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                                Made by Google. Open-source and high quality. Punches above its weight in benchmarks. Great all-rounder for businesses that want one model for everything.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-body-sm text-slate-700">
                                                <span><strong className="text-ink">Size:</strong> ~5.4 GB</span>
                                                <span><strong className="text-ink">RAM needed:</strong> 16 GB</span>
                                                <span><strong className="text-ink">Best for:</strong> General use, quality output</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 6: How to Set Up Offline AI */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                How to Set Up Offline AI on Your Computer
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                This is the easiest way to get started. It works on Mac, Windows, and Linux. You need about 10 minutes and a decent internet connection (just for the initial download).
                            </p>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border-l-4 border-dots-ops rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-ops text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Download Ollama
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        Ollama is a free tool that makes running AI models easy. Go to <strong className="text-ink">ollama.com</strong> and download it. Install it like any other app.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Works on:</strong> Mac, Windows, and Linux. Free. No account needed.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border-l-4 border-dots-tech rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Download a Model
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        Open your terminal (or command prompt on Windows). Type this command:
                                    </p>
                                    <div className="bg-ink text-cream-50 rounded-xl p-4 font-mono text-body-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-dots-ops" />
                                            <span>ollama pull llama3.1</span>
                                        </div>
                                    </div>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        This downloads the Llama 3.1 model (~4.7 GB). It takes a few minutes depending on your internet speed. After this, you won't need internet again.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border-l-4 border-dots-strategy rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Start Chatting
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        Type this command in your terminal:
                                    </p>
                                    <div className="bg-ink text-cream-50 rounded-xl p-4 font-mono text-body-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-dots-ops" />
                                            <span>ollama run llama3.1</span>
                                        </div>
                                    </div>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        That's it. You now have a powerful AI running on your computer. Type your question and press Enter. No internet needed.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border-l-4 border-dots-data rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-data text-white font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                                            4
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Disconnect & Test
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        Turn off your WiFi. Try asking the AI a question. It still works. You now have a fully offline AI assistant.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>You can set this up in under 10 minutes.</strong> The hardest part is waiting for the model to download. After that, everything runs locally.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 7: Offline AI for Business — Real Use Cases */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Offline AI for Business — Real Use Cases
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Real businesses are already using offline AI. Here are five examples from different industries.
                            </p>

                            <div className="space-y-6">
                                {/* Use Case 1 */}
                                <div className="bg-white border-l-4 border-dots-tech rounded-r-2xl p-8 border border-sand-200">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-tech/10 p-3 rounded-xl shrink-0">
                                            <Factory className="w-7 h-7 text-dots-tech" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                Factory Floor Quality Check
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                                <strong className="text-ink">Problem:</strong> No internet on the production floor. Quality inspectors write reports by hand.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                <strong className="text-ink">Solution:</strong> Offline AI on a tablet. Workers describe the issue by voice. AI writes the quality report instantly. No internet needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Case 2 */}
                                <div className="bg-white border-l-4 border-dots-data rounded-r-2xl p-8 border border-sand-200">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-data/10 p-3 rounded-xl shrink-0">
                                            <Scale className="w-7 h-7 text-dots-data" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                Law Firm Document Review
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                                <strong className="text-ink">Problem:</strong> Client documents are confidential. Can't upload to ChatGPT or any cloud service.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                <strong className="text-ink">Solution:</strong> Offline AI reviews contracts, highlights risks, and summarizes key points. Everything stays on the firm's computers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Case 3 */}
                                <div className="bg-white border-l-4 border-dots-ops rounded-r-2xl p-8 border border-sand-200">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-ops/10 p-3 rounded-xl shrink-0">
                                            <HeartPulse className="w-7 h-7 text-dots-ops" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                Hospital Patient Summaries
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                                <strong className="text-ink">Problem:</strong> Patient data is protected by law (HIPAA, DPDP Act). Can't send to external servers.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                <strong className="text-ink">Solution:</strong> Offline AI reads patient records and creates summaries for doctors. Data never leaves the hospital network.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Case 4 */}
                                <div className="bg-white border-l-4 border-dots-strategy rounded-r-2xl p-8 border border-sand-200">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-dots-strategy/10 p-3 rounded-xl shrink-0">
                                            <Landmark className="w-7 h-7 text-dots-strategy" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                Rural Bank Branches
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                                <strong className="text-ink">Problem:</strong> Internet connectivity is poor or unreliable in many rural areas.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                <strong className="text-ink">Solution:</strong> Offline AI helps bank staff process loan applications, verify documents, and answer customer queries even when the internet is down.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Case 5 */}
                                <div className="bg-white border-l-4 border-rose rounded-r-2xl p-8 border border-sand-200">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-rose/10 p-3 rounded-xl shrink-0">
                                            <ShieldAlert className="w-7 h-7 text-rose" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                                Defense & Government
                                            </h3>
                                            <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                                <strong className="text-ink">Problem:</strong> Classified networks are air-gapped. No internet by design. But analysts still need AI help.
                                            </p>
                                            <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                                <strong className="text-ink">Solution:</strong> Offline AI models deployed on secure servers inside the classified network. Analysts get AI-powered search, summarization, and translation without any external connection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl">
                                <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                    <strong className="text-ink">Want to use multiple AI models together?</strong> You can run several offline models and have them check each other's work. It's called an AI Council.
                                </p>
                                <Link to="/resources/ai-council-guide" className="text-plum font-semibold hover:underline inline-flex items-center gap-1">
                                    Learn about AI Councils <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="mt-4 p-6 bg-gradient-to-br from-dots-strategy/5 to-transparent border border-dots-strategy/20 rounded-2xl">
                                <p className="text-body-md text-slate-700 mb-2 leading-relaxed">
                                    <strong className="text-ink">Need a full AI Office setup?</strong> Offline AI is just one piece. You can build an entire AI-powered workspace.
                                </p>
                                <Link to="/resources/ai-office-setup" className="text-plum font-semibold hover:underline inline-flex items-center gap-1">
                                    Set up a full AI Office <ArrowRight className="w-4 h-4" />
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
                                        Do I need a powerful computer for offline AI?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        For basic models (7-8 billion parameters), a modern laptop with 16GB RAM works fine. For bigger models, you need a computer with a GPU (graphics card). Budget: around ₹50,000 for a basic setup, ₹3-5 lakh for a powerful one with a dedicated GPU.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Is offline AI as good as ChatGPT?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Smaller offline models are about 70-80% as capable as the best cloud models. Larger offline models (70B+ parameters) come very close. For most business tasks like writing, summarization, and data analysis, offline AI is good enough. And it's getting better every month as new models are released.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Can offline AI learn from my company's documents?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Yes! You can use a technique called RAG (Retrieval Augmented Generation). In simple terms, you feed the AI your documents, and it answers questions based on them. It doesn't memorize your files — it searches them when you ask a question. All of this happens offline. All private. Your data never leaves your machine.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        Does ZeroOne offer offline AI solutions?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Yes. Our <Link to="/private-ai/without-internet" className="text-plum font-semibold hover:underline">"AI Without Internet"</Link> product sets up offline AI for businesses. We pick the right models for your needs, install them on your hardware, connect your documents, and train your team to use it. Everything runs on your machines. No cloud dependency.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                AI That Works. Even Without WiFi.
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                We set up offline AI systems that run on your hardware. No internet dependency. No data leaks. Just AI that works when you need it.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/private-ai/without-internet">
                                    Explore Offline AI <ArrowRight className="ml-2 w-5 h-5" />
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

export default OfflineAiGuide;
