<<<<<<< HEAD
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Star, Quote } from 'lucide-react';
import TestimonialsSlider from '@/components/testimonials';
import NearbyAttractions from '@/components/NearbyAttractions';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';
=======
'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaUtensils, FaWifi, FaSwimmingPool, FaConciergeBell, FaDumbbell, FaBusinessTime, FaTshirt, FaDoorClosed, FaSnowflake } from 'react-icons/fa';
import { FaThumbtack } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Link from 'next/link';


const images = [
  { src: '/ban.jpg', caption: 'Welcome To Eefa Belgaum' },
  { src: '/24.jpg', caption: 'Luxury Redefined' },
  { src: '/50.jpg', caption: 'Experience Royal Comfort' },
];
const amenitiesData = {
    "Hotel Features": [
      "58 spacious guest rooms",
      "Complimentary Wi-Fi",
      "Restaurant and Bar",
      "Business Centre",
      "Indoor pool",
      "3 spacious banquet facility",
      "Free parking",
      "Fitness centre",
      "Airport transfer",
    ],
    Services: [
      "Laundry and dry cleaning services",
      "24 hour In-room dining facility",
      "Complimentary scanning service",
      "Complimentary fax service",
      "Complimentary luggage room facility",
      "Doctor on call",
    ],
    "Room Amenities": [
      "Complimentary Wi-Fi",
      "Complimentary mini bar",
      "Tea/coffee maker",
      "2 bottles of packaged drinking water replenished everyday",
      "Spacious workspace",
      "Complimentary buffet breakfast",
      "24 hour In-room dining facility",
    ],
    Bathroom: [
      "Luxury bathroom toiletries",
      "100% cotton towels",
      "Bathrobes on request",
    ],
  };

const destinations = [
  {
    name: 'SUVARNA SOUDHA',
    image: '/suvarna.png',
    title: 'Suvarna Soudha (10 Kms)',
    description:
      'Suvarna Vidhana Soudha is a massive white monument and legislative building in Belgaum, built to mark the importance of Karnataka’s second capital. Its architecture resembles the Vidhana Soudha of Bangalore and is surrounded by landscaped gardens.',
  },
  {
    name: 'GOKAK FALLS',
    image: '/gokak.png',
    title: 'Gokak Falls (65 Kms)',
    description:
      'Gokak Falls, located on the Ghataprabha River in Belgaum district, is known for its rejuvenating beauty. It’s called Belgaum’s mini Niagara. The horseshoe cliff, misty views, and hanging bridge offer a breathtaking experience during monsoon.',
  },
  {
    name: 'HIDKAL DAM',
    image: '/hidkal.png',
    title: 'Hidkal Dam (50 Kms)',
    description:
      'Hidkal Dam, built on the Ghataprabha river, serves as a major irrigation and water supply source. It’s surrounded by calm nature, making it a quiet getaway for visitors.',
  },
  {
    name: 'FATIMA CHURCH',
    image: '/fatima.png',
    title: 'Fatima Church (4 Kms)',
    description:
      'One of Belgaum’s oldest churches, Fatima Church is known for its colonial architecture, peaceful ambiance, and community gatherings.',
  },
  {
    name: 'KAPILESHWAR TEMPLE',
    image: '/kapileshwar.png',
    title: 'Kapileshwar Temple (5 Kms)',
    description:
      'A historic Shiva temple known as the “Kashi of the South.” The temple architecture and religious significance attract many devotees.',
  },
  {
    name: 'PANT BALEKUNDRI SAMADHI',
    image: '/pant.png',
    title: 'Pant Balekundri Samadhi (8 Kms)',
    description:
      'This spiritual site is dedicated to the great saint Pant Maharaj. Peaceful surroundings make it ideal for reflection and prayer.',
  },
];
const testimonials = [
  {
    text: "Ambient and enough parking space. Food is good and yet has scope for improvement. North Indian food and South Indian food are served well in good portion sizes. Got to taste continental here.",
    author: "Dr Siddharth Hebbalkar - Decipher Life",
  },
  {
    text: "Spacious & Big Rooms. 1 Room for 2 guests costs rs4000. 1 Rooms for q guest cost rs 3500. Breakfast is Complimentary. Also have Swimming Pool",
    author: "Ajay SHokeen",
  },
  {
    text: "One of the best Hotels of Belgaum,Its a place where you can do any functions or meeting.Food is too good both veg and non veg.One of the best option in Belgaum, conveniently located, super good food at their appetite restaurant , clean and hygenic property , ample and safe parking and a friendly staff.",
    author: "Samarth Desai",
  },
];

>>>>>>> 471f215a011d33c133fc5c814a1b6160d69a8093

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
   const [activeIndex, setActiveIndex] = useState(1);
   const [showFullAmenities, setShowFullAmenities] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const { text, author } = testimonials[testimonialIndex];

  return (
<<<<<<< HEAD
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
=======
    <main className="bg-white w-full">
      {/* Hero Section - 80% of screen height */}
      <div className="relative w-full h-[80vh] overflow-hidden">
  {/* Clear Full Image Background */}
  <img
    src={images[current].src}
    alt="slider"
    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700"
  />

  {/* Caption at Bottom Center */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 bg-black/40 px-6 py-3 rounded text-white max-w-[90%] text-center">
    <h1 className="text-2xl md:text-4xl font-semibold animate-fade-in">
      {images[current].caption}
    </h1>
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
  >
    <FaChevronLeft size={20} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
  >
    <FaChevronRight size={20} />
  </button>
</div>


      {/* Welcome Section */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-gray-600 font-bold mb-2">WELCOME TO HOTEL EEFA</h2>
          <div className="w-20 h-[2px] bg-black mx-auto md:mx-0 mb-4" />
          <p className="text-xl text-gray-600 mb-6">A Stay to Remember, Every Time</p>
          <p className="text-gray-700 mb-6">
            Hotel Eefa redefines the concept of an economy hotel. Hotel Eefa is a Luxury Hotel in Belgaum
            with intelligent amenities and essential services which speak to the needs of the savvy,
            budget-conscious traveller who seeks quality and affordability.
          </p>
        </div>
        <img
          src="/7.jpg"
          alt="Hotel Eefa Building"
          className="w-full rounded shadow-lg"
        />
      </section>

      {/* Coffee Shop Section */}
      <section className="max-w-[100rem] mx-auto grid md:grid-cols-2">
        {/* Text side - Charcoal */}
        <div className="bg-[#1c1c1c] text-white px-6 py-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">APPETITE – THE COFFEE SHOP</h2>
          <div className="w-16 h-[2px] bg-white mb-4" />
          <p className="text-gray-300 mb-6">
            Appetite is the best multi cuisine restaurant in the Belgaum city that meets the high culinary standards, and assuring a memorable dining experience. In the hands of honoured chefs, food becomes a presentation of the national and regional culture. This multi-cuisine restaurant blends the best culinary delights with the finest ambience. The comfortable seating arrangement and stylish interiors make your stay as pleasant and relaxing as possible.
          </p>
          <Link href="/dining">
            <button className="bg-[#010f40] text-white px-4 py-1.5 rounded text-sm hover:bg-blue-800 transition-all w-fit">
              Read More →
            </button>
          </Link>
        </div>

        {/* Image side - Full Cover */}
        <div className="w-full h-full">
          <img
            src="/image.png"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">FEATURED AMENITIES</h2>
      <div className="w-20 h-[2px] bg-[#010f40] mx-auto mb-10" />

      {/* Conditionally Show Icon Grid or Full List */}
      {!showFullAmenities ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-700">
            <div className="flex flex-col items-center">
              <FaBusinessTime size={40} className="mb-2" />
              <span>BUSINESS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaConciergeBell size={40} className="mb-2" />
              <span>CONCIERGE</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUtensils size={40} className="mb-2" />
              <span>RESTAURANT</span>
            </div>
            <div className="flex flex-col items-center">
              <FaWifi size={40} className="mb-2" />
              <span>WIFI</span>
            </div>
            <div className="flex flex-col items-center">
              <FaSwimmingPool size={40} className="mb-2" />
              <span>POOL</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDumbbell size={40} className="mb-2" />
              <span>GYM CENTER</span>
            </div>
            <div className="flex flex-col items-center">
              <FaTshirt size={40} className="mb-2" />
              <span>LAUNDRY</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDoorClosed size={40} className="mb-2" />
              <span>ROOM SERVICE</span>
            </div>
            <div className="flex flex-col items-center">
              <FaSnowflake size={40} className="mb-2" />
              <span>AC</span>
            </div>
          </div>

          <button
            onClick={() => setShowFullAmenities(true)}
            className="mt-10 bg-[#010f40] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            AMENITIES VIEW ALL
          </button>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-4 gap-8 text-left text-gray-800 mt-10 text-sm sm:text-base">
            {Object.entries(amenitiesData).map(([section, items]) => (
              <div key={section}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{section}</h3>
                <ul className="space-y-2 border-t pt-2">
                  {items.map((item, i) => (
                    <li key={i} className="border-b py-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowFullAmenities(false)}
            className="mt-10 bg-[#0057a3] text-white px-6 py-2 rounded hover:bg-[#003d73] transition"
          >
            CLOSE
          </button>
        </>
      )}
    </section>
      {/* Fitness Center Section */}
<section className="w-full py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-4xl md:text-5xl font-bold text-[#010f40] mb-12 tracking-wide">
      <span className="inline-block border-b-4 border-[#4a3c8c] pb-2">Fitness Center</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Being away from home doesn’t mean you have to skip your workout. Hotel Eefa Belgaum features one of the city's best gyms with top-tier Life Fitness equipment and customizable workout programs tailored for the fitness-focused traveler.
        </p>
        <p className="font-semibold text-gray-800 text-lg">Fitness Centre – Open 24 Hours</p>
      </div>
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src="/gym-new.jpg"
          alt="Fitness Center"
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        />
      </div>
>>>>>>> 471f215a011d33c133fc5c814a1b6160d69a8093
    </div>
  </div>
</section>

{/* Pool Section */}
<section className="w-full py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-4xl md:text-5xl font-bold text-[#010f40] mb-12 tracking-wide">
      <span className="inline-block border-b-4 border-[#4a3c8c] pb-2">Swimming Pool</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src="/pool.jpg"
          alt="Swimming Pool"
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        />
      </div>
      {/* Text */}
      <div className="space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          The serene swimming pool at Hotel Eefa offers not just relaxation but also a refreshing way to stay in shape. Surrounded by floor-to-ceiling windows and stylish loungers, it’s a peaceful oasis to unwind or soak up some natural daylight.
        </p>
        <p className="font-semibold text-gray-800 text-lg">Pool Timing – 7:00 AM to 7:00 PM</p>
      </div>
    </div>
  </div>
</section>
{/*comparison*/}

{/* Room Price Comparison + Direct Booking */}
<section className="max-w-6xl mx-auto px-6 py-16">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-black mb-8 border-b-2 border-gray-300 w-fit">
    Compare Room Prices Across Booking Platforms
  </h2>

  {/* Direct Booking Highlight */}
  <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-8 shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h3 className="text-xl font-semibold text-green-800">Direct Booking (Hotel Eefa)</h3>
      <p className="text-2xl text-green-900 font-bold mt-1">Starting at ₹2,800</p>
      <p className="text-sm text-gray-600 italic">
        Includes breakfast, taxes, and all premium amenities.
      </p>
    </div>
    <a
      href="https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20directly%20at%20Hotel%20Eefa."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded transition shadow"
    >
      Book on WhatsApp
    </a>
  </div>

  {/* Price Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border text-sm sm:text-base text-gray-800">
      <thead>
        <tr className="bg-gray-200 text-black">
          <th className="px-4 py-3 border text-left">Room Type</th>
          <th className="px-4 py-3 border text-left text-red-800">MakeMyTrip</th>
          <th className="px-4 py-3 border text-left text-yellow-800">Goibibo</th>
          <th className="px-4 py-3 border text-left text-indigo-800">Agoda</th>
        </tr>
      </thead>
      <tbody>
        {/* Deluxe */}
        <tr className="bg-red-50">
          <td className="px-4 py-3 border font-medium">Deluxe</td>
          <td className="px-4 py-3 border font-semibold text-red-900">₹3,662</td>
          <td className="px-4 py-3 border font-semibold text-yellow-900">₹3,180</td>
          <td className="px-4 py-3 border font-semibold text-indigo-900">₹4,118</td>
        </tr>
        {/* Standard */}
        <tr className="bg-yellow-50">
          <td className="px-4 py-3 border font-medium">Standard</td>
          <td className="px-4 py-3 border text-red-900">₹4,036</td>
          <td className="px-4 py-3 border text-yellow-900">₹3,884</td>
          <td className="px-4 py-3 border text-indigo-900">₹4,118</td>
        </tr>
        {/* Studio */}
        <tr className="bg-indigo-50">
          <td className="px-4 py-3 border font-medium">Studio</td>
          <td className="px-4 py-3 border text-red-900">₹4,493</td>
          <td className="px-4 py-3 border text-yellow-900">₹3,899</td>
          <td className="px-4 py-3 border text-indigo-900">₹4,480</td>
        </tr>
        {/* Presidential */}
        <tr className="bg-gray-50">
          <td className="px-4 py-3 border font-medium">Presidential</td>
          <td className="px-4 py-3 border text-red-400 italic">—</td>
          <td className="px-4 py-3 border text-yellow-900">₹6,259</td>
          <td className="px-4 py-3 border text-indigo-900">₹6,369</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-500 mt-4 italic">
    * Prices are approximate and may vary by platform. Agoda prices are estimated before taxes.
  </p>
</section>



{/* Meetings & Events Section */}
<section className="py-20 px-4">
  <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">MEETINGS & EVENTS</h2>

  {/* Flip Containers - Two Columns */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
    {/* First Flip Card - Meeting Room */}
    <div className="flip-container group perspective-1000 h-96">
      <div className="flip-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front side - Meeting Image */}
        <div className="absolute w-full h-full backface-hidden rounded shadow overflow-hidden">
          <img 
            src="/meeting.jpg" 
            alt="Meeting Room" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Back side - Meeting Text */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded shadow transform rotate-y-180 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-black mb-4">Meeting Rooms</h3>
          <p className="text-black mb-4">
            Opal offers beautiful spaces with latest video conferencing facility that can comfortably accommodate up to 40 guests in theatre style. Featuring the ultra-modern conference and banqueting facilities, the atmosphere is quite charming and is designed as per the choice and demand of an occasion. Opal is an excellent choice for different business meetings, irrespective of their agenda.
          </p>
          
        </div>
      </div>
    </div>

    {/* Second Flip Card - Banquet Hall */}
    <div className="flip-container group perspective-1000 h-96">
      <div className="flip-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front side - Banquet Image */}
        <div className="absolute w-full h-full backface-hidden rounded shadow overflow-hidden">
          <img 
            src="/banquet.jpg" 
            alt="Banquet Hall" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Back side - Banquet Text */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded shadow transform rotate-y-180 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-black mb-4">Banquet Hall</h3>
          <p className="text-black mb-4">
            The Hotel Eefa houses an extensive beautiful banquet lawn with alluring atmosphere for large banquets that holds up to 350 people amidst lush greenery. Flexibility is our catchword. Our flexible outdoors enhances the beauty of any occasion under the startlit open sky – be it a gala reception or a casual luncheon.
          </p>
          
        </div>
      </div>
    </div>
  </div>

  {/* Map and Review Box */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
    {/* Google Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3924389430166!2d74.49779301428793!3d15.850403789028037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66f6c0e2c83f%3A0x54532b36efcb25f7!2sHotel%20Eefa!5e0!3m2!1sen!2sin!4v1628345695600!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      className="rounded shadow"
    ></iframe>

    {/* Review Box */}
    <div className="bg-[#4a3c8c] text-white rounded-lg p-8 shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      <div className="text-yellow-500 mb-4">★★★★★</div>
      <p className="text-lg mb-4">"North Indian food and South Indian food are served well in good portion sizes."</p>
      <p className="text-gray-200 font-semibold mb-2">Dr Siddharth Hebbalkar — Decipher Life</p>
      <a href="#" className="text-sm text-white underline hover:text-blue-200">READ MORE</a>
    </div>
  </div>

  {/* View More Button */}
  <div className="text-center mt-10">
    <a href="/meetings-events">
      <button className="bg-[#010f40] text-white px-6 py-2 rounded hover:bg-blue-800 transition">
        VIEW MORE
      </button>
    </a>
  </div>

  {/* Custom CSS for the flip effect */}
  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-preserve-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .flip-container {
      position: relative;
    }
    .flip-card {
      transition: transform 0.7s;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>

{/* Client Testimonials */}
      <section className="relative py-20 text-white text-center bg-center bg-cover " style={{ backgroundImage: "url('/36.jpg')" }}>
        <div className="absolute inset-0   z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">OUR CLIENT'S SAY</h2>
          <hr className="border-t border-white w-20 mx-auto mb-8" />
          <div className="flex items-center justify-center gap-4">
            <button onClick={prevTestimonial} className="text-white text-2xl hover:text-blue-400 transition">
              <FaChevronLeft />
            </button>
            <div className="max-w-2xl">
              <p className="text-lg italic px-4">
                <span className="text-3xl text-blue-400">“</span>
                {text}
                <span className="text-3xl text-blue-400">”</span>
              </p>
              <p className="mt-4 font-medium">{author}</p>
            </div>
            <button onClick={nextTestimonial} className="text-white text-2xl hover:text-blue-400 transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
       <section className="py-16 px-4 bg-gray-100">
  <div className="max-w-[1500px] mx-auto">
    {/* Buttons - NO WRAP, CENTERED */}
    <div className="flex justify-center gap-3 flex-nowrap mb-8 overflow-hidden">
      {destinations.map((place, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base rounded whitespace-nowrap ${
            activeIndex === index
              ? 'bg-white text-[#4a3c8c]'
              : 'bg-[#4a3c8c] text-white hover:bg-[#372d6b]'
          }`}
        >
          <FaThumbtack className="text-sm" />
          {place.name}
        </button>
      ))}
    </div>

    {/* Content */}
    <div className="bg-white p-6 rounded grid md:grid-cols-2 gap-6 items-center">
      <img
        src={destinations[activeIndex].image}
        alt={destinations[activeIndex].name}
        className="w-full rounded"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          {destinations[activeIndex].title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {destinations[activeIndex].description}
        </p>
      </div>
    </div>
  </div>
  
</section>
<Footer/>
   </main>
  );
}
