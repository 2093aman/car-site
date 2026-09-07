'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PartsClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp Image 2025-11-16 at 16.25.52_33e250fd.jpg"
                        alt="Parts for Japanese imports in Australia"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Education</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Can You Actually Get Parts for a Japanese Import in Australia?
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
                            <span>9 min read</span>
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
                            Ask anyone why they decided against importing a car from Japan and this is usually the reason. Not the paperwork, not the shipping, not the cost. The fear that something will break and no part will exist.
                        </p>
                        <p className="leading-relaxed mb-8">
                            It is a fair question and it deserves a straight answer rather than reassurance.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">The Short Version</h2>
                        <p className="leading-relaxed mb-6">
                            For mainstream Japanese models, parts availability is rarely the problem people expect. For unusual or low-volume models, it genuinely can be.
                        </p>
                        <p className="leading-relaxed mb-8">
                            The difference between those two situations is worth understanding before you buy, not after.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Why Most Parts Are Easier to Find Than Expected</h2>
                        <p className="leading-relaxed mb-6">
                            Many Japanese domestic market vehicles share a great deal with models that were sold new in Australia. Toyota, Honda, Nissan, Mazda, Subaru and Mitsubishi all sold heavily here, and components frequently cross over.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Body and interior parts are usually the simplest. Panels, lights, mirrors, glass and trim often match between an import and its Australian equivalent, and these are exactly the parts most commonly needed after a minor collision.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Servicing items such as filters, belts, brake components, suspension parts and fluids are generally straightforward. A great deal of what a car needs across its life falls into this category.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Where It Becomes Harder</h2>
                        <p className="leading-relaxed mb-6">
                            Electronics are the most common difficulty. Wiring systems, control units and instrument clusters can differ between markets even where the car looks identical, and these parts need careful identification rather than assumption.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Genuinely rare models are a different matter. A low-volume performance variant or an unusual specification will have a smaller pool of donor vehicles in Australia, and some parts may need to be sourced from Japan with the lead time that implies.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Where the Parts Actually Come From</h2>
                        <div className="space-y-3 mb-8">
                            {[
                                { title: 'Wrecking yards', desc: 'Where mechanics usually look first. Imported vehicles that have been written off are dismantled and components stored.' },
                                { title: 'Specialist parts importers', desc: 'Australia has several dealing specifically in Japanese components.' },
                                { title: 'Dealership networks', desc: 'A parts specialist who understands cross-referencing can often identify that a component also fitted an Australian-delivered model.' },
                                { title: 'Direct from Japan', desc: 'Slower but reliable and often less expensive than expected.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <div className="font-bold text-[#EAE2D6] mb-1">{item.title}</div>
                                    <div>{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">The Mechanic Matters More Than the Parts</h2>
                        <p className="leading-relaxed mb-6">
                            A workshop that regularly services imports will know which components cross over to Australian models, will pre-order anything unusual before a scheduled service, and will not be surprised by a Japanese service manual.
                        </p>
                        <p className="leading-relaxed mb-6">
                            A general workshop that has never seen one may quote a long wait for something that is actually sitting on a shelf under a different part number.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Finding the right mechanic before you buy is worth more than any parts research you can do. Owner forums and enthusiast groups are the practical way to find one.
                        </p>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Have Questions About a Specific Model?</h2>
                            <p className="mb-8">A ten-minute conversation with our team about the specific model you are considering will tell you more than hours of searching online.</p>
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
