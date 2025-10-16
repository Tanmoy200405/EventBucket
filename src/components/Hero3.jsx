import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "ESTHER HOWARD",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=100", // HD example
    },
    {
      name: "CODY FISHER",
      role: "Brand Designer",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328d3d62?auto=format&fit=crop&w=1000&q=100",
    },
    {
      name: "DIANNE RUSSELL",
      role: "Graphic Designer",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1000&q=100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e1222] text-white flex flex-col items-center justify-center px-8 py-24">
      {/* Heading Section */}
      <div className="max-w-4xl text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          OUR SPEAKERS
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Our platform is designed to make it easy for you to find and book
          events that match your interests and preferences.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-6 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-[400px] h-[400px] bg-[#171b2e] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <div>
              <h3
                className={`font-semibold text-2xl ${
                  index === 2 ? "text-[#d4ff5f]" : "text-[#f5f5f5]"
                }`}
              >
                {speaker.name}
              </h3>
              <p className="text-gray-400 text-lg mt-2">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-6 mt-20">
        <button className="w-14 h-14 bg-[#171b2e] flex items-center justify-center rounded-full hover:bg-[#1f2440] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-14 h-14 bg-[#d4ff5f] flex items-center justify-center rounded-full hover:bg-[#e1ff8a] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#0e1222]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Speakers;
