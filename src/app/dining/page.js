'use client';

import { useState } from 'react';

const images = [
  '/dining1.jpg',
  '/dining2.jpg',
  '/dining1.jpg',
  '/dining1.jpg',
  '/dining1.jpg',
  '/dining1.jpg',
  '/dining1.jpg',
  '/dining1.jpg',
];

export default function DiningPage() {
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
            Dining
          </h1>
        </div>
      </section>

      <section className="w-full px-4 md:px-20 pt-16 pb-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
    <div className="md:w-1/2 text-[19px] leading-relaxed font-light">
      <h2 className="text-xl font-semibold mb-4">APPETITE - THE COFFEE SHOP</h2>
      <p>
        Apetite is the best multi cuisine restaurant in the Belgaum city that meets the high culinary
        standards, and assuring a memorable dining experience. In the hands of honoured chefs,
        food becomes a presentation of the national and regional culture. This multi-cuisine restaurant
        blends the best culinary delights with the finest ambience. The comfortable seating arrangement
        and stylish interiors make your stay as pleasant and relaxing as possible.
      </p>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src="/coffee.png" alt="Coffee" className="w-[480px]" />
    </div>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 px-4">
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Dining ${index + 1}`}
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