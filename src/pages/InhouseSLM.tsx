import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Server, ShieldCheck, Cpu, Code2, Database, BrainCircuit } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { logEvent } from "@/lib/analytics";

const InhouseSLM = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState("Build Your SLM");

    const openContactForm = (subject: string) => {
        logEvent("InhouseSLM", "Click Contact", subject);
        setContactSubject(subject);
        setIsContactFormOpen(true);
    };

    const techStack = [
        { name: "Python", icon: Code2 },
        { name: "PyTorch", icon: Cpu },
        { name: "HuggingFace", icon: BrainCircuit },
        { name: "LLaMA 3", icon: BrainCircuit },
        { name: "Mistral", icon: BrainCircuit },
        { name: "LoRA/QLoRA", icon: Settings2 },
        { name: "LangChain", icon: Link2 },
        { name: "Vector DBs", icon: Database },
    ];

    function Settings2(props: React.SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
            </svg>
        )
    }

    function Link2(props: React.SVGProps<SVGSVGElement>) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                <path d="M15 7h2a5 5 0 0 1 5 5 2.5 2.5 0 0 1-2.5 2.5" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="In-House SLM — Your Own AI That Stays on Your Servers"
                description="Deploy a private AI model trained on your business data. Runs on your servers, never shares data externally. Perfect for companies that need AI with full data control."
                keywords="private AI model business India, in-house AI, on-premise AI, secure AI deployment, BYO VPC AI, custom language model"
                canonical="https://zeroonedotsai.consulting/inhouse-slm"
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pb-28 px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dots-data/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dots-data/10 border border-dots-data/20 text-ink mb-6">
                        <Server size={16} />
                        <span className="font-semibold text-sm">Private & Secure AI</span>
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                        Your Own Private AI Brain
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                        Save money with your own AI — no monthly fees per question.
                        Build a private AI trained just for your business, running on your infrastructure.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="brand"
                            className="text-lg h-14 px-8"
                            onClick={() => openContactForm("Build Your SLM")}
                        >
                            Build Your SLM
                        </Button>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20 md:py-28 px-4 bg-cream-100">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-background border border-border hover:border-dots-data/50 transition-all text-center group">
                            <div className="w-16 h-16 rounded-full bg-dots-ops/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="text-dots-ops" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Your Data Stays Private</h3>
                            <p className="text-muted-foreground">
                                Your data never leaves your premises. Full privacy compliance and IP protection with in-house models.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-background border border-border hover:border-dots-data/50 transition-all text-center group">
                            <div className="w-16 h-16 rounded-full bg-dots-strategy/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Cpu className="text-dots-strategy" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Save Money</h3>
                            <p className="text-muted-foreground">
                                Stop paying per token. Run highly efficient SLMs on consumer hardware or reduced cloud instances.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-background border border-border hover:border-dots-data/50 transition-all text-center group">
                            <div className="w-16 h-16 rounded-full bg-dots-data/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="text-dots-data" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Knows Your Industry</h3>
                            <p className="text-muted-foreground">
                                Fine-tuned specifically on your industry data (Legal, Medical, Finance) for superior detailed accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Tech Section */}
            <section className="py-20 md:py-28 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
                        Built with Modern AI Stack
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        We have the skills to build, train, and launch AI models that actually work.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStack.map((tech) => (
                            <Card key={tech.name} className="hover:border-dots-data/50 transition-all hover:bg-cream-100">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                    <tech.icon className="w-10 h-10 mb-4 text-ink" strokeWidth={1.5} />
                                    <span className="font-semibold">{tech.name}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-dots-data/10 border border-dots-data/20 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Confidence in Delivery</h3>
                                <p className="text-muted-foreground">
                                    Our team tracks the latest in Open Source AI. We don't just wrap APIs; we build models.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                variant="brand"
                                onClick={() => openContactForm("Discuss Technical Requirements")}
                            >
                                Discuss Technical Specs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm
                open={isContactFormOpen}
                onOpenChange={setIsContactFormOpen}
                defaultSubject={contactSubject}
            />
            <Footer />
        </div>
    );
};

export default InhouseSLM;
