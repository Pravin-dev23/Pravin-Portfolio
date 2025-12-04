const BioSection = () => {
  return (
    <section className="mb-12 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
      <h2 className="text-comment mb-4">//bio</h2>
      <div className="text-foreground/90 leading-relaxed space-y-4 max-w-3xl">
        <p>
          Creative Designer & Indie Game Developer exploring the worlds of Unity 2D, Python game dev, and web design. Since 2023, I've specialized in graphic design, creating gaming thumbnails, merch designs, UI/UX layouts, and branding.
        </p>
        <p>
          I've built projects ranging from Pac-Man remakes, Among Us-style games, and platformers, to anime-themed websites, frontend prototypes, and DBMS systems.
        </p>
        <p>
          I love mixing tech + creativity — whether it's pixel art, Minecraft skins, mask edits, Pygame dinos, or motion-ready Instagram reels. Currently exploring game movement systems, character animations, web-based game hosting, and shop/merch designs.
        </p>
      </div>
    </section>
  );
};

export default BioSection;
