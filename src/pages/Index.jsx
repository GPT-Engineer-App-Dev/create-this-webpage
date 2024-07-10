import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import FeaturesSection from "@/components/FeaturesSection";
import DetailedFeaturesSection from "@/components/DetailedFeaturesSection";
import PricingPlans from "@/components/PricingPlans";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <PricingPlans />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;