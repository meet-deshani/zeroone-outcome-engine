import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, Settings, Code, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Smart Data Tools",
    description:
      "We organize your data so you can see exactly where money comes in and goes out.",
    outcomes: [
      "See all your numbers in one place",
      "Get alerts when something looks wrong",
      "Track what matters most to your business",
    ],
    pillar: "data" as const,
  },
  {
    icon: Settings,
    title: "Smoother Operations",
    description:
      "We automate the boring stuff so your team can focus on what matters.",
    outcomes: [
      "Automate repetitive tasks",
      "Speed up your workflows",
      "Reduce human errors",
    ],
    pillar: "ops" as const,
  },
  {
    icon: Code,
    title: "Custom Tech Solutions",
    description:
      "We build exactly what your business needs — no off-the-shelf compromises.",
    outcomes: [
      "Custom apps built for you",
      "Connect all your tools together",
      "AI assistants that work 24/7",
    ],
    pillar: "tech" as const,
  },
  {
    icon: Target,
    title: "Growth Strategy",
    description:
      "We help you make smarter decisions with clear data and proven plans.",
    outcomes: [
      "Find where you're losing money",
      "Plan your next big move",
      "Measure what's actually working",
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
              Everything Your Business{" "}
              <span className="text-plum italic">Needs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four pillars. One goal: help you make more money.
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
