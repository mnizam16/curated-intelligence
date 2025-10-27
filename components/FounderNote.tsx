import React from 'react';

const FounderNote: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="relative max-w-5xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800">
                    <div className="text-center md:text-left relative">
                         <span className="absolute -top-4 -left-4 text-8xl font-black text-slate-700/50 opacity-50">“</span>
                        <p className="relative text-xl lg:text-2xl text-slate-300 italic mb-6 leading-relaxed">
                            "I've always been fascinated by the intersection of human creativity and machine intelligence. I started Curated Intelligence because I saw that the most significant breakthroughs weren't just about bigger models, but smarter data. Our mission is simple: to provide that crucial layer of human taste and understanding that helps build truly remarkable AI."
                        </p>
                        <p className="text-white font-bold text-lg">Muhammad Nizam (NUST)</p>
                        <p className="text-sky-400">Founder, Curated Intelligence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;