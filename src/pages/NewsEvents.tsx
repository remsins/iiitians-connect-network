import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation"; // Optional, add if needed

const eventData = [
  {
    title: "Hack IIITG 2025 - IIIT Guwahati",
    description:
      "A 36-hour nationwide hackathon hosted by IIIT Guwahati with 50+ teams participating in problem-solving, hardware, and AI.",
    fullDetails:
      "Hack IIITG 2025 brought together some of the brightest minds from IIITs across India. It featured AI model-building contests, hardware hacking, blockchain tracks, and night-long brainstorming sessions. Mentors from top firms guided students, and cash prizes were awarded to winners. Teams collaborated on impactful solutions.",
    image: "/hackathon.jpeg",
  },
  {
    title: "TEDx @ IIIT Hyderabad",
    description:
      "Inspiring stories and talks hosted at IIIT Hyderabad, featuring alumni, researchers, and innovators across India.",
    fullDetails:
      "TEDx at IIIT-H was a fusion of innovation and inspiration. From AI ethics to quantum computing to art-tech convergence, each speaker brought a unique lens to technology and society. The event was student-organized and professionally recorded for broader reach.",
    image: "/tedx.jpg",
  },
  {
    title: "TechFest 2025 - IIIT Bangalore",
    description:
      "A 3-day annual technical fest celebrating innovation with coding contests, AI workshops, and keynote speakers from top tech companies.",
    fullDetails:
      "TechFest 2025 included 20+ events including hackathons, ML/AI workshops, keynote talks by CTOs of major startups, and a hands-on drone programming challenge. It saw participation from 40+ colleges and had collaborative zones sponsored by industry leaders.",
    image: "/techfest.jpg",
  },
  {
    title: "IIITians Collaboration Meet 2025",
    description:
      "First ever inter-IIIT collaboration meet where students from 15 IIITs participated in project showcases and team building workshops.",
    fullDetails:
      "The meet fostered inter-campus bonding through ideation sprints, showcase booths, alumni fireside chats, and design jams. Cultural exchange and cross-campus hack groups emerged. Plans for IIIT-wide open-source projects were also discussed.",
    image: "/collaboration.jpg",
  },
];

const NewsEvents = () => {
  const [activeEvent, setActiveEvent] = useState<null | typeof eventData[0]>(null);

  useEffect(() => {
    if (activeEvent) {
      document.body.classList.add("body-lock-scroll");
    } else {
      document.body.classList.remove("body-lock-scroll");
    }

    return () => {
      document.body.classList.remove("body-lock-scroll");
    };
  }, [activeEvent]);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-32 pb-16 text-gray-700 relative">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#020817] mb-6 text-center">
        News & Events Across IIITs
      </h1>

      <p className="text-lg md:text-xl mb-10 text-center leading-relaxed text-gray-600 max-w-3xl mx-auto">
        Showcasing major happenings, achievements, and celebrations across IIITs in India — from tech fests and innovation summits to student-led initiatives and inter-campus collaborations.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => setActiveEvent(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  setActiveEvent(event);
                }}
                className="text-indigo-600 font-medium hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeEvent && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={() => setActiveEvent(null)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-lg relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {activeEvent.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {activeEvent.fullDetails}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEvents;
