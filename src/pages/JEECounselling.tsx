import React from 'react';
import { Calendar, Info, Lightbulb, Link as LinkIcon } from 'lucide-react';

const JEECounselling = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        JEE Counselling Guide
      </h2>

      {/* Section 1: Overview */}
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg mb-12">
        <div className="flex items-start gap-4 mb-4">
          <Info className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Overview</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              The Joint Entrance Examination (JEE) counselling process helps students secure admission into IITs, NITs, IIITs, and GFTIs through centralized platforms like JoSAA and CSAB.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Types of Counselling */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">JoSAA</h4>
          <p className="text-gray-700">
            The Joint Seat Allocation Authority manages counselling for IITs, NITs, IIITs, and GFTIs across India. It conducts 6 rounds of seat allotment.
          </p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">CSAB</h4>
          <p className="text-gray-700">
            The Central Seat Allocation Board conducts special rounds for NIT+, IIITs, and GFTIs after JoSAA, offering additional chances to students.
          </p>
        </div>
      </div>

      {/* Section 3: Timeline */}
      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-lg mb-12">
        <div className="flex items-start gap-4 mb-4">
          <Calendar className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Counselling Timeline</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
              <li>JEE Main/Advanced results announcement</li>
              <li>Registration & choice filling on JoSAA portal</li>
              <li>6 rounds of seat allotment</li>
              <li>Optional CSAB special rounds</li>
              <li>Document verification & admission reporting</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Section 4: Tips */}
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg mb-12">
        <div className="flex items-start gap-4 mb-4">
          <Lightbulb className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Students</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base leading-relaxed">
              <li>Use previous year’s closing ranks to make informed decisions.</li>
              <li>Balance your branch interest with college preferences.</li>
              <li>Always lock your choices before the deadline.</li>
              <li>Keep scanned documents ready for upload.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 5: Useful Links */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <LinkIcon className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Useful Links</h3>
            <ul className="list-disc pl-6 space-y-2 text-blue-600 underline text-base">
              <li>
                <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer">
                  JoSAA Official Website
                </a>
              </li>
              <li>
                <a href="https://csab.nic.in" target="_blank" rel="noopener noreferrer">
                  CSAB Special Rounds
                </a>
              </li>
              <li>
                <a href="https://www.nirfindia.org/2024/EngineeringRanking.html" target="_blank" rel="noopener noreferrer">
                  NIRF Engineering Rankings 2024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JEECounselling;
