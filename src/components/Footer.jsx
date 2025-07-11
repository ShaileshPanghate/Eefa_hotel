import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white text-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side: Copyright & Developer */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Hotel Eefa Belgaum Hotel - All Rights Reserved.. Developed by{' '}
          <span className="font-semibold text-white">BizLeap</span>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex gap-4 items-center text-center text-white/80">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-white/40">•</span>
          <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
          <span className="text-white/40">•</span>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <span className="text-white/40">•</span>
          <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
