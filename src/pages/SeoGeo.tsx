import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Sparkles,
  Brain,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { logEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const servicePillars = [
  {
    icon: Search,
    tag: "D.O.T.S. Data",
    title: "Show Up on Google",
    subtitle: "Traditional search engine optimisation that gets you found.",
    color: "dots-data",
    services: [
      "Make your website faster and easier for Google to read",
      "Find the right words your customers actually search for",
      "Get other trusted websites to link to yours",
      "Fix technical issues that stop Google from finding your pages",
      "Make your Google Business listing perfect",
    ],
  },
  {
    icon: Sparkles,
    tag: "D.O.T.S. Strategy",
    title: "Show Up When People Ask AI",
    subtitle:
      "Make sure ChatGPT, Perplexity, Gemini, and Claude cite your brand.",
    color: "dots-strategy",
    services: [
      "Check how AI models see your brand right now",
      "Create content in the format AI loves to quote",
      "Add structured data so AI understands your business",
      "Track how often AI mentions you vs your competitors",
      "Optimise your content for AI answer snippets",
    ],
  },
  {
    icon: Brain,
    tag: "D.O.T.S. Operations",
    title: "Make AI Say Good Things About You",
    subtitle:
      "Get your brand into the knowledge that AI reads and recommends.",
    color: "dots-ops",
    services: [
      "Get your brand into the sources AI models read",
      "Make sure AI says accurate, positive things about you",
      "Create content that makes AI recommend you when people ask",
      "Monitor and fix what AI gets wrong about your brand",
      "Build your presence across AI-readable platforms",
    ],
  },
];

const processSteps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We check how Google and AI see your brand today. You get a score from 0 to 100.",
    color: "dots-data",
  },
  {
    number: 2,
    title: "Plan",
    description:
      "We build a clear action plan showing exactly what needs to change and why.",
    color: "dots-strategy",
  },
  {
    number: 3,
    title: "Build",
    description:
      "We fix your website, create AI-friendly content, and add the right technical signals.",
    color: "dots-tech",
  },
  {
    number: 4,
    title: "Track",
    description:
      "We monitor your rankings on Google AND AI models. You see the progress every month.",
    color: "dots-ops",
  },
];

const auditDeliverables = [
  {
    number: 1,
    title: "AI Presence Score (0–100)",
    description:
      "A concrete number measuring your visibility across ChatGPT, Perplexity, and Gemini.",
    color: "dots-strategy",
  },
  {
    number: 2,
    title: "SEO Health Check",
    description:
      "A technical review of how Google sees your site, with fixes ranked by impact.",
    color: "dots-data",
  },
  {
    number: 3,
    title: "Competitor Comparison",
    description:
      "See exactly why AI and Google recommend your competitors over you.",
    color: "dots-ops",
  },
  {
    number: 4,
    title: "20-Page Action Plan",
    description:
      "A clear PDF report with every step you need to take, in priority order.",
    color: "dots-tech",
  },
];

const roiMetrics = [
  {
    value: "4.4x",
    label: "Higher Conversions",
    description:
      "Visitors who find you through AI convert 4x better than those from Google ads.",
  },
  {
    value: "72%",
    label: "Faster Deal Closing",
    description:
      "Buyers who see AI recommend you already trust you before they call.",
  },
  {
    value: "0%",
    label: "Risk",
    description:
      "If our audit can't find a single gap, you don't pay. Simple.",
  },
];

const faqs = [
  {
    question: "What is GEO?",
    answer:
      "GEO stands for Generative Engine Optimisation. It's like SEO, but for AI. Instead of getting Google to rank you, we get ChatGPT, Perplexity, and Gemini to mention and recommend you.",
  },
  {
    question: "Do I still need SEO?",
    answer:
      "Yes. Google isn't going away. But AI is growing fast. Smart brands do both. We handle both in one plan so nothing falls through the cracks.",
  },
  {
    question: "How do you track AI mentions?",
    answer:
      "We run your brand through major AI models every week and track whether they mention you, what they say, and how it compares to competitors.",
  },
  {
    question: "What's the AI Presence Score?",
    answer:
      "It's a number from 0 to 100 that measures how visible and accurate your brand is across AI platforms. Think of it like a credit score, but for AI visibility.",
  },
  {
    question: "How long until I see results?",
    answer:
      "SEO takes 3–6 months for significant changes. GEO can show improvements in weeks because AI models update their knowledge faster than Google changes rankings.",
  },
  {
    question: "What if AI says wrong things about my brand?",
    answer:
      "That's exactly what we fix. We identify incorrect information, create the right content signals, and monitor until AI corrects itself.",
  },
];

const SeoGeo = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formSubject, setFormSubject] = useState("SEO & GEO Inquiry");

  const openForm = (subject: string) => {
    logEvent("SEO & GEO", "Click CTA", subject);
    setFormSubject(subject);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SEO & GEO — Be the Brand AI Recommends"
        description="Get found on Google AND recommended by AI. Our SEO & GEO services ensure ChatGPT, Perplexity, and Gemini know your brand. Start with the Authority Audit for ₹25,000."
        keywords="SEO, GEO, Generative Engine Optimization, AI visibility, AI brand discovery, ChatGPT SEO, AI recommendations, Authority Audit"
        canonical="https://zeroonedotsai.consulting/seo-geo"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <Navigation />

      {/* ── Section 1: Hero ── */}
      <section className="pt-32 pb-20 md:pb-28 px-4 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-dots-strategy/5 rounded-full blur-[140px] -z-10" />

        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dots-strategy/10 border border-dots-strategy/20 text-ink mb-6"
          >
            <Search size={16} />
            <span className="font-semibold text-sm">
              Search + AI Visibility
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
          >
            Be the Brand <br />
            <span className="text-plum">AI Recommends</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { ...fadeInUp.visible.transition, delay: 0.1 },
              },
            }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            People now ask AI for answers instead of searching Google. If
            ChatGPT, Perplexity, and Gemini don't know your brand — you're
            invisible to half your customers.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { ...fadeInUp.visible.transition, delay: 0.2 },
              },
            }}
          >
            <Button
              size="lg"
              variant="brand"
              className="font-semibold h-14 px-8 text-lg shadow-lg"
              onClick={() => openForm("Hero — Check AI Visibility")}
            >
              Check Your AI Visibility
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <AnimatedSection className="py-20 md:py-28 px-4 bg-cream-100 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                The World Changed.{" "}
                <span className="text-plum">Did Your Marketing?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your customers used to type into Google. Now they ask AI.
                "What's the best CRM for small teams?" "Who does the best SEO in
                India?" If AI doesn't mention your brand in its answer, you lose
                that customer. Forever.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  value: "60%",
                  text: "of B2B buyers now start with AI",
                  color: "dots-data",
                },
                {
                  value: "0%",
                  text: "of brands track their AI visibility",
                  color: "dots-strategy",
                },
                {
                  value: "3x",
                  text: "higher trust when AI recommends you",
                  color: "dots-ops",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white border border-sand-200 rounded-2xl p-6 flex items-center gap-5"
                >
                  <span
                    className={`text-4xl font-bold text-${stat.color} shrink-0`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-slate-700">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Section 3: Three Service Pillars ── */}
      <section className="py-20 md:py-28 lg:py-36 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three layers of visibility. One plan. Zero jargon.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {servicePillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div
                  className={`bg-white border border-sand-200 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-500`}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Header */}
                    <div className="md:w-1/3 space-y-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-${pillar.color}/10 flex items-center justify-center`}
                      >
                        <pillar.icon
                          size={28}
                          className={`text-${pillar.color}`}
                        />
                      </div>
                      <span
                        className={`inline-block font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-${pillar.color}/10 text-${pillar.color}`}
                      >
                        {pillar.tag}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground">{pillar.subtitle}</p>
                    </div>

                    {/* Right: Services list */}
                    <div className="md:w-2/3">
                      <ul className="space-y-4">
                        {pillar.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-3 text-lg"
                          >
                            <CheckCircle2
                              size={22}
                              className={`text-${pillar.color} shrink-0 mt-0.5`}
                            />
                            <span className="text-slate-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── */}
      <AnimatedSection className="py-20 md:py-28 px-4 bg-cream-100 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              From invisible to recommended in 4 steps.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center mx-auto`}
                  >
                    <span
                      className={`text-2xl font-bold text-${step.color}`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h4 className="font-heading text-xl font-bold">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Section 5: Authority Audit Product ── */}
      <AnimatedSection className="py-20 md:py-28 lg:py-36 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: What You Get */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Start Here:{" "}
                <span className="text-plum">The Authority Audit</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not sure where you stand? Our 5-day diagnostic tells you exactly
                how Google AND AI see your brand.
              </p>

              <div className="space-y-6">
                {auditDeliverables.map((item) => (
                  <div key={item.number} className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center shrink-0`}
                    >
                      <span
                        className={`text-2xl font-bold text-${item.color}`}
                      >
                        {item.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="bg-background border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-dots-data/10 rounded-bl-full -mr-8 -mt-8" />

              <div className="relative z-10 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Fixed Price · One Time
                </p>
                <div className="text-5xl font-bold text-foreground mb-2">
                  ₹25,000
                </div>
                <p className="text-green-600 font-medium mb-8">
                  100% Money-Back Guarantee
                </p>

                <div className="space-y-4 text-left max-w-xs mx-auto mb-8 text-sm">
                  <div className="flex justify-between border-b border-dashed border-border pb-2">
                    <span className="text-muted-foreground">
                      Turnaround Time
                    </span>
                    <span className="font-bold">5 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-border pb-2">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-bold">PDF Report + Scorecard</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-border pb-2">
                    <span className="text-muted-foreground">Consultation</span>
                    <span className="font-bold">60 Min Debrief</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="brand"
                  className="w-full font-bold text-lg h-12"
                  onClick={() =>
                    openForm("Purchase — Authority Audit (₹25,000)")
                  }
                >
                  Get Your Audit
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  *Limited to 5 audits per month to ensure quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Section 6: ROI ── */}
      <AnimatedSection className="py-20 md:py-28 px-4 bg-cream-100 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            The ROI Speaks for Itself
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roiMetrics.map((metric) => (
              <div
                key={metric.value}
                className="bg-white border border-sand-200 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-ink mb-2">
                  {metric.value}
                </div>
                <p className="text-sm font-medium mb-2">{metric.label}</p>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Section 7: FAQ ── */}
      <AnimatedSection className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Questions? We've Got Answers.
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-sand-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* ── Section 8: Bottom CTA ── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 bg-ink text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Your competitors are already doing this.
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Every day you wait, AI learns more about them and less about you.
              Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold h-14 px-8 text-lg"
                onClick={() => openForm("CTA — AI Visibility Score")}
              >
                Get Your AI Visibility Score
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10"
                onClick={() => openForm("CTA — Talk to Team")}
              >
                Talk to Our Team
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject={formSubject}
      />
      <Footer />
    </div>
  );
};

export default SeoGeo;
