import { motion } from 'framer-motion';
import BurgerCard from './BurgerCard';

const FeaturedBurgers = () => {
  const featuredBurgers = [
    {
      id: 1,
      name: 'The Inferno',
      description: 'Our spiciest creation with jalapeños, ghost pepper sauce, and pepper jack cheese.',
      price: 14.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
      ingredients: ['Spicy', 'Double Patty', 'Premium'],
    },
    {
      id: 2,
      name: 'Classic Beast',
      description: 'Double beef patty, cheddar, lettuce, tomato, onion, and our signature sauce.',
      price: 12.99,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
      ingredients: ['Double Patty', 'Signature Sauce', 'Classic'],
    },
    {
      id: 3,
      name: 'BBQ Bacon Supreme',
      description: 'Smoky BBQ sauce, crispy bacon, caramelized onions, and smoked gouda.',
      price: 15.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop',
      ingredients: ['Bacon', 'BBQ', 'Smoked'],
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-burger-dark/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-burger-white mb-4 uppercase tracking-tighter"
          >
            Featured <span className="text-burger-red">Burgers</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow mx-auto rounded-full"
          />
        </motion.div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBurgers.map((burger, index) => (
            <BurgerCard key={burger.id} burger={burger} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBurgers;
