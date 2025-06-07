import { Card, CardContent } from '@/components/ui/card';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('written');
  
  // Refs for video elements
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  
  // State to track mute status
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  
  // Intersection Observer setup
  useEffect(() => {
    if (activeTab !== 'video') return;
    
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5 // 50% of the element must be visible
    };
    
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // Determine which video reference to use based on the target
        let videoRef: React.RefObject<HTMLVideoElement> | null = null;
        
        if (entry.target === containerRef1.current) videoRef = videoRef1;
        else if (entry.target === containerRef2.current) videoRef = videoRef2;
        
        if (videoRef?.current) {
          if (entry.isIntersecting) {
            // Play video when it enters viewport
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
          } else {
            // Pause when it leaves viewport
            videoRef.current.pause();
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe all video containers
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    
    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [activeTab]);
  
  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };
  
  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    // Don't pause on mouse leave to keep the autoplay on viewport behavior
  };

  const testimonials = [
    {
      text: "I have grown my followers from 30k-50k and with 24M+ views and 2000+ organic leads in just 3 months also I have tried their AI Agents who handles and set appointments with our closest very smoothly and saves our tons of time and Money!\nThe One Stop Solution For business Arpan (Adventure Marketing)",
      author: "Sudhir Kove",
      role: "Coach",
      image: "/assets/Sudhir kove.webp"
    },
    {
      text: "The Ultimate Guy to handle my all needs for my business he is the man who takes care my whole marketing organic and inorganic very responsibly and his strategies are stunning and fully result oriented.",
      author: "Aman Asati",
      role: "Agency Owner & Coach",
      image: "/assets/Aman asati.webp"
    },
    {
      text: "Arpan Generated 10M+ views and 30k+followers in 4months for my clients pages and have made absolutely smooth AI automations for my clients ( That generated my clients lakhs rs of business) .Also have given Stunning Results on our clients ads that was managed by Arpan",
      author: "Siddharth Chaudhary",
      role: "Agency Owner",
      image: "/assets/sidharth chaudhary.webp"
    },
    {
      text: "Arpan has Build us a stunning Website for my business. \nAlso he have done SEO and GMB for us that is generating unlimited leads for my business.\n\nGood work and keep it up Team Adventure (Arpan)",
      author: "Subhrangshu Mahakud",
      role: "Agency Owner CEO AdHok",
      image: "/assets/Subhrangshu Mahakud.webp"
    },
    {
      text: "Arpan is the guy who worked for our content edits and UGC videos, also paid campaigns. We have generated thousands of leads. The Perfect Result Oriented Guy who generated us an unbelievable result in just 4 months.",
      author: "Prathyusha",
      role: "Influencer & UGC Head",
      image: "/assets/Prathysha.webp"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses we've helped scale
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-dark-surface rounded-full p-1 border border-dark-border">
            <button
              onClick={() => setActiveTab('written')}
              className={`px-4 sm:px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeTab === 'written'
                  ? 'bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] text-dark-bg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Written Reviews
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 sm:px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] text-dark-bg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Video Testimonials
            </button>
          </div>
        </div>

        {activeTab === 'written' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="service-card group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="text-4xl mb-4 bg-gradient-to-r from-[#5fecff] to-[#4ac2d0] bg-clip-text text-transparent inline-block">"</span>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <span className="absolute inset-0 rounded-full p-0.5 bg-gradient-to-r from-[#5fecff] to-[#4ac2d0]" style={{ zIndex: 0 }}></span>
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-dark-bg"
                    />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'video' && (
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {/* Video Testimonial */}
            <div 
              ref={containerRef2}
              className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                <video 
                  ref={videoRef2}
                  src="/videos/Video-testimonial2.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  muted={isMuted2}
                  playsInline
                  loop
                  preload="auto"
                  poster="/assets/video-testimonial-2-thumb.jpg"
                  onClick={(e) => {
                    const video = e.currentTarget;
                    if (video.paused) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#5fecff] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Sound toggle button */}
                <button 
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent video play/pause
                    setIsMuted2(!isMuted2);
                  }}
                >
                  {isMuted2 ? 
                    <VolumeX className="h-4 w-4 text-white" /> : 
                    <Volume2 className="h-4 w-4 text-[#5fecff]" />
                  }
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-foreground">Ananya Sharma</h4>
                <p className="text-sm text-muted-foreground">Marketing Director, Elevate Brands</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
