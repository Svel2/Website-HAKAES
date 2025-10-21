"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  return (
    <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <motion.div 
          className="flex-1 w-full space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-[40px] font-bold italic leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HAKAES Logistik & Kargo
            <br />
            Delivering Trust and Efficiency
          </motion.h1>
          <motion.p 
            className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-600  max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            HAKAES provides reliable logistics and distribution services designed to keep businesses 
            moving across Indonesia. With our dedicated team and nationwide network, we ensure every 
            package arrives safely, on time, and with care.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-[585px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <div 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="flex overflow-x-auto h-full snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
            >
              <div className="flex-shrink-0 w-full h-full snap-center relative bg-gradient-to-br from-blue-500 to-purple-600">
                <img src="/image/Foto-1.jpg" alt="foto-home-1" className="w-full h-full object-cover" />
              </div>
              <div className="flex-shrink-0 w-full h-full snap-center relative bg-gradient-to-br from-green-500 to-teal-600">
                <img src="/image/Foto-2.jpg" alt="foto-home-2" className="w-full h-full object-cover" />
              </div>
              <div className="flex-shrink-0 w-full h-full snap-center relative bg-gradient-to-br from-orange-500 to-red-600">
                <img src="/image/Foto-3.jpg" alt="foto-home-3" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
