import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const titleWords = "LEGENDARNI BURGERI".split(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Massive Animated Title */}
        <div className="mb-12 overflow-hidden">
          <motion.h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black leading-none tracking-tighter">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="inline-block mr-6 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto', perspective: '1000px' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl text-burger-gray font-light italic mb-20 tracking-wide"
        >
          Ručno pravljeno savršenstvo od 2025
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-burger-yellow cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#burgers');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm uppercase tracking-widest mb-3 font-bold">Skroluj za više</span>
            <ChevronDown size={40} strokeWidth={3} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
