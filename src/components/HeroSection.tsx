import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollingServices = [
    "Social Media Strategy",
    "Paid Ads",
    "Web & App Development", 
    "AI Automation",
    "Video Editing",
    "Design"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center px-4 py-2 bg-dark-surface border border-dark-border rounded-full">
            <span className="w-2 h-2 mr-2 rounded-full animate-blink-subtle" style={{ backgroundColor: '#5fecff', boxShadow: '0 0 8px 4px rgba(95, 236, 255, 0.6)' }}></span>
            <span className="text-sm text-muted-foreground">Almost full</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            An automation to business transformation<br />
            <br />
            <span
              className="inline-block text-transparent bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] bg-clip-text"
            >
              Execute Growth & Automate
            </span>
          </h1>
          
          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] p-1">
              <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
                <img
                  src="/assets/apran-image.webp"
                  alt="Arpan Dey"
                  className="w-44 h-44 rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex -space-x-2 rtl:space-x-reverse mr-4 mb-2 sm:mb-0">
              <img className="w-8 h-8 border-2 border-dark-bg rounded-full dark:border-gray-800" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Customer 1" />
              <img className="w-8 h-8 border-2 border-dark-bg rounded-full dark:border-gray-800" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Customer 2" />
              <img className="w-8 h-8 border-2 border-dark-bg rounded-full dark:border-gray-800" src="https://randomuser.me/api/portraits/men/76.jpg" alt="Customer 3" />
              <img className="w-8 h-8 border-2 border-dark-bg rounded-full dark:border-gray-800" src="https://randomuser.me/api/portraits/men/41.jpg" alt="Customer 4" />
            </div>
            <div className="flex items-center">
              <div className="flex text-white text-sm">
                <svg className="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.852l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.852l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.852l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.852l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.852l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              </div>
              <span className="ms-2 text-sm font-medium text-muted-foreground">Loved by 50+ customers</span>
            </div>
          </div>

          {/* Add new text below avatars and stars */}
          <div className="mb-8 text-center text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
            Smart strategy. Killer creative. AI that works while you sleep.
          </div>

          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-xl md:text-2xl text-muted-foreground mb-2">
              Specializing in
            </div>
            {/* Display all services */}
            <div className="flex flex-wrap justify-center gap-2">
              {scrollingServices.map((service, index) => (
                <span key={index} className="px-4 py-1 text-sm bg-dark-surface border border-dark-border rounded-full" style={{ color: '#5fecff' }}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8 flex justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="flex items-center flex-nowrap px-2 py-1 bg-dark-surface border border-dark-border rounded-full opacity-60 space-x-2">
          <Button
            onClick={scrollToContact}
                className="px-4 sm:px-8 py-3 text-lg rounded-full bg-dark-surface text-foreground border border-dark-border double-border-button hover:bg-dark-surface focus:ring-0 hover:text-foreground focus:text-foreground hover-glow-blue"
              >
                Get Started
              </Button>
              <Button
                onClick={() => {
                  window.location.href = 'https://wa.link/qc9pe7';
                }}
                className="px-4 sm:px-8 py-3 text-lg rounded-full bg-transparent text-foreground border border-[#5fecff] transition-shadow focus:ring-0 hover:text-foreground focus:text-foreground hover:bg-transparent animate-continuous-glow"
              >
                Lets Chat!
          </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
