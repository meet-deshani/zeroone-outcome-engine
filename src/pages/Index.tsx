import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import PrivateAIPillarsSection from "@/components/home/PrivateAIPillarsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CommunitySection from "@/components/home/CommunitySection";
import BountyEngineSection from "@/components/home/BountyEngineSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <SEO
        title="Private AI for Every Business — Own Your AI, Don't Rent It"
        description="ZeroOne builds private AI that runs on your servers, works without internet, and is 100% yours. File a patent on your AI. Made in India."
        keywords="private AI India, own your AI, AI consulting India, offline AI business, AI ownership, custom AI model, zeroone dots"
        canonical="https://zeroonedotsai.consulting/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <VisionSection />
        <PrivateAIPillarsSection />
        <ServicesSection />
        <ApproachSection />
        <CaseStudiesSection />
        <CommunitySection />
        <BountyEngineSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
