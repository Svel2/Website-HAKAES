"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

type FormField = "name" | "email" | "phone" | "message";
type FormErrors = Partial<Record<"name" | "email" | "phone" | "message" | "token", string>>;
type FormStatus = { type: "success" | "error"; message: string };

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!recaptchaSiteKey) {
      setCaptchaError("Konfigurasi reCAPTCHA belum tersedia. Silakan hubungi administrator.");
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const scriptId = "recaptcha-v3-script";
    const existingScript = document.getElementById(scriptId);

    const handleScriptLoad = () => {
      setCaptchaError(null);
      setCaptchaReady(true);
    };

    const handleScriptError = () => {
      setCaptchaReady(false);
      setCaptchaError("Gagal memuat reCAPTCHA. Silakan muat ulang halaman.");
    };

    if (existingScript) {
      if (window.grecaptcha) {
        handleScriptLoad();
      } else {
        existingScript.addEventListener("load", handleScriptLoad);
        existingScript.addEventListener("error", handleScriptError);
        return () => {
          existingScript.removeEventListener("load", handleScriptLoad);
          existingScript.removeEventListener("error", handleScriptError);
        };
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleScriptLoad);
    script.addEventListener("error", handleScriptError);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleScriptLoad);
      script.removeEventListener("error", handleScriptError);
    };
  }, [recaptchaSiteKey]);

  const executeRecaptcha = () =>
    new Promise<string>((resolve, reject) => {
      if (!recaptchaSiteKey) {
        reject(new Error("reCAPTCHA belum dikonfigurasi."));
        return;
      }

      const { grecaptcha } = window;
      if (!grecaptcha) {
        reject(new Error("reCAPTCHA belum siap. Silakan coba lagi dalam beberapa saat."));
        return;
      }

      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(recaptchaSiteKey, {
            action: "contact_form_submit",
          });
          resolve(token);
        } catch {
          reject(new Error("Gagal menjalankan verifikasi reCAPTCHA."));
        }
      });
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus(null);
    setFormErrors({});

    if (captchaError) {
      setStatus({ type: "error", message: captchaError });
      return;
    }

    if (!captchaReady) {
      setStatus({
        type: "error",
        message: "reCAPTCHA sedang dimuat. Silakan coba lagi dalam beberapa saat.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const token = await executeRecaptcha();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim(),
          token,
        }),
      });

      const result: {
        success?: boolean;
        message?: string;
        errors?: FormErrors;
      } = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        if (result.errors) {
          setFormErrors(result.errors);
        }
        throw new Error(
          result.message || "Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.",
        );
      }

      setStatus({
        type: "success",
        message:
          "Terima kasih! Pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan yang tidak diketahui. Silakan coba lagi.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as FormField;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

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
              <div
                aria-live="polite"
                className="min-h-[1.5rem] text-sm font-[family-name:var(--font-inter)]"
              >
                {status && (
                  <div
                    className={`rounded-xl px-4 py-3 ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-white/10 text-white shadow-sm"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>

              {captchaError && (
                <p className="text-sm text-white/80 font-[family-name:var(--font-inter)]">
                  {captchaError}
                </p>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400 ${
                    formErrors.name ? "ring-2 ring-red-200 focus:ring-red-200" : ""
                  }`}
                  required
                  minLength={2}
                  autoComplete="name"
                />
                {formErrors.name && (
                  <p className="mt-2 text-sm text-red-100 font-[family-name:var(--font-inter)]">
                    {formErrors.name}
                  </p>
                )}
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
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400 ${
                    formErrors.email ? "ring-2 ring-red-200 focus:ring-red-200" : ""
                  }`}
                  required
                  autoComplete="email"
                  inputMode="email"
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-100 font-[family-name:var(--font-inter)]">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-white mb-2"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none font-[family-name:var(--font-inter)] placeholder:text-gray-400 ${
                    formErrors.phone ? "ring-2 ring-red-200 focus:ring-red-200" : ""
                  }`}
                  autoComplete="tel"
                />
                {formErrors.phone && (
                  <p className="mt-2 text-sm text-red-100 font-[family-name:var(--font-inter)]">
                    {formErrors.phone}
                  </p>
                )}
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
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-gray-900 text-sm sm:text-base rounded-xl border-none focus:ring-2 focus:ring-white/50 outline-none resize-none font-[family-name:var(--font-inter)] placeholder:text-gray-400 ${
                    formErrors.message ? "ring-2 ring-red-200 focus:ring-red-200" : ""
                  }`}
                  required
                  minLength={10}
                />
                {formErrors.message && (
                  <p className="mt-2 text-sm text-red-100 font-[family-name:var(--font-inter)]">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {formErrors.token && (
                <p className="text-sm text-red-100 font-[family-name:var(--font-inter)]">
                  {formErrors.token}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !captchaReady || Boolean(captchaError)}
                className="bg-white hover:bg-gray-50 disabled:bg-white/70 disabled:text-[#FF0000]/60 text-[#FF0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto mt-2"
              >
                {isSubmitting ? "Sending..." : "Send"}
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
