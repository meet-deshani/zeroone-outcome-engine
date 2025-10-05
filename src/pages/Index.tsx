import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <ApproachSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
