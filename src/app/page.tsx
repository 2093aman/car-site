'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: '🔍',
      title: 'Direct Auction Access',
      description: 'Real-time bidding on Japan\'s top auction platforms',
      details: 'Access USS, TAA, CAA, and other premier auction houses with live translation support and expert guidance.'
    },
    {
      icon: '📋',
      title: 'Professional Condition Translation',
      description: 'Complete auction sheet analysis in English',
      details: 'We translate and explain every detail from auction sheets, including grade marks, condition notes, and modification history.'
    },
    {
      icon: '⚙️',
      title: 'Engine & Undercarriage Checks',
      description: 'Third-party verification and inspection',
      details: 'Professional mechanics inspect critical components before purchase, with detailed photo reports sent directly to you.'
    },
    {
      icon: '🚢',
      title: 'Shipping Coordination',
      description: 'Secure transport from Japan to Melbourne',
      details: 'We handle containerization, marine insurance, and tracking from port to port with regular updates.'
    },
    {
      icon: '📄',
      title: 'Complete Customs Processing',
      description: 'Expert handling of all import paperwork',
      details: 'Full customs brokerage including duty calculation, quarantine clearance, and all required documentation.'
    },
    {
      icon: '💰',
      title: 'GST & Duty Calculation',
      description: 'Accurate cost estimates upfront',
      details: 'Transparent breakdown of all taxes, duties, and fees with no hidden costs or surprises.'
    },
    {
      icon: '✓',
      title: 'Australian Compliance',
      description: 'Full RAV approval and compliance workshop',
      details: 'We manage SEVS approval, compliance modifications, and registration requirements for your state.'
    },
    {
      icon: '🚗',
      title: 'Melbourne Delivery',
      description: 'Professional handover at your location',
      details: 'White-glove delivery service with full vehicle walkthrough and ongoing maintenance support.'
    }
  ];

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blue BMW M3"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-white drop-shadow-2xl">
              Import Your Dream<br />
              <span className="text-white drop-shadow-2xl">JDM Car</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Melbourne's trusted automotive import agency specializing in JDM vehicles from Japan, US, and UK.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-white font-semibold">Licensed Import Agent</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-white font-semibold">100+ Cars Verified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-white font-semibold">15+ Years Experience</span>
            </div>
          </motion.div>

          {/* Primary CTAs with Mirror Effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="/import-now"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300 relative group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Free Quote</span>
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.a
              href="/vehicles-for-import"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Auctions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Parallax: Transparent Pricing Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 parallax-section" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            No hidden fees, clear cost breakdowns
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center p-10 rounded-2xl bg-black/40 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-500 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-6 shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white text-3xl">✓</span>
              </motion.div>
              <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-primary transition-colors">Transparent Pricing</h3>
              <p className="text-gray-300 text-center leading-relaxed">No hidden fees, clear cost breakdowns</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center p-10 rounded-2xl bg-black/40 backdrop-blur-md border border-secondary/30 hover:border-secondary/60 transition-all duration-500 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-6 shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white text-3xl font-bold">1:1</span>
              </motion.div>
              <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-secondary transition-colors">1-on-1 Import Guidance</h3>
              <p className="text-gray-300 text-center leading-relaxed">Personalized consultations</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center p-10 rounded-2xl bg-black/40 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-500 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-6 shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white text-3xl">⚡</span>
              </motion.div>
              <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-primary transition-colors">Professional Condition Checks</h3>
              <p className="text-gray-300 text-center leading-relaxed">Expert vehicle inspection</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Direct Access to Japan's Top Auctions - Hero Style */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Japanese Auction House"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold font-heading mb-8 text-white">
                Direct Access to Japan's Top Auctions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We have direct partnerships with Japan's leading auction houses, giving you access to the finest JDM vehicles
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">✓</span>
                  </div>
                  <span className="text-white text-lg">Real-time auction bidding</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">✓</span>
                  </div>
                  <span className="text-white text-lg">Professional translation service</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl">✓</span>
                  </div>
                  <span className="text-white text-lg">Expert bidding strategy</span>
                </div>
              </div>

              <motion.a
                href="/vehicles-for-import"
                className="btn-mirror bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Auctions →
              </motion.a>
            </motion.div>

            {/* Auction Logos Grid */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {['USS', 'TAA', 'CAA', 'Aucnet', 'JU', 'IAA'].map((auction, index) => (
                <motion.div
                  key={auction}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors">
                    {auction}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Auctions</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Import Premium Brands - Masonry Grid */}
      <section className="py-24 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We Import Premium Brands
          </motion.h2>

          {/* Brand Grid with Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Toyota', img: 'https://images.pexels.com/photos/9735309/pexels-photo-9735309.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' },
              { name: 'Nissan', img: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' },
              { name: 'Mitsubishi', img: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' },
              { name: 'Subaru', img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' },
              { name: 'Honda', img: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' },
              { name: 'Mazda', img: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600&q=80' }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white drop-shadow-2xl group-hover:text-primary transition-colors">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Vehicles
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Vehicle 1 */}
            <motion.div
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 border border-gray-700 hover:border-primary/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/9735309/pexels-photo-9735309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="White Toyota Supra"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Grade A
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  From Japan
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">📅</span> 2005
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-secondary">🛣️</span> 120k km
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary mb-6">AUD $25,000</p>
                <motion.a
                  href="/vehicles-for-import/1"
                  className="btn-mirror inline-flex items-center text-secondary hover:text-primary font-bold text-lg transition-all duration-300 bg-secondary/10 hover:bg-primary/10 px-4 py-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform text-xl">→</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Vehicle 2 */}
            <motion.div
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-secondary/20 border border-gray-700 hover:border-secondary/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Orange Nissan GTR"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Grade A
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  From Japan
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">📅</span> 2012
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-secondary">🛣️</span> 85k km
                  </span>
                </div>
                <p className="text-3xl font-bold text-secondary mb-6">AUD $85,000</p>
                <motion.a
                  href="/vehicles-for-import/2"
                  className="btn-mirror inline-flex items-center text-secondary hover:text-primary font-bold text-lg transition-all duration-300 bg-secondary/10 hover:bg-primary/10 px-4 py-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform text-xl">→</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Vehicle 3 */}
            <motion.div
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 border border-gray-700 hover:border-primary/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Black Porsche 911"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Grade B
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  From Japan
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">📅</span> 1997
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-secondary">🛣️</span> 95k km
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary mb-6">AUD $45,000</p>
                <motion.a
                  href="/vehicles-for-import/3"
                  className="btn-mirror inline-flex items-center text-secondary hover:text-primary font-bold text-lg transition-all duration-300 bg-secondary/10 hover:bg-primary/10 px-4 py-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform text-xl">→</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="/vehicles-for-import"
              className="btn-mirror bg-gradient-to-r from-primary via-primary/90 to-secondary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 inline-block relative group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View All Vehicles</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Import Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div
              className="text-center group relative flip-on-hover"
              variants={fadeInUp}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-2xl">🔍</span>
                </motion.div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors duration-300">Choose</h3>
                <p className="text-gray-300 text-base leading-relaxed">Browse our curated selection of premium JDM vehicles</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center group relative flip-on-hover"
              variants={fadeInUp}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-2xl">⚡</span>
                </motion.div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-secondary transition-colors duration-300">Inspect</h3>
                <p className="text-gray-300 text-base leading-relaxed">Professional condition checks and documentation</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center group relative flip-on-hover"
              variants={fadeInUp}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-2xl">🚢</span>
                </motion.div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors duration-300">Import</h3>
                <p className="text-gray-300 text-base leading-relaxed">Secure shipping and customs clearance</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="text-center group relative flip-on-hover"
              variants={fadeInUp}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-2xl">🏁</span>
                </motion.div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-secondary transition-colors duration-300">Deliver</h3>
                <p className="text-gray-300 text-base leading-relaxed">Melbourne-based handover with support</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-2xl border border-primary/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-4xl font-bold font-heading mb-6 text-white">
                  Import Cost Calculator
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Calculate shipping, taxes, GST, compliance costs and more
                </p>
                <motion.a
                  href="/import-now"
                  className="btn-mirror bg-gradient-to-r from-primary via-primary/90 to-secondary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Calculate Import Cost →</span>
                </motion.a>
              </div>
              
              {/* Cost Breakdown Preview */}
              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 border border-gray-600">
                <h3 className="text-xl font-bold text-white mb-6">Cost Breakdown Preview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Vehicle Price (ex-Auction)</span>
                    <span>AUD $25,000</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping & Insurance</span>
                    <span>AUD $2,800</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Import Duty (5%)</span>
                    <span>AUD $1,250</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>GST (10%)</span>
                    <span>AUD $2,830</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4 flex justify-between text-white font-bold">
                    <span>Total Estimated Cost</span>
                    <span>AUD $31,880</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Import With Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Import With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 hover:border-primary/50 transition-all duration-300 group flip-on-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-primary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                100+
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Cars Inspected & Sourced</h4>
              <p className="text-gray-300 text-sm">Premium JDM vehicles carefully selected</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 group flip-on-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                2012
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Growing Import Experience</h4>
              <p className="text-gray-300 text-sm">Established automotive expertise</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 hover:border-primary/50 transition-all duration-300 group flip-on-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-primary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                7
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Days Support</h4>
              <p className="text-gray-300 text-sm">Available throughout the week</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 group flip-on-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ✓
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Compliance & Delivery</h4>
              <p className="text-gray-300 text-sm">Full service from auction to driveway</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get With Our Service - Modern UX */}
      <section className="py-24 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What You Get With Our Service
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Included in Every Import
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                    expandedService === index
                      ? 'border-primary shadow-2xl shadow-primary/20'
                      : 'border-gray-700 hover:border-primary/50'
                  }`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  
                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedService === index ? 'auto' : 0, opacity: expandedService === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-700 mt-3">
                      <p className="text-gray-300 text-sm leading-relaxed">{service.details}</p>
                    </div>
                  </motion.div>
                  
                  <div className="mt-4 flex items-center text-primary text-sm font-semibold">
                    <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                    <motion.span
                      className="ml-2"
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Also Import From USA & UK */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-heading mb-6 text-white">
                We Also Import From USA & UK
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Beyond Japanese imports, we source premium vehicles from United States and United Kingdom markets
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-secondary text-xl">🇺🇸</span>
                  <span className="text-white">American Muscle & Exotics</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl">🇬🇧</span>
                  <span className="text-white">British Classics & Performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary text-xl">🇯🇵</span>
                  <span className="text-white">Japanese Domestic Market</span>
                </div>
              </div>
              <motion.a
                href="/contact-us"
                className="btn-mirror inline-flex items-center bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 border border-secondary/20 hover:border-secondary/40 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                Learn More About Global Imports →
              </motion.a>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="American Muscle Car"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="British Sports Car"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="JDM Car Interior"
                  className="w-full h-48 object-cover rounded-xl shadow-lg col-span-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Auction Sheet Sample */}
      <section className="py-20 bg-carbon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sample Auction Sheet
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Vehicle Details</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Auction Grade:</span>
                    <span className="text-primary font-bold">A (Excellent)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Odometer:</span>
                    <span className="font-bold">45,000 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="font-bold">2.0L Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="font-bold">6-Speed Manual</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drive Type:</span>
                    <span className="font-bold">All-Wheel Drive</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mt-8 mb-4">Condition Report</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Exterior:</span>
                    <span className="text-primary">A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interior:</span>
                    <span className="text-secondary">B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="text-primary">A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="text-primary">A</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                  <h4 className="text-lg font-bold text-white mb-4">Additional Notes</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• No accident history</p>
                    <p>• Regular maintenance records</p>
                    <p>• Non-smoker vehicle</p>
                    <p>• All original parts</p>
                    <p>• Service history available</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    * Sample data for demonstration purposes
                  </p>
                  <motion.a
                    href="/vehicles-for-import"
                    className="btn-mirror bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    View More Vehicles
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Import - Enhanced with Images */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Before & After Import
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                  alt="Car at Japanese Auction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center mb-4">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                    <h3 className="text-2xl font-bold text-white">Before Import</h3>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Vehicle at Japanese auction</li>
                    <li>• Limited inspection access</li>
                    <li>• Language barriers</li>
                    <li>• Complex customs process</li>
                    <li>• Uncertain total costs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                  alt="Delivered Car in Melbourne"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center mb-4">
                    <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                    <h3 className="text-2xl font-bold text-white">After Import</h3>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Fully compliant Australian vehicle</li>
                    <li>• Complete documentation</li>
                    <li>• Professional Melbourne handover</li>
                    <li>• Ongoing maintenance support</li>
                    <li>• Peace of mind guarantee</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
              <div className="text-6xl font-bold text-primary mb-3">100%</div>
              <p className="text-gray-300">Compliance Achievement</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30">
              <div className="text-6xl font-bold text-secondary mb-3">4-6</div>
              <p className="text-gray-300">Weeks Average Delivery</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
              <div className="text-6xl font-bold text-primary mb-3">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Coming Soon */}
      <section className="py-20 bg-carbon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold font-heading mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Customer Reviews
          </motion.h2>
          
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-primary mb-6">"</div>
            <h3 className="text-2xl font-bold text-white mb-4">Testimonials Coming Soon</h3>
            <p className="text-lg text-gray-300 mb-8">
              After January Launch - Real customer reviews will be featured here
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">★</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">★</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Start Your Import Today
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of satisfied customers who've imported their dream JDM cars with UMZE Autohaus
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/import-now"
              className="btn-mirror bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 relative group inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Your Free Quote</span>
            </motion.a>
            <motion.a
              href="/contact-us"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Speak With Expert
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
