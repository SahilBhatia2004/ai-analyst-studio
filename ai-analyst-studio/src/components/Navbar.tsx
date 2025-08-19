import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">AUTERA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-secondary transition-colors">
              Services
            </a>
            <a href="#analyst" className="text-foreground hover:text-secondary transition-colors">
              AI Analyst
            </a>
            <a href="#about" className="text-foreground hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://cal.com/sahilbhatia2004/consultation" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="https://cal.com/sahilbhatia2004/consultation" target="_blank" rel="noopener noreferrer">
                Book Meeting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;