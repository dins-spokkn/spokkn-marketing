import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridCollage from "@/components/GridCollage";
import MarqueeTicker from "@/components/MarqueeTicker";
import PlatformOverview from "@/components/PlatformOverview";
import HowItWorks from "@/components/HowItWorks";
import Activities from "@/components/Activities";
import ShowsCarousel from "@/components/ShowsCarousel";
import LatestEpisodes from "@/components/LatestEpisodes";
import BrowseByTopic from "@/components/BrowseByTopic";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GridCollage />
      <MarqueeTicker />
      <PlatformOverview />
      <HowItWorks />
      <ShowsCarousel />
      <LatestEpisodes />
      <BrowseByTopic />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
