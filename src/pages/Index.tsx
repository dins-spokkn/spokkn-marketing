import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import MarqueeTicker from "@/components/MarqueeTicker";
import PlatformOverview from "@/components/PlatformOverview";
import HowItWorks from "@/components/HowItWorks";
import Activities from "@/components/Activities";
import SessionsCarousel from "@/components/SessionsCarousel";
import ActivityTypes from "@/components/ActivityTypes";
import ActivityList from "@/components/ActivityList";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <MarqueeTicker />
      {/* <PlatformOverview /> */}
      <HowItWorks />
      <SessionsCarousel />
      <ActivityTypes />
      <ActivityList />
      {/* <AppDownload /> */}
      <Footer />
    </div>
  );
};

export default Index;
