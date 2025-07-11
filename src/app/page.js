"use client"
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Star, Quote } from 'lucide-react';
import TestimonialsSlider from '@/components/testimonials';
import NearbyAttractions from '@/components/NearbyAttractions';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';

export default function Home() {
  return (
    <div className="">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">WELCOME TO HOTEL EEFA</h2>
            <div className="w-12 h-1 bg-purple-700 my-4"></div>
            <h3 className="text-xl font-medium text-gray-600 mb-4">
              A Stay to Remember, Every Time
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Hotel Eefa redefines the concept of an economy hotel. Hotel Eefa is a Luxury Hotel in Belgaum with intelligent amenities and essential services which speak to the needs of the savvy, budget-conscious traveller who seeks quality and affordability.
            </p>
            <Link
              href="#"
              className="inline-block bg-purple-700 text-white px-6 py-3 rounded shadow hover:bg-purple-800 transition"
            >
              Read More →
            </Link>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/7.jpg" // Make sure the image is placed in the public folder
              alt="Hotel Eefa"
              width={700}
              height={500}
              className="shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row bg-black text-white h-96">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full flex items-center px-10 py-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">APPETITE - THE COFFEE SHOP</h2>
            <div className="h-1 w-12 bg-blue-600 mb-6"></div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Appetite is the best multi cuisine restaurant in the Belgaum city that meets the high culinary standards,
              and assuring a memorable dining experience. In the hands of honoured chefs, food becomes a presentation of the
              national and regional culture. This multi-cuisine restaurant blends the best culinary delights with the finest ambience.
              The comfortable seating arrangement and stylish interiors make your stay as pleasant and relaxing as possible.
            </p>
            <Link href='/'>
              
              <button className='inline-flex items-center px-6 py-3 bg-blue-800 hover:bg-blue-900 transition rounded text-white font-medium w-fit'>Read More <span className="ml-2">➤</span></button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full relative h-[400px] lg:h-auto">
          <img
            src="/images/5-1.jpg"
            alt="Appetite Restaurant"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/appetite-logo.png"
            alt="Appetite Logo"
            className="absolute top-5 right-5 w-36 shadow-lg bg-white p-2"
          />
        </div>
      </section>

      <Amenities />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* <!-- Left Content --> */}
          <div className="lg:w-1/2 bg-gray-50 p-6 rounded shadow">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Being away from home does not mean foregoing your fitness regime. Hotel Eefa Belgaum provides you an
              opportunity to stay fit at one of the best gyms in town with the latest Life Fitness equipment and dynamic
              selection of workout programs that cater to fitness-conscious travelers.
            </p>
            <p className="font-semibold text-gray-900">Fitness Centre – 24 Hours</p>
          </div>

          {/* <!-- Right Image --> */}
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Fitness Center</h2>
            <img src="/images/gym-new.jpg" alt="Fitness Center" className=" shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* <!-- Left Image --> */}
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pool</h2>
            <img src="/images/pool.jpg" alt="Swimming Pool" className=" shadow-lg w-full h-auto object-cover" />
          </div>

          {/* <!-- Right Content --> */}
          <div className="lg:w-1/2 bg-gray-50 p-6 rounded shadow">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Swimming pool at Hotel Eefa Belgaum allows you to stay in shape and relax. With the attractive views
              through a wall of floor-to-ceiling windows, the poolside area enjoys natural daylight, and provides a
              peaceful setting with tables and chairs, relaxing lounges, offering swimmers a comfortable place to rest or
              recline before and after their swim.
            </p>
            <p className="font-semibold text-gray-900">Pool Timing – 7 AM to 7 PM</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">MEETINGS & EVENTS</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-10"></div>

        {/* Image Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/meeting-1.jpg"
              alt="Meeting Setup"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/meeting-2.jpg"
              alt="Event Setup"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Google Map Embed */}
          <div className="w-full h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1719173985146!2d74.51194917500522!3d15.850563084831406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66fe310e1fdb%3A0xe8888b5a64aa3c3!2sHotel%20Eefa!5e0!3m2!1sen!2sin!4v1720079294977!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-md border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-800" />
              <p className="text-gray-800">
                Hotel Eefa, 3935 Club Road, Belgaum - 590001, India
              </p>
            </div>
            <hr />
            <div className="flex items-center gap-4">
              <Phone className="text-blue-800" />
              <p className="text-gray-800">+91 831 2498777</p>
            </div>
            <hr />
            <div className="flex items-center gap-4">
              <Mail className="text-blue-800" />
              <p className="text-gray-800">resv@eefabelgaum.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        {/* Grid: Images Left, Review Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - 4 Images (2x2 grid) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-0">
            <Image
              src="/images/room-1.jpg"
              alt="Room 1"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <Image
              src="/images/room-2.jpg"
              alt="Room 2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <Image
              src="/images/room-3.jpg"
              alt="Room 3"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <Image
              src="/images/room-4.jpg"
              alt="Room 4"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Review */}
          <div className="bg-[#4f4082] text-white flex items-center justify-center p-6">
            <div className="bg-white text-black rounded-md p-6 w-full max-w-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Reviews</h3>
              <div className="flex justify-center mb-3 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className="italic text-lg mb-4">
                “North Indian food and South Indian food ate served well in good portion sizes.”
              </blockquote>
              <p className="font-medium">Dr Siddharth Hebbalkar, Daipher Life</p>
              <a href="#" className="text-sm text-blue-600 underline mt-2 inline-block">READ MORE</a>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center py-6">
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded transition"
          >
            View More
          </a>
        </div>
      </section>

      <TestimonialsSlider />
      <NearbyAttractions />
      <Footer />
    </div>
  );
}
