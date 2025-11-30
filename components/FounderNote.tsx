import React from 'react';

const FounderNote: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="relative max-w-5xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800">
                    <div className="text-center md:text-left relative">
                         <span className="absolute -top-4 -left-4 text-8xl font-black text-slate-700/50 opacity-50">“</span>
                        <p className="relative text-xl lg:text-2xl text-slate-300 italic mb-6 leading-relaxed">
                            "Businesses are drowning in administrative work that software can't quite handle and humans hate doing. I started Curated Intelligence to solve this problem. We use the most powerful AI models to do the grunt work, and humans to ensure it's correct. We clear your backlog so you can get back to business."
                        </p>
                        <p className="text-sky-400 font-bold text-lg">Founder, Curated Intelligence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;