'use client';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const images = [
  { src: '/ban.jpg', caption: 'Welcome To Eefa Belgaum' },
  { src: '/24.jpg', caption: 'Luxury Redefined' },
  { src: '/50.jpg', caption: 'Experience Royal Comfort' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <Image
        src={images[current].src}
        alt="slider"
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-700"
        priority
      />

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 bg-black/40 px-6 py-3 rounded text-white max-w-[90%] text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">{images[current].caption}</h1>
      </div>

      {/* Navigation */}
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
