
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Personal Assistant",
      description: "Daily task management, scheduling, and administrative support",
      icon: "📋"
    },
    {
      title: "Event Planning",
      description: "From intimate dinners to corporate events, we handle every detail",
      icon: "🎉"
    },
    {
      title: "Travel Coordination",
      description: "Flight bookings, accommodation, itineraries, and local arrangements",
      icon: "✈️"
    },
    {
      title: "Property Services",
      description: "Maintenance, cleaning, gardening, and home management",
      icon: "🏠"
    },
    {
      title: "Shopping & Errands",
      description: "Grocery shopping, gift sourcing, pickups, and deliveries",
      icon: "🛍️"
    },
    {
      title: "Lifestyle Management",
      description: "Pet care, elderly assistance, and specialized personal services",
      icon: "💼"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, Tech Startup",
      content: "Perth White Glove has transformed how I manage my work-life balance. Nothing is too difficult for them!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Investment Manager",
      content: "Exceptional service quality. They've handled everything from last-minute dinner reservations to organizing my entire home office move.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Marketing Director",
      content: "Professional, reliable, and incredibly thorough. I trust them with my most important tasks.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
            <span className="text-2xl font-bold text-gray-900">Perth White Glove</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-white hover:from-green-500 hover:to-cyan-500 transition-all duration-300">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            🏆 Perth's Premier Concierge Service
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We Do <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Anything</span><br />
            You Need Done
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From the impossible to the everyday, Perth White Glove delivers enterprise-grade concierge services 
            with unmatched attention to detail. Your time is precious—let us handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-400 to-cyan-400 text-white hover:from-green-500 hover:to-cyan-500 transition-all duration-300 text-lg px-8 py-3">
              Book Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-3">
              View Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Same-Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Concierge Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No task too big or small. Our expert team handles everything with precision and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Perth's Elite
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of satisfied clients who trust us with their most important tasks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-green-400 to-cyan-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the White Glove Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us handle your to-do list while you focus on what matters most.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
            Start Your Service Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Available 24/7 to assist with your concierge needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+61 8 9000 0000</p>
              <p className="text-sm text-gray-500">24/7 Emergency Line</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@perthwhiteglove.com.au</p>
              <p className="text-sm text-gray-500">Response within 1 hour</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Perth CBD, WA</p>
              <p className="text-sm text-gray-500">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Perth White Glove</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600">© 2024 Perth White Glove Concierge Services</p>
              <p className="text-sm text-gray-500 mt-1">Licensed & Insured • ABN: 12 345 678 901</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
