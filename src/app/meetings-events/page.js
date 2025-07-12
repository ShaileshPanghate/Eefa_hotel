import Image from 'next/image';
import Footer from '@/components/Footer';

export default function MeetingsEventsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative w-full h-[30vh] overflow-hidden z-0">
        <img
          src="/slide-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5 bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-light text-center">
            BANQUETS IN BELGAUM
          </h1>
        </div>
      </section>

      {/* Section Title */}
      <section className="bg-white pt-12 pb-14 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-light uppercase tracking-wider text-gray-800">
            Banquets, Meetings and Events
          </h2>
          <div className="h-[2px] w-10 bg-blue-900 mx-auto my-3" />
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Our spacious and exquisite Banquet and conference Halls are ideal for hosting parties,
            conferences, seminars, training programmes, weddings, social gatherings and other celebrations.
            They are the finest venue featuring the ultra-modern conference and banqueting facilities
            that are designed as per the choice and demand of an occasion.

            Jade is a well-equipped Conference Hall with elegant architecture that can accommodate up to 100 guests.
            Opal offers beautiful spaces with latest video conferencing facility that can comfortably accommodate
            up to 35 guests in Theatre Style. There is also an extensive Banquet Lawn with alluring atmosphere
            for large banquets that holds up to 350 people amidst lush greenery.
          </p>
        </div>
      </section>

      {/* Reusable Section Blocks */}
      <SectionBlock
        title="JADE"
        description="Jade is a well-equipped conference hall with elegant architecture that is ideal for hosting parties,
        social gatherings, events, seminars and conferences elegantly. Lavishly designed, Jade forsees every
        request and seamlessly caters to every need with utmost care. Complemented by latest trends and
        facilities, Jade can accommodate up to 100 guests providing a rich ambience for celebrating small
        events with grand lifestyle."
        image="/jade0.jpg"
        imageRight={true}
      />

      <SectionBlock
        title="OPAL"
        description="Opal offers beautiful spaces with latest video conferencing facility that can comfortably accommodate up to 40 guests in theatre style. Featuring the ultra-modern conference and banqueting facilities, the atmosphere is quite charming and is designed as per the choice and demand of an occasion. Opal is an excellent choice for different business meetings, irrespective of their agenda."
        image="/opal0.jpg"
        imageRight={false}
      />

      <SectionBlock
        title="MEADOWS(LAWN)"
        description="The Hotel Eefa houses an extensive beautiful banquet lawn with alluring atmosphere for large banquets that holds up to 350 people amidst lush greenery. Flexibility is our catchword. Our flexible outdoors enhances the beauty of any occasion under the startlit open sky – be it a gala reception or a casual luncheon."
        image="/meadows0.jpg"
        imageRight={true}
      />
      <div className="h-12 md:h-16 bg-white" />


      {/* Footer */}
      <Footer />
    </main>
  );
}

/** Reusable Section Component */
function SectionBlock({ title, description, image, imageRight = true }) {
  return (
    <section className="bg-white">
      <div className={`w-full max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row ${imageRight ? '' : 'md:flex-row-reverse'}`}>
        {/* Text */}
        <div className="md:w-1/2 bg-[#1a1a1a] text-white p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-light uppercase mb-2">{title}</h3>
          <div className="h-1 w-10 bg-blue-800 mb-4" />
          <p className="text-sm leading-7 text-gray-300">{description}</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 h-[350px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
