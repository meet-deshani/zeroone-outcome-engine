import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import MoatSection from "@/components/home/MoatSection";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import FoundersReviewSection from "@/components/home/FoundersReviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <SEO
        title="AI Tools That Help Your Business Make More Money"
        description="ZeroOne DOTS builds smart AI tools that find where your business loses money and fix it. No payment until you see results. Free business check-up available."
        keywords="AI consulting India, business growth AI, margin recovery, AI automation small business, AI tools India, zeroone dots"
        canonical="https://zeroonedotsai.consulting/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <MoatSection />
        <ServicesSection />
        <ApproachSection />
        <CaseStudiesSection />
        <SocialProofSection />
        <IntegrationsSection />
        <FoundersReviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
