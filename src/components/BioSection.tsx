const BioSection = () => {
  return (
    <section className="mb-12 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
      <h2 className="text-comment mb-4">//bio</h2>
      <div className="text-foreground/90 leading-relaxed space-y-4 max-w-3xl">
        <p>
          Creative Designer & Indie Game Developer exploring Unity 2D, Python game dev, and web design. Since 2023 I've specialized in graphic design  gaming thumbnails, banners, pixel art, merch branding, UI/UX layouts, and visual identity.
        </p>
        <p>
          On the game side I've built projects ranging from simple 2D boredom-relief games to 3D horror experiments, and I'm focused on taking my game dev work to a larger, more ambitious level.
        </p>
        <p>
          In design I create thumbnails, banners, pixel art, merch concepts, and brand assets blending visuals that perform on platforms and merch alike.
        </p>
        <p>
          Check out my projects :)
        </p>
      </div>
    </section>
  );
};

export default BioSection;
