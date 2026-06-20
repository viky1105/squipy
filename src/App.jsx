import Bubbles from "./components/Bubbles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import HowItWorks from "./components/HowItWorks";
import Reveal from "./components/Reveal";
import QuoteSection from "./components/QuoteSection";
import BattleArena from "./components/BattleArena";
import Leaderboard from "./components/Leaderboard";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Bubbles />
      <Navbar />
      <Hero />
      <Reveal>
        <Ticker />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <QuoteSection />
      <BattleArena />
      <Reveal>
        <Leaderboard />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
    </>
  );
}

export default App;