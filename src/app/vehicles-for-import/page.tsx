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
      image: 'https://images.pexels.com/photos/9735309/pexels-photo-9735309.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      image: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
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
      {/* Hero Section */}
      <section className="relative text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Japanese sports cars collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-white drop-shadow-2xl">
              Browse Vehicles Ready for Import to Australia
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
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
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Auctions
            </motion.a>

            <motion.a
              href="/import-now"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Import Assistance
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white font-bold text-xl mb-6">Filter Vehicles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <select
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
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
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
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
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                value={selectedFilters.grade}
                onChange={(e) => setSelectedFilters({...selectedFilters, grade: e.target.value})}
              >
                <option value="">All Grades</option>
                <option value="Grade A">Grade A</option>
                <option value="Grade B">Grade B</option>
                <option value="Grade C">Grade C</option>
              </select>

              <select
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                value={selectedFilters.country}
                onChange={(e) => setSelectedFilters({...selectedFilters, country: e.target.value})}
              >
                <option value="">All Countries</option>
                <option value="Japan">Japan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>

              <select
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
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

      {/* Vehicle Grid */}
      <section className="py-16 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Available Vehicles
          </motion.h2>

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
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 border border-gray-700 hover:border-primary/50 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {vehicle.grade}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    From {vehicle.country}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {vehicle.make} {vehicle.model}
                  </h3>

                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="text-primary">📅</span> {vehicle.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-secondary">🛣️</span> {vehicle.mileage.toLocaleString()} km
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-primary mb-6">
                    {vehicle.priceRange}
                  </p>

                  <motion.a
                    href={`/vehicles-for-import/${vehicle.id}`}
                    className="btn-mirror inline-flex items-center text-secondary hover:text-primary font-bold text-lg transition-all duration-300 bg-secondary/10 hover:bg-primary/10 px-4 py-2 rounded-lg"
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

      {/* Why Import With Us Mini-Segment */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Import With Us
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-primary text-2xl">✓</span>
              <span>Transparent landed cost</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-primary text-2xl">✓</span>
              <span>Full inspection report</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-primary text-2xl">✓</span>
              <span>Photos, underbody checks & rust inspection</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-primary text-2xl">✓</span>
              <span>Shipping, customs, GST & compliance included</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Can't find the car you want?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We can source it directly for you from our extensive network of global auctions and suppliers.
          </motion.p>
          <motion.a
            href="/import-now"
            className="btn-mirror bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 relative group inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Request Custom Search</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}