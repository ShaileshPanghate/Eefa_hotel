'use client';

import { useState } from 'react';

const images = Array.from({ length: 50 }, (_, i) => `/gallery${i + 1}.jpg`); // gallery1.jpg to gallery20.jpg

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const showNext = () => setCurrentIndex((currentIndex + 1) % images.length);
  const showPrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            Gallery
          </h1>
        </div>
      </section>

      <section className="w-full px-10 md:px-32 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="cursor-pointer rounded shadow-md hover:opacity-80 transition duration-200"
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-xl"
            onClick={closeImage}
          >
            &#x2715;
          </button>

          <button
            className="absolute left-5 text-white text-3xl"
            onClick={() => {
              showPrev();
              setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
            }}
          >
            &#10094;
          </button>

          <img src={selectedImage} alt="Preview" className="max-h-[90vh] max-w-[90vw] rounded" />

          <button
            className="absolute right-5 text-white text-3xl"
            onClick={() => {
              showNext();
              setSelectedImage(images[(currentIndex + 1) % images.length]);
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
