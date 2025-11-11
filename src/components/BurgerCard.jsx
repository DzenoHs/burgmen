import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const BurgerCard = ({ burger, index, isReversed }) => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  // Detect low-performance devices
  useEffect(() => {
    const checkPerformance = () => {
      // Check for mobile or low-end devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      setIsLowPerformance(isMobile || isSlowCPU);
    };
    checkPerformance();
  }, []);

  const { ref, inView } = useInView({
    threshold: isLowPerformance ? 0.3 : 0.4,
    triggerOnce: true,
    rootMargin: '-100px', // Trigger only when element is well into viewport
  });

  // Simplified animations for low-performance devices
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: isLowPerformance ? (isReversed ? 80 : -80) : (isReversed ? 120 : -120),
      y: 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: isLowPerformance ? 0.8 : 1,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth deceleration
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: isLowPerformance ? (isReversed ? -80 : 80) : (isReversed ? -120 : 120),
      y: 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: isLowPerformance ? 0.8 : 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      } relative`}
    >
      {/* Debug indicator - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className={`absolute -top-4 left-4 px-3 py-1 rounded text-xs font-mono ${
          inView ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {inView ? '✓ In View' : '✗ Not In View'}
        </div>
      )}

      {/* Image Side */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="relative group overflow-hidden rounded-2xl">
          {/* Glow Border - disabled on low-performance */}
          {!isLowPerformance && (
            <div className="absolute inset-0 bg-gradient-to-br from-burger-red via-burger-orange to-burger-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          )}
          
          {/* Image */}
          <motion.img
            whileHover={!isLowPerformance ? { scale: 1.05 } : {}}
            transition={{ duration: 0.4 }}
            src={burger.image}
            alt={burger.name}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl relative z-10"
            loading="lazy"
            style={{ willChange: isLowPerformance ? 'auto' : 'transform' }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 via-transparent to-transparent z-20 rounded-2xl" />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Burger Name */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.7, 
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-burger-white uppercase tracking-tighter mb-6 leading-none"
        >
          {burger.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-lg sm:text-xl text-burger-gray leading-relaxed italic mb-8"
        >
          {burger.description}
        </motion.p>

        {/* Ingredients List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: 0.5 
          }}
          className="space-y-3"
        >
          {burger.ingredients.map((ingredient, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + i * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex items-center gap-3"
            >
              <Check size={20} className="text-burger-yellow flex-shrink-0" strokeWidth={3} />
              <span className="text-burger-gray font-medium">{ingredient}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        {!isLowPerformance && (
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-gradient-to-r from-burger-red via-burger-orange to-transparent mt-12 rounded-full"
          />
        )}
      </motion.div>
    </div>
  );
};

export default BurgerCard;
