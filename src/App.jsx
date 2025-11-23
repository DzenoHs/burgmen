import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import CookieConsent from './components/CookieConsent';
import LiveChat from './components/LiveChat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [language, setLanguage] = useState('bs'); // 'bs' or 'en'

  return (
    <Router>
      {/* Loading Screen */}
      <LoadingScreen />
      
      <div className="relative min-h-screen text-burger-white overflow-x-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Navbar */}
        <Navbar language={language} setLanguage={setLanguage} />
        
        {/* Main Content with Routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/blog" element={<BlogPage language={language} />} />
            <Route path="/blog/:id" element={<BlogPostPage language={language} />} />
            <Route path="/contact" element={<ContactPage language={language} />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer language={language} />
        
        {/* Live Chat Widget */}
        <LiveChat language={language} />
        
        {/* Cookie Consent */}
        <CookieConsent language={language} />
      </div>
    </Router>
  );
}

export default App;
