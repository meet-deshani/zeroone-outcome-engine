import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, ArrowRight, BookOpen, TrendingUp, Bot, Users, GraduationCap, Wrench, Brain, Shield, Server, WifiOff, Scale, HardDrive } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const blogArticles = [
    {
        title: "How to Improve Business Margins with AI",
        description: "Find where your business loses money. Learn how AI spots margin leaks and fixes them automatically.",
        badge: "Business Margins",
        badgeColor: "bg-dots-data/20 text-dots-data",
        icon: TrendingUp,
        iconColor: "text-dots-data",
        href: "/resources/business-margin-guide",
        readTime: "8 min read",
    },
    {
        title: "AI Automation for Small Business in India",
        description: "5 things AI can automate today. What it costs, what it saves, and where to start.",
        badge: "AI Automation",
        badgeColor: "bg-dots-ops/20 text-dots-ops",
        icon: Bot,
        iconColor: "text-dots-ops",
        href: "/resources/ai-automation-guide",
        readTime: "10 min read",
    },
    {
        title: "AI Community for Business Owners",
        description: "Why learning AI alone is hard. How the right community helps you grow faster.",
        badge: "AI Community",
        badgeColor: "bg-dots-tech/20 text-dots-tech",
        icon: Users,
        iconColor: "text-dots-tech",
        href: "/resources/ai-community",
        readTime: "7 min read",
    },
    {
        title: "AI Education for Business Leaders",
        description: "The 3 levels of AI literacy. What you need to know — and what you can skip.",
        badge: "AI Education",
        badgeColor: "bg-dots-strategy/20 text-dots-strategy",
        icon: GraduationCap,
        iconColor: "text-dots-strategy",
        href: "/resources/ai-education",
        readTime: "9 min read",
    },
    {
        title: "Best AI Tools for Indian Businesses in 2026",
        description: "A curated list of AI tools that actually work for Indian businesses. With honest pricing.",
        badge: "AI Tools",
        badgeColor: "bg-rose/20 text-rose",
        icon: Wrench,
        iconColor: "text-rose",
        href: "/resources/ai-tools-india",
        readTime: "12 min read",
    },
    {
        title: "What Is an AI Council? Why Your Business Needs Multiple AI Models",
        description: "No single AI is perfect. Learn how an AI Council uses multiple models together for failover, cost savings, and better results.",
        badge: "AI Council",
        badgeColor: "bg-dots-data/20 text-dots-data",
        icon: Brain,
        iconColor: "text-dots-data",
        href: "/resources/ai-council-guide",
        readTime: "10 min read",
    },
    {
        title: "Private AI for Indian Businesses — DPDP Act Compliance Guide",
        description: "India's DPDP Act changes everything. Learn how private AI keeps your data in India and your business compliant.",
        badge: "Private AI India",
        badgeColor: "bg-dots-strategy/20 text-dots-strategy",
        icon: Shield,
        iconColor: "text-dots-strategy",
        href: "/resources/private-ai-india",
        readTime: "11 min read",
    },
    {
        title: "How to Set Up an AI Office — Self-Hosted AI Guide for Business",
        description: "9 tools on one server. Everything your business needs to run AI privately — search, chat, automate, and serve.",
        badge: "AI Office",
        badgeColor: "bg-dots-ops/20 text-dots-ops",
        icon: Server,
        iconColor: "text-dots-ops",
        href: "/resources/ai-office-setup",
        readTime: "12 min read",
    },
    {
        title: "Offline AI in 2026 — What Actually Works Without Internet",
        description: "Download once, use forever. Which AI models work offline, on which devices, and what they can actually do.",
        badge: "Offline AI",
        badgeColor: "bg-dots-tech/20 text-dots-tech",
        icon: WifiOff,
        iconColor: "text-dots-tech",
        href: "/resources/offline-ai-guide",
        readTime: "10 min read",
    },
    {
        title: "Private AI vs Cloud AI — An Honest Comparison for Business Leaders",
        description: "When does private AI make sense? When is cloud better? An honest breakdown with real numbers.",
        badge: "AI Comparison",
        badgeColor: "bg-dots-data/20 text-dots-data",
        icon: Scale,
        iconColor: "text-dots-data",
        href: "/resources/private-ai-vs-cloud",
        readTime: "11 min read",
    },
    {
        title: "On-Premise AI — A No-Jargon Guide for Non-Technical Founders",
        description: "What on-premise AI actually means, what it costs, and whether your business needs it. In plain English.",
        badge: "On-Premise AI",
        badgeColor: "bg-dots-ops/20 text-dots-ops",
        icon: HardDrive,
        iconColor: "text-dots-ops",
        href: "/resources/on-premise-ai-guide",
        readTime: "10 min read",
    },
];

const Resources = () => {
    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="Resources — Free AI Guides, Tools & Articles for Indian Businesses"
                description="Free AI guides, automation playbooks, margin improvement tools, and expert articles. Learn how to use AI to grow your business in India."
                keywords="AI guides India, AI automation guide, business margin improvement, AI tools India, AI education, AI community"
                canonical="https://zeroonedotsai.consulting/resources"
            />
            <Navigation />

            {/* Hero */}
            <AnimatedSection>
                <div className="pt-32 pb-16 md:pb-20 px-4 text-center">
                    <Badge className="bg-dots-data/10 text-dots-data border-0 mb-6 font-mono text-xs uppercase tracking-wider">
                        Free Resources
                    </Badge>
                    <h1 className="font-heading text-display-xl font-bold mb-6 text-ink">
                        Learn AI. Grow Your Business.
                    </h1>
                    <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                        Free guides, tools, and articles that help Indian businesses use AI the smart way. No jargon. No fluff.
                    </p>
                </div>
            </AnimatedSection>

            <div className="container mx-auto px-4 pb-20 md:pb-28 max-w-6xl">

                {/* AI Guides Section */}
                <AnimatedSection>
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-6 h-6 text-ink" />
                            <h2 className="font-heading text-display-lg font-bold text-ink">AI Guides & Articles</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogArticles.map((article) => (
                                <Link key={article.href} to={article.href} className="group">
                                    <Card className="bg-white border border-sand-200 rounded-2xl h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-3">
                                                <Badge className={`${article.badgeColor} border-0 text-xs`}>
                                                    {article.badge}
                                                </Badge>
                                                <span className="text-body-sm text-stone-500">{article.readTime}</span>
                                            </div>
                                            <CardTitle className="font-heading text-display-sm line-clamp-2 group-hover:text-plum transition-colors">
                                                {article.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-body-sm text-slate-700 line-clamp-3 mb-4">
                                                {article.description}
                                            </p>
                                            <div className="flex items-center text-body-sm font-medium text-ink group-hover:text-plum transition-colors">
                                                Read Guide <ArrowRight className="ml-1 w-4 h-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Engineering Tools Section */}
                <AnimatedSection>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Calculator className="w-6 h-6 text-ink" />
                            <h2 className="font-heading text-display-lg font-bold text-ink">Engineering Tools</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/resources/lmtd-calculator" className="group">
                                <Card className="bg-white border border-sand-200 rounded-2xl h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            LMTD Calculator
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-dots-data" />
                                        </CardTitle>
                                        <CardDescription>Log Mean Temperature Difference</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-700">
                                            Calculate LMTD for counter-current heat exchangers. Essential for preliminary sizing and efficiency checks.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Technical Articles Section */}
                <AnimatedSection>
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-6 h-6 text-ink" />
                            <h2 className="font-heading text-display-lg font-bold text-ink">Technical Articles</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/resources/baffle-cut-optimization" className="group">
                                <Card className="bg-white border border-sand-200 rounded-2xl h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                    <CardHeader>
                                        <div className="mb-2">
                                            <Badge variant="secondary" className="text-xs">Heat Exchangers</Badge>
                                        </div>
                                        <CardTitle className="line-clamp-2 group-hover:text-plum transition-colors">
                                            Optimizing Baffle Cut in TEMA Shell & Tube Exchangers
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-700 line-clamp-3">
                                            Why 25% isn't always the answer. A deep dive into window velocity, pressure drop, and vibration analysis (Xvib).
                                        </p>
                                        <div className="mt-4 flex items-center text-sm font-medium text-ink group-hover:text-plum transition-colors">
                                            Read Article <ArrowRight className="ml-1 w-4 h-4 text-dots-data" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <Footer />
        </div>
    );
};

export default Resources;
