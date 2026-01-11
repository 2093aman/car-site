'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VehiclesForImport() {
  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    grade: '',
    transmission: '',
    fuel: '',
    budget: '',
    country: ''
  });

  const vehicles = [
    {
      id: 1,
      make: 'Mitsubishi',
      model: 'Lancer Evolution VIII',
      year: 2005,
      mileage: 120000,
      grade: 'Grade A',
      country: 'Japan',
      priceRange: 'AUD $25,000 – $28,000',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 2,
      make: 'Nissan',
      model: 'Silvia S15',
      year: 2002,
      mileage: 85000,
      grade: 'Grade A',
      country: 'Japan',
      priceRange: 'AUD $35,000 – $38,000',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 3,
      make: 'Toyota',
      model: 'Supra MK4',
      year: 1997,
      mileage: 95000,
      grade: 'Grade B',
      country: 'Japan',
      priceRange: 'AUD $45,000 – $48,000',
      image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 4,
      make: 'Subaru',
      model: 'Impreza WRX STI',
      year: 2008,
      mileage: 110000,
      grade: 'Grade A',
      country: 'Japan',
      priceRange: 'AUD $22,000 – $25,000',
      image: 'https://images.unsplash.com/photo-1519996409143-03b5428835b7?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 5,
      make: 'Honda',
      model: 'Civic Type R',
      year: 2007,
      mileage: 78000,
      grade: 'Grade A',
      country: 'Japan',
      priceRange: 'AUD $18,000 – $21,000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 6,
      make: 'Mazda',
      model: 'RX-7 FD',
      year: 1999,
      mileage: 125000,
      grade: 'Grade B',
      country: 'Japan',
      priceRange: 'AUD $32,000 – $35,000',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
      transmission: 'Manual',
      fuel: 'Petrol'
    }
  ];

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

  return (
    <div className="bg-carbon">
      {/* Hero Section - Modern */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Japanese sports cars collection"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Premium Imports</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Browse Vehicles Ready for Import to Australia
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Premium JDM, US, and UK imports — verified, inspected, and sourced from trusted global auctions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="/view-auctions"
              className="bg-[#25614F] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Auctions
            </motion.a>

            <motion.a
              href="/import-now"
              className="border-2 border-[#EAE2D6]/80 text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EAE2D6] hover:text-[#25614F] transition-all duration-300 shadow-xl backdrop-blur-sm bg-[#EAE2D6]/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Import Assistance
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar - Modern */}
      <section className="py-16 bg-[#0F1614] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#25614F]/10 to-[#25614F]/5 rounded-2xl p-8 border border-[#25614F]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-[#EAE2D6] font-bold text-2xl mb-4">Filter Vehicles</h3>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <select
                className="bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm"
                value={selectedFilters.make}
                onChange={(e) => setSelectedFilters({...selectedFilters, make: e.target.value})}
              >
                <option value="">All Makes</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Honda">Honda</option>
                <option value="Subaru">Subaru</option>
                <option value="Mazda">Mazda</option>
              </select>

              <select
                className="bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm"
                value={selectedFilters.year}
                onChange={(e) => setSelectedFilters({...selectedFilters, year: e.target.value})}
              >
                <option value="">All Years</option>
                <option value="2020+">2020+</option>
                <option value="2015-2019">2015-2019</option>
                <option value="2010-2014">2010-2014</option>
                <option value="2005-2009">2005-2009</option>
                <option value="2000-2004">2000-2004</option>
                <option value="1995-1999">1995-1999</option>
              </select>

              <select
                className="bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm"
                value={selectedFilters.grade}
                onChange={(e) => setSelectedFilters({...selectedFilters, grade: e.target.value})}
              >
                <option value="">All Grades</option>
                <option value="Grade A">Grade A</option>
                <option value="Grade B">Grade B</option>
                <option value="Grade C">Grade C</option>
              </select>

              <select
                className="bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm"
                value={selectedFilters.country}
                onChange={(e) => setSelectedFilters({...selectedFilters, country: e.target.value})}
              >
                <option value="">All Countries</option>
                <option value="Japan">Japan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>

              <select
                className="bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm"
                value={selectedFilters.budget}
                onChange={(e) => setSelectedFilters({...selectedFilters, budget: e.target.value})}
              >
                <option value="">All Budgets</option>
                <option value="0-20000">$0 - $20,000</option>
                <option value="20000-35000">$20,000 - $35,000</option>
                <option value="35000-50000">$35,000 - $50,000</option>
                <option value="50000+">$50,000+</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Grid - Modern */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37,97,79,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Available Vehicles
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
            <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto">
              Premium vehicles ready for Australian import
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                className="group bg-gradient-to-br from-[#0F1614] to-[#25614F]/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#25614F]/20 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#25614F] text-[#EAE2D6] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {vehicle.grade}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    From {vehicle.country}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#EAE2D6] mb-2 group-hover:text-[#25614F] transition-colors">
                    {vehicle.make} {vehicle.model}
                  </h3>

                  <div className="flex items-center gap-4 text-[#BDB6AD] mb-4">
                    <span className="flex items-center gap-1">
                      <span className="text-[#25614F]">📅</span> {vehicle.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#25614F]">🛣️</span> {vehicle.mileage.toLocaleString()} km
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-[#25614F] mb-6">
                    {vehicle.priceRange}
                  </p>

                  <motion.a
                    href={`/vehicles-for-import/${vehicle.id}`}
                    className="inline-flex items-center text-[#BDB6AD] hover:text-[#25614F] font-bold text-lg transition-all duration-300 bg-[#25614F]/10 hover:bg-[#25614F]/20 px-4 py-2 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform text-xl">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Import With Us - Modern */}
      <section className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAE2D6]">
              Why Import With Us
            </h3>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
            <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#BDB6AD] max-w-2xl mx-auto">
              Experience the difference with our premium import service
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              'Transparent landed cost',
              'Full inspection report',
              'Photos, underbody checks & rust inspection',
              'Shipping, customs, GST & compliance included'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 text-[#BDB6AD] bg-gradient-to-br from-[#25614F]/10 to-[#25614F]/5 rounded-xl p-6 border border-[#25614F]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#25614F] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="leading-relaxed pt-1">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Can't find the car you want?
          </motion.h2>
          <motion.p
            className="text-xl text-[#EAE2D6]/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We can source it directly for you from our extensive network of global auctions and suppliers.
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
              className="bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Request Custom Search</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}