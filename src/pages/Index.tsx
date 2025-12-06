import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import ProfileSection from "@/components/ProfileSection";
import BioSection from "@/components/BioSection";
import MusicTaste from "@/components/MusicTaste";

const Index = () => {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="home" />
          <Navigation activeTab="Home" />
          <ProfileSection />
          <BioSection />
          <MusicTaste />
        </TerminalWindow>
      </div>
    </main>
  );
};

export default Index;
