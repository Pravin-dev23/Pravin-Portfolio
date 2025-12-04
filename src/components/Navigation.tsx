import { NavLink } from "react-router-dom";

interface NavigationProps {
  activeTab: string;
}

const Navigation = ({ activeTab }: NavigationProps) => {
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Game Dev", path: "/gamedev" },
    { name: "Design", path: "/design" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Contact", path: "/contact" },
    { name: "Sign In", path: "/login" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 border-b border-border pb-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `text-sm transition-all duration-300 hover:text-foreground ${
              isActive 
                ? "text-foreground text-glow" 
                : "text-muted-foreground"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
