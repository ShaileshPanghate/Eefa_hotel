"use client";

import { useState } from "react";
import { FaThumbtack } from "react-icons/fa";

const destinations = [
  {
    name: "SUVARNA SOUDHA",
    image: "/suvarna.png",
    title: "Suvarna Soudha (10 Kms)",
    description:
      "The Suvarna Vidhana Soudha has been so named to commemorate the Golden Jubilee of Karnataka’s formation day. The building is a four floored structure with a total built-up area of 60,398 sq.m. and consists of an Assembly hall that seats 300, a Council hall for 100 members, a 450-seat Central Hall, 38 ministerial chambers and 14 meeting halls. It also has conference halls, a banquet hall, secretariats for both the houses of legislature, meeting halls and office accommodations.",
  },
  {
    name: "GOKAK FALLS",
    image: "/gokak.png",
    title: "Gokak Falls (65 Kms)",
    description:
      "Gokak falls Located on the Ghataprabha River in Belgaum district of Karnataka, India, Gokak falls is known for its truly flawless rejuvenating beauty. Known among the locals as Belgaum’s mini Niagara falls and Northern Mysore Falls, this nature’s mesmerising beauty really comes alive during the peak of the monsoon. The unique feature of this waterfall is the horseshoe shape of the cliff from which the water falls. The view from the top of the waterfall is pretty awesome to feel the sprinkle of water to your face by the wind. Walking down the hanging bridge across the river is a breathtaking experience, particularly when the river is flowing to its capacity. The interesting features of this place are the temples and monuments from the chalukya era that are found on the banks of the river.",
  },
  {
    name: "HIDKAL DAM",
    image: "/hidkal.png",
    title: "Hidkal Dam (50 Kms)",
    description:
      "Constructed across Ghataprabha River, Hidkal Dam is situated at Hukkeri in Belgaum district in the state of Karnataka, India.Also known as Raja Lakhamgowda Dam, this dam site is important because many fossils have been revealed in nearby areas. The dam site draws not only tourists but also archaeologists to Belgaum.",
  },
  {
    name: "FATIMA CHURCH",
    image: "/fatima.png",
    title: "Fatima Church (4 Kms)",
    description:
      "The Cathedral of Our Lady of Fatima, Belgaum, the Mother Church of the Diocese of Belgaum, was consecrated and inaugurated in 1957, to cater to the spiritual needs of the Catholics residing in the area. Since its inception, the Parish has grown immensely in all spheres.",
  },
  {
    name: "KAPILESHWAR TEMPLE",
    image: "/kapileshwar.png",
    title: "Kapileshwar Temple (5 Kms)",
    description:
      "Kapileshwar temple is one of the oldest temples in Belgaum. It is a temple of Lord Shiva, known around Belgaum as Dakshin Kashi or Kashi of South. The idol of Shiva or Shivalinga is believed to be self originated, called SWAYAMBHU in the local language, and hence is very sacred for devotees. The origins of the temple date back to late 12th century as per the stone inscription found in Kamalbasti.",
  },
  {
    name: "PANT BALEKUNDRI SAMADHI",
    image: "/pant.png",
    title: "Pant Balekundri Samadhi (8 Kms)",
    description:
      "Balekundri is a small village, about 12 KMS from main Belgaum main bus stand. It is only 4 KMS away from Belgaum airport. The village became well known around the place in the late 19th century, because of its illustrious son, Dattopant, who later became famous saint, Pant Maharaj.",
  },
];

export default function NearbyDestinations() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-[1300px] mx-auto">
        {/* Scrollable Buttons Row */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-none">
          {destinations.map((place, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base rounded whitespace-nowrap shrink-0 transition-all ${
                activeIndex === index
                  ? "bg-white text-[#4a3c8c] border border-[#4a3c8c]"
                  : "bg-[#4a3c8c] text-white hover:bg-[#372d6b]"
              }`}
            >
              <FaThumbtack className="text-sm" />
              {place.name}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white p-4 md:p-6 rounded grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <img
            src={destinations[activeIndex].image}
            alt={destinations[activeIndex].name}
            className="w-full h-auto rounded object-cover aspect-[3/2]"
          />

          {/* Text */}
          <div className="text-center md:text-left">
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
  );
}
