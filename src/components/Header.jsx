'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Rooms & Suite',
    subItems: [
      { name: 'Standard Rooms', path: '/standard' },
      { name: 'Deluxe Room', path: '/deluxe' },
      { name: 'Studio Room', path: '/studio' },
      { name: '2BHK Apartment', path: '/2bhk' },
      { name: 'Presidential Suite', path: '/presidential' },
    ],
  },
  { name: 'Dining', path: '/dining' },
  { name: 'Meetings & Events', path: '/meetings-events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY.current || currentScrollY < 100);
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      {/* Top Bar */}
      <div
        className={`w-full px-4 py-2 flex justify-end gap-6 text-sm transition-all duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}
      >
        <div className="flex items-center gap-2">
          📞 <span>+91 831 2498777</span>
        </div>
        <div className="flex items-center gap-2">
          ✉️ <span>resv@eefabelgaum.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 transition duration-300">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img src="/logo.png" alt="Eefa Logo" className="h-10 transition duration-300" />
          </Link>

          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className={`uppercase pb-[2px] border-b-2 transition-all duration-300 ${
                          isScrolled ? 'text-gray-800' : 'text-white'
                        } ${
                          isActive
                            ? 'font-semibold border-blue-900'
                            : 'border-transparent hover:border-blue-900'
                        }`}
                      >
                        {item.name}
                      </button>
                      <div className="absolute left-0 mt-0 pt-2 bg-white shadow-lg rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto delay-75">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-900 hover:text-white whitespace-nowrap"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`uppercase pb-[2px] border-b-2 transition-all duration-300 ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      } ${
                        isActive
                          ? 'font-semibold border-blue-900'
                          : 'border-transparent hover:border-blue-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className={`${isScrolled ? 'text-black' : 'text-white'}`}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow text-sm">
          {navItems.map((item) => (
            <div key={item.name}>
              {!item.subItems ? (
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 uppercase font-medium ${
                    pathname === item.path ? 'text-blue-800 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <div>
                  <div className="block py-2 uppercase font-medium text-gray-900">{item.name}</div>
                  <div className="pl-4 border-l border-gray-200 ml-2">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-gray-600 hover:text-blue-800"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
