import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const translations = {
  bs: {
    home: 'Početna',
    burgers: 'Burgeri',
    about: 'O nama',
    gallery: 'Galerija',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  en: {
    home: 'Home',
    burgers: 'Burgers',
    about: 'About',
    gallery: 'Gallery',
    blog: 'Blog',
    contact: 'Contact',
  }
};

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  const menuItems = [
    { name: t.home, href: '/', isRoute: true },
    { name: t.burgers, href: '#burgers', isRoute: false },
    { name: t.about, href: '#about', isRoute: false },
    { name: t.gallery, href: '#gallery', isRoute: false },
    { name: t.blog, href: '/blog', isRoute: true },
    { name: t.contact, href: '/contact', isRoute: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-burger-black/80 backdrop-blur-md border-b border-burger-red/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/logoburgmen.jpg" 
              alt="BURGMEN Logo" 
              className="h-12 w-12 object-contain rounded-full"
            />
            <span className="text-2xl font-black text-burger-white tracking-tight">
              BURG<span className="text-burger-red">MEN</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              item.isRoute ? (
                <Link key={index} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-burger-gray hover:text-burger-red transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-burger-gray hover:text-burger-red transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.a>
              )
            ))}
            
            {/* Instagram Icon */}
            <motion.a
              href="https://www.instagram.com/burgmen__/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 p-2 text-burger-white hover:text-burger-red transition-colors duration-300"
            >
              <Instagram size={24} />
            </motion.a>
            
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'bs' ? 'en' : 'bs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 bg-burger-red/20 hover:bg-burger-red text-burger-white rounded-lg transition-all duration-300 font-bold flex items-center gap-2"
            >
              <Globe size={18} />
              {language === 'bs' ? 'EN' : 'BA'}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Instagram Mobile Icon */}
            <a
              href="https://www.instagram.com/burgmen__/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-burger-white hover:text-burger-red transition-colors"
            >
              <Instagram size={24} />
            </a>
            
            {/* Language Toggle Mobile Icon */}
            <button
              onClick={() => setLanguage(language === 'bs' ? 'en' : 'bs')}
              className="p-2 bg-burger-red/20 hover:bg-burger-red text-burger-white rounded-lg transition-all duration-300 font-bold"
            >
              {language === 'bs' ? 'EN' : 'BA'}
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-burger-white hover:text-burger-red transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-burger-black/95 backdrop-blur-lg border-t border-burger-red/20"
          >
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item, index) => (
                item.isRoute ? (
                  <Link key={index} to={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-3 text-burger-gray hover:text-burger-red hover:bg-burger-red/10 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-burger-gray hover:text-burger-red hover:bg-burger-red/10 rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </motion.a>
                )
              ))}
              
              {/* Instagram Mobile */}
              <motion.a
                href="https://www.instagram.com/burgmen__/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-3 bg-pink-600/20 hover:bg-pink-600 text-burger-white rounded-lg transition-all duration-300 font-bold flex items-center justify-center gap-2"
              >
                <Instagram size={18} />
                Instagram
              </motion.a>
              
              {/* Language Toggle Mobile */}
              <motion.button
                onClick={() => {
                  setLanguage(language === 'bs' ? 'en' : 'bs');
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (menuItems.length + 1) * 0.1 }}
                className="w-full px-4 py-3 bg-burger-red/20 hover:bg-burger-red text-burger-white rounded-lg transition-all duration-300 font-bold flex items-center justify-center gap-2"
              >
                <Globe size={18} />
                {language === 'bs' ? 'English' : 'Bosanski'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
