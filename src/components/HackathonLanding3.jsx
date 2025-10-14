import React from 'react';

const events = [
  {
    title: 'Word Quest',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description:
      'Sharpen your technical vocabulary and problem-solving skills through a fast-paced word challenge. Participants improve language precision, logical thinking, and quick recall, essential for effective communication in the tech world.',
    time: '11:00 AM to 1:00PM',
    duration: '2 hrs',
    venue: 'Multipurpose Hall',
  },
  {
    title: 'Bug Hunt',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    description:
      'Strengthen your coding and debugging expertise by identifying and fixing real code errors. This event enhances analytical thinking, error diagnosis, and code optimization, making you more efficient in solving complex programming problems.',
    time: '11:00 AM to 1:00PM',
    duration: '2 hrs',
    venue: 'MCA Lab',
  },
  {
    title: 'Frame the Future',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
    description:
      'Showcase your visionary ideas and presentation skills. Participants pitch proposals for future tech solutions and innovations, aiming to impress the panel with creativity and clarity.',
    time: '2:00 PM to 3:30PM',
    duration: '1.5 hrs',
    venue: 'Seminar Hall',
  },
  {
    title: 'Interrogation',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    description:
      'Put your knowledge to the test through rapid-fire technical questioning. This quiz event hones your ability to recall information quickly under pressure in a fun, competitive format.',
    time: '3:45 PM to 5:00PM',
    duration: '1 hr 15 min',
    venue: 'Conference Room',
  },
  {
    title: 'UI/UX Sprint',
    img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80',
    description:
      'Design user interfaces and experiences for real-world problems. Teams collaborate to develop interactive prototypes, judged for usability, innovation, and aesthetics.',
    time: '9:00 AM to 11:00AM',
    duration: '2 hrs',
    venue: 'Design Lab',
  },
  {
    title: 'Rapid Prototyping',
    img: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80',
    description:
      'Transform ideas into functional models in record time. This challenge rewards speed, adaptability, and practical implementation of technology.',
    time: '1:30 PM to 3:00PM',
    duration: '1.5 hrs',
    venue: 'Workshop Block',
  },
  {
    title: 'Tech Treasure Hunt',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description:
      'Solve clues and complete coding challenges to advance through each stage. Teamwork and tech savvy are key to claiming the top spot in this fast-paced quest.',
    time: '4:00 PM to 5:30PM',
    duration: '1.5 hrs',
    venue: 'Campus Grounds',
  },
];

const HackathonLanding3 = () => {
  return (
    <div className="min-h-screen bg-[#20162A] flex flex-col items-center py-12">
      <div className="text-4xl md:text-5xl font-bold text-white tracking-wider relative mb-12">
        <span className="opacity-10 absolute left-0 -top-5 select-none">EVENTS</span>
        <span className="relative z-10 bg-[#20162A] px-4">EVENT</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {events.map((event, idx) => (
          <div key={idx} className="bg-[#2F2143] rounded-2xl p-6 flex flex-col shadow-md relative">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold uppercase text-white tracking-wider bg-[#903d9c] rounded-lg py-2 px-6">
                {event.title}
              </div>
              <div className="bg-[#a16db4] p-2 rounded-lg">
                <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5"><path d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-36 object-cover rounded-lg mb-4"
            />
            <div className="text-[#d3b5e5] mb-3 text-base">
              {event.description}
            </div>
            <ul className="ml-4 text-[#cdc1e5] text-sm list-disc">
              <li>Time – {event.time}</li>
              <li>Duration – {event.duration}</li>
              <li>Venue – {event.venue}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonLanding3;
