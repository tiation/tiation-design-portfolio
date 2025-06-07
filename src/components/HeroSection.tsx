
import React from 'react';
import { ArrowRight, Heart, Leaf, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 leopard-pattern-subtle opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
                Welcome to{' '}
                <span className="text-gradient-purple">MUPAN</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your journey to wellness and mindfulness begins here. Discover inner peace, 
                cultivate healthy habits, and embrace a life of balance and vitality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-accent">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Wellness Programs</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 space-y-6">
              {/* Floating Cards */}
              <div className="bg-card rounded-2xl p-6 shadow-lg animate-float border border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-light rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mindfulness</h3>
                    <p className="text-sm text-muted-foreground">Find inner peace</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg animate-float ml-8 border border-border" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Natural Healing</h3>
                    <p className="text-sm text-muted-foreground">Holistic approach</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg animate-float border border-border" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-light rounded-full flex items-center justify-center">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Vitality</h3>
                    <p className="text-sm text-muted-foreground">Energize your life</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-light to-purple-medium rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-leopard-primary to-leopard-accent rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
