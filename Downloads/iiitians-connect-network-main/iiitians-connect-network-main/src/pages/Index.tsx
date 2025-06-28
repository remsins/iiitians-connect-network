import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Github, Mail, Twitter, Linkedin, Users, Trophy, Code, Target, Database, BookOpen, Award, Newspaper } from 'lucide-react';
import Navigation from '../components/Navigation';

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
    ]
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
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo Space */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">IIITians</div>
                  <div className="text-2xl font-light">Network</div>
                  <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Connections 
                  <span className="text-indigo-600"> Across IIITs</span>
                </h1>
                <div className="text-xl text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-600">
                  "IIITians Network is an autonomous student-led community connecting all IIITs across India. We aim to exchange information, boost outreach, and connect students with alumni while promoting the brand 'IIITian'."
                </div>
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
              Founded in January 2020 by passionate students from IIIT Guwahati, IIIT Kota, and IIIT Gwalior, we've grown into a 
              vibrant ecosystem focused on connecting students, building innovative platforms, and hosting exciting hackathons that 
              foster collaboration and learning. Our mission extends to creating valuable tools for JEE aspirants, including our 
              popular Rank Predictor, comprehensive open-source resources, and detailed placement insights that help students make 
              informed decisions about their future. We believe in the power of community and the potential of every IIITian to 
              contribute to something greater than themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Current Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Current Team</h2>
          
          {/* Leadership */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden border-4 border-indigo-600 shadow-md">
                  <img
                    src="\public\Srishti_image.png"
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
                    src="\public\lokesh.png"
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

      {/* Projects & Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-indigo-600 mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
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
