import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Hammer, Rocket } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ApproachSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      phase: "1",
      title: "Check-Up",
      description:
        "We look at your business data to find where money is being wasted.",
      deliverables: ["Health Score", "Waste Report", "Growth Plan"],
      color: "text-dots-data",
      bgColor: "bg-dots-data/15",
      pillColor: "bg-dots-data/15 text-dots-data",
    },
    {
      icon: Hammer,
      phase: "2",
      title: "Build & Fix",
      description:
        "We build smart tools that fix the problems we found. You don't pay until it works.",
      deliverables: ["Custom Dashboards", "Easy Interface", "Live Updates"],
      color: "text-dots-ops",
      bgColor: "bg-dots-ops/15",
      pillColor: "bg-dots-ops/15 text-dots-ops",
    },
    {
      icon: Rocket,
      phase: "3",
      title: "Grow",
      description:
        "Now that you can see everything clearly, we help you make more money.",
      deliverables: ["Save Money", "Keep Customers", "Grow Revenue"],
      color: "text-dots-strategy",
      bgColor: "bg-dots-strategy/15",
      pillColor: "bg-dots-strategy/15 text-dots-strategy",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink">
              How We{" "}
              <span className="text-plum italic">Work</span>
            </h2>
            <p className="text-xl text-ink/70 max-w-2xl mx-auto">
              From finding the problem to fixing it — in 3 simple steps.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-dots-data via-dots-ops to-dots-strategy -translate-y-1/2" />

            {/* Steps Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Card */}
                  <div className="bg-white border border-sand-200 rounded-2xl p-8 h-full transition-transform hover:-translate-y-1">
                    {/* Icon Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`relative w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-sm transition-all hover:scale-110`}
                      >
                        <step.icon
                          className={step.color}
                          size={36}
                          strokeWidth={2.5}
                        />
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-white to-cream-50 flex items-center justify-center shadow-sm">
                          <span
                            className={`text-2xl font-bold font-mono ${step.color}`}
                          >
                            {step.phase}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-heading font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="text-ink/70">{step.description}</p>

                      {/* Deliverables */}
                      <div className="pt-4 space-y-2">
                        {step.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className={`inline-block px-3 py-1 rounded-full ${step.pillColor} text-sm font-medium mr-2 mb-2`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Outcome Highlight */}
          <motion.div
            className="mt-12 text-center bg-white border border-sand-200 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-dots-data/10 text-ink font-semibold mb-4">
              Key Principle
            </div>
            <p className="text-lg text-ink/70 max-w-3xl mx-auto">
              We only charge you when you're happy with the results.{" "}
              <span className="font-bold text-ink">
                The check-up is free.
              </span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              variant="brand"
              className="font-semibold"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Your Free Check-Up
            </Button>
          </motion.div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Get Free Check-Up"
      />
    </section>
  );
};

export default ApproachSection;
