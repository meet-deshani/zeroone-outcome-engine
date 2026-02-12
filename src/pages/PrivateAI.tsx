import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { logEvent } from "@/lib/analytics";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { WifiOff, Users, Server, CheckCircle2, XCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function PrivateAI() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleCTAClick = (ctaName: string) => {
    logEvent("cta_click", {
      page: "private_ai",
      cta_name: ctaName,
    });
    setContactOpen(true);
  };

  return (
    <>
      <SEO
        title="Private AI — Own Your AI, Don't Rent It"
        description="ZeroOne builds private AI systems that run on your servers, work without internet, and are 100% yours. File a patent on your AI. Made in India."
        keywords="private AI India, on-premise AI, offline AI business, AI ownership, custom AI model, own your AI"
        canonical="https://zeroonedotsai.consulting/private-ai"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dots-strategy/5 via-cream-50 to-cream-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(162,210,255,0.1),transparent_50%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono uppercase text-sm tracking-wider px-4 py-2 rounded-full bg-dots-strategy/10 text-dots-strategy border border-dots-strategy/20 inline-block">
                The Future of Business AI
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-display-xl text-ink mt-6"
            >
              Private AI: Built for You,{" "}
              <span className="text-plum italic">Owned by You</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-slate-700 mt-6 max-w-3xl mx-auto"
            >
              We don't sell you an AI subscription. We build your own AI system
              — one that runs on your servers, works without internet, and
              belongs entirely to you.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              <Button
                size="lg"
                variant="brand"
                className="rounded-full font-semibold"
                onClick={() => handleCTAClick("hero_schedule_demo")}
              >
                Schedule a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold bg-cream-50 border-sand-200 hover:bg-white"
                asChild
              >
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <AnimatedSection className="py-20 md:py-28 lg:py-36 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-display-lg text-ink text-center mb-16">
              Why Renting AI is{" "}
              <span className="text-plum italic">Broken</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Problems */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8">
                <h3 className="font-heading text-2xl text-ink mb-6">
                  The Rental Trap
                </h3>
                <div className="space-y-4">
                  {[
                    "You pay per question. Costs grow forever.",
                    "Your data trains someone else's model.",
                    "Internet goes down? Your AI stops.",
                    "They raise prices? You're stuck.",
                  ].map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-body-md text-slate-700">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: ZeroOne Way */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl text-ink mb-6">
                  The ZeroOne Way
                </h3>
                <div className="space-y-4">
                  {[
                    "Pay once. Use forever.",
                    "Your data stays on your servers.",
                    "Works without internet.",
                    "You control your costs.",
                  ].map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-body-md text-slate-700">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Three Pillars Section */}
      <AnimatedSection className="py-20 md:py-28 lg:py-36">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-display-lg text-ink text-center mb-16">
              Three Pillars of{" "}
              <span className="text-plum italic">Private AI</span>
            </h2>

            <div className="space-y-8">
              {/* Card 1: AI Without Internet */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 md:p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-dots-tech/10 flex items-center justify-center">
                      <WifiOff className="w-8 h-8 text-dots-tech" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-mono uppercase text-xs tracking-wider px-3 py-1.5 rounded-full bg-dots-tech/10 text-dots-tech border border-dots-tech/20 inline-block mb-4">
                      Zero Internet Dependency
                    </span>
                    <h3 className="font-heading text-display-sm text-ink mb-4">
                      AI That Works Offline
                    </h3>
                    <p className="text-body-md text-slate-700 mb-6">
                      Download once. Use forever. Your AI runs on phones,
                      tablets, and servers — no cloud bills, no internet needed.
                      Full Speech-to-Text, Text-to-Speech, and Language Models
                      on any device.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        "On-device inference",
                        "Works on iOS, Android, Web",
                        "GPU accelerated",
                        "OTA model updates",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-dots-tech" />
                          <span className="text-body-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      asChild
                    >
                      <Link to="/private-ai/without-internet">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Council */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 md:p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-dots-data/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-dots-data" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-mono uppercase text-xs tracking-wider px-3 py-1.5 rounded-full bg-dots-data/10 text-dots-data border border-dots-data/20 inline-block mb-4">
                      Multi-Model Intelligence
                    </span>
                    <h3 className="font-heading text-display-sm text-ink mb-4">
                      A Team of AIs, Not Just One
                    </h3>
                    <p className="text-body-md text-slate-700 mb-6">
                      No single AI is perfect at everything. Our AI Council uses
                      the best model for each task — Claude for deep thinking,
                      Gemini for speed, DeepSeek for offline. If one goes down,
                      others take over instantly.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        "Automatic failover",
                        "Best model for each task",
                        "Local + Cloud hybrid",
                        "Cost optimized",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-dots-data" />
                          <span className="text-body-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      asChild
                    >
                      <Link to="/private-ai/council">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card 3: AI Office */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 md:p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-dots-ops/10 flex items-center justify-center">
                      <Server className="w-8 h-8 text-dots-ops" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-mono uppercase text-xs tracking-wider px-3 py-1.5 rounded-full bg-dots-ops/10 text-dots-ops border border-dots-ops/20 inline-block mb-4">
                      Self-Hosted Infrastructure
                    </span>
                    <h3 className="font-heading text-display-sm text-ink mb-4">
                      Your Entire AI Office on One Server
                    </h3>
                    <p className="text-body-md text-slate-700 mb-6">
                      9 tools, one server, zero external dependencies. Private
                      search, chat interface, API gateway, database, and AI
                      models — all on hardware you control.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        "9 Docker containers",
                        "One-click setup",
                        "Full admin control",
                        "Zero vendor lock-in",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-dots-ops" />
                          <span className="text-body-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      asChild
                    >
                      <Link to="/private-ai/office">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Models Section */}
      <AnimatedSection className="py-20 md:py-28 lg:py-36 bg-ink text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-display-lg text-white text-center mb-6">
              We Are Not Any One Model.
            </h2>
            <p className="text-body-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
              We provide models we trust — Infinity-Max, DOTS-Basic, and more.
              But our vision is bigger.
            </p>

            <div className="text-center mb-16">
              <div className="inline-block">
                <h3 className="font-heading text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-dots-data via-dots-tech to-dots-strategy bg-clip-text text-transparent">
                  1,000,000 Models
                </h3>
                <p className="text-body-md text-white/60 mt-4 font-mono uppercase text-xs tracking-wider">
                  Tagged 'Built by ZeroOne DOTS.ai'
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Model Card 1 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h4 className="font-heading text-xl text-white mb-3">
                  Infinity-Max
                </h4>
                <p className="text-body-sm text-white/70">
                  Our flagship model. Deep reasoning, planning, strategy.
                </p>
              </div>

              {/* Model Card 2 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h4 className="font-heading text-xl text-white mb-3">
                  DOTS-Basic
                </h4>
                <p className="text-body-sm text-white/70">
                  Fast, reliable, cost-effective. Perfect for everyday tasks.
                </p>
              </div>

              {/* Model Card 3 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h4 className="font-heading text-xl text-white mb-3">
                  Your Custom Model
                </h4>
                <p className="text-body-sm text-white/70">
                  Built on your data. Trained for your industry. Patentable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ownership & IP Section */}
      <AnimatedSection className="py-20 md:py-28 lg:py-36 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-display-lg text-ink text-center mb-6">
              Totally Yours.{" "}
              <span className="text-plum italic">Fully Private.</span>
            </h2>
            <p className="text-body-lg text-slate-700 text-center mb-16 max-w-3xl mx-auto">
              We build your own AI. You own everything.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-dots-strategy/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-heading text-xl text-ink mb-3">
                  File a Patent
                </h3>
                <p className="text-body-md text-slate-700">
                  The AI we build for you is unique. You can patent it.
                </p>
              </div>

              {/* Column 2 */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-dots-data/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-heading text-xl text-ink mb-3">
                  Publish Research
                </h3>
                <p className="text-body-md text-slate-700">
                  Use your AI insights for academic papers and industry reports.
                </p>
              </div>

              {/* Column 3 */}
              <div className="bg-white border border-sand-200 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-dots-ops/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔓</span>
                </div>
                <h3 className="font-heading text-xl text-ink mb-3">
                  No Lock-In
                </h3>
                <p className="text-body-md text-slate-700">
                  Walk away anytime. Your code, your model, your data. No
                  strings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-dots-strategy/10 via-cream-50 to-dots-data/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-display-lg text-ink mb-6">
              Ready to Own Your AI?
            </h2>
            <p className="text-body-lg text-slate-700 mb-10 max-w-2xl mx-auto">
              Start with a free business check-up. We'll show you exactly how
              Private AI can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="brand"
                className="rounded-full font-semibold"
                onClick={() => handleCTAClick("final_cta_checkup")}
              >
                Get Your Free Check-Up
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold bg-white border-sand-200 hover:bg-cream-50"
                asChild
              >
                <a
                  href="https://wa.me/918320065658"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />

      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
        defaultSubject="Private AI Inquiry"
      />
    </>
  );
}
