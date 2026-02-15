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
import {
  Brain,
  Code,
  Zap,
  Server,
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

export default function AiCouncil() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleCTA = (location: string) => {
    logEvent("cta_click", {
      page: "private-ai-council",
      location,
    });
    setContactOpen(true);
  };

  return (
    <>
      <SEO
        title="AI Council — A Team of AIs Working Together"
        description="No single AI is perfect. Our AI Council uses Claude, Gemini, and DeepSeek together — automatic failover, cost optimization, and the right model for every task."
        keywords="AI council, multi-model AI, AI failover, AI team, AI orchestration India"
        canonical="https://zeroonedotsai.consulting/private-ai/council"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an AI Council?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI Council is a team of multiple AI models working together. Instead of relying on one AI, different models handle different tasks — the best model for each job, with automatic failover if one goes down."
              }
            },
            {
              "@type": "Question",
              "name": "Why use multiple AI models instead of one?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No single AI is perfect at everything. Some are great at reasoning, others at speed, others at cost efficiency. A multi-model approach gives you the best of each, plus redundancy if one provider has an outage."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI failover work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When the primary AI model is unavailable, the system automatically routes the request to the next model in line. This happens instantly — your users never notice any downtime."
              }
            },
            {
              "@type": "Question",
              "name": "Does the AI Council work offline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The Council includes a local model (DeepSeek R1) that runs on your server without internet. Even if all cloud providers go down, you still have AI available."
              }
            }
          ]
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-dots-data/10 text-dots-data font-mono text-sm uppercase tracking-wide mb-6">
                Multi-Model Intelligence
              </span>
              <h1 className="text-display-xl font-heading text-ink mb-6">
                A Team of AIs, <span className="text-plum italic">Not Just One</span>
              </h1>
              <p className="text-body-lg text-slate-700 mb-8 leading-relaxed">
                No single AI is perfect at everything. Our AI Council uses a team of specialized models — each doing what they're best at. If one goes down, others take over instantly.
              </p>
              <Button
                onClick={() => handleCTA("hero")}
                size="lg"
                className="bg-ink hover:bg-plum text-white rounded-full px-8 transition-all duration-200"
              >
                Build Your AI Council
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                The Team
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Four specialized AIs. Each with a specific role. All working together.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                role: "CEO",
                name: "Claude",
                title: "The Brain",
                description: "Handles deep reasoning, architecture decisions, and complex planning. When the problem is hard, Claude solves it.",
                icon: Brain,
                color: "dots-data",
                bgColor: "bg-dots-data/5",
              },
              {
                role: "CTO",
                name: "Gemini Pro",
                title: "The Technical Expert",
                description: "Code generation, analysis, and balanced workloads. Fast and versatile.",
                icon: Code,
                color: "dots-ops",
                bgColor: "bg-dots-ops/5",
              },
              {
                role: "COO",
                name: "Gemini Flash",
                title: "The Speed Runner",
                description: "Quick responses, summaries, routine tasks. Gets everyday work done fast.",
                icon: Zap,
                color: "dots-tech",
                bgColor: "bg-dots-tech/5",
              },
              {
                role: "Team",
                name: "DeepSeek R1",
                title: "The Offline Worker",
                description: "Runs on your server. No internet needed. Always available, even when everything else is down.",
                icon: Server,
                color: "dots-strategy",
                bgColor: "bg-dots-strategy/5",
              },
            ].map((member, idx) => (
              <AnimatedSection key={member.name} delay={idx * 0.1}>
                <div className={`${member.bgColor} border border-sand-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-full bg-${member.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <member.icon className={`w-8 h-8 text-${member.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-${member.color} font-mono text-sm uppercase tracking-wide`}>
                          {member.role}
                        </span>
                        <span className="text-slate-400">—</span>
                        <h3 className="text-display-sm font-heading text-ink">
                          {member.name}
                        </h3>
                      </div>
                      <p className="text-body-lg font-semibold text-ink mb-2">
                        {member.title}
                      </p>
                      <p className="text-body-md text-slate-700">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Failover Works */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                How Failover Works
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Someone always answers. Automatic failover ensures zero downtime.
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-white border border-sand-200 rounded-2xl p-12">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  text: "Message arrives",
                  color: "ink",
                },
                {
                  step: 2,
                  text: "Try CEO (Claude)",
                  subtext: "If unavailable →",
                  color: "dots-data",
                },
                {
                  step: 3,
                  text: "Try CTO (Gemini Pro)",
                  subtext: "If unavailable →",
                  color: "dots-ops",
                },
                {
                  step: 4,
                  text: "Try COO (Gemini Flash)",
                  subtext: "If unavailable →",
                  color: "dots-tech",
                },
                {
                  step: 5,
                  text: "Try Team (DeepSeek local)",
                  color: "dots-strategy",
                },
                {
                  step: 6,
                  text: "Someone always answers.",
                  color: "plum",
                  isFinal: true,
                },
              ].map((item, idx) => (
                <AnimatedSection key={item.step} delay={idx * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${item.isFinal ? 'bg-plum' : `bg-${item.color}/10`} flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-mono text-sm font-bold ${item.isFinal ? 'text-white' : `text-${item.color}`}`}>
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-body-lg font-semibold ${item.isFinal ? 'text-plum italic' : 'text-ink'}`}>
                        {item.text}
                      </p>
                      {item.subtext && (
                        <p className="text-body-sm text-slate-500 mt-1">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                    {!item.isFinal && (
                      <ArrowRight className="w-5 h-5 text-sand-200" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why a Team Beats One AI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Why a Team Beats One AI
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                The problems with relying on a single model — solved.
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-white border border-sand-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-100">
                <tr>
                  <th className="text-left p-6 text-body-md font-semibold text-ink border-b border-sand-200">
                    Problem
                  </th>
                  <th className="text-left p-6 text-body-md font-semibold text-ink border-b border-sand-200">
                    Single AI
                  </th>
                  <th className="text-left p-6 text-body-md font-semibold text-ink border-b border-sand-200">
                    AI Council
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    problem: "One goes down",
                    single: "Everything stops",
                    council: "Others take over",
                    singleBad: true,
                  },
                  {
                    problem: "Complex task",
                    single: "Slow or inaccurate",
                    council: "Best model handles it",
                    singleBad: true,
                  },
                  {
                    problem: "High costs",
                    single: "Pay premium for everything",
                    council: "Mix of premium and free",
                    singleBad: true,
                  },
                  {
                    problem: "Privacy needs",
                    single: "Cloud only",
                    council: "Local option available",
                    singleBad: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-sand-200 last:border-0">
                    <td className="p-6 text-body-md text-ink font-semibold">
                      {row.problem}
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-body-md text-slate-700">
                          {row.single}
                        </span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-body-md text-slate-700">
                          {row.council}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="py-24 md:py-32 bg-ink text-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-display-lg font-heading mb-4">
                Cost Optimization
              </h2>
              <p className="text-body-lg opacity-90 max-w-2xl mx-auto mb-12">
                The right AI for the right task.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {[
                {
                  tier: "CEO",
                  name: "Claude",
                  quality: "Highest Quality",
                  cost: "Highest Cost",
                  color: "dots-data",
                },
                {
                  tier: "CTO",
                  name: "Gemini Pro",
                  quality: "High Quality",
                  cost: "Balanced Cost",
                  color: "dots-ops",
                },
                {
                  tier: "COO",
                  name: "Flash",
                  quality: "Fast",
                  cost: "Low Cost",
                  color: "dots-tech",
                },
                {
                  tier: "Team",
                  name: "DeepSeek",
                  quality: "Local",
                  cost: "Free",
                  color: "dots-strategy",
                },
              ].map((tier, idx) => (
                <div
                  key={tier.tier}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <div className="text-white/60 font-mono text-sm uppercase tracking-wide mb-2">
                    {tier.tier}
                  </div>
                  <h3 className="text-display-sm font-heading text-white mb-3">
                    {tier.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-body-sm text-white/80">
                      {tier.quality}
                    </p>
                    <p className="text-body-sm text-white/60">
                      {tier.cost}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-body-lg text-white/90">
                Most tasks don't need the CEO. Your AI Council routes each question to the most cost-effective model that can handle it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-body-lg text-slate-700 mb-4">
              Want to understand AI Councils in depth?
            </p>
            <Link
              to="/resources/ai-council-guide"
              className="inline-flex items-center gap-2 text-plum font-semibold hover:underline text-body-lg"
            >
              Read the Full AI Council Guide <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-dots-data via-dots-ops to-dots-strategy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display-lg font-heading text-ink mb-6">
              Ready for an AI Team That Never Stops?
            </h2>
            <p className="text-body-lg text-slate-700 mb-8">
              Let's build your AI Council — automatic failover, cost optimization, and the right model for every task.
            </p>
            <Button
              onClick={() => handleCTA("final")}
              size="lg"
              className="bg-ink hover:bg-plum text-white rounded-full px-8"
            >
              Build Your Council
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
        defaultSubject="Private AI — AI Council Inquiry"
      />
    </>
  );
}
