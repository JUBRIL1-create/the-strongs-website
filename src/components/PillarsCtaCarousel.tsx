import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play, Sparkles } from 'lucide-react';

interface SlideData {
  id: string;
  pillar: string;
  statement: string;
  supporting: string;
  imageUrl: string;
  imageAlt: string;
  textPositionClass: string;
  gradientClass: string;
  mobileObjectPosition: string;
  desktopObjectPosition: string;
}

const SLIDES: SlideData[] = [
  {
    id: 'sustainability',
    pillar: 'SUSTAINABILITY',
    statement: "Building progress that meets today's needs while protecting tomorrow.",
    supporting:
      'THE STRONGS pursues solutions that create meaningful progress while recognizing the responsibility we have to future generations.',
    imageUrl: 'https://i.postimg.cc/nr19h6ZR/dji-agras-agriculture-4208863-1280.jpg',
    imageAlt: 'Agricultural technology and sustainable farming drone in open field',
    textPositionClass: 'justify-end lg:justify-start items-start text-left',
    gradientClass:
      'bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/60 to-black/20 lg:w-3/5',
    mobileObjectPosition: 'object-[center_35%]',
    desktopObjectPosition: 'object-center',
  },
  {
    id: 'innovation',
    pillar: 'INNOVATION',
    statement: 'Turning bold ideas into solutions that move society forward.',
    supporting:
      'We believe innovation begins with curiosity, grows through creativity and becomes meaningful when it solves real problems.',
    imageUrl: 'https://i.postimg.cc/B6H1djVz/piro4d-lightbulb-2632075-1280.jpg',
    imageAlt: 'Illuminated lightbulb representing ideas, creativity and innovative solutions',
    textPositionClass: 'justify-end lg:justify-start items-start text-left',
    gradientClass:
      'bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/60 to-black/20 lg:w-3/5',
    mobileObjectPosition: 'object-center',
    desktopObjectPosition: 'object-center',
  },
  {
    id: 'technology',
    pillar: 'TECHNOLOGY',
    statement: 'Using technology to transform possibilities into real-world impact.',
    supporting:
      'We explore and apply technology as a tool for solving challenges, improving lives and shaping a smarter future.',
    imageUrl: 'https://i.postimg.cc/9QQZrFDj/this-is-engineering-woman-8499959-1280.jpg',
    imageAlt: 'Engineer working with modern technology and digital equipment',
    textPositionClass: 'justify-end lg:justify-start items-start text-left',
    gradientClass:
      'bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/65 to-black/20 lg:w-3/5',
    mobileObjectPosition: 'object-[center_18%]',
    desktopObjectPosition: 'object-[center_20%]',
  },
  {
    id: 'research',
    pillar: 'RESEARCH',
    statement:
      'Turning curiosity into knowledge, knowledge into solutions, and ideas into meaningful impact.',
    supporting:
      'Research drives our understanding, challenges assumptions and helps transform questions into discoveries that can shape the future.',
    imageUrl: 'https://i.postimg.cc/SKzXMXkn/geralt-doctor-6676747-1280.jpg',
    imageAlt: 'Medical researcher and healthcare scientist analysing diagnostic research data',
    textPositionClass: 'justify-end lg:justify-start items-start text-left',
    gradientClass:
      'bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/65 to-black/20 lg:w-3/5',
    mobileObjectPosition: 'object-[center_20%]',
    desktopObjectPosition: 'object-[center_25%]',
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds per slide

interface PillarsCtaCarouselProps {
  onNavigate: (path: string) => void;
}

export const PillarsCtaCarousel: React.FC<PillarsCtaCarouselProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer & progress handling
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // Update every 50ms for smooth progress bar
    const step = (intervalTime / AUTO_PLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      className="py-20 lg:py-28 bg-[#fafafa] border-b border-slate-100 overflow-hidden"
      aria-label="What Drives Our Innovation Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>OUR CORE PILLARS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            What Drives Our Innovation
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            The ideas we pursue today shape the possibilities of tomorrow.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="What Drives Our Innovation Carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-800/80 w-full min-h-[580px] xs:min-h-[550px] sm:min-h-[560px] md:min-h-[500px] lg:min-h-[540px] md:aspect-[16/8] lg:aspect-[16/7] flex items-stretch focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          {/* Slides */}
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${slide.pillar}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col md:block ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Mobile Image Section (< md) */}
                <div className="relative w-full h-52 xs:h-60 sm:h-68 md:hidden shrink-0 overflow-hidden bg-slate-900">
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt}
                    className={`w-full h-full object-cover ${slide.mobileObjectPosition}`}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/25 to-transparent" />

                  {/* Mobile Top Pill & Counter */}
                  <div className="absolute top-3.5 inset-x-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[11px] font-bold tracking-widest uppercase shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {slide.pillar}
                    </span>

                    <span className="text-[11px] font-semibold tracking-wider text-slate-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                      0{index + 1} / 0{SLIDES.length}
                    </span>
                  </div>

                  {/* Mobile Prev / Next overlay controls on image */}
                  <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-10">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous slide"
                      className="pointer-events-auto w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm flex items-center justify-center border border-white/20 active:scale-95 transition-transform cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="pointer-events-auto w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm flex items-center justify-center border border-white/20 active:scale-95 transition-transform cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Desktop & Tablet Background Image & Overlay (md+) */}
                <div className="hidden md:block absolute inset-0">
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt}
                    className={`w-full h-full object-cover ${slide.desktopObjectPosition} transform scale-100 transition-transform duration-1000 ease-out`}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className={`absolute inset-0 ${slide.gradientClass} transition-all duration-700`} />
                </div>

                {/* Content Overlay / Lower Area */}
                <div className="relative flex-1 md:absolute md:inset-0 p-5 sm:p-6 md:p-10 lg:p-14 flex flex-col justify-between">
                  {/* Desktop Top Bar (hidden on mobile) */}
                  <div className="hidden md:flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-xs border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {slide.pillar}
                    </span>

                    <span className="text-xs font-semibold tracking-wider text-slate-300 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      0{index + 1} / 0{SLIDES.length}
                    </span>
                  </div>

                  {/* Main Text Content */}
                  <div className="max-w-2xl space-y-3 sm:space-y-4 pb-14 sm:pb-16 md:pb-8 my-auto md:my-0">
                    <h3 className="font-display font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-snug drop-shadow-sm">
                      {slide.statement}
                    </h3>

                    <p className="text-slate-300 md:text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
                      {slide.supporting}
                    </p>

                    {/* Final Slide CTA Button: Research Slide Only */}
                    {slide.id === 'research' && (
                      <div className="pt-2 sm:pt-3">
                        <button
                          onClick={() => onNavigate('/contact')}
                          className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
                          aria-label="Join the Movement - Contact THE STRONGS"
                        >
                          <span>Join the Movement</span>
                          <ArrowRight className="w-4 h-4 text-slate-950" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Desktop Navigation Controls: Prev / Next Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 inset-x-3 sm:inset-x-6 items-center justify-between z-20 pointer-events-none">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Segmented Progress Indicators & Pause/Play Control */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 inset-x-4 sm:inset-x-6 md:inset-x-12 z-20 flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
            {/* Segmented Indicators */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 flex-1 max-w-xl">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                const isPassed = idx < currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.pillar}`}
                    className="group py-1.5 sm:py-2 flex flex-col gap-1 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="h-1 sm:h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 transition-all duration-100 ease-linear rounded-full"
                        style={{
                          width: isActive ? `${progress}%` : isPassed ? '100%' : '0%',
                        }}
                      />
                    </div>
                    <span
                      className={`text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase transition-colors hidden xs:block truncate ${
                        isActive
                          ? 'text-emerald-300 font-bold'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {slide.pillar}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pause / Resume Button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              className="p-1.5 sm:p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {isPaused ? <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
