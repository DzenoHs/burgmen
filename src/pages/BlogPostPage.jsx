import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const translations = {
  bs: {
    backToBlog: 'Nazad na blog',
    share: 'Podijeli',
    like: 'Sviđa mi se',
    comments: 'Komentari',
    minuteRead: 'min čitanja',
    relatedPosts: 'Povezani članci',
    readMore: 'Pročitaj',
  },
  en: {
    backToBlog: 'Back to blog',
    share: 'Share',
    like: 'Like',
    comments: 'Comments',
    minuteRead: 'min read',
    relatedPosts: 'Related posts',
    readMore: 'Read more',
  }
};

const blogPostsData = {
  1: {
    title: {
      bs: 'Kako nastaje savršeni burger: Iza kulisa BURGMEN kuhinje',
      en: 'How the perfect burger is made: Behind BURGMEN kitchen scenes'
    },
    content: {
      bs: `
        <p>Dobrodošli u srce BURGMEN-a - našu kuhinju gdje svakodnevno stvaramo legendarno iskustvo burgera. Danas vas vodimo na putovanje kroz proces koji transformiše pažljivo odabrane sastojke u nezaboravan obrok.</p>

        <h2>Odabir mesa - Temelj savršenstva</h2>
        <p>Sve počinje sa mesom. Naši burgeri se prave isključivo od 100% goveđeg mesa najvišeg kvaliteta. Sarađujemo sa lokalnim farmama koje dijele našu viziju - zdravo, organski uzgojeno meso bez antibiotika i hormona.</p>

        <p>Ključ savršenog burgera je omjer masti i mesa - mi koristimo 80/20 kombinaciju koja osigurava sočnost i okus pri svakom zalogaju. Meso ne mljevemo unaprijed, već svježe svaki dan kako bi zadržali maksimalnu svježinu.</p>

        <h2>Priprema - Umjetnost i nauka</h2>
        <p>Naši kuvari nisu samo radnici - oni su umjetnici. Svaki burger se oblikuje ručno, nikada ne stiskamo meso previše jer to bi iztisnulo sokove. Težina svake pljeskavice je precizno 200g - savršena količina za optimalni balans.</p>

        <p>Pečenje na našem specijalnom grill-u na 180°C omogućava Maillard reakciju - proces koji stvara tu prelijepu zlatnu koru spolja dok unutrašnjost ostaje savršeno sočna.</p>

        <h2>Tajni sastojci</h2>
        <p>Šta nas izdvaja? Naši sopstveni začini i umaci! Recept je tajna, ali možemo otkriti da koristimo kombinaciju 12 različitih začina koje sami mješamo. Naš signature burger sos zrije 48 sati prije serviranja - to je vrijeme potrebno da se svi ukusi savršeno spoje.</p>

        <h2>Završna nota</h2>
        <p>Povrće je svježe isječeno svakog jutra. Kruh pečemo kod lokalnog pekara po našem posebnom receptu - hrskav spolja, mekan unutra. Sve se sastavlja tek nakon što meso napusti roštilj - jer mi vjerujemo da vruć burger nikada ne treba čekati.</p>

        <p>To je naša priča. To je BURGMEN način. Svaki burger nije samo hrana - to je iskustvo koje pamtite.</p>
      `,
      en: `
        <p>Welcome to the heart of BURGMEN - our kitchen where we create legendary burger experiences daily. Today we take you on a journey through the process that transforms carefully selected ingredients into an unforgettable meal.</p>

        <h2>Meat Selection - Foundation of Perfection</h2>
        <p>It all starts with the meat. Our burgers are made exclusively from 100% highest quality beef. We partner with local farms that share our vision - healthy, organically raised meat without antibiotics and hormones.</p>

        <p>The key to a perfect burger is the fat to meat ratio - we use an 80/20 combination that ensures juiciness and flavor in every bite. We don't grind meat in advance, but fresh every day to maintain maximum freshness.</p>

        <h2>Preparation - Art and Science</h2>
        <p>Our cooks are not just workers - they are artists. Each burger is shaped by hand, we never press the meat too much because that would squeeze out the juices. The weight of each patty is precisely 200g - the perfect amount for optimal balance.</p>

        <p>Grilling on our special grill at 180°C enables the Maillard reaction - a process that creates that beautiful golden crust on the outside while the inside remains perfectly juicy.</p>

        <h2>Secret Ingredients</h2>
        <p>What sets us apart? Our own spices and sauces! The recipe is secret, but we can reveal that we use a combination of 12 different spices that we mix ourselves. Our signature burger sauce ages for 48 hours before serving - that's the time needed for all flavors to blend perfectly.</p>

        <h2>Final Touch</h2>
        <p>Vegetables are freshly cut every morning. We bake bread at a local bakery according to our special recipe - crispy outside, soft inside. Everything is assembled only after the meat leaves the grill - because we believe a hot burger should never wait.</p>

        <p>That's our story. That's the BURGMEN way. Every burger is not just food - it's an experience you remember.</p>
      `
    },
    author: 'BURGMEN Tim',
    date: '2025-11-20',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop',
    category: 'behindScenes',
  },
  2: {
    title: {
      bs: 'Odabir mesa: Temelj savršenog burgera',
      en: 'Meat Selection: Foundation of the Perfect Burger'
    },
    content: {
      bs: `
        <p>Kvalitet burgera počinje sa kvalitetom mesa. U BURGMEN-u, odabir mesa nije slučajan - to je pažljiv proces koji uključuje stroge standarde i dugogodišnje partnerstvo sa provjerenim dobavljačima.</p>

        <h2>100% Goveđe meso</h2>
        <p>Koristimo isključivo 100% goveđe meso, bez ikakvih dodataka, punila ili konzervansa. Naše meso dolazi od lokalnih farmi gdje znamo da su životinje uzgajane u humanim uslovima, bez antibiotika i hormona rasta.</p>

        <h2>Magični omjer: 80/20</h2>
        <p>Omjer masti i mesa je kritičan za savršen burger. Koristimo 80/20 - 80% mesa i 20% masti. Ovo nije slučajan broj:</p>
        <p>• 20% masti osigurava sočnost i ukus<br>• Sprječava da burger postane suv tokom pečenja<br>• Omogućava savršenu teksturu - ni previše masno, ni previše suvo</p>

        <h2>Svježe mljeven svaki dan</h2>
        <p>Nikada ne koristimo industrijsko zamrznuto meso. Naše meso dolazi svježe svakog dana i mlevemo ga u našoj kuhinji neposredno prije pripreme burgera. Ovo čuva prirodan ukus i teksturu mesa.</p>

        <h2>Kvalitet koji možete osjetiti</h2>
        <p>Razlika između prosječnog i vrhunskog mesa je očigledna pri prvom zalogaju. Naše meso ima:</p>
        <p>• Bogatiji, punije ukus<br>• Sočniju teksturu<br>• Prirodnu svježinu koju ne možete dobiti kod zamrznutog mesa<br>• Savršenu konzistenciju za oblikovanje burger pljeskavice</p>

        <p>U BURGMEN-u, meso nije samo glavni sastojak - ono je temelj na kojem gradimo svaki burger. I zato ne pravimo kompromise.</p>
      `,
      en: `
        <p>Burger quality starts with meat quality. At BURGMEN, meat selection is not random - it's a careful process involving strict standards and long-term partnerships with verified suppliers.</p>

        <h2>100% Beef</h2>
        <p>We use exclusively 100% beef, without any additives, fillers or preservatives. Our meat comes from local farms where we know animals are raised in humane conditions, without antibiotics and growth hormones.</p>

        <h2>The Magic Ratio: 80/20</h2>
        <p>The fat to meat ratio is critical for the perfect burger. We use 80/20 - 80% meat and 20% fat. This is not a random number:</p>
        <p>• 20% fat ensures juiciness and flavor<br>• Prevents the burger from drying out during cooking<br>• Enables perfect texture - neither too fatty nor too dry</p>

        <h2>Freshly Ground Every Day</h2>
        <p>We never use industrial frozen meat. Our meat arrives fresh every day and we grind it in our kitchen immediately before burger preparation. This preserves the natural taste and texture of the meat.</p>

        <h2>Quality You Can Feel</h2>
        <p>The difference between average and premium meat is obvious at first bite. Our meat has:</p>
        <p>• Richer, fuller flavor<br>• Juicier texture<br>• Natural freshness you can't get from frozen meat<br>• Perfect consistency for shaping burger patties</p>

        <p>At BURGMEN, meat isn't just the main ingredient - it's the foundation on which we build every burger. And that's why we make no compromises.</p>
      `
    },
    author: 'BURGMEN Tim',
    date: '2025-11-18',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=600&fit=crop',
    category: 'behindScenes',
  },
  3: {
    title: {
      bs: 'Priprema pljeskavice: Umjetnost oblikovanja',
      en: 'Patty Preparation: The Art of Shaping'
    },
    content: {
      bs: `
        <p>Oblikovanje burger pljeskavice je umjetnost koja zahtijeva preciznost, tehniku i iskustvo. U BURGMEN-u, svaku pljeskavicu oblikujemo ručno, sa pažnjom prema svakom detalju.</p>

        <h2>Ručno oblikovanje</h2>
        <p>Zašto ručno kada postoje mašine? Zato što ljudske ruke osjećaju teksturu mesa. Naši kuvari znaju tačno koliko treba pritisnuti da se pljeskavica drži zajedno, ali da ostane dovoljno rahla da zadrži sokove tokom pečenja.</p>

        <h2>Precizno 200 grama</h2>
        <p>Svaka naša pljeskavica teži tačno 200 grama. Ova težina nije slučajna:</p>
        <p>• Dovoljno velika da zasiti<br>• Ne previše velika da prevlada ostale sastojke<br>• Idealna za ravnomjerno pečenje<br>• Savršena proporcija sa pecivom i prilozima</p>

        <h2>Tehnika je ključna</h2>
        <p>Najčešća greška? Previše stiskanje mesa. Kada stisnem te meso previše, istriščeš sokove i burger postaje suv. Naša tehnika:</p>
        <p>1. Lagano oblikovanje lopte od mesa<br>2. Blago spljoštavanje prstima<br>3. Pravljenje male udubine u centru (sprječava balončenje)<br>4. Nikada ne stiskati čvrsto</p>

        <h2>Temperatura je važna</h2>
        <p>Meso držimo hladno sve do trenutka pečenja. Toplo meso gubi mast pre vremena i rezultira suvom pljeskavicom. Zato naše meso ide sa hladnjaka direktno na gril.</p>

        <h2>Dimenzije</h2>
        <p>Pljeskavica mora biti:</p>
        <p>• Nešto šira od peciva (meso se skuplja tokom pečenja)<br>• Jednake debljine svuda (za ravnomjerno pečenje)<br>• Sa laganom udubinom u centru</p>

        <p>Svaki korak u oblikovanju pljeskavice utiče na finalni proizvod. To je razlog zašto naši burgeri imaju tu savršenu teksturu koju svi vole.</p>
      `,
      en: `
        <p>Shaping a burger patty is an art that requires precision, technique and experience. At BURGMEN, we shape each patty by hand, with attention to every detail.</p>

        <h2>Hand-Shaped</h2>
        <p>Why by hand when there are machines? Because human hands feel the meat's texture. Our cooks know exactly how much to press so the patty holds together, but stays loose enough to retain juices during cooking.</p>

        <h2>Precisely 200 Grams</h2>
        <p>Each of our patties weighs exactly 200 grams. This weight is not random:</p>
        <p>• Large enough to satisfy<br>• Not too large to overpower other ingredients<br>• Ideal for even cooking<br>• Perfect proportion with bun and toppings</p>

        <h2>Technique is Key</h2>
        <p>The most common mistake? Over-pressing the meat. When you press meat too much, you squeeze out the juices and the burger becomes dry. Our technique:</p>
        <p>1. Gently forming a meat ball<br>2. Lightly flattening with fingers<br>3. Making a small dimple in the center (prevents bulging)<br>4. Never pressing hard</p>

        <h2>Temperature Matters</h2>
        <p>We keep the meat cold until the moment of cooking. Warm meat loses fat prematurely and results in a dry patty. That's why our meat goes from refrigerator directly to grill.</p>

        <h2>Dimensions</h2>
        <p>The patty must be:</p>
        <p>• Slightly wider than the bun (meat shrinks during cooking)<br>• Equal thickness throughout (for even cooking)<br>• With a slight dimple in the center</p>

        <p>Every step in shaping the patty affects the final product. That's why our burgers have that perfect texture everyone loves.</p>
      `
    },
    author: 'BURGMEN Tim',
    date: '2025-11-15',
    readTime: 3,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=600&fit=crop',
    category: 'behindScenes',
  },
};

const BlogPostPage = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 200) + 50);
  const t = translations[language];

  const post = blogPostsData[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-burger-red mb-4">404</h1>
          <p className="text-xl text-burger-white/70 mb-8">
            {language === 'bs' ? 'Članak nije pronađen' : 'Article not found'}
          </p>
          <Link to="/blog" className="px-6 py-3 bg-burger-red text-burger-white rounded-xl hover:bg-burger-red/80 transition-colors">
            {t.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-burger-white/70 hover:text-burger-red transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t.backToBlog}
        </motion.button>

        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-8"
        >
          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burger-black via-transparent to-transparent" />
        </motion.div>

        {/* Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-burger-yellow mb-6">
            {post.title[language]}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-burger-white/60 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime} {t.minuteRead}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                liked
                  ? 'bg-burger-red border-burger-red text-burger-white'
                  : 'bg-burger-black/50 border-burger-red/30 text-burger-white/70 hover:border-burger-red'
              }`}
            >
              <Heart size={18} className={liked ? 'fill-current' : ''} />
              <span>{likes}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border bg-burger-black/50 border-burger-red/30 text-burger-white/70 hover:border-burger-red transition-all">
              <Share2 size={18} />
              <span>{t.share}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border bg-burger-black/50 border-burger-red/30 text-burger-white/70 hover:border-burger-red transition-all">
              <MessageCircle size={18} />
              <span>{t.comments}</span>
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content[language] }}
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.8',
          }}
        />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-burger-red to-transparent my-16" />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-burger-red/20 to-burger-orange/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-black text-burger-yellow mb-4">
            {language === 'bs' ? 'Probajte naše burgere!' : 'Try our burgers!'}
          </h3>
          <p className="text-burger-white/70 mb-6">
            {language === 'bs'
              ? 'Doživite ukus o kojem pričamo. Posjetite nas danas!'
              : 'Experience the taste we talk about. Visit us today!'}
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-burger-red text-burger-white font-bold rounded-xl hover:bg-burger-red/80 transition-colors"
          >
            {language === 'bs' ? 'Kontaktirajte nas' : 'Contact us'}
          </Link>
        </motion.div>
      </div>

      {/* Custom Styles for Article Content */}
      <style>{`
        .prose h2 {
          color: #FFD700;
          font-size: 1.75rem;
          font-weight: 900;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose strong {
          color: #FF6B35;
        }
      `}</style>
    </section>
  );
};

export default BlogPostPage;
