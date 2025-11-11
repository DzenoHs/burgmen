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
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={burger.image}
            alt={burger.name}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 via-transparent to-transparent rounded-2xl" />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut"
        }}
        className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Burger Name */}
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-burger-white uppercase tracking-tighter mb-6 leading-none">
          {burger.name}
        </h3>

        {/* Description */}
        <p className="text-lg sm:text-xl text-burger-gray leading-relaxed italic mb-8">
          {burger.description}
        </p>

        {/* Ingredients List */}
        <div className="space-y-3">
          {burger.ingredients.map((ingredient, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check size={20} className="text-burger-yellow flex-shrink-0" strokeWidth={3} />
              <span className="text-burger-gray font-medium">{ingredient}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerCard;
