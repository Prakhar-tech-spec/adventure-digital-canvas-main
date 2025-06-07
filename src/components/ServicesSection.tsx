import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useRef, useEffect } from 'react';
import VideoModal from './VideoModal';
import { Users, Video, Palette, Target, Code, Bot, Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const services = [{
    title: "Social Media Strategy & Management",
    description: "Smart content plans, on-brand visuals, and consistent posting — fully managed for growth.",
    icon: <Users />
  }, {
    title: "Video Editing",
    description: "Short-form edits, reels, promos, and ad creatives that stop the scroll and drive clicks.",
    icon: <Video />
  }, {
    title: "YouTube Thumbnails & Graphic Design",
    description: "Thumbnails, carousels & creatives designed to hook attention and boost engagement instantly.",
    icon: <Palette />
  }, {
    title: "Paid Ads (Primary Expertise)",
    description: "Launch, manage, and scale paid campaigns that convert — on Meta, Google, YouTube & beyond.",
    icon: <Target />
  }, {
    title: "Web & App Development",
    description: "Pixel-perfect websites, landing pages, and custom tools — built fast and built to perform.",
    icon: <Code />
  }, {
    title: "AI Agents & Automation Setups",
    description: "Custom AI agents, chatbots, and automations that save time, respond faster, and scale operations.",
    icon: <Bot />
  }];

  // Updated project arrays with video URLs - replace these with your actual content
  const videoProjects = [{
    id: 1,
    title: "$5 VS $110 Edit",
    image: "/assets/$5-vs-110-edit-thumbnail.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/shorts/ri7Mr8qwqV0"
  }, {
    id: 2,
    title: "Before VS After",
    image: "/assets/before-vs-after-thumbnail.jpg",
    type: "video",
    videoUrl: "https://www.instagram.com/p/PLACEHOLDER_ID/"
  }, {
    id: 3,
    title: "Faceless Edit",
    image: "/assets/faceless-edit-thumbnail.jpg",
    type: "video",
    videoUrl: "https://www.instagram.com/reel/PLACEHOLDER_ID_2/"
  }];
  const designProjects = [{
    id: 1,
    title: "Thumbnail: 1",
    image: "/assets/thumbnail-1.webp",
    type: "image"
  }, {
    id: 2,
    title: "Thumbnail: 2",
    image: "/assets/thumbnail-2.webp",
    type: "image"
  }, {
    id: 3,
    title: "Thumbnail: 3",
    image: "/assets/thumbnail-3.webp",
    type: "image"
  }, {
    id: 4,
    title: "Graphic Design: 1",
    image: "/assets/graphic-1.webp",
    type: "image"
  }, {
    id: 5,
    title: "Graphic Design: 2",
    image: "/assets/graphic-2.webp",
    type: "image"
  }];
  const webProjects = [{
    id: 1,
    title: "Inventory Management Software",
    image: "/assets/Inventory-management-software.webp",
    type: "image"
  }, {
    id: 2,
    title: "EMI Management Software",
    image: "/assets/EMI management software.webp",
    type: "image"
  }, {
    id: 3,
    title: "Software for Realtors",
    image: "/assets/Software for realtors.webp",
    type: "image"
  }, {
    id: 4,
    title: "Website - 1",
    image: "/assets/website-1.webp",
    type: "image"
  }, {
    id: 5,
    title: "Website - 2",
    image: "/assets/website-2.webp",
    type: "image"
  }, {
    id: 6,
    title: "Website - 3",
    image: "/assets/website-3.webp",
    type: "image"
  }];
  const adsProjects = [{
    id: 1,
    title: "ads-1",
    image: "/assets/ads-1.webp",
    type: "image"
  }, {
    id: 2,
    title: "ads-2",
    image: "/assets/ads-2.webp",
    type: "image"
  }, {
    id: 3,
    title: "ads-3",
    image: "/assets/ads-3.webp",
    type: "image"
  }];
  const socialProjects = [{
    id: 7,
    title: "Social Media Result : 1",
    image: "/assets/social-media-result1.webp",
    type: "image"
  }, {
    id: 2,
    title: "Instagram Result : 1",
    image: "/assets/Instagram result 1.webp",
    type: "image"
  }, {
    id: 3,
    title: "Instagram Result : 2",
    image: "/assets/Instagram result 2.webp",
    type: "image"
  }, {
    id: 4,
    title: "Instagram Result : 3",
    image: "/assets/Instagram result 3.webp",
    type: "image"
  }, {
    id: 5,
    title: "Youtube Result : 1",
    image: "/assets/Youtube result 1.webp",
    type: "image"
  }, {
    id: 6,
    title: "Youtube Result : 2",
    image: "/assets/Youtube result 2.webp",
    type: "image"
  }, {
    id: 1,
    title: "Facebook Result",
    image: "/assets/Facebook Result 1.webp",
    type: "image"
  }
  ];
  const aiAgentProjects = [
    { id: 1, title: "AI Agent : 1", image: "/assets/ai-calling-agent.webp", type: "image" },
    { id: 2, title: "AI Agent : 2", image: "/assets/ai-agent-2.webp", type: "image" },
    { id: 3, title: "AI Agent : 3", image: "/assets/ai-agent-3.webp", type: "image" },
  ];
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            Your All-in-One Growth Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need — from creative to code — to scale smarter, faster, and bolder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="service-card group">
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 pt-10 border-t border-dark-border">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
              What We've Done
            </h3>
            <p className="text-muted-foreground">
              A curated showcase of our high-performance work across content, campaigns, and custom builds.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-full overflow-x-auto scrollbar-hide mx-auto md:max-w-3xl md:w-auto">
                <TabsList className="bg-dark-surface border border-dark-border min-w-max whitespace-nowrap flex-nowrap">
                <TabsTrigger value="all">All Work</TabsTrigger>
                <TabsTrigger value="video">Video Editing</TabsTrigger>
                <TabsTrigger value="design">Graphics & Thumbnails</TabsTrigger>
                <TabsTrigger value="web">Web & App</TabsTrigger>
                <TabsTrigger value="ads">Paid Ads</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
                <TabsTrigger value="ai-agents">AI Agents</TabsTrigger>
              </TabsList>
              </div>
            </div>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoProjects.map((project, index) => (
                  <ProjectCard key={`all-video-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoProjects.map(project => (
                  <ProjectCard key={`video-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designProjects.map(project => (
                  <ProjectCard key={`design-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map(project => (
                  <ProjectCard key={`web-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ads" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adsProjects.map(project => (
                  <ProjectCard key={`ads-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {socialProjects.map(project => (
                  <ProjectCard key={`social-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai-agents" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiAgentProjects.map(project => (
                  <ProjectCard key={`ai-agent-${project.id}`} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// Updated ProjectCard component to handle videos
const ProjectCard = ({ project }: { project: any }) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  
  // State to track mute status for each video
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const [isMuted3, setIsMuted3] = useState(true);
  
  // Intersection Observer setup
  useEffect(() => {
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
        else if (entry.target === containerRef3.current) videoRef = videoRef3;
        
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
    if (containerRef3.current) observer.observe(containerRef3.current);
    
    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };
  
  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    // Don't pause on mouse leave to keep the autoplay on viewport behavior
    // Only reset if completely out of viewport, which is handled by Intersection Observer
  };

  const [open, setOpen] = useState(false);

  if (project.title === "$5 VS $110 Edit") {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
      <div 
        ref={containerRef1}
        className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={() => handleMouseEnter(videoRef1)}
        onMouseLeave={() => handleMouseLeave(videoRef1)}
            onClick={() => setOpen(true)}
      >
        <div className="relative aspect-[9/16] overflow-hidden">
          <video 
            ref={videoRef1}
            src="/videos/$5 VS $110 Edit.mp4"
            className="w-full h-full object-cover cursor-pointer"
            muted={isMuted1}
            playsInline
            loop
            preload="metadata"
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
              setIsMuted1(!isMuted1);
            }}
          >
            {isMuted1 ? 
              <VolumeX className="h-4 w-4 text-white" /> : 
              <Volume2 className="h-4 w-4 text-[#5fecff]" />
            }
          </button>
        </div>
        <div className="p-4">
          <h4 className="font-medium text-foreground">{project.title}</h4>
        </div>
      </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-full p-4 sm:p-8 bg-dark-surface rounded-lg flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <video src="/videos/$5 VS $110 Edit.mp4" controls autoPlay className="w-full h-auto max-h-[80vh] rounded-lg bg-black" />
          </div>
          <div className="w-full text-center py-2 text-lg font-semibold text-foreground">{project.title}</div>
        </DialogContent>
      </Dialog>
    );
  }
  
  if (project.title === "Before VS After") {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
      <div 
        ref={containerRef2}
        className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={() => handleMouseEnter(videoRef2)}
        onMouseLeave={() => handleMouseLeave(videoRef2)}
            onClick={() => setOpen(true)}
      >
        <div className="relative aspect-[9/16] overflow-hidden">
          <video 
            ref={videoRef2}
            src="/videos/Before VS After.mp4"
            className="w-full h-full object-cover cursor-pointer"
            muted={isMuted2}
            playsInline
            loop
            preload="metadata"
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
          <h4 className="font-medium text-foreground">{project.title}</h4>
        </div>
      </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-full p-4 sm:p-8 bg-dark-surface rounded-lg flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <video src="/videos/Before VS After.mp4" controls autoPlay className="w-full h-auto max-h-[80vh] rounded-lg bg-black" />
          </div>
          <div className="w-full text-center py-2 text-lg font-semibold text-foreground">{project.title}</div>
        </DialogContent>
      </Dialog>
    );
  }
  
  if (project.title === "Faceless Edit") {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
      <div 
        ref={containerRef3}
        className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={() => handleMouseEnter(videoRef3)}
        onMouseLeave={() => handleMouseLeave(videoRef3)}
            onClick={() => setOpen(true)}
      >
        <div className="relative aspect-[9/16] overflow-hidden">
          <video 
            ref={videoRef3}
            src="/videos/Faceless Edit.mp4"
            className="w-full h-full object-cover cursor-pointer"
            muted={isMuted3}
            playsInline
            loop
            preload="metadata"
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
              setIsMuted3(!isMuted3);
            }}
          >
            {isMuted3 ? 
              <VolumeX className="h-4 w-4 text-white" /> : 
              <Volume2 className="h-4 w-4 text-[#5fecff]" />
            }
          </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-foreground">{project.title}</h4>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-full p-4 sm:p-8 bg-dark-surface rounded-lg flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <video src="/videos/Faceless Edit.mp4" controls autoPlay className="w-full h-auto max-h-[80vh] rounded-lg bg-black" />
          </div>
          <div className="w-full text-center py-2 text-lg font-semibold text-foreground">{project.title}</div>
        </DialogContent>
      </Dialog>
    );
  }
  
  if (project.title === "AI Agent : 1") {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioToggle = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    };

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      const handleEnded = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }, []);

    return (
      <div className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1 relative">
        <div className="relative aspect-video overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={handleAudioToggle}
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
            style={{ background: 'rgba(0,0,0,0.35)' }}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            type="button"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            ) : (
              <Play className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            )}
          </button>
          <audio ref={audioRef} src="/assets/ai-calling-agent-audio.wav" preload="auto" />
        </div>
        <div className="p-4">
          <h4 className="font-medium text-foreground">{project.title}</h4>
        </div>
      </div>
    );
  }
  
  if (project.title === "AI Agent : 2") {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioToggle = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    };

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      const handleEnded = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }, []);

    return (
      <div className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1 relative">
        <div className="relative aspect-video overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={handleAudioToggle}
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
            style={{ background: 'rgba(0,0,0,0.35)' }}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            type="button"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            ) : (
              <Play className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            )}
          </button>
          <audio ref={audioRef} src="/assets/ai-agent-2-audio.mp4" preload="auto" />
        </div>
        <div className="p-4">
          <h4 className="font-medium text-foreground">{project.title}</h4>
        </div>
      </div>
    );
  }
  
  if (project.title === "AI Agent : 3") {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioToggle = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    };

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      const handleEnded = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }, []);
  
  return (
      <div className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1 relative">
        <div className="relative aspect-video overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={handleAudioToggle}
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
            style={{ background: 'rgba(0,0,0,0.35)' }}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            type="button"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            ) : (
              <Play className="w-16 h-16 text-white bg-[#5fecff] rounded-full p-4 shadow-lg" />
            )}
          </button>
          <audio ref={audioRef} src="/assets/ai-agent-3-audio.mp4" preload="auto" />
        </div>
        <div className="p-4">
          <h4 className="font-medium text-foreground">{project.title}</h4>
        </div>
      </div>
    );
  }
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="overflow-hidden rounded-lg bg-dark-surface border border-dark-border group hover:border-[#5fecff] transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setOpen(true)}>
          {project.type === "image" && (project.title === "Youtube Result : 1" || project.title === "Youtube Result : 2") ? (
            <div className="relative aspect-video overflow-hidden bg-[#181A20]">
              <BlurImage
                src={project.image}
                alt={project.title}
                className="w-full h-full"
          />
        </div>
      ) : project.type === "image" && [
        "Facebook Result",
        "Instagram Result : 1",
        "Instagram Result : 2",
        "Instagram Result : 3",
        "Social Media Result : 1"
      ].includes(project.title) ? (
            <div className="relative aspect-[9/16] overflow-hidden bg-[#181A20]">
              <BlurImage
            src={project.image}
            alt={project.title}
                className="w-full h-full"
          />
        </div>
      ) : (
            <div className="relative aspect-video overflow-hidden bg-[#181A20]">
          {project.type === "video" && project.videoUrl ? (
            <VideoModal
              videoUrl={project.videoUrl}
              title={project.title}
              thumbnail={project.image}
            />
          ) : (
                <BlurImage
              src={project.image}
              alt={project.title}
                  className="w-full h-full"
            />
          )}
        </div>
      )}
      <div className="p-4">
        <h4 className="font-medium text-foreground">{project.title}</h4>
      </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full p-4 sm:p-8 bg-dark-surface rounded-lg flex flex-col items-center justify-center">
        {project.type === 'image' ? (
          <img src={project.image} alt={project.title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
        ) : project.type === 'video' && project.videoUrl ? (
          <div className="w-full flex flex-col items-center">
            <video src={project.videoUrl} controls autoPlay className="w-full h-auto max-h-[80vh] rounded-lg bg-black" />
          </div>
        ) : null}
        <div className="w-full text-center py-2 text-lg font-semibold text-foreground">{project.title}</div>
      </DialogContent>
    </Dialog>
  );
};

// Helper BlurImage component
const BlurImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  // Generate a low-res version by appending ?w=20&blur (if using an image CDN) or use a static tiny image if available
  // For now, fallback to a blurred version of the same image (CSS blur)
  return (
    <div className={`relative w-full h-full ${className || ''}`} style={{ background: '#181A20' }}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100 blur-md scale-105'}`}
        aria-hidden="true"
        style={{ filter: 'blur(16px)', pointerEvents: 'none' }}
      />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        draggable={false}
      />
    </div>
  );
};

export default ServicesSection;
