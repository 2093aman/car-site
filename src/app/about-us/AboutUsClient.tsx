'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutUs() {
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
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] flex items-center overflow-hidden -mt-20 pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-07 at 16.11.44 (2).jpeg"
            alt="Japanese Classic Car Imported to Australia"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-6 border border-[#25614F]/40 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></span>
              <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Our Story</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              WE HELP PEOPLE IN AUSTRALIA IMPORT QUALITY CARS FROM JAPAN
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-6"></div>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-[#EAE2D6] font-light leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Safely. Transparently. Confidently.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-[#BDB6AD] text-sm md:text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 bg-[#0F1614]/80 px-4 py-2 rounded-full border border-[#25614F]/30">
              <span className="w-2 h-2 bg-[#25614F] rounded-full"></span>
              <span>Real Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0F1614]/80 px-4 py-2 rounded-full border border-[#25614F]/30">
              <span className="w-2 h-2 bg-[#25614F] rounded-full"></span>
              <span>Honest Advice</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0F1614]/80 px-4 py-2 rounded-full border border-[#25614F]/30">
              <span className="w-2 h-2 bg-[#25614F] rounded-full"></span>
              <span>Realistic Expectations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 md:py-24 bg-[#0F1614] relative overflow-hidden">
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
              <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Our Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#EAE2D6] uppercase tracking-wider">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Story with Side Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left - Story Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base text-[#BDB6AD] leading-relaxed">
                Umze Autohaus began long before it became a business. In 2012, my dad started importing cars from Japan out of pure passion.
              </p>

              <p className="text-base text-[#BDB6AD] leading-relaxed">
                I grew up around that process, and in 2019, I imported my first car, a Toyota Chaser. It was a clean example that saved me thousands compared to the local market. That experience showed me the real value of buying directly from Japan.
              </p>

              <p className="text-base text-[#BDB6AD] leading-relaxed">
                When I saw the condition of my first import, it genuinely surprised me. The car was cleaner than anything I&apos;d inspected locally, and the savings were real.
              </p>

              {/* Highlighted Quote */}
              <div className="relative pl-6 border-l-4 border-[#25614F] bg-[#16221F]/50 py-4 pr-4 rounded-r-xl">
                <p className="text-lg md:text-xl text-[#25614F] font-semibold italic leading-relaxed">
                  &quot;What started as a personal win slowly turned into helping others make better, safer, and more affordable choices.&quot;
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[450px] border border-[#25614F]/30 shadow-2xl">
                <img
                  src="/images/CHANGE 3.jpeg"
                  alt="Toyota Chaser imported from Japan - UMZE Autohaus first import"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>

                {/* Floating Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#25614F]/90 backdrop-blur-md rounded-xl p-5 border border-[#EAE2D6]/20 shadow-xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#EAE2D6] mb-1">2019</div>
                      <div className="text-xs md:text-sm text-[#EAE2D6]/90">First Toyota Chaser Import</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Continued Story */}
          <motion.div
            className="mb-20 max-w-4xl mx-auto bg-[#16221F] border border-[#25614F]/30 rounded-2xl p-8 md:p-10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-center">
              <p className="text-base text-[#BDB6AD] leading-relaxed">
                From there, things grew naturally. I began helping mates, family, and eventually their mates as well. Translating auction sheets, researching exporters, checking condition reports, and guiding people through the entire process became something I genuinely enjoyed.
              </p>

              <p className="text-base text-[#BDB6AD] leading-relaxed">
                Over the years, I learned that an auction grade only tells part of the story. The real condition comes from checking photos, physical inspections, underbody condition, repairs, rust points, engine bay signs, and overall presentation.
              </p>

              <p className="text-base text-[#BDB6AD] leading-relaxed">
                We&apos;ve worked with more than 100+ cars—everything from classic JDM models and daily runabouts to modern Europeans, performance cars, hybrids, and collector vehicles.
              </p>
            </div>
          </motion.div>

          {/* Vertical Timeline Journey */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold font-heading text-center mb-12 text-[#EAE2D6] uppercase tracking-wider">
              The Journey
            </h3>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#25614F]/50 via-[#25614F] to-[#25614F]/50 hidden lg:block"></div>

              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    year: "2012",
                    title: "The Beginning",
                    description: "Father started importing vehicles from Japan out of pure passion for Japanese automotive excellence.",
                    align: "left"
                  },
                  {
                    year: "2019",
                    title: "First Import",
                    description: "First personal import: Toyota Chaser. A clean example that showcased the real value of direct imports.",
                    align: "right"
                  },
                  {
                    year: "2020",
                    title: "Organic Growth",
                    description: "Helping friends and family grew naturally into a full-service import operation built on trust.",
                    align: "left"
                  },
                  {
                    year: "Today",
                    title: "Umze Autohaus",
                    description: "A passionate service built on honesty, transparency, and genuine care for every client.",
                    align: "right"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-8 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 bg-[#16221F] border border-[#25614F]/30 rounded-2xl p-6 md:p-8 shadow-xl ${item.align === 'right' ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <div className="text-3xl md:text-4xl font-bold text-[#25614F] mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-[#EAE2D6] mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">{item.description}</p>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full border-4 border-[#0F1614] shadow-xl flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#EAE2D6] rounded-full"></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Japan Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F1614] to-[#1a2420] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#25614F]/30 shadow-2xl">
                <img
                  src="/images/CHANGE 3.1.jpg"
                  alt="High quality car imported from Japan to Melbourne"
                  className="w-full h-[320px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#25614F]/90 backdrop-blur-md rounded-xl p-5 border border-[#EAE2D6]/20 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-[#EAE2D6] mb-1">100+</div>
                        <div className="text-xs md:text-sm text-[#EAE2D6]/90">Vehicles Imported from Japan</div>
                      </div>
                      <div className="text-4xl">🇯🇵</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 border border-[#25614F]/30">
                <span className="text-[#25614F] text-xs md:text-sm">📍</span>
                <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Location Matters</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#EAE2D6] uppercase tracking-wider">
                Why Japan?
              </h2>

              <p className="text-base text-[#BDB6AD] leading-relaxed">
                Japanese vehicles stand apart because of how they&apos;re maintained, not just how they&apos;re built.
              </p>

              <div className="border-l-4 border-[#25614F] pl-6 space-y-4 bg-[#16221F]/40 p-5 rounded-r-xl border border-y-[#25614F]/20 border-r-[#25614F]/20">
                <p className="text-base text-[#BDB6AD] leading-relaxed">
                  Strict inspection standards, excellent road infrastructure, and a culture of regular maintenance mean Japanese cars often arrive in Australia with lower kilometres and better overall condition than their local equivalents.
                </p>

                <p className="text-base text-[#BDB6AD] leading-relaxed">
                  Beyond condition, there&apos;s access. Japan offers models, specifications, and special editions that simply aren&apos;t available in the Australian market - including JDM classics, performance vehicles, and collector cars that retain their value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-[#1a2420] to-[#0F1614] relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Our Difference</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#EAE2D6] uppercase tracking-wider">
              What Makes UMZE Autohaus Different
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-4"></div>
            <p className="text-base text-[#BDB6AD] max-w-3xl mx-auto leading-relaxed">
              Our approach combines genuine experience with transparent practices
            </p>
          </motion.div>

          {/* Consistent Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'We Look Beyond Auction Grades',
                description: 'An auction grade is just a starting point. We analyse photos in detail, commission physical inspections, check underbody condition, verify rust points, assess engine bay signs, and evaluate overall presentation before recommending any vehicle.',
                icon: '🔍'
              },
              {
                title: 'Real Savings, No Hidden Costs',
                description: 'We help you understand exactly what you are paying for - vehicle price, shipping, taxes, compliance, and registration. No surprise fees, no unclear breakdowns. Just clear expectations from start to finish.',
                icon: '💰'
              },
              {
                title: 'Personal Guidance, Every Step',
                description: 'You are not handed off to a faceless system. We translate auction sheets, review condition reports, explain what is important, and keep you informed throughout the entire import process.',
                icon: '🤝'
              },
              {
                title: 'We Don\'t Cut Corners',
                description: 'Our focus is helping you import safely and confidently. We will not push you toward a bad deal or skip important checks to close a sale. Your long-term satisfaction matters more than a quick transaction.',
                icon: '✅'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div>
                  <div className="w-12 h-12 bg-[#25614F]/20 rounded-xl border border-[#25614F]/40 flex items-center justify-center text-2xl mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#EAE2D6] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#BDB6AD] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Range Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F1614] to-[#1a2420] relative overflow-hidden">
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
              <span className="text-[#25614F] text-xs md:text-sm">🏁</span>
              <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Proven Expertise</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#EAE2D6] uppercase tracking-wider">
              Experience & Vehicle Range
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-4"></div>
            <p className="text-base text-[#BDB6AD] max-w-2xl mx-auto">
              We handle every type of vehicle import with expertise and care
            </p>
          </motion.div>

          {/* Standardized Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'JDM Classics',
                desc: 'Iconic Japanese performance vehicles',
                examples: 'Skyline, Supra, Chaser, RX-7',
                icon: '🏁'
              },
              {
                title: 'Daily Drivers',
                desc: 'Reliable imports for everyday use',
                examples: 'Trustworthy and efficient',
                icon: '🚗'
              },
              {
                title: 'Performance Cars',
                desc: 'High-power, driver-focused machines',
                examples: 'Built for speed and thrill',
                icon: '⚡'
              },
              {
                title: 'European Imports',
                desc: 'Premium UK and European classics',
                examples: 'Luxury meets performance',
                icon: '🇪🇺'
              },
              {
                title: 'Hybrids & Eco',
                desc: 'Modern efficiency meets innovation',
                examples: 'Sustainable performance',
                icon: '🌱'
              },
              {
                title: 'Collector Vehicles',
                desc: 'Rare finds and investment pieces',
                examples: 'Timeless automotive art',
                icon: '💎'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-[#16221F] rounded-2xl p-6 md:p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div>
                  <div className="text-4xl mb-4 text-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 text-center">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#BDB6AD] leading-relaxed mb-4 text-center">
                    {category.desc}
                  </p>
                </div>
                <div className="border-t border-[#25614F]/20 pt-3 text-center">
                  <p className="text-xs font-semibold text-[#25614F]">
                    {category.examples}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#0F1614] relative overflow-hidden border-t border-[#25614F]/20">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Vehicles Imported' },
              { number: '2012', label: 'Journey Began' },
              { number: '2019', label: "Founder's First Import" },
              { number: '100%', label: 'Transparency' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-[#16221F]/60 border border-[#25614F]/20 rounded-2xl p-6 shadow-lg"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 border-2 border-[#0F1614]">
                  <div className="text-2xl md:text-3xl font-bold text-[#EAE2D6]">{stat.number}</div>
                </div>
                <h4 className="text-[#BDB6AD] font-semibold text-xs md:text-sm uppercase tracking-wider">{stat.label}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Banner Section */}
      <section className="py-16 md:py-24 bg-[#0F1614] relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#16221F] to-[#0F1614] border border-[#25614F]/40 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#25614F]/20 rounded-full px-5 py-2 mb-6 border border-[#25614F]/30">
              <span className="text-[#25614F] text-sm">🎯</span>
              <span className="text-[#25614F] font-semibold text-xs md:text-sm uppercase tracking-wider">Our Core Purpose</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Our Mission
            </h2>

            <p className="text-lg md:text-2xl text-[#EAE2D6] leading-relaxed font-light max-w-3xl mx-auto">
              Helping people import quality cars from Japan <span className="text-[#25614F] font-semibold">safely</span>, <span className="text-[#25614F] font-semibold">transparently</span>, and <span className="text-[#25614F] font-semibold">confidently</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-heading mb-4 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-[#EAE2D6]/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s discuss your requirements and find the right vehicle for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="bg-[#EAE2D6] text-[#25614F] px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-white transition-all duration-300 inline-block shadow-2xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#EAE2D6]/10 backdrop-blur-sm transition-all duration-300 inline-block"
            >
              View Calculator
            </Link>
          </motion.div>

          {/* Google Reviews Link */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://share.google/Ch858CdwF3raEktou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#EAE2D6] text-[#25614F] px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg text-sm md:text-base"
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
    </div>
  );
}
