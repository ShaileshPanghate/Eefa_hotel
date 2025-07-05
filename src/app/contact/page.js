'use client';

import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800 text-[14px]">
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/30">
          <h1 className="text-white text-3xl md:text-4xl font-light text-center">
            Contact
          </h1>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light mb-1">Get In Touch</h2>
              <div className="w-12 h-[2px] bg-blue-900" />
            </div>

            <div>
              <div className="bg-blue-900 text-white px-3 py-2 uppercase text-xs tracking-wider">
                Airports & Stations
              </div>
              <div className="divide-y divide-gray-200 border border-gray-200">
                <div className="px-3 py-2 flex justify-between">
                  <p>Hubli Airport to Hotel Eefa</p>
                  <p className="font-semibold">99 km</p>
                </div>
                <div className="px-3 py-2 bg-gray-50 flex justify-between">
                  <p>Belgaum Airport to Hotel Eefa</p>
                  <p className="font-semibold">16 km</p>
                </div>
                <div className="px-3 py-2 flex justify-between">
                  <p>Belgaum Railway Station to Hotel Eefa</p>
                  <p className="font-semibold">2 km</p>
                </div>
                <div className="px-3 py-2 bg-gray-50">
                  <p>Belgaum Central Bus Stand to Hotel Eefa</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-xs">Your Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="block mb-1 text-xs">Your Email <span className="text-red-500">*</span></label>
                <input type="email" className="w-full border border-gray-300 px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="block mb-1 text-xs">Subject</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block mb-1 text-xs">Your Message <span className="text-red-500">*</span></label>
                <textarea rows={4} className="w-full border border-gray-300 px-3 py-2 text-sm" required></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-4 py-2 text-sm">Send</button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light mb-1">Contact Details</h2>
              <div className="w-12 h-[2px] bg-blue-900 mb-4" />
              <ul className="text-sm divide-y divide-gray-200">
                <li className="flex gap-2 items-start pb-3">
                  <span className="text-base">📍</span>
                  Hotel Eefa, 3935 Club Road, Belgaum-590001, India
                </li>
                <li className="flex gap-2 items-center py-3">
                  <span className="text-base">📞</span>
                  +91 831 2498777
                </li>
                <li className="flex gap-2 items-center pt-3">
                  <span className="text-base">✉️</span>
                  resv@eefabelgaum.com
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-light mb-1">Social Media</h2>
              <div className="w-12 h-[2px] bg-blue-900 mb-2" />
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:text-blue-900 transition"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-900 transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-blue-900 transition"><FaPinterestP /></a>
                <a href="#" className="hover:text-blue-900 transition"><FaTwitter /></a>
                <a href="#" className="hover:text-blue-900 transition"><FaYoutube /></a>
              </div>
            </div>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.3865245866526!2d74.5084238750956!3d15.850936145788824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66a3562c49a1%3A0xa2ebc12ef90e2552!2sHotel%20Eefa!5e0!3m2!1sen!2sin!4v1622983531690!5m2!1sen!2sin"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
