import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Excellence Since 2012
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At LocknKey, we transform visions into lasting structures. With over a decade of experience 
              in the construction industry, we've built our reputation on delivering exceptional quality, 
              innovative solutions, and unmatched customer service.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From residential homes to commercial complexes, our team of skilled professionals brings 
              expertise, dedication, and attention to detail to every project we undertake.
            </p>
            <Button asChild size="lg" className="text-lg px-6 py-3">
              <Link to="/about-us" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">80+</div>
              <div className="text-sm text-muted-foreground">Skilled Workers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;