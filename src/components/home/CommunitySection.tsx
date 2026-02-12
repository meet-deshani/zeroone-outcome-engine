import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Cpu,
  Code,
  TrendingUp,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
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

  const roles = [
    {
      icon: Lightbulb,
      title: "Founder",
      description:
        "One goal: Making AI private, free for all, and cutting out internet dependency.",
      colorClass: "bg-dots-data/10",
      iconColor: "text-dots-data",
    },
    {
      icon: Cpu,
      title: "AI Engineers",
      description:
        "Building the core models and infrastructure that power Private AI.",
      colorClass: "bg-dots-ops/10",
      iconColor: "text-dots-ops",
    },
    {
      icon: Code,
      title: "Vibe Coders",
      description:
        "Building wrappers and tools using Private AI. Real-world testing and practical applications.",
      colorClass: "bg-dots-tech/10",
      iconColor: "text-dots-tech",
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurs & Supporters",
      description:
        "Funding, backing, and championing the Private AI movement.",
      colorClass: "bg-dots-strategy/10",
      iconColor: "text-dots-strategy",
    },
    {
      icon: GraduationCap,
      title: "Trainers",
      description:
        "Teaching the next generation of AI builders. Making knowledge accessible.",
      colorClass: "bg-dots-data/10",
      iconColor: "text-dots-data",
    },
    {
      icon: BookOpen,
      title: "Learners",
      description:
        "Getting hands-on with Private AI. Tomorrow's engineers start here.",
      colorClass: "bg-dots-ops/10",
      iconColor: "text-dots-ops",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-display-lg text-ink mb-4">
            A Community of <span className="text-plum italic">Solvers</span>
          </h2>
          <p className="font-body text-body-lg text-slate-700 max-w-2xl mx-auto">
            One mission: Make AI private, free, and accessible for every
            business.
          </p>
        </div>

        {/* Role Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-sand-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${role.colorClass} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${role.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-display-sm text-ink mb-3">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="font-body text-body-sm text-slate-700 leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/community">
            <Button variant="brand" size="lg" className="rounded-full">
              Join the Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
