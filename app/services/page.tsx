// "use client"
// import Image from 'next/image';
// import { useState, FormEvent } from 'react';
// import emailjs from '@emailjs/browser';

// // Type definitions
// interface PdfFiles {
//   [key: string]: string | undefined;
// }

// interface EmailTemplateParams extends Record<string, unknown> {
//   user_email: string;
//   service_name: string;
//   timestamp: string;
// }

// type ServiceName =
//   | 'Branding'
//   | 'Rebranding'
//   | 'Marketing Consultancy'
//   | 'Menu Development'
//   | 'Financial Consultancy'
//   | 'Operations Consultancy';

// const Services: React.FC = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
//   const [selectedService, setSelectedService] = useState<ServiceName | ''>('');
//   const [email, setEmail] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [showSuccess, setShowSuccess] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');

//   // PDF mapping - using env vars
//   const pdfFiles: PdfFiles = {
//     Branding: process.env.NEXT_PUBLIC_BRANDING_PDF_ID,
//     Rebranding: process.env.NEXT_PUBLIC_REBRANDING_PDF_ID,
//     "Marketing Consultancy": process.env.NEXT_PUBLIC_MARKETING_PDF_ID,
//     "Menu Development": process.env.NEXT_PUBLIC_MENU_PDF_ID,
//     "Financial Consultancy": process.env.NEXT_PUBLIC_FINANCIAL_PDF_ID,
//     "Operations Consultancy": process.env.NEXT_PUBLIC_OPERATIONS_PDF_ID,
//   };

//   // EmailJS configuration
//   const EMAILJS_SERVICE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//   const EMAILJS_TEMPLATE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//   const EMAILJS_PUBLIC_KEY: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

//   const handleShowcaseClick = (serviceName: ServiceName): void => {
//     setSelectedService(serviceName);
//     setIsDialogOpen(true);
//     setEmail('');
//     setError('');
//     setShowSuccess(false);
//   };

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
//       setError("Email service is not properly configured");
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const templateParams: EmailTemplateParams = {
//         user_email: email,
//         service_name: selectedService,
//         timestamp: new Date().toLocaleString(),
//       };

//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY
//       );

//       setShowSuccess(true);

//       const fileId = pdfFiles[selectedService];
//       if (fileId && !fileId.startsWith("YOUR_")) {
//         const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
//         const link = document.createElement("a");
//         link.href = downloadUrl;
//         link.download = `${selectedService.replace(" ", "_")}_Showcase.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } else {
//         console.warn(`PDF file ID not configured for ${selectedService}`);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setError("Failed to submit. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const closeDialog = (): void => {
//     setIsDialogOpen(false);
//     setEmail('');
//     setError('');
//     setShowSuccess(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#f6f6f5]">
//       {/* Header Section */}
//       <div className="bg-[#C0C0C0] text-[#753116] pt-12 pb-6">
//         <div className="container mx-auto px-6">
//           <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-center mb-12">
//             WHAT WE DO
//           </h1>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="container mx-auto px-6 -mt-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
//           {/* Branding Card */}
//           <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6">Branding</h2>
//                 <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
//                   Crafting unique and memorable brand identities that reflect your hospitality business and captivate your guests.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Branding")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/branding.png" alt="Branding background" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Rebranding Card */}
//           <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Rebranding</h2>
//                 <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
//                   Refreshing your business with a modern identity and strategy to stay competitive in today&apos;s market.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Rebranding")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/rebranding.png" alt="rebranding background" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Marketing Consultancy Card */}
//           <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6">Marketing Consultancy</h2>
//                 <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
//                   Creating marketing strategies and campaigns that attract, engage, and retain the right customers.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Marketing Consultancy")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/marketing.png" alt="marketing background" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Menu Development Card */}
//           <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Menu Development</h2>
//                 <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
//                   Designing menus that not only look appealing but also enhance guest experience and boost sales.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Menu Development")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/menu.png" alt="menu development background" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Financial Consultancy Card */}
//           <div className="bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5] relative overflow-hidden min-h-[600px]">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6">Financial Consultancy</h2>
//                 <p className="text-[#f6f6f5]/90 mb-8 leading-relaxed text-lg">
//                   Offering clear insights and tailored strategies to maximize profitability and control costs.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Financial Consultancy")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/finan.png" alt="Financial Consultancy background" fill className="object-cover" />
//             </div>
//           </div>

//           {/* Operations Consultancy Card */}
//           <div className="bg-[#f6f6f5] text-[#753116] relative overflow-hidden min-h-[600px] border-x border-[#753116]/10">
//             <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#753116]">Operations Consultancy</h2>
//                 <p className="text-[#753116]/80 mb-8 leading-relaxed text-lg">
//                   Streamlining operations and improving efficiency to deliver exceptional guest experiences.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleShowcaseClick("Operations Consultancy")}
//                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
//                 hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
//                 focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
//                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
//                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden"
//               >
//                 <span className="relative z-10">FREE SHOWCASE</span>
//               </button>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 h-80 z-0">
//               <Image src="/operations.png" alt="Operations Consultancy background" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Email Collection Dialog */}
//       {isDialogOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-[#f6f6f5] rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
//             <button
//               onClick={closeDialog}
//               className="absolute top-4 right-4 text-[#753116] hover:text-[#8b3a1a] text-2xl font-bold z-10"
//             >
//               ×
//             </button>

//             {!showSuccess ? (
//               <div className="p-8">
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-[#753116] mb-2">
//                     Get Your Free {selectedService} Showcase
//                   </h3>
//                   <p className="text-[#753116]/70">
//                     Enter your email to download our showcase PDF
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email address"
//                       className="w-full px-4 py-3 border-2 border-[#753116]/20 rounded-lg focus:border-[#753116] focus:outline-none transition-colors text-[#753116]"
//                       disabled={isLoading}
//                       required
//                     />
//                     {error && (
//                       <p className="text-red-500 text-sm mt-2">{error}</p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] py-3 rounded-lg font-bold hover:from-[#9e9268] hover:to-[#b5a675] transition-all transform hover:scale-105 disabled:opacity-50"
//                   >
//                     {isLoading ? "Sending..." : "Get PDF"}
//                   </button>
//                 </form>
//               </div>
//             ) : (
//               <div className="p-8 text-center">
//                 <div className="text-green-500 text-5xl mb-4">✓</div>
//                 <h3 className="text-xl font-bold text-[#753116] mb-2">Success!</h3>
//                 <p className="text-[#753116]/70 mb-4">
//                   The showcase PDF has been sent to your email.
//                 </p>
//                 <button
//                   onClick={closeDialog}
//                   className="bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-2 rounded-lg font-bold hover:from-[#9e9268] hover:to-[#b5a675] transition-all"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;

"use client"
import Image from 'next/image';
import { useState, FormEvent, useEffect, useRef } from 'react';
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

type ServiceName =
  | 'Branding'
  | 'Rebranding'
  | 'Marketing Consultancy'
  | 'Menu Development'
  | 'Financial Consultancy'
  | 'Operations Consultancy';

const Services: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceName | ''>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // PDF mapping - using env vars
  const pdfFiles: PdfFiles = {
    Branding: process.env.NEXT_PUBLIC_BRANDING_PDF_ID,
    Rebranding: process.env.NEXT_PUBLIC_REBRANDING_PDF_ID,
    "Marketing Consultancy": process.env.NEXT_PUBLIC_MARKETING_PDF_ID,
    "Menu Development": process.env.NEXT_PUBLIC_MENU_PDF_ID,
    "Financial Consultancy": process.env.NEXT_PUBLIC_FINANCIAL_PDF_ID,
    "Operations Consultancy": process.env.NEXT_PUBLIC_OPERATIONS_PDF_ID,
  };

  // EmailJS configuration
  const EMAILJS_SERVICE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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
      setError("Please enter a valid email address");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Email service is not properly configured");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const templateParams: EmailTemplateParams = {
        user_email: email,
        service_name: selectedService,
        timestamp: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);

      const fileId = pdfFiles[selectedService];
      if (fileId && !fileId.startsWith("YOUR_")) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = `${selectedService.replace(" ", "_")}_Showcase.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.warn(`PDF file ID not configured for ${selectedService}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to submit. Please try again.");
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

  const services = [
    {
      name: "Branding" as ServiceName,
      description: "Crafting unique and memorable brand identities that reflect your hospitality business and captivate your guests.",
      image: "/branding.png",
      isDark: true
    },
    {
      name: "Rebranding" as ServiceName,
      description: "Refreshing your business with a modern identity and strategy to stay competitive in today's market.",
      image: "/rebranding.png",
      isDark: false
    },
    {
      name: "Marketing Consultancy" as ServiceName,
      description: "Creating marketing strategies and campaigns that attract, engage, and retain the right customers.",
      image: "/marketing.png",
      isDark: true
    },
    {
      name: "Menu Development" as ServiceName,
      description: "Designing menus that not only look appealing but also enhance guest experience and boost sales.",
      image: "/menu.png",
      isDark: false
    },
    {
      name: "Financial Consultancy" as ServiceName,
      description: "Offering clear insights and tailored strategies to maximize profitability and control costs.",
      image: "/finan.png",
      isDark: true
    },
    {
      name: "Operations Consultancy" as ServiceName,
      description: "Streamlining operations and improving efficiency to deliver exceptional guest experiences.",
      image: "/operations.png",
      isDark: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f6f5]">
      {/* Header Section */}
      <div className="bg-[#C0C0C0] text-[#753116] pt-12 pb-6">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-center mb-12 opacity-0 animate-fade-in-up">
            WHAT WE DO
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.name}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`
                relative overflow-hidden min-h-[600px] transform transition-all duration-1000 ease-out
                ${visibleCards.has(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-16 opacity-0 scale-95'
                }
                ${service.isDark 
                  ? 'bg-gradient-to-br from-[#753116] to-[#8b3a1a] text-[#f6f6f5]' 
                  : 'bg-[#f6f6f5] text-[#753116] border-x border-[#753116]/10'
                }
              `}
              style={{
                transitionDelay: visibleCards.has(index) ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="p-8 lg:p-12 relative z-20 h-full flex flex-col justify-between">
                <div className={`transform transition-all duration-800 ease-out ${
                  visibleCards.has(index) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleCards.has(index) ? `${index * 150 + 300}ms` : '0ms'
                }}>
                  <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${
                    service.isDark ? 'text-[#f6f6f5]' : 'text-[#753116]'
                  }`}>
                    {service.name}
                  </h2>
                  <p className={`mb-8 leading-relaxed text-lg ${
                    service.isDark ? 'text-[#f6f6f5]/90' : 'text-[#753116]/80'
                  }`}>
                    {service.description}
                  </p>
                </div>
                
                <button
                  onClick={() => handleShowcaseClick(service.name)}
                  className={`
                    group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-4 rounded-full text-sm font-bold w-fit
                    hover:from-[#9e9268] hover:to-[#b5a675] transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#753116]/30
                    focus:outline-none focus:ring-4 focus:ring-[#753116]/30 focus:ring-offset-2 focus:ring-offset-[#f6f6f5]
                    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                    before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 overflow-hidden
                    ${visibleCards.has(index) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: visibleCards.has(index) ? `${index * 150 + 600}ms` : '0ms',
                    transitionDuration: '800ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span className="relative z-10">FREE SHOWCASE</span>
                </button>
              </div>
              
              <div className={`
                absolute bottom-0 left-0 right-0 h-80 z-0 transform transition-all duration-1000 ease-out
                ${visibleCards.has(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-70 scale-105'
                }
              `}
              style={{
                transitionDelay: visibleCards.has(index) ? `${index * 150 + 200}ms` : '0ms'
              }}>
                <Image 
                  src={service.image} 
                  alt={`${service.name} background`} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Collection Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-[#f6f6f5] rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden transform animate-scale-in">
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-[#753116] hover:text-[#8b3a1a] text-2xl font-bold z-10 transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>

            {!showSuccess ? (
              <div className="p-8">
                <div className="text-center mb-6 animate-fade-in-up">
                  <h3 className="text-2xl font-bold text-[#753116] mb-2">
                    Get Your Free {selectedService} Showcase
                  </h3>
                  <p className="text-[#753116]/70">
                    Enter your email to download our showcase PDF
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border-2 border-[#753116]/20 rounded-lg focus:border-[#753116] focus:outline-none transition-all duration-300 text-[#753116] focus:shadow-lg focus:scale-105"
                      disabled={isLoading}
                      required
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-2 animate-shake">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] py-3 rounded-lg font-bold hover:from-[#9e9268] hover:to-[#b5a675] transition-all transform hover:scale-105 disabled:opacity-50 hover:shadow-xl"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </span>
                    ) : (
                      "Get PDF"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center animate-bounce-in">
                <div className="text-green-500 text-5xl mb-4 animate-bounce">✓</div>
                <h3 className="text-xl font-bold text-[#753116] mb-2">Success!</h3>
                <p className="text-[#753116]/70 mb-4">
                  The showcase PDF has been sent to your email.
                </p>
                <button
                  onClick={closeDialog}
                  className="bg-gradient-to-r from-[#753116] to-[#8b3a1a] text-[#f6f6f5] px-6 py-2 rounded-lg font-bold hover:from-[#9e9268] hover:to-[#b5a675] transition-all transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Services;