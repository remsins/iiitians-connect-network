// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center overflow-hidden">
      {/* Floating Blob Animation */}
      <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse z-0"></div>

      {/* SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
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

      {/* Form */}
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">IIITians Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@iiit.ac.in"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          New to IIITians Network? <a href="/register" className="text-indigo-600 font-medium hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
