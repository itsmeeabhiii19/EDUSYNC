import { useState } from "react";
import { BookOpen, GraduationCap } from "lucide-react";

function Marks() {
    const [marks, setMarks] = useState([
        {
            subject: "Mathematics",
            tests: [
                { name: "Unit 1 Test", score: 85, total: 100 },
                { name: "Unit 2 Beginner Test", score: 72, total: 100 },
                { name: "Unit 3 Test", score: 90, total: 100 },
            ],
        },
        {
            subject: "Science",
            tests: [
                { name: "Unit 1 Test", score: 78, total: 100 },
                { name: "Unit 2 Beginner Test", score: 88, total: 100 },
                { name: "Unit 3 Test", score: 65, total: 100 },
            ],
        },
        {
            subject: "History",
            tests: [
                { name: "Unit 1 Test", score: 92, total: 100 },
                { name: "Unit 2 Beginner Test", score: 80, total: 100 },
            ],
        },
        {
            subject: "English",
            tests: [
                { name: "Unit 1 Test", score: 75, total: 100 },
                { name: "Unit 2 Beginner Test", score: 85, total: 100 },
                { name: "Unit 3 Test", score: 78, total: 100 },
            ],
        },
    ]);

    // Calculate average performance per subject
    const calculateAverage = (tests) => {
        const totalScore = tests.reduce((acc, t) => acc + t.score, 0);
        const totalMarks = tests.reduce((acc, t) => acc + t.total, 0);
        return Math.round((totalScore / totalMarks) * 100);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex flex-col shadow-xl">
                    <h2 className="text-2xl font-extrabold tracking-wide mb-10">EduSmart</h2>
                    <nav className="flex flex-col gap-4 text-sm font-medium">
                        <button className="text-left hover:text-yellow-300 transition">
                             Dashboard
                        </button>
                        <button className="text-left hover:text-yellow-300 transition">
                             Attendance
                        </button>
                        <button className="text-left hover:text-yellow-300 transition">
                             Marks
                        </button>
                        <button className="text-left hover:text-yellow-300 transition">
                             Settings
                        </button>
                    </nav>
                </div>

                {/* Main Section */}
                <div className="flex-1 flex flex-col">
                    {/* Navbar */}
                    <div className="flex justify-between items-center p-4 border-b bg-white/70 backdrop-blur-md shadow-sm">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <GraduationCap className="text-indigo-600" /> Student Marks Overview
                        </h1>
                    </div>

                    {/* Marks Section */}
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {marks.map((subj, idx) => {
                            const avg = calculateAverage(subj.tests);
                            return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-lg border rounded-2xl p-6 shadow-lg transition hover:shadow-2xl"
                >
                  <h2 className="flex items-center gap-2 font-bold text-lg mb-4 text-indigo-700">
                    <BookOpen className="text-purple-600" /> {subj.subject}
                  </h2>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-500 ${
                                                avg >= 75
                                                    ? "bg-green-500"
                                                    : avg >= 50
                                                    ? "bg-yellow-500"
                                                    : "bg-red-500"
                                            }`}
                                            style={{ width: `${avg}%` }}
                                        ></div>
                  <p className="text-sm text-gray-600 mb-4">
                    Average Performance: <span className="font-semibold">{avg}%</span>
                  </p>
                </div>

                                    {/* Test Scores */}
                                    <ul className="space-y-2 text-sm">
                                        {subj.tests.map((test, i) => (
                                            <li
                                                key={i}
                                                className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm"
                                            >
                                                <span>{test.name}</span>
                                                <span
                                                    className={`font-semibold ${
                                                        test.score >= 75
                                                            ? "text-green-600"
                                                            : test.score >= 50
                                                            ? "text-yellow-600"
                                                            : "text-red-600"
                                                    }`}
                                                >
                                                    {test.score}/{test.total}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marks;