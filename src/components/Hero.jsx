import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="flex justify-between items-center py-8">
          <div className="text-2xl font-bold">
            EVENT <span className="text-[#C9F500]">X</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {["HOME", "EVENTS", "SCHEDULE"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-wider font-medium hover:text-[#C9F500] transition-colors"
              >
                {item}
              </a>
            ))}
            <Link
  to="/landing"
  className="text-sm tracking-wider font-medium hover:text-[#C9F500] transition-colors"
>
  SPONSORS
</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-sm font-medium hover:text-[#C9F500] transition-colors"
            >
              CONTACT US
            </a>
            <button className="bg-[#C9F500] p-2 rounded-full hover:scale-105 transition-transform">
              <span className="material-icons text-[#0b1120]">email</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-16 items-start mt-12">
          {/* Left Text + Sponsors */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase">
              BOOK <span className="text-[#C9F500]"> </span> AND EXPLORE
            </h1>
            <h1 className="text-5xl md:text-7xl font-black uppercase mt-2 flex items-center">
              UPCOMING EVENTS{" "}
              <span className="material-icons text-6xl ml-3">arrow_forward</span>
            </h1>

            {/* Sponsors */}
            <div className="mt-16">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
                SPONSOR
              </h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-gray-300">
                <span className="text-xl font-bold">indeed</span>
                <span className="text-xl font-bold">STYone</span>
                <span className="text-xl font-bold">
                  OPTIMUS <span className="text-[#C9F500] text-sm">®</span>
                </span>
                <span className="text-xl font-bold">LASERLITE</span>
              </div>
            </div>

            {/* Rotating Logo */}
            <div className="mt-12 flex justify-center">
              <div className="w-40 h-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo1nOW8R0LYcOh-wNydrBXwkQUvg1bYBWOvF9HzmAK9caiUNElqOFzcayTK08xLVPfaxHiz7fiam6wr6y9sze7aHdpl5GBz1-xb5PE-QhjdmubE6sjM6P9YS-NakrJfvY5eEzxDV44IBmhQDJtUj6VBX_k3ZBLbMfHFnOZKakqG4qUTC3aDl5RVoCDfsPKlz3D0D3--RxR8dRfPGg48RBVcU3749DPni_imXqVUq_7j8Zdyky_cC5RHFSnGqU7kIwx_c4DzzAmW7M"
                  alt="Seat booking logo"
                  className="w-full h-full animate-spin-slow drop-shadow-[0_0_20px_rgba(201,245,0,0.3)]"
                />
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-[#11182e] p-8 rounded-xl shadow-xl">
            <p className="text-gray-400 mb-8 leading-relaxed">
              Welcome to EventX, the ultimate destination for discovering and booking upcoming events.
            </p>

            {/* Timer */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex space-x-6">
                {[
                  { label: "HOURS", value: "23" },
                  { label: "MINUTE", value: "04" },
                  { label: "SECOND", value: "47" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-4xl font-bold text-[#C9F500] drop-shadow-[0_0_10px_#C9F500]">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400 tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-white p-2 rounded-md inline-block shadow-md">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHo2gpWWKF_Kbiu9OLrmvQuk5f55XwslDR8MwTiogeS8GpI_qAlnYVQcnFXF1qwVRNbuRUoP-TJsTas4GRP9fA3ZVB8UbCTZWAq4dx0aYdevZMLDjxv3snSFNOSfxDHjU2BZiML1wGQKd7soO9Js1L6Rf3XssoUxw8p1svLCDN3_mkUJhV8cqrcGfXULOT3PyrjLARmJqhyUU1U8fYrQN1tIF4tWhrAYlwfHJSmqtGmOqIKzTygncT3_R0Q90XDO2fnxnaIZCJmcg"
                    alt="QR"
                    className="w-16 h-16"
                  />
                </div>
                <a
                  href="#"
                  className="text-xs text-[#C9F500] mt-2 block font-semibold"
                >
                  GET YOURS!
                </a>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-[#C9F500] text-black font-bold py-4 px-6 rounded-lg flex justify-between items-center hover:bg-[#d8ff33] transition-all shadow-lg">
              <span>Book Your Seat for EVENTX</span>
              <span className="bg-black text-[#C9F500] p-2 rounded-full">
                <span className="material-icons text-lg">arrow_forward</span>
              </span>
            </button>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="grid md:grid-cols-2 gap-20 items-center py-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Decide to join the event
            </h2>
            <p className="text-gray-400 mt-4">
              Once you've found an event you're interested in, you can view all the details and information you need, including the event date,
              time, location, lineup, speakers, and agenda.
            </p>
            <button className="mt-8 bg-transparent border border-[#C9F500] text-white font-bold py-4 px-8 rounded-lg flex items-center space-x-3 hover:bg-[#C9F500] hover:text-black transition-all">
              <span>GET TICKET</span>
              <span className="material-icons text-lg">arrow_forward</span>
            </button>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="ticket bg-[#C9F500] text-black p-6 rounded-xl w-64 shadow-2xl relative rotate-[-30deg]">
              <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0b1120] rounded-full"></div>
              <div className="absolute bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#0b1120] rounded-full"></div>
              <div className="border-dashed border-l-2 border-black h-full absolute left-1/3"></div>
              <div className="flex justify-between items-center relative">
                <div className="flex-grow pl-4">
                  <h3 className="font-black text-2xl tracking-widest -rotate-90 origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                    TICKET
                  </h3>
                </div>
                <div className="flex flex-col space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
