import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const BurgerCard = ({ burger, index, isReversed }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative group overflow-hidden rounded-2xl">
          {/* Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-burger-red via-burger-orange to-burger-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={burger.image}
            alt={burger.name}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl relative z-10"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 via-transparent to-transparent z-20 rounded-2xl" />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Burger Name */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-burger-white uppercase tracking-tighter mb-6 leading-none"
        >
          {burger.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-burger-gray leading-relaxed italic mb-8"
        >
          {burger.description}
        </motion.p>

        {/* Ingredients List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-y-3"
        >
          {burger.ingredients.map((ingredient, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <Check size={20} className="text-burger-yellow flex-shrink-0" strokeWidth={3} />
              <span className="text-burger-gray font-medium">{ingredient}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="h-1 bg-gradient-to-r from-burger-red via-burger-orange to-transparent mt-12 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default BurgerCard;
