import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
