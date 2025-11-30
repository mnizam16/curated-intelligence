import React from 'react';

const Problem: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                    AI does the heavy lifting. We do the quality control.
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    AI is incredibly fast, but it makes mistakes. Standard automation software misses messy details like handwriting or slang. That is the gap we fill. We use massive-context AI to process your files, but we manually verify the output to ensure your data, invoices, and content are perfect.
                </p>
            </div>
        </section>
    );
};

export default Problem;