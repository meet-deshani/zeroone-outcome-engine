import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ArrowLeft, Calendar, Clock, Shield, Server, AlertTriangle, Building2, Heart, Landmark, GraduationCap, ShoppingCart, Scale, IndianRupee, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateAiIndia = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="Private AI for Indian Businesses — DPDP Act Compliance Guide (2026)"
                description="How Indian businesses can use Private AI to stay compliant with the DPDP Act. A plain-language guide to data sovereignty, self-hosted AI, and keeping customer data safe in India."
                keywords="private AI India, DPDP Act AI, data sovereignty India, private AI deployment India, AI data privacy India, self-hosted AI India, DPDP compliance AI, Indian businesses AI privacy"
                canonical="https://zeroonedotsai.consulting/resources/private-ai-india"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Private AI for Indian Businesses — DPDP Act Compliance Guide (2026)",
                        "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                        "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                        "datePublished": "2026-02-16",
                        "description": "How Indian businesses can use Private AI to stay compliant with the DPDP Act. A plain-language guide to data sovereignty, self-hosted AI, and keeping customer data safe in India."
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is Private AI mandatory under the DPDP Act?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not directly. But if you use AI that sends personal data to servers outside India without consent, you're at risk. Private AI is the safest way to comply."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I use ChatGPT if I'm in India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, for general questions. But don't put customer names, phone numbers, Aadhaar numbers, or any personal data into it. That data goes to servers in the USA."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does Private AI cost for a small Indian business?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Starting setup: ₹3-5 lakh for hardware + setup. Monthly running cost: ₹15,000-30,000. Compare that to the risk of a ₹250 crore fine."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does ZeroOne help with DPDP-compliant AI setup?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We set up Private AI that runs entirely in India — on your servers or Indian data centers. Your data never crosses borders."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What AI models work well for Indian languages?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Models like IndicBERT, Llama with Indian language fine-tuning, and Mistral support Hindi, Tamil, Telugu, and other Indian languages well."
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
                                <Badge className="bg-dots-data/10 text-dots-data border-dots-data/20">Private AI</Badge>
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">India</Badge>
                                <Badge className="bg-dots-ops/10 text-dots-ops border-dots-ops/20">Compliance</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                Private AI for Indian Businesses — DPDP Act Compliance Guide (2026)
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 16, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>12 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                India's new data protection law is here. If your business uses AI, you need to know what it means for you.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                This guide explains Private AI in plain language. No legal jargon. No tech buzzwords. Just what you need to know to keep your customer data safe and stay on the right side of the law.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                By the end, you'll know exactly what Private AI is, why it matters for Indian businesses, and how to set it up.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1: What Is Private AI? */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Is Private AI?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Private AI is AI that runs on YOUR computers. Not on someone else's cloud. Not on servers in America or Europe. Your servers. Your building. Your country.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                When you use ChatGPT, your data travels across the ocean to a server in the USA. When you use Private AI, your data stays right where you are. Nobody else can see it.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Think of it like this: Using cloud AI is like going to a shared hospital where everyone's medical records are in one big room. Using Private AI is like having your own doctor who keeps your records in a locked cabinet that only you have the key to.
                            </p>

                            <div className="bg-gradient-to-br from-dots-data/10 to-transparent border border-dots-data/30 p-8 rounded-2xl">
                                <h3 className="font-heading text-display-sm font-bold mb-4 text-ink">
                                    Private AI Means:
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                        <span className="text-body-md text-slate-700">The AI software runs on servers you own or rent in India</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                        <span className="text-body-md text-slate-700">Your customer data never leaves your building or your Indian data center</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                        <span className="text-body-md text-slate-700">No third-party company can read, train on, or sell your data</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                        <span className="text-body-md text-slate-700">You have full control over who can access the AI and the data it uses</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-body-md text-slate-700 mt-6 leading-relaxed">
                                Want a deeper look? Read our <Link to="/private-ai" className="text-dots-data underline hover:text-plum transition-colors">full Private AI guide</Link> to understand the technology behind it.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 2: Why Indian Businesses Need Private AI Right Now */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Why Indian Businesses Need Private AI Right Now
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                India's Digital Personal Data Protection Act (DPDP Act) of 2023 is now being enforced. This is a big deal. It changes how every business in India handles customer data.
                            </p>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                If you send customer data to foreign servers without following the rules, you could face massive fines. Up to <strong className="text-ink">₹250 crore</strong> per violation. That's not a typo. Two hundred and fifty crore rupees.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-tech/10 p-3 rounded-xl w-fit mb-4">
                                        <AlertTriangle className="w-7 h-7 text-dots-tech" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Your Data Goes Abroad
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Every time you paste customer info into ChatGPT or Google's AI tools, that data flies to servers in the USA or Europe. Under the DPDP Act, you may need explicit consent for this.
                                    </p>
                                </div>

                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-data/10 p-3 rounded-xl w-fit mb-4">
                                        <Shield className="w-7 h-7 text-dots-data" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        You Lose Control
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Cloud AI providers can use your data to train their models. That means your customer information could help a competitor's AI get smarter. You don't want that.
                                    </p>
                                </div>

                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-rose/10 p-3 rounded-xl w-fit mb-4">
                                        <IndianRupee className="w-7 h-7 text-rose" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Fines Are Massive
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        The DPDP Act allows fines up to ₹250 crore for serious violations. Even smaller penalties can run into crores. This is not something to ignore.
                                    </p>
                                </div>

                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-strategy/10 p-3 rounded-xl w-fit mb-4">
                                        <Globe className="w-7 h-7 text-dots-strategy" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Customers Care Now
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Indian consumers are becoming more aware of data privacy. Businesses that protect customer data build stronger trust. Those that don't lose customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3: What the DPDP Act Actually Says */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What the DPDP Act Actually Says (In Simple Words)
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                The DPDP Act is a 30-page legal document. We've read it so you don't have to. Here are the rules that matter most for businesses using AI.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-dots-data/5 border-l-4 border-dots-data p-6 rounded-r-xl">
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Rule 1: Tell People What You Do With Their Data
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Before you collect anyone's data, you must clearly explain what you'll use it for. If you feed customer data into an AI tool, you need to tell them. In clear, simple language. Not buried in page 47 of your terms and conditions.
                                    </p>
                                </div>

                                <div className="bg-dots-ops/5 border-l-4 border-dots-ops p-6 rounded-r-xl">
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Rule 2: Only Use Data for the Reason You Collected It
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        If someone gave you their phone number to track a delivery, you can't use it to train an AI marketing tool. Data can only be used for the purpose it was collected. This is a big one. Many businesses break this rule without realizing it.
                                    </p>
                                </div>

                                <div className="bg-dots-tech/5 border-l-4 border-dots-tech p-6 rounded-r-xl">
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Rule 3: Delete Data When You Don't Need It
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        You can't hoard customer data forever. Once the purpose is done, delete it. If a customer cancels their account, their data should go too. AI systems that train on old customer data could be a problem here.
                                    </p>
                                </div>

                                <div className="bg-dots-strategy/5 border-l-4 border-dots-strategy p-6 rounded-r-xl">
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Rule 4: Get Permission Before Sending Data Outside India
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        The government can restrict data transfers to certain countries. If you use cloud AI hosted in the US or EU, you may need special consent. With Private AI running in India, this rule doesn't apply to you. Your data stays home.
                                    </p>
                                </div>

                                <div className="bg-rose/5 border-l-4 border-rose p-6 rounded-r-xl">
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Rule 5: Children's Data Has Extra Protections
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        If your business deals with data from anyone under 18, you need verifiable parental consent. You cannot track or target children with AI. Ed-tech companies and gaming companies: pay close attention to this one.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4: Cloud AI vs Private AI */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Cloud AI vs Private AI — What Happens to Your Data
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                This is the core question. When you use AI, where does your data actually go? Here's a clear comparison. Check our <Link to="/resources/private-ai-vs-cloud" className="text-dots-data underline hover:text-plum transition-colors">full Private AI vs Cloud comparison</Link> for more details.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Cloud AI Card */}
                                <div className="bg-white border-2 border-dots-tech/30 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-dots-tech/10 p-3 rounded-xl">
                                            <Globe className="w-7 h-7 text-dots-tech" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Cloud AI (ChatGPT, Google AI)
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">Your data travels to servers in the USA or Europe</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">The AI company may use your data to train their models</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">You don't control where the data is stored or who accesses it</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">Cross-border data transfer rules under DPDP Act may apply</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-dots-tech flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">If the service goes down, you lose access to AI completely</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Private AI Card */}
                                <div className="bg-white border-2 border-dots-data/30 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-dots-data/10 p-3 rounded-xl">
                                            <Lock className="w-7 h-7 text-dots-data" />
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Private AI (Self-Hosted)
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">Data stays on your servers in India. Never leaves the country.</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">Nobody else can train on your data or even see it</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">You control every aspect: who accesses what and when</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">DPDP cross-border rules don't apply because data stays in India</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                                            <span className="text-body-md text-slate-700">Works even without internet. Your AI never goes offline.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>The bottom line:</strong> With cloud AI, you trust a foreign company with your data. With Private AI, you keep full control. For Indian businesses handling customer data, Private AI is the safer choice.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5: How to Set Up Private AI in India */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                How to Set Up Private AI in India
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Setting up Private AI isn't as hard as it sounds. Here are the 5 steps to get it running. For a detailed technical walkthrough, see our <Link to="/resources/on-premise-ai-guide" className="text-dots-data underline hover:text-plum transition-colors">on-premise AI deployment guide</Link>.
                            </p>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Decide What You Need AI For
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            Don't build AI for everything. Start with one clear use case. What's the biggest problem AI can solve for your business?
                                        </p>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            Common starting points: customer support chatbot, document analysis, internal search, data classification, or fraud detection.
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
                                            Pick an Indian Data Center or Use Your Own Servers
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            You have two options. Buy your own server hardware (₹2-10 lakh one-time) and keep it in your office. Or rent space in an Indian data center from AWS Mumbai, Azure India, or Indian providers like Yotta and CtrlS.
                                        </p>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            Both options keep your data in India. The cloud option costs more monthly but has zero maintenance. The on-premise option costs more upfront but is cheaper long-term.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="bg-white border border-sand-200 rounded-2xl p-6 flex-1">
                                        <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                            Choose Open-Source AI Models
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            You don't need to build AI from scratch. Free, powerful AI models are available for anyone to download and run. These include Llama (by Meta), Mistral, Phi (by Microsoft), and IndicBERT (for Indian languages).
                                        </p>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            These models can do everything from answering questions to writing reports to analyzing documents. And because they're open-source, you own them completely. No subscription fees. No data sharing.
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
                                            Set Up Data Access Rules
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            Who on your team can use the AI? What data can it access? These rules matter. Not everyone should see everything.
                                        </p>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            Set up role-based access. Your support team sees customer queries. Your finance team sees financial data. Nobody gets access to data they don't need. This is good practice and DPDP-compliant.
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
                                            Document Everything for DPDP Compliance
                                        </h3>
                                        <p className="text-body-md text-slate-700 mb-3 leading-relaxed">
                                            Write down what data your AI uses, why it uses it, and how long you keep it. Create a simple data privacy notice for your customers. Keep records of consent.
                                        </p>
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            If the Data Protection Board ever asks, you want to show a clear paper trail. This isn't just good compliance. It's good business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-body-md text-slate-700 mt-8 leading-relaxed">
                                Want help setting up your own AI council to oversee all of this? Read our guide on how to <Link to="/resources/ai-council-guide" className="text-dots-data underline hover:text-plum transition-colors">build an AI Council with private models</Link>.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 6: Industries That Need Private AI Most */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Industries That Need Private AI Most
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Some industries handle more sensitive data than others. If you're in any of these fields, Private AI isn't optional. It's essential.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Healthcare */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-data/10 p-3 rounded-xl w-fit mb-4">
                                        <Heart className="w-7 h-7 text-dots-data" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Healthcare
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Patient records, medical histories, test results. This is the most sensitive data there is. Hospitals and clinics must keep it within Indian borders. AI that analyzes patient data must run on private servers.
                                    </p>
                                </div>

                                {/* Banking */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-ops/10 p-3 rounded-xl w-fit mb-4">
                                        <Landmark className="w-7 h-7 text-dots-ops" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Banking & Finance
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Transaction data, account numbers, loan applications. RBI already has strict data localization rules. Banks using AI for fraud detection or customer service need Private AI. No exceptions.
                                    </p>
                                </div>

                                {/* Legal */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border border-dots-tech/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-tech/10 p-3 rounded-xl w-fit mb-4">
                                        <Scale className="w-7 h-7 text-dots-tech" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Legal
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Case files, contracts, client communications. Lawyers have a duty of confidentiality. Sending client data to a cloud AI could breach that duty. Private AI lets law firms use AI while keeping client secrets safe.
                                    </p>
                                </div>

                                {/* Education */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border border-dots-strategy/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-dots-strategy/10 p-3 rounded-xl w-fit mb-4">
                                        <GraduationCap className="w-7 h-7 text-dots-strategy" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        Education
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Student records, grades, behavior data. The DPDP Act has extra protections for children's data. Ed-tech companies and schools need to be very careful. Private AI is the safest path for student data.
                                    </p>
                                </div>

                                {/* E-commerce */}
                                <div className="bg-gradient-to-br from-rose/5 to-transparent border border-rose/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-rose/10 p-3 rounded-xl w-fit mb-4">
                                        <ShoppingCart className="w-7 h-7 text-rose" />
                                    </div>
                                    <h3 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                        E-Commerce
                                    </h3>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        Purchase history, addresses, payment info, browsing behavior. Online stores collect massive amounts of personal data. Using Private AI for product recommendations and customer support keeps all that data safe in India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 7: The Cost of Private AI in India */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                The Cost of Private AI in India
                            </h2>
                            <p className="text-body-md text-slate-700 mb-8 leading-relaxed">
                                Let's be honest about the money. Private AI costs more upfront than using ChatGPT. But when you compare it to the risk of a ₹250 crore fine, the math is simple.
                            </p>

                            <div className="space-y-6">
                                {/* Option 1: Own Hardware */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border border-dots-data/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹2 - 10 Lakh (One-Time)
                                        </h3>
                                        <Badge className="bg-dots-data/20 text-dots-data border-0">Own Hardware</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> A GPU server in your office or server room. You own it. No monthly fees for hardware. Just electricity and internet.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Includes:</strong> Server hardware with GPU (like NVIDIA A100 or RTX 4090), installation, AI model setup, and basic training for your team.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Best for:</strong> Businesses that want full control and plan to use AI heavily for years.
                                    </p>
                                </div>

                                {/* Option 2: Indian Cloud */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border border-dots-ops/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹20,000 - 1,00,000/Month
                                        </h3>
                                        <Badge className="bg-dots-ops/20 text-dots-ops border-0">Indian Cloud</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">What you get:</strong> Private AI running on cloud servers located in India. AWS Mumbai, Azure India, or Indian providers like Yotta and CtrlS.
                                    </p>
                                    <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                        <strong className="text-ink">Includes:</strong> Server rental, GPU access, storage, bandwidth, and managed services. Scale up or down as needed.
                                    </p>
                                    <p className="text-body-sm text-slate-700 mb-0">
                                        <strong className="text-ink">Best for:</strong> Businesses that want flexibility without managing hardware.
                                    </p>
                                </div>

                                {/* Comparison with fine */}
                                <div className="bg-gradient-to-br from-rose/5 to-transparent border border-rose/20 rounded-2xl p-8">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        <h3 className="font-heading text-display-lg font-bold text-ink">
                                            ₹250 Crore
                                        </h3>
                                        <Badge className="bg-rose/20 text-rose border-0">Maximum DPDP Fine</Badge>
                                    </div>
                                    <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                        <strong className="text-ink">What you lose:</strong> Everything, potentially. A serious DPDP violation can result in fines that would bankrupt most businesses. Even a "small" fine of ₹10-50 lakh hurts. The cost of Private AI is a tiny fraction of the risk.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Pro tip:</strong> Start small. You don't need to spend ₹10 lakh on day one. A basic Private AI setup for a small team can start at ₹3-5 lakh total. Test it with one use case. Scale up when you see results. The cost of doing nothing is always higher.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* FAQ Section */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Frequently Asked Questions
                            </h2>

                            <Accordion type="single" collapsible className="space-y-4">
                                <AccordionItem value="item-1" className="bg-white border border-sand-200 rounded-xl px-6">
                                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                                        Is Private AI mandatory under the DPDP Act?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                                        Not directly. The DPDP Act doesn't say "you must use Private AI." But it does say you must protect personal data, get consent for cross-border transfers, and only use data for stated purposes. If you use AI that sends personal data to servers outside India without proper consent, you're at risk. Private AI is the safest and simplest way to comply because your data never leaves India in the first place.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="bg-white border border-sand-200 rounded-xl px-6">
                                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                                        Can I use ChatGPT if I'm in India?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                                        Yes, for general questions. You can ask ChatGPT to write you a poem, explain a concept, or help you brainstorm. But don't put customer names, phone numbers, Aadhaar numbers, or any personal data into it. That data goes to servers in the USA. Once it's there, you have very little control over what happens to it. For anything involving customer or employee data, use Private AI.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="bg-white border border-sand-200 rounded-xl px-6">
                                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                                        How much does Private AI cost for a small Indian business?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                                        Starting setup: ₹3-5 lakh for hardware and setup. Monthly running cost: ₹15,000-30,000 for electricity, internet, and maintenance. If you prefer cloud, Indian cloud servers cost ₹20,000-1,00,000 per month depending on usage. Compare that to the risk of a ₹250 crore DPDP fine. The investment pays for itself by keeping your business safe and your customers' trust intact.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="bg-white border border-sand-200 rounded-xl px-6">
                                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                                        Does ZeroOne help with DPDP-compliant AI setup?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                                        Yes. We set up Private AI that runs entirely in India — on your servers or in Indian data centers. Your data never crosses borders. We handle the full setup: choosing the right AI model, installing it on your infrastructure, setting up access controls, and creating the documentation you need for DPDP compliance. We also train your team so they can use and manage the AI independently.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="bg-white border border-sand-200 rounded-xl px-6">
                                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                                        What AI models work well for Indian languages?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                                        Several open-source models support Indian languages well. IndicBERT and IndicTrans are built specifically for Indian languages and work great for translation and text understanding. Llama (by Meta) and Mistral can be fine-tuned for Hindi, Tamil, Telugu, Marathi, Bengali, and more. For best results, we fine-tune these models on your specific domain — like customer support in Hindi or legal documents in Marathi.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA Section */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Keep Your Data in India. Keep It Safe.
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                We set up Private AI that runs entirely on Indian servers. DPDP-compliant from day one. Your customer data never leaves the country.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/private-ai">
                                    Explore Private AI <ArrowRight className="ml-2 w-5 h-5" />
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

export default PrivateAiIndia;
