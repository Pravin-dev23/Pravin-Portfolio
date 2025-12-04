import { useState } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <TerminalWindow>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2 text-glow">
              {"<Sign In>"}
            </h1>
            <p className="text-comment">// Access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-comment text-sm">//email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-secondary/50 border-border focus:border-foreground/50 focus:ring-0 focus:glow-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-comment text-sm">//password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-secondary/50 border-border focus:border-foreground/50 focus:ring-0 focus:glow-sm transition-all"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-foreground text-background hover:bg-foreground/90 hover:glow-sm transition-all"
            >
              Sign In
            </Button>

            <div className="text-center space-y-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forgot password?
              </a>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-foreground hover:text-glow transition-colors">
                  Sign up
                </a>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <Link 
              to="/" 
              className="text-sm text-comment hover:text-foreground transition-colors"
            >
              ← Back to portfolio
            </Link>
          </div>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default Login;
