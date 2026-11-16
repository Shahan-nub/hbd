import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BirthdayCake from "@/components/BirthdayCake";
import UrduQuotes from "@/components/UrduQuotes";
import ReasonsWhy from "@/components/ReasonsWhy";
import StoryMilestones from "@/components/StoryMilestones";
import LoveLetter from "@/components/LoveLetter";
import SurpriseBoxes from "@/components/SurpriseBoxes";
import BouquetBuilder from "@/components/BouquetBuilder";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#faf7f2] text-warmBrown-950 selection:bg-beige-500 selection:text-white">
      {/* Ambient Canvas Floating Particles */}
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

      {/* Chapters of Us (Milestones & Romantic Moments - Zero Photo Upload Needed) */}
      <StoryMilestones />

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
