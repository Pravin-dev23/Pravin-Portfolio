import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import DesignCard from "@/components/DesignCard";

const Design = () => {
  const designs = [
    { title: "Gaming Thumbnail", category: "thumbnail" },
    { title: "Merch Design", category: "merchandise" },
    { title: "UI/UX Layout", category: "ui-ux" },
    { title: "Anime Edit", category: "edit" },
    { title: "Channel Banner", category: "banner" },
    { title: "Logo Design", category: "branding" },
    { title: "Motion Graphics", category: "motion" },
    { title: "Minecraft Skin", category: "pixel-art" },
    { title: "Social Media Post", category: "social" },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="design" />
          <Navigation activeTab="Design" />
          
          <section className="animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">
              {"<Graphic Design>"}
            </h1>
            <p className="text-comment mb-8">// Creative Works & Visual Design</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designs.map((design, index) => (
                <div 
                  key={design.title}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "both" }}
                >
                  <DesignCard {...design} />
                </div>
              ))}
            </div>
          </section>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default Design;
