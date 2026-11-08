import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '../../data/siteImages';

interface CinematicHeroProps {
  onExploreProducts: () => void;
  onDiscoverScience: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onExploreProducts,
  onDiscoverScience,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Ensure autoplay starts reliably
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay policy fallback: user interaction will trigger playback
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
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
    <section id="hero" className="relative w-full bg-[#000000] text-white">
      {/* 
        Framed Video Presentation:
        Top padding ensures the fixed header does not cover any video content or embedded text.
        16:9 aspect ratio container ensures 100% of video and text is visible on both mobile and desktop without cropping.
      */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative w-full aspect-video bg-black overflow-hidden border border-white/10 group shadow-2xl">
          {/* Pure Video Element - clear and in original colors without dark gradient overlays */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={SITE_IMAGES.brand.hero}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain bg-black cursor-pointer"
            onClick={togglePlay}
            aria-label="Eastetic Hero Brand Video"
          >
            <source src="/assets/aistudio/video_19855f65.mp4" type="video/mp4" />
            <source src="/videos/eastetic-hero.mp4" type="video/mp4" />
            {/* Fallback image if video fails or is unsupported */}
            <img
              src={SITE_IMAGES.brand.hero}
              alt="Eastetic - Touch Your Skin - European Medical Aesthetics"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </video>

          {/* 
            Accessible Video Controls Overlay:
            Positioned cleanly in the bottom corner with high contrast and accessible labeling
          */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center space-x-2">
            {/* Play / Pause Toggle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-[10px] font-technical uppercase tracking-[0.18em] border border-white/20 hover:border-white transition-all cursor-pointer backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white"
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

            {/* Mute / Unmute Toggle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-[10px] font-technical uppercase tracking-[0.18em] border border-white/20 hover:border-white transition-all cursor-pointer backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white"
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
        </div>
      </div>

      {/* 
        Compact, Clean Section Below Video for Hero CTAs & Positioning
      */}
      <div className="w-full border-t border-b border-white/10 bg-[#000000] py-6 sm:py-7 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle Technical Positioning Line */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-6 h-[1px] bg-white/60 hidden sm:block shrink-0" />
            <div>
              <span className="text-[10px] font-technical uppercase tracking-[0.3em] text-neutral-400 block">
                EASTETIC // BARCELONA, ES
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-[0.02em]">
                Clinically engineered solutions for modern aesthetic medicine.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <button
              onClick={onExploreProducts}
              className="group relative inline-flex items-center justify-center space-x-3 px-8 py-3.5 bg-white text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

            <button
              onClick={onDiscoverScience}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white text-xs font-medium uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span>Discover the Science</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
