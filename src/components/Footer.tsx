
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold">
              <span className="disambi-gradient-text">Disambi</span>
            </h3>
            <p className="text-white/70">
              Cultural infrastructure for the global creator economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  For Creators
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  For Brands
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Matchmaking
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-disambi-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-disambi-orange transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Disambi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
