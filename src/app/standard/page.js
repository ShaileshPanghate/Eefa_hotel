'use client';

import { useState } from 'react';
import {
  FaBed, FaTv, FaWifi, FaUtensils, FaSwimmer, FaCoffee,
  FaShower, FaFan, FaLock, FaSnowflake, FaPhone, FaChair
} from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const gallery = [
  '/dining1.jpg',
  '/rooms/standard2.jpg',
  '/rooms/standard3.jpg',
];

export default function StandardRoomPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % gallery.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  const toggleTerms = () => setShowTerms(!showTerms);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            Standard Room
          </h1>
        </div>
      </section>

      {/* Main Image with Arrows */}
      <section className="max-w-5xl mx-auto px-6 py-10 relative">
        <div className="relative">
          <img
            src={gallery[currentIndex]}
            alt="Standard Room"
            className="w-full h-auto rounded-md shadow-md"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Room Description with Icons */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b-2 border-blue-900 w-fit">
          Room Description
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px] font-light max-w-3xl mb-6">
          The attractively-equipped Standard rooms are beautifully decorated with double beds and twin beds and are equipped with all the comforts that are ideal for both business or leisure travellers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-gray-700">
  <div className="flex items-center gap-2">
    <FaBed className="text-blue-900" />
    <span>Double / Twin Beds</span>
  </div>
  <div className="flex items-center gap-2">
    <FaTv className="text-blue-900" />
    <span>Flat-screen TV</span>
  </div>
  <div className="flex items-center gap-2">
    <FaWifi className="text-blue-900" />
    <span>High-Speed Wi-Fi</span>
  </div>
  <div className="flex items-center gap-2">
    <FaUtensils className="text-blue-900" />
    <span>Room Service</span>
  </div>
  <div className="flex items-center gap-2">
    <FaSwimmer className="text-blue-900" />
    <span>Access to Swimming Pool</span>
  </div>
  <div className="flex items-center gap-2">
    <FaCoffee className="text-blue-900" />
    <span>Coffee/Tea Maker</span>
  </div>
  <div className="flex items-center gap-2">
    <FaShower className="text-blue-900" />
    <span>Ensuite Bathroom</span>
  </div>
  <div className="flex items-center gap-2">
    <FaFan className="text-blue-900" />
    <span>Air Conditioning</span>
  </div>
  <div className="flex items-center gap-2">
    <FaLock className="text-blue-900" />
    <span>Electronic Safe</span>
  </div>
  <div className="flex items-center gap-2">
    <FaSnowflake className="text-blue-900" />
    <span>Mini Refrigerator</span>
  </div>
  <div className="flex items-center gap-2">
    <FaPhone className="text-blue-900" />
    <span>Intercom Facility</span>
  </div>
  <div className="flex items-center gap-2">
    <FaChair className="text-blue-900" />
    <span>Comfortable Work Desk</span>
  </div>
</div>

      </section>

      {/* Photo Gallery */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b-2 border-blue-900 w-fit">
          Photo Gallery
        </h2>
        <div className="flex flex-wrap gap-4">
          {gallery.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Standard ${idx}`}
              className={`w-[160px] h-auto rounded cursor-pointer border transition duration-300 hover:opacity-80 ${
                gallery[currentIndex] === src ? 'border-blue-900' : 'border-gray-200'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b-2 border-blue-900 w-fit">
          Cancellation Policy
        </h2>

        <div
          className="flex items-center gap-2 cursor-pointer text-blue-900 font-semibold mb-4"
          onClick={toggleTerms}
        >
          {showTerms ? <FaMinus /> : <FaPlus />}
          <span>Terms & Conditions</span>
        </div>

        {showTerms && (
          <div className="text-sm text-gray-600 font-light space-y-2">
            <p>1. Tax is extra and is subject to change as per government policy.</p>
            <p>2. All no shows will be charged a full retention.</p>
            <p>3. 100 % Advance should be given for blocking of rooms.</p>
            <p>4. Children above 5 Years will be charged extra.</p>
            <p>5. The above rates are subject to change without prior notice.</p>
            <p>6. This tariff is not applicable for Diwali, Christmas/ New Year, Holi and long weekends.</p>
            <p>7. Any no shows or cancellations will call for a strict one night retention policy.</p>
            <p>8. Buffet Breakfast will be served at Appetite coffee shop and it is included in the room tariff. (No Extra Charges)</p>
            <p>
              In any given circumstances to avoid retention, Cancellation Beyond on 48 hrs 100 % chargeable.
              The cut off period to release the reservation 48hrs prior the arrival.
            </p>
            <p>
              Full Advance will be taken at the time of arrival.
              FACILITIES AVAILABLE centrally air conditioned well appointed room, Coffee Shop, Conference Facility, Internet Access, Health Club.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
