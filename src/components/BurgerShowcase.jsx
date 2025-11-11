import { useInView } from 'react-intersection-observer';
import BurgerCard from './BurgerCard';

const BurgerShowcase = () => {
  const burgers = [
    {
      id: 1,
      name: "CLASSIC BEAST",
      description: "Dupla pljeskavica sa starenim čedarom, hrskavom slaninom, svježom salatom, paradajzom i našim legendarnim sosom na prženom brioche pecivu.",
      ingredients: ["100% Premium govedina", "Stari čedar", "Hrskava slanina", "Svježe povrće", "Specijalni sos"],
      image: "/classicburger.png",
    },
    {
      id: 2,
      name: "INFERNO HEAT",
      description: "Za hrabre. Pljeskavica sa ghost pepper feferonima, jalapeños papričice, pepper jack sir, ljuta chipotle majoneza i habanero relish.",
      ingredients: ["Ghost Pepper govedina", "Jalapeños", "Pepper Jack sir", "Chipotle Mayo", "Habanero Relish"],
      image: "/premuimburger.png",
    },
    {
      id: 3,
      name: "BBQ BACON SUPREME",
      description: "Dimljeno savršenstvo. Dupla pljeskavica glazirana našim BBQ sosom, debela slanina, karamelizovani luk, dimljeni gouda i hrskavi kolutovi luka.",
      ingredients: ["Dupla pljeskavica", "Domaći BBQ sos", "Debela slanina", "Dimljeni Gouda", "Kolutovi luka"],
      image: "/burger3.png",
    },
    {
      id: 4,
      name: "TRUFFLE DELUXE",
      description: "Luksuz na pecivu. Wagyu govedina, crni tartuf aioli, divlje pečurke, stari parmezan, rukola i balzamični glazura na ugljenom pecivu.",
      ingredients: ["Wagyu govedina", "Crni tartuf aioli", "Divlje pečurke", "Stari Parmezan", "Ugljeno pecivo"],
      image: "/burger4.png",
    },
    {
      id: 5,
      name: "MUSHROOM SWISS",
      description: "Zemljan i bogat. Pljeskavica sa sote portobello pečurkama, otopljenim švicerskim sirom, bijeli luk aioli i svježim timjanom na pretzel pecivu.",
      ingredients: ["Pljeskavica", "Portobello pečurke", "Švicerski sir", "Bijeli luk aioli", "Pretzel pecivo"],
      image: "/burger5.png",
    },
    {
      id: 6,
      name: "BLUE CHEESE POWER",
      description: "Hrabro i bez pardona. Premium govedina, mrvljeni plavi sir, karamelizovani luk, slanina, baby spanać i smokvino džem.",
      ingredients: ["Premium govedina", "Plavi sir", "Slanina", "Smokvino džem", "Baby spanać"],
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=1200&h=800&fit=crop",
    },
    {
      id: 7,
      name: "CALIFORNIA DREAMIN'",
      description: "Svježe i živahno. Pljeskavica, narezano avokado, klice, paradajz, crveni luk, salata i limun-bilje majoneza na integralnom pecivu.",
      ingredients: ["Pljeskavica", "Svježe avokado", "Klice", "Limun-bilje mayo", "Integralno pecivo"],
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&h=800&fit=crop",
    },
    {
      id: 8,
      name: "THE TEXAN",
      description: "Veliko i hrabro. Dupla pljeskavica, hrskav prženi luk, jalapeños, pepper jack sir, dimljeni BBQ sos i prženo jaje na Texas tostu.",
      ingredients: ["Dupla pljeskavica", "Prženo jaje", "Pepper Jack sir", "Jalapeños", "Texas tost"],
      image: "https://images.unsplash.com/photo-1585238341710-4a2db91c4b2e?w=1200&h=800&fit=crop",
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
            Naši Burgeri
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