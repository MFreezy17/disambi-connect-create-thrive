
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const nairobiImages = [
    "/lovable-uploads/b38c93b7-965c-456b-814c-72c4e1081e22.png",
    "/lovable-uploads/c769bb2f-5ed1-417a-a94a-8db2fe51a603.png"
  ];

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
          
          <div className="relative h-full rounded-md overflow-hidden">
            <div className="h-full w-full bg-disambi-gradient opacity-20 absolute"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10">
              <div className="text-center space-y-4">
                <p className="text-2xl md:text-3xl font-display text-white">Starting in Nairobi</p>
                <p className="text-xl text-white/90">Built to scale globally</p>
              </div>
              
              <div className="w-full max-w-md px-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {nairobiImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <Card className="border-0 bg-transparent">
                          <CardContent className="p-1">
                            <div className="overflow-hidden rounded-lg">
                              <img 
                                src={image} 
                                alt={`Nairobi image ${index + 1}`} 
                                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative static translate-y-0 mr-2" />
                    <CarouselNext className="relative static translate-y-0 ml-2" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
