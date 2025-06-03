import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingParticles from '@/components/FloatingParticles';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c20] via-[#101214] to-[#23272b] text-foreground relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-dark-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Built by <span style={{ color: '#f58328' }}>Creatific</span> | Powered by <span style={{ color: '#5fecff' }}>AdVenture Marketing</span>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#5fecff] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#5fecff] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arpan-dey-5369212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#5fecff] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
