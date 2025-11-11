import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=800&fit=crop', span: 'row-span-2' },
    { id: 2, url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop', span: '' },
    { id: 3, url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop', span: '' },
    { id: 4, url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=600&fit=crop', span: 'row-span-2' },
    { id: 5, url: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop', span: '' },
    { id: 6, url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=800&fit=crop', span: 'row-span-2' },
    { id: 7, url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop', span: '' },
    { id: 8, url: 'https://images.unsplash.com/photo-1585238341710-4a2db91c4b2e?w=600&h=400&fit=crop', span: '' },
    { id: 9, url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=600&fit=crop', span: '' },
    { id: 10, url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=800&fit=crop', span: 'row-span-2' },
    { id: 11, url: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=600&h=400&fit=crop', span: '' },
    { id: 12, url: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop', span: '' },
  ];

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            Galerija
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
              onClick={() => setSelectedImage(image)}
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-burger-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 bg-burger-red/90 p-3 rounded-full text-burger-white hover:bg-burger-red transition-colors"
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.url}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
