import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const BurgerCard = ({ burger, index, isReversed }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Side */}
      <div
        className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'} 
          transition-all duration-[1200ms] ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isReversed ? 'translate-x-12' : '-translate-x-12'}`}`}
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
      </div>

      {/* Content Side */}
      <div
        className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}
          transition-all duration-[1200ms] ease-out delay-150
          ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isReversed ? '-translate-x-12' : 'translate-x-12'}`}`}
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
      </div>
    </div>
  );
};

export default BurgerCard;
