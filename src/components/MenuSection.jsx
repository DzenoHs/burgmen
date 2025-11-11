import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BurgerCard from './BurgerCard';

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Classic', 'Spicy', 'Vegan', 'Premium'];

  const allBurgers = [
    {
      id: 1,
      name: 'The Inferno',
      description: 'Our spiciest creation with jalapeños, ghost pepper sauce, and pepper jack cheese.',
      price: 14.99,
      rating: 4.9,
      category: 'Spicy',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
      ingredients: ['Spicy', 'Double Patty', 'Premium'],
    },
    {
      id: 2,
      name: 'Classic Beast',
      description: 'Double beef patty, cheddar, lettuce, tomato, onion, and our signature sauce.',
      price: 12.99,
      rating: 5.0,
      category: 'Classic',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
      ingredients: ['Double Patty', 'Signature Sauce', 'Classic'],
    },
    {
      id: 3,
      name: 'BBQ Bacon Supreme',
      description: 'Smoky BBQ sauce, crispy bacon, caramelized onions, and smoked gouda.',
      price: 15.99,
      rating: 4.8,
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop',
      ingredients: ['Bacon', 'BBQ', 'Smoked'],
    },
    {
      id: 4,
      name: 'Mushroom Swiss',
      description: 'Sautéed mushrooms, swiss cheese, truffle mayo on a brioche bun.',
      price: 13.99,
      rating: 4.7,
      category: 'Classic',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop',
      ingredients: ['Mushrooms', 'Swiss', 'Truffle'],
    },
    {
      id: 5,
      name: 'Vegan Delight',
      description: 'Plant-based patty, vegan cheese, avocado, and fresh veggies.',
      price: 11.99,
      rating: 4.6,
      category: 'Vegan',
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=600&fit=crop',
      ingredients: ['Vegan', 'Plant-Based', 'Avocado'],
    },
    {
      id: 6,
      name: 'Hot Chili Burger',
      description: 'Beef patty topped with homemade chili, cheese, and jalapeños.',
      price: 14.49,
      rating: 4.9,
      category: 'Spicy',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop',
      ingredients: ['Chili', 'Spicy', 'Jalapeños'],
    },
    {
      id: 7,
      name: 'Truffle Deluxe',
      description: 'Wagyu beef, truffle aioli, arugula, parmesan on a black bun.',
      price: 18.99,
      rating: 5.0,
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop',
      ingredients: ['Wagyu', 'Truffle', 'Premium'],
    },
    {
      id: 8,
      name: 'Green Machine',
      description: 'Spinach & chickpea patty, hummus, cucumber, and tahini sauce.',
      price: 10.99,
      rating: 4.5,
      category: 'Vegan',
      image: 'https://images.unsplash.com/photo-1585238341710-4a2db91c4b2e?w=800&h=600&fit=crop',
      ingredients: ['Vegan', 'Healthy', 'Plant-Based'],
    },
    {
      id: 9,
      name: 'Texas BBQ',
      description: 'Slow-cooked pulled beef, BBQ sauce, coleslaw, crispy onions.',
      price: 13.49,
      rating: 4.8,
      category: 'Classic',
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop',
      ingredients: ['BBQ', 'Pulled Beef', 'Coleslaw'],
    },
  ];

  const filteredBurgers =
    activeFilter === 'All'
      ? allBurgers
      : allBurgers.filter((burger) => burger.category === activeFilter);

  return (
    <section id="menu" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            Our <span className="text-burger-yellow">Burgers</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '250px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-burger-yellow via-burger-orange to-burger-red mx-auto rounded-full"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-black uppercase rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-burger-red to-burger-orange text-burger-white shadow-lg shadow-burger-red/50'
                  : 'bg-burger-charcoal text-burger-gray border border-burger-dark hover:border-burger-red hover:text-burger-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Burgers Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBurgers.map((burger, index) => (
              <BurgerCard key={burger.id} burger={burger} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
