import Link from "next/link";

export default function Service() {
  const services = [
    {
      title: "Logistic & Distribution",
      description: "Comprehensive logistics services including office storage, spare parts management, stock location logistics across Indonesia with advanced management systems.",
      slug: "logistic-distribution",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "Innercity Services",
      description: "Fast and reliable delivery within Jabodetabek area (60km radius) with 13 dedicated delivery teams ensuring same-day service availability.",
      slug: "innercity-services",
      icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
    },
    {
      title: "Outercity Services",
      description: "Extended delivery services to remote areas and service points nationwide with systematic defective parts return management.",
      slug: "outercity-services",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      title: "Cargo Delivery",
      description: "Door-to-door cargo delivery via land, sea (LCL/FCL), and air freight with flexible port-to-port and port-to-door options.",
      slug: "cargo-delivery",
      icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    },
    {
      title: "Same Day Service (PC1)",
      description: "Express same-day delivery where ordering, transportation, and receipt occur within a single day cycle for urgent requirements.",
      slug: "sameday-service",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Regular Service (PC3)",
      description: "Economical delivery service with optimal lead time from origin to destination, perfect for non-urgent shipments.",
      slug: "regular-service",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <section id="services" className="bg-[#bc0000] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-[48px] font-bold text-center text-white mb-8 sm:mb-10 lg:mb-12">
        Our Service
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff0000] dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              {service.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 lg:mb-5 flex-grow">
              {service.description}
            </p>
            <div className="mt-auto">
              <Link
                href={`/services/${service.slug}`}
                className="inline-block bg-[#ff0000] dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-[family-name:var(--font-inter)] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
