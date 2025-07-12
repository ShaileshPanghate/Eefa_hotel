'use client';
import { useState } from 'react';
import { SlArrowRight } from "react-icons/sl";

const Amenities = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <section className=" pt-16 bg-white text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">FEATURED AMENITIES</h2>
                <div className="w-12 h-1 bg-blue-600 mx-auto mb-10"></div>

                {/* Amenities Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-68 text-gray-600">
                    <div className="flex flex-col items-center">
                        <img src="/images/01-1.PNG" alt="Business" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/02.PNG" alt="Concierge" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/03.PNG" alt="Restaurant" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/09.png" alt="WiFi" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/06.PNG" alt="Pool" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/07.PNG" alt="Gym Center" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/04.PNG" alt="Laundry" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/08-1.PNG" alt="Room Service" className="w-20 h-18 mb-2" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/10.PNG" alt="AC" className="w-20 h-18 mb-2" />
                    </div>
                </div>

                {/* Button */}
                <div className="mt-10">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded transition"
                    >
                        AMENITIES VIEW ALL
                    </button>
                </div>

                {/* Expanded Amenities */}
                <div
                    className={`mt-10 mx-20 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                        }`}
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left px-6 md:px-0">
                        {/* HOTEL FEATURES */}
                        <div>
                            <h2 className="text-xl text-black font-semibold mb-4">HOTEL FEATURES</h2>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> 58 spacious guest rooms</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary Wi-Fi</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Restaurant and Bar</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Business Centre</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Indoor pool</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> 3 spacious banquet facility</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Free parking</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Fitness centre</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Airport transfer</li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div>
                            <h2 className="text-xl text-black font-semibold mb-4">SERVICES</h2>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Laundry and dry cleaning services</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> 24 hour In-room dining facility</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary scanning service</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary fax service</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary luggage room facility</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Doctor on call</li>
                            </ul>
                        </div>

                        {/* ROOM AMENITIES */}
                        <div>
                            <h2 className="text-xl text-black font-semibold mb-4">ROOM AMENITIES</h2>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary Wi-Fi</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary mini bar</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Tea/coffee maker</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> 2 bottles of packaged drinking water replenished everyday</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Spacious workspace</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Complimentary buffet breakfast</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" />
                                    24 hour In-room dining facility
                                </li>
                            </ul>
                        </div>

                        {/* BATHROOM */}
                        <div>
                            <h2 className="text-xl text-black font-semibold mb-4">BATHROOM</h2>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" />Luxury bathroom toiletries</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" />100% cotton towels</li>
                                <li className="flex items-center">
                                    <SlArrowRight className="text-black font-bold text-lg mr-2" /> Bathrobes on request</li>
                            </ul>
                        </div>
                    </div>

                    {/* Close Button at Bottom Center */}
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
               
            </section >
        </div >
    );
};

export default Amenities;
