import React from "react";
import { Gift } from "lucide-react";

const HackathonLanding2 = () => {
  return (
    <div className="min-h-screen bg-[#120024] text-white flex flex-col items-center justify-center px-6 py-16 font-[Poppins] relative overflow-hidden">
      {/* Background grid & glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#5a1d8c_1px,transparent_1px),linear-gradient(90deg,#5a1d8c_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>
      </div>

      {/* About Event Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[100px] sm:text-[120px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-[#2a0048] opacity-20 select-none">
          ABOUT EVENT
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="uppercase text-sm font-bold tracking-widest text-purple-200 mb-1">
              ABOUT
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
              EVENT
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1675555113068-25d6a83a7c6f?auto=format&fit=crop&w=800&q=80"
            alt="Hackathon Presentation"
            className="rounded-2xl shadow-2xl border border-purple-700"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h4 className="text-sm tracking-widest uppercase text-purple-300 font-semibold">
            HACKATHON 4.0 — WHERE CREATIVITY MEETS TECHNOLOGY!
          </h4>

          <p className="text-gray-300 leading-relaxed text-justify">
            Get ready for the ultimate tech showdown! This thrilling one-day
            event is your chance to unleash your innovation, sharpen your coding
            skills, and showcase your problem-solving power. Whether you're a
            beginner or a pro, Hackathon 4.0 is open to all aspiring innovators
            ready to make their mark.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify">
            Organized by the Department of MCA, this event brings together the
            brightest minds for an intense, fun-filled day of creation,
            collaboration, and competition. From building groundbreaking
            solutions to tackling real-world challenges, your ideas could win
            you exciting tech rewards and the glory of becoming the overall
            champion.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
            EXCITING GIFTS <Gift className="w-5 h-5 text-yellow-300" />
          </button>
        </div>
      </div>

      {/* Bottom Scroll Bar */}
      <div className="mt-16 w-full bg-gradient-to-r from-purple-700 via-purple-900 to-purple-700 py-4 flex flex-wrap justify-center items-center text-sm font-semibold tracking-wider gap-6 text-white uppercase">
        <span>🌟 Innovation</span>
        <span>🌟 Coding</span>
        <span>🌟 Web Development</span>
        <span>🌟 Challenge</span>
        <span>🌟 AI</span>
        <span>🌟 App</span>
      </div>

      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full blur-sm top-1/4 left-1/3 animate-ping"></div>
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full blur-sm top-3/4 right-1/4 animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full blur-sm bottom-1/3 left-1/2 animate-ping"></div>
      </div>
    </div>
  );
};

export default HackathonLanding2;
