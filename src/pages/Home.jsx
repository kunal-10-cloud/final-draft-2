import React from 'react';
import Hero from '../components/ui/Hero';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import CategorySection from '../components/ui/CategorySection';
import CtaSection from '../components/ui/CtaSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <CtaSection />
    </div>
  );
};

export default Home; 