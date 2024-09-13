import AppleCardsCarouselDemo from "../app/components/truc";
import { WobbleCards } from "./components/three_bento";
import { HeroScrollDemo } from "./components/reveil_phone";
import { HeroHighlightDemo } from "./components/hero";
import { BackgroundBeamsDemo } from "./components/waitlist";
import { GoogleGeminiEffectDemo } from "./components/present_elios";
import { ExpandableCardDemo } from "./components/about_us";

export default function Home() {
  return (
    <div className="bg-[#181823]">
      <HeroHighlightDemo />

      <div className="min-h-screen">
        <AppleCardsCarouselDemo />
      </div>

      <div className="min-h-screen">
        <GoogleGeminiEffectDemo />
      </div>

      <div className="min-h-screen">
        <HeroScrollDemo />
      </div>

      <div className="min-h-screen">
        <ExpandableCardDemo />
      </div>

      <div className="min-h-screen">
        <WobbleCards />
      </div>

      <div className="mt-8">
        <BackgroundBeamsDemo />
      </div>

    </div>
  );
}
