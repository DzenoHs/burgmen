import { motion } from 'framer-motion';
import { Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const translations = {
  bs: {
    description: 'Najbolji burgeri u gradu. Ručno pravljeni sa strašću od 2025.',
    quickLinks: 'Brzi linkovi',
    home: 'Početna',
    menu: 'Meni',
    about: 'O nama',
    gallery: 'Galerija',
    contact: 'Kontakt',
    legal: 'Pravno',
    privacy: 'Politika privatnosti',
    terms: 'Uslovi korištenja',
    cookies: 'Kolačići',
    rights: 'Sva prava zadržana',
  },
  en: {
    description: 'Best burgers in town. Handcrafted with passion since 2025.',
    quickLinks: 'Quick Links',
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookies',
    rights: 'All rights reserved',
  }
};

const Footer = ({ language }) => {
  const t = translations[language];
  
  const quickLinks = [
    { name: t.home, href: '#home' },
    { name: t.menu, href: '#menu' },
    { name: t.about, href: '#about' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  const legalLinks = [
    { name: t.privacy, href: '#' },
    { name: t.terms, href: '#' },
    { name: t.cookies, href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/burgmen', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/burgmen__/', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/burgmen', label: 'Twitter' },
    { icon: Youtube, url: 'https://www.youtube.com/@burgmen', label: 'Youtube' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-burger-black border-t border-burger-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logoburgmen.jpg" 
                alt="BURGMEN Logo" 
                className="h-16 w-16 object-contain rounded-full"
              />
              <span className="text-2xl font-black text-burger-white tracking-tight">
                BURG<span className="text-burger-red">MEN</span>
              </span>
            </div>
            <p className="text-burger-gray leading-relaxed mb-4">
              {t.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-burger-charcoal border border-burger-dark hover:border-burger-red rounded-full flex items-center justify-center text-burger-gray hover:text-burger-red transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-burger-white font-black text-xl mb-4 uppercase">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-burger-gray hover:text-burger-red transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-burger-white font-black text-xl mb-4 uppercase">{t.contact}</h3>
            <ul className="space-y-2 text-burger-gray">
              <li>Čaršijska 18</li>
              <li>Visoko, BiH</li>
              <li className="pt-2">
                <a href="tel:+38761123456" className="hover:text-burger-red transition-colors">
                  +387 (61) 123-456
                </a>
              </li>
              <li>
                <a href="mailto:info@burgmen.ba" className="hover:text-burger-red transition-colors">
                  info@burgmen.ba
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-burger-white font-black text-xl mb-4 uppercase">Newsletter</h3>
            <p className="text-burger-gray mb-4">Dobijte ekskluzivne ponude i novosti!</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Vaš email"
                className="px-4 py-2 bg-burger-charcoal border border-burger-dark focus:border-burger-red rounded-lg text-burger-white placeholder-burger-gray outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white font-bold uppercase rounded-lg hover:shadow-lg hover:shadow-burger-red/30 transition-all duration-300"
              >
                Pretplati se
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-burger-red/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-burger-gray text-sm flex items-center gap-2"
          >
            © 2025 BURGMEN. {t.rights}
          </motion.p>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6"
          >
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-burger-gray hover:text-burger-red text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow" />
    </footer>
  );
};

export default Footer;
