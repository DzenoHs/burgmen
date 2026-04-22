import BurgerShowcase from '../components/BurgerShowcase';
import AnimatedBackground from '../components/AnimatedBackground';

const MenuPage = ({ language }) => {
  return (
    <div className="relative min-h-screen text-burger-white overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <BurgerShowcase language={language} />
      </div>
    </div>
  );
};

export default MenuPage;