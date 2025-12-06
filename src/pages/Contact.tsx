import TerminalWindow from "@/components/TerminalWindow";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    { name: "Email", icon: Mail, link: "mailto:official.vasanthpravin@gmail.com", label: "official.vasanthpravin@gmail.com" },
    { name: "GitHub", icon: Github, link: "https://github.com/Pravin-dev23", label: "github.com/Pravin-dev23" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/pravin-kumar-v-0ab99a2b0/", label: "linkedin.com/in/pravin-kumar-v" },
    { name: "Twitter", icon: Twitter, link: "https://x.com/Contro_MC", label: "@Contro_MC" },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <TerminalWindow>
          <TopBar variant="home" />
          <Navigation activeTab="Contact" />
          
          <section className="animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-glow">
              {"<Contact>"}
            </h1>
            <p className="text-comment mb-8">// Let's Connect</p>

            <div className="max-w-xl">
              <p className="text-foreground/80 mb-8">
                Feel free to reach out for collaborations, project inquiries, or just to say hi! 
                I'm always open to discussing new opportunities and creative ideas.
              </p>

              <div className="space-y-4">
                {socials.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/30 border border-border rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:glow-sm hover:border-foreground/20 group animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <span className="text-comment text-sm">//{social.name.toLowerCase()}</span>
                      <p className="text-foreground/90">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </TerminalWindow>
      </div>
    </main>
  );
};

export default Contact;
