import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Simulator from './components/Simulator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedPropertyForContact, setSelectedPropertyForContact] = useState<string>('');

  const handleSelectPropertyForContact = (propertyName: string) => {
    setSelectedPropertyForContact(propertyName);
  };

  const handleClearSelectedProperty = () => {
    setSelectedPropertyForContact('');
  };

  return (
    <div className="relative min-h-screen bg-stone-50 flex flex-col font-sans overflow-x-hidden selection:bg-[#C4A484]/30 selection:text-stone-950">
      {/* 1. Global Navigation Navbar */}
      <Header />

      {/* 2. Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Specialist Section */}
        <About />

        {/* Interactive Properties Catalog Section */}
        <Properties onSelectPropertyForContact={handleSelectPropertyForContact} />

        {/* Dynamic Financial Simulator Section */}
        <Simulator />

        {/* User Reviews and Testimonials */}
        <Testimonials />

        {/* Lead Captain and FAQ Form */}
        <Contact
          selectedProperty={selectedPropertyForContact}
          onClearSelectedProperty={handleClearSelectedProperty}
        />
      </main>

      {/* 3. Global Information Footer */}
      <Footer />
    </div>
  );
}
