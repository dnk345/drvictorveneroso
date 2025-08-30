import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    "Início",
    "Serviços", 
    "Benefícios",
    "Resultados",
    "Sobre mim",
    "Depoimentos",
    "Contato"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center md:absolute md:left-4 lg:left-8">
          <h2 className="text-xl font-title text-primary">
            Dr. Victor Veneroso
          </h2>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mx-auto">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-foreground hover:text-primary transition-smooth font-body"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              className="relative w-8 h-8 flex flex-col justify-center items-center group md:hidden"
              aria-label="Menu"
            >
              <span 
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ease-out ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ease-out my-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ease-out ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-lg border-l border-border">
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="pt-8 pb-8 border-b border-border">
                <h2 className="text-xl font-title text-primary">
                  Dr. Victor Veneroso
                </h2>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 py-8">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-lg font-body text-foreground hover:text-primary transition-all duration-300 ease-out hover:translate-x-2"
                        onClick={() => setIsOpen(false)}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* CTA Button */}
              <div className="pb-8">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full font-button text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Agende seu horário
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;