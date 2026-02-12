import { motion } from "framer-motion";
import { WifiOff, Shield, CheckCircle2 } from "lucide-react";

const VisionSection = () => {
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

  const promises = [
    {
      icon: WifiOff,
      title: "AI Without Internet",
      description:
        "Your AI works even when the internet goes down. Download once, use forever. No cloud bills.",
      colorClass: "bg-dots-data/10",
      iconColor: "text-dots-data",
    },
    {
      icon: Shield,
      title: "100% Yours",
      description:
        "We build your AI to your exact needs. You own the code, the model, everything. File a patent if you want.",
      colorClass: "bg-dots-ops/10",
      iconColor: "text-dots-ops",
    },
    {
      icon: CheckCircle2,
      title: "Consistent Quality",
      description:
        "Not a single output misses our quality benchmark. 100% reliable, every time.",
      colorClass: "bg-dots-strategy/10",
      iconColor: "text-dots-strategy",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-display-lg text-ink mb-4">
            Our <span className="text-plum italic">Promise</span>
          </h2>
          <p className="font-body text-body-lg text-slate-700 max-w-2xl mx-auto">
            Three things we will never compromise on.
          </p>
        </div>

        {/* Promise Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${promise.colorClass} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${promise.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-display-sm text-ink mb-4">
                  {promise.title}
                </h3>

                {/* Description */}
                <p className="font-body text-body-md text-slate-700 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
