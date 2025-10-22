'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Text */}
        <motion.h1 
          className="text-[100px] sm:text-[120px] lg:text-[150px] font-bold text-[#FF0000] leading-none mb-4"
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
          Service Not Found
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base text-gray-500 mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The service you&apos;re looking for doesn&apos;t exist. Please check our available services below.
        </motion.p>

        {/* Available Services */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-semibold text-gray-700 mb-4">Our Available Services:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-sm mx-auto text-sm">
            <Link href="/services/logistic-distribution" className="text-[#FF0000] hover:underline">
              • Logistic & Distribution
            </Link>
            <Link href="/services/innercity-services" className="text-[#FF0000] hover:underline">
              • Innercity Services
            </Link>
            <Link href="/services/outercity-services" className="text-[#FF0000] hover:underline">
              • Outercity Services
            </Link>
            <Link href="/services/cargo-delivery" className="text-[#FF0000] hover:underline">
              • Cargo Delivery
            </Link>
            <Link href="/services/sameday-service" className="text-[#FF0000] hover:underline">
              • Same Day Service
            </Link>
            <Link href="/services/regular-service" className="text-[#FF0000] hover:underline">
              • Regular Service
            </Link>
          </div>
        </motion.div>

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/"
            className="inline-block bg-[#FF0000] hover:bg-[#DC0000] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
