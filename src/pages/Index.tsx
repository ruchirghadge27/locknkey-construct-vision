import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import TimelineSection from '@/components/home/TimelineSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <TimelineSection />
    </Layout>
  );
};

export default Index;
