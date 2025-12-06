import { Play } from "lucide-react";
import spotdesign from "@/assets/Design/Spotify/spotlogo.png";

const tracks = [
  { title: "Lucid dreams", artist: "Juice Wrld", image: "", spotify_url: "https://open.spotify.com/track/285pBltuF7vW8TeWk8hdRR?si=b85b1b912e494715" },
  { title: "Golden", artist: "Huntrix Ejae, Audrey Nuna, and Rei Ami", image: "", spotify_url: "https://open.spotify.com/track/1CPZ5BxNNd0n0nF4Orb9JS?si=edb4d9f124eb4fa2" },
  { title: "RoadTrip", artist: "Dream", image: "", spotify_url: "https://open.spotify.com/track/4Agtk2MrapdZAVN7v6PuFO?si=8c9e71d025e044df" },
  { title: "Soda Pop", artist: "Saja boys", image: "", spotify_url: "https://open.spotify.com/track/02sy7FAs8dkDNYsHp4Ul3f?si=5cb806b274404192" },
  { title: "Handsome", artist: "Rarin ,PrettyPlayBoy", image: "", spotify_url: "https://open.spotify.com/track/2b2j0Sio3RDg0nGT7LX6aw?si=97c2079795ba4404" },
];
// To add images, update the image field in each track object with the import path or URL
// Example: image: thumb1 (imported) or image: "https://example.com/cover.jpg" (URL)
// Or add your album art to src/assets/ and import it

export default function MusicTaste() {
  return (
    <section className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
      <h2 className="text-comment mb-4">// Pravins Taste in music</h2>

      <div className="flex gap-6 items-start">
        {/* Left cover banner */}
        <div className="w-48 min-w-[192px] h-48 rounded-lg overflow-hidden border border-border flex items-center justify-center">
          <img src={spotdesign} alt="Pravin's Taste" className="w-full h-full object-cover" />
        </div>

        {/* Right list (scrollable) */}
        <div className="flex-1">
          <div className="max-h-48 overflow-y-auto pr-2">
            <ol className="space-y-3">
              {tracks.map((t, i) => (
                <li key={t.title} className="flex items-center gap-4 p-3 rounded-md hover:bg-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-muted/30 rounded-md flex items-center justify-center text-sm font-medium text-foreground overflow-hidden">
                    {t.image ? (
                      <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-foreground">{t.title}</div>
                        <div className="text-xs text-muted-foreground">{t.artist}</div>
                      </div>
                      <a href={t.spotify_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs bg-accent/20 px-3 py-1 rounded-md hover:bg-accent/30 transition-colors">
                        <Play size={14} />
                        Play
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Click play to open on Spotify.</p>
        </div>
      </div>
    </section>
  );
}
