

import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-16 h-16 text-yellow-400 mx-auto">
            <path fill="#FACC15" d="M24 4l18 8v8c0 10.493-7.5 20.5-18 24C13.5 40.5 6 30.493 6 20V12l18-8z"/>
            <path fill="#fff" d="M24 8.618l-14 6.222V20c0 8.837 6.25 17.25 14 20.764C31.75 37.25 38 28.837 38 20v-5.16l-14-6.222z"/>
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">EduSync</h1>
        <p className="text-lg text-white/90 mb-10 text-center max-w-xl">
         Smart Attendance & Productivity
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Student Portal Card */}
        <div className="bg-white/10 rounded-2xl p-6 w-64 flex flex-col items-center shadow-lg border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2"/></svg>
          <h2 className="text-xl font-bold text-white mb-1">Student Portal</h2>
          <p className="text-white/80 text-sm text-center">Access grades, attendance, and learning materials.</p>
          <Link to="/stu-dashboard" className="mt-4 px-4 py-2 bg-white/10 shadow-lg border border-white/20 text-white font-semibold rounded-lg transition">Go to Student Portal</Link>
        </div>
        {/* Teacher's Desk Card */}
        <div className="bg-white/10 rounded-2xl p-6 w-64 flex flex-col items-center shadow-lg border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" strokeWidth="2"/></svg>
          <h2 className="text-xl font-bold text-white mb-1">Teacher's Desk</h2>
          <p className="text-white/80 text-sm text-center">Manage classes, assignments, and student progress.</p>
          <Link to="/teacher-dashboard" className="mt-4 px-4 py-2 bg-white/10 shadow-lg border border-white/20 text-white font-semibold rounded-lg transition">Go to Teacher's Desk</Link>
        </div>
        {/* Academic Calendar Card */}
        <div className="bg-white/10 rounded-2xl p-6 w-64 flex flex-col items-center shadow-lg border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/><path d="M8 2v4M16 2v4" strokeWidth="2"/></svg>
          <h2 className="text-xl font-bold text-white mb-1">Academic Calendar</h2>
          <p className="text-white/80 text-sm text-center">View schedules, events, and important deadlines.</p>
          <Link to="/timetable" className="mt-4 px-4 py-2 bg-white/10 shadow-lg border border-white/20 text-white font-semibold rounded-lg transition">Go to TimeTable</Link>
        </div>
        {/* Admin Panel Card */}
        <div className="bg-white/10 rounded-2xl p-6 w-64 flex flex-col items-center shadow-lg border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" strokeWidth="2"/><rect x="16" y="16" width="6" height="6" rx="1" strokeWidth="2"/></svg>
          <h2 className="text-xl font-bold text-white mb-1">Admin Panel</h2>
          <p className="text-white/80 text-sm text-center">Oversee school operations and system settings.</p>
          <Link to="/admin-panel" className="mt-4 px-4 py-2 bg-white/10 shadow-lg border border-white/20  text-white font-semibold rounded-lg transition">Go to Admin Panel</Link>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4">
        <a href="#about" className="text-white/80 hover:text-white transition">About Us</a>
        <span className="text-white/40">|</span>
        <a href="#support" className="text-white/80 hover:text-white transition">Contact Support</a>
        <span className="text-white/40">|</span>
  <Link to="/login" className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-semibold px-6 py-2 rounded-lg shadow transition">Log In</Link>
      </div>
    </div>
  );
};

export default IntroPage;
