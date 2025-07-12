'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
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
            PRESIDENTIAL ROOMS
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
          The richly-appointed integrated presidential suite is elegantly decorated with one bedroom and a living room, equipped with superior amenities.
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
      {/* Price Comparison Section */}
<section className="max-w-5xl mx-auto px-6 pb-16">
  <h2 className="text-xl md:text-2xl font-semibold mb-6 border-b-2 border-blue-900 w-fit">
    Presidential Room Price Comparison
  </h2>

  {/* Direct Booking */}
  <div className="bg-green-50 border-l-8 border-green-600 rounded-lg p-6 shadow-md mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h3 className="text-2xl font-bold text-green-800 mb-1">Book Direct & Save</h3>
      <p className="text-gray-800 text-lg">
        All-Inclusive Price: <span className="text-3xl text-green-900 font-extrabold">₹2,800</span>
      </p>
      <p className="text-sm text-gray-600 italic mt-1">
        Includes breakfast · Taxes · No hidden fees
      </p>
    </div>
    <a
      href="https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Deluxe%20Room%20directly%20at%20Hotel%20Eefa."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-base shadow flex items-center gap-2 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.537 4.062 1.486 5.782L0 24l6.408-1.71A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.991 17.124c-.251.704-1.461 1.382-2.016 1.47-.537.084-1.192.119-1.933-.134-.445-.147-1.007-.329-1.727-.683-3.037-1.508-5.027-4.946-5.187-5.182-.152-.236-1.24-1.649-1.24-3.15 0-1.502.784-2.247 1.06-2.555.276-.309.604-.386.806-.386.202 0 .403.002.58.01.185.009.435-.07.681.518.27.649.915 2.236.996 2.398.081.161.135.352.027.567-.108.215-.162.352-.319.538-.158.185-.334.413-.477.555-.158.157-.322.329-.138.646.185.317.823 1.357 1.763 2.197 1.213 1.104 2.231 1.448 2.548 1.611.317.162.5.135.687-.081.187-.216.776-.902.983-1.213.207-.31.416-.257.696-.162.279.095 1.76.83 2.063.981.304.15.507.225.58.353.073.128.073.742-.179 1.446z" />
      </svg>
      Book on WhatsApp
    </a>
  </div>

  {/* Third-Party Comparisons */}
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

  
  <a
    href="https://www.makemytrip.com/hotels/hotel_eefa-details-belgaum.html"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-red-50 border border-red-300 rounded-lg p-4 shadow-sm transition-transform hover:scale-[1.02]"
  >
    <h3 className="text-lg font-semibold text-red-800 mb-1">MakeMyTrip</h3>
    <p className="text-sm text-gray-700">₹3,305 + ₹731 taxes</p>
    <p className="font-semibold text-gray-900 mt-1">Total: ₹4,036</p>
  </a> 

  {/* Goibibo */}
  <a
    href="https://www.goibibo.com/hotels/eefa-hotel-in-belgaum-7362672571061818250"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-sm transition-transform hover:scale-[1.02]"
  >
    <h3 className="text-lg font-semibold text-yellow-800 mb-1">Goibibo</h3>
    <p className="text-sm text-gray-700">₹5,615 + ₹1,330 taxes</p>
    <p className="font-semibold text-gray-900 mt-1">Total: ₹6,945</p>
  </a>

  {/* Agoda */}
  <a
    href="https://www.agoda.com/hotel-eefa_5/hotel/belgaum-in.html"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-indigo-50 border border-indigo-300 rounded-lg p-4 shadow-sm transition-transform hover:scale-[1.02]"
  >
    <h3 className="text-lg font-semibold text-indigo-800 mb-1">Agoda</h3>
    <p className="text-sm text-gray-700">
      ₹4,118 <span className="italic text-gray-500">(before taxes)</span>
    </p>
    <p className="font-semibold text-gray-900 mt-1">Est. Total: ₹4,800+</p>
  </a>
  
</div>
</section>

      <Footer/>
    </div>
  );
}
