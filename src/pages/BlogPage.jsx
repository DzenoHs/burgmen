import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const translations = {
  bs: {
    title: 'BLOG & VIJESTI',
    subtitle: 'Najnovije iz našeg svijeta burgera',
    searchPlaceholder: 'Pretraži članke...',
    allCategories: 'Sve kategorije',
    categories: {
      behindScenes: 'Iza kulisa',
    },
    readMore: 'Pročitaj više',
    minuteRead: 'min čitanja',
    featuredPost: 'Istaknuti članak',
  },
  en: {
    title: 'BLOG & NEWS',
    subtitle: 'Latest from our burger world',
    searchPlaceholder: 'Search articles...',
    allCategories: 'All categories',
    categories: {
      behindScenes: 'Behind the Scenes',
    },
    readMore: 'Read more',
    minuteRead: 'min read',
    featuredPost: 'Featured Post',
  }
};

const blogPosts = [
  {
    id: 1,
    title: {
      bs: 'Kako nastaje savršeni burger: Iza kulisa BURGMEN kuhinje',
      en: 'How the perfect burger is made: Behind BURGMEN kitchen scenes'
    },
    excerpt: {
      bs: 'Otkrijte tajne naše kuhinje. Od odabira mesa do finalnog serviranja - sve što trebate znati o pripremi savršenog burgera.',
      en: 'Discover the secrets of our kitchen. From meat selection to final serving - everything you need to know about making the perfect burger.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-20',
    readTime: 5,
    featured: true,
  },
  {
    id: 2,
    title: {
      bs: 'Odabir mesa: Temelj savršenog burgera',
      en: 'Meat Selection: Foundation of the Perfect Burger'
    },
    excerpt: {
      bs: '100% goveđe meso, 80/20 omjer masti i mesa, svježe svaki dan. Saznajte zašto je kvalitet mesa najvažniji korak.',
      en: '100% beef, 80/20 fat to meat ratio, fresh every day. Learn why meat quality is the most important step.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-18',
    readTime: 4,
    featured: false,
  },
  {
    id: 3,
    title: {
      bs: 'Priprema pljeskavice: Umjetnost oblikovanja',
      en: 'Patty Preparation: The Art of Shaping'
    },
    excerpt: {
      bs: 'Ručno oblikovanje, precizno 200g, nikada ne stiskamo previše. Otkrijte tehnike profesionalne pripreme.',
      en: 'Hand-shaped, precisely 200g, never over-pressed. Discover professional preparation techniques.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-15',
    readTime: 3,
    featured: false,
  },
  {
    id: 4,
    title: {
      bs: 'Pečenje na grillu: Savršena temperatura',
      en: 'Grilling: Perfect Temperature'
    },
    excerpt: {
      bs: '180°C, Maillard reakcija, zlatna kora spolja - sočnost unutra. Naučite tajne profesionalnog grill majstora.',
      en: '180°C, Maillard reaction, golden crust outside - juiciness inside. Learn the secrets of professional grill masters.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-12',
    readTime: 4,
    featured: false,
  },
  {
    id: 5,
    title: {
      bs: 'Tajni sastojci: Naši sopstveni začini',
      en: 'Secret Ingredients: Our Own Spices'
    },
    excerpt: {
      bs: '12 različitih začina, signature burger sos zreo 48 sati. Otkrijte šta čini naše burgere jedinstvenim.',
      en: '12 different spices, signature burger sauce aged 48 hours. Discover what makes our burgers unique.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-10',
    readTime: 5,
    featured: false,
  },
  {
    id: 6,
    title: {
      bs: 'Svježe povrće i kruh: Kvalitet do kraja',
      en: 'Fresh Vegetables and Bread: Quality to the End'
    },
    excerpt: {
      bs: 'Povrće isječeno svako jutro, kruh pečen lokalno po našem receptu. Svaki detalj je važan.',
      en: 'Vegetables cut every morning, bread baked locally by our recipe. Every detail matters.'
    },
    category: 'behindScenes',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=600&fit=crop',
    author: 'BURGMEN Tim',
    date: '2025-11-08',
    readTime: 3,
    featured: false,
  },
];

const BlogPage = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = translations[language];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

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

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-burger-white/50" size={20} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white placeholder-burger-white/50 focus:outline-none focus:border-burger-red transition-all"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-burger-black/50 border border-burger-red/30 rounded-xl text-burger-white focus:outline-none focus:border-burger-red transition-all cursor-pointer"
            >
              <option value="all">{t.allCategories}</option>
              <option value="behindScenes">{t.categories.behindScenes}</option>
            </select>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-burger-red/20 to-burger-orange/20 rounded-2xl p-1 overflow-hidden group">
              {/* Featured Badge */}
              <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-burger-red rounded-full flex items-center gap-2">
                <TrendingUp size={16} />
                <span className="text-sm font-bold uppercase">{t.featuredPost}</span>
              </div>

              <div className="bg-burger-black/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                <Link to={`/blog/${featuredPost.id}`}>
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title[language]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-burger-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-burger-orange/20 border border-burger-orange rounded-full text-sm text-burger-orange mb-4 w-fit">
                        {t.categories[featuredPost.category]}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-burger-yellow mb-4 group-hover:text-burger-red transition-colors">
                        {featuredPost.title[language]}
                      </h2>
                      <p className="text-burger-white/80 mb-6 line-clamp-3">
                        {featuredPost.excerpt[language]}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-burger-white/60 mb-6">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{featuredPost.readTime} {t.minuteRead}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-burger-red font-bold group-hover:gap-4 transition-all">
                        {t.readMore}
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`}>
                <div className="bg-burger-black/50 border border-burger-red/20 rounded-xl overflow-hidden group hover:border-burger-red transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-burger-black/80 backdrop-blur-sm rounded-full text-xs text-burger-orange border border-burger-orange/50">
                      {t.categories[post.category]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-black text-burger-yellow mb-3 group-hover:text-burger-red transition-colors line-clamp-2">
                      {post.title[language]}
                    </h3>
                    <p className="text-burger-white/70 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt[language]}
                    </p>
                    <div className="flex items-center justify-between text-xs text-burger-white/50 pt-4 border-t border-burger-red/10">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime} {t.minuteRead}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-burger-white/50">
              {language === 'bs' ? 'Nema rezultata pretrage' : 'No search results'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
