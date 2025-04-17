
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Wireframes = () => {
  const wireframes = [
    {
      title: "Creator Discovery",
      description: "Search and filter through Africa's top creative talent",
      style: "border-disambi-orange/30",
      gridClass: "col-span-1 md:col-span-2",
      height: "h-[180px] md:h-[200px]"
    },
    {
      title: "Profile Pages",
      description: "Showcase portfolios with visual impact",
      style: "border-disambi-blue/30",
      gridClass: "col-span-1",
      height: "h-[180px]"
    },
    {
      title: "Matchmaking",
      description: "Connect brands with creators seamlessly",
      style: "border-disambi-orange/30",
      gridClass: "col-span-1",
      height: "h-[180px]"
    },
    {
      title: "Editorial Content",
      description: "Curated stories from the African creative ecosystem",
      style: "border-disambi-blue/30",
      gridClass: "col-span-1 md:col-span-2",
      height: "h-[180px] md:h-[200px]"
    }
  ];

  return (
    <section className="section-padding bg-disambi-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="disambi-gradient-text">Platform Wireframes</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A glimpse into our user experience — connecting creators and brands through thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wireframes.map((wireframe, index) => (
            <Card 
              key={wireframe.title}
              className={`bg-black/30 backdrop-blur-sm border ${wireframe.style} ${wireframe.gridClass} group hover:border-disambi-orange/50 transition-all duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className={`relative ${wireframe.height} w-full`}>
                  {/* Wireframe design elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[70%] border border-white/10 rounded flex flex-col items-center justify-center">
                      <div className="w-[90%] h-2 bg-white/10 rounded mb-2"></div>
                      <div className="w-[70%] h-2 bg-white/10 rounded mb-4"></div>
                      <div className="w-[80%] h-[60%] grid grid-cols-2 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-white/5 rounded border border-white/10 flex items-center justify-center">
                            <div className="w-[70%] h-[70%] border border-white/20 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black p-6 flex flex-col justify-end opacity-100 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-display font-medium mb-1 group-hover:disambi-gradient-text">
                      {wireframe.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{wireframe.description}</p>
                    <div className="flex items-center text-disambi-orange/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wireframes;
