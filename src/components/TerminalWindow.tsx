import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden ${className}`}>
      {/* Mac-style title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
        <div className="terminal-dot bg-terminal-red" />
        <div className="terminal-dot bg-terminal-yellow" />
        <div className="terminal-dot bg-terminal-green" />
        <div className="flex-1 flex justify-center">
          <div className="w-1/2 max-w-md h-6 bg-muted/50 rounded-md" />
        </div>
        <div className="w-12" /> {/* Spacer for balance */}
      </div>
      {/* Content */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
