import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <ServicesSection />
      <ProcessSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
