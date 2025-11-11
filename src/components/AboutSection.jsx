import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Flame, Users, Award } from 'lucide-react';

const CounterAnimation = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-black text-burger-yellow">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const stats = [
    { icon: Flame, value: 2025, suffix: '', label: 'Od' },
    { icon: Award, value: 100, suffix: '%', label: 'Svježi sastojci' },
    { icon: Users, value: 100, suffix: '%', label: 'Legendarni ukus' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-burger-dark/30">
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
            className="text-5xl sm:text-6xl md:text-7xl font-black text-burger-yellow mb-4 uppercase tracking-tighter"
          >
            Naša Priča
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '250px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-burger-orange via-burger-red to-burger-yellow mx-auto rounded-full"
          />
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-burger-gray leading-relaxed">
              Dobrodošli u <span className="text-burger-red font-bold">BURGMEN</span>, gdje služimo
              najbolje burgere u gradu od 2025. godine. Naša misija je jednostavna: kreirati
              ukusne, ručno pravljene burgere koristeći samo najsvježije sastojke.
            </p>
            <p className="text-lg text-burger-gray leading-relaxed">
              Svaki burger je napravljen po narudžbi sa premium govedinom, svježe pečenim pecivom i našim tajnim
              specijalnim sosovima. Vjerujemo u kvalitet iznad kvantiteta, strast iznad profita, i
              okus koji će vas natjerati da se vratite po još.
            </p>
            <p className="text-lg text-burger-gray leading-relaxed">
              Od klasičnih cheeseburger-a do ludih kreacija koje nećete naći nigdje drugdje, guramo
              granice onoga što burger može biti. Pridružite nam se na ovom ukusnom putovanju.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-burger-orange to-burger-red text-burger-white font-black uppercase rounded-full shadow-lg shadow-burger-orange/50 hover:shadow-burger-orange/80 transition-all duration-300"
            >
              Saznaj više
            </motion.button>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden border-2 border-burger-red/30 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop"
                alt="Burger preparation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 to-transparent" />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 text-6xl animate-float">🔥</div>
            <div className="absolute -bottom-4 -left-4 text-6xl animate-float" style={{ animationDelay: '1s' }}>
              🍔
            </div>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-burger-charcoal border border-burger-dark rounded-2xl p-8 text-center hover:border-burger-red transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <stat.icon size={48} className="text-burger-red group-hover:text-burger-orange transition-colors" />
              </motion.div>
              <div className="mb-2">
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-burger-gray font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
