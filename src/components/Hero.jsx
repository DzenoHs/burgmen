import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const translations = {
  bs: {
    titles: ['LEGENDARNI BURGERI', 'AUTENTIČNI UKUS', 'SAVRŠENA KOMBINACIJA', 'NEZABORAVAN DOŽIVLJAJ'],
    subtitle: 'Ručno pravljeno savršenstvo od 2025',
  },
  en: {
    titles: ['LEGENDARY BURGERS', 'AUTHENTIC TASTE', 'PERFECT COMBINATION', 'UNFORGETTABLE EXPERIENCE'],
    subtitle: 'Handcrafted perfection since 2025',
  }
};

const Hero = ({ language }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const t = translations[language];
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  // Typewriter effect
  React.useEffect(() => {
    const currentTitle = t.titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % t.titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, t.titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/heroslika.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Typewriter Animated Title */}
        <div className="mb-12 overflow-hidden min-h-[200px] flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-burger-red"
            >
              |
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl text-burger-gray font-light italic mb-20 tracking-wide"
        >
          {t.subtitle}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
