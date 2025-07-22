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
              <Link to="/projects" className="flex items-center space-x-2">
                <span>View Our Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/services" className="flex items-center space-x-2">
                <span>Our Services</span>
              </Link>
            </Button>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center text-white/90">
              <Award className="h-10 w-10 text-construction-orange mb-3" />
              <div className="text-lg font-semibold">Integrity</div>
              <div className="text-sm opacity-80">Honest & Transparent</div>
            </div>
            
            <div className="flex flex-col items-center text-center text-white/90">
              <Users className="h-10 w-10 text-construction-orange mb-3" />
              <div className="text-lg font-semibold">Quality Craftsmanship</div>
              <div className="text-sm opacity-80">Excellence in Every Detail</div>
            </div>
            
            <div className="flex flex-col items-center text-center text-white/90">
              <Calendar className="h-10 w-10 text-construction-orange mb-3" />
              <div className="text-lg font-semibold">Timely Delivery</div>
              <div className="text-sm opacity-80">On Schedule, Every Time</div>
            </div>

            <div className="flex flex-col items-center text-center text-white/90">
              <ArrowRight className="h-10 w-10 text-construction-orange mb-3" />
              <div className="text-lg font-semibold">Client-Centered</div>
              <div className="text-sm opacity-80">Your Vision, Our Priority</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;