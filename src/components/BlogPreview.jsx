import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const translations = {
  bs: {
    title: 'IZA KULISA',
    subtitle: 'Zavirite u našu kuhinju',
    description: 'Otkrijte kako nastaju naši burgeri - od vlastite proizvodnje mesa do finalne pripreme',
    exploreButton: 'Istraži blog',
  },
  en: {
    title: 'BEHIND THE SCENES',
    subtitle: 'Peek into our kitchen',
    description: 'Discover how our burgers are made - from own meat production to final preparation',
    exploreButton: 'Explore blog',
  }
};

const BlogPreview = ({ language }) => {
  const t = translations[language];
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-burger-black via-burger-dark/50 to-burger-black" />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burger-red/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Fire Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-burger-orange to-burger-red rounded-full flex items-center justify-center"
          >
            <Flame size={40} className="text-burger-yellow" />
          </motion.div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-burger-yellow via-burger-orange to-burger-red mb-6 uppercase">
            {t.title}
          </h2>
          
          <p className="text-2xl sm:text-3xl font-bold text-burger-yellow mb-4">
            {t.subtitle}
          </p>

          <p className="text-lg text-burger-gray max-w-2xl mx-auto mb-12">
            {t.description}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-burger-red rounded-full" />
            <div className="w-3 h-3 bg-burger-red rounded-full animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-burger-red rounded-full" />
          </div>

          {/* Big CTA Button */}
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 69, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-burger-red via-burger-orange to-burger-red text-burger-white rounded-2xl font-black text-xl overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-burger-orange via-burger-red to-burger-orange"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Button Content */}
              <span className="relative flex items-center gap-3">
                {t.exploreButton}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={28} />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-burger-red text-6xl font-black"
          >
            🍔
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-burger-orange text-6xl font-black"
          >
            🔥
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
