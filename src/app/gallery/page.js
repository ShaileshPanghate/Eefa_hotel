'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
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
  // add more as needed
];

export default function GalleryPage() {
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

  return (
    <div className="bg-white text-gray-800 font-[Poppins,sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full px-6 md:px-20 pt-12 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="aspect-[4/3] object-cover cursor-pointer rounded-md border border-gray-200 shadow hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Modal View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-all">
          <button
            className="absolute top-4 right-6 text-white text-2xl hover:scale-110 transition"
            onClick={closeImage}
          >
            &#x2715;
          </button>

          <button
            className="absolute left-6 text-white text-4xl hover:scale-125 transition"
            onClick={showPrev}
          >
            &#10094;
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-md border border-white shadow-xl"
            loading="eager"
          />

          <button
            className="absolute right-6 text-white text-4xl hover:scale-125 transition"
            onClick={showNext}
          >
            &#10095;
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
}
