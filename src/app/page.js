'use client';
import { motion } from 'framer-motion';
import { LazyMotion, domAnimation } from 'framer-motion';
import RoomPriceComparison from '@/components/RoomPriceComparison';
import NearbyDestinations from '@/components/NearbyAttractions';
import Amenities from '@/components/Amenities';
import TestimonialsSlider from '@/components/testimonials';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Optimized Framer Motion load (only 3kB core features)
const MotionImage = motion(Image);

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="bg-white w-full overflow-hidden">
        {/* Hero Section */}
        <HeroSlider />

        {/* Welcome Section */}
        <motion.section 
          initial="hidden"
          animate="show"
          variants={container}
          className="bg-white py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={item} className="text-center md:text-left">
            <h2 className="text-3xl text-gray-600 font-bold mb-2">WELCOME TO HOTEL EEFA</h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ delay: 0.3 }}
              className="h-[2px] bg-black mx-auto md:mx-0 mb-4" 
            />
            <p className="text-xl text-gray-600 mb-6">A Stay to Remember, Every Time</p>
            <p className="text-gray-700 mb-6">
              Hotel Eefa redefines the concept of an economy hotel. Hotel Eefa is a Luxury Hotel in Belgaum
              with intelligent amenities and essential services which speak to the needs of the savvy,
              budget-conscious traveller who seeks quality and affordability.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
            )}
            <MotionImage
              src="/7.jpg"
              alt="Hotel Eefa Building"
              width={600}
              height={400}
              className="w-full rounded shadow-lg"
              onLoadingComplete={() => setImageLoaded(true)}
              variants={item}
            />
          </motion.div>
        </motion.section>

        {/* Coffee Shop Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[100rem] mx-auto grid md:grid-cols-2"
        >
          {/* Text side - Charcoal */}
          <div className="bg-[#1c1c1c] text-white px-6 py-16 flex flex-col justify-center">
            <motion.h2 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring' }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              APPETITE – THE COFFEE SHOP
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '64px' }}
              transition={{ delay: 0.3 }}
              className="h-[2px] bg-white mb-4" 
            />
            <p className="text-gray-300 mb-6">
             Apetite is the best multi cuisine restaurant in the Belgaum city that meets the high culinary standards, and assuring a memorable dining experience. In the hands of honoured chefs, food becomes a presentation of the national and regional culture. This multi-cuisine restaurant blends the best culinary delights with the finest ambience. The comfortable seating arrangement and stylish interiors make your stay as pleasant and relaxing as possible.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/dining">
                <button className="bg-[#010f40] text-white px-4 py-1.5 rounded text-sm hover:bg-blue-800 transition-all w-fit">
                  Read More →
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Image side - Full Cover */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full h-full relative"
          >
            <MotionImage
              src="/image.png"
              alt="Restaurant"
              width={800}
              height={500}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.section>

        {/* Amenities Section */}
        <Amenities/>

        {/* Fitness Center Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-4xl md:text-5xl font-bold text-[#010f40] mb-12 tracking-wide"
            >
              <span className="inline-block border-b-4 border-[#4a3c8c] pb-2">Fitness Center</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                className="space-y-6"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  Being away from home doesn't mean you have to skip your workout. Hotel Eefa Belgaum features one of the city's best gyms.
                </p>
                <p className="font-semibold text-gray-800 text-lg">Fitness Centre – Open 24 Hours</p>
              </motion.div>
              
              {/* Image */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <MotionImage
                  src="/gym-new.jpg"
                  alt="Fitness Center"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pool Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-4xl md:text-5xl font-bold text-[#010f40] mb-12 tracking-wide"
            >
              <span className="inline-block border-b-4 border-[#4a3c8c] pb-2">Swimming Pool</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-lg order-1 md:order-none"
              >
                <MotionImage
                  src="/pool.jpg"
                  alt="Swimming Pool"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              
              {/* Text */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring' }}
                className="space-y-6 order-0 md:order-none"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  Swimming pool at Hotel Eefa Belgaum allows you to stay in shape and relax. With the attractive views through a wall of floor-to-ceiling windows, the poolside area enjoys natural daylight, and provides a peaceful setting with tables and chairs, relaxing lounges, offering swimmers a comfortable place to rest or recline before and after their swim.
                </p>
                <p className="font-semibold text-gray-800 text-lg">Pool Timing – 7:00 AM to 7:00 PM</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Room Price Comparison */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <RoomPriceComparison />
        </motion.section>
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

        {/* Rest of your components... */}
        <TestimonialsSlider/>
        <NearbyDestinations/>
        <Footer />
      </main>
    </LazyMotion>
  );
}