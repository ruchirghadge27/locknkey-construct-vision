import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your Vision,
            <br />
            <span className="text-construction-orange">Our Foundation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Building dreams into reality with 12+ years of excellence. 
            From residential homes to commercial complexes, we deliver quality that lasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact-us" className="flex items-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/projects" className="flex items-center space-x-2">
                <span>View Projects</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Award className="h-8 w-8 text-construction-orange" />
              <div>
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Users className="h-8 w-8 text-construction-orange" />
              <div>
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Calendar className="h-8 w-8 text-construction-orange" />
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;