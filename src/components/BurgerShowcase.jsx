import { useInView } from 'react-intersection-observer';
import BurgerCard from './BurgerCard';
import { translations } from '../translations';

const BurgerShowcase = ({ language }) => {
  const t = translations[language].burgers;
  
  const burgers = [
    {
      id: 1,
      name: t.classic.name,
      description: t.classic.desc,
      ingredients: t.classic.ingredients,
      price: "8 KM / 13 KM",
      image: "/burgerimeni/classic%20burger.png",
    },
    {
      id: 2,
      name: t.inferno.name,
      description: t.inferno.desc,
      ingredients: t.inferno.ingredients,
      price: "9 KM / 14 KM",
      image: "/burgerimeni/jalapenoburger.png",
    },
    {
      id: 3,
      name: t.bbq.name,
      description: t.bbq.desc,
      ingredients: t.bbq.ingredients,
      price: "10 KM / 15 KM",
      image: "/burgerimeni/burgmen%20burger.png",
    },
    {
      id: 4,
      name: t.truffle.name,
      description: t.truffle.desc,
      ingredients: t.truffle.ingredients,
      price: "14 KM / 19 KM",
      image: "/burgerimeni/premium%20burgmen.png",
    },
    {
      id: 5,
      name: t.mushroom.name,
      description: t.mushroom.desc,
      ingredients: t.mushroom.ingredients,
      price: "9 KM / 14 KM",
      image: "/burgerimeni/max%20burger.png",
    },
    {
      id: 6,
      name: t.blue.name,
      description: t.blue.desc,
      ingredients: t.blue.ingredients,
      price: "14 KM / 19 KM",
      image: "/burgerimeni/double%20burgmen.png",
    },
    {
      id: 7,
      name: t.california.name,
      description: t.california.desc,
      ingredients: t.california.ingredients,
      price: "8 KM / 13 KM",
      image: "/burgerimeni/chicken%20burgher.png",
    },
    {
      id: 8,
      name: t.texan.name,
      description: t.texan.desc,
      ingredients: t.texan.ingredients,
      price: "12 KM / 17 KM",
      image: "/burgerimeni/philly%20cheesesteak.png",
    },
    {
      id: 9,
      name: t.supreme.name,
      description: t.supreme.desc,
      ingredients: t.supreme.ingredients,
      price: "7 KM / 12 KM",
      image: "/burgerimeni/pilecisendvic.png",
    },
    {
      id: 10,
      name: t.spicy.name,
      description: t.spicy.desc,
      ingredients: t.spicy.ingredients,
      price: "6 KM / 11 KM",
      image: "/burgerimeni/kids%20burger.png",
    },
    {
      id: 11,
      name: t.cheese.name,
      description: t.cheese.desc,
      ingredients: t.cheese.ingredients,
      price: "5 KM",
      image: "/burgerimeni/tost%20nutela.png",
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="burgers" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-32">
          <h2 
            className={`text-6xl sm:text-7xl md:text-8xl font-black text-burger-yellow uppercase tracking-tighter mb-6 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {t.title}
          </h2>
          <div 
            className={`h-1.5 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow mx-auto rounded-full transition-all duration-1000 delay-300 ${
              titleInView ? 'w-64 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Burger Cards - Alternating Layout */}
        <div className="space-y-24 lg:space-y-48">
          {burgers.map((burger, index) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerShowcase;