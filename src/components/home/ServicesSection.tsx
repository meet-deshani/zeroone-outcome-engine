import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, Settings, Code, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Private Data Intelligence",
    description:
      "Your data stays on your servers. Our AI finds patterns, flags issues, and gives you clear answers — privately.",
    outcomes: [
      "AI-powered analytics on your own infrastructure",
      "Alerts when something looks wrong — no data leaves your servers",
      "Dashboards that update in real-time, fully offline-capable",
    ],
    pillar: "data" as const,
  },
  {
    icon: Settings,
    title: "AI-Powered Operations",
    description:
      "Automate the boring stuff with AI that runs on your machines. No cloud. No subscriptions.",
    outcomes: [
      "Automate repetitive tasks with private AI agents",
      "Speed up workflows without sending data outside",
      "Reduce errors with consistent, owned AI",
    ],
    pillar: "ops" as const,
  },
  {
    icon: Code,
    title: "Built-to-Own Technology",
    description:
      "We build AI solutions that are 100% yours. File a patent. Publish research. No lock-in.",
    outcomes: [
      "Custom AI models trained on your data",
      "Full source code ownership — no vendor lock-in",
      "Patent-ready intellectual property",
    ],
    pillar: "tech" as const,
  },
  {
    icon: Target,
    title: "AI Growth Strategy",
    description:
      "Use private AI to find growth opportunities and make smarter decisions with your own data.",
    outcomes: [
      "AI-driven insights from your private data",
      "Roadmaps for scaling AI across your business",
      "Measure ROI with tools you control",
    ],
    pillar: "strategy" as const,
  },
];

const pillarStyles = {
  data: {
    iconBg: "bg-dots-data/15",
    iconText: "text-dots-data",
    dot: "bg-dots-data",
  },
  ops: {
    iconBg: "bg-dots-ops/15",
    iconText: "text-dots-ops",
    dot: "bg-dots-ops",
  },
  tech: {
    iconBg: "bg-dots-tech/15",
    iconText: "text-dots-tech",
    dot: "bg-dots-tech",
  },
  strategy: {
    iconBg: "bg-dots-strategy/15",
    iconText: "text-dots-strategy",
    dot: "bg-dots-strategy",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              How Private AI Grows{" "}
              <span className="text-plum italic">Your Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four pillars. One goal: AI that you own, running on your terms.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const styles = pillarStyles[service.pillar];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group bg-white border border-sand-200 rounded-2xl p-8 group-hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-6`}
                  >
                    <service.icon
                      className={styles.iconText}
                      size={28}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Outcomes List */}
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full ${styles.dot} mt-2 mr-3 flex-shrink-0`}
                        />
                        <span className="text-muted-foreground leading-relaxed">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
