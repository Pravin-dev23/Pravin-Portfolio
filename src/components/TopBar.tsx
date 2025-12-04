import { Mail, Github, ExternalLink } from "lucide-react";

interface TopBarProps {
  variant?: "home" | "gamedev" | "design";
}

const TopBar = ({ variant = "home" }: TopBarProps) => {
  const renderLinks = () => {
    switch (variant) {
      case "gamedev":
        return (
          <a 
            href="https://itch.io" 
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
              href="https://behance.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//behance</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="https://fiverr.com" 
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
              href="mailto:your@email.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//contact</span>
              <Mail size={14} />
              <span className="text-sm">your@email.com</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-comment">//github</span>
              <Github size={14} />
              <span className="text-sm">github.com/yourusername</span>
            </a>
          </>
        );
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-comment">//portfolio</span>
        <span className="text-foreground">pravin.dev</span>
      </div>
      {renderLinks()}
    </div>
  );
};

export default TopBar;
