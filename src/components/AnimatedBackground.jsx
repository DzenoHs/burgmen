import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Flame intensity increases on scroll (throttled for performance)
  const flameIntensity = useTransform(scrollY, [0, 1000], [0.25, 0.4]);

  // If reduced motion is preferred, show static gradient
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-burger-red/10 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* LAYER 1: Pure Black Base - automatically from bg-black */}

      {/* LAYER 1.5: Video Dim Pozadina */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <source src="/pozadinastranice.mp4" type="video/mp4" />
      </video>

      {/* LAYER 2: Animated Grain Texture */}
      <div
        className="grain-overlay absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* LAYER 3: Flame Orbs - Framer Motion (simplified on mobile) */}
      {!isMobile && (
        <>
          {/* Orange Flame Orb */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(255,69,0,0.35) 0%, rgba(255,99,71,0.18) 40%, transparent 70%)',
              filter: 'blur(50px)',
              top: '10%',
              left: '15%',
              mixBlendMode: 'screen',
              opacity: flameIntensity,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: 'loop',
            }}
          />

          {/* Red Flame Orb */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,99,71,0.3) 0%, rgba(255,69,0,0.15) 40%, transparent 70%)',
              filter: 'blur(50px)',
              top: '45%',
              right: '12%',
              mixBlendMode: 'screen',
              opacity: flameIntensity,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, 35, 0],
              x: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: 'loop',
              delay: 1,
            }}
          />

          {/* Yellow Flame Orb */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(255,140,0,0.28) 0%, rgba(255,100,0,0.12) 40%, transparent 70%)',
              filter: 'blur(45px)',
              bottom: '15%',
              left: '45%',
              mixBlendMode: 'screen',
              opacity: flameIntensity,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: 'loop',
              delay: 2,
            }}
          />

          {/* Additional Flame Flicker (small accent orb) */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,100,0,0.3) 0%, transparent 60%)',
              filter: 'blur(35px)',
              top: '65%',
              left: '25%',
              mixBlendMode: 'screen',
              opacity: flameIntensity,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: 'loop',
              delay: 0.5,
            }}
          />
        </>
      )}

      {/* Mobile: Simplified single flame orb */}
      {isMobile && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(255,99,71,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            top: '30%',
            left: '20%',
            mixBlendMode: 'screen',
            opacity: 0.4,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: 'loop',
          }}
        />
      )}

      {/* LAYER 4: Smoke Effect - CSS Animation (Sivi dim) */}
      <div
        className="smoke-layer absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '600px',
          background: 'linear-gradient(to top, rgba(90,90,90,0.4) 0%, rgba(110,110,110,0.25) 25%, rgba(70,70,70,0.12) 50%, transparent 100%)',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* LAYER 5: Charcoal Texture (Subtle Bottom Overlay) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(60,60,60,0.3) 0%, transparent 70%)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
