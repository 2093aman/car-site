'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactUsClient() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        budget: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/form-submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', vehicle: '', budget: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp Image 2026-01-07 at 16.11.44.jpeg"
                        alt="Contact Umze Autohaus"
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
                            <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Contact Umze Autohaus
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-[#0F1614]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            {status === 'success' ? (
                                <div className="bg-[#1a2420] border-2 border-[#25614F] p-12 rounded-2xl text-center">
                                    <h3 className="text-3xl font-bold text-[#EAE2D6] mb-4">Message Sent!</h3>
                                    <button onClick={() => setStatus('idle')} className="text-[#25614F] font-bold hover:underline">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6]" placeholder="Full Name" required />
                                        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6]" placeholder="Email" required />
                                    </div>
                                    <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6]" placeholder="Phone" required />
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6]" placeholder="Message" required></textarea>
                                    <button type="submit" disabled={status === 'loading'} className="w-full bg-[#25614F] text-[#EAE2D6] py-4 rounded-xl font-bold text-base hover:bg-[#1e4f3f] transition-all duration-300">{status === 'loading' ? 'Sending...' : 'Send Message'}</button>
                                </form>
                            )}
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-[#1a2420] p-8 rounded-2xl border border-[#25614F]/20">
                                <h3 className="text-2xl font-bold text-[#EAE2D6] mb-6">Contact Details</h3>
                                <div className="space-y-4">
                                    <p className="text-[#BDB6AD]">Email: <a href="mailto:info@umzeautohaus.com.au" className="text-[#EAE2D6]">info@umzeautohaus.com.au</a></p>
                                    <p className="text-[#BDB6AD]">Phone: <a href="tel:+61420790798" className="text-[#EAE2D6]">+61 420 790 798</a></p>
                                    <p className="text-[#BDB6AD]">Location: Melbourne, Victoria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
