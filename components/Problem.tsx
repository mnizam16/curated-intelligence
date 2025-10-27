import React from 'react';

const Problem: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                    The Last Mile of Generative AI is Human.
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Every great generative model can produce technically impressive images. But the true competitive advantage—the magic that users fall in love with—lies in aesthetic coherence, nuance, and reliability. This is the gap between a fascinating tech demo and an indispensable creative tool. It's the gap we exist to fill.
                </p>
            </div>
        </section>
    );
};

export default Problem;