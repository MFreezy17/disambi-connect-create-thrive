
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="#" className="text-white text-2xl font-display font-bold">
          <span className="disambi-gradient-text">Disambi</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-disambi-orange transition-colors">About</a>
          <a href="#services" className="text-white hover:text-disambi-orange transition-colors">Services</a>
          <a href="#contact" className="text-white hover:text-disambi-orange transition-colors">Contact</a>
          <a href="#" className="btn-outline">Join Waitlist</a>
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-disambi-orange/20 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-white py-2 hover:text-disambi-orange transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="text-white py-2 hover:text-disambi-orange transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#contact" className="text-white py-2 hover:text-disambi-orange transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#" className="btn-outline text-center" onClick={() => setIsOpen(false)}>Join Waitlist</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
