import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BirthdayCake from "@/components/BirthdayCake";
import UrduQuotes from "@/components/UrduQuotes";
import ReasonsWhy from "@/components/ReasonsWhy";
import MemoryWall from "@/components/MemoryWall";
import LoveLetter from "@/components/LoveLetter";
import SurpriseBoxes from "@/components/SurpriseBoxes";
import BouquetBuilder from "@/components/BouquetBuilder";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Ambient Canvas Particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navbar />

      {/* Hero Greeting Section */}
      <Hero />

      {/* Interactive Birthday Cake with Candle Blowing */}
      <BirthdayCake />

      {/* 2 Heartfelt Urdu Quotes with English Translations */}
      <UrduQuotes />

      {/* 10 Reasons Why I Love You Misha */}
      <ReasonsWhy />

      {/* Polaroid Memory Wall with Custom Upload */}
      <MemoryWall />

      {/* Interactive Wax Sealed Love Letter */}
      <LoveLetter />

      {/* Birthday Surprise Gift Boxes & Redeemable Coupons */}
      <SurpriseBoxes />

      {/* Interactive Flower Bouquet Builder */}
      <BouquetBuilder />

      {/* Footer */}
      <Footer />

      {/* Ambient Romantic Music Player & Chime Synthesizer */}
      <AudioPlayer />
    </main>
  );
}
