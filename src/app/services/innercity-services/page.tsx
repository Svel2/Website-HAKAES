export default function InnercityServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Innercity Services
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Fast and reliable delivery within Jabodetabek with dedicated teams ensuring same-day service
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900">
              Rapid Jabodetabek Coverage
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              Our Innercity Services specialize in fast delivery within the Greater Jakarta area (Jabodetabek) with a 60km radius coverage. With 13 dedicated delivery teams, we ensure your packages reach their destination on the same day.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              Whether you need urgent spare parts delivery or regular document transportation, our innercity fleet is ready to serve with guaranteed punctuality and safety.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Why Choose Innercity Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Same-Day Delivery",
              description: "Guaranteed same-day delivery for all orders placed within operational hours in the Jabodetabek area.",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "13 Dedicated Teams",
              description: "Our 13 professional delivery teams ensure consistent availability and quick response to all delivery requests.",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            },
            {
              title: "60km Radius Coverage",
              description: "Complete coverage within 60km radius from Jakarta, including all major business districts and residential areas.",
              icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            },
            {
              title: "Real-Time Tracking",
              description: "Track your delivery in real-time with our GPS-enabled fleet management system for complete transparency.",
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            },
            {
              title: "Flexible Scheduling",
              description: "Multiple pickup times throughout the day to accommodate your business schedule and delivery urgency.",
              icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
              title: "Priority Handling",
              description: "Express handling for urgent deliveries with dedicated routes to ensure fastest possible transit times.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#BC0000] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-inter)] text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900  mb-8 sm:mb-12">
          Service Performance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "13", label: "Delivery Teams" },
            { number: "60km", label: "Coverage Radius" },
            { number: "Same Day", label: "Delivery Guarantee" },
            { number: "99%", label: "On-Time Rate" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-100 transition-all duration-300">
              <div className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-base sm:text-lg text-gray-600">
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
            Need Fast Delivery in Jakarta?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience reliable same-day delivery with our dedicated innercity service teams
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#BC0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300">
            Request Delivery Now
          </button>
        </div>
      </section>
    </div>
  );
}
