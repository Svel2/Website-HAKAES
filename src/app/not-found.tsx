'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Text */}
        <motion.h1 
          className="text-[120px] sm:text-[150px] lg:text-[200px] font-bold text-[#FF0000] leading-none mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1 
          }}
        >
          404
        </motion.h1>

        {/* Main Message */}
        <motion.h2 
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! Page can&apos;t be found.
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base text-gray-500 mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Please check the URL or return to the homepage.
        </motion.p>

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-block bg-[#FF0000] hover:bg-[#DC0000] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
        </motion.div>

        {/* Optional: Additional help text */}
        <motion.p 
          className="text-xs text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Error Code: 404 | Page Not Found
        </motion.p>
      </motion.div>
    </div>
  );
}
