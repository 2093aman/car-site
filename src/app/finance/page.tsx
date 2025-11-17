'use client';

import { motion } from 'framer-motion';

export default function Finance() {
  const financeOptions = [
    {
      type: 'Pre-Approval Finance',
      icon: '✅',
      description: 'Secure funding before bidding begins.',
      benefits: [
        'Better auction confidence',
        'Helps set budget limits',
        'Faster approval process'
      ]
    },
    {
      type: 'Personal Car Loans',
      icon: '🚗',
      description: 'Perfect for imported JDM, classic, or collector vehicles.',
      benefits: [
        'Low-interest options available',
        'Suitable for most import categories',
        'Flexible repayment terms'
      ]
    },
    {
      type: 'Business/ABN Finance',
      icon: '💼',
      description: 'For buyers purchasing under business use.',
      benefits: [
        'Tax advantages available',
        'Higher loan amounts possible',
        'Business expense deductions'
      ]
    }
  ];

  const requiredDocuments = [
    'ID proof (Driver\'s License or Passport)',
    'Income verification (Payslips or Tax Returns)',
    'Bank statements (Last 3 months)',
    'Credit check permission',
    'Vehicle purchase agreement',
    'Proof of address'
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
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Financial planning and car finance"
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
              Finance Your Imported Vehicle With Ease
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Flexible options for Australian buyers importing their dream JDM or performance car.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="#calculator"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Calculator
            </motion.a>

            <motion.a
              href="#apply"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Finance
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Types of Finance Options
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {financeOptions.map((option, index) => (
              <motion.div
                key={option.type}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl">{option.icon}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {option.type}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-400">
                      <span className="text-primary text-sm">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Finance Calculator Preview */}
      <section id="calculator" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
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
              Finance Calculator Preview
            </motion.h3>

            <motion.p
              className="text-center text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              (Non-functional preview UI)
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Loan Amount</label>
                  <div className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    AUD $25,000
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Loan Term</label>
                  <div className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    60 months
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Interest Rate</label>
                  <div className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    7.5% p.a.
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Repayment Frequency</label>
                  <div className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    Monthly
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 border border-gray-600">
                <h4 className="text-xl font-bold text-white mb-6">Estimated Repayments</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-white">AUD $520</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Total Interest:</span>
                    <span className="font-bold text-white">AUD $6,200</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Total Amount:</span>
                    <span className="font-bold text-white">AUD $31,200</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4 mt-6">
                    <p className="text-gray-400 text-sm text-center">
                      * This is a preview calculation. Contact us for accurate quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-carbon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Required Documents
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {requiredDocuments.map((document, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📄</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {document}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Apply for Finance?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get pre-approved and secure your financing before bidding on your dream car.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/contact-us"
              className="btn-mirror bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 relative group inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply for Finance</span>
            </motion.a>
            <motion.a
              href="/import-now"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Our Finance Partner
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}