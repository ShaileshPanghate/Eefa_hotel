'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';

const images = [
  "/dining1.jpg",
  "/dining1.jpg", 
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
  "/dining1.jpg",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const showNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 10 } }
  };

  const modalImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
      >
        <Image
          src="/slide-2.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-10">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-white text-4xl md:text-6xl font-light tracking-wider"
          >
            GALLERY
          </motion.h1>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition duration-200"
                onClick={() => openImage(index)}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-gray-300 transition"
              onClick={closeImage}
            >
              &times;
            </button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-6 text-white text-4xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              &larr;
            </motion.button>

            <motion.div
              variants={modalImage}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl object-contain max-h-[90vh]"
                priority
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-6 text-white text-4xl z-50"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              &rarr;
            </motion.button>

            <div className="absolute bottom-6 text-white text-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;