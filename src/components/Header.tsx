'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/vehicles-for-import', label: 'Vehicles For Import' },
    { href: '/import-process', label: 'Import Process' },
    { href: '/finance', label: 'Finance' },
    { href: '/resources', label: 'Resources' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : ''
    }`}>
      <div className="w-full px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold font-heading text-white">
                Umze Autohaus
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Inline */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-primary transition-all duration-300 font-medium px-2 py-1 text-sm group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/import-now"
              className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors border border-white/20"
            >
              Import Now
            </Link>
            <Link
              href="/view-auctions"
              className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              View Auctions
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none focus:text-primary transition-colors drop-shadow-lg"
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
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/20 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-lg font-medium text-white hover:text-primary hover:bg-white/10 transition-all duration-300 rounded-xl border border-transparent hover:border-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-4 border-t border-white/20 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/import-now"
                  className="block bg-accent text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-accent/50"
                  onClick={() => setIsOpen(false)}
                >
                  Import Now
                </Link>
                <Link
                  href="/view-auctions"
                  className="block bg-secondary text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-secondary/50"
                  onClick={() => setIsOpen(false)}
                >
                  View Auctions
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;