import React from "react";
import { ArrowUpRight } from "lucide-react";

const TicketSection = () => {
  return (
    <footer className="bg-[#0e1222] text-white px-6 md:px-16 lg:px-24 py-16 font-sans overflow-hidden">
      {/* === MAIN BANNER === */}
      <div className="relative bg-[#161b31] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between px-10 md:px-16 py-16 gap-12">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1920&q=100"
          alt="Audience"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Left Content */}
        <div className="z-10 flex flex-col items-start space-y-8 max-w-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            GET YOUR <br /> FIRST TICKET
          </h1>
          <button className="flex items-center gap-3 bg-[#8b5cf6] hover:bg-[#a78bfa] transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
            GET TICKET
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Content */}
        <div className="z-10 relative max-w-sm text-right">
          <p className="text-gray-300 text-sm leading-relaxed mb-10">
            Our platform is designed to make it easy for you to find and book
            events that match your interests and preferences.
          </p>

          {/* === PRODUCTION LEVEL BADGE === */}
          <div className="relative w-36 h-36 mx-auto md:ml-auto">
            {/* Rotating Circle Text */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text
                fill="black"
                fontSize="6"
                fontWeight="bold"
                letterSpacing="2px"
              >
                <textPath href="#circlePath" startOffset="0%">
                  BOOK A SEAT • BOOK A SEAT • BOOK A SEAT •
                </textPath>
              </text>
            </svg>

            {/* Badge Circle */}
            <div className="absolute inset-0 bg-[#d4ff5f] rounded-full rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(212,255,95,0.4)]">
              <div className="absolute w-12 h-12 bg-[#0e1222] rounded-full flex items-center justify-center shadow-inner">
                <ArrowUpRight className="text-[#d4ff5f] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === FOOTER CONTENT === */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-24 gap-12">
        {/* Logo & Social */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-[#d4ff5f]">EVENT</span>
            <span className="text-[#8b5cf6]"> BUCKET</span>
          </h1>
          <div className="flex gap-6 text-gray-400 text-lg">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start space-y-4 w-full lg:w-auto max-w-md">
          <h2 className="font-semibold text-lg uppercase tracking-wide">
            Subscribe to our newsletter
          </h2>
          <div className="flex items-center bg-[#d4ff5f] rounded-full overflow-hidden w-full lg:w-[400px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-6 py-3 text-black placeholder-gray-700 outline-none"
            />
            <button className="bg-[#8b5cf6] hover:bg-[#a78bfa] px-4 py-3 transition">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="text-gray-400 space-y-3 text-right font-medium">
          <a href="#" className="block hover:text-white transition">
            HOME
          </a>
          <a href="#" className="block hover:text-white transition">
            EVENTS
          </a>
          <a href="#" className="block hover:text-white transition">
            SCHEDULE
          </a>
          <a href="#" className="block hover:text-white transition">
            VENUE
          </a>
        </nav>
      </div>

      {/* === FOOTER BOTTOM === */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-[#1f243d] pt-6 text-gray-500 text-sm">
        <p>© 2025 Beta. All Rights Reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Terms & Agreements
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default TicketSection;
