import Layout from '@/components/Layout';
import { IntroSection } from '@/components/packages/IntroSection';
import { ComparisonTable } from '@/components/packages/ComparisonTable';
import { PackageCards } from '@/components/packages/PackageCards';
import { AddOnServices } from '@/components/packages/AddOnServices';
import { WhyChooseUsPackages } from '@/components/packages/WhyChooseUsPackages';
import { CTASection } from '@/components/packages/CTASection';

const ConstructionPackages = () => {
  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Construction Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing, quality materials, and professional execution. 
              Choose the package that fits your vision and budget.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <IntroSection />

        {/* Package Comparison Table */}
        <ComparisonTable />

        {/* Package Cards */}
        <PackageCards />

        {/* Add-on Services */}
        <AddOnServices />

        {/* Why Choose Us */}
        <WhyChooseUsPackages />

        {/* Call to Action */}
        <CTASection />
      </div>
    </Layout>
  );
};

export default ConstructionPackages;
