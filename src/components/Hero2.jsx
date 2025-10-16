import React from "react";

const DiscoverEvents = () => {
  return (
    <section className="bg-[#0b1120] text-white py-28 px-6 md:px-20 lg:px-32 xl:px-48 font-sans">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-black uppercase mb-24 text-center tracking-tight">
        DISCOVER UPCOMING EVENTS
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        {/* Left Content */}
        <div className="bg-[#7C5BFF] p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl hover:shadow-[#7C5BFF]/40 transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            Explore the location
          </h3>
          <p className="text-gray-200 leading-relaxed text-lg md:text-xl max-w-2xl">
            Our platform is designed to make it easy for you to find and book
            events that match your interests and preferences. You can browse
            through a range of events and filter results by date, location,
            category, and more.
          </p>

          <button className="mt-10 bg-[#C9F500] text-black font-semibold py-5 px-10 rounded-full flex items-center justify-between w-full md:w-[75%] lg:w-[65%] hover:bg-[#dbff3b] transition-all duration-300 shadow-lg hover:shadow-[#C9F500]/40">
            <span className="text-lg md:text-xl font-bold">
              Explore the location
            </span>
            <span className="bg-[#7C5BFF] text-white rounded-full p-3 ml-4">
              <span className="material-icons text-lg">add</span>
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683121604774-e0d0e555fba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb3VwJTIwb2YlMjBjaGFpcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
            alt="Event chairs"
            className="w-full h-[450px] md:h-[550px] lg:h-[700px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=100"
            alt="Panel discussion"
            className="w-full h-[450px] md:h-[550px] lg:h-[700px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="bg-[#C9F500] text-black p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl hover:shadow-[#C9F500]/50 transition-all duration-300">
          <p className="text-lg md:text-xl leading-relaxed mb-10">
            Simple search function, you can browse through a range of events and
            filter results by date, location, category, and more.
          </p>

          <button className="bg-[#7C5BFF] text-white font-semibold py-5 px-10 rounded-full flex items-center justify-between w-full md:w-[60%] lg:w-[45%] hover:bg-[#916eff] transition-all duration-300 shadow-lg hover:shadow-[#7C5BFF]/40">
            <span className="text-lg md:text-xl font-bold">Explore</span>
            <span className="bg-white text-[#7C5BFF] rounded-full p-3 ml-4">
              <span className="material-icons text-lg">arrow_forward</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEvents;
