import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const translations = {
  bs: {
    title: 'GALERIJA',
  },
  en: {
    title: 'GALLERY',
  }
};

const Gallery = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[language];

  const images = [
    { id: 1, url: '/galerijaburgeri/DSC00669.JPG', span: 'row-span-2' },
    { id: 2, url: '/galerijaburgeri/DSC03403.JPG', span: '' },
    { id: 3, url: '/galerijaburgeri/DSC04017.JPG', span: '' },
    { id: 4, url: '/galerijaburgeri/DSC04031.JPG', span: 'row-span-2' },
    { id: 5, url: '/galerijaburgeri/DSC04250.JPG', span: '' },
    { id: 6, url: '/galerijaburgeri/DSC04298.JPG', span: 'row-span-2' },
    { id: 7, url: '/galerijaburgeri/DSC04335.JPG', span: '' },
    { id: 8, url: '/galerijaburgeri/DSC04357.JPG', span: '' },
    { id: 9, url: '/galerijaburgeri/DSC05354.JPG', span: '' },
    { id: 10, url: '/galerijaburgeri/DSC05958.JPG', span: 'row-span-2' },
    { id: 11, url: '/galerijaburgeri/DSC05963.JPG', span: '' },
    { id: 12, url: '/galerijaburgeri/DSC06098.JPG', span: '' },
    { id: 13, url: '/galerijaburgeri/DSC06103.JPG', span: '' },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowRight') nextImage(e);
    if (e.key === 'ArrowLeft') prevImage(e);
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <section 
      id="gallery" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
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
            className="h-1.5 bg-gradient-to-r from-burger-red via-burger-orange to-burger-yellow mx-auto rounded-full"
          />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
              onClick={() => openLightbox(index)}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={image.url}
                alt={`Burger ${image.id}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burger-black via-burger-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="bg-burger-red/90 backdrop-blur-sm p-4 rounded-full"
                >
                  <ZoomIn size={32} className="text-burger-white" />
                </motion.div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-burger-red rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-burger-red/90 p-3 rounded-full text-burger-white hover:bg-burger-red transition-colors z-10 shadow-2xl"
            >
              <X size={28} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-burger-red/90 p-3 rounded-full text-burger-white hover:bg-burger-red transition-colors shadow-2xl hidden md:flex"
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-burger-red/90 p-3 rounded-full text-burger-white hover:bg-burger-red transition-colors shadow-2xl hidden md:flex"
            >
              <ChevronRight size={32} />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-burger-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-burger-white text-sm font-bold">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main Image */}
            <motion.img
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.url}
              alt={`Burger ${selectedImage.id}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Mobile Swipe Indicators */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
              <button
                onClick={prevImage}
                className="bg-burger-red/90 p-2 rounded-full text-burger-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-burger-red/90 p-2 rounded-full text-burger-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
