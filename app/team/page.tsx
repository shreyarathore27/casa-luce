"use client";


const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ARIANE SANTOS",
      title: "Co-Founder & Marketing Executive",
      bio: "Bringing over 7 years of experience in the hospitality industry building on a deep understanding of what makes venues thrive. Ariane has worked with renowned brands such Nando's, Sonder and Twigg gaining first-hand insight to marketing, guest relations and brand growth at every level.",
      image: "ari.jpg",
      linkedin: "https://www.linkedin.com/in/ariane-santos-96a58a155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      id: 2,
      name: "RAGINI RATHORE",
      title: "Co-Founder & Financial Consultant",
      bio: "With a background spanning IT, events, human services, marketing, and hospitality, Ragini has held roles in business development, finance, HR, marketing, and sponsorships. This breadth of experience allows her to connect diverse insights and deliver tailored strategies for independent hotels and restaurants.",
      image: "tani.jpg",
      linkedin: "https://www.linkedin.com/in/ragini-rathore-304245231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-stone-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/15 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 via-stone-200 to-amber-300 bg-clip-text text-transparent mb-4 tracking-tight">
            MEET THE TEAM
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-stone-600 mx-auto mb-6 rounded-full opacity-80"></div>
          <p className="text-xl text-white max-w-3xl mx-auto font-light">
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
                className="group transform transition-all duration-500 hover:scale-102"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Main Card */}
                <div className="relative bg-amber-900/30 backdrop-blur-xl rounded-3xl p-8 border border-amber-600/20 shadow-xl hover:shadow-amber-900/30 transition-all duration-400 hover:border-amber-500/30 hover:bg-amber-800/35">
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-stone-800/5 to-amber-800/5 rounded-3xl transition-opacity duration-400 group-hover:opacity-30"></div>
                  
                  {/* Minimal Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-amber-500/15 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-stone-400/20 rounded-full"></div>
                  
                  {/* Profile Section */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Image Container with Subtle Glow */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-stone-500/15 to-amber-700/20 rounded-full blur-md opacity-40"></div>
                      <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-amber-400/25 shadow-lg bg-stone-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-400"
                        />
                      </div>
                      {/* Subtle Ring */}
                      <div className="absolute inset-0 w-56 h-56 rounded-full border border-amber-500/20 opacity-50"></div>
                    </div>

                    {/* Name with Refined Gradient */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-stone-100 to-amber-300 bg-clip-text text-transparent tracking-wide">
                      {member.name}
                    </h2>

                    {/* Title */}
                    <h3 className="text-base font-medium text-white mb-6 px-5 py-2 bg-amber-800/30 rounded-full backdrop-blur-sm border border-amber-500/20 shadow-md">
                      {member.title}
                    </h3>

                    {/* Bio */}
                    <p className="text-sm text-white leading-relaxed mb-8 max-w-lg text-center font-light backdrop-blur-sm bg-amber-900/15 p-5 rounded-2xl border border-amber-500/15">
                      {member.bio}
                    </p>

                    {/* LinkedIn Button */}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-amber-800/40 backdrop-blur-sm rounded-full border border-amber-500/30 text-amber-100 font-medium transition-all duration-300 hover:bg-amber-700/50 hover:border-amber-400/40 hover:scale-102 hover:shadow-lg hover:text-amber-50"
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="transition-transform duration-300 group-hover/btn:scale-105"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                      
                      {/* Subtle Button Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-amber-200/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>

                  {/* Minimal Card Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refined Custom Styles */}
      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Team;