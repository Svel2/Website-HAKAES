export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 ">
            App Development
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build powerful mobile applications that deliver exceptional user experiences
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Our app development services cover the entire lifecycle from concept to deployment. We specialize in creating native iOS and Android applications, as well as cross-platform solutions using cutting-edge technologies.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Whether you need a consumer-facing app, enterprise solution, or custom mobile platform, our team has the expertise to bring your vision to life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 lg:mb-16">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Cross-Platform Development",
              description: "Build once, deploy everywhere with React Native and Flutter",
              icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
            },
            {
              title: "Native Performance",
              description: "Optimized code for smooth, fast, and responsive applications",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            {
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces that users love",
              icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            },
            {
              title: "Backend Integration",
              description: "Seamless API connections and cloud services integration",
              icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            },
            {
              title: "Security First",
              description: "Enterprise-grade security and data protection",
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            },
            {
              title: "Maintenance & Support",
              description: "Ongoing updates, bug fixes, and technical support",
              icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
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

      {/* Technologies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS', 'Node.js', 'MongoDB'].map((tech, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
              <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Build Your App?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your mobile app idea to life
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
