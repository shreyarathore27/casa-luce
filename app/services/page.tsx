"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Type definitions
interface PdfFiles {
  [key: string]: string | undefined;
}

interface EmailTemplateParams extends Record<string, unknown> {
  user_email: string;
  service_name: string;
  timestamp: string;
}

type ServiceName = 'Branding' | 'Rebranding' | 'Marketing Consultancy' | 'Menu Development' | 'Financial Consultancy' | 'Operations Consultancy';

const WhatWeDo: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceName | ''>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // PDF mapping - now using environment variables
  const pdfFiles: PdfFiles = {
    'Branding': process.env.NEXT_PUBLIC_BRANDING_PDF_ID,
    'Rebranding': process.env.NEXT_PUBLIC_REBRANDING_PDF_ID,
    'Marketing Consultancy': process.env.NEXT_PUBLIC_MARKETING_PDF_ID,
    'Menu Development': process.env.NEXT_PUBLIC_MENU_PDF_ID,
    'Financial Consultancy': process.env.NEXT_PUBLIC_FINANCIAL_PDF_ID,
    'Operations Consultancy': process.env.NEXT_PUBLIC_OPERATIONS_PDF_ID
  };

  // EmailJS configuration - now using environment variables
  const EMAILJS_SERVICE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleShowcaseClick = (serviceName: ServiceName): void => {
    setSelectedService(serviceName);
    setIsDialogOpen(true);
    setEmail('');
    setError('');
    setShowSuccess(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError('Email service is not properly configured');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Send email via EmailJS
      const templateParams: EmailTemplateParams = {
        user_email: email,
        service_name: selectedService,
        timestamp: new Date().toLocaleString()
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      
      // Generate download link and trigger download
      const fileId = pdfFiles[selectedService];
      if (fileId && !fileId.startsWith('YOUR_')) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${selectedService.replace(' ', '_')}_Showcase.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.warn(`PDF file ID not configured for ${selectedService}`);
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeDialog = (): void => {
    setIsDialogOpen(false);
    setEmail('');
    setError('');
    setShowSuccess(false);
  };

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
              <button
                onClick={() => handleShowcaseClick('Branding')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
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
              <button
                onClick={() => handleShowcaseClick('Rebranding')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
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
              <button
                onClick={() => handleShowcaseClick('Marketing Consultancy')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
              <Image
                src="/marketing.png"
                alt="marketing background"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Menu Development Card */}
          <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Menu Development</h2>
                <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
                  Designing menus that not only look appealing but
                  also enhance guest experience and boost sales.
                </p>
              </div>
              <button
                onClick={() => handleShowcaseClick('Menu Development')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
              <Image
                src="/menu.png"
                alt="menu development background"
                fill
                className="object-cover"
              />
            </div> 
          </div>

          {/* Financial Consultancy Card */}
          <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Financial Consultancy</h2>
                <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
                  Offering clear insights and tailored strategies
                  to maximize profitability and control costs.
                </p>
              </div>
              <button
                onClick={() => handleShowcaseClick('Financial Consultancy')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
              <Image
                src="/finan.png"
                alt="Financial Consultancy background"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Operations Consultancy Card */}
          <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
            <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Operations Consultancy</h2>
                <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
                  Streamlining operations and improving efficiency
                  to deliver exceptional guest experiences.
                </p>
              </div>
              <button
                onClick={() => handleShowcaseClick('Operations Consultancy')}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
              >
                <span className="relative z-10">FREE SHOWCASE</span>
              </button>
            </div>
            
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

      {/* Email Collection Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#f6f6f5] rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-[#753116] hover:text-[#8b3a1a] text-2xl font-bold z-10"
            >
              ×
            </button>

            {!showSuccess ? (
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#753116] mb-2">
                    Get Your Free {selectedService} Showcase
                  </h3>
                  <p className="text-[#753116]/70">
                    Enter your email to download our showcase PDF
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border-2 border-[#753116]/20 rounded-lg focus:border-[#753116] focus:outline-none transition-colors text-[#753116]"
                      disabled={isLoading}
                      required
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] py-3 rounded-lg font-bold hover:from-[#8b3a1a] hover:to-[#753116] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Get Free Showcase'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#753116] mb-2">
                    Success!
                  </h3>
                  <p className="text-[#753116]/70 mb-4">
                    Your download should start automatically. Check your downloads folder.
                  </p>
                  <p className="text-sm text-[#753116]/60">
                    We've also sent you a confirmation email.
                  </p>
                </div>
                <button
                  onClick={closeDialog}
                  className="bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-3 rounded-lg font-bold hover:from-[#8b3a1a] hover:to-[#753116] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default WhatWeDo;