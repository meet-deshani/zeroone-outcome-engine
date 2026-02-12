import { motion } from "framer-motion";
import { FileText, Zap, CheckCircle2 } from "lucide-react";
import BountyForm from "@/components/BountyForm";

const BountyEngineSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const steps = [
    {
      icon: FileText,
      title: "Post",
      description:
        "Describe your problem. Link a Google Doc with details. Name your price.",
      colorClass: "bg-dots-data/20",
      iconColor: "text-dots-data",
    },
    {
      icon: Zap,
      title: "Solve",
      description:
        "Community members pick your problem and build a solution using Private AI.",
      colorClass: "bg-dots-ops/20",
      iconColor: "text-dots-ops",
    },
    {
      icon: CheckCircle2,
      title: "Pay",
      description:
        "Review the solution. Approve it. Pay the bounty. Keep the IP.",
      colorClass: "bg-dots-strategy/20",
      iconColor: "text-dots-strategy",
    },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-ink text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-dots-data mb-4">
            BOUNTY ENGINE
          </p>
          <h2 className="font-heading text-display-lg text-white mb-4">
            Got a Problem?{" "}
            <span className="text-dots-data italic">Post a Bounty.</span>
          </h2>
          <p className="font-body text-body-lg text-cream-100 max-w-3xl mx-auto">
            Anyone on the internet can post a business problem, set a price, and
            our community of solvers builds the solution.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-charcoal/50 border border-plum/20 rounded-2xl p-8 hover:bg-charcoal/70 transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${step.colorClass} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-display-sm text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-body-md text-cream-100 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bounty Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BountyForm />
        </motion.div>
      </div>
    </section>
  );
};

export default BountyEngineSection;
