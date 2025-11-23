import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Flame, Users, Award } from 'lucide-react';
import ParallaxBurger from './ParallaxBurger';

const translations = {
  bs: {
    title: 'NAŠA PRIČA',
    subtitle: 'Passion for Perfect Burgers',
    description: 'Od 2025. godine, BURGMEN donosi revoluciju u svijet burgera. Svaki burger je djelo umjetnosti, ručno pravljen sa strašću i pažnjom prema svakom detalju. Koristimo samo najkvalitetnije sastojke - 100% svježe juneće meso, domaće pecivo i sezonsko povrće od lokalnih proizvođača.',
    stats: {
      since: 'Od',
      fresh: 'Svježi sastojci',
      taste: 'Legendarni ukus'
    }
  },
  en: {
    title: 'OUR STORY',
    subtitle: 'Passion for Perfect Burgers',
    description: 'Since 2025, BURGMEN has been revolutionizing the burger world. Each burger is a work of art, handcrafted with passion and attention to every detail. We use only the finest ingredients - 100% fresh beef, homemade buns and seasonal vegetables from local suppliers.',
    stats: {
      since: 'Since',
      fresh: 'Fresh ingredients',
      taste: 'Legendary taste'
    }
  }
};

const CounterAnimation = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-black text-burger-yellow">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = ({ language }) => {
  const t = translations[language];
  
  const stats = [
    { icon: Flame, value: 2025, suffix: '', label: t.stats.since },
    { icon: Award, value: 100, suffix: '%', label: t.stats.fresh },
    { icon: Users, value: 100, suffix: '%', label: t.stats.taste },
  ];

  return (
    <>
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-burger-dark/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-burger-yellow mb-4 uppercase tracking-tighter">
              {t.title}
            </h2>
            <div className="h-1.5 w-64 bg-gradient-to-r from-burger-orange via-burger-red to-burger-yellow mx-auto rounded-full" />
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-burger-red mb-4">{t.subtitle}</h3>
              <p className="text-lg text-burger-gray leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-burger-red/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop"
                  alt="Burger preparation"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parallax Burger after About section */}
      <ParallaxBurger 
        imageSrc="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=800&fit=crop" 
        index={0} 
        language={language} 
      />
    </>
  );
};

export default AboutSection;
