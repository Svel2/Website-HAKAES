export default function RegularServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Regular Service (PC3)
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Economical delivery service with optimal lead time from origin to destination
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Cost-Effective Reliable Delivery
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Our PC3 Regular Service provides economical shipping solutions perfect for non-urgent deliveries. Designed for businesses looking to optimize costs while maintaining reliable delivery schedules.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              With predictable lead times and competitive pricing, this service is ideal for routine shipments, inventory replenishment, and scheduled deliveries across Indonesia.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 lg:mb-16">
          Regular Service Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Economical Pricing",
              description: "Competitive rates designed for cost-conscious shipping without compromising on reliability and safety.",
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Predictable Lead Time",
              description: "Consistent delivery schedules with known transit times for better planning and inventory management.",
              icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
              title: "Consolidated Shipping",
              description: "Cost savings through consolidated shipments with scheduled routes and optimized delivery networks.",
              icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            },
            {
              title: "Nationwide Coverage",
              description: "Regular routes to all major cities across Indonesia with established pickup and delivery schedules.",
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Flexible Volume",
              description: "Accommodate various shipment sizes from small parcels to bulk orders with no minimum requirements.",
              icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            },
            {
              title: "Track & Trace",
              description: "Full shipment visibility with online tracking system for monitoring delivery progress at any time.",
              icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[##BC0000] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Service Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "3-5", label: "Days Delivery" },
            { number: "40%", label: "Cost Savings" },
            { number: "37+", label: "Cities Covered" },
            { number: "98%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
              <div className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-base sm:text-lg text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Optimize Your Shipping Costs
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose our regular service for reliable, economical delivery that fits your budget
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#430000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
