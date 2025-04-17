
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Wireframes = () => {
  const wireframes = [
    {
      title: "Creator Profiles",
      description: "Showcase portfolios for Africa's creative talent",
      image: "/lovable-uploads/6c060923-cec0-4aae-a77e-90c2044444d1.png#creator",
      style: "border-disambi-orange/30",
      gridClass: "col-span-1 md:col-span-1",
      imageStyle: "object-cover object-left-top"
    },
    {
      title: "Campaign Briefs",
      description: "Connect brands with creators seamlessly",
      image: "/lovable-uploads/6c060923-cec0-4aae-a77e-90c2044444d1.png#brief",
      style: "border-disambi-blue/30",
      gridClass: "col-span-1 md:col-span-1",
      imageStyle: "object-cover object-right-top"
    },
    {
      title: "Editorial Content",
      description: "Curated stories from the African creative ecosystem",
      image: "/lovable-uploads/6c060923-cec0-4aae-a77e-90c2044444d1.png#zine",
      style: "border-disambi-orange/30",
      gridClass: "col-span-1 md:col-span-1",
      imageStyle: "object-cover object-left-bottom"
    },
    {
      title: "Creator Marketplace",
      description: "Shop products from Africa's top creators",
      image: "/lovable-uploads/6c060923-cec0-4aae-a77e-90c2044444d1.png#shop",
      style: "border-disambi-blue/30",
      gridClass: "col-span-1 md:col-span-1",
      imageStyle: "object-cover object-right-bottom"
    }
  ];

  return (
    <section className="section-padding bg-disambi-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="disambi-gradient-text">Figma Wireframes</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Our thoughtfully designed UX connects creators and brands through intuitive interfaces,
            showcasing the functionality of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wireframes.map((wireframe, index) => (
            <Card 
              key={wireframe.title}
              className={`bg-black/30 backdrop-blur-sm border ${wireframe.style} ${wireframe.gridClass} group hover:border-disambi-orange/50 transition-all duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="relative h-[350px] w-full">
                  {/* Actual wireframe image */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={wireframe.image} 
                        alt={wireframe.title}
                        className={`w-full h-full ${wireframe.imageStyle}`}
                      />
                    </div>
                  </div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black p-6 flex flex-col justify-end opacity-80 group-hover:opacity-90 transition-opacity">
                    <h3 className="text-xl font-display font-medium mb-1 group-hover:disambi-gradient-text">
                      {wireframe.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">{wireframe.description}</p>
                    <div className="flex items-center text-disambi-orange/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View details</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-6">
            These wireframes represent our vision for the Disambi platform, designed to showcase Africa's
            creative talent and facilitate meaningful connections with brands worldwide.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center">
            Explore Platform Features <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wireframes;
