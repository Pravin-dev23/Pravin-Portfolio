import { ExternalLink } from "lucide-react";

interface DesignCardProps {
  title: string;
  category: string;
  link?: string;
}

const DesignCard = ({ title, category, link }: DesignCardProps) => {
  return (
    <div className="group relative aspect-square bg-secondary/30 border border-border rounded-lg overflow-hidden transition-all duration-300 hover:glow-sm hover:border-foreground/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-comment mb-1">//{category}</p>
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
