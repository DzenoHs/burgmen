import { motion } from 'framer-motion';
import { ArrowLeft, Award, Users, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

const AboutPage = ({ language }) => {
  const t = translations[language].about;

  const values = [
    { icon: Award, ...t.values.quality },
    { icon: Heart, ...t.values.passion },
    { icon: Users, ...t.values.tradition },
    { icon: TrendingUp, ...t.values.innovation },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-burger-white/70 hover:text-burger-yellow mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.backToHome}
          </motion.button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-burger-yellow mb-4 uppercase">
            {t.title}
          </h1>
          <p className="text-xl text-burger-red font-bold">{t.subtitle}</p>
          <div className="h-1.5 w-64 bg-gradient-to-r from-burger-orange via-burger-red to-burger-yellow mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden border-2 border-burger-red/30 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop"
            alt="BURGMEN Story"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Tradition */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-burger-dark/50 border border-burger-red/30 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-burger-yellow mb-4">{t.tradition.title}</h2>
            <p className="text-lg text-burger-gray leading-relaxed">{t.tradition.content}</p>
          </motion.section>

          {/* Decision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-burger-dark/50 border border-burger-red/30 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-burger-yellow mb-4">{t.decision.title}</h2>
            <p className="text-lg text-burger-gray leading-relaxed">{t.decision.content}</p>
          </motion.section>

          {/* Advantage */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-burger-dark/50 border border-burger-red/30 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-burger-yellow mb-6">{t.advantage.title}</h2>
            <ul className="space-y-3">
              {t.advantage.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-burger-gray">
                  <span className="text-burger-red text-2xl">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-burger-dark/50 border border-burger-red/30 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-burger-yellow mb-4">{t.vision.title}</h2>
            <p className="text-lg text-burger-gray leading-relaxed">{t.vision.content}</p>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-burger-yellow mb-8 text-center">{t.values.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-burger-dark/50 border border-burger-red/30 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-burger-red to-burger-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-burger-white" />
                    </div>
                    <h3 className="text-xl font-bold text-burger-yellow mb-2">{value.title}</h3>
                    <p className="text-burger-gray">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link to="/#burgers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-burger-red to-burger-orange text-burger-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-burger-red/50 transition-all"
            >
              {language === 'bs' ? 'Pogledaj naše burgere' : 'View our burgers'}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
