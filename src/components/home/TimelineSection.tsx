import { MessageCircle, MapPin, PenTool, Hammer, Handshake } from 'lucide-react';

const TimelineSection = () => {
  const timelineSteps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Free initial consultation to understand your vision and requirements",
      step: "01"
    },
    {
      icon: MapPin,
      title: "Site Visit",
      description: "Detailed site analysis and feasibility assessment by our experts",
      step: "02"
    },
    {
      icon: PenTool,
      title: "Planning & Design",
      description: "Custom architectural plans and 3D designs tailored to your needs",
      step: "03"
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Professional construction with regular updates and quality checks",
      step: "04"
    },
    {
      icon: Handshake,
      title: "Handover",
      description: "Final inspection, documentation, and keys handover to you",
      step: "05"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach that ensures transparency, quality, and timely delivery at every step.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-primary transform -translate-y-1/2 w-0 animate-pulse" style={{width: '100%'}}></div>
            
            <div className="flex justify-between items-center relative z-10">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center max-w-xs">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-construction">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;