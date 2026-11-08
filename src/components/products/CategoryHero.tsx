import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { ProductCategoryType } from '../../data/products';
import { CATEGORY_HERO_VIDEOS, CategoryHeroMedia } from '../../data/categoryHeroVideos';

interface CategoryHeroProps {
  category: 'All' | ProductCategoryType;
}

export const CategoryHero: React.FC<CategoryHeroProps> = ({ category }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Active category configuration
  const currentMedia: CategoryHeroMedia =
    CATEGORY_HERO_VIDEOS[category] || CATEGORY_HERO_VIDEOS['All'];

  const hasVideo = Boolean(currentMedia.videoSrc);

  // Manage autoplay on mount or category change
  useEffect(() => {
    if (videoRef.current && hasVideo) {
      videoRef.current.muted = isMuted;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay fallback for strict browser policies
          setIsPlaying(false);
        });
    }
  }, [category, hasVideo, isMuted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section aria-label="Category Hero Video" className="relative w-full">
      {/* 
        Hero Video Container:
        - 16:9 aspect ratio prevents distortion or stretching
        - Edge-to-edge presentation within page max-width
        - No text overlaid across the video per specification
      */}
      <div className="relative w-full aspect-video bg-black overflow-hidden border border-white/10 group shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full relative"
          >
            {hasVideo ? (
              <video
                ref={videoRef}
                key={currentMedia.videoSrc}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                poster={currentMedia.posterSrc}
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain bg-black cursor-pointer"
                aria-label={currentMedia.alt}
              >
                <source src={currentMedia.videoSrc} type="video/mp4" />
                {/* Fallback image */}
                <img
                  src={currentMedia.posterSrc}
                  alt={currentMedia.alt}
                  className="w-full h-full object-contain bg-black"
                  referrerPolicy="no-referrer"
                />
              </video>
            ) : (
              <div className="w-full h-full relative flex items-center justify-center bg-black">
                <img
                  src={currentMedia.posterSrc}
                  alt={currentMedia.alt}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle technical watermark for categories awaiting video upload */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-technical uppercase tracking-[0.25em] text-neutral-400">
                  MONOGRAPH // {category}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* 
          Accessible Video Controls:
          Discreetly placed at bottom corner; no text blocking the video presentation
        */}
        {hasVideo && (
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-black/80 hover:bg-black text-white text-[10px] font-technical uppercase tracking-[0.18em] border border-white/20 hover:border-white transition-all cursor-pointer backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-current" />
                  <span className="hidden sm:inline">PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current" />
                  <span className="hidden sm:inline">PLAY</span>
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
              className="inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-black/80 hover:bg-black text-white text-[10px] font-technical uppercase tracking-[0.18em] border border-white/20 hover:border-white transition-all cursor-pointer backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white"
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">UNMUTE</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
