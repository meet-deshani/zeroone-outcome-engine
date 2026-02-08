import { Target, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

const moats = [
  {
    icon: Target,
    title: "Problem Solving First",
    description:
      "We start by finding the real problem — not just what looks broken.",
    iconBg: "bg-dots-data/15",
    iconColor: "text-dots-data",
  },
  {
    icon: DollarSign,
    title: "Outcome First — Zero Billing",
    description: "You don't pay us anything until you see real results.",
    iconBg: "bg-dots-ops/15",
    iconColor: "text-dots-ops",
  },
  {
    icon: Shield,
    title: "Data Safeguard First",
    description:
      "Your data stays safe. We use smart tools so only you can see your numbers.",
    iconBg: "bg-dots-strategy/15",
    iconColor: "text-dots-strategy",
  },
];

const MoatSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="text-plum italic">Moat</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Three promises we make to every client
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {moats.map((moat, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-sand-200 rounded-2xl shadow-sm p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: easing,
                  delay: idx * 0.12,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${moat.iconBg} flex items-center justify-center mx-auto mb-6 shadow-sm`}
                >
                  <moat.icon className={moat.iconColor} size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {moat.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {moat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoatSection;
