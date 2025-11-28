import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { PackageSidebar } from './PackageSidebar';

export interface PackageData {
  id: string;
  name: string;
  priceRange: string;
  tagline: string;
  overview: string;
  inclusions: string[];
  upgrades: string[];
  recommended?: boolean;
  detailedSpecs: {
    materials: { label: string; value: string }[];
    scopeOfWork: string[];
    exclusions: string[];
    upgradeOptions: string[];
    timeline: { phase: string; duration: string }[];
    warranty: string[];
  };
}

export const PackageCards = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const packages: PackageData[] = [
    {
      id: 'basic',
      name: 'Basic Construction Package',
      priceRange: '₹1,500 - ₹1,700',
      tagline: 'Perfect for Budget-Conscious Builders',
      overview: 'Ideal for first-time home builders or those looking for functional construction with standard-quality materials. This package covers all essential construction needs with reliable materials and professional workmanship.',
      inclusions: [
        'ISI Standard Cement & Steel',
        'Red Brick Masonry',
        'Ceramic Tile Flooring',
        'Standard Bathroom Fittings',
        'ISI Electrical Wiring & Switches',
        'CPVC Plumbing Pipes',
        'Acrylic Emulsion Paint (Internal & External)',
        'Basic Waterproofing',
        'Aluminum/Flush Doors & Windows',
        'Site Supervision by Engineer',
        'Quality Checks (300+ Points)',
        'Structural & Architectural Drawings'
      ],
      upgrades: [
        'Vitrified Tiles Upgrade',
        'Premium Paint Finish',
        'Designer Switches',
        'Additional Waterproofing Layers'
      ],
      detailedSpecs: {
        materials: [
          { label: 'Cement', value: 'ISI Standard (ACC/UltraTech/Ambuja)' },
          { label: 'Steel', value: 'ISI TMT Bars Fe 500D' },
          { label: 'Bricks', value: 'Red Bricks (First Class)' },
          { label: 'Sand', value: 'River Sand/M-Sand' },
          { label: 'Flooring', value: 'Ceramic Tiles (600x600mm)' },
          { label: 'Bathroom', value: 'Standard Fittings (Parryware/Hindware)' },
          { label: 'Electrical', value: 'ISI Wires + Standard Switches' },
          { label: 'Plumbing', value: 'CPVC Pipes (Ashirvad/Supreme)' },
          { label: 'Paint', value: 'Acrylic Emulsion (Asian/Berger)' },
          { label: 'Waterproofing', value: 'Standard Chemical Treatment' }
        ],
        scopeOfWork: [
          'Foundation: PCC + RCC Footings',
          'Structure: RCC Frame Structure with Standard Design',
          'Masonry: Red Brick Walls (9" & 4.5")',
          'Plastering: Internal & External (12mm & 20mm)',
          'Flooring: Ceramic Tiles with Standard Skirting',
          'Electrical: Complete Wiring with MCB Board',
          'Plumbing: Water Supply & Drainage Lines',
          'Doors & Windows: Flush Doors + Aluminum Windows',
          'Painting: 2 Coats Internal + External',
          'Site Safety: Barricading + Safety Equipment'
        ],
        exclusions: [
          'Interior Design & Furniture',
          'Modular Kitchen & Wardrobes',
          'False Ceiling',
          'Premium Fixtures & Fittings',
          'Landscaping & Compound Wall',
          'Solar Panels',
          'Home Automation',
          'Elevation Cladding/ACP Work'
        ],
        upgradeOptions: [
          'Upgrade to Vitrified Tiles (₹50/sq.ft extra)',
          'Premium Paint Finish (₹15/sq.ft extra)',
          'Designer Electrical Switches (₹5,000 extra)',
          'Teak Wood Door Frames (₹8,000/door extra)',
          'Premium Bathroom Fittings (₹15,000/bathroom extra)'
        ],
        timeline: [
          { phase: 'Design & Approvals', duration: '2-3 weeks' },
          { phase: 'Excavation & Foundation', duration: '3-4 weeks' },
          { phase: 'Structural Work (Up to Slab)', duration: '6-8 weeks' },
          { phase: 'Masonry & Plastering', duration: '4-5 weeks' },
          { phase: 'Electrical & Plumbing', duration: '2-3 weeks' },
          { phase: 'Finishing (Flooring, Painting, Fixtures)', duration: '4-5 weeks' },
          { phase: 'Final Inspection & Handover', duration: '1 week' }
        ],
        warranty: [
          'Structural Warranty: 5 Years',
          'Waterproofing: 3 Years',
          'Electrical & Plumbing: 1 Year',
          'Free Maintenance Support: 6 Months'
        ]
      }
    },
    {
      id: 'standard',
      name: 'Standard Construction Package',
      priceRange: '₹1,700 - ₹2,000',
      tagline: 'Best Value for Money',
      overview: 'Our most popular package offering a perfect balance of quality and affordability. Ideal for modern families seeking durable construction with branded materials and better finishing standards.',
      inclusions: [
        'Premium ISI Cement & High-Grade Steel',
        'AAC/Red Brick Masonry',
        'Vitrified Tile Flooring (800x800mm)',
        'Mid-Range Branded Bathroom Fittings',
        'Branded Electrical Wiring (Finolex)',
        'Premium CPVC/PVC Plumbing',
        'Premium Emulsion Paint',
        'Enhanced Waterproofing',
        'Teak Wood Door Frames',
        'Daily Site Supervision',
        'Quality Checks (400+ Points)',
        'Complete Architectural & Structural Drawings'
      ],
      upgrades: [
        'Premium Vitrified Tiles',
        'Modular Kitchen',
        'False Ceiling',
        'UPVC Windows'
      ],
      recommended: true,
      detailedSpecs: {
        materials: [
          { label: 'Cement', value: 'Premium ISI (UltraTech/ACC Gold)' },
          { label: 'Steel', value: 'High-Grade TMT Fe 550D' },
          { label: 'Blocks', value: 'AAC Blocks/Premium Red Bricks' },
          { label: 'Flooring', value: 'Vitrified Tiles (800x800mm)' },
          { label: 'Bathroom', value: 'Branded Fittings (Jaquar/Cera)' },
          { label: 'Electrical', value: 'Finolex Wires + Premium Switches' },
          { label: 'Plumbing', value: 'Branded CPVC (Astral/Prince)' },
          { label: 'Paint', value: 'Premium Emulsion (Dulux/Asian Royale)' },
          { label: 'Waterproofing', value: 'Premium Chemical Treatment' },
          { label: 'Doors', value: 'Teak Wood Frames + Flush Doors' }
        ],
        scopeOfWork: [
          'Foundation: Enhanced PCC + RCC with Anti-Termite Treatment',
          'Structure: RCC Frame with Professional Structural Design',
          'Masonry: AAC Block Walls (6" & 4")',
          'Plastering: Premium Grade (12mm Internal, 20mm External)',
          'Flooring: Premium Vitrified Tiles + Granite Skirting',
          'Electrical: Complete Wiring with Digital MCB Board',
          'Plumbing: Premium Pipes with Concealed Plumbing',
          'Doors & Windows: Teak Wood Frames + Aluminum Windows',
          'Painting: 3 Coats Premium Finish',
          'Supervision: Daily Site Engineer + Weekly Reports'
        ],
        exclusions: [
          'Modular Kitchen (Available as Upgrade)',
          'Interior Designer Services',
          'False Ceiling Work',
          'Furniture & Appliances',
          'Compound Wall Construction',
          'Landscaping Services',
          'Solar Installation',
          'Advanced Home Automation'
        ],
        upgradeOptions: [
          'Modular Kitchen - 7x4 ft (₹80,000)',
          'Pop False Ceiling (₹100/sq.ft)',
          'UPVC Windows (₹450/sq.ft)',
          'Italian Marble in Master Bedroom (₹150/sq.ft)',
          'Premium Sanitaryware Upgrade (₹25,000)',
          'Smart Home Basic Package (₹40,000)'
        ],
        timeline: [
          { phase: 'Design & Approvals', duration: '2-3 weeks' },
          { phase: 'Excavation & Foundation', duration: '3-4 weeks' },
          { phase: 'Structural Work', duration: '8-10 weeks' },
          { phase: 'Masonry & Plastering', duration: '5-6 weeks' },
          { phase: 'MEP Works', duration: '3-4 weeks' },
          { phase: 'Finishing Works', duration: '5-6 weeks' },
          { phase: 'Final QC & Handover', duration: '1-2 weeks' }
        ],
        warranty: [
          'Structural Warranty: 7 Years',
          'Waterproofing: 5 Years',
          'Electrical & Plumbing: 2 Years',
          'Free Maintenance Support: 1 Year'
        ]
      }
    },
    {
      id: 'premium',
      name: 'Premium Construction Package',
      priceRange: '₹2,000 - ₹2,400',
      tagline: 'Superior Quality & Aesthetics',
      overview: 'For discerning homeowners who want premium materials and superior finishing. This package includes high-quality branded materials, advanced features, and meticulous attention to detail throughout construction.',
      inclusions: [
        'High-Grade Cement & Steel',
        'Premium AAC Block Masonry',
        'Premium Vitrified/Imported Tiles',
        'Premium Branded Bathroom Fittings',
        'Premium Electrical System (Polycab)',
        'High-Grade CPVC Plumbing',
        'Luxury Emulsion Paint',
        'Advanced Waterproofing System',
        'Premium Wood/UPVC Doors & Windows',
        'Dedicated Project Manager',
        'Quality Checks (450+ Points)',
        'Complete Design Drawings + 3D Views'
      ],
      upgrades: [
        'Italian Marble Flooring',
        'Designer Modular Kitchen',
        'Premium False Ceiling',
        'Smart Home Integration'
      ],
      detailedSpecs: {
        materials: [
          { label: 'Cement', value: 'High-Grade (UltraTech Extra/Ambuja Plus)' },
          { label: 'Steel', value: 'Premium TMT Fe 550D (Tata/JSW)' },
          { label: 'Blocks', value: 'Premium AAC Blocks (Ultratech/ACC)' },
          { label: 'Flooring', value: 'Premium Vitrified/Porcelain (800x1200mm)' },
          { label: 'Bathroom', value: 'Premium Brand (Kohler/Grohe)' },
          { label: 'Electrical', value: 'Polycab Wires + Designer Switches' },
          { label: 'Plumbing', value: 'Premium CPVC (Astral Plus/Prince)' },
          { label: 'Paint', value: 'Luxury Finish (Dulux Premium/Asian Royale)' },
          { label: 'Waterproofing', value: 'Advanced System (Dr. Fixit/Fosroc)' },
          { label: 'Doors & Windows', value: 'Premium Wood/UPVC with Hardware' }
        ],
        scopeOfWork: [
          'Foundation: Advanced RCC with Soil Testing',
          'Structure: Engineered RCC Frame (11ft Height)',
          'Masonry: Premium AAC Blocks with Precision',
          'Plastering: Ultra-Smooth Premium Finish',
          'Flooring: Premium Tiles with Designer Patterns',
          'Electrical: Smart-Ready Wiring + Premium Board',
          'Plumbing: Concealed Premium System',
          'Doors & Windows: Premium Teak/UPVC with Quality Hardware',
          'Painting: 3-4 Coats Luxury Finish',
          'Supervision: Full-Time Project Manager + Engineer'
        ],
        exclusions: [
          'High-End Interior Design',
          'Luxury Furniture & Fixtures',
          'Premium Landscaping',
          'Swimming Pool Construction',
          'Advanced Home Theater',
          'Elevator Installation',
          'Designer Elevation Cladding'
        ],
        upgradeOptions: [
          'Italian Marble Flooring (₹200/sq.ft)',
          'Designer Modular Kitchen (₹1.5 Lakh)',
          'Premium False Ceiling with Lighting (₹150/sq.ft)',
          'Smart Home Advanced Package (₹1 Lakh)',
          'Premium Sanitaryware Suite (₹50,000)',
          'Solar Power System 5KW (₹2.5 Lakh)',
          'Designer Compound Wall (₹600/sq.ft)'
        ],
        timeline: [
          { phase: 'Design & Approvals', duration: '3-4 weeks' },
          { phase: 'Site Development', duration: '4-5 weeks' },
          { phase: 'Structural Construction', duration: '10-12 weeks' },
          { phase: 'Masonry & Plastering', duration: '6-7 weeks' },
          { phase: 'MEP & Systems', duration: '4-5 weeks' },
          { phase: 'Premium Finishing', duration: '6-8 weeks' },
          { phase: 'QC & Handover', duration: '2 weeks' }
        ],
        warranty: [
          'Structural Warranty: 10 Years',
          'Waterproofing: 7 Years',
          'Electrical & Plumbing: 3 Years',
          'Free Maintenance Support: 2 Years',
          'Annual Quality Inspection: 3 Years'
        ]
      }
    },
    {
      id: 'luxury',
      name: 'Luxury Construction Package',
      priceRange: '₹2,400+',
      tagline: 'Ultimate Premium Experience',
      overview: 'Our flagship package for luxury homes with no compromise on quality. Features the finest materials, cutting-edge technology, designer finishes, and personalized service. Perfect for creating your dream home with exceptional standards.',
      inclusions: [
        'Ultra High-Grade Cement & Steel',
        'Premium AAC Block System',
        'Italian Marble/Premium Granite Flooring',
        'Luxury Designer Bathroom Fittings',
        'Premium Smart-Ready Electrical System',
        'Advanced Plumbing with Fixtures',
        'Designer Paint & Wall Finishes',
        'Comprehensive Waterproofing System',
        'Designer Wood/Premium UPVC Windows',
        'Full-Time Dedicated Team',
        'Quality Checks (500+ Points)',
        'Complete Design Suite + VR Walkthrough'
      ],
      upgrades: [
        'Full Home Automation',
        'Solar Power System',
        'Premium Landscaping',
        'Elevator Installation'
      ],
      detailedSpecs: {
        materials: [
          { label: 'Cement', value: 'Ultra Premium (Imported/UltraTech Highest Grade)' },
          { label: 'Steel', value: 'Premium TMT Fe 600 (Tata/JSW Premium)' },
          { label: 'Blocks', value: 'German Technology AAC (Ultratech Xtralite)' },
          { label: 'Flooring', value: 'Italian Marble/Granite (1200x1200mm)' },
          { label: 'Bathroom', value: 'Luxury Brands (Hansgrohe/Duravit)' },
          { label: 'Electrical', value: 'Premium + Smart Home Ready System' },
          { label: 'Plumbing', value: 'Premium CPVC + Designer Fixtures' },
          { label: 'Paint', value: 'Designer Finishes (Asian Royale/Dulux Velvet)' },
          { label: 'Waterproofing', value: 'Multi-Layer Premium System' },
          { label: 'Doors & Windows', value: 'Premium Wood/UPVC + Designer Hardware' }
        ],
        scopeOfWork: [
          'Foundation: Advanced Engineering with Geotechnical Study',
          'Structure: Premium RCC Frame (12ft Ceiling Height)',
          'Masonry: Precision German AAC Block System',
          'Plastering: Premium Finish with Anti-Crack Technology',
          'Flooring: Italian Marble with Designer Patterns',
          'Electrical: Complete Smart Home Infrastructure',
          'Plumbing: Premium Concealed System with Designer Fixtures',
          'Doors & Windows: Custom Designed Premium Fittings',
          'Painting: Multi-Coat Designer Finish with Textures',
          'Supervision: Dedicated Project Team + Daily Reports'
        ],
        exclusions: [
          'Ultra-Luxury Interior Design (Available on Request)',
          'Designer Furniture & Art',
          'Swimming Pool & Spa',
          'Home Theater System',
          'Wine Cellar',
          'Outdoor Kitchen Setup'
        ],
        upgradeOptions: [
          'Full Home Automation (₹3-5 Lakh)',
          'Solar Power System 10KW (₹5 Lakh)',
          'Premium Landscaping (₹3 Lakh)',
          'Elevator Installation (₹8-12 Lakh)',
          'Designer Elevation with ACP/Stone Cladding (₹400/sq.ft)',
          'Swimming Pool (₹15 Lakh+)',
          'Home Theater Setup (₹3 Lakh+)'
        ],
        timeline: [
          { phase: 'Design & Engineering', duration: '4-6 weeks' },
          { phase: 'Site Preparation & Foundation', duration: '5-6 weeks' },
          { phase: 'Structural Construction', duration: '12-14 weeks' },
          { phase: 'Premium Masonry & Plastering', duration: '8-10 weeks' },
          { phase: 'Advanced MEP Systems', duration: '6-7 weeks' },
          { phase: 'Luxury Finishing & Fixtures', duration: '8-10 weeks' },
          { phase: 'Quality Checks & Handover', duration: '2-3 weeks' }
        ],
        warranty: [
          'Structural Warranty: 15 Years',
          'Waterproofing: 10 Years',
          'Electrical & Plumbing: 5 Years',
          'Free Maintenance Support: 3 Years',
          'Annual Quality Inspection: 5 Years',
          'Dedicated Support Hotline'
        ]
      }
    }
  ];

  const handleLearnMore = (pkg: PackageData) => {
    setSelectedPackage(pkg);
    setSidebarOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-muted-foreground">
              Each package is carefully crafted to deliver quality construction at different budget levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative ${pkg.recommended ? 'border-primary shadow-lg' : ''}`}>
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.tagline}</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-primary">{pkg.priceRange}</div>
                    <div className="text-sm text-muted-foreground">per sq.ft</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                    <p className="text-sm text-muted-foreground">{pkg.overview}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Inclusions</h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.slice(0, 6).map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.inclusions.length > 6 && (
                      <p className="text-sm text-muted-foreground mt-2 italic">
                        +{pkg.inclusions.length - 6} more inclusions
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Available Upgrades</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.upgrades.map((upgrade, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {upgrade}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleLearnMore(pkg)}
                    className="w-full"
                    variant={pkg.recommended ? "default" : "outline"}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PackageSidebar 
        packageData={selectedPackage}
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />
    </>
  );
};
