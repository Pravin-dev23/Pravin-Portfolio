interface TechCardProps {
  name: string;
  icon?: string;
}

const TechCard = ({ name }: TechCardProps) => {
  return (
    <div className="group relative px-6 py-4 bg-secondary/50 border border-border rounded-lg transition-all duration-300 hover:scale-110 hover:glow-sm hover:bg-secondary cursor-default">
      <span className="text-foreground/90 group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
};

export default TechCard;
