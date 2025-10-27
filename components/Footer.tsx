import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-transparent border-t border-slate-800/50">
            <div className="container mx-auto px-6 py-8 text-center text-slate-500">
                <p className="mb-2">&copy; {new Date().getFullYear()} Curated <span className="text-sky-400">Intelligence</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;