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
          exit={{ 
            opacity: 0,
            scale: 1.1,
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black to-orange-950/40 blur-3xl"
            style={{ backgroundSize: '200% 200%' }}
          />

          {/* Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Animated Logo with Glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                opacity: 1,
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 100
              }}
              className="relative mb-12"
            >
              {/* Rotating Glow Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-conic from-red-600 via-orange-500 to-red-600 rounded-full blur-2xl"
              />

              {/* Logo Image with Float */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-600/50">
                  <img 
                    src="/logoburgmen.jpg" 
                    alt="BURGMEN Logo" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Glow Pulse */}
                  <motion.div
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Brand Name with Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 relative"
            >
              {/* Glitch Shadow Layer */}
              <motion.h1
                animate={{ 
                  x: [0, -2, 2, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 0.3, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute text-6xl md:text-7xl font-black tracking-tighter text-red-600 blur-sm"
                style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.8)' }}
              >
                BURGMEN
              </motion.h1>
              
              <h1 className="relative text-6xl md:text-7xl font-black tracking-tighter text-white">
                BURG<span className="text-red-600">MEN</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-sm md:text-base uppercase tracking-widest mb-10 font-bold"
            >
              Legendary Burger Experience
            </motion.p>

            {/* Animated Fire Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 mb-6"
            >
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  🔥
                </motion.div>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-600 text-xs md:text-sm text-center px-4"
            >
              Priprema najboljeg burgera u gradu...
            </motion.p>
          </div>

          {/* Rotating Decorative Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-64 h-64 border border-red-600/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-48 h-48 border-2 border-orange-600/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-56 h-56 border border-red-600/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-40 h-40 border-2 border-yellow-600/10 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
