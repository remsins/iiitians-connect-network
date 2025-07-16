import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

const hackathonData = [
  {
    title: "StatusCode 2 - IIIT Kalyani",
    description:
      "An intense 24-hour coding sprint by IIIT Kalyani with top-tier problems and AI/ML tracks.",
    fullDetails:
      "StatusCode 2 witnessed participation from 200+ students across 15 IIITs. The event focused on innovation in deep tech, real-world application building, and problem-solving. Teams worked overnight on AI models, full-stack apps, and data pipelines. Judges from leading startups evaluated the solutions. Winners received internships and cash prizes.",
    image: "/statuscode2.jpeg",
    registerLink: "https://hackathon.iiitkalyani.ac.in/",
  },
  {
    title: "CodeRelay 2025 - IIIT Pune",
    description:
      "A unique relay-style hackathon promoting collaborative development and rapid-fire coding rounds.",
    fullDetails:
      "CodeRelay at IIIT Pune brought a refreshing twist to standard hackathons by rotating team members every few hours. It challenged coordination and adaptability while emphasizing clean code handoff. The final demos included real-time apps and blockchain-powered ledgers.",
    image: "/coderelay.webp",
    registerLink: "https://example.com/register-coderelay",
  },
  {
    title: "InnoHack 2025 - IIIT Lucknow",
    description:
      "Innovative problem-solving for real-world challenges ranging from healthtech to agrotech.",
    fullDetails:
      "InnoHack 2025 saw students tackle real-world problem statements provided by local startups and NGOs. The 36-hour hackathon emphasized practical impact, with teams developing mobile solutions for rural health diagnostics and smart irrigation systems using IoT.",
    image: "/innohack.jpg",
    registerLink: "https://example.com/register-innohack",
  },
];

const Hackathons = () => {
  const [activeHackathon, setActiveHackathon] = useState<null | typeof hackathonData[0]>(null);

  useEffect(() => {
    if (activeHackathon) {
      document.body.classList.add("body-lock-scroll");
    } else {
      document.body.classList.remove("body-lock-scroll");
    }

    return () => {
      document.body.classList.remove("body-lock-scroll");
    };
  }, [activeHackathon]);

  return (
    <div className="relative">
      <Navigation />

      <div className="mx-auto max-w-6xl px-4 pt-32 pb-16 text-gray-700 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#020817] mb-6 text-center">
          Competitions & Hackathons
        </h1>

        <p className="text-lg md:text-xl mb-10 text-center leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Explore the most exciting hackathons and competitive programming events hosted across IIITs, featuring AI challenges, overnight sprints, and collaborative tech showcases.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {hackathonData.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setActiveHackathon(event)}
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
                <div className="flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHackathon(event);
                    }}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View Details
                  </button>
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeHackathon && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={() => setActiveHackathon(null)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-lg relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveHackathon(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <img
              src={activeHackathon.image}
              alt={activeHackathon.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {activeHackathon.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {activeHackathon.fullDetails}
              </p>
              <a
                href={activeHackathon.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hackathons;
