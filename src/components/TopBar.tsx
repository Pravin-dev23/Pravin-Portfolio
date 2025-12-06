import { Mail, Github, ExternalLink, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface TopBarProps {
  variant?: "home" | "gamedev" | "design";
}

const TopBar = ({ variant = "home" }: TopBarProps) => {
  const renderLinks = () => {
    switch (variant) {
      case "gamedev":
        return (
          <a 
            href="https://pravin-dev23.itch.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-comment">//itch.io</span>
            <ExternalLink size={14} />
          </a>
        );
      case "design":
        return (
          <>
            <a 
              href="https://www.behance.net/contro23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//behance</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="https://www.fiverr.com/s/EgeBk17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//fiverr</span>
              <ExternalLink size={14} />
            </a>
          </>
        );
      default:
        return (
          <>
            <a 
              href="mailto:official.vasanthpravin@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//contact</span>
              <Mail size={14} />
              <span className="text-sm">official.vasanthpravin@gmail.com</span>
            </a>
            <a 
              href="https://github.com/Pravin-dev23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//github</span>
              <Github size={14} />
              <span className="text-sm">github.com/Pravin-dev23</span>
            </a>
          </>
        );
    }
  };

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-between mb-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-comment">//portfolio</span>
        <span className="text-foreground">pravin.dev</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          {renderLinks()}
        </div>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="p-2 rounded-md hover:bg-accent/20 transition-colors"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
