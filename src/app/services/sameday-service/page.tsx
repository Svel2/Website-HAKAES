export default function SameDayServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 ">
            Same Day Service (PC1)
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-gray-600  max-w-3xl mx-auto">
            Express same-day delivery where ordering, transportation, and receipt occur within a single day
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 ">
              Lightning Fast Delivery
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              Our PC1 Same Day Service is designed for urgent requirements where time is critical. From the moment you place an order to final delivery, everything happens within the same business day.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 ">
              Perfect for emergency spare parts, critical documents, or urgent business materials that cannot wait. Our dedicated express teams prioritize your shipment above all else.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50 ">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900  mb-8 sm:mb-12 lg:mb-16">
          Express Service Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Same Day Guarantee",
              description: "Order placed in the morning arrives the same afternoon. Complete cycle from pickup to delivery within business hours.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Priority Handling",
              description: "Your shipment receives top priority with dedicated handling and immediate dispatch upon pickup.",
              icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            },
            {
              title: "Real-Time Updates",
              description: "Continuous tracking updates via SMS and email from pickup confirmation to successful delivery.",
              icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            },
            {
              title: "Dedicated Courier",
              description: "Single courier assignment for direct point-to-point delivery without intermediate stops or transfers.",
              icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            },
            {
              title: "Emergency Response",
              description: "Special handling for critical business needs with emergency hotline support throughout delivery.",
              icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            },
            {
              title: "Proof of Delivery",
              description: "Immediate proof of delivery with recipient signature, timestamp, and photographic evidence.",
              icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#bc0000] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
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
          Service Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "Same Day", label: "Delivery Time" },
            { number: "99.8%", label: "Success Rate" },
            { number: "2-4hrs", label: "Average Duration" },
            { number: "24/7", label: "Emergency Support" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-100 transition-all duration-300">
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
        <div className="bg-gradient-to-br from-[#BC0000] to-[#7C0000] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Need It Today? We Deliver Today!
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the fastest delivery service with our PC1 same-day guarantee
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#FF0000] font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300">
            Order Express Delivery
          </button>
        </div>
      </section>
    </div>
  );
}
