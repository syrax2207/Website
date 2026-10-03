import React from 'react';
import { Navbar, Footer } from './components/layout';
import { Hero, Highlights, About, Showcase, VisitUs } from './components/sections';
import { MenuSection } from './components/menu';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso flex flex-col font-sans selection:bg-oat selection:text-espresso">
      {/* 1. Responsive Navigation */}
      <Navbar />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Highlights Section */}
        <Highlights />

        {/* About / Story Section */}
        <About />

        {/* Interactive Menu Section */}
        <MenuSection />

        {/* Café Showcase Gallery Section */}
        <Showcase />

        {/* Visit Us & Hours Section */}
        <VisitUs />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default App;
