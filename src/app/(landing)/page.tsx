import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div>
        <LandingNavbar />
        <LandingHero />
      </div>

      <div className="text-white font-bold pb-20">Powered by Kalder</div>
    </div>
  );
};

export default LandingPage;
