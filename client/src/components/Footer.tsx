import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 mt-20 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-xl mb-2">Mohamed Elbagoury</h3>
          <p className="text-muted-foreground text-sm">
            Flutter Developer & Problem Solver
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/MohamedElbagoury11" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/mido.mahmoud.96155/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="mailto:mohamedelbagoury150@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
