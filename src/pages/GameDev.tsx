import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const GameDev = () => {
  const games = [
    {
      title: "Cursed Nurse",
      description:
        "Classic Horror game , where you have to escape from the haunted hospital and nurse.",
      tags: ["Unreal Engine 5", "Horror"],
      link: "https://share.google/PezSTG5x79lQx3txo",
    },
    {
      title: "Me VS Zombies",
      description:
        "Bored? Survive waves of zombies with many twists and advantages and disadvantages",
      tags: ["Unity 2D", "Survival"],
      link: "https://www.linkedin.com/posts/pravin-kumar-v-0ab99a2b0_happy-to-announce-that-ive-completed-my-activity-7233763415335317504-yMV0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErliQMBL_30usr1-95TiEzHtCqD3qVFaMU",
    },
    {
      title: "Pac-Man Recreation",
      description: "Recreation of the classic Pac-Man game",
      tags: ["Unity 2D", "Arcade"],
      link: "https://www.linkedin.com/posts/pravin-kumar-v-0ab99a2b0_excited-to-share-my-next-project-on-game-activity-7235905542152495104-Dy-O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErliQMBL_30usr1-95TiEzHtCqD3qVFaMU",
    },
    {
      title: "Dino Game Reimagined",
      description:
        "A modern take on the classic Chrome Dino game with new features and power-ups made to overcome your boredom",
      tags: ["Unity 2D", "Endless Runner"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="gamedev" />
          <Navigation activeTab="Game Dev" />

          <section className="animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">{"<Game Development>"}</h1>
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
