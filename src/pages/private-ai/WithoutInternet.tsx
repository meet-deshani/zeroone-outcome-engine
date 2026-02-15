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
  Download,
  Cpu,
  MapPin,
  RefreshCw,
  Brain,
  Mic,
  Volume2,
  Ear,
  Apple,
  Smartphone,
  Layers,
  Wind,
  Globe as GlobeIcon,
  Box,
  Stethoscope,
  Factory,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function WithoutInternet() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleCTA = (location: string) => {
    logEvent("cta_click", {
      page: "private-ai-without-internet",
      location,
    });
    setContactOpen(true);
  };

  return (
    <>
      <SEO
        title="AI Without Internet — On-Device AI That Works Offline"
        description="Run AI on any device without internet. Speech-to-text, language models, and voice synthesis — all offline. Built by ZeroOne for businesses that need reliable AI everywhere."
        keywords="offline AI, on-device AI, AI without internet, private AI mobile, edge AI India"
        canonical="https://zeroonedotsai.consulting/private-ai/without-internet"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can AI work without internet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Modern AI models can be downloaded once and run entirely on-device — phones, tablets, or servers. No internet needed after the initial download."
              }
            },
            {
              "@type": "Question",
              "name": "What can offline AI do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Offline AI can run language models (chat, text generation), speech-to-text transcription, text-to-speech synthesis, and voice activity detection — all without any internet connection."
              }
            },
            {
              "@type": "Question",
              "name": "Which devices support offline AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Offline AI works on iOS (Swift with Metal GPU), Android (Kotlin), React Native, Flutter, web browsers, and edge devices like IoT sensors, wearables, and AR glasses."
              }
            },
            {
              "@type": "Question",
              "name": "How do offline AI models get updated?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Models update over-the-air when connectivity is available. The AI works offline between updates, and new model versions download automatically when the device connects to the internet."
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
              <span className="inline-block px-4 py-2 rounded-full bg-dots-tech/10 text-dots-tech font-mono text-sm uppercase tracking-wide mb-6">
                Zero Internet Dependency
              </span>
              <h1 className="text-display-xl font-heading text-ink mb-6">
                AI That Works <span className="text-plum italic">Without Internet</span>
              </h1>
              <p className="text-body-lg text-slate-700 mb-8 leading-relaxed">
                Download once. Use forever. Your AI runs on any device — phones, tablets, servers. No cloud bills. No data leaves your building.
              </p>
              <Button
                onClick={() => handleCTA("hero")}
                size="lg"
                className="bg-ink hover:bg-plum text-white rounded-full px-8 transition-all duration-200"
              >
                Get a Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                How It Works
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Four simple steps. Your AI becomes completely independent.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Download",
                description: "Your custom AI model downloads to the device once.",
                icon: Download,
                color: "dots-data",
              },
              {
                step: "2",
                title: "Process Locally",
                description: "All AI processing happens on the device. Zero data sent anywhere.",
                icon: Cpu,
                color: "dots-ops",
              },
              {
                step: "3",
                title: "Use Anywhere",
                description: "Works in remote clinics, factory floors, field sales — anywhere.",
                icon: MapPin,
                color: "dots-tech",
              },
              {
                step: "4",
                title: "Update Smartly",
                description: "Models update over-the-air when connectivity is available.",
                icon: RefreshCw,
                color: "dots-strategy",
              },
            ].map((step, idx) => (
              <AnimatedSection key={step.step} delay={idx * 0.1}>
                <div className="bg-white border border-sand-200 rounded-2xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-12 h-12 rounded-full bg-${step.color}/10 flex items-center justify-center mb-4`}>
                    <step.icon className={`w-6 h-6 text-${step.color}`} />
                  </div>
                  <div className={`text-${step.color} font-mono text-sm mb-2`}>
                    Step {step.step}
                  </div>
                  <h3 className="text-display-sm font-heading text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Capabilities
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Full AI power. Zero internet required.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Language Models (LLM)",
                description: "Full conversational AI. Ask questions, get answers, generate text — all offline.",
                icon: Brain,
                color: "dots-data",
              },
              {
                title: "Speech-to-Text",
                description: "Real-time voice transcription in multiple languages. No cloud required.",
                icon: Mic,
                color: "dots-ops",
              },
              {
                title: "Text-to-Speech",
                description: "Natural voice synthesis. Your AI can talk back to users.",
                icon: Volume2,
                color: "dots-tech",
              },
              {
                title: "Voice Activity Detection",
                description: "Knows when someone is speaking. Enables hands-free AI interactions.",
                icon: Ear,
                color: "dots-strategy",
              },
            ].map((capability, idx) => (
              <AnimatedSection key={capability.title} delay={idx * 0.1}>
                <div className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-full bg-${capability.color}/10 flex items-center justify-center mb-6`}>
                    <capability.icon className={`w-8 h-8 text-${capability.color}`} />
                  </div>
                  <h3 className="text-display-sm font-heading text-ink mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {capability.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Platform Support
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                One AI. Every device. Any platform.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                platform: "iOS (Swift)",
                description: "Metal GPU acceleration for blazing speed",
                icon: Apple,
              },
              {
                platform: "Android (Kotlin)",
                description: "Full GPU support on any Android device",
                icon: Smartphone,
              },
              {
                platform: "React Native",
                description: "Cross-platform with one codebase",
                icon: Layers,
              },
              {
                platform: "Flutter",
                description: "Beautiful native apps with offline AI",
                icon: Wind,
              },
              {
                platform: "Web Browsers",
                description: "Run AI in the browser",
                icon: GlobeIcon,
              },
              {
                platform: "Edge Devices",
                description: "IoT, wearables, AR glasses",
                icon: Box,
              },
            ].map((platform, idx) => (
              <AnimatedSection key={platform.platform} delay={idx * 0.1}>
                <div className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <platform.icon className="w-10 h-10 text-ink mb-4" />
                  <h3 className="text-display-sm font-heading text-ink mb-2">
                    {platform.platform}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {platform.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-heading text-ink mb-4">
                Use Cases
              </h2>
              <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                Real businesses. Real problems solved.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare",
                description: "Remote clinics where internet is unreliable. AI assists diagnosis offline.",
                icon: Stethoscope,
                color: "dots-data",
              },
              {
                industry: "Manufacturing",
                description: "Factory floors where cloud latency is unacceptable. Real-time quality checks.",
                icon: Factory,
                color: "dots-ops",
              },
              {
                industry: "Field Sales",
                description: "Sales teams in rural areas. AI-powered quotes and recommendations without signal.",
                icon: Briefcase,
                color: "dots-tech",
              },
            ].map((useCase, idx) => (
              <AnimatedSection key={useCase.industry} delay={idx * 0.1}>
                <div className="bg-cream-100 border border-sand-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-full bg-${useCase.color}/10 flex items-center justify-center mb-6`}>
                    <useCase.icon className={`w-8 h-8 text-${useCase.color}`} />
                  </div>
                  <h3 className="text-display-sm font-heading text-ink mb-3">
                    {useCase.industry}
                  </h3>
                  <p className="text-body-md text-slate-700">
                    {useCase.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-body-lg text-slate-700 mb-4">
              Want the full breakdown of what works offline in 2026?
            </p>
            <Link
              to="/resources/offline-ai-guide"
              className="inline-flex items-center gap-2 text-plum font-semibold hover:underline text-body-lg"
            >
              Read the Full Offline AI Guide <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ink to-plum text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display-lg font-heading mb-6">
              Ready for AI That Never Goes Offline?
            </h2>
            <p className="text-body-lg mb-8 opacity-90">
              Let's build AI that works anywhere — no internet required.
            </p>
            <Button
              onClick={() => handleCTA("final")}
              size="lg"
              variant="outline"
              className="bg-white text-ink hover:bg-cream-50 border-0 rounded-full px-8"
            >
              Schedule a Demo
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
        defaultSubject="Private AI — Without Internet Inquiry"
      />
    </>
  );
}
