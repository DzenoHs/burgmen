import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresa',
      content: 'Zmaja od Bosne 123, Sarajevo, BiH',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+387 (33) 123-456',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@burgmen.ba',
    },
    {
      icon: Clock,
      title: 'Radno vrijeme',
      content: 'Pon-Ned: 11:00 - 23:00',
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-burger-dark/50">
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
            Kontakt
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-burger-yellow via-burger-orange to-burger-red mx-auto rounded-full"
          />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-burger-charcoal rounded-3xl border-2 border-burger-red/30 p-8 md:p-12 shadow-2xl hover:border-burger-red/50 transition-all duration-500"
        >
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-burger-red/5 via-transparent to-burger-orange/5 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-burger-red to-burger-orange rounded-full mb-4"
                >
                  <info.icon size={28} className="text-burger-white" />
                </motion.div>
                <h3 className="text-burger-white font-black text-xl mb-2 uppercase tracking-tight">
                  {info.title}
                </h3>
                <p className="text-burger-gray leading-relaxed">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h3 className="text-burger-white font-black text-2xl mb-6 uppercase">Pratite nas</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-burger-dark border-2 border-burger-red/30 hover:border-burger-red rounded-full flex items-center justify-center text-burger-gray hover:text-burger-red transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-burger-red to-burger-neon-red text-burger-white font-black text-xl uppercase rounded-full shadow-2xl shadow-burger-red/30 hover:shadow-burger-red/50 transition-all duration-300"
            >
              Posjetite nas 📍
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
