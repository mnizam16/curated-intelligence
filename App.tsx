import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import FounderNote from './components/FounderNote';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    const servicesRef = useRef<HTMLDivElement>(null);

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-slate-950 text-slate-300 antialiased grid-background">
            <Header />
            <main className="overflow-x-hidden">
                <Hero onDiscoverClick={scrollToServices} />
                <Problem />
                <div id="services" ref={servicesRef}>
                  <Services />
                </div>
                <Philosophy />
                <FounderNote />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default App;