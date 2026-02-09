import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft, Calendar, Clock, Users, Lightbulb, Target, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const AiCommunityGuide = () => {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="AI Community for Business Owners in India — Where to Learn & Connect"
                description="Looking for an AI community that speaks your language? Join business owners across India who are using AI to grow. Real conversations, real results, no hype."
                keywords="AI community India, AI community business owners, AI networking India, AI learning community, AI for entrepreneurs India, join AI community"
                canonical="https://zeroonedotsai.consulting/resources/ai-community"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "AI Community for Business Owners in India — Where to Learn & Connect",
                    "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
                    "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
                    "datePublished": "2026-02-08",
                    "description": "Looking for an AI community that speaks your language? Join business owners across India who are using AI to grow. Real conversations, real results, no hype."
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
                                <Badge className="bg-dots-strategy/10 text-dots-strategy border-dots-strategy/20">Community</Badge>
                                <Badge className="bg-dots-data/10 text-dots-data border-dots-data/20">Learning</Badge>
                                <Badge className="bg-rose/10 text-rose border-rose/20">Networking</Badge>
                            </div>
                            <h1 className="font-heading text-display-xl font-bold mb-6 leading-tight text-ink">
                                AI Community for Business Owners in India — Where to Learn & Connect
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 border-b border-sand-200 pb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> <span>February 8, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} /> <span>6 min read</span>
                                </div>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Introduction */}
                    <AnimatedSection>
                        <div className="prose max-w-none mb-12">
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                Learning AI for your business is hard. Doing it alone is even harder.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                You read an article. Watch a YouTube video. Still confused. You try something. It doesn't work. You don't know why.
                            </p>
                            <p className="text-body-lg text-slate-700 leading-relaxed">
                                That's where an AI community helps. A place where business owners share what actually works. Where you can ask questions and get real answers. Where you're not alone in figuring this out.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Section 1 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                Why Every Business Owner Needs an AI Community
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                AI changes every month. New tools. New rules. New ways of doing things.
                            </p>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                You can't keep up alone. You need people who are in the same boat. Here's what a good community gives you.
                            </p>

                            <div className="space-y-6">
                                {/* Benefit 1 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-data/10 p-3 rounded-full shrink-0">
                                            <Lightbulb className="w-6 h-6 text-dots-data" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                You Learn From Real Wins (and Real Failures)
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                Someone tried an AI chatbot and it flopped. They tell you why. You avoid the same mistake. Someone else used AI to cut costs by 20%. They show you how. You copy what worked.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit 2 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-ops/10 p-3 rounded-full shrink-0">
                                            <Users className="w-6 h-6 text-dots-ops" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                You Get Answers Fast
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                Instead of spending 3 hours googling, you ask the community. Someone who's already done it answers in 10 minutes. You move faster.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit 3 */}
                                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-dots-tech/10 p-3 rounded-full shrink-0">
                                            <Target className="w-6 h-6 text-dots-tech" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-display-sm font-bold mb-2 text-ink">
                                                You Stay Updated Without the Noise
                                            </h3>
                                            <p className="text-body-md text-slate-700 leading-relaxed">
                                                The internet is full of AI hype. Communities cut through it. They tell you what actually matters for your business. What's just hype. What's worth trying.
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
                                What Makes a Good AI Community?
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                Not all communities are worth your time. Here's what separates the good ones from the noise.
                            </p>

                            <div className="space-y-8">
                                {/* Quality 1 */}
                                <div className="bg-gradient-to-br from-dots-strategy/5 to-transparent border-l-4 border-dots-strategy rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-strategy text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Practical, Not Hype
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        A good community talks about what actually works. Not what's trendy. They share tools they use. Numbers that prove results. Problems they faced and how they solved them.
                                    </p>
                                </div>

                                {/* Quality 2 */}
                                <div className="bg-gradient-to-br from-dots-data/5 to-transparent border-l-4 border-dots-data rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-data text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Industry-Specific
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        AI for e-commerce is different from AI for manufacturing. The best communities understand your specific industry. They speak your language. They know your problems.
                                    </p>
                                </div>

                                {/* Quality 3 */}
                                <div className="bg-gradient-to-br from-dots-ops/5 to-transparent border-l-4 border-dots-ops rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-ops text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Active and Responsive
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        A dead community is useless. Look for places where people actually respond. Where questions get answered. Where there's life. If the last post was 6 months ago, move on.
                                    </p>
                                </div>

                                {/* Quality 4 */}
                                <div className="bg-gradient-to-br from-dots-tech/5 to-transparent border-l-4 border-dots-tech rounded-r-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-dots-tech text-white font-mono font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                                            4
                                        </div>
                                        <h3 className="font-heading text-display-sm font-bold text-ink">
                                            Supportive, Not Competitive
                                        </h3>
                                    </div>
                                    <p className="text-body-md text-slate-700 leading-relaxed">
                                        The best communities help each other. No one's trying to show off. No one's gatekeeping knowledge. Everyone shares because they know we all do better when we learn together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 3 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                The ZeroOne 100X Community
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                We built a community for Indian business owners who want to use AI without the BS.
                            </p>

                            <div className="bg-gradient-to-br from-ink/5 to-plum/5 border border-ink/10 rounded-2xl p-8 mb-8">
                                <h3 className="font-heading text-display-sm font-bold mb-4 text-ink">
                                    What It Is
                                </h3>
                                <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                    100X is a group of business owners across India. D2C brands. B2B companies. SaaS startups. Manufacturers. Service businesses.
                                </p>
                                <p className="text-body-md text-slate-700 mb-0 leading-relaxed">
                                    We all have one thing in common: We're using AI to grow our businesses. And we help each other do it better.
                                </p>
                            </div>

                            <h3 className="font-heading text-display-sm font-bold mb-6 text-ink">
                                Who It's For
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border border-sand-200 rounded-xl p-6">
                                    <p className="text-body-md text-slate-700 mb-3">
                                        <strong className="text-ink">✅ You're a good fit if:</strong>
                                    </p>
                                    <ul className="space-y-2 text-body-sm text-slate-700">
                                        <li>• You run a business making ₹50 lakh+ per year</li>
                                        <li>• You want to learn AI, not just hear about it</li>
                                        <li>• You're willing to share what works (and what doesn't)</li>
                                        <li>• You want practical advice, not theory</li>
                                    </ul>
                                </div>
                                <div className="bg-white border border-sand-200 rounded-xl p-6">
                                    <p className="text-body-md text-slate-700 mb-3">
                                        <strong className="text-ink">❌ Not a fit if:</strong>
                                    </p>
                                    <ul className="space-y-2 text-body-sm text-slate-700">
                                        <li>• You're looking for quick hacks or magic solutions</li>
                                        <li>• You just want to sell your services</li>
                                        <li>• You're not willing to contribute and help others</li>
                                        <li>• You're just curious but not serious about AI</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="font-heading text-display-sm font-bold mb-6 text-ink">
                                What Members Get
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-dots-data text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <p className="text-body-md text-ink font-semibold mb-1">Monthly AI Workshops</p>
                                        <p className="text-body-sm text-slate-700 leading-relaxed">
                                            Live sessions where we teach one AI skill per month. How to use ChatGPT for market research. How to automate customer support. How to build AI-powered reports. Real tools you can use tomorrow.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-dots-ops text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <p className="text-body-md text-ink font-semibold mb-1">Peer Network</p>
                                        <p className="text-body-sm text-slate-700 leading-relaxed">
                                            A private group where you can ask questions anytime. Share what's working. Get feedback on your AI projects. Connect with business owners who get it.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-dots-tech text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <p className="text-body-md text-ink font-semibold mb-1">Direct Access to AI Architects</p>
                                        <p className="text-body-sm text-slate-700 leading-relaxed">
                                            Got a specific problem? Our team answers questions in the community. We help you figure out if AI can solve it. And how to do it without wasting money.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-dots-strategy text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <p className="text-body-md text-ink font-semibold mb-1">AI Tool Reviews</p>
                                        <p className="text-body-sm text-slate-700 leading-relaxed">
                                            We test new AI tools every month. Tell you what's worth it. What's trash. What works for Indian businesses specifically.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-rose text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        5
                                    </div>
                                    <div>
                                        <p className="text-body-md text-ink font-semibold mb-1">Case Studies from Real Businesses</p>
                                        <p className="text-body-sm text-slate-700 leading-relaxed">
                                            See how other members used AI. What they spent. What results they got. What they'd do differently. No fluff. Just real numbers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 4 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                What Our Members Say
                            </h2>

                            <div className="space-y-6">
                                {/* Testimonial 1 */}
                                <div className="bg-white border-l-4 border-dots-data rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Quote className="w-8 h-8 text-dots-data shrink-0" />
                                        <p className="text-body-md text-slate-700 italic leading-relaxed">
                                            "I was spending ₹40,000/month on tools I didn't need. The community helped me cut it down to ₹12,000 and get better results. Paid for my membership 10 times over in the first month."
                                        </p>
                                    </div>
                                    <p className="text-body-sm text-slate-700 font-semibold">
                                        — Rajesh K., D2C Fashion Brand, Mumbai
                                    </p>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="bg-white border-l-4 border-dots-ops rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Quote className="w-8 h-8 text-dots-ops shrink-0" />
                                        <p className="text-body-md text-slate-700 italic leading-relaxed">
                                            "I tried to learn AI on my own for 6 months. Got nowhere. Joined 100X and within 3 weeks, I had a working chatbot that handles 60% of our customer support. The workshops are gold."
                                        </p>
                                    </div>
                                    <p className="text-body-sm text-slate-700 font-semibold">
                                        — Priya S., SaaS Founder, Bangalore
                                    </p>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="bg-white border-l-4 border-dots-tech rounded-r-2xl p-6 shadow-sm">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Quote className="w-8 h-8 text-dots-tech shrink-0" />
                                        <p className="text-body-md text-slate-700 italic leading-relaxed">
                                            "The best part? No one's trying to sell you anything. It's just business owners helping each other. I've made connections that turned into partnerships worth lakhs."
                                        </p>
                                    </div>
                                    <p className="text-body-sm text-slate-700 font-semibold">
                                        — Amit T., Manufacturing Business, Pune
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section 5 */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                                How to Join
                            </h2>
                            <p className="text-body-md text-slate-700 mb-6 leading-relaxed">
                                We keep the community small and focused. Here's how to get in.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            <strong className="text-ink">Fill out a short application.</strong> Tell us about your business and what you want to learn.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            <strong className="text-ink">Quick 15-minute call.</strong> We make sure you're a good fit. And that the community can actually help you.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="bg-ink text-cream-50 font-mono font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-body-md text-slate-700 leading-relaxed">
                                            <strong className="text-ink">Join and start learning.</strong> Get access to all past workshops. Join the group. Ask your first question.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-lemon/20 border border-lemon/40 rounded-2xl p-6">
                                <p className="text-body-md text-ink mb-0">
                                    <strong>Cost:</strong> ₹5,000 per month or ₹50,000 per year (save 2 months). Cancel anytime. No long-term commitment.
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
                                        Is this community only for tech-savvy people?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Not at all. Most members aren't tech people. They're business owners who want to use AI to grow. We explain everything in simple language. If you can use WhatsApp, you can learn AI in this community.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        How much time do I need to spend in the community?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        As much or as little as you want. The monthly workshop is 1 hour. Most people spend 2-3 hours per month reading discussions and asking questions. But there's no minimum. You get value even if you just lurk and learn.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-body-md font-semibold text-ink">
                                        What if I don't have any AI in my business yet?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-body-md text-slate-700 leading-relaxed">
                                        Perfect. That's exactly why you should join. The community will help you figure out where to start. What tools to use. How to avoid expensive mistakes. Most members started with zero AI knowledge.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-ink to-plum text-white rounded-2xl p-10 text-center">
                            <h3 className="font-heading text-display-lg font-bold mb-4">
                                Stop Learning AI Alone
                            </h3>
                            <p className="text-body-lg mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed">
                                Join 100+ Indian business owners who are using AI to grow faster. Get answers from people who've been there. Learn what actually works.
                            </p>
                            <Button size="lg" variant="outline" className="bg-white text-ink hover:bg-cream-50 border-0" asChild>
                                <Link to="/community">
                                    Explore Our Community <ArrowRight className="ml-2 w-5 h-5" />
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

export default AiCommunityGuide;
