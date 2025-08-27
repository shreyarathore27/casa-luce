import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-image.jpg"
            alt="Hospitality Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f6f6f5] mb-6 leading-tight">
            Illuminating Hospitality
            <span className="block text-4xl md:text-6xl text-[#9e9268] mt-2">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#f6f6f5] mb-12 font-light leading-relaxed">
            Strategic consultancy designed for the hospitality industry
          </p>

          <Link
            href="/services"
            className="inline-block bg-[#753116] text-[#f6f6f5] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#9e9268] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            LEARN MORE
          </Link>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-16">
            <a
              href="#"
              className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#f6f6f5] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#f6f6f5] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-[#f6f6f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#442d1b] mb-6">
              Elevating Hospitality Standards
            </h2>
            <p className="text-lg text-[#753116] max-w-3xl mx-auto leading-relaxed">
              We specialize in transforming hospitality businesses through strategic consulting, 
              innovative solutions, and personalized service excellence that creates memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#9e9268] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#753116] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#f6f6f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#442d1b] mb-4">Strategic Planning</h3>
              <p className="text-[#753116] leading-relaxed">
                Comprehensive business strategies tailored to maximize your hospitality potential and market positioning.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#9e9268] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#753116] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#f6f6f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#442d1b] mb-4">Team Development</h3>
              <p className="text-[#753116] leading-relaxed">
                Professional training and development programs to enhance your team's skills and service excellence.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#9e9268] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#753116] transition-colors duration-300">
                <svg className="w-10 h-10 text-[#f6f6f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#442d1b] mb-4">Performance Analytics</h3>
              <p className="text-[#753116] leading-relaxed">
                Data-driven insights and performance metrics to optimize operations and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#442d1b] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#442d1b] via-[#753116] to-[#442d1b]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f6f6f5] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#9e9268] mb-8 leading-relaxed">
            Let's work together to create exceptional hospitality experiences that set you apart from the competition.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#9e9268] text-[#442d1b] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#f6f6f5] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            START YOUR JOURNEY
          </Link>
        </div>
      </section>
    </div>
  );
}