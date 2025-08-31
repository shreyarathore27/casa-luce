"use client"
import Link from 'next/link';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f5]">
      {/* Header Section */}
      <div className="bg-[#C0C0C0] text-[#753116] pt-12 pb-6">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-center mb-12">
            WHAT WE DO
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          
          {/* Branding Card */}
          <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Branding</h2>
                <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
                  Crafting unique and memorable brand identities that 
                  reflect your hospitality business and captivate your guests.
                </p>
              </div>
              <Link
                href="branding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-10">
            </div>
            
            {/* Background Image Placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
              <Image
                src="/branding.png"
                alt="Branding background"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rebranding Card */}
          <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Rebranding</h2>
                <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
                  Refreshing your business with a modern identity 
                  and strategy to stay competitive in today's market.
                </p>
              </div>
              <Link
                href="/rebranding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Placeholder */}
           <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
  <Image
    src="/rebranding.png"
    alt="rebranding background"
    fill
    className="object-cover"
  />
</div> 

          </div>

          {/* Marketing Consultancy Card */}
          <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Marketing Consultancy</h2>
                <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
                  Creating marketing strategies and campaigns 
                  that attract, engage, and retain the right customers.
                </p>
              </div>
              <Link
                href="/rebranding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Overlay */}
           <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
  <Image
    src="/marketing.png"
    alt="rebranding background"
    fill
    className="object-cover"
  />
</div>
          </div>

{/*menu development */}
          <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Menu Development</h2>
                <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
                  Designing menus that not only look appealing but
also enhance guest experience and boost sales.
                </p>
              </div>
              <Link
                href="/rebranding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Placeholder */}
           <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
  <Image
    src="/menu.png"
    alt="menu development background"
    fill
    className="object-cover"
  />
</div> 

          </div>

          {/*financial consultancy*/}
                    <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Financial Consultancy</h2>
                <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
                  Offering clear insights and tailored strategies
                  to maximize profitability and control costs.
                </p>
              </div>
              <Link
                href="/rebranding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Overlay */}
           <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
  <Image
    src="/finan.png"
    alt="Financial Consultancy background"
    fill
    className="object-cover"
  />
</div>
          </div>


{/*OPERATIONS CONSULTANCY */}
          <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Operations Consultancy</h2>
                <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
Refreshing your business with a modern identity and strategy to stay competitive in today's market.                </p>
              </div>
              <Link
                href="/rebranding"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </Link>
            </div>
            
            {/* Background Image Placeholder */}
           <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
  <Image
    src="/operations.png"
    alt="Operations Consultancy background"
    fill
    className="object-cover"
  />
</div> 

          </div>



        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default WhatWeDo;