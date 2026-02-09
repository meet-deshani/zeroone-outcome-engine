import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Eye, Lock, Trash2, Mail } from "lucide-react";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="Privacy Policy — How We Protect Your Data"
                description="ZeroOne D.O.T.S. AI privacy policy. Learn how we collect, use, and protect your personal information. We keep it simple and transparent."
                keywords="privacy policy, data protection, ZeroOne AI privacy"
                canonical="https://zeroonedotsai.consulting/privacy"
            />
            <Navigation />

            <AnimatedSection>
                <div className="pt-32 pb-16 md:pb-20 px-4 text-center">
                    <h1 className="font-heading text-display-xl font-bold mb-6 text-ink">
                        Privacy Policy
                    </h1>
                    <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                        Your data is yours. Here's exactly what we collect and why.
                    </p>
                    <p className="text-body-sm text-stone-500 mt-4">
                        Last updated: February 2026
                    </p>
                </div>
            </AnimatedSection>

            <div className="container mx-auto px-4 pb-20 md:pb-28 max-w-3xl">

                {/* Quick Summary */}
                <AnimatedSection>
                    <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-12">
                        <h2 className="font-heading text-display-lg font-bold mb-6 text-ink">
                            The Short Version
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Eye className="w-5 h-5 text-dots-data mt-1 shrink-0" />
                                <p className="text-body-md text-slate-700">We only collect what we need to help you</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Lock className="w-5 h-5 text-dots-ops mt-1 shrink-0" />
                                <p className="text-body-md text-slate-700">We never sell your data to anyone</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-dots-tech mt-1 shrink-0" />
                                <p className="text-body-md text-slate-700">Your data is encrypted and secured</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Trash2 className="w-5 h-5 text-dots-strategy mt-1 shrink-0" />
                                <p className="text-body-md text-slate-700">You can ask us to delete your data anytime</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Full Policy */}
                <AnimatedSection>
                    <div className="prose prose-slate max-w-none">

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                1. Who We Are
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                ZeroOne D.O.T.S. AI is an AI consulting firm based in India. We help businesses use AI to find and fix problems. This policy covers our website at zeroonedotsai.consulting and any services we provide.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                2. What We Collect
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                <strong className="text-ink">When you fill out a form:</strong> Your name, email address, company name, and your message. We need this to respond to you.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                <strong className="text-ink">When you visit our site:</strong> We use Google Analytics to understand how people use our website. This collects anonymous data like which pages you visit, how long you stay, and what device you use. No personal information is tied to this data.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                <strong className="text-ink">When you become a client:</strong> Business information needed to deliver our services. The specifics depend on the project and are covered in a separate agreement.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                3. How We Use Your Data
                            </h2>
                            <ul className="space-y-3 text-body-md text-slate-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-data font-bold">→</span>
                                    To respond to your enquiries
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-ops font-bold">→</span>
                                    To deliver our consulting services
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-tech font-bold">→</span>
                                    To improve our website and services
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-strategy font-bold">→</span>
                                    To send you updates (only if you opt in)
                                </li>
                            </ul>
                            <p className="text-body-md text-slate-700 mt-4 leading-relaxed">
                                We <strong className="text-ink">never</strong> sell, rent, or share your personal data with third parties for marketing purposes.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                4. How We Protect Your Data
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                All data is transmitted over HTTPS (TLS encryption). Form submissions are sent via secure channels. We follow industry-standard security practices as outlined on our <a href="/security" className="text-plum hover:text-ink transition-colors underline">Security page</a>.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                5. Cookies
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                We use minimal cookies. Google Analytics sets cookies to measure website traffic. These are anonymous and don't identify you personally. We don't use advertising cookies or tracking pixels.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                6. Third-Party Services
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                We use the following third-party services:
                            </p>
                            <ul className="space-y-2 text-body-md text-slate-700">
                                <li><strong className="text-ink">Google Analytics</strong> — Website traffic analysis</li>
                                <li><strong className="text-ink">Cloudflare</strong> — Website hosting and security</li>
                                <li><strong className="text-ink">Google Forms</strong> — Form submission processing</li>
                            </ul>
                            <p className="text-body-md text-slate-700 mt-4 leading-relaxed">
                                Each service has its own privacy policy. We choose services that meet high security and privacy standards.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                7. Your Rights
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                You have the right to:
                            </p>
                            <ul className="space-y-2 text-body-md text-slate-700">
                                <li><strong className="text-ink">Access</strong> — Ask what data we have about you</li>
                                <li><strong className="text-ink">Correct</strong> — Ask us to fix any wrong data</li>
                                <li><strong className="text-ink">Delete</strong> — Ask us to delete your data</li>
                                <li><strong className="text-ink">Object</strong> — Say no to certain uses of your data</li>
                            </ul>
                            <p className="text-body-md text-slate-700 mt-4 leading-relaxed">
                                To exercise any of these rights, email us at the address below.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                8. Changes to This Policy
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                We may update this policy from time to time. When we do, we'll update the "Last updated" date at the top. We won't make major changes without letting you know.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                9. Contact Us
                            </h2>
                            <div className="bg-cream-100 border border-sand-200 rounded-2xl p-6 flex items-start gap-4">
                                <Mail className="w-6 h-6 text-ink mt-1 shrink-0" />
                                <div>
                                    <p className="text-body-md text-slate-700 mb-2">
                                        Questions about your privacy? Reach out:
                                    </p>
                                    <p className="text-body-md text-ink font-semibold">
                                        hello@zeroonedotsai.consulting
                                    </p>
                                    <p className="text-body-sm text-stone-500 mt-1">
                                        ZeroOne D.O.T.S. AI, India
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>
                </AnimatedSection>
            </div>

            <Footer />
        </div>
    );
};

export default Privacy;
