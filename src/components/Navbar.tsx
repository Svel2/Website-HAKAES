"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Jika tidak di landing page, redirect ke landing page dengan anchor
    if (pathname !== '/') {
      router.push(`/${targetId}`);
      setIsOpen(false);
      return;
    }
    
    // Jika di landing page, smooth scroll
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-2 sm:top-4 z-50 mx-auto max-w-5xl px-2 sm:px-4">
      <div className="bg-white backdrop-blur-md shadow-lg border border-gray-200" style={{ borderRadius: '30px' }}>
        <div className="flex justify-between items-center h-14 sm:h-16 px-4 sm:px-6">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
              <img src="/logo/LOGO.svg" alt="Logo HAKAES" className="h-8 sm:h-10" />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                Home
              </Link>
              <a
                href="#about"
                onClick={(e) => smoothScroll(e, '#about')}
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => smoothScroll(e, '#services')}
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                Services
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="bg-[#FF0000] hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200" style={{ borderRadius: '30px' }}>
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="text-gray-900 hover:bg-gray-100 block px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
            >
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, '#about')}
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => smoothScroll(e, '#services')}
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
