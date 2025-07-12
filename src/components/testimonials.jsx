'use client';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    message:
      'Ambient and enough parking space. Food is good and yet has scope for improvement. North Indian food and South Indian food ate served well in good portion sizes. Got to taste continental here.',
    name: 'Dr Siddharth Hebbalkar',
    org: 'Daipher Life',
  },
  {
    message:
      'Excellent service and amazing ambience. The rooms were clean and spacious. Truly a memorable stay!',
    name: 'Sneha Iyer',
    org: 'Healthcare Pvt Ltd',
  },
  {
    message:
      'Perfect for business stays. The food and conference rooms were just what we needed. Would recommend!',
    name: 'Rahul Menon',
    org: 'BizMeet Corp',
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { message, name, org } = testimonials[index];

  return (
    <section className="relative bg-black/80 text-white py-16">
      {/* Background Image */}
      <Image
        src="/36.jpg"
        alt="Testimonial Background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-30"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">OUR CLIENT'S SAY</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-6" />

        <div className="flex items-center justify-center text-blue-500 mb-4">
          <Quote className="w-8 h-8 mr-2" />
          <p className="text-lg italic text-white max-w-3xl">{message}</p>
          <Quote className="w-8 h-8 ml-2 rotate-180" />
        </div>

        <p className="font-medium text-white mt-4">
          {name} – <span className="text-sm font-light">{org}</span>
        </p>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-white' : 'bg-white/40'
              } transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
