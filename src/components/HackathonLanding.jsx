import React from "react";

const HackathonLanding = () => {
  return (
    <div className="min-h-screen bg-[#0a0018] text-white flex flex-col items-center justify-center relative overflow-hidden font-[Poppins]">
      {/* Background grid and glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(#a020f0_1px,transparent_1px),linear-gradient(90deg,#a020f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      {/* Header (No Logo) */}
      <div className="text-center z-10 mt-6">
        <h2 className="text-lg font-bold tracking-wide">
          MCKV INSTITUTE OF ENGINEERING
        </h2>
        <p className="text-sm text-gray-300 mt-1">Liluah, Howrah, West Bengal, 711204</p>
      </div>

      {/* Main Title */}
      <div className="text-center z-10 mt-10">
        <p className="uppercase text-sm tracking-widest text-gray-300">
          Where Creativity Meets Technology!
        </p>
        <h1 className="text-[70px] sm:text-[90px] font-extrabold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] tracking-wider">
          HACKATHON
        </h1>
        <h2 className="text-[80px] sm:text-[100px] font-extrabold bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] leading-none">
          4.0
        </h2>
        <p className="text-lg mt-3 font-semibold tracking-wide text-purple-200">
          ORGANIZED BY DEPARTMENT OF CSE
        </p>
      </div>

      {/* Details Section */}
      <div className="z-10 mt-10 bg-[#1b0036]/60 px-8 py-4 rounded-2xl shadow-lg border border-purple-500/40 backdrop-blur-sm text-center">
        <p className="font-semibold text-lg text-white">
          TIME: <span className="text-purple-300">10:00 AM</span>
        </p>
        <p className="font-semibold text-lg text-white">
          DATE: <span className="text-purple-300">23 AUGUST 2025</span>
        </p>
        <p className="font-semibold text-lg text-white mb-4">
          VENUE: <span className="text-purple-300">243 GT Road (North), Liluah, Howrah, West Bengal - 711204</span>
        </p>

        {/* Apply Now Button */}
        <button
          className="mt-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg shadow-[0_0_20px_rgba(255,0,255,0.4)] 
          hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] hover:scale-105 transition-all duration-300"
        >
          APPLY NOW
        </button>
      </div>

      {/* Decorative glowing dots */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-2 h-2 bg-pink-400 rounded-full blur-sm top-1/4 left-1/3 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-purple-500 rounded-full blur-sm top-2/3 right-1/4 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full blur-sm bottom-1/4 left-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HackathonLanding;
