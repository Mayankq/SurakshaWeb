import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

import "../css/styles.css"

function Home() {
  const [navToggleChecked, setNavToggleChecked] = useState(false);

  const handleNavToggleChange = () => {
    setNavToggleChecked(!navToggleChecked);
  };

  return (
    <div className="App">
      <Navbar onNavToggleChange={handleNavToggleChange} checked={navToggleChecked} />
      <HeroSection />
      <FeaturesSection />
      {/* <AboutUsSection /> */}
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
