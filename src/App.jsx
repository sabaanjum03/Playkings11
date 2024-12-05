import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import  CasinoSection from "./components/CasinoSection";
import GamesGrid from "./components/GamesGrid";
import Adv from "./components/adv";
import Betting from "./components/Betting";
import Jackpot from "./components/Jackpot";
import Promotions from "./components/Promotions";
import Leaderboard from "./components/Leaderboard";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <HeroSection />
      
      
      <GamesGrid />
      <Testimonials/>
      <Jackpot />
      <Payment/>
      < CasinoSection/>
      <Betting />
   
      <Promotions />
      <Leaderboard />
      <FeatureSection />
      <Adv/>
      <Footer />
    </div>
  );
}

export default App;
