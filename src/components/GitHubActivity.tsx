const GitHubActivity = () => {
  // Mock data for GitHub activity
  const months = [
    { name: "Jan", projects: 3 },
    { name: "Feb", projects: 5 },
    { name: "Mar", projects: 2 },
    { name: "Apr", projects: 7 },
    { name: "May", projects: 4 },
    { name: "Jun", projects: 6 },
    { name: "Jul", projects: 8 },
    { name: "Aug", projects: 3 },
    { name: "Sep", projects: 5 },
    { name: "Oct", projects: 9 },
    { name: "Nov", projects: 4 },
    { name: "Dec", projects: 6 },
  ];

  const maxProjects = Math.max(...months.map(m => m.projects));

  return (
    <section className="mt-12 animate-fade-in" style={{ animationDelay: "2s", animationFillMode: "both" }}>
      <h2 className="text-comment mb-6">//github activity</h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex items-end gap-3 min-w-max">
          {months.map((month, index) => (
            <div 
              key={month.name} 
              className="flex flex-col items-center gap-2 group"
              style={{ animationDelay: `${2 + index * 0.1}s` }}
            >
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {month.projects}
              </span>
              <div 
                className="w-8 bg-muted/50 rounded-sm transition-all duration-300 hover:bg-foreground/30 group-hover:glow-sm"
                style={{ 
                  height: `${(month.projects / maxProjects) * 100}px`,
                  minHeight: "10px"
                }}
              />
              <span className="text-xs text-comment">{month.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        * Connect your GitHub to see real activity
      </p>
    </section>
  );
};

export default GitHubActivity;
