import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift } from 'lucide-react';

const translations = {
  bs: {
    title: '🎁 DOBIJ 10% POPUST!',
    subtitle: 'Prijavi se na newsletter i osvoji ekskluzivne ponude',
    emailPlaceholder: 'Tvoj email...',
    subscribe: 'Pretplati se',
    noThanks: 'Ne hvala',
    successTitle: '🎉 Uspješno!',
    successMessage: 'Proveri svoj email za kod za popust!',
    alreadySubscribed: 'Već si pretplaćen',
  },
  en: {
    title: '🎁 GET 10% OFF!',
    subtitle: 'Subscribe to our newsletter and get exclusive offers',
    emailPlaceholder: 'Your email...',
    subscribe: 'Subscribe',
    noThanks: 'No thanks',
    successTitle: '🎉 Success!',
    successMessage: 'Check your email for discount code!',
    alreadySubscribed: 'Already subscribed',
  }
};

const NewsletterPopup = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[language];

  useEffect(() => {
    // Check if user already dismissed or subscribed
    const dismissed = localStorage.getItem('burgmen-newsletter-dismissed');
    const subscribed = localStorage.getItem('burgmen-newsletter-subscribed');
    
    if (!dismissed && !subscribed) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('burgmen-newsletter-dismissed', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    localStorage.setItem('burgmen-newsletter-subscribed', 'true');
    
    // Close after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9997]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9998] w-full max-w-md mx-4"
          >
            <div className="relative bg-gradient-to-br from-burger-black to-burger-black/95 border-2 border-burger-red rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-burger-red/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-burger-orange/20 rounded-full blur-3xl" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-burger-black/50 hover:bg-burger-red rounded-full transition-colors z-10"
              >
                <X size={20} className="text-burger-white" />
              </button>

              <div className="relative p-8">
                {!isSuccess ? (
                  <>
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-burger-red to-burger-orange rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Gift size={32} className="text-burger-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl font-black text-burger-yellow text-center mb-2">
                      {t.title}
                    </h3>
                    <p className="text-burger-white/70 text-center mb-6">
                      {t.subtitle}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-burger-white/50" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.emailPlaceholder}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 relative overflow-hidden group"
                      >
                        <span className="relative z-10">
                          {isSubmitting ? '...' : t.subscribe}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-full text-burger-white/50 hover:text-burger-white text-sm transition-colors"
                      >
                        {t.noThanks}
                      </button>
                    </form>

                    {/* Trust Badge */}
                    <p className="text-xs text-burger-white/40 text-center mt-4">
                      🔒 {language === 'bs' ? 'Tvoji podaci su sigurni' : 'Your data is safe'}
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Gift size={40} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-burger-yellow mb-2">
                      {t.successTitle}
                    </h3>
                    <p className="text-burger-white/70">
                      {t.successMessage}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Bottom Decorative Bar */}
              <div className="h-2 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
