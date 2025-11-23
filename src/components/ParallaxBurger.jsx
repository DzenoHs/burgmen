import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBurger = ({ imageSrc, index, language }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transformations
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Flame Effect Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-burger-orange/20 via-burger-red/10 to-transparent animate-pulse" />
        {/* Animated flames */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/4 w-32 h-32 bg-burger-orange/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-burger-red/30 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Smoke Effect */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [-20, -100],
            opacity: [0.1, 0.3, 0],
            scale: [0.8, 1.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute bottom-10 left-1/3 w-64 h-64 bg-burger-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, -120],
            opacity: [0.1, 0.2, 0],
            scale: [0.8, 1.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1
          }}
          className="absolute bottom-10 right-1/3 w-72 h-72 bg-burger-white/5 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Burger Image with Parallax */}
      <motion.div
        style={{ y, rotate, scale, opacity }}
        className="relative z-10 group"
      >
        <motion.div
          whileHover={{
            rotate: [0, -5, 5, -5, 0],
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative"
        >
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${
                index % 3 === 0 ? '#FF0050' : index % 3 === 1 ? '#FF6B35' : '#FFD700'
              }40, transparent 70%)`
            }}
          />
          
          {/* Burger Image */}
          <img
            src={imageSrc}
            alt="Burger"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          />

          {/* Rotating decorative circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-4 h-4 bg-burger-red rounded-full blur-sm" />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-burger-orange rounded-full blur-sm" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 right-0 w-3 h-3 bg-burger-yellow rounded-full blur-sm" />
            <div className="absolute bottom-1/4 left-0 w-5 h-5 bg-burger-red rounded-full blur-sm" />
          </motion.div>
        </motion.div>

        {/* Steam Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -40],
              opacity: [0.5, 0],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="w-16 h-16 bg-burger-white/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -50],
              opacity: [0.4, 0],
              scale: [0.6, 1.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
            className="w-12 h-12 bg-burger-white/20 rounded-full blur-xl absolute top-0 left-1/2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxBurger;
