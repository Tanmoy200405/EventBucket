import React from "react";

const HackathonLanding4 = () => (
  <div className="min-h-screen bg-[#20162A] text-white flex flex-col items-center justify-center relative font-[Poppins]">
    <h2 className="text-3xl font-bold uppercase tracking-wider mb-10 mt-20 z-10">Contact</h2>
    <div className="flex justify-center gap-36 bg-[#532a66]/90 rounded-2xl px-16 py-10 shadow-xl mb-10 z-10 w-full max-w-3xl">
      <div className="flex flex-col items-center">
        <div className="font-bold uppercase text-lg mb-1">DIVAKARAN G, II MCA</div>
        <div className="font-semibold text-sm text-gray-300 uppercase mb-1">Event Organizer</div>
        <div className="text-lg font-semibold tracking-wider">+91 95147 22851</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold uppercase text-lg mb-1">YUVARAJ</div>
        <div className="font-semibold text-sm text-gray-300 uppercase mb-1">Event Management</div>
        <div className="text-lg font-semibold tracking-wider">+91 90254 50445</div>
      </div>
    </div>
    <div className="text-center text-lg font-bold uppercase mb-7 z-10">
      "Fuel your passion, code your vision. Join the hackathon!"
    </div>
    <div className="flex flex-col items-center mb-6 z-10">
      <div className="font-extrabold text-2xl md:text-3xl uppercase text-center">
        MCKV Institute of Engineering
      </div>
      <div className="font-bold text-lg uppercase text-center">
        243 G. T. Road (North), Liluah, Howrah, West Bengal - 711204
      </div>
      <div className="font-medium text-base text-center text-purple-200 mt-1">
        Affiliated to Maulana Abul Kalam Azad University of Technology, West Bengal<br/>
        Phone: 033-26549315/17 | Email: info@mckvie.edu.in
      </div>
    </div>
    <div className="text-center opacity-70 text-lg z-10 mb-6">
      © 2025 MCA Hackathon. All rights reserved.
    </div>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#a020f0_1px,transparent_1px),linear-gradient(#a020f0_1px,transparent_1px)] bg-[size:80px_80px] opacity-25"></div>
      <div className="absolute w-2 h-2 bg-pink-400 rounded-full blur-sm top-1/4 left-1/3 animate-pulse"></div>
      <div className="absolute w-3 h-3 bg-purple-500 rounded-full blur-sm top-2/3 right-1/4 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-purple-300 rounded-full blur-sm bottom-1/4 left-1/2 animate-pulse"></div>
    </div>
  </div>
);

export default HackathonLanding4;
