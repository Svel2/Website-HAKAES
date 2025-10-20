"use client";

import { useRef, useCallback, useState } from "react";

export default function AboutUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.offsetWidth;
    const scrollPosition = container.scrollLeft;
    const currentSlide = Math.round(scrollPosition / slideWidth);
    setActiveSlide(currentSlide);
  }, []);

  const slides = [
    {
      title: "Our Mission",
      content: "To provide reliable, efficient, and integrated logistics solutions nationwide. We are committed to supporting business growth through timely delivery and professional service excellence."
    },
    {
      title: "Our Vision",
      content: "To be the leading logistics company in Indonesia that delivers reliable, efficient, and integrated solutions with nationwide coverage and exceptional service quality."
    },
    {
      title: "Our Values",
      content: "Trust, efficiency, and reliability are at the core of everything we do. We're dedicated to delivering exceptional quality and building lasting partnerships with our clients."
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-[1166px] bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[450px] lg:h-[513px]">
            <div className="flex-1 lg:w-1/2 p-4 sm:p-6 order-2 lg:order-1 flex flex-col">
              <div 
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onScroll={handleScroll}
                className="flex gap-3 sm:gap-4 overflow-x-auto h-[240px] sm:h-[300px] lg:flex-1 snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
              >
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full h-full snap-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center"
                  >
                    <h3 className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {slide.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
                      {slide.content}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-4 pb-2">
                {slides.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index ? 'bg-[#FF0000] w-8' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 lg:w-1/2 p-4 sm:p-6 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
              <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-[40px] font-bold italic leading-tight text-gray-900 mb-4 sm:mb-6">
                About Us
              </h2>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-600">
                  PT HAKAES Tunas Sinergi specializes in logistics and cargo services with nationwide coverage across 37+ cities in Indonesia.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-600">
                  With our 1,400 sqm warehouse in Jakarta and extensive regional network, we deliver spare parts and cargo efficiently.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-600">
                  From same-day express to regular services, we ensure safe and punctual delivery for your business needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FF0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                    <div className="font-[family-name:var(--font-inter)] text-sm sm:text-base font-medium text-gray-700">Service</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FF0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold text-gray-900">1500+</div>
                    <div className="font-[family-name:var(--font-inter)] text-sm sm:text-base font-medium text-gray-700">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
