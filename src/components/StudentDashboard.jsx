import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, X } from "lucide-react";

function StudentDashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const marksData = [
    { subject: "Math", test: "Unit-1 Test", marks: 68 },
    { subject: "Science", test: "Unit-1 Test", marks: 55 },
    { subject: "English", test: "Mid-Term", marks: 72 },
    { subject: "History", test: "Unit-1 Test", marks: 91 },
  ];

  const studentDetails = {
    name: "Ritik Verma",
    enrollmentNo: "STU2025001",
    class: "10th Grade",
    section: "A",
    parentName: "Rajesh Verma",
    parentContact: "+91 9876543210",
    attended: 120,
    total: 140,
  };

  const timetable = [
    { period: "First", subject: "Mathematics", teacher: "Sports  (No Substitute)" },
    { period: "Second", subject: "Science", teacher: "SharmaB" },
    { period: "Third", subject: "English", teacher: "SinghA" },
    { period: "Fourth", subject: "History", teacher: "GuptaB (Substitute)" },
  ];

  const attendancePercentage = ((studentDetails.attended / studentDetails.total) * 100).toFixed(1);

  return (
    <div className={`min-h-screen flex ${darkMode ? "bg-gray-950 text-white" : "bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900"}`}>
      
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex flex-col shadow-xl">
        <h2 className="text-2xl font-extrabold tracking-wide mb-10">EduSmart</h2>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <button className="text-left hover:text-yellow-300 transition"> Dashboard</button>
          <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/free-period")}> Free Period</button>
          <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/marks")}> Marks</button>
          <button className="text-left hover:text-yellow-300 transition"> Timetable</button>
          <button className="text-left hover:text-yellow-300 transition"> Settings</button>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Navbar */}
        <div className="flex justify-between items-center p-4 border-b bg-white/70 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold">Welcome, {studentDetails.name} </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
        </div>

        {/* Floating Alert */}
        {showAlert && (
          <div className="absolute top-6 right-6 bg-yellow-100 text-yellow-900 px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
            ⚠️ Timetable contains changes
            <button onClick={() => setShowAlert(false)}>
              <X size={16} />
            </button>
          </div>
        )}

        {/* Top Section (Marks + Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          
          {/* Marks Card */}
          <div className="bg-white/80 backdrop-blur-lg border rounded-2xl p-5 shadow-lg transition hover:shadow-2xl">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Marks Card</h2>
            <div className="grid grid-cols-1 gap-3">
              {marksData.map((row, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center rounded-xl p-3 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div>
                    <h3 className="font-semibold">{row.subject}</h3>
                    <p className="text-xs text-gray-500">{row.test}</p>
                  </div>
                  <p className={`text-lg font-extrabold ${row.marks < 70 ? "text-red-600" : "text-green-600"}`}>
                    {row.marks}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Details */}
          <div className="bg-white/80 backdrop-blur-lg border rounded-2xl p-5 shadow-lg transition hover:shadow-2xl">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Student Details</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold"> Name:</span> {studentDetails.name}</li>
              <li><span className="font-semibold"> Enrollment:</span> {studentDetails.enrollmentNo}</li>
              <li><span className="font-semibold"> Class & Section:</span> {studentDetails.class} - {studentDetails.section}</li>
              <li><span className="font-semibold"> Parent:</span> {studentDetails.parentName}</li>
              <li><span className="font-semibold"> Contact:</span> {studentDetails.parentContact}</li>
              <li><span className="font-semibold"> Classes:</span> {studentDetails.attended}/{studentDetails.total}</li>
              <li>
                <span className="font-semibold"> Attendance %:</span>{" "}
                <span className={`${attendancePercentage < 70 ? "text-red-600 font-bold" : "text-green-600 font-bold"}`}>
                  {attendancePercentage}%
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timetable Section */}
        <div className="p-6 flex-1">
          <div className="bg-white/80 backdrop-blur-lg border rounded-2xl p-5 shadow-lg transition hover:shadow-2xl">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Updated Timetable</h2>
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700">
                  <th className="p-3 border">Period</th>
                  <th className="p-3 border">Subject</th>
                  <th className="p-3 border">Teacher</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, idx) => (
                  <tr key={idx} className="text-center hover:bg-gray-50 transition">
                    <td className="p-3 border font-medium">{row.period}</td>
                    <td className="p-3 border">{row.subject}</td>
                    <td className={`p-3 border font-semibold 
                      ${row.teacher.includes("Substitute") ? "text-blue-600" : 
                        row.teacher.includes("Sports") ? "text-orange-600" : 
                        "text-green-600"}`}>
                      {row.teacher}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;
