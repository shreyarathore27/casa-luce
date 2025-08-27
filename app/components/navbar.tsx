'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/team', label: 'TEAM' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <Link href="/" className="group">
  <div className="w-64 h-64 group-hover:scale-110 transition-transform duration-300-ml-50">
    <Image 
      src="/logonobg.png" 
      alt="Casa Luce Logo" 
      width={400} 
      height={300} 
      className="object-contain mt-10"
    />
  </div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#9e9268] group ${
                  pathname === link.href ? 'text-[#9e9268]' : 'text-white'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#9e9268] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#9e9268]"></span>
                )}
              </Link>
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
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
          }`}
        >
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl mt-2 p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium tracking-wider transition-colors duration-300 hover:text-[#9e9268] py-2 ${
                  pathname === link.href ? 'text-[#9e9268]' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;