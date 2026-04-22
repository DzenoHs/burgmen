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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Side */}
      <div
        className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'} 
          transition-all duration-[1200ms] ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isReversed ? 'translate-x-12' : '-translate-x-12'}`}`}
      >
        <div className="pt-6">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-burger-white uppercase tracking-tighter mb-5 leading-tight text-center lg:text-left">
            {burger.name}
          </h3>

          <div className="relative overflow-hidden rounded-2xl bg-burger-black mx-auto max-w-full">
            <img
              src={burger.image}
              alt={burger.name}
              className="w-full h-[320px] sm:h-[380px] lg:h-[600px] object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 via-transparent to-transparent rounded-2xl" />
          </div>

          <div className="mt-6 space-y-3">
            {burger.ingredients.map((ingredient, i) => (
              <p key={i} className="text-burger-gray font-medium leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                {ingredient}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}
          transition-all duration-[1200ms] ease-out delay-150
          ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isReversed ? '-translate-x-12' : 'translate-x-12'}`}`}
      >
        <div className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none text-center lg:text-left pt-6 lg:pt-0">
          {/* Description */}
          <p className="text-base sm:text-lg text-burger-gray leading-relaxed italic mb-5">
            {burger.description}
          </p>

          {/* Price */}
          {burger.price && (
            <div className="mb-5">
              <span className="text-2xl sm:text-3xl font-bold text-burger-yellow">
                {burger.price}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
