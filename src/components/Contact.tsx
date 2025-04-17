
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd send this data to a backend
    
    if (!email || !name || !userType) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Success toast
    toast.success('Thanks for your interest! We\'ll be in touch soon.');
    
    // Reset form
    setEmail('');
    setName('');
    setUserType('');
  };

  return (
    <section id="contact" className="section-padding bg-disambi-black border-t border-disambi-orange/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="disambi-gradient-text">Join Our Network</span>
            </h2>
            
            <p className="text-white/80 text-lg">
              Whether you're a creator looking to showcase your work or a brand seeking 
              authentic partnerships, we'd love to connect with you.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="bg-disambi-gradient w-12 h-12 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <span className="text-white">hello@disambi.com</span>
            </div>
            
            <div className="pt-4">
              <p className="text-white/60 text-sm">
                Based in Nairobi, working globally.
              </p>
            </div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-black/70 border border-white/20 rounded-md px-4 py-3 text-white focus:border-disambi-orange/50 focus:outline-none"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-black/70 border border-white/20 rounded-md px-4 py-3 text-white focus:border-disambi-orange/50 focus:outline-none"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">I am a...</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={`border rounded-md px-4 py-3 transition-colors ${
                      userType === 'creator' 
                        ? 'bg-disambi-gradient border-transparent text-white' 
                        : 'border-white/20 text-white hover:bg-white/5'
                    }`}
                    onClick={() => setUserType('creator')}
                  >
                    Creator
                  </button>
                  <button
                    type="button"
                    className={`border rounded-md px-4 py-3 transition-colors ${
                      userType === 'brand' 
                        ? 'bg-disambi-gradient border-transparent text-white' 
                        : 'border-white/20 text-white hover:bg-white/5'
                    }`}
                    onClick={() => setUserType('brand')}
                  >
                    Brand/Business
                  </button>
                </div>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
