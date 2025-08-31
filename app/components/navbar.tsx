'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: 'home', label: 'HOME' },
    { href: 'about', label: 'SERVICES' }, // Updated to match section ID
    { href: 'team', label: 'TEAM' },
    { href: 'contact', label: 'CONTACT US' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Fixed size */}
          <Link href="/" className="group">
            <div className="w-50 h-50 relative">
              <Image 
                src="/logonobg.png" 
                alt="Casa Luce Logo" 
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#9e9268] group cursor-pointer ${
                  activeSection === link.href ? 'text-[#9e9268]' : 'text-white'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#9e9268] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                {activeSection === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#9e9268]"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#9e9268] transition-colors duration-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl mt-2 p-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`block text-lg font-medium tracking-wider transition-colors duration-300 hover:text-[#9e9268] py-2 cursor-pointer ${
                  activeSection === link.href ? 'text-[#9e9268]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;