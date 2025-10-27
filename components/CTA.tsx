import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                     <span className="text-sky-400">
                        Let's Build a Smarter Model Together.
                     </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                    The best way to understand the impact of high-quality data is to see it in action. We invite you to begin with a small, well-defined pilot project, tailored to your most pressing model-improvement goal.
                </p>
                <a
                    href="mailto:intelligence.curated@gmail.com"
                    className="inline-block bg-sky-500 text-white font-bold py-4 px-10 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20"
                >
                    intelligence.curated@gmail.com
                </a>
            </div>
        </section>
    );
};

export default CTA;