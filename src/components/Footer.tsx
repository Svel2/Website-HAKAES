"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#430000] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold mb-4">
              HAKAES
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300">
              PT HAKAES Tunas Sinergi - Your trusted logistics and cargo partner across Indonesia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300">
                  Jl. Haji Kelik, Ruko Permata Regency No. 26c<br />
                  Jakarta Barat 11630
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300">
                  021-22544961<br />
                  0821-14241867<br />
                  0898-6564218
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Email & Website */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300">
                  govalandaresta@gmail.com<br />
                  rafinisa.rspc@gmail.com
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a 
                  href="http://www.hakaes.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  www.hakaes.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white -800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-[family-name:var(--font-inter)] text-sm text-white text-center sm:text-left">
              © 2025 PT HAKAES Tunas Sinergi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="font-[family-name:var(--font-inter)] text-sm text-white hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-[family-name:var(--font-inter)] text-sm text-white hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
