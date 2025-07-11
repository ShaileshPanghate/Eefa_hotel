'use client';
import { useState } from 'react';
import { Pin } from 'lucide-react';
import Image from 'next/image';

const attractions = [
  {
    name: 'Suvarna Soudha',
    distance: '10 Kms',
    image: '/images/suvarna-soudha.jpg',
    description: `The Suvarna Vidhana Soudha has been so named to commemorate the Golden Jubilee of Karnataka’s formation day. The building is a four floored structure with a total built-up area of 60,398 sq.m. and consists of an Assembly hall that seats 300, a Council hall for 100 members, a 450-seat Central Hall, 38 ministerial chambers and 14 meeting halls. It also has conference halls, a banquet hall, secretariats for both the houses of legislature, meeting halls and office accommodations.`,
  },
  {
    name: 'Gokak Falls',
    distance: '65 Kms',
    image: '/images/gokak.jpg',
    description:
      'Gokak Falls is a waterfall on the Ghataprabha River in Belagavi district. It resembles Niagara Falls in its shape and is a major tourist attraction.',
  },
  {
    name: 'Hidkal Dam',
    distance: '50 Kms',
    image: '/images/hidkal.jpg',
    description:
      'Hidkal Dam, also known as Raja Lakhamagouda Dam, is constructed across the Ghataprabha River and offers scenic views and boating.',
  },
  {
    name: 'Fatima Church',
    distance: '3 Kms',
    image: '/images/fatima-church.jpg',
    description:
      'Our Lady of Fatima Church is a beautiful structure known for its peaceful ambiance and cultural importance in Belgaum.',
  },
  {
    name: 'Kapileshwar Temple',
    distance: '2 Kms',
    image: '/images/kapileshwar.jpg',
    description:
      'Kapileshwar Temple is one of the oldest temples in Belgaum and attracts a large number of devotees during festivals.',
  },
  {
    name: 'Pant Balekundri Samadhi',
    distance: '4 Kms',
    image: '/images/pant-samadhi.jpg',
    description:
      'This Samadhi is dedicated to the great saint Pant Maharaj of Balekundri and is a spiritual destination for many.',
  },
];

export default function NearbyAttractions() {
  const [selected, setSelected] = useState(0);
  const attraction = attractions[selected];

  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {attractions.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setSelected(index)}
            className={`flex items-center gap-2 px-4 py-2 border rounded ${
              selected === index ? 'bg-[#4f4082] text-white' : 'bg-white text-gray-800'
            }`}
          >
            <Pin size={16} />
            {item.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full">
          <Image
            src={attraction.image}
            alt={attraction.name}
            width={500}
            height={300}
            className="rounded shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            {attraction.name} <span className="text-gray-500 text-lg">({attraction.distance})</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">{attraction.description}</p>
        </div>
      </div>
    </section>
  );
}
