
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-black border-t border-disambi-orange/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="disambi-gradient-text">Connecting Africa's Cultural Creators</span>
            </h2>
            
            <p className="text-white/80 text-lg">
              Disambi is a multi-dimensional digital platform and collective connecting 
              Africa's cultural creators—across fashion, art, and lifestyle—with 
              global brands, audiences, and each other.
            </p>
            
            <p className="text-white/80 text-lg">
              Through storytelling, community, and data, we provide infrastructure, 
              visibility, and monetization for Africa's creative economy.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary">Join Our Community</a>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-md overflow-hidden">
            <div className="h-full w-full bg-disambi-gradient opacity-20 absolute"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-2xl md:text-3xl font-display text-white">Starting in Nairobi</p>
                <p className="text-xl text-white/90">Built to scale globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
