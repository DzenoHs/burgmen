import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const translations = {
  bs: {
    title: '🍔 Naši kolačići su bolji od burgera!',
    message: 'Koristimo kolačiće da bismo vam pružili najbolje iskustvo. Prihvatite i nastavite ka savršenom burgeru!',
    accept: 'Prihvatam sve kolačiće',
    reject: 'Samo nužni',
    settings: 'Postavke',
  },
  en: {
    title: '🍔 Our cookies are better than burgers!',
    message: 'We use cookies to give you the best experience. Accept and continue to the perfect burger!',
    accept: 'Accept all cookies',
    reject: 'Only necessary',
    settings: 'Settings',
  }
};

const CookieConsent = ({ language }) => {
  const [showCookie, setShowCookie] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const consent = localStorage.getItem('burgmen-cookie-consent');
    if (!consent) {
      // Show after loading screen
      const timer = setTimeout(() => {
        setShowCookie(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('burgmen-cookie-consent', 'accepted');
    setShowCookie(false);
  };

  const handleReject = () => {
    localStorage.setItem('burgmen-cookie-consent', 'necessary');
    setShowCookie(false);
  };

  return (
    <AnimatePresence>
      {showCookie && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleReject}
          />

          {/* Cookie Popup */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[9999]"
          >
            <div className="relative bg-gradient-to-br from-burger-charcoal via-burger-dark to-burger-charcoal border-t-4 md:border-4 border-burger-red md:rounded-2xl shadow-2xl overflow-hidden h-[50vh] md:h-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-burger-red/10 via-transparent to-burger-orange/10" />
              
              {/* Animated Burger Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl"
                >
                  🍔
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={handleReject}
                  className="absolute top-4 right-4 p-2 text-burger-gray hover:text-burger-red transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Cookie Icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <Cookie size={48} className="text-burger-orange" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-black text-burger-white mb-3">
                  {t.title}
                </h3>

                {/* Message */}
                <p className="text-burger-gray leading-relaxed mb-6">
                  {t.message}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Accept Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAccept}
                    className="w-full px-6 py-4 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white font-black uppercase rounded-xl shadow-lg shadow-burger-red/30 hover:shadow-burger-red/50 transition-all duration-300"
                  >
                    {t.accept}
                  </motion.button>

                  {/* Reject Button */}
                  <button
                    onClick={handleReject}
                    className="w-full px-6 py-3 bg-burger-dark/50 border border-burger-gray/30 text-burger-gray hover:text-burger-white hover:border-burger-red transition-all duration-300 rounded-xl font-bold"
                  >
                    {t.reject}
                  </button>
                </div>

                {/* Footer */}
                <p className="text-xs text-burger-gray mt-4 text-center">
                  Više informacija u našoj{' '}
                  <a href="#" className="text-burger-red hover:underline">
                    politici privatnosti
                  </a>
                </p>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-2 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
