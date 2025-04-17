
import React from 'react';
import { Users, Palette, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Matchmaking',
      description: 'Connecting brands with vetted African creators, facilitating creative collaborations and commercial opportunities.',
      iconBg: 'bg-disambi-orange/20',
      iconColor: 'text-disambi-orange'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Studio',
      description: 'Create premium campaigns and cultural content that authentically bridges brands with African cultural contexts.',
      iconBg: 'bg-gradient-to-r from-disambi-orange/20 to-disambi-blue/20',
      iconColor: 'disambi-gradient-text'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Trend Tracking',
      description: 'Data-driven insights into emerging African cultural trends, creative innovations and market opportunities.',
      iconBg: 'bg-disambi-blue/20',
      iconColor: 'text-disambi-blue'
    }
  ];

  return (
    <section id="services" className="section-padding bg-disambi-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="disambi-gradient-text">Our System</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Disambi offers a comprehensive suite of services designed to 
            bridge African creativity with global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-disambi-orange/50 transition-colors group"
            >
              <div className={`${service.iconBg} p-4 rounded-full w-fit mb-6`}>
                <div className={`${service.iconColor}`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-medium mb-4 group-hover:disambi-gradient-text transition-colors">
                {service.title}
              </h3>
              <p className="text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium">
              The Platform
            </h3>
            <p className="text-xl text-white/80">
              Match brands with vetted African creators
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium">
              TDC
            </h3>
            <p className="text-xl text-white/80">
              Create premium campaigns and cultural content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
