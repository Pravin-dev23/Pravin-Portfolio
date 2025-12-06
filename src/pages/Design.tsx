import { useState } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import DesignCard from "@/components/DesignCard";
import { X } from "lucide-react";

// Import design images
import thumb1 from "@/assets/designs/thumbnail1.png";
import thumb2 from "@/assets/designs/thumb2.png";
import thumb3 from "@/assets/designs/thumb3.png";
import thumb4 from "@/assets/designs/thumb4.png";
import thumb5 from "@/assets/designs/thumb5.png";
import thumb6 from "@/assets/designs/thumb6.png";
import thumb7 from "@/assets/designs/Thumb7.webp";
import thumbb from "@/assets/designs/thumbb.png";

// Import banner images
import bannerMain from "@/assets/banners/banners.png";
import banner1 from "@/assets/banners/banner1.png";
import banner2 from "@/assets/banners/banner 2.png";
import banner3 from "@/assets/banners/banner3.png";
import banner4 from "@/assets/banners/banner 4.png";
import banner5 from "@/assets/banners/banner5.png";
import banner6 from "@/assets/banners/banner6.png";
import banner2webp from "@/assets/banners/banner2.webp";
// Import poster images
import posterMain from "@/assets/posters/poster.png";
import poster1 from "@/assets/posters/poster1.webp";
import poster2 from "@/assets/posters/poster2.webp";
import poster3 from "@/assets/posters/poster3.jpeg";
import poster4 from "@/assets/posters/poster4.jpeg";
import poster5 from "@/assets/posters/poster5.png";
import poster6 from "@/assets/posters/poster6.png";
import poster7 from "@/assets/posters/poster7.png";
import othersBanner from "@/assets/Design/Other/others.png";
import other1 from "@/assets/Design/Other/other1.png";
import other2 from "@/assets/Design/Other/other2.png";
import other3 from "@/assets/Design/Other/other3.png";
import other4 from "@/assets/Design/Other/other 4.png";
import other6 from "@/assets/Design/Other/other6.png";
import other7 from "@/assets/Design/Other/other7.png";
import other8 from "@/assets/Design/Other/other8.png";
import other9 from "@/assets/Design/Other/other9.png";
import other10 from "@/assets/Design/Other/other10.jpeg";
import merchBanner from "@/assets/Design/Merch Design/Merchdesign.png";
import merchFrontBack from "@/assets/Design/Merch Design/frontbackst.png";
import merchFull from "@/assets/Design/Merch Design/full.png";
import merchTravis from "@/assets/Design/Merch Design/travis.png";

interface DesignProject {
  title: string;
  category: string;
  bannerImage: string; // ADD YOUR BANNER IMAGE URL HERE
  workImages: string[]; // ADD YOUR WORK IMAGES URLS HERE (array of image URLs)
}

const Design = () => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const designs: DesignProject[] = [
    {
      title: "Gaming Thumbnail",
      category: "thumbnail",
      bannerImage: thumbb,
      workImages: [thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb1],
    },
    {
      title: "Banners",
      category: "Game/IRL",
      bannerImage: bannerMain,
      workImages: [banner1, banner2, banner3, banner4, banner5, banner6, banner2webp],
    },
    {
      title: "Posters",
      category: "Posters",
      bannerImage: posterMain,
      workImages: [poster1, poster2, poster3, poster4, poster5, poster6, poster7],
    },
    {
      title: "Others",
      category: "others",
      bannerImage: othersBanner,
      workImages: [other1, other2, other3, other4, other6, other7, other8, other9, other10],
    },
    {
      title: "Merch Designs",
      category: "branding",
      bannerImage: merchBanner,
      workImages: [merchFrontBack, merchFull, merchTravis],
    },
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

            {!selectedProject ? (
              // Grid View - Show all thumbnails
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designs.map((design, index) => (
                  <div
                    key={design.title}
                    className="animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "both" }}
                    onClick={() => setSelectedProject(design)}
                  >
                    <DesignCard title={design.title} category={design.category} />
                  </div>
                ))}
              </div>
            ) : (
              // Detail View - Show selected project
              <div className="animate-fade-in">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-comment hover:text-foreground transition-colors mb-6"
                >
                  <X size={18} />
                  <span>Back to Projects</span>
                </button>

                {/* Banner Section */}
                <div className="mb-8">
                  <div className="relative w-full h-64 md:h-96 bg-secondary/20 border border-border rounded-lg overflow-hidden">
                    {selectedProject.bannerImage ? (
                      <img
                        src={selectedProject.bannerImage}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                        <p className="text-comment text-center">
                          {/* BANNER IMAGE URL GOES HERE */}
                          No banner image added
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="mb-6">
                  <p className="text-comment text-sm">//{selectedProject.category}</p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Work Images Gallery */}
                <div>
                  <p className="text-comment mb-4">// Work Images</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.workImages.map((imageUrl, idx) => (
                      <div 
                        key={idx} 
                        className="relative w-full bg-secondary/20 border border-border rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-white/20"
                        onClick={() => imageUrl && setFullscreenImage(imageUrl)}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={`${selectedProject.title} - Work ${idx + 1}`}
                            className="w-full h-64 md:h-80 object-cover transition-all duration-300 group-hover:opacity-90"
                          />
                        ) : (
                          <div className="w-full h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                            <p className="text-comment text-center">
                              {/* WORK IMAGE URL #{idx + 1} GOES HERE */}
                              Image {idx + 1}
                            </p>
                          </div>
                        )}
                        {/* Glow overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fullscreen Image Modal */}
                {fullscreenImage && (
                  <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
                    onClick={() => setFullscreenImage(null)}
                  >
                    <button
                      onClick={() => setFullscreenImage(null)}
                      className="absolute top-4 right-4 text-white hover:text-foreground transition-colors"
                    >
                      <X size={32} />
                    </button>
                    <img
                      src={fullscreenImage}
                      alt="Fullscreen view"
                      className="max-w-[90vw] max-h-[90vh] object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            )}
          </section>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default Design;
