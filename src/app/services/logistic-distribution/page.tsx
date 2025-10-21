"use client";

export default function LogisticDistributionPage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 ">
            Logistic & Distribution
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-gray-600  max-w-3xl mx-auto">
            Comprehensive logistics services across Indonesia with advanced management systems
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 ">
              Complete Logistics Solutions
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              HAKAES provides end-to-end logistics and distribution services designed specifically for spare parts management and nationwide delivery operations. Our 1,400 sqm warehouse facility in Jakarta serves as the central hub for efficient storage and distribution.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              With advanced logistics management systems and strategic stock locations across Indonesia, we ensure optimal inventory control and rapid deployment to any destination nationwide.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50 ">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900  mb-8 sm:mb-12 lg:mb-16">
          Our Logistics Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Office Storage with AC",
              description: "Climate-controlled storage facilities ensuring optimal conditions for sensitive spare parts and equipment.",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            },
            {
              title: "Spare Parts Management",
              description: "Specialized logistics for spare parts including receipt, request handling, return processing, and authorization systems.",
              icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
              title: "Stock Location Logistics",
              description: "Strategic placement of inventory across multiple locations nationwide for faster response times and delivery.",
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            },
            {
              title: "Logistics Management System",
              description: "Advanced digital platform for real-time tracking, inventory management, and seamless coordination across all service points.",
              icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            },
            {
              title: "Nationwide Network",
              description: "Coverage across 37+ cities in Indonesia with dedicated regional offices and trusted partner networks.",
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "SLA Delivery Options",
              description: "Flexible service level agreements including 2-hour and 4-hour critical time delivery for urgent requirements.",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white  rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#BC0000] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold text-gray-900  mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-600 ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900  mb-8 sm:mb-12">
          Our Coverage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "37+", label: "Cities Covered" },
            { number: "1,400", label: "sqm Warehouse" },
            { number: "20+", label: "Service Points" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50  rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-100  transition-all duration-300">
              <div className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl font-bold text-gray-900  mb-2">
                {stat.number}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-base sm:text-lg text-gray-600 ">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-r from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our logistics and distribution services can support your business operations
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#BC0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
