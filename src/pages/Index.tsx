import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PaymentSection from "@/components/PaymentSection";
import ContactSection from "@/components/ContactSection";
import FAQDetailedSection from "@/components/FAQDetailedSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">{" "}
      <Header />
      <HeroSection />
      <ServicesSection />
      <SectionDivider />
      <BenefitsSection />
      <SectionDivider />
      <ResultsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <PaymentSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <FAQDetailedSection />
      <Footer />
    </div>
  );
};

export default Index;
