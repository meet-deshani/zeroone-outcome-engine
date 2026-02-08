import { Link } from "react-router-dom";
import { ArrowRight, Database, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

const SocialProofSection = () => {
  const metrics = [
    {
      icon: Database,
      value: "10M+",
      label: "Data Points Processed",
      color: "text-dots-data",
    },
    {
      icon: TrendingDown,
      value: "90%+",
      label: "Less Manual Work",
      color: "text-dots-ops",
    },
    {
      icon: TrendingUp,
      value: "2x",
      label: "Faster Results",
      color: "text-dots-tech",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <h2 className="text-3xl font-heading text-ink mb-3">
              Real Results from Real Projects
            </h2>
            <p className="text-plum">
              Numbers that show what our AI tools have done for businesses like
              yours
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-sand-200 rounded-2xl p-6"
              >
                <metric.icon className={`${metric.color} mb-4`} size={32} />
                <div className="space-y-1">
                  <div
                    className={`text-4xl font-bold font-mono ${metric.color}`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-plum font-medium">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Link */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.45, ease: easing }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center text-ink hover:text-plum font-semibold group transition-colors"
            >
              See how we measure outcomes
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
