'use client';

const facilities = [
  { icon: '/amenities-01.jpg', title: 'Buffet Service' },
  { icon: '/amenities-02.jpg', title: 'Free wifi 24×7 in room, lobby and restaurant for your convenience' },
  { icon: '/amenities-03.jpg', title: 'Fitness Center' },
  { icon: '/amenities-08.jpg', title: 'Airport Pickup' },
  { icon: '/amenities-05.jpg', title: '2 bottles of packaged drinking water replenished everyday during your stay' },
  { icon: '/amenities-06.jpg', title: 'Business Centre' },
  { icon: '/amenities-07.jpg', title: 'Swimming Pool' },
  { icon: '/amenities-04.jpg', title: 'Tea/Coffee Maker' },
  { icon: '/amenities-09.jpg', title: 'Doctor on Call' },
  { icon: '/amenities-10.jpg', title: 'Premium Wifi' },
  { icon: '/amenities-11.jpg', title: 'Laundry' },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            Facilities
          </h1>
        </div>
      </section>

      <section className="w-full px-4 md:px-20 pt-16 pb-20">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-6">
          FACILITIES WITH COMPLIMENTS
        </h2>
        <div className="w-20 h-[2px] bg-blue-900 mx-auto mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[8px] place-items-center">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative group aspect-square max-w-[170px] w-full overflow-hidden cursor-pointer perspective"
            >
              <div className="w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                  <img
                    src={facility.icon}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex items-center justify-center bg-white text-gray-800 text-center px-2 text-xs font-light rotate-y-180 backface-hidden">
                  {facility.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
