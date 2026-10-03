import React from 'react';
import { Navbar, Footer } from './components/layout';
import {
  Hero,
  Highlights,
  CoffeeExperience,
  BakerySection,
  About,
  Showcase,
  VisitUs,
} from './components/sections';
import { MenuSection } from './components/menu';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso flex flex-col font-sans selection:bg-oat selection:text-espresso">
      {/* 1. Responsive Navigation */}
      <Navbar />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Highlights Section */}
        <Highlights />

        {/* 3. Our Coffee Experience */}
        <CoffeeExperience />

        {/* 4. Our Bakery */}
        <BakerySection />

        {/* 5. Our Story / About Us */}
        <About />

        {/* 6. Explore Our Menu (Interactive with Item Detail Modal & Filters) */}
        <MenuSection />

        {/* 7. Inside Bean & Bite — Interior Showcase with Lightbox */}
        <Showcase />

        {/* 8. Visit Us & Hours */}
        <VisitUs />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default App;
