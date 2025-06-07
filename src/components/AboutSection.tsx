
import React from 'react';
import { Heart, Leaf, Sparkles, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
                About <span className="text-gradient-purple">MUPAN</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MUPAN represents more than just wellness—it's a heartfelt tribute to family, 
                combining the initials of cherished sons into a meaningful mission of healing 
                and transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach embraces the interconnectedness of mind, body, and spirit, 
                offering personalized wellness journeys that honor your unique path to health 
                and happiness.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-light rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Compassion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Natural Healing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-light rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden">
              {/* Leopard pattern background */}
              <div className="absolute inset-0 leopard-pattern opacity-5"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-dark to-purple-medium rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To guide individuals on their personal wellness journey, fostering healing, 
                    growth, and the discovery of inner peace through holistic practices.
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">M</div>
                      <div className="text-xs text-muted-foreground">Mindfulness</div>
                    </div>
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">U</div>
                      <div className="text-xs text-muted-foreground">Unity</div>
                    </div>
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">P</div>
                      <div className="text-xs text-muted-foreground">Peace</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center mt-4">
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">A</div>
                      <div className="text-xs text-muted-foreground">Awareness</div>
                    </div>
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">N</div>
                      <div className="text-xs text-muted-foreground">Nurture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-light to-purple-medium rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-leopard-primary to-leopard-accent rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
