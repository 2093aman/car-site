'use client';

import { motion } from 'framer-motion';

export default function ImportProcess() {
  const steps = [
    {
      number: 1,
      title: "Tell Us What You Want",
      description: "Describe your budget, model preferences, and vehicle purpose.",
      details: "We source options from Japan, USA, and UK auctions.",
      icon: "🎯"
    },
    {
      number: 2,
      title: "Live Auction Access",
      description: "We shortlist suitable cars and review:",
      details: "Auction grade, Body condition, Underbody images, Rust points, Maintenance history",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Condition Report & Verification",
      description: "You receive a full breakdown including:",
      details: "Photos, Repair markings, Engine bay signs, Frame integrity, Odometer verification",
      icon: "📋"
    },
    {
      number: 4,
      title: "Bidding & Purchase",
      description: "We bid on your behalf with your approved maximum budget.",
      details: "",
      icon: "💰"
    },
    {
      number: 5,
      title: "Shipping to Australia",
      description: "We handle:",
      details: "Export paperwork, Shipping booking, Container/RoRo management",
      icon: "🚢"
    },
    {
      number: 6,
      title: "Customs, GST & Compliance",
      description: "We manage all legal responsibilities including:",
      details: "Customs clearance, GST payment, Import approvals, Australian Compliance, Roadworthy arrangements",
      icon: "✓"
    },
    {
      number: 7,
      title: "Final Delivery",
      description: "Car is delivered to you or picked up in Melbourne.",
      details: "Includes post-delivery support.",
      icon: "🏁"
    }
  ];

  const costBreakdown = {
    auctionPrice: 900000, // ¥
    exportFees: 50000, // ¥
    shipping: 2000, // AUD
    gstDuty: 1800, // AUD
    compliance: 1200, // AUD
    total: 17800 // AUD
  };

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
            alt="Import process workflow"
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
              A Seamless, Transparent Import Process Designed for Australians
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            From vehicle search to delivery in Melbourne — we handle everything.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="/import-now"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Import
            </motion.a>

            <motion.a
              href="/vehicles-for-import"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Current Auctions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Step-by-Step Breakdown
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                variants={fadeInUp}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </motion.div>
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {step.details && (
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Import Cost Breakdown Example */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-2xl border border-primary/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Import Cost Breakdown Example
            </motion.h3>

            <motion.p
              className="text-center text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Add a sample car (e.g., Toyota Chaser or Evo VIII):
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600">
                  <h4 className="text-xl font-bold text-white mb-4">Vehicle: Toyota Chaser</h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Auction Price:</span>
                      <span className="font-bold">¥{costBreakdown.auctionPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Export Fees:</span>
                      <span className="font-bold">¥{costBreakdown.exportFees.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span className="font-bold">AUD ${costBreakdown.shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST + Duty:</span>
                      <span className="font-bold">AUD ${costBreakdown.gstDuty.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Compliance:</span>
                      <span className="font-bold">AUD ${costBreakdown.compliance.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3 flex justify-between text-white font-bold text-lg">
                      <span>Total Landed Cost:</span>
                      <span>AUD ${costBreakdown.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
                  <h4 className="text-xl font-bold text-white mb-4">What's Included</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Full auction bidding service</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Professional condition inspection</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Complete shipping coordination</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Customs clearance & GST</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Australian compliance certification</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-primary text-xl">✓</span>
                      <span>Melbourne delivery & support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get your personalized import plan and cost estimate today.
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
              <span className="relative z-10">Start Your Import</span>
            </motion.a>
            <motion.a
              href="/vehicles-for-import"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Current Auctions
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}