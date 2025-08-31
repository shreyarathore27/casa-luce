import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/bg.png"
            alt="Hospitality Background"
            fill
             className="object-cover scale-105 blur-xs object-[center_20%]" 
             priority/>
          <div className="absolute inset-0 bg-black/40"></div> {/* overlay tint */}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f6f6f5] mb-8 leading-tight">
            Illuminating Hospitality
            <span className="block text-4xl md:text-6xl text-[#f6f6f5] mt-4">
              Experiences
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#f6f6f5] mb-10 font-light leading-relaxed">
            Strategic consultancy designed for the hospitality industry
          </p>
         <Link
            href="https://wa.me/447749335345?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-12 py-5 rounded-full text-lg font-bold
              hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#753116]/30
              focus:outline-none focus:ring-4 focus:ring-[#9e9268]/50 focus:ring-offset-2 focus:ring-offset-black
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
              before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
            >
               <span className="relative z-10">Contact Us</span>
           </Link>

          {/* Social Media Icons */}
<div className="flex justify-center space-x-6 mt-10">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/casa-luce-ltd/"
    className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
  >
    <svg
      className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
               0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
               1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 
               5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 
               0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 
               2.064 2.063 0 1.139-.925 2.065-2.064 
               2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
               0H1.771C.792 0 0 .774 0 1.729v20.542C0 
               23.227.792 24 1.771 24h20.451C23.2 24 24 
               23.227 24 22.271V1.729C24 .774 23.2 0 
               22.222 0h.003z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/theecasaluce?igsh=bjRoZjRrMGM3dTl5"
    className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
  >
    <svg
      className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 
               7.75v8.5A5.75 5.75 0 0 1 16.25 
               22h-8.5A5.75 5.75 0 0 1 2 
               16.25v-8.5A5.75 5.75 0 0 1 7.75 
               2zm0 1.5A4.25 4.25 0 0 0 3.5 
               7.75v8.5A4.25 4.25 0 0 0 7.75 
               20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 
               4.25 0 0 0 16.25 3.5h-8.5zm4.25 
               3.25a5.5 5.5 0 1 1 0 11 5.5 
               5.5 0 0 1 0-11zm0 1.5a4 
               4 0 1 0 0 8 4 4 0 0 0 
               0-8zm5.75-.75a1.25 1.25 0 1 
               1-2.5 0 1.25 1.25 0 0 1 2.5 
               0z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@theecasaluce?_t=ZN-8zLDgKndz3G&_r=1"
    className="w-12 h-12 border-2 border-[#753116] rounded-lg flex items-center justify-center hover:bg-[#753116] hover:border-[#9e9268] transition-all duration-300 group"
  >
    <svg
      className="w-6 h-6 text-[#753116] group-hover:text-[#f6f6f5] transition-colors duration-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 
               3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 
               1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 
               2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 
               3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 
               1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 
               6.15-1.72.02 1.48-.04 2.96-.04 
               4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 
               1.04-1.36 1.75-.21.51-.15 1.07-.14 
               1.61.24 1.64 1.82 3.02 3.5 
               2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  </a>
</div>

        </div>
      </div>
      
      {/* Brown Horizontal Line */}
      <div className="w-full h-[5vh] bg-gradient-to-r from-[#753116] via-[#8b3a1a] to-[#753116]"></div>
    </div>
  );
}