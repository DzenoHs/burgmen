import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BurgerShowcase from './components/BurgerShowcase';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [language, setLanguage] = useState('bs'); // 'bs' or 'en'

  return (
    <div className="relative min-h-screen text-burger-white overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* Main Content */}
      <main>
        <Hero language={language} />
        <BurgerShowcase language={language} />
        <AboutSection language={language} />
        <Gallery language={language} />
        <ContactSection language={language} />
      </main>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
