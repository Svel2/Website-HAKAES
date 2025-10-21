"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate with your backend API here
    alert("Thank you for contacting HAKAES! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-[48px] font-bold text-center text-[#FF0000] mb-8 sm:mb-10 lg:mb-12">
        Contact Us
      </h2>

      <motion.div 
        className="bg-gradient-to-r from-[#FF4141] to-[#BC1414] rounded-2xl sm:rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-0">
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[550px] bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden">
              <img 
                src="/image/ContactUs.jpg" 
                alt="Contact HAKAES Logistics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none resize-none font-[family-name:var(--font-inter)] placeholder:text-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-gray-50 text-[#FF0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto mt-2"
              >
                Send
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
