
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 space-y-8 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight animate-fade-in">
          <span className="disambi-gradient-text">Disambi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in animate-delay-100">
          Cultural infrastructure for the global creator economy
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animate-delay-200">
          Built from culture. Powered by data. Monetized with clarity.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in animate-delay-300">
          <a href="#services" className="btn-primary">
            Explore Our Services
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-white opacity-70 hover:opacity-100 transition-opacity" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
