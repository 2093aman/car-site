'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TenQuestionsClient() {
    const questions = [
        {
            num: '01',
            q: 'Will I see the original auction sheet?',
            a: 'Every vehicle sold at a Japanese auction is inspected and graded, and that assessment is recorded on an auction sheet. It notes condition, damage, repairs and any concerns. You should see it, and you should have it explained. An importer unwilling to show you the auction sheet is asking you to trust an assessment you are not allowed to read.',
        },
        {
            num: '02',
            q: 'Has the odometer been verified against the export certificate?',
            a: 'The Japanese export certificate records the odometer reading at deregistration. Cross-checking that against the auction sheet and the vehicle itself is the standard way of confirming that a reading has not been altered. Ask whether this has been done and ask to see the document.',
        },
        {
            num: '03',
            q: 'What exactly is included in the price you have quoted?',
            a: 'Ask for the breakdown in writing. Vehicle, auction fees, domestic transport, shipping, duty, GST, compliance, registration, delivery. A single number is not a quote. It is an invitation to discover additional costs later.',
        },
        {
            num: '04',
            q: 'Who handles compliance, and are they registered to do it?',
            a: 'Compliance work must be performed by an appropriately approved workshop. Ask who will be doing it and confirm they hold the required approval.',
        },
        {
            num: '05',
            q: 'What happens if the vehicle arrives damaged?',
            a: 'Ships encounter weather and vehicles are handled multiple times. Ask what cover exists during transit, who arranges it, and what the process is if something has gone wrong on arrival. This is a reasonable question and a straightforward answer should be available.',
        },
        {
            num: '06',
            q: 'What if the auction inspection missed something?',
            a: 'Auction grading is thorough but not infallible. Ask what happens if the car arrives in a condition inconsistent with the auction sheet. There may be no formal recourse, and that is an acceptable answer if given honestly. What matters is that you know the position before committing.',
        },
        {
            num: '07',
            q: 'Do you have a presence in Japan, or do you work through an agent?',
            a: 'Both models exist and both can work. An importer who attends auctions personally can inspect vehicles directly. One who works through an established agent is relying on someone else\'s assessment. Neither is wrong, but you should know which one you are dealing with.',
        },
        {
            num: '08',
            q: 'How long will the whole process take?',
            a: 'From winning a bid to driving the car, the process typically spans a number of weeks and involves shipping schedules, customs clearance and compliance work. Ask for a realistic range rather than a best case. An importer who quotes only the fastest possible timeline is managing your expectations poorly.',
        },
        {
            num: '09',
            q: 'What warranty or aftercare is offered?',
            a: 'This varies enormously. Some importers offer a warranty, some offer none, some offer assistance sourcing parts afterwards. There is no correct answer, but there is a correct time to find out, and it is before you pay.',
        },
        {
            num: '10',
            q: 'Can I speak to someone you have imported for?',
            a: 'The simplest question and often the most revealing. An importer with satisfied customers will usually be able to point you to reviews, or to someone willing to have a short conversation. Reluctance here is worth noticing.',
        },
    ];

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp Image 2025-11-16 at 16.27.54_94e4f99c.jpg"
                        alt="Ten questions to ask an importer before you pay a deposit"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Guide</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Ten Questions to Ask an Importer Before You Pay a Deposit
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
                            <span>11 min read</span>
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
                            Importing a vehicle requires trusting someone with a large amount of money for a car you have not seen, in a country you are not in, bought at an auction you cannot attend.
                        </p>
                        <p className="leading-relaxed mb-12">
                            Most importers are straightforward. Some are not. The difference is usually visible in how they answer questions. These ten are worth asking before any money changes hands. The answers matter less than the willingness to answer.
                        </p>

                        <div className="space-y-6 mb-12">
                            {questions.map((q, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#1a2420] rounded-2xl p-6 border border-[#25614F]/20 hover:border-[#25614F]/40 transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl font-bold text-[#25614F]/40 font-heading leading-none flex-shrink-0">{q.num}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{q.q}</h3>
                                            <p className="leading-relaxed text-base">{q.a}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">What the Answers Tell You</h2>
                        <p className="leading-relaxed mb-6">
                            Almost nobody will have perfect answers to all ten. The industry involves genuine uncertainty, and an honest importer will say so.
                        </p>
                        <p className="leading-relaxed mb-6">
                            What you are listening for is whether the answers are specific or vague, and whether uncertainty is acknowledged or talked around.
                        </p>
                        <p className="leading-relaxed mb-8">
                            Someone who says &ldquo;there is no formal recourse if the auction sheet was wrong, so here is how we reduce that risk&rdquo; is telling you more about how they operate than someone who assures you it never happens.
                        </p>
                        <p className="leading-relaxed mb-8 font-semibold text-[#EAE2D6]">
                            Ask the questions. Write down the answers. Then decide.
                        </p>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Ready to Ask Us These Questions?</h2>
                            <p className="mb-8">We answer every one of them, in writing if you prefer. Get in touch and let us walk you through the process from start to finish.</p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
