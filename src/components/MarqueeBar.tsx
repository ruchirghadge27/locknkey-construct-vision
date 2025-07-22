import { Phone } from 'lucide-react';

const MarqueeBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span className="inline-flex items-center space-x-8 text-sm font-medium">
          <span className="flex items-center space-x-2">
            <span>📢</span>
            <span>Now booking for 2025 residential projects</span>
          </span>
          <span className="mx-8">•</span>
          <span className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Call for a FREE consultation</span>
          </span>
          <span className="mx-8">•</span>
          <span>12+ Years of Excellence in Construction</span>
          <span className="mx-8">•</span>
          <span>300+ Projects Completed Successfully</span>
          <span className="mx-8">•</span>
          <span className="flex items-center space-x-2">
            <span>📢</span>
            <span>Now booking for 2025 residential projects</span>
          </span>
          <span className="mx-8">•</span>
          <span className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Call for a FREE consultation</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default MarqueeBar;