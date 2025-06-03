import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
interface VideoModalProps {
  videoUrl: string;
  title: string;
  thumbnail: string;
}
const VideoModal = ({
  videoUrl,
  title,
  thumbnail
}: VideoModalProps) => {
  // Convert URLs to embed format
  const getEmbedUrl = (url: string) => {
    // YouTube URL formats
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Instagram URL formats
    if (url.includes('instagram.com/p/') || url.includes('instagram.com/reel/')) {
      // For Instagram, we'll keep the original URL as the iframe src will be handled differently
      return url;
    }
    
    return url;
  };
  
  // Check if URL is Instagram
  const isInstagram = videoUrl.includes('instagram.com');
  
  return <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-electric-teal flex items-center justify-center">
              <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0">
        <div className="aspect-video">
          {isInstagram ? (
            <iframe 
              src={`${getEmbedUrl(videoUrl)}/embed`} 
              title={title} 
              className="w-full h-full rounded-lg border-none" 
              allowFullScreen
            />
          ) : (
            <iframe 
              src={getEmbedUrl(videoUrl)} 
              title={title} 
              className="w-full h-full rounded-lg" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          )}
        </div>
      </DialogContent>
    </Dialog>;
};
export default VideoModal;