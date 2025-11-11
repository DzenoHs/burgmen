import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BurgerShowcase from './components/BurgerShowcase';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen text-burger-white overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <BurgerShowcase />
        <AboutSection />
        <Gallery />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
