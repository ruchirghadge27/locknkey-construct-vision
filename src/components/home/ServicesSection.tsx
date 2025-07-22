import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Building, Palette, RefreshCw, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential projects built to your specifications.",
      features: ["Custom Home Design", "Renovations", "Extensions"]
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Professional commercial construction for offices, retail, and industrial spaces.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses"]
    },
    {
      icon: Palette,
      title: "Interior Fit-Out",
      description: "Complete interior solutions from design to execution for modern living spaces.",
      features: ["Interior Design", "Space Planning", "Custom Furniture"]
    },
    {
      icon: RefreshCw,
      title: "Renovation Services",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Complete Overhauls"]
    }
  ];

  return (
    <section className="py-16 bg-construction-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive construction services 
            tailored to meet your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-6 shadow-card-custom hover:shadow-construction transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link to="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;