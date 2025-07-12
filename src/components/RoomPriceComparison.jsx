"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const roomData = {
  Standard: {
    image: "/1.jpg",
    prices: [
      { platform: "MakeMyTrip", price: "₹3,862", link: "https://www.makemytrip.com/hotels/hotel_eefa-details-belgaum.html" },
      { platform: "Goibibo", price: "₹3,780", link: "https://www.goibibo.com/hotels/eefa-hotel-in-belgaum-7362672571061818250" },
      { platform: "Agoda", price: "₹4,118", link: "https://www.agoda.com/hotel-eefa_5/hotel/belgaum-in.html" },
      { platform: "Direct Booking", price: "₹3,118", direct: true, link: "https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20directly%20at%20Hotel%20Eefa." },
    ],
  },
  Studio: {
    image: "/std1.jpg",
    prices: [
      { platform: "MakeMyTrip", price: "₹4,036", link: "https://www.makemytrip.com/hotels/hotel_eefa-details-belgaum.html" },
      { platform: "Goibibo", price: "₹3,884", link: "https://www.goibibo.com/hotels/eefa-hotel-in-belgaum-7362672571061818250" },
      { platform: "Agoda", price: "₹4,118", link: "https://www.agoda.com/hotel-eefa_5/hotel/belgaum-in.html" },
      { platform: "Direct Booking", price: "₹3,418", direct: true, link: "https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20directly%20at%20Hotel%20Eefa." },
    ],
  },
  Deluxe: {
    image: "/dxr1.jpg",
    prices: [
      { platform: "MakeMyTrip", price: "₹4,493", link: "https://www.makemytrip.com/hotels/hotel_eefa-details-belgaum.html" },
      { platform: "Goibibo", price: "₹3,899", link: "https://www.goibibo.com/hotels/eefa-hotel-in-belgaum-7362672571061818250" },
      { platform: "Agoda", price: "₹4,480", link: "https://www.agoda.com/hotel-eefa_5/hotel/belgaum-in.html" },
      { platform: "Direct Booking", price: "₹3,680", direct: true, link: "https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20directly%20at%20Hotel%20Eefa." },
    ],
  },
  Presidential: {
    image: "/prdential-suit.jpg",
    prices: [
      { platform: "MakeMyTrip", price: "₹6,120", link: "https://www.makemytrip.com/hotels/hotel_eefa-details-belgaum.html" },
      { platform: "Goibibo", price: "₹6,259", link: "https://www.goibibo.com/hotels/eefa-hotel-in-belgaum-7362672571061818250" },
      { platform: "Agoda", price: "₹6,369", link: "https://www.agoda.com/hotel-eefa_5/hotel/belgaum-in.html" },
      { platform: "Direct Booking", price: "₹5,369", direct: true, link: "https://wa.me/918312498777?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20directly%20at%20Hotel%20Eefa." },
    ],
  },
};

const platformStyles = {
  "MakeMyTrip": {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    btn: "bg-red-500 hover:bg-red-600 text-white"
  },
  "Goibibo": {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    btn: "bg-yellow-500 hover:bg-yellow-600 text-white"
  },
  "Agoda": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    btn: "bg-blue-500 hover:bg-blue-600 text-white"
  },
  "Direct Booking": {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    btn: "bg-green-500 hover:bg-green-600 text-white"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RoomPriceComparison() {
  const [activeRoom, setActiveRoom] = useState("Deluxe");
  const currentRoom = roomData[activeRoom];

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-sm"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Compare Room Prices
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-8"
        >
          Find the best deals across booking platforms
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {Object.keys(roomData).map((room) => (
          <motion.button
            key={room}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-md font-medium transition-all ${
              room === activeRoom
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveRoom(room)}
          >
            {room}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Room Image */}
        <motion.div 
          variants={itemVariants}
          className="rounded-lg overflow-hidden border border-gray-200 shadow-sm"
        >
          <Image
            src={currentRoom.image}
            alt={`${activeRoom} Room`}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        {/* Price List */}
        <motion.div 
          variants={containerVariants}
          className="space-y-4"
        >
          {currentRoom.prices.map(({ platform, price, direct, link }, index) => {
            const style = platformStyles[platform] || platformStyles["Direct Booking"];
            return (
              <motion.div
                key={platform}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between p-4 rounded-lg border ${style.bg} ${style.border} hover:shadow-sm transition-all`}
              >
                <div className="flex items-center">
                  <span className={`font-medium ${style.text}`}>{platform}</span>
                  {direct && <FaCheck className="ml-2 text-green-500" />}
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-lg ${style.text}`}>{price}</span>
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${style.btn} transition-colors`}
                  >
                    {direct ? "Book Direct" : "Book Now"}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-500 mt-8 text-center"
      >
        * Prices shown are for reference only. Direct booking offers exclusive benefits.
      </motion.p>
    </motion.section>
  );
}