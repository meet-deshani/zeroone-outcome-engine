import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import MoatSection from "@/components/home/MoatSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import FoundersReviewSection from "@/components/home/FoundersReviewSection";
import ApproachSection from "@/components/home/ApproachSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main>
        <HeroSection />
        <MoatSection />
        <IntegrationsSection />
        <SocialProofSection />
        <FoundersReviewSection />
        <ApproachSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
