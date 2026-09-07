'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ImportCostsClient() {
    const costs = [
        {
            section: 'In Japan',
            items: [
                { label: 'Vehicle price', desc: 'What the car sells for at auction, or the agreed price if bought from a dealer.' },
                { label: 'Auction and bidding fees', desc: 'Auction houses charge a fee on every successful bid. If bidding through an agent, the agent\'s fee sits on top.' },
                { label: 'Domestic transport within Japan', desc: 'Moving the vehicle from the auction house to the port. Distance matters.' },
                { label: 'Deregistration and export documentation', desc: 'The vehicle must be deregistered in Japan and an export certificate issued, confirming the odometer reading.' },
                { label: 'Port and loading charges', desc: 'Handling at the Japanese port before the vehicle is loaded.' },
            ]
        },
        {
            section: 'Getting It Here',
            items: [
                { label: 'Shipping', desc: 'Roll-on roll-off is generally cheaper. Container shipping costs more but the vehicle is enclosed.' },
                { label: 'Marine insurance', desc: 'Optional but worth considering. Covers the vehicle while at sea.' },
            ]
        },
        {
            section: 'Arriving in Australia',
            items: [
                { label: 'Customs duty', desc: 'Applied to the value of the vehicle. Rates depend on vehicle type and age.' },
                { label: 'Goods and services tax (GST)', desc: 'Calculated on the combined value of the vehicle, the shipping and any duty.' },
                { label: 'Luxury car tax', desc: 'Applies only above a threshold that changes each financial year. Where it applies, it is substantial.' },
                { label: 'Biosecurity inspection and cleaning', desc: 'Vehicles are inspected on arrival. If contamination is found, cleaning is required at the owner\'s cost.' },
                { label: 'Wharf and port handling', desc: 'Charges for unloading and holding the vehicle. Storage fees accumulate if the vehicle sits waiting for paperwork.' },
                { label: 'Customs broker', desc: 'Clearing a vehicle through customs requires a licensed broker unless you hold that licence yourself.' },
            ]
        },
        {
            section: 'Making It Road Legal',
            items: [
                { label: 'Compliance', desc: 'The vehicle must meet Australian Design Rules. This is generally the largest single cost after the vehicle and shipping.' },
                { label: 'Modifications required for compliance', desc: 'Depending on the vehicle and its age: lighting, seatbelts, child restraint anchorages, tyres, speedometer, emissions work.' },
                { label: 'Roadworthy inspection', desc: 'Required in most states before registration.' },
            ]
        },
        {
            section: 'Before You Can Drive It',
            items: [
                { label: 'Registration', desc: 'Standard state registration fees.' },
                { label: 'Stamp duty', desc: 'Calculated on the vehicle\'s value and varying by state. Often overlooked in early budgeting.' },
                { label: 'Compulsory third party insurance', desc: 'Required for registration in every state.' },
                { label: 'Delivery', desc: 'If the vehicle is being sent interstate from the port of arrival.' },
            ]
        },
    ];

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp Image 2025-11-16 at 16.27.22_516a75d2.jpg"
                        alt="What importing a car from Japan actually costs"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Import Costs</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            What Importing a Car From Japan Actually Costs
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
                            <span>10 min read</span>
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
                            The most common mistake in importing is budgeting for the auction price and treating everything else as incidental. Everything else is not incidental.
                        </p>
                        <p className="leading-relaxed mb-12">
                            This article does not quote figures, because they change constantly with exchange rates, shipping availability and the specific vehicle. What it does is list every cost that exists, so nothing arrives as a surprise.
                        </p>

                        {costs.map((section, si) => (
                            <div key={si} className="mb-12">
                                <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">{section.section}</h2>
                                <div className="space-y-3">
                                    {section.items.map((item, ii) => (
                                        <div key={ii} className="bg-[#1a2420] rounded-xl p-5 border border-[#25614F]/20">
                                            <div className="font-bold text-[#EAE2D6] mb-1">{item.label}</div>
                                            <div className="text-sm leading-relaxed">{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">The Two Things Worth Remembering</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
                                <div className="font-bold text-[#EAE2D6] mb-2">Taxes are calculated on the landed value, not the purchase price.</div>
                                <p>Duty and GST apply to the combined value of the car and the cost of getting it here. A cheaper car with expensive shipping is not as cheap as it looks.</p>
                            </div>
                            <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
                                <div className="font-bold text-[#EAE2D6] mb-2">Compliance cost varies by vehicle, not by price.</div>
                                <p>Two cars bought for the same amount can differ substantially in what they need to become road legal. Establishing that before bidding, not after, is the difference between a good purchase and an expensive lesson.</p>
                            </div>
                        </div>

                        <p className="leading-relaxed mb-8">
                            Any importer worth using will provide a full written breakdown before you commit, covering every item above. If a quote consists of one number, ask what it excludes.
                        </p>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Get a Full Cost Breakdown</h2>
                            <p className="mb-8">Use our Import Cost Calculator to estimate every cost involved in bringing your vehicle from Japan to your driveway.</p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/calculator"
                                    className="inline-block bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                                >
                                    Import Cost Calculator
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="inline-block border border-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#25614F]/10 transition-all duration-300"
                                >
                                    Contact Our Team
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
