import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const GameDev = () => {
  const games = [
    {
      title: "Pac-Man Remake",
      description: "Classic arcade game recreated with modern Unity 2D features and smooth animations.",
      tags: ["Unity 2D", "C#", "Arcade"],
      link: "#"
    },
    {
      title: "Space Survivor",
      description: "Top-down survival shooter with procedural enemy spawning and power-up system.",
      tags: ["Pygame", "Python", "Shooter"],
      link: "#"
    },
    {
      title: "Among Us Clone",
      description: "Social deduction game prototype with local multiplayer support.",
      tags: ["Unity 2D", "Multiplayer", "Prototype"],
      link: "#"
    },
    {
      title: "Pixel Platformer",
      description: "2D platformer with precise movement mechanics and pixel art aesthetics.",
      tags: ["Unity 2D", "Platformer", "Pixel Art"],
      link: "#"
    },
    {
      title: "Dino Runner",
      description: "Endless runner inspired by Chrome's offline game, built with Pygame.",
      tags: ["Pygame", "Python", "Endless Runner"],
      link: "#"
    },
    {
      title: "Tower Defense",
      description: "Strategic tower defense with multiple tower types and enemy waves.",
      tags: ["Unity 2D", "Strategy", "WIP"],
      link: "#"
    },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="gamedev" />
          <Navigation activeTab="Game Dev" />
          
          <section className="animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">
              {"<Game Development>"}
            </h1>
            <p className="text-comment mb-8">// Unity 2D & Python Games</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game, index) => (
                <div 
                  key={game.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
                >
                  <ProjectCard {...game} />
                </div>
              ))}
            </div>
          </section>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default GameDev;
