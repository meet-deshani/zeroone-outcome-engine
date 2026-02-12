import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const caseStudies = [
  {
    title: "Personal Injury Law",
    industry: "Legal Tech",
    pillar: "data" as const,
    problem: "They were losing clients who called after work hours.",
    agentDeployed: "24/7 AI Voice Intake & Discovery Engine",
    agentDescription:
      "A voice agent that captures leads instantly and a semantic document reviewer that flags critical case evidence.",
    outcome:
      "Now they catch every call. They make 5x more money from new clients.",
    metrics: [
      { label: "5x ROI", icon: "💰" },
      { label: "40% less review time", icon: "⏱️" },
      { label: "35% conversion lift", icon: "📈" },
    ],
  },
  {
    title: "3PL Logistics & Supply Chain",
    industry: "Logistics",
    pillar: "ops" as const,
    problem:
      "Wrong invoices were slowing down payments and costing them money.",
    agentDeployed: "OCR Invoice Matcher + Predictive ETA Agent",
    agentDescription:
      "Automated matching of POs to Invoices with 99% accuracy and predictive route flagging pushed to WhatsApp.",
    outcome:
      "Now invoices match automatically. They save 70% on processing costs.",
    metrics: [
      { label: "70% cost reduction", icon: "📉" },
      { label: "50% faster invoicing", icon: "⚡" },
      { label: "8L/year saved", icon: "💰" },
    ],
  },
  {
    title: "D2C E-Commerce",
    industry: "D2C E-Commerce",
    pillar: "tech" as const,
    problem: "Too many product returns were eating up their profits.",
    agentDeployed: "Predictive RTO Guard & Creative Velocity Agent",
    agentDescription:
      "Analyzes customer profiles to flag high-RTO risks before shipping and generates 10x the ad creative volume.",
    outcome:
      "Now they catch risky orders before shipping. They saved 15% of lost profits.",
    metrics: [
      { label: "15% margin recovery", icon: "💰" },
      { label: "20% ROAS increase", icon: "📈" },
      { label: "3-month ROI", icon: "⚡" },
    ],
  },
];

const pillarStyles = {
  data: {
    tag: "bg-dots-data/10 text-dots-data border border-dots-data/20 px-3 py-1 rounded-full text-xs font-mono uppercase",
    border: "border-dots-data",
    text: "text-dots-data",
  },
  ops: {
    tag: "bg-dots-ops/10 text-dots-ops border border-dots-ops/20 px-3 py-1 rounded-full text-xs font-mono uppercase",
    border: "border-dots-ops",
    text: "text-dots-ops",
  },
  tech: {
    tag: "bg-dots-tech/10 text-dots-tech border border-dots-tech/20 px-3 py-1 rounded-full text-xs font-mono uppercase",
    border: "border-dots-tech",
    text: "text-dots-tech",
  },
  strategy: {
    tag: "bg-dots-strategy/10 text-dots-strategy border border-dots-strategy/20 px-3 py-1 rounded-full text-xs font-mono uppercase",
    border: "border-dots-strategy",
    text: "text-dots-strategy",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CaseStudiesSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              How We've{" "}
              <span className="text-plum italic">Helped Others</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories about businesses using Private AI to solve real problems.
              All solutions deployed on client-owned infrastructure.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {caseStudies.map((study, index) => {
              const styles = pillarStyles[study.pillar];

              return (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  className="bg-white border border-sand-200 rounded-2xl shadow-sm group hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                >
                  <div className="p-6">
                    {/* Pillar Tag */}
                    <div className="flex justify-center mb-4">
                      <span className={styles.tag}>{study.industry}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl font-bold mb-4 text-center text-ink">
                      {study.title}
                    </h3>

                    <div className="space-y-4 text-sm">
                      {/* Problem */}
                      <div className="border-l-2 border-destructive pl-3">
                        <p className="font-semibold text-destructive mb-1 uppercase text-xs tracking-wide">
                          Problem
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      {/* AI Agent Deployed */}
                      <div
                        className={`border-l-2 ${styles.border} pl-3`}
                      >
                        <p
                          className={`font-semibold ${styles.text} mb-1 uppercase text-xs tracking-wide`}
                        >
                          AI Agent Deployed
                        </p>
                        <p className="text-foreground font-semibold">
                          {study.agentDeployed}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                          {study.agentDescription}
                        </p>
                      </div>

                      {/* Outcome */}
                      <div className="bg-cream-100 border border-sand-200 rounded-lg p-3">
                        <p
                          className={`font-semibold ${styles.text} mb-2 uppercase text-xs tracking-wide flex items-center gap-1`}
                        >
                          <TrendingUp size={14} />
                          Outcome
                        </p>
                        <p className="text-foreground font-medium leading-relaxed">
                          {study.outcome}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        {study.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs"
                          >
                            <span className="text-lg">{metric.icon}</span>
                            <span className="font-medium text-foreground">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Footer note */}
                      <div className="pt-3 border-t border-sand-200">
                        <p className="text-xs text-muted-foreground italic text-center">
                          Deployed on client-owned infrastructure
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="brand"
              size="lg"
              className="font-semibold"
              onClick={() => setIsContactFormOpen(true)}
            >
              See More Success Stories
            </Button>
          </motion.div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Launch My Agent"
      />
    </section>
  );
};

export default CaseStudiesSection;
