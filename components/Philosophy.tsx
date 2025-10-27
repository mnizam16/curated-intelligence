import React from 'react';

const Philosophy: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-4xl">
                 <blockquote className="border-l-4 border-sky-500 pl-8 md:pl-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        We are not a data farm. We are your model's personal curators.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                        Mass-produced, low-quality data creates generic, error-prone models. We operate on a principle of 'quality over quantity.' We partner with a select group of clients to deeply understand their goals, becoming a seamless extension of your AI team and providing the meticulous, insight-driven data that creates real product differentiation.
                    </p>
                </blockquote>
            </div>
        </section>
    );
};

export default Philosophy;