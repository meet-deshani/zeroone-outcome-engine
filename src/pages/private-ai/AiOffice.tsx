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
  Globe,
  MessageSquare,
  Bot,
  Brain,
  Search,
  Monitor,
  Code,
  Database,
  Shield,
  Server,
  CheckCircle2,
  Boxes,
} from "lucide-react";

export default function AiOffice() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleCTA = (location: string) => {
    logEvent("cta_click", {
      page: "private-ai-office",
      location,
    });
    setContactOpen(true);
  };

  return (
    <>
      <SEO
        title="AI Office — Your Complete AI Infrastructure on One Server"
        description="9 tools on one server. Private search, chat interface, AI models, APIs, and database — all self-hosted. Zero vendor lock-in. Full control."
        keywords="self-hosted AI, AI infrastructure, private AI server, AI office, Docker AI setup India"
        canonical="https://zeroonedotsai.consulting/private-ai/office"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-dots-ops/10 text-dots-ops font-mono text-sm uppercase tracking-wide mb-6">
                Self-Hosted Infrastructure
              </span>
              <h1 className="text-display-xl font-heading text-ink mb-6">
                Your Entire AI Office on <span className="text-plum italic">One Server</span>
              </h1>
              <p className="text-body-lg text-slate-700 mb-8 leading-relaxed">
                9 tools, one server, zero external dependencies. Everything your business needs to run AI — search, chat, automate, and serve — all on hardware you control.
              </p>
              <Button
                onClick={() => handleCTA("hero")}
                size="lg"
                className="bg-ink hover:bg-plum text-white rounded-full px-8 transition-all duration-200"
              >
                Get Your AI Office
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The 9 Tools */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                The 9 Tools
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Everything you need. Nothing you don't.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "nginx",
                title: "The Gateway",
                description: "Routes all traffic. SSL encryption. One front door for everything.",
                icon: Globe,
                color: "dots-data",
              },
              {
                name: "OpenClaw",
                title: "The Orchestrator",
                description: "Routes messages to the right AI. Manages WhatsApp, Telegram, and web chat.",
                icon: MessageSquare,
                color: "dots-ops",
              },
              {
                name: "Agent Zero",
                title: "The Autonomous Agent",
                description: "AI that can think, plan, and execute tasks independently.",
                icon: Bot,
                color: "dots-tech",
              },
              {
                name: "Ollama",
                title: "The Local Brain",
                description: "Runs AI models on your server. No internet needed. Free inference.",
                icon: Brain,
                color: "dots-strategy",
              },
              {
                name: "SearXNG",
                title: "Private Search",
                description: "Search the web without tracking. No data leaves your server.",
                icon: Search,
                color: "dots-data",
              },
              {
                name: "Open WebUI",
                title: "Chat Interface",
                description: "Talk to your AI through a clean, modern interface. Like ChatGPT, but private.",
                icon: Monitor,
                color: "dots-ops",
              },
              {
                name: "FastAPI",
                title: "Custom APIs",
                description: "Build and serve custom AI-powered APIs for your business apps.",
                icon: Code,
                color: "dots-tech",
              },
              {
                name: "PostgreSQL",
                title: "The Database",
                description: "Store everything securely. 4 databases, enterprise-grade reliability.",
                icon: Database,
                color: "dots-strategy",
              },
              {
                name: "Certbot",
                title: "SSL Security",
                description: "Automatic encryption. Every connection is secure. Auto-renewed certificates.",
                icon: Shield,
                color: "dots-data",
              },
            ].map((tool, idx) => (
              <AnimatedSection key={tool.name} delay={idx * 0.05}>
                <div className="bg-white border border-sand-200 rounded-2xl p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-12 h-12 rounded-full bg-${tool.color}/10 flex items-center justify-center mb-4`}>
                    <tool.icon className={`w-6 h-6 text-${tool.color}`} />
                  </div>
                  <div className="mb-2">
                    <span className="font-mono text-sm text-slate-500">
                      {tool.name}
                    </span>
                  </div>
                  <h3 className="text-display-sm font-heading text-ink mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {tool.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture at a Glance */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Architecture at a Glance
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Simple. Clean. Everything connected.
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-cream-100 border border-sand-200 rounded-2xl p-12">
            <div className="space-y-8">
              {/* Internet Entry */}
              <AnimatedSection delay={0.1}>
                <div className="flex items-center justify-center">
                  <div className="bg-ink text-white rounded-full px-6 py-3 font-semibold text-body-lg">
                    Internet
                  </div>
                </div>
              </AnimatedSection>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-8 bg-sand-200"></div>
              </div>

              {/* nginx */}
              <AnimatedSection delay={0.2}>
                <div className="flex items-center justify-center">
                  <div className="bg-dots-data/10 border-2 border-dots-data rounded-2xl px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-dots-data" />
                      <span className="font-heading text-display-sm text-ink">
                        nginx
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-8 bg-sand-200"></div>
              </div>

              {/* 9 Tools Grid */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white border-2 border-ink rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <span className="font-mono text-sm text-ink uppercase tracking-wide">
                      9 Tools Connected
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: MessageSquare, name: "OpenClaw" },
                      { icon: Bot, name: "Agent Zero" },
                      { icon: Brain, name: "Ollama" },
                      { icon: Search, name: "SearXNG" },
                      { icon: Monitor, name: "WebUI" },
                      { icon: Code, name: "FastAPI" },
                      { icon: Database, name: "PostgreSQL" },
                      { icon: Shield, name: "Certbot" },
                      { icon: Boxes, name: "Docker" },
                    ].map((tool) => (
                      <div
                        key={tool.name}
                        className="bg-cream-50 border border-sand-200 rounded-lg p-3 flex flex-col items-center gap-2"
                      >
                        <tool.icon className="w-5 h-5 text-ink" />
                        <span className="text-xs font-mono text-slate-600">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-8 bg-sand-200"></div>
              </div>

              {/* PostgreSQL */}
              <AnimatedSection delay={0.4}>
                <div className="flex items-center justify-center">
                  <div className="bg-dots-strategy/10 border-2 border-dots-strategy rounded-2xl px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Database className="w-6 h-6 text-dots-strategy" />
                      <span className="font-heading text-display-sm text-ink">
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                What You Get
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Three core benefits. Zero compromises.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "One Server",
                description: "Everything runs on one machine. No scattered services. No complex networking.",
                icon: Server,
                color: "dots-data",
              },
              {
                title: "Zero Dependencies",
                description: "Your AI office works even if every external service goes down.",
                icon: CheckCircle2,
                color: "dots-ops",
              },
              {
                title: "Full Control",
                description: "Admin access to everything. Customize, extend, and scale as you need.",
                icon: Shield,
                color: "dots-tech",
              },
            ].map((benefit, idx) => (
              <AnimatedSection key={benefit.title} delay={idx * 0.1}>
                <div className="bg-white border border-sand-200 rounded-2xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-full bg-${benefit.color}/10 flex items-center justify-center mb-6`}>
                    <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-display-sm font-heading text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Specs
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Enterprise-grade infrastructure in a single package.
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-white border border-sand-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {[
                  {
                    label: "Server",
                    value: "8 CPU cores, 32 GB RAM",
                  },
                  {
                    label: "Containers",
                    value: "9 Docker containers",
                  },
                  {
                    label: "SSL",
                    value: "Let's Encrypt auto-renewal",
                  },
                  {
                    label: "Database",
                    value: "PostgreSQL 17 with 4 databases",
                  },
                  {
                    label: "AI Models",
                    value: "Local models via Ollama",
                  },
                  {
                    label: "Network",
                    value: "Private Docker bridge network",
                  },
                ].map((spec, idx) => (
                  <tr
                    key={spec.label}
                    className={`border-b border-sand-200 last:border-0 ${
                      idx % 2 === 0 ? "bg-cream-50" : "bg-white"
                    }`}
                  >
                    <td className="p-6 text-body-md font-semibold text-ink w-1/3">
                      {spec.label}
                    </td>
                    <td className="p-6 text-body-md text-slate-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ink to-plum text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display-lg font-heading mb-6">
              Ready for Your Own AI Office?
            </h2>
            <p className="text-body-lg mb-8 opacity-90">
              Let's build your self-hosted AI infrastructure — 9 tools, one server, full control.
            </p>
            <Button
              onClick={() => handleCTA("final")}
              size="lg"
              variant="outline"
              className="bg-white text-ink hover:bg-cream-50 border-0 rounded-full px-8"
            >
              Get Started
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
        defaultSubject="Private AI — AI Office Inquiry"
      />
    </>
  );
}
