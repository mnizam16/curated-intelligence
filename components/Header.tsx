import React from 'react';
import LogoIcon from './icons/LogoIcon';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-3" aria-label="Curated Intelligence Home">
                        <LogoIcon className="w-8 h-8 text-sky-400" />
                        <span className="text-xl font-bold text-slate-200 tracking-wide">
                            Curated <span className="text-sky-400">Intelligence</span>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
