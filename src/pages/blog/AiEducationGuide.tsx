import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, BookOpen, Zap, Target, Clock, Users, Award } from "lucide-react";

export default function AiEducationGuide() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="AI Education for Business Leaders — Where to Start in 2026"
        description="You don't need to code to use AI. Learn the 3 levels of AI literacy every business leader needs, plus free resources and workshops to get started."
        keywords="AI education business leaders India, learn AI for business, AI literacy program, AI training non-technical, AI workshop India, AI education 2026"
        canonical="https://zeroonedotsai.consulting/resources/ai-education"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "AI Education for Business Leaders — Where to Start in 2026",
          "author": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI" },
          "publisher": { "@type": "Organization", "name": "ZeroOne D.O.T.S AI", "url": "https://zeroonedotsai.consulting" },
          "datePublished": "2026-02-08",
          "description": "The 3 levels of AI literacy every business leader needs, plus practical resources to get started."
        }}
      />

      <Navigation />

      <main className="bg-cream-50">
        {/* Hero */}
        <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dots-strategy/10 text-dots-strategy text-body-sm font-mono uppercase tracking-wide rounded-full">
                <BookOpen className="w-4 h-4" />
                Learning Guide
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sand-200/50 text-slate-700 text-body-sm rounded-full">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>

            <h1 className="font-heading text-display-xl text-ink mb-6">
              AI Education for Business Leaders — Where to Start in 2026
            </h1>

            <p className="text-body-lg text-slate-700 mb-4">
              You don't need to code to use AI. You just need to know where to start.
            </p>

            <p className="text-body-sm text-stone-500">
              Published February 8, 2026 · Updated regularly
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
                  Why Business Leaders Need AI Education Now
                </h2>

                <p className="text-body-md text-slate-700 mb-4">
                  AI is changing everything. Your customers expect faster answers. Your competitors are automating. Your team is asking questions.
                </p>

                <p className="text-body-md text-slate-700 mb-4">
                  But most leaders feel lost. A recent survey found 73% of Indian business leaders want to use AI but don't know where to start.
                </p>

                <p className="text-body-md text-slate-700 mb-6">
                  The good news? You don't need a computer science degree. You need clarity.
                </p>

                <div className="bg-dots-strategy/5 border-l-4 border-dots-strategy rounded-r-lg p-6 mb-8">
                  <p className="text-body-md text-slate-700 font-medium mb-2">
                    Quick fact:
                  </p>
                  <p className="text-body-md text-slate-700">
                    Companies that train their leaders in AI see 40% faster AI adoption. It's not about teaching code. It's about teaching confidence.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-8">
                  The 3 Levels of AI Literacy
                </h2>

                <p className="text-body-md text-slate-700 mb-8">
                  Think of AI learning like learning to drive. You start with the basics. Then you practice. Then you master it.
                </p>

                {/* Level 1 */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-data/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-display-sm text-dots-data">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-display-sm text-ink mb-2">
                        Level 1: AI Awareness
                      </h3>
                      <p className="text-body-sm text-stone-500 mb-3">
                        For: Everyone · Time needed: 1 day
                      </p>
                    </div>
                  </div>

                  <p className="text-body-md text-slate-700 mb-4">
                    Know what AI can and can't do. Understand the basics without the jargon.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">What is AI? What is it not?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Common AI myths and realities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Where AI works well (and where it doesn't)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Real examples from businesses like yours</span>
                    </li>
                  </ul>
                </div>

                {/* Level 2 */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-ops/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-display-sm text-dots-ops">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-display-sm text-ink mb-2">
                        Level 2: AI Application
                      </h3>
                      <p className="text-body-sm text-stone-500 mb-3">
                        For: Managers, Founders · Time needed: 1 week
                      </p>
                    </div>
                  </div>

                  <p className="text-body-md text-slate-700 mb-4">
                    Use AI tools in your daily work. Get hands-on experience.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">How to write prompts that work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Use ChatGPT, Claude, or other AI assistants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Automate 3-5 tasks you do every week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-ops flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Spot opportunities in your workflow</span>
                    </li>
                  </ul>
                </div>

                {/* Level 3 */}
                <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-6 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-dots-strategy/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-display-sm text-dots-strategy">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-display-sm text-ink mb-2">
                        Level 3: AI Strategy
                      </h3>
                      <p className="text-body-sm text-stone-500 mb-3">
                        For: CEOs, CTOs, Department Heads · Time needed: 1 month
                      </p>
                    </div>
                  </div>

                  <p className="text-body-md text-slate-700 mb-4">
                    Build AI into your business model. Make strategic decisions with confidence.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Map AI opportunities across your business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Prioritize projects by impact and effort</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Build an AI roadmap for the next 12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-slate-700">Lead your team through AI adoption</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-6">
                  Free Resources to Start Learning
                </h2>

                <p className="text-body-md text-slate-700 mb-8">
                  You don't need expensive courses. Start with these trusted free resources.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      1. AI for Everyone (Coursera)
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      By Andrew Ng. Perfect for beginners. No coding needed. 4 hours total.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: Level 1 (AI Awareness)
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      2. The AI Advantage Newsletter
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      Weekly tips on using AI at work. Real examples, no fluff.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: Level 2 (AI Application)
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      3. ChatGPT Prompt Engineering Guide
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      Free guide from OpenAI. Learn to write prompts that work. Updated monthly.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: Level 2 (AI Application)
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      4. AI in Business Podcast by HBR
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      Listen while you commute. Real stories from CEOs who did it right.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: Level 3 (AI Strategy)
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      5. Google AI Essentials
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      Free micro-lessons. 10 minutes each. Great for busy leaders.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: Level 1 (AI Awareness)
                    </p>
                  </div>

                  <div className="bg-white border border-sand-200 rounded-xl p-6">
                    <h3 className="font-heading text-display-sm text-ink mb-2">
                      6. ZeroOne AI Resources Hub
                    </h3>
                    <p className="text-body-md text-slate-700 mb-2">
                      Templates, checklists, and guides for Indian businesses. Free forever.
                    </p>
                    <p className="text-body-sm text-stone-500">
                      Best for: All levels
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-16">
                <div className="bg-gradient-to-br from-dots-data/10 via-dots-strategy/10 to-dots-ops/10 border border-sand-200 rounded-2xl p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                      <Award className="w-7 h-7 text-cream-50" />
                    </div>
                    <div>
                      <h2 className="font-heading text-display-lg text-ink mb-3">
                        The ZeroOne AI Workshop
                      </h2>
                      <p className="text-body-lg text-slate-700 mb-6">
                        Go from confused to confident in one day.
                      </p>
                    </div>
                  </div>

                  <p className="text-body-md text-slate-700 mb-6">
                    Our 1-day intensive workshop is designed for business leaders who want to get started fast. No fluff. No jargon. Just practical skills.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-heading text-display-sm text-ink mb-3">
                        What you learn:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">AI basics in simple English</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Hands-on with 5+ AI tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Write prompts that work</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-dots-strategy flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Spot AI opportunities in your business</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-display-sm text-ink mb-3">
                        Who it's for:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">CEOs and founders</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Department heads</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Team leads and managers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-dots-data flex-shrink-0 mt-0.5" />
                          <span className="text-body-md text-slate-700">Anyone who wants to lead with AI</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm border border-sand-200/50 rounded-xl p-6 mb-6">
                    <h3 className="font-heading text-display-sm text-ink mb-3">
                      What you walk away with:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">A personalized AI action plan for your business</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">3-5 quick wins you can implement next week</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">A library of tested prompts and templates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-slate-700">Lifetime access to our AI resources hub</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-ink hover:bg-plum text-white rounded-full font-medium transition-colors duration-200"
                  >
                    <a href="/ai-workshop" className="inline-flex items-center gap-2">
                      Join Our Next AI Workshop
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-6">
                  What You Don't Need to Learn
                </h2>

                <p className="text-body-md text-slate-700 mb-6">
                  Let's clear something up. You don't need to become a data scientist. Here's what you can skip:
                </p>

                <div className="bg-cream-100 border border-sand-200 rounded-xl p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-body-sm font-bold text-slate-700">✗</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-display-sm text-ink mb-1">No coding required</h3>
                        <p className="text-body-md text-slate-700">
                          You'll never write a line of Python. AI tools today work like apps on your phone.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-body-sm font-bold text-slate-700">✗</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-display-sm text-ink mb-1">No math needed</h3>
                        <p className="text-body-md text-slate-700">
                          Understanding neural networks is optional. Focus on using AI, not building it.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-body-sm font-bold text-slate-700">✗</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-display-sm text-ink mb-1">No PhD needed</h3>
                        <p className="text-body-md text-slate-700">
                          AI research papers are for researchers. You need practical knowledge, not theory.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-body-sm font-bold text-slate-700">✗</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-display-sm text-ink mb-1">No technical background</h3>
                        <p className="text-body-md text-slate-700">
                          If you can use Google Docs, you can use AI. It's that simple.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-body-md text-slate-700 mt-6">
                  Your job is to ask the right questions. The AI does the heavy lifting.
                </p>
              </section>

              {/* FAQ */}
              <section className="mb-16">
                <h2 className="font-heading text-display-lg text-ink mb-8">
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Do I need to know coding to learn AI?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      No. Not at all. Modern AI tools are designed for everyone. You use them like you'd use Google or WhatsApp. Type what you want, get results. That's it. The only people who need coding are the engineers building AI products. Business leaders just need to know how to use them.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      How long does it take to learn AI for business?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      It depends on your goal. To understand the basics? 1 day. To use AI tools confidently at work? 1 week. To build an AI strategy for your company? 1 month. You don't need years. You need focus. Start with Level 1, practice Level 2, then move to Level 3. Most leaders see results in their first week.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      Is AI going to replace my job?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      AI won't replace leaders. But leaders who use AI will replace leaders who don't. Think of AI as a super-assistant. It handles boring tasks so you can focus on decisions, relationships, and strategy. The jobs that disappear are repetitive ones. Leadership jobs? They get better. You make faster decisions with better data.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white border border-sand-200 rounded-xl px-6">
                    <AccordionTrigger className="font-heading text-display-sm text-ink hover:no-underline">
                      What's the best way to start learning AI today?
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-slate-700 pb-6">
                      Start with hands-on practice. Sign up for ChatGPT or Claude (both have free versions). Spend 30 minutes asking it to help with real work. Write an email. Summarize a document. Brainstorm ideas. You'll learn more in 30 minutes of practice than 3 hours of watching videos. Then, once you're comfortable, join a workshop like ours to fill in the gaps.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Final CTA */}
              <section>
                <div className="bg-gradient-to-br from-ink to-plum rounded-2xl p-10 text-center">
                  <h2 className="font-heading text-display-lg text-cream-50 mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-body-lg text-cream-50/90 mb-8 max-w-2xl mx-auto">
                    Join our next AI workshop and go from confused to confident in just one day.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-cream-50 hover:bg-white text-ink rounded-full font-medium transition-colors duration-200"
                  >
                    <a href="/ai-workshop" className="inline-flex items-center gap-2">
                      Reserve Your Spot
                      <ArrowRight className="w-5 h-5" />
                    </a>
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
