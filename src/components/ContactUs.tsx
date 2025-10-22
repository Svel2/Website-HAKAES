"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result: { success?: boolean; message?: string; errors?: Record<string, string> } =
        await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const fieldError = result.errors && Object.values(result.errors)[0];
        throw new Error(fieldError || result.message || "Terjadi kesalahan saat mengirim formulir.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.",
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-28 md:scroll-mt-20"
    >
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
              <Image
                src="/image/ContactUs.jpg"
                alt="Contact HAKAES Logistics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
              <div className="grid gap-4 sm:gap-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400"
                      required
                      minLength={2}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                    >
                      Last Name (optional)
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                  >
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
                    autoComplete="email"
                    inputMode="email"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                  >
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
                    minLength={10}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {status === "success" && (
                <div className="rounded-xl px-4 py-3 bg-green-50 text-green-800 font-[family-name:var(--font-inter)] text-sm shadow-sm">
                  Terima kasih! Pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl px-4 py-3 bg-white/10 text-white font-[family-name:var(--font-inter)] text-sm shadow-sm">
                  {errorMessage || "Terjadi kesalahan saat mengirim formulir. Silakan coba lagi."}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="bg-white hover:bg-gray-50 disabled:bg-white/70 disabled:text-[#FF0000]/60 text-[#FF0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto mt-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
