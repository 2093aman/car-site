'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InsuranceClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp Image 2025-11-16 at 16.24.40_d9f92f32.jpg"
                        alt="Insuring a Japanese import in Australia"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Education</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Insuring a Japanese Import in Australia: What Nobody Tells You Before You Buy
                        </h1>
                        <div className="flex justify-center gap-4 mb-8">
                            <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 text-[#BDB6AD]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>September 7, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>8 min read</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-[#0F1614]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#BDB6AD]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-xl leading-relaxed mb-8">
                            Most people importing a car from Japan think carefully about the auction, the shipping and the compliance. Insurance tends to be an afterthought, and it is usually the first unpleasant surprise.
                        </p>
                        <p className="leading-relaxed mb-8">
                            It is not that imported cars cannot be insured. They can. But the process works differently, and knowing that in advance saves a great deal of frustration.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Why Imported Cars Are Treated Differently</h2>
                        <p className="leading-relaxed mb-6">
                            Australian insurers price risk using databases of vehicles sold new in this country. An imported vehicle was never sold new here, so in many cases it simply does not appear.
                        </p>
                        <p className="leading-relaxed mb-6">
                            When a car is not in the database, an online quote tool has nothing to work with. It cannot identify the model, cannot estimate a replacement cost, and often cannot proceed at all. This is why many import owners find that online quotes either fail or return figures that make no sense.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Some insurers go further and decline to cover vehicles that were not sold new in Australia at all. Others will cover them, but only through a manual assessment rather than an automated one. The practical consequence is that insuring an import usually means picking up the phone rather than filling in a form.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Insurers Familiar With Imports</h2>
                        <p className="leading-relaxed mb-6">
                            Several Australian insurers are experienced with imported and enthusiast vehicles and understand model variations, compliance processes and import documentation. Those commonly used by import owners include Shannons, RACV, NRMA, Enthusiast Motor Insurance, MB Insurance Group, Ryno Insurance and Assetinsure.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Availability and terms depend on the vehicle, the driver and how the car is used, so this is a starting point for enquiry rather than a recommendation. It is worth calling more than one.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Agreed Value Versus Market Value</h2>
                        <p className="leading-relaxed mb-6">
                            This is the single most important distinction, and it is worth understanding properly.
                        </p>
                        <p className="leading-relaxed mb-6">
                            A market value policy pays what the insurer assesses the car to be worth at the time of a claim, less depreciation. For an ordinary Australian-delivered vehicle that is usually reasonable. For an import it can be a problem, because the insurer may have no reliable local data to value the car against.
                        </p>
                        <p className="leading-relaxed mb-8">
                            An agreed value policy fixes the figure in advance. You and the insurer settle on a value at the start, and that is what is paid if the car is written off. For anything unusual, low mileage, or appreciating rather than depreciating, agreed value is generally the safer arrangement. It typically costs a little more.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">What Insurers Will Want to See</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                'Proof that the vehicle has been complied and is legally registrable',
                                'The VIN or chassis number',
                                'Import approval documentation',
                                'The Japanese auction sheet and any inspection report',
                                'The export certificate, which confirms the odometer reading',
                                'Full details of any modifications',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <span className="w-2 h-2 mt-2 bg-[#25614F] rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="leading-relaxed mb-8">
                            Documentation is not a formality here. An insurer being asked to cover a vehicle it cannot look up in a database is relying on paperwork to understand what it is insuring. The better the paperwork, the more straightforward the conversation.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Declare Every Modification</h2>
                        <p className="leading-relaxed mb-8">
                            Undeclared modifications are among the most common reasons an import claim is refused. It applies to cosmetic changes as well as mechanical ones — wheels, suspension, exhaust, lighting, seats. If it differs from how the car left the factory, tell the insurer. A slightly higher premium is a far better outcome than a declined claim.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Insurance Starts After Compliance, Not Before</h2>
                        <p className="leading-relaxed mb-6">
                            A vehicle cannot generally be insured for road use until it has been complied and is eligible for registration. Comprehensive cover will not activate on a car sitting at the wharf.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Marine transit insurance is a separate product covering the vehicle while it is in transit, and it is worth asking about before shipping rather than after.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">What Affects the Premium</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                'Performance vehicles attract higher premiums than family models.',
                                'Parts availability matters — models sharing components with Australian-delivered vehicles are generally cheaper to insure.',
                                'Secure parking, immobilisers and tracking devices reduce premiums.',
                                'Modifications increase premiums.',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <span className="w-2 h-2 mt-2 bg-[#25614F] rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Ready to Import?</h2>
                            <p className="mb-8">Insuring an import is not difficult, but it is not automatic either. Expect to speak to a person, expect to provide documentation, and consider agreed value seriously. Start these conversations while the car is still in transit.</p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
