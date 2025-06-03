import { useEffect, useState, useRef } from 'react';
import { Rocket, LineChart, Target, DollarSign } from 'lucide-react';

const ResultsSection = () => {
  const [counters, setCounters] = useState({
    views: 0,
    followers: 0,
    subscribers: 0,
    leads: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = {
    views: 50000000, // Changed from 20M to 50M
    followers: 50000,
    subscribers: 20000,
    leads: 2000
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        views: Math.floor(targets.views * easeOutQuart),
        followers: Math.floor(targets.followers * easeOutQuart),
        subscribers: Math.floor(targets.subscribers * easeOutQuart),
        leads: Math.floor(targets.leads * easeOutQuart)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '+';
  };

  return (
    <section id="results" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Removed animated particles */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            What the Numbers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results, proven performance — we let the data speak for itself.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
              <Rocket className="text-[#5fecff] w-12 h-12" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#5fecff] mb-2">
              {formatNumber(counters.views)}
            </div>
            <div className="text-muted-foreground">Video Views</div>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
              <LineChart className="text-[#5fecff] w-12 h-12" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#5fecff] mb-2">
              {formatNumber(counters.followers)}
            </div>
            <div className="text-muted-foreground">Social Followers Gained</div>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
              <Target className="text-[#5fecff] w-12 h-12" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#5fecff] mb-2">
              {formatNumber(counters.subscribers)}
            </div>
            <div className="text-muted-foreground">YouTube Subscribers</div>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
              <DollarSign className="text-[#5fecff] w-12 h-12" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#5fecff] mb-2">
              {formatNumber(counters.leads)}
            </div>
            <div className="text-muted-foreground">Organic Leads Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
