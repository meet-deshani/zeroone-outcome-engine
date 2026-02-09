import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Key, FileCheck, Server, CheckCircle2, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Security = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const securityFeatures = [
    {
      icon: Shield,
      title: "Only the Right People See the Right Data",
      description: "Access is scoped, reviewed, and time-bound with minimum needed privileges.",
    },
    {
      icon: Lock,
      title: "Your Data is Locked Up Tight",
      description: "AES (128/192/256) at rest; TLS 1.2+ in transit with TLS 1.3 roadmap.",
    },
    {
      icon: Eye,
      title: "We Only Use What We Need",
      description: "Collect/process only what's needed; prefer tokenization/redaction.",
    },
    {
      icon: FileCheck,
      title: "Our Code is Tested for Safety",
      description: "Build & test against OWASP ASVS controls with shift-left security in CI.",
    },
    {
      icon: Server,
      title: "Everything is Tracked and Recorded",
      description: "Comprehensive audit trails, access logs, and break-glass procedures.",
    },
    {
      icon: CheckCircle2,
      title: "We Follow Industry Standards",
      description: "SOC 2 Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy.",
    },
  ];

  const dataHandling = [
    {
      title: "How We Protect Private Info",
      points: [
        "Default to minimization",
        "Pseudonymize where feasible",
        "Manage secrets via KMS/Secret Manager",
        "Rotate keys regularly",
      ],
    },
    {
      title: "Data is Safe Whether Stored or Moving",
      points: [
        "AES at rest",
        "TLS 1.2+ in transit",
        "Migration track to TLS 1.3",
        "FIPS-compliant cipher suites",
      ],
    },
    {
      title: "Your Data Stays Where You Want",
      points: [
        "Per-customer isolation",
        "BYO-VPC option when required",
        "Data residency options",
        "NIST CSF alignment",
      ],
    },
  ];

  const benefits = [
    {
      title: "Lower Risk",
      description: "Measurable risk reduction through least-privilege design and strong cryptography.",
      icon: Shield,
    },
    {
      title: "Faster, Safer Change",
      description: "SLO-aware alerting and canary releases ensure safe deployments.",
      icon: Lock,
    },
    {
      title: "Easier Audits",
      description: "SOC 2-aligned controls and OWASP ASVS coverage simplify compliance.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <SEO
        title="Security — How We Keep Your Data Safe"
        description="Your data stays yours. Learn about our security practices, compliance standards, and how we protect your business information with enterprise-grade safeguards."
        keywords="AI data security India, data privacy AI consulting, secure AI solutions, compliance AI, enterprise security"
        canonical="https://zeroonedotsai.consulting/security"
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-dots-data/5 via-cream-50 to-dots-strategy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dots-data/10 border border-dots-data/20">
                <Shield className="text-ink" size={16} />
                <span className="text-sm text-ink font-semibold">
                  Responsible AI • Outcome First • Data Safeguard First
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                <span className="text-plum italic">Security</span> by Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We keep your data safe. Period.
              </p>

            </div>
          </div>
        </section>

        {/* Security Layer PDF */}
        <section className="py-20 md:py-28 bg-white border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.6em] text-muted-foreground">Security Layer PDF</p>
              <h2 className="text-3xl font-heading font-bold">
                Secure AI Middleware by DOTS.ai
              </h2>
              <p className="text-sm text-muted-foreground">
                This brief is built from the "Security by Design" narrative: it packs the posture-at-a-glance view, data handling policies (PII strategy, encryption, residency), identity & access controls, reliability practices, and the high-impact outcomes you can expect (lower risk, faster/safer change, easier audits).
              </p>
              <p className="text-sm text-muted-foreground">
                DOTS.ai runs outside your systems, talking only through APIs/webhooks, so no sensitive data leaves your perimeter. Every agent (Infinity CRM, Data, Ops, Tech, Strategy) operates with read-only signals and transmits metadata-only summaries.
              </p>
              <div className="inline-flex justify-center mt-6">
                <a
                  href="/ZeroOne_Security_Layer.pdf"
                  download="ZeroOne_Security_Layer.pdf"
                  className="inline-flex items-center gap-2 bg-ink text-white hover:bg-plum rounded-full px-7 py-3 font-semibold shadow-lg transition-all"
                >
                  <Download size={18} />
                  Download our Security Layer PDF
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Security Posture */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Security Posture <span className="text-plum italic">at a Glance</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <feature.icon className="text-dots-data mb-4" size={32} />
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-20 md:py-28 bg-cream-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Data <span className="text-plum italic">Handling</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {dataHandling.map((section, idx) => (
                  <div key={idx} className="bg-white border border-sand-200 rounded-2xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start text-sm">
                          <CheckCircle2 size={14} className="text-dots-ops mr-2 flex-shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Identity & Access, Reliability, Development */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-white border border-sand-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="text-ink" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Identity & Access</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Role-based access with auto-expiring credentials:</strong> Everyone gets only the access they need, and it expires automatically. We review permissions regularly.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>SSO & MFA:</strong> Strong authentication for admin and data-path roles.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-sand-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="text-ink" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Reliability & Operations</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>SLOs & error budgets:</strong> Alert on multi-window burn-rate policies tied to user impact.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Change safety:</strong> Canary/blue-green deployments with automatic rollback on SLO breach.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Incident response:</strong> Runbooks, post-incident reviews, and captured learnings.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-sand-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="text-ink" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Development Lifecycle</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Secure defaults:</strong> Templates enforce security checks; CI pipelines block on security tests.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-dots-ops mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Secrets management:</strong> No secrets in code; centralized KMS/Secret Manager; audit and rotation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What This Means */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-dots-data/5 via-cream-50 to-dots-strategy/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  What This Means <span className="text-plum italic">for You</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white border border-sand-200 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <benefit.icon className="mx-auto mb-4 text-dots-data" size={40} />
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-heading font-bold">
                Ready to Build Securely?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your security requirements and compliance needs.
              </p>
              <div className="pt-4">
                <Button
                  variant="brand"
                  size="lg"
                  className="font-semibold shadow-md"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Schedule a Security Review
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Schedule a Security Review"
      />

      <Footer />
    </div>
  );
};

export default Security;
