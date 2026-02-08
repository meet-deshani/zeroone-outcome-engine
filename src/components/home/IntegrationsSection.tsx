import { Database, Cloud, MessageSquare, Phone, Headphones, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Database, label: "Warehouses & DBs", color: "text-dots-data" },
  { icon: Cloud, label: "Cloud Platforms", color: "text-dots-strategy" },
  { icon: MessageSquare, label: "CRMs", color: "text-dots-ops" },
  { icon: Phone, label: "Dialers & IVR", color: "text-dots-tech" },
  { icon: Headphones, label: "Helpdesks", color: "text-dots-data" },
  { icon: BarChart3, label: "Analytics Tools", color: "text-dots-strategy" },
];

const ease = [0.16, 1, 0.3, 1];

const IntegrationsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-ink">
              Works with <span className="text-plum italic">tools you already use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We connect to the software your team already knows — no need to change anything.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                className="bg-white border border-sand-200 rounded-xl p-6 text-center"
              >
                <category.icon className={`mx-auto mb-3 ${category.color}`} size={32} />
                <p className="text-sm font-medium text-ink">{category.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="text-sm text-muted-foreground max-w-3xl mx-auto pt-4"
          >
            850+ connections to databases, CRMs, phone systems, support tools, and more.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
