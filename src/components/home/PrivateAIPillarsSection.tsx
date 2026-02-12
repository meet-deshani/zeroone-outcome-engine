import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WifiOff, Users, Server, ArrowRight } from "lucide-react";

const PrivateAIPillarsSection = () => {
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

  const pillars = [
    {
      icon: WifiOff,
      tag: "On-Device AI",
      tagColor: "text-dots-tech",
      bgColor: "bg-dots-tech/10",
      iconColor: "text-dots-tech",
      title: "AI That Works Offline",
      body: "Download once. Use forever. Full language models, speech-to-text, and voice synthesis — running on phones, tablets, and servers without internet.",
      bullets: [
        "Zero cloud dependency",
        "GPU accelerated on all devices",
        "Over-the-air model updates",
      ],
      link: "/private-ai/without-internet",
      linkText: "Explore AI Without Internet",
    },
    {
      icon: Users,
      tag: "Multi-Model Team",
      tagColor: "text-dots-data",
      bgColor: "bg-dots-data/10",
      iconColor: "text-dots-data",
      title: "A Team of AIs Working Together",
      body: "Not one AI — a whole team. Claude leads strategy, Gemini handles speed, DeepSeek runs offline. If one goes down, others take over instantly.",
      bullets: [
        "Automatic failover",
        "Best model for each task",
        "Cost optimized routing",
      ],
      link: "/private-ai/council",
      linkText: "Explore AI Council",
    },
    {
      icon: Server,
      tag: "Self-Hosted",
      tagColor: "text-dots-ops",
      bgColor: "bg-dots-ops/10",
      iconColor: "text-dots-ops",
      title: "Your Entire AI Office on One Server",
      body: "9 tools on one server. Private search, chat, AI models, APIs, and database — all on hardware you control. Zero external dependencies.",
      bullets: [
        "9 Docker containers",
        "Full admin control",
        "Zero vendor lock-in",
      ],
      link: "/private-ai/office",
      linkText: "Explore AI Office",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-display-lg text-ink mb-4">
            The Private AI <span className="text-plum italic">Platform</span>
          </h2>
          <p className="font-body text-body-lg text-slate-700 max-w-2xl mx-auto">
            Three pillars that give you complete control over your AI.
          </p>
        </div>

        {/* Pillar Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-cream-50 border border-sand-200 rounded-2xl p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${pillar.iconColor}`} />
                </div>

                {/* Tag */}
                <span
                  className={`font-mono text-xs uppercase tracking-wider ${pillar.tagColor} mb-4 inline-block`}
                >
                  {pillar.tag}
                </span>

                {/* Title */}
                <h3 className="font-heading text-display-sm text-ink mb-4">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="font-body text-body-md text-slate-700 leading-relaxed mb-6">
                  {pillar.body}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pillar.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="font-body text-body-sm text-slate-700 flex items-start"
                    >
                      <span className={`${pillar.iconColor} mr-2 mt-1`}>
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  to={pillar.link}
                  className={`font-body text-body-md ${pillar.tagColor} hover:underline inline-flex items-center gap-2 group`}
                >
                  {pillar.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateAIPillarsSection;
