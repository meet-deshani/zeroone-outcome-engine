import { Database, Cloud, MessageSquare, Phone, Headphones, BarChart3 } from "lucide-react";

const IntegrationsSection = () => {
  const categories = [
    { icon: Database, label: "Warehouses & DBs" },
    { icon: Cloud, label: "Cloud Platforms" },
    { icon: MessageSquare, label: "CRMs" },
    { icon: Phone, label: "Dialers & IVR" },
    { icon: Headphones, label: "Helpdesks" },
    { icon: BarChart3, label: "Analytics Tools" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-up">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Plays well with <span className="gradient-text">your stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect to warehouses, DBs, CRMs, dialers, helpdesks, and more.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              850+ integrations across data, communication, and analytics platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 hover-lift text-center"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <category.icon className="mx-auto mb-3 text-primary" size={32} />
                <p className="text-sm font-medium">{category.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground max-w-3xl mx-auto pt-4">
            Connect to your warehouses, CRMs, dialers, helpdesks, and analytics tools—without 
            ripping and replacing your stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
