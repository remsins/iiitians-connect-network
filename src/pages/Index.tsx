import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, ChevronUp, Github, Mail, Twitter, Linkedin, Trophy, Database, Award, Newspaper
} from 'lucide-react';
import Navigation from '../components/Navigation';
import JEECounselling from './JEECounselling'; // adjust the path if needed
import NewsAndEvents from './NewsEvents'; // adjust path if needed


import BlobLogo from '../components/BlobLogo';
const Index = () => {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const toggleTeam = (teamName: string) => {
    setExpandedTeam(expandedTeam === teamName ? null : teamName);
  };

  const teamData = {
    design: [
      { name: "Apeksha Yadav", role: "UI/UX Designer", institute: "IIIT Surat" },
      { name: "Jayesh Kawale", role: "Graphic Designer", institute: "IIIT Pune" },
      { name: "Piyush Pal", role: "Graphic Designer", institute: "IIIT Nagpur" },
      { name: "Sankalp Joshi", role: "Graphic Designer", institute: "IIIT Allahabad" },
      { name: "Sohan Maity", role: "Graphic Designer", institute: "IIIT Kurnool" },
    ],
    content: [
      { name: "Mahak Gupta", role: "Content Writer", institute: "IIIT Kota" },
      { name: "Nilesh Sahay", role: "Content Writer", institute: "IIIT Kalyani" },
      { name: "Tanya Mishra", role: "Content Writer", institute: "IIIT Kalyani" },
      { name: "Ritik Gupta", role: "Content Writer", institute: "IIIT Lucknow" },
    ],
    social: [
      { name: "Ankur Singh", role: "Instagram Manager", institute: "IIIT Kota" },
      { name: "Ansh Malhotra", role: "Outreach Coordinator", institute: "IIIT Kota" },
      { name: "Reem", role: "Social Media Coordinator", institute: "IIIT Pune" },
      { name: "Varun Raj", role: "Social Media Coordinator", institute: "IIIT Ranchi" },
    ],
  };

  const projects = [
    {
      title: "Centralized Placement Data",
      description: "Comprehensive database of placement statistics across all IIITs",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "News & Events Across IIITs",
      description: "Stay updated with latest happenings, achievements, and events from all IIITs",
      icon: <Newspaper className="w-6 h-6" />
    },
    {
      title: "Alumni Achievements",
      description: "Celebrating success stories and accomplishments of IIIT graduates",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Competitions & Hackathons",
      description: "Regular coding competitions and innovation challenges",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const collaborators = [
    "IIIT Guwahati", "IIIT Kota", "IIIT Gwalior", "IIIT Allahabad",
    "IIIT Bangalore", "IIIT Delhi", "IIIT Vadodara", "IIIT Hyderabad"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white pt-32 pb-28">
        <div className="absolute top-16 left-0 w-full overflow-hidden leading-[0]">

    <svg
      className="relative block w-[calc(140%+1.3px)] h-[120px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
        70.36-5.37,136.33-33.31,206.8-37.5,
        73.84-4.36,147.54,16.88,218.2,35.26,
        69.27,18,138.3,24.88,209.4,13.08,
        36.15-6,69.85-17.84,104.45-29.34,
        84.64-27.79,208.15-67.08,295.15-.32V0Z"
        opacity=".25"
        fill="#4F46E5"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,
        99.41,111.27,165,111,224.58,91.58,
        255.73,81.43,284.67,65.51,314.25,51.78,
        355.17,32.78,398.98,5.78,445.08,2.11,
        481.34-.74,515.98,11.53,543.68,33.67,
        575.45,59.06,606,95.67,647.31,106.67,
        687.75,117.46,728.66,99.98,766.44,82.39,
        804.22,64.8,846.66,48.66,888.42,44.61,
        948.15,38.76,1001.7,67.49,1057.32,83.45,
        1087.52,92.11,1116.32,89.62,1144.41,76.95,
        1166.84,66.06,1192.41,50.02,1205.06,27.71V0Z"
        opacity=".5"
        fill="#4F46E5"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57,
        518.83,34.93,560.06,22.45,603.44,16.11,
        662.44,7.48,715.92,28.35,769,51.51,
        827.93,77.22,886,95.24,951.2,90,
        1037.73,83,1123.66,44.29,1200,5.19V0Z"
        fill="#4F46E5"
      />
    </svg>
  </div>



        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 mt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo */}
            <div className="relative w-[520px] h-[520px] hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 z-0 animate-float flex items-center justify-center">
                <div className="relative w-[540px] h-[540px] flex items-center justify-center">
                  <BlobLogo />
                  <img
                    src="IIITians-Network-Logo-Dark.png"
                    alt="IIITians Network Logo"
                    className="absolute w-[560px] h-[560px] object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Empowering Connections <br />
                <span className="text-indigo-600">Across IIITs</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                IIITians Network is an autonomous student-led community connecting all IIITs across India. We aim to exchange information,
                boost outreach, and connect students with alumni while promoting the brand <strong>'IIITian'</strong>.
              </p>
              <div className="mt-6">
                <a href="#about" className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300">
                  Explore the Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
 {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Us</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              IIITians Network is an autonomous student community that spans across all Indian Institutes of Information Technology. 
              Founded in January 2020 by passionate students from IIIT Kota, IIIT Guwahati, and IIIT Gwalior, we've grown into a 
              vibrant ecosystem focused on connecting students, building innovative platforms, and hosting exciting hackathons that 
              foster collaboration and learning. Our mission extends to creating valuable tools for JEE aspirants, including our 
              popular Rank Predictor, comprehensive open-source resources, and detailed placement insights that help students make 
              informed decisions about their future. We believe in the power of community and the potential of every IIITian to 
              contribute to something greater than themselves.
            </p>
          </div>
        </div>
      </section>

<section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => {
              let route = "#";
              if (project.title === "Centralized Placement Data") route = "/placements";
              else if (project.title === "News & Events Across IIITs") route = "/news-events";

              return (
                <Link
                  to={route}
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
                >
                  <div className="text-indigo-600 mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </Link>
              );
            })}


          </div>
        </div>
      </section>

      {/* Culture & Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Culture & Events</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              The IIIT ecosystem thrives on innovation, collaboration, and academic excellence. Our institutions foster an 
              environment where students engage in cutting-edge research, participate in diverse club activities, and build 
              lifelong connections. From technical symposiums to cultural festivals, from coding competitions to research 
              conferences, IIITs provide a holistic educational experience that shapes future technologists and leaders. 
              Our network amplifies this culture by creating inter-IIIT collaborations, organizing pan-IIIT events, and 
              ensuring that the spirit of innovation and community continues to grow across all our institutes.
            </p>
          </div>
        </div>
      </section>

{/* Team Section */}
 {/* Current Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet the Team</h2>
          
          {/* Leadership */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden border-4 border-indigo-600 shadow-md">
                  <img
                    src="Srishti_image.png"
                    alt="Srishti Singh"
                    className="w-full h-full object-cover object-top translate-y-3 scale-[1.37]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">Srishti Singh</h3>
                <p className="text-indigo-600 font-medium">President</p>
                <p className="text-gray-600">IIIT Kota</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden border-4 border-indigo-600 shadow-md">
                  <img
                    src="lokesh.png"
                    alt="Lokesh Meena"
                    className="w-full h-full object-cover object-top -translate-y- scale-[1.07]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lokesh Meena</h3>
                <p className="text-indigo-600 font-medium">Vice President</p>
                <p className="text-gray-600">IIIT Kalyani</p>
              </div>
            </div>
          </div>

          {/* Team Leads */}
          <div className="space-y-6">
            {[
              { name: "Design Lead", key: "design", lead: "Meet Parmar", institute: "IIIT Surat" },
              { name: "Content Lead", key: "content", lead: "Pragati Thawkar", institute: "IIIT Pune" },
              { name: "Social Lead", key: "social", lead: "Utkarsh Pratap", institute: "IIIT Ranchi" }
            ].map((team) => (
              <div key={team.key} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleTeam(team.key)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{team.name}</h4>
                        <p className="text-gray-600">{team.lead} • {team.institute}</p>
                      </div>
                    </div>
                    {expandedTeam === team.key ? 
                      <ChevronUp className="w-6 h-6 text-gray-400" /> : 
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    }
                  </div>
                </div>
                
                {expandedTeam === team.key && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      {teamData[team.key as keyof typeof teamData].map((member, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <h5 className="font-semibold text-gray-900">{member.name}</h5>
                          <p className="text-sm text-indigo-600">{member.role}</p>
                          <p className="text-sm text-gray-600">{member.institute}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Past Collaborators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Past Collaborators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborators.map((institute, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {institute.split(' ')[1]?.[0] || 'I'}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{institute}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* JEE Counselling Section */}
        <section id="jee-counselling" className="py-20 bg-white">
          <JEECounselling />
        </section>


      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">IIITians Network</h3>
              <p className="text-gray-400">Connecting IIITs across India</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:contact@iiitiansnetwork.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/iiitiansnetwork" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/iiitiansnetwork" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/iiitiansnetwork" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IIITians Network. Built with ❤️ by students, for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
