import { useState } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent font-bold">ADVENTURE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-[#5fecff] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-[#5fecff] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('results')} className="text-foreground hover:text-[#5fecff] transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-[#5fecff] transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-[#5fecff] transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden !bg-transparent !shadow-none !ring-0 !border-0" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
                style={{ borderRadius: 2 }}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{ borderRadius: 2 }}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
                style={{ borderRadius: 2 }}
              ></span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('hero')} className="block text-foreground hover:text-[#5fecff] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-foreground hover:text-[#5fecff] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('results')} className="block text-foreground hover:text-[#5fecff] transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-foreground hover:text-[#5fecff] transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-foreground hover:text-[#5fecff] transition-colors">
              Contact
            </button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;