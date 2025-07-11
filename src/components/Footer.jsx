'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-gray-200 text-sm py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Text */}
        <div className="text-center md:text-left">
          © 2025 Hotel Eefa Belgaum Hotel – All Rights Reserved. Developed by{' '}
          <span className="font-semibold text-white">BizLeap</span>
        </div>

        {/* Right Links */}
        <div className="flex space-x-4 text-gray-300">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>·</span>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <span>·</span>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <span>·</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
