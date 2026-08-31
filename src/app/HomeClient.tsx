'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PastImportsCarousel from '@/components/PastImportsCarousel';
import { OrganizationSchema } from '@/components/StructuredData';

export default function HomeClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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
    <>
      <OrganizationSchema />
      <div className="bg-carbon">
        {/* 1️⃣ HERO SECTION */}
        <section className="relative text-white min-h-[70vh] flex items-center overflow-hidden -mt-20 pt-28 pb-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/Mercedes-Benz-S450-Collecting-Cars-07-07-2024-Ari-Gelgec77.avif"
              alt="Japanese Import Vehicle"
              className="w-full h-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                Umze Autohaus - Japanese Car Imports in Australia
              </h1>
              <p className="text-lg md:text-2xl mb-6 text-[#EAE2D6] font-semibold drop-shadow-lg">
                We help people in Australia import quality cars from Japan
              </p>
            </motion.div>

            <motion.p
              className="text-base md:text-xl mb-10 max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Melbourne-based specialists helping people import vehicles from Japan with clarity, guidance, and full process support.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact-us"
                className="bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
              >
                Get in Touch
              </Link>

              <Link
                href="/calculator"
                className="border-2 border-[#BDB6AD] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#BDB6AD]/10 backdrop-blur-sm transition-all duration-300"
              >
                Use the Calculator
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2️⃣ ABOUT US SECTION */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-carbon border-t border-[#25614F]/20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Who We Are</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6] uppercase tracking-wider">
                About Umze Autohaus
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Column - Image with Overlay */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-[#25614F]/30 shadow-2xl">
                  <img
                    src="/images/CHANGE 1.jpeg"
                    alt="Japanese Car Import"
                    className="w-full h-[320px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                    <div className="bg-[#0F1614]/90 backdrop-blur-md rounded-xl p-4 border border-[#25614F]/20">
                      <div className="text-2xl md:text-3xl font-bold text-[#EAE2D6] mb-1">100%</div>
                      <div className="text-xs md:text-sm text-[#BDB6AD]">Transparency</div>
                    </div>
                    <div className="bg-[#0F1614]/90 backdrop-blur-md rounded-xl p-4 border border-[#25614F]/20">
                      <div className="text-2xl md:text-3xl font-bold text-[#EAE2D6] mb-1">Expert</div>
                      <div className="text-xs md:text-sm text-[#BDB6AD]">Guidance</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content Cards */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Card 1 - Our Story */}
                <div className="bg-[#0F1614] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-xl">
                      📖
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#EAE2D6]">
                      Our Story
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                    Umze Autohaus specialises in importing vehicles from Japan. What began as a personal passion has grown into a service built on real experience, careful research, and honest guidance.
                  </p>
                </div>

                {/* Card 2 - Our Vision */}
                <div className="bg-[#0F1614] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-xl">
                      👁️
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#EAE2D6]">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                    Helping people import quality cars from Japan safely, transparently, and confidently. We believe in honest advice, real experience, and genuine care for every client.
                  </p>
                </div>

                {/* Card 3 - Our Goal */}
                <div className="bg-[#16221F] rounded-2xl p-6 md:p-8 border-2 border-[#25614F]/40 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#25614F] rounded-xl flex items-center justify-center text-xl text-[#EAE2D6]">
                      🎯
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#EAE2D6]">
                      Our Goal
                    </h3>
                  </div>
                  <p className="text-base text-[#EAE2D6] font-semibold leading-relaxed">
                    To help people import good cars safely, transparently, and with confidence.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Core Principles Sub-grid */}
            <div className="pt-8 border-t border-[#25614F]/20">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-8 text-[#EAE2D6]">
                What We Focus On
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0F1614] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 shadow-xl">
                  <h4 className="text-lg font-bold text-[#EAE2D6] mb-3 uppercase tracking-wider">FULL TRANSPARENCY</h4>
                  <ul className="space-y-2 text-sm text-[#BDB6AD]">
                    <li>• Clear explanation of the import process</li>
                    <li>• Open cost breakdowns</li>
                    <li>• No hidden fees or unclear steps</li>
                  </ul>
                </div>

                <div className="bg-[#0F1614] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 shadow-xl">
                  <h4 className="text-lg font-bold text-[#EAE2D6] mb-3 uppercase tracking-wider">TAILORED GUIDANCE</h4>
                  <ul className="space-y-2 text-sm text-[#BDB6AD]">
                    <li>• Vehicles sourced based on needs & budget</li>
                    <li>• Daily drivers, performance & collector cars</li>
                    <li>• One-on-one guidance throughout</li>
                  </ul>
                </div>

                <div className="bg-[#0F1614] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 shadow-xl">
                  <h4 className="text-lg font-bold text-[#EAE2D6] mb-3 uppercase tracking-wider">EXPERIENCE-LED APPROACH</h4>
                  <ul className="space-y-2 text-sm text-[#BDB6AD]">
                    <li>• Real auction experience</li>
                    <li>• Condition checks beyond auction grades</li>
                    <li>• Long-term satisfaction over quick sales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ GOOGLE REVIEWS SECTION */}
        <section className="py-16 md:py-24 bg-[#0F1614] relative overflow-hidden border-t border-[#25614F]/20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="text-[#25614F] text-xs md:text-sm">⭐</span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Client Feedback</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
            </motion.div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel />

            {/* Google Reviews Link */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://share.google/Ch858CdwF3raEktou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25614F] text-[#EAE2D6] px-8 py-4 rounded-xl font-bold hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Read Our Google Reviews
              </a>
            </motion.div>
          </div>
        </section>

        {/* 4️⃣ PAST IMPORTS SECTION */}
        <section className="py-16 md:py-24 bg-carbon relative overflow-hidden border-t border-[#25614F]/20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">100+ Vehicles Successfully Imported</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]">
                Our Past Imports
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
              <p className="text-base text-[#BDB6AD] max-w-3xl mx-auto leading-relaxed">
                High-quality vehicles imported from Japan with meticulous attention to detail and transparent processes
              </p>
            </motion.div>

            {/* Past Imports Carousel */}
            <PastImportsCarousel />
          </div>
        </section>

        {/* 5️⃣ WHY IMPORT FROM JAPAN SECTION */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#0F1614] border-t border-[#25614F]/20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="text-[#25614F] text-xs md:text-sm">🇯🇵</span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Key Advantages</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]">
                Why Import from Japan?
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {/* Benefit 1 */}
              <div className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-2xl mb-4">
                  🛣️
                </div>
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">
                  Lower kilometres and better condition
                </h3>
                <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                  Japanese vehicles are typically well-maintained with genuine low mileage due to strict inspection standards and excellent road infrastructure.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-2xl mb-4">
                  📋
                </div>
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">
                  Transparent auction history
                </h3>
                <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                  Complete documentation and grading system provide clear vehicle history, allowing for informed purchasing decisions.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-2xl mb-4">
                  🏁
                </div>
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">
                  Access to rare & exclusive models
                </h3>
                <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                  Wide selection of models, special editions, and specifications that are rare or not imported to the local Australian market.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-2xl mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">
                  Higher factory specifications
                </h3>
                <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                  Japanese domestic market often features superior equipment, performance options, and factory specifications compared to local vehicles.
                </p>
              </div>
            </div>

            <div className="text-center bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/40 shadow-xl max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-[#EAE2D6] font-semibold italic">
                Importing isn&apos;t about shortcuts — it&apos;s about making informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* 6️⃣ UNDERSTANDING THE REAL COST SECTION */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-carbon border-t border-[#25614F]/20">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="text-[#25614F] text-xs md:text-sm">📊</span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Financial Transparency</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]">
                Understand the Real Cost
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
              <p className="text-base text-[#BDB6AD] max-w-3xl mx-auto">
                Transparent pricing starts with clear expectations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Information items */}
              <div className="space-y-4">
                <div className="bg-[#0F1614] rounded-2xl p-6 border border-[#25614F]/30 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl flex items-center justify-center text-xl text-[#25614F] flex-shrink-0">
                    💰
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EAE2D6] mb-1">
                      Vehicle Purchase Price
                    </h3>
                    <p className="text-sm text-[#BDB6AD]">
                      The auction purchase price plus inland transport and export fees in Japan.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0F1614] rounded-2xl p-6 border border-[#25614F]/30 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl flex items-center justify-center text-xl text-[#25614F] flex-shrink-0">
                    🚢
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EAE2D6] mb-1">
                      Shipping & Marine Insurance
                    </h3>
                    <p className="text-sm text-[#BDB6AD]">
                      Safe ocean freight transport from Japan to Australian ports.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0F1614] rounded-2xl p-6 border border-[#25614F]/30 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl flex items-center justify-center text-xl text-[#25614F] flex-shrink-0">
                    📜
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EAE2D6] mb-1">
                      Taxes & Compliance
                    </h3>
                    <p className="text-sm text-[#BDB6AD]">
                      Import duty, GST, customs clearance, and Australian compliance workshop fees.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0F1614] rounded-2xl p-6 border border-[#25614F]/30 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25614F]/20 rounded-xl flex items-center justify-center text-xl text-[#25614F] flex-shrink-0">
                    🚘
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EAE2D6] mb-1">
                      Registration & Delivery
                    </h3>
                    <p className="text-sm text-[#BDB6AD]">
                      Final state registration, roadworthy certificate, and local delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Calculator Prompt */}
              <div className="flex items-stretch">
                <div className="bg-[#16221F] rounded-2xl p-8 border border-[#25614F]/40 shadow-xl flex flex-col justify-between w-full text-center">
                  <div>
                    <div className="w-16 h-16 bg-[#25614F] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl text-[#EAE2D6]">
                      📊
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">
                      Import Cost Calculator
                    </h3>
                    <p className="text-sm md:text-base text-[#BDB6AD] mb-6 leading-relaxed">
                      To keep expectations clear, we provide an import cost calculator that outlines estimated landed costs before you commit.
                    </p>

                    <div className="space-y-3 mb-8 text-left text-sm text-[#BDB6AD]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#25614F]">✓</span> Detailed cost breakdown
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#25614F]">✓</span> Accurate duty & GST estimates
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#25614F]">✓</span> Zero hidden fees
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/calculator"
                    className="block w-full text-center bg-[#25614F] text-[#EAE2D6] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
                  >
                    Use the Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ OUR IMPORT PROCESS SECTION */}
        <section className="py-16 md:py-24 bg-[#0F1614] relative overflow-hidden border-t border-[#25614F]/20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-4 border border-[#25614F]/30">
                <span className="text-[#25614F] text-xs md:text-sm">🔄</span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Step-by-Step</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]">
                Our Import Process
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
              <p className="text-base text-[#BDB6AD] max-w-2xl mx-auto leading-relaxed">
                Importing a vehicle is a big decision. We guide you through each stage, explain things as we go, and make sure expectations are clear from the start.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="max-w-6xl mx-auto space-y-12 mb-16">
              {[
                {
                  step: '01',
                  title: 'Consultation & Budget Guidance',
                  description: 'We discuss your needs, budget, and preferences. We explain the import process, timelines, and what to expect at each stage.',
                  icon: '💬'
                },
                {
                  step: '02',
                  title: 'Vehicle Sourcing',
                  description: 'We search Japanese auctions for vehicles matching your criteria. We analyse auction sheets, photos, and condition reports.',
                  icon: '🔎'
                },
                {
                  step: '03',
                  title: 'Bid Approval & Deposit',
                  description: 'Once you approve a vehicle, we place the bid on your behalf. You pay a deposit to secure the winning bid.',
                  icon: '🤝'
                },
                {
                  step: '04',
                  title: 'Purchase & Shipping',
                  description: 'The vehicle is purchased and prepared for export. We arrange shipping from Japan to an Australian port.',
                  icon: '🚢'
                },
                {
                  step: '05',
                  title: 'Customs & Compliance',
                  description: 'We handle customs clearance, import duties, GST, and coordinate the compliance inspection process.',
                  icon: '📑'
                },
                {
                  step: '06',
                  title: 'Registration & Delivery',
                  description: 'We assist with Victorian registration and arrange delivery of your vehicle to your location.',
                  icon: '🔑'
                }
              ].map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                  >
                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-xl border-4 border-[#0F1614]">
                        <span className="text-3xl md:text-4xl">{item.icon}</span>
                        <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#EAE2D6] rounded-full flex items-center justify-center shadow border-2 border-[#0F1614]">
                          <span className="text-[#25614F] font-bold text-xs">{item.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-[#16221F] border border-[#25614F]/30 rounded-2xl p-6 md:p-8 shadow-xl ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <h3 className="text-xl md:text-2xl font-bold text-[#EAE2D6] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View Full Process CTA */}
            <div className="text-center mb-16">
              <Link
                href="/import-process"
                className="bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1e4f3f] transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
              >
                <span>View Full Process</span>
                <span>→</span>
              </Link>
            </div>

            {/* Final Contact Prompt Banner */}
            <div className="bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
              <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4 text-[#EAE2D6]">
                Thinking About Importing?
              </h3>
              <p className="text-sm md:text-lg text-[#EAE2D6]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                If you are considering importing a vehicle or want to understand whether it is the right option, get in touch. We will talk through eligibility, timing, and realistic expectations.
              </p>
              <Link
                href="/contact-us"
                className="bg-[#EAE2D6] text-[#25614F] px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white transition-all duration-300 inline-block shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
