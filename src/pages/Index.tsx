import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySpokkn from "@/components/WhySpokkn";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CommunityStats from "@/components/CommunityStats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhySpokkn />
      <FeaturedExperiences />
      <HowItWorks />
      <Testimonials />
      <CommunityStats />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
