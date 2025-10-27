import React from 'react';
import CrownIcon from './icons/CrownIcon';
import PaintBrushIcon from './icons/PaintBrushIcon';
import BoundingBoxIcon from './icons/BoundingBoxIcon';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2 hover:border-sky-800">
        <div className="relative z-10">
            <div className="flex justify-center mb-6">
                <div className="bg-slate-800 p-4 rounded-full border border-slate-700 group-hover:border-sky-700 transition-colors">
                    {icon}
                </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">{title}</h3>
            <p className="text-slate-400 text-center leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h2>
                    <p className="text-lg text-sky-400 mt-4">Precision data to elevate your AI from capable to captivating.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <ServiceCard
                        icon={<CrownIcon className="w-8 h-8 text-sky-400" />}
                        title="Aesthetic Ranking & RLHF"
                        description="We teach your model what 'good' looks like. Through meticulous human ranking of generated outputs, we create the critical feedback data (RLHF) that elevates your model's taste, moving it from random results to consistently beautiful, compelling, and brand-aligned creations."
                    />
                    <ServiceCard
                        icon={<PaintBrushIcon className="w-8 h-8 text-sky-400" />}
                        title="Style & Concept Fine-Tuning"
                        description="Inject new skills and aesthetics directly into your model. Whether you need to master the subtle texture of an oil painting, or a novel artistic style, we craft detailed, expertly-captioned datasets that serve as your model's private art school."
                    />
                    <ServiceCard
                        icon={<BoundingBoxIcon className="w-8 h-8 text-sky-400" />}
                        title="Core Object & Semantic Labeling"
                        description="The foundation of reliability. For features like in-painting, and composition control to work flawlessly, the model must first understand the world. We provide painstakingly accurate object labeling, ensuring your model's core knowledge is pristine."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;