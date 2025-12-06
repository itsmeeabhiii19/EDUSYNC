// src/LoginPage.jsx

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Assuming you have react-icons installed

const LoginPage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100 items-center justify-center font-poppins">
      <div className="flex w-full max-w-5xl h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between p-10 bg-gradient-to-br from-[#6c63ff] to-[#8a2be2] text-white">
          <div>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-4xl" />
              <h1 className="text-3xl font-bold">EduSmart</h1>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">AI-Powered Smart Education Management System</h2>
              <p className="mt-2 text-sm leading-relaxed">
                Revolutionizing education with intelligent automation, comprehensive analytics, and seamless management for schools and colleges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-15 p-5 rounded-lg shadow-lg border border-white/20 bg-white/10">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">⚙️</span>
                <h3 className="font-medium text-lg">Smart Attendance</h3>
              </div>
              <p className="text-xs opacity-80">QR code, biometric, and face recognition</p>
            </div>
            <div className="bg-white/10 bg-opacity-15 p-5 rounded-lg shadow-lg border border-white/20">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">📊</span>
                <h3 className="font-medium text-lg">Analytics Dashboard</h3>
              </div>
              <p className="text-xs opacity-80">Real-time insights and performance tracking</p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg shadow-lg border border-white/20 bg-white/10">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">🗓️</span>
                <h3 className="font-medium text-lg">Dynamic Scheduling</h3>
              </div>
              <p className="text-xs opacity-80">Intelligent timetable adjustments</p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg shadow-lg border border-white/20 bg-white/10">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">🧠</span>
                <h3 className="font-medium text-lg">Personalized Learning</h3>
              </div>
              <p className="text-xs opacity-80">AI-powered tasks and revision modules</p>
            </div>
          </div>

          <div>
            <p className="text-xs mb-1">Trusted by educational institutions worldwide</p>
            <div className="flex items-center text-sm font-semibold">
              <span className="mr-4">🎓 10,000+ Students</span>
              <span>🏫 500+ Schools</span>
            </div>
          </div>
        </div>

        {/* Right Panel (Login Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm text-center">
            <div className="w-16 h-16 mx-auto bg-violet-100 rounded-full flex items-center justify-center mb-6">
              <FaGraduationCap className="text-4xl text-[#6c63ff]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-1 mb-8">Sign in to your EduSmart account</p>

            <form>
              <div className="text-left mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Select Your Option</option>
                  <option>Student</option>
                  <option>Teacher</option>
                  <option>Administration</option>
                  <option>Parent</option>
                </select>
              </div>

              <div className="text-left mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="text-left mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full p-3 text-white bg-[#6c63ff] rounded-lg font-semibold hover:bg-[#5a52d3] transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <a href="#" className="block text-[#6c63ff] hover:underline">
                Forgot your password?
              </a>
              <p className="mt-2">
                New to EduSmart?{' '}
                <a href="#" className="text-[#6c63ff] hover:underline">
                  Contact your administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;