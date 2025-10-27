import React from 'react';

interface HeroProps {
    onDiscoverClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[60px]">
            <div className="absolute inset-0 bg-slate-950 -z-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-sky-900/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10 p-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-4">
                    <span className="text-sky-400">
                        Beyond the Prompt
                    </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
                    We provide the human insight that transforms powerful generative models into truly creative, reliable, and beloved products.
                </p>
                <button
                    onClick={onDiscoverClick}
                    className="bg-sky-500 text-white font-bold py-4 px-10 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20"
                >
                    Discover Our Process
                </button>
            </div>
        </section>
    );
};

export default Hero;