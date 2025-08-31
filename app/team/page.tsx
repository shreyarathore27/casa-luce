"use client";
import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ARIANE SANTOS",
      title: "Co-Founder & Marketing Executive",
      bio: "Bringing over 7 years of experience in the hospitality industry building on a deep understanding of what makes venues thrive. Ariane has worked with renowned brands such Nando's, Sonder and Twigg gaining first-hand insight to marketing, guest relations and brand growth at every level.",
      image: "/team/ariane-santos.jpg",
      linkedin: "https://linkedin.com/in/ariane-santos"
    },
    {
      id: 2,
      name: "RAGINI RATHORE",
      title: "Co-Founder & Financial Consultant",
      bio: "With a background spanning IT, events, human services, marketing, and hospitality, Ragini has held roles in business development, finance, HR, marketing, and sponsorships. This breadth of experience allows her to connect diverse insights and deliver tailored strategies for independent hotels and restaurants.",
      image: "/team/ragini-rathore.jpg",
      linkedin: "https://linkedin.com/in/ragini-rathore"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-700 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
            MEET THE TEAM
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto font-light">
            The visionaries behind our success story
          </p>
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div 
  key={member.id} 
  className="group transform transition-all duration-700 hover:scale-105"
  style={{ animationDelay: `${index * 200}ms` }}
>

                {/* Main Card */}
                <div className="relative bg-amber-800/40 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 hover:border-amber-300/50 hover:bg-amber-700/50">
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-amber-700/5 to-amber-800/10 rounded-3xl transition-opacity duration-500 group-hover:opacity-20"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-amber-400/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-amber-500/30 rounded-full"></div>
                  
                  {/* Profile Section */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Image Container with Glow Effect */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full blur-lg opacity-50 scale-110 animate-pulse"></div>
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-300/40 shadow-xl bg-amber-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      {/* Floating Ring */}
                      <div className="absolute inset-0 w-48 h-48 rounded-full border-2 border-amber-400/60 opacity-60 animate-spin-slow"></div>
                      {/* Inner Ring */}
                      <div className="absolute inset-2 w-44 h-44 rounded-full border border-amber-300/30"></div>
                    </div>

                    {/* Name with Gradient */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent tracking-wide drop-shadow-md">
                      {member.name}
                    </h2>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-amber-100 mb-6 px-6 py-3 bg-amber-800/50 rounded-full backdrop-blur-sm border border-amber-400/30 shadow-lg">
                      {member.title}
                    </h3>

                    {/* Bio */}
                    <p className="text-amber-100/90 leading-relaxed mb-8 max-w-lg text-center font-light backdrop-blur-sm bg-amber-800/20 p-6 rounded-2xl border border-amber-400/20">
                      {member.bio}
                    </p>

                    {/* LinkedIn Button */}
                    <Link 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-amber-700/60 backdrop-blur-sm rounded-full border border-amber-400/40 text-amber-100 font-semibold transition-all duration-300 hover:bg-amber-600/70 hover:border-amber-300/60 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 hover:text-white"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="transition-transform duration-300 group-hover/btn:scale-110"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                      
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-amber-200/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer"></div>
                    </Link>
                  </div>

                  {/* Card Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3),transparent_50%)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Team;