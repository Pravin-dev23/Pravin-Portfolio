import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import TechCard from "@/components/TechCard";

const TechStack = () => {
  const languages = [
    "HTML", "CSS", "JavaScript", "Node.js", "C++", "C#", "SQL", "Python"
  ];

  const tools = {
    "Game Development": ["Unity", "Unreal Engine", "Blender"],
    "Design": ["PixlrE", "Canva", "Figma"],
    "Editing": ["DaVinci Resolve", "Premiere Pro"],
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="home" />
          <Navigation activeTab="Tech Stack" />
          
          <section className="animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">
              {"<Tech Stack>"}
            </h1>
            <p className="text-comment mb-8">// Languages, Frameworks & Tools</p>

            {/* Languages */}
            <div className="mb-12">
              <h2 className="text-comment mb-6">//languages & frameworks</h2>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={lang}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "both" }}
                  >
                    <TechCard name={lang} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h2 className="text-comment mb-6">//tools</h2>
              <div className="space-y-8">
                {Object.entries(tools).map(([category, items], categoryIndex) => (
                  <div 
                    key={category}
                    className="animate-slide-in-left"
                    style={{ animationDelay: `${0.3 + categoryIndex * 0.15}s`, animationFillMode: "both" }}
                  >
                    <h3 className="text-sm text-muted-foreground mb-3">{category}:</h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map((tool) => (
                        <span 
                          key={tool}
                          className="px-4 py-2 bg-muted/30 border border-border rounded text-sm text-foreground/80 transition-all duration-300 hover:bg-muted hover:glow-sm hover:scale-105"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default TechStack;
