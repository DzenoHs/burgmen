import { useInView } from 'react-intersection-observer';
import BurgerCard from './BurgerCard';

const translations = {
  bs: {
    title: 'NAŠI BURGERI',
    classic: {
      name: "CLASSIC BEAST",
      desc: "Dupla pljeskavica sa starenim čedarom, svježom salatom, paradajzom i našim legendarnim sosom na prženom brioche pecivu.",
      ingredients: ["100% Premium govedina", "Stari čedar", "Svježe povrće", "Specijalni sos"],
    },
    inferno: {
      name: "INFERNO HEAT",
      desc: "Za hrabre. Pljeskavica sa ghost pepper feferonima, jalapeños papričice, pepper jack sir, ljuta chipotle majoneza i habanero relish.",
      ingredients: ["Ghost Pepper govedina", "Jalapeños", "Pepper Jack sir", "Chipotle Mayo", "Habanero Relish"],
    },
    bbq: {
      name: "BBQ SUPREME",
      desc: "Dimljeno savršenstvo. Dupla pljeskavica glazirana našim BBQ sosom, karamelizovani luk, dimljeni gouda i hrskavi kolutovi luka.",
      ingredients: ["Dupla pljeskavica", "Domaći BBQ sos", "Dimljeni Gouda", "Kolutovi luka"],
    },
    truffle: {
      name: "TRUFFLE DELUXE",
      desc: "Luksuz na pecivu. Wagyu govedina, crni tartuf aioli, divlje pečurke, stari parmezan, rukola i balzamični glazura na ugljenom pecivu.",
      ingredients: ["Wagyu govedina", "Crni tartuf aioli", "Divlje pečurke", "Stari Parmezan", "Ugljeno pecivo"],
    },
    mushroom: {
      name: "MUSHROOM SWISS",
      desc: "Zemljan i bogat. Pljeskavica sa sote portobello pečurkama, otopljenim švicerskim sirom, bijeli luk aioli i svježim timjanom na pretzel pecivu.",
      ingredients: ["Pljeskavica", "Portobello pečurke", "Švicerski sir", "Bijeli luk aioli", "Pretzel pecivo"],
    },
    blue: {
      name: "BLUE CHEESE POWER",
      desc: "Hrabro i bez pardona. Premium govedina, mrvljeni plavi sir, karamelizovani luk, baby spanać i smokvino džem.",
      ingredients: ["Premium govedina", "Plavi sir", "Smokvino džem", "Baby spanać"],
    },
    california: {
      name: "CALIFORNIA DREAMIN'",
      desc: "Svježe i živahno. Pljeskavica, narezano avokado, klice, paradajz, crveni luk, salata i limun-bilje majoneza na integralnom pecivu.",
      ingredients: ["Pljeskavica", "Svježe avokado", "Klice", "Limun-bilje mayo", "Integralno pecivo"],
    },
    texan: {
      name: "THE TEXAN",
      desc: "Veliko i hrabro. Dupla pljeskavica, hrskav prženi luk, jalapeños, pepper jack sir, dimljeni BBQ sos i prženo jaje na Texas tostu.",
      ingredients: ["Dupla pljeskavica", "Prženo jaje", "Pepper Jack sir", "Jalapeños", "Texas tost"],
    }
  },
  en: {
    title: 'OUR BURGERS',
    classic: {
      name: "CLASSIC BEAST",
      desc: "Double patty with aged cheddar, fresh lettuce, tomato and our legendary sauce on toasted brioche bun.",
      ingredients: ["100% Premium beef", "Aged cheddar", "Fresh vegetables", "Special sauce"],
    },
    inferno: {
      name: "INFERNO HEAT",
      desc: "For the brave. Patty with ghost pepper chilies, jalapeños, pepper jack cheese, spicy chipotle mayo and habanero relish.",
      ingredients: ["Ghost Pepper beef", "Jalapeños", "Pepper Jack cheese", "Chipotle Mayo", "Habanero Relish"],
    },
    bbq: {
      name: "BBQ SUPREME",
      desc: "Smoked perfection. Double patty glazed with our BBQ sauce, caramelized onions, smoked gouda and crispy onion rings.",
      ingredients: ["Double patty", "Homemade BBQ sauce", "Smoked Gouda", "Onion rings"],
    },
    truffle: {
      name: "TRUFFLE DELUXE",
      desc: "Luxury on a bun. Wagyu beef, black truffle aioli, wild mushrooms, aged parmesan, arugula and balsamic glaze on charcoal bun.",
      ingredients: ["Wagyu beef", "Black truffle aioli", "Wild mushrooms", "Aged Parmesan", "Charcoal bun"],
    },
    mushroom: {
      name: "MUSHROOM SWISS",
      desc: "Earthy and rich. Beef patty with sautéed portobello mushrooms, melted Swiss cheese, garlic aioli and fresh thyme on pretzel bun.",
      ingredients: ["Beef patty", "Portobello mushrooms", "Swiss cheese", "Garlic aioli", "Pretzel bun"],
    },
    blue: {
      name: "BLUE CHEESE POWER",
      desc: "Bold and unapologetic. Premium beef, crumbled blue cheese, caramelized onions, baby spinach and fig jam.",
      ingredients: ["Premium beef", "Blue cheese", "Fig jam", "Baby spinach"],
    },
    california: {
      name: "CALIFORNIA DREAMIN'",
      desc: "Fresh and vibrant. Beef patty, sliced avocado, sprouts, tomato, red onion, lettuce and lemon-herb mayo on whole wheat bun.",
      ingredients: ["Beef patty", "Fresh avocado", "Sprouts", "Lemon-herb mayo", "Whole wheat bun"],
    },
    texan: {
      name: "THE TEXAN",
      desc: "Big and bold. Double patty, crispy fried onions, jalapeños, pepper jack cheese, smoked BBQ sauce and fried egg on Texas toast.",
      ingredients: ["Double patty", "Fried egg", "Pepper Jack cheese", "Jalapeños", "Texas toast"],
    }
  }
};

const BurgerShowcase = ({ language }) => {
  const t = translations[language];
  
  const burgers = [
    {
      id: 1,
      name: t.classic.name,
      description: t.classic.desc,
      ingredients: t.classic.ingredients,
      image: "/classicburger.png",
    },
    {
      id: 2,
      name: t.inferno.name,
      description: t.inferno.desc,
      ingredients: t.inferno.ingredients,
      image: "/premuimburger.png",
    },
    {
      id: 3,
      name: t.bbq.name,
      description: t.bbq.desc,
      ingredients: t.bbq.ingredients,
      image: "/burger3.png",
    },
    {
      id: 4,
      name: t.truffle.name,
      description: t.truffle.desc,
      ingredients: t.truffle.ingredients,
      image: "/burger4.png",
    },
    {
      id: 5,
      name: t.mushroom.name,
      description: t.mushroom.desc,
      ingredients: t.mushroom.ingredients,
      image: "/burger5.png",
    },
    {
      id: 6,
      name: t.blue.name,
      description: t.blue.desc,
      ingredients: t.blue.ingredients,
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=1200&h=800&fit=crop",
    },
    {
      id: 7,
      name: t.california.name,
      description: t.california.desc,
      ingredients: t.california.ingredients,
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&h=800&fit=crop",
    },
    {
      id: 8,
      name: t.texan.name,
      description: t.texan.desc,
      ingredients: t.texan.ingredients,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=800&fit=crop",
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="burgers" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-32">
          <h2 
            className={`text-6xl sm:text-7xl md:text-8xl font-black text-burger-yellow uppercase tracking-tighter mb-6 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {t.title}
          </h2>
          <div 
            className={`h-1.5 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow mx-auto rounded-full transition-all duration-1000 delay-300 ${
              titleInView ? 'w-64 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Burger Cards - Alternating Layout */}
        <div className="space-y-48">
          {burgers.map((burger, index) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerShowcase;