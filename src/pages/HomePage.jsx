import Hero from '../components/Hero';
import BurgerShowcase from '../components/BurgerShowcase';
import AboutSection from '../components/AboutSection';
import BlogPreview from '../components/BlogPreview';
import Gallery from '../components/Gallery';

const HomePage = ({ language }) => {
  return (
    <>
      <Hero language={language} />
      <BurgerShowcase language={language} />
      <AboutSection language={language} />
      <BlogPreview language={language} />
      <Gallery language={language} />
    </>
  );
};

export default HomePage;
