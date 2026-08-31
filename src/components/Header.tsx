'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Don't show header on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/vehicles-for-import', label: 'Stock' },
    { href: '/import-process', label: 'Our Process' },
    { href: '/calculator', label: 'Calculator' },
    { href: '/blog', label: 'Blogs' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <header ref={menuRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#0F1614]/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img src="/images/PNG.png" alt="UMZE AUTOHAUS" className="h-16 md:h-24 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 font-medium text-sm ${
                  pathname === item.href
                    ? 'text-[#25614F] border-b-2 border-[#25614F] pb-0.5'
                    : 'text-[#EAE2D6] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#EAE2D6] hover:text-white focus:outline-none transition-colors p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#0F1614] border-t border-[#25614F]/20 px-4 pt-4 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                  pathname === item.href
                    ? 'text-[#25614F] bg-[#25614F]/10 border border-[#25614F]/30'
                    : 'text-[#EAE2D6] hover:text-white hover:bg-[#25614F]/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;