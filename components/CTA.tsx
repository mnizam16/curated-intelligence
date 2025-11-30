import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                     <span className="text-sky-400">
                        Let's Clear Your To-Do List.
                     </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                    Don't take our word for it. Send us a "messy" batch of work—whether it's invoices, a video file, or a lead list. We will process a sample for free to prove our accuracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="mailto:intelligence.curated@gmail.com"
                        className="inline-block bg-sky-500 text-white font-bold py-4 px-10 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20"
                    >
                        intelligence.curated@gmail.com
                    </a>
                    <span className="text-slate-400 text-sm">Get a free test batch</span>
                </div>
            </div>
        </section>
    );
};

export default CTA;