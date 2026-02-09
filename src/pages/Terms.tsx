import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Mail } from "lucide-react";

const Terms = () => {
    return (
        <div className="min-h-screen bg-cream-50">
            <SEO
                title="Terms of Service — ZeroOne D.O.T.S. AI"
                description="Terms of service for ZeroOne D.O.T.S. AI website and consulting services. Clear, simple language — no legal tricks."
                keywords="terms of service, terms and conditions, ZeroOne AI terms"
                canonical="https://zeroonedotsai.consulting/terms"
            />
            <Navigation />

            <AnimatedSection>
                <div className="pt-32 pb-16 md:pb-20 px-4 text-center">
                    <h1 className="font-heading text-display-xl font-bold mb-6 text-ink">
                        Terms of Service
                    </h1>
                    <p className="text-body-lg text-slate-700 max-w-2xl mx-auto">
                        Simple rules for using our website and services. No tricks, no fine print.
                    </p>
                    <p className="text-body-sm text-stone-500 mt-4">
                        Last updated: February 2026
                    </p>
                </div>
            </AnimatedSection>

            <div className="container mx-auto px-4 pb-20 md:pb-28 max-w-3xl">

                {/* Quick Summary */}
                <AnimatedSection>
                    <div className="bg-white border border-sand-200 rounded-2xl p-8 mb-12 flex items-start gap-4">
                        <FileText className="w-6 h-6 text-ink mt-1 shrink-0" />
                        <div>
                            <h2 className="font-heading text-display-sm font-bold mb-3 text-ink">
                                In Plain English
                            </h2>
                            <p className="text-body-md text-slate-700 leading-relaxed">
                                Use our website normally. Don't copy our stuff without asking. If you become a client, we'll have a separate agreement for that. If something goes wrong, let's talk about it like adults.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Full Terms */}
                <AnimatedSection>
                    <div className="prose prose-slate max-w-none">

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                1. About These Terms
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                By using zeroonedotsai.consulting (the "Website"), you agree to these terms. If you don't agree, that's okay — but please don't use the site. These terms apply to the website only. Client engagements are covered by separate service agreements.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                2. What You Can Do
                            </h2>
                            <ul className="space-y-3 text-body-md text-slate-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-data font-bold">✓</span>
                                    Browse the website and read our content
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-ops font-bold">✓</span>
                                    Use our free tools (like the LMTD Calculator)
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-tech font-bold">✓</span>
                                    Share links to our pages
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-dots-strategy font-bold">✓</span>
                                    Contact us through our forms
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                3. What You Can't Do
                            </h2>
                            <ul className="space-y-3 text-body-md text-slate-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-rose font-bold">✗</span>
                                    Copy our content, designs, or code without permission
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-rose font-bold">✗</span>
                                    Use our branding or logo without written consent
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-rose font-bold">✗</span>
                                    Scrape or automatically collect data from our site
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-rose font-bold">✗</span>
                                    Try to break, hack, or disrupt the website
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-rose font-bold">✗</span>
                                    Use the site for anything illegal
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                4. Our Content
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Everything on this website — text, designs, logos, tools, code — belongs to ZeroOne D.O.T.S. AI unless stated otherwise. You can't use it without our permission.
                            </p>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Our blog articles and guides are for educational purposes. We try to be accurate, but we don't guarantee that everything is perfect or up-to-date. Don't make major business decisions based solely on our free content without consulting a professional.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                5. Free Tools
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Our free tools (calculators, guides, etc.) are provided "as is." They're designed to be helpful, but we don't guarantee they'll be error-free or suitable for your specific needs. Use professional judgment before making decisions based on tool outputs.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                6. Client Services
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                If you hire us for consulting, AI builds, or workshops, those engagements are governed by a separate service agreement. That agreement will cover scope, pricing, timelines, confidentiality, and everything else specific to your project.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                7. Links to Other Sites
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                Our site may link to other websites. We don't control those sites and aren't responsible for their content or privacy practices. Use them at your own discretion.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                8. Limitation of Liability
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                We do our best to keep the website accurate and running smoothly. But we can't guarantee it will be available 100% of the time or that all information is perfectly current. We're not liable for any losses that come from using (or not being able to use) our website.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                9. Changes to These Terms
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                We may update these terms. When we do, we'll update the date at the top. By continuing to use the site after changes, you accept the new terms.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                10. Governing Law
                            </h2>
                            <p className="text-body-md text-slate-700 mb-4 leading-relaxed">
                                These terms are governed by the laws of India. Any disputes will be resolved in Indian courts.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-display-lg font-bold mb-4 text-ink">
                                11. Contact Us
                            </h2>
                            <div className="bg-cream-100 border border-sand-200 rounded-2xl p-6 flex items-start gap-4">
                                <Mail className="w-6 h-6 text-ink mt-1 shrink-0" />
                                <div>
                                    <p className="text-body-md text-slate-700 mb-2">
                                        Questions about these terms?
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

export default Terms;
