import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram } from 'lucide-react';

const translations = {
  bs: {
    title: 'KONTAKTIRAJTE NAS',
    subtitle: 'Imate pitanja? Rado ćemo vam pomoći!',
    formTitle: 'Pošalji poruku',
    namePlaceholder: 'Vaše ime',
    emailPlaceholder: 'Vaš email',
    messagePlaceholder: 'Vaša poruka...',
    sendButton: 'Pošalji poruku',
    sending: 'Šalje se...',
    successTitle: 'Poruka poslata!',
    successMessage: 'Javićemo vam se uskoro.',
    contactInfo: 'Informacije',
    address: 'Adresa',
    addressDetail: 'Čaršijska 18, Visoko, BiH',
    phone: 'Telefon',
    phoneDetail: '+387 (61) 123-456',
    email: 'Email',
    emailDetail: 'info@burgmen.ba',
    hours: 'Radno vrijeme',
    hoursDetail: 'Pon-Pet: 09:00 - 23:00\nSubota: 14:00 - 00:00\nNedjelja: 14:00 - 23:00',
    social: 'Društvene mreže',
    followUs: 'Pratite nas',
  },
  en: {
    title: 'CONTACT US',
    subtitle: 'Have questions? We\'d love to help!',
    formTitle: 'Send message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message...',
    sendButton: 'Send message',
    sending: 'Sending...',
    successTitle: 'Message sent!',
    successMessage: 'We\'ll get back to you soon.',
    contactInfo: 'Information',
    address: 'Address',
    addressDetail: 'Čaršijska 18, Visoko, BiH',
    phone: 'Phone',
    phoneDetail: '+387 (61) 123-456',
    email: 'Email',
    emailDetail: 'info@burgmen.ba',
    hours: 'Working hours',
    hoursDetail: 'Mon-Fri: 09:00 - 23:00\nSaturday: 14:00 - 00:00\nSunday: 14:00 - 23:00',
    social: 'Social media',
    followUs: 'Follow us',
  }
};

const ContactPage = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const t = translations[language];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulacija slanja (u produkciji bi bilo API poziv)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset forme
    setFormData({ name: '', email: '', message: '' });

    // Sakrij success message nakon 5 sekundi
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const contactInfoItems = [
    {
      icon: MapPin,
      title: t.address,
      content: t.addressDetail,
      link: 'https://maps.google.com/?q=Čaršijska+18+Visoko',
    },
    {
      icon: Phone,
      title: t.phone,
      content: t.phoneDetail,
      link: 'tel:+38761123456',
    },
    {
      icon: Mail,
      title: t.email,
      content: t.emailDetail,
      link: 'mailto:info@burgmen.ba',
    },
    {
      icon: Clock,
      title: t.hours,
      content: t.hoursDetail,
      link: null,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-burger-yellow mb-4 uppercase tracking-tighter">
            {t.title}
          </h1>
          <p className="text-xl text-burger-white/80">{t.subtitle}</p>
          <div className="h-1.5 w-48 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-burger-black/50 border border-burger-red/30 rounded-2xl p-8">
              <h2 className="text-3xl font-black text-burger-yellow mb-6">
                {t.formTitle}
              </h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-burger-yellow mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-burger-white/70">{t.successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      required
                      className="w-full px-4 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-burger-white border-t-transparent rounded-full"
                        />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t.sendButton}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black text-burger-yellow mb-8">
              {t.contactInfo}
            </h2>

            {contactInfoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-burger-black/50 border border-burger-red/30 rounded-xl p-6 hover:border-burger-red transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-burger-red/20 rounded-lg group-hover:bg-burger-red transition-colors">
                        <item.icon size={24} className="text-burger-red group-hover:text-burger-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-burger-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-burger-white/70 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-burger-black/50 border border-burger-red/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-burger-red/20 rounded-lg">
                        <item.icon size={24} className="text-burger-red" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-burger-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-burger-white/70 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-600/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-burger-white mb-4 flex items-center gap-2">
                <Instagram size={24} className="text-pink-500" />
                {t.social}
              </h3>
              <a
                href="https://www.instagram.com/burgmen__/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-burger-white font-bold rounded-xl hover:opacity-90 transition-opacity"
              >
                {t.followUs} @burgmen__
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-burger-black/50 border border-burger-red/30 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.8!2d18.1812153!3d43.9870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f2e2930fe9489%3A0x27bb32e1ced4e2eb!2zxIxhcsShaWpza2EgMTgsIFZpc29rbyA3MTMwMA!5e0!3m2!1sen!2sba!4v1732385000000!5m2!1sen!2sba"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
