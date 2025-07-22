import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import commercialImage from '@/assets/project-commercial.jpg';
import residentialImage from '@/assets/project-residential.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      image: commercialImage,
      description: "A 50,000 sq ft modern office building with sustainable design features.",
      location: "Downtown Business District",
      completedYear: "2024",
      features: ["LEED Certified", "Smart Building Technology", "Green Roof System"]
    },
    {
      id: 2,
      title: "Luxury Family Home",
      category: "residential",
      image: residentialImage,
      description: "Custom 4-bedroom luxury home with modern amenities and landscaping.",
      location: "Riverside Estate",
      completedYear: "2023",
      features: ["Smart Home Integration", "Solar Panels", "Custom Kitchen"]
    },
    {
      id: 3,
      title: "Retail Shopping Center",
      category: "commercial",
      image: commercialImage,
      description: "Multi-tenant retail complex with modern facade and parking facilities.",
      location: "Suburban Plaza",
      completedYear: "2023",
      features: ["Anchor Stores", "Food Court", "Underground Parking"]
    },
    {
      id: 4,
      title: "Contemporary Villa",
      category: "residential",
      image: residentialImage,
      description: "Stunning contemporary villa with pool and outdoor entertainment area.",
      location: "Hillside View",
      completedYear: "2024",
      features: ["Infinity Pool", "Home Theater", "Wine Cellar"]
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "industrial",
      image: commercialImage,
      description: "Large-scale warehouse facility with loading docks and office space.",
      location: "Industrial Park",
      completedYear: "2022",
      features: ["High Ceilings", "Loading Docks", "Climate Control"]
    },
    {
      id: 6,
      title: "Townhouse Development",
      category: "residential",
      image: residentialImage,
      description: "25-unit townhouse development with community amenities.",
      location: "Greenfield Community",
      completedYear: "2023",
      features: ["Community Pool", "Playground", "Green Spaces"]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'industrial', label: 'Industrial' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Completed Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successfully completed construction projects across residential, 
              commercial, and industrial sectors.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "default" : "outline"}
                  onClick={() => setFilter(category.key)}
                  className="transition-all duration-300"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-construction transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {project.completedYear}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="text-sm text-muted-foreground mb-4">
                      📍 {project.location}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-foreground">Key Features:</div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;