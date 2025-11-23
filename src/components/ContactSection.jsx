import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const translations = {
  bs: {
    title: 'KONTAKT',
    location: 'Adresa',
    address: 'Čaršijska 18, Visoko, BiH',
    phone: 'Telefon',
    phoneNumber: '+387 (61) 123-456',
    email: 'Email',
    emailAddress: 'info@burgmen.ba',
    hours: 'Radno vrijeme',
    schedule: 'Pon-Pet: 9:00 - 23:00',
    schedule2: 'Subota: 14:00 - 00:00',
    schedule3: 'Nedjelja: 14:00 - 23:00',
  },
  en: {
    title: 'CONTACT',
    location: 'Address',
    address: 'Čaršijska 18, Visoko, BiH',
    phone: 'Phone',
    phoneNumber: '+387 (61) 123-456',
    email: 'Email',
    emailAddress: 'info@burgmen.ba',
    hours: 'Working Hours',
    schedule: 'Mon-Fri: 9:00 AM - 11:00 PM',
    schedule2: 'Saturday: 2:00 PM - 12:00 AM',
    schedule3: 'Sunday: 2:00 PM - 11:00 PM',
  }
};

const ContactSection = ({ language }) => {
  const t = translations[language];
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t.location,
      content: t.address,
    },
    {
      icon: Phone,
      title: t.phone,
      content: t.phoneNumber,
    },
    {
      icon: Mail,
      title: t.email,
      content: t.emailAddress,
    },
    {
      icon: Clock,
      title: t.hours,
      content: t.schedule,
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/burgmen', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/burgmen__/', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/burgmen', label: 'Twitter' },
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
            {t.title}
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
        <div className="relative bg-burger-charcoal rounded-3xl border-2 border-burger-red/30 p-8 md:p-12 shadow-2xl">
          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center md:text-left"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-burger-red to-burger-orange rounded-full mb-4">
                  <info.icon size={28} className="text-burger-white" />
                </div>
                <h3 className="text-burger-white font-black text-xl mb-2 uppercase tracking-tight">
                  {info.title}
                </h3>
                <p className="text-burger-gray leading-relaxed">{info.content}</p>
                {info.title === t.hours && (
                  <>
                    <p className="text-burger-gray leading-relaxed mt-1">{t.schedule2}</p>
                    <p className="text-burger-gray leading-relaxed mt-1">{t.schedule3}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-burger-white font-black text-2xl mb-6 uppercase">Pratite nas</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-burger-dark border-2 border-burger-red/30 hover:border-burger-red rounded-full flex items-center justify-center text-burger-gray hover:text-burger-red transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
