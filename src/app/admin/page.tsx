'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0F1614] p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#66E5C4]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#004B3A]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F7F7F7] to-[#A9AAAE] font-heading">
              Admin Dashboard
            </h1>
            <p className="text-[#A9AAAE] mt-2 text-lg">Manage your premium vehicle inventory</p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-red-900/20 transition-all duration-300 backdrop-blur-sm"
          >
            Logout
          </motion.button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Vehicle Listings Card */}
          <Link href="/admin/vehicles" className="group">
            <motion.div
              variants={item}
              className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(102,229,196,0.15)] hover:border-[#66E5C4]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#66E5C4]/0 to-[#66E5C4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-[#66E5C4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#66E5C4]/20">
                <span className="text-4xl">🚗</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-[#F7F7F7] group-hover:text-[#66E5C4] transition-colors">
                Vehicle Listings
              </h2>
              <p className="text-[#A9AAAE] group-hover:text-[#EAE2D6] transition-colors leading-relaxed">
                Add, edit, or remove vehicle imports. Manage prices and specifications.
              </p>

              <div className="mt-8 flex items-center text-[#66E5C4] font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Manage Vehicles</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </Link>

          {/* Blog Management Card */}
          <Link href="/admin/blogs" className="group">
            <motion.div
              variants={item}
              className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(102,229,196,0.15)] hover:border-[#66E5C4]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#66E5C4]/0 to-[#66E5C4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-[#66E5C4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#66E5C4]/20">
                <span className="text-4xl">✍️</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-[#F7F7F7] group-hover:text-[#66E5C4] transition-colors">
                Blog Management
              </h2>
              <p className="text-[#A9AAAE] group-hover:text-[#EAE2D6] transition-colors leading-relaxed">
                Publish articles, guides, and news updates for your customers.
              </p>

              <div className="mt-8 flex items-center text-[#66E5C4] font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Manage Blogs</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </Link>

          {/* Form Submissions Card */}
          <Link href="/admin/forms" className="group">
            <motion.div
              variants={item}
              className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(102,229,196,0.15)] hover:border-[#66E5C4]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#66E5C4]/0 to-[#66E5C4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-[#66E5C4]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#66E5C4]/20">
                <span className="text-4xl">📝</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-[#F7F7F7] group-hover:text-[#66E5C4] transition-colors">
                Form Submissions
              </h2>
              <p className="text-[#A9AAAE] group-hover:text-[#EAE2D6] transition-colors leading-relaxed">
                View inquiries and contact requests from potential buyers.
              </p>

              <div className="mt-8 flex items-center text-[#66E5C4] font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>View Submissions</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </Link>

          {/* Legacy Listings Card - Styled differently to indicate legacy */}
          <Link href="/admin/cars" className="group">
            <motion.div
              variants={item}
              className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(169,170,174,0.15)] hover:border-[#A9AAAE]/50 transition-all duration-500 relative overflow-hidden opacity-75 hover:opacity-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A9AAAE]/0 to-[#A9AAAE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="bg-[#A9AAAE]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#A9AAAE]/20">
                <span className="text-4xl">📂</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-[#F7F7F7] group-hover:text-[#A9AAAE] transition-colors">
                Legacy Cars
              </h2>
              <p className="text-[#A9AAAE] group-hover:text-[#EAE2D6] transition-colors leading-relaxed">
                Access the old car listings system. Reference only.
              </p>

              <div className="mt-8 flex items-center text-[#A9AAAE] font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>View Legacy</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}