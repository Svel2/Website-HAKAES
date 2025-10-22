'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 500 Text */}
        <motion.h1 
          className="text-[120px] sm:text-[150px] lg:text-[200px] font-bold text-[#BC0000] leading-none mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1 
          }}
        >
          500
        </motion.h1>

        {/* Main Message */}
        <motion.h2 
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! Something went wrong.
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base text-gray-500 mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We&apos;re experiencing technical difficulties. Please try refreshing the page or come back later.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => reset()}
            className="bg-[#BC0000] hover:bg-[#9C0000] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          
          <Link 
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
        </motion.div>

        {/* Optional: Error details for development */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div 
            className="mt-8 p-4 bg-gray-100 rounded-lg text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-xs text-gray-600 font-mono break-all">
              {error.message}
            </p>
          </motion.div>
        )}

        {/* Error Code */}
        <motion.p 
          className="text-xs text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Error Code: 500 | Internal Server Error
        </motion.p>
      </motion.div>
    </div>
  );
}
