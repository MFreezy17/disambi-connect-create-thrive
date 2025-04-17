
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Wireframes from '@/components/Wireframes';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-disambi-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Wireframes />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
