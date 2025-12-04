import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="group glass rounded-lg p-6 transition-all duration-300 hover:glow-sm hover:border-foreground/20">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs px-2 py-1 bg-muted/50 text-comment rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
