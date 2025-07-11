'use client';

import { FaConciergeBell, FaWifi, FaDumbbell, FaBriefcase, FaSwimmingPool, FaSpa } from 'react-icons/fa';
import Footer from '@/components/Footer';
export default function AmenitiesPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            AMENITIES
          </h1>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12 text-center text-gray-500">
          <div>
            <FaConciergeBell size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">Room Service</p>
          </div>
          <div>
            <FaWifi size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">WiFi</p>
          </div>
          <div>
            <FaDumbbell size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">Gym Center</p>
          </div>
          <div>
            <FaBriefcase size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">Business</p>
          </div>
          <div>
            <FaSwimmingPool size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">Pool</p>
          </div>
          <div>
            <FaSpa size={40} className="mx-auto mb-2" />
            <p className="text-xs tracking-wider uppercase">Spa</p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
