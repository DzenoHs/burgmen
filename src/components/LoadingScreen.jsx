import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Main Content */}
          <div className="flex flex-col items-center">
            
            {/* Logo with Glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="relative mb-12"
            >
              {/* Glow Ring - Smooth Pulse */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-red-600/40 rounded-full blur-2xl"
              />

              {/* Logo Image */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-600/50">
                <img 
                  src="/logoburgmen.jpg" 
                  alt="BURGMEN Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
                BURG<span className="text-red-600">MEN</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-bold mb-6"
            >
              Legendary Burger Experience
            </motion.p>

            {/* Subtitle with Dots Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <p className="text-gray-600 text-xs md:text-sm">
                Priprema najboljeg burgera u gradu
              </p>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-red-600 text-sm"
              >
                ...
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
