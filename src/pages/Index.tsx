import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ShowsCarousel from "@/components/ShowsCarousel";
import LatestEpisodes from "@/components/LatestEpisodes";
import BrowseByTopic from "@/components/BrowseByTopic";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ShowsCarousel />
      <LatestEpisodes />
      <BrowseByTopic />
      <Footer />
    </div>
  );
};

export default Index;
