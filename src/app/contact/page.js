'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const text = `New Message from Website:%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

    const whatsappNumber = '918312498777';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="bg-white text-gray-800 text-[14px] font-[Poppins,sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light mb-1">Get In Touch</h2>
              <div className="w-12 h-[2px] bg-blue-900" />
            </div>

            {/* Airports & Stations */}
            <div className="mb-6">
              <div className="bg-blue-900 text-white px-4 py-2 uppercase text-sm font-medium tracking-wide">
                Airports & Stations
              </div>
              <div className="border border-gray-200 divide-y divide-gray-200 text-sm">
                <div className="px-4 py-3 flex justify-between">
                  <div>
                    <div>Hubli Airport</div>
                    <div className="text-gray-600 text-xs">to Hotel Eefa</div>
                  </div>
                  <div className="font-semibold whitespace-nowrap">99 km</div>
                </div>
                <div className="px-4 py-3 bg-gray-50 flex justify-between">
                  <div>
                    <div>Belgaum Airport</div>
                    <div className="text-gray-600 text-xs">to Hotel Eefa</div>
                  </div>
                  <div className="font-semibold whitespace-nowrap">16 km</div>
                </div>
                <div className="px-4 py-3 flex justify-between">
                  <div>
                    <div>Belgaum Railway Station</div>
                    <div className="text-gray-600 text-xs">to Hotel Eefa</div>
                  </div>
                  <div className="font-semibold whitespace-nowrap">2 km</div>
                </div>
                <div className="px-4 py-3 bg-gray-50">
                  <div>
                    <div>Belgaum Central Bus Stand</div>
                    <div className="text-gray-600 text-xs">to Hotel Eefa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-xs">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-xs">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-xs">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-4 py-2 text-sm">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-light mb-1">Contact Details</h2>
              <div className="w-12 h-[2px] bg-blue-900 mb-4" />
              <ul className="text-sm divide-y divide-gray-200">
                <li className="flex gap-3 items-start pb-3">
                  <FaMapMarkerAlt className="text-blue-900 mt-[3px]" />
                  Hotel Eefa, 3935 Club Road, Belgaum-590001, India
                </li>
                <li className="flex gap-3 items-center py-3">
                  <FaPhone className="text-blue-900" />
                  <a href="tel:+918312498777" className="hover:underline">
                    +91 831 2498777
                  </a>
                </li>
                <li className="flex gap-3 items-center pt-3">
                  <FaEnvelope className="text-blue-900" />
                  <a href="mailto:resv@eefabelgaum.com" className="hover:underline">
                    resv@eefabelgaum.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-xl font-light mb-1">Social Media</h2>
              <div className="w-12 h-[2px] bg-blue-900 mb-2" />
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:text-blue-900 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-blue-900 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blue-900 transition">
                  <FaPinterestP />
                </a>
                <a href="#" className="hover:text-blue-900 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-blue-900 transition">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div>
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
        </div>
      </section>
      <Footer/>
    </div>
  );
}
