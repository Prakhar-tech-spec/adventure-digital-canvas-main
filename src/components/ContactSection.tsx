import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook, Linkedin, Check, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://sheetdb.io/api/v1/936g4wkzyhrbi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });
      setSending(false);
      if (response.ok) {
      setSent(true);
    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: ''
    });
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you within 24 hours.",
      });
      setTimeout(() => setSent(false), 1500);
      } else {
        toast({
          title: "Error",
          description: "There was an error submitting the form. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      setSending(false);
      toast({
        title: "Error",
        description: "There was an error submitting the form. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            Let's Build Something Powerful
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to scale your business? Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-md shadow-xl border border-[#222]">
            <CardContent className="p-8">
              {/* Accent icon above form */}
              <div className="flex justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#5fecff" fillOpacity="0.15" />
                  <path d="M12 20L18 26L28 14" stroke="#5fecff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-dark-bg border-dark-border focus:border-[#5fecff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-dark-bg border-dark-border focus:border-[#5fecff]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                      <SelectTrigger className="bg-dark-bg border-dark-border focus:border-[#5fecff]">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-surface border-dark-border">
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="paid-ads">Paid Advertising</SelectItem>
                        <SelectItem value="video-editing">Video Editing</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="ai-automation">AI Automation</SelectItem>
                        <SelectItem value="design">Design Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger className="bg-dark-bg border-dark-border focus:border-[#5fecff]">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-surface border-dark-border">
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-dark-bg border-dark-border focus:border-[#5fecff]"
                  />
                </div>

                <div className="flex justify-center">
                <Button
                  type="submit"
                    disabled={sending || sent}
                    className={`magnetic-btn font-semibold py-6 text-lg rounded-full mb-0 flex items-center justify-center transition-all duration-500 overflow-hidden
                      ${sending || sent
                        ? 'bg-[#5fecff] w-16 h-16 p-0 rounded-full shadow-lg text-dark-bg'
                        : 'bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] text-dark-bg w-full'}
                    `}
                    style={{ minHeight: '3.5rem', minWidth: sending || sent ? '4rem' : undefined, width: sending || sent ? '4rem' : '100%' }}
                  >
                    {sending ? (
                      <svg className="animate-spin h-7 w-7 text-dark-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    ) : sent ? (
                      <Check className="h-7 w-7 text-white transition-all duration-300" />
                    ) : (
                      <span className="w-full block text-center">Send Message</span>
                    )}
                </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-md shadow-xl border border-[#222]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] bg-clip-text text-transparent">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Schedule a Call</h4>
                    <p className="text-muted-foreground mb-4">
                      Book a free 30-minute strategy session to discuss your goals
                    </p>
                    <Button 
                      variant="outline" 
                      asChild
                      className="bg-dark-bg text-white border border-[#5fecff] font-semibold shadow-md transition-all group hover:bg-gradient-to-r hover:from-[#5fecff] hover:to-[#4ac2d0] hover:text-white"
                    >
                      <a href="https://calendly.com/arpanadventure/30min" target="_blank" rel="noopener noreferrer">
                        Book Your Free Discovery Call
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground mb-4">
                      Get instant responses to your questions
                    </p>
                    <Button 
                      variant="outline" 
                      asChild
                      className="bg-dark-bg text-white border border-[#5fecff] font-semibold shadow-md transition-all group hover:bg-gradient-to-r hover:from-[#5fecff] hover:to-[#4ac2d0] hover:text-white"
                    >
                      <a href="https://wa.link/qc9pe7" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-bg rounded-full hover:bg-[#5fecff] transition-colors group"
                      >
                        <Instagram size={24} className="group-hover:text-dark-bg" />
                      </a>
                      <a 
                        href="#" 
                        className="p-3 bg-dark-bg rounded-full hover:bg-[#5fecff] transition-colors group"
                      >
                        <Facebook size={24} className="group-hover:text-dark-bg" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/arpan-dey-5369212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-bg rounded-full hover:bg-[#5fecff] transition-colors group"
                      >
                        <Linkedin size={24} className="group-hover:text-dark-bg" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md shadow-xl border border-[#222]">
              <CardContent className="p-8 text-center">
                <Zap className="mx-auto mb-4 text-[#5fecff] w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  We typically respond within 2-4 hours during business days
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
