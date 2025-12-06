import React, { useState } from "react";

// Data
const SchoolClasses = {
  class10: {
    div: 10,
    Timetable: {
      Mon: {
        first: { teacher: "SharmaA", subject: "Mathematics" },
        second: { teacher: "SharmaB", subject: "Science" },
        third: { teacher: "SinghA", subject: "English" },
        fourth: { teacher: "GuptaA", subject: "History" },
      },
      Tue: {
        first: { teacher: "VermaA", subject: "Mathematics" },
        second: { teacher: "VermaB", subject: "Science" },
        third: { teacher: "SinghB", subject: "English" },
        fourth: { teacher: "GuptaB", subject: "History" },
      },
      Wed: {
        first: { teacher: "SharmaA", subject: "Mathematics" },
        second: { teacher: "VermaB", subject: "Science" },
        third: { teacher: "SinghA", subject: "English" },
        fourth: { teacher: "GuptaB", subject: "History" },
      },
      Thu: {
        first: { teacher: "VermaA", subject: "Mathematics" },
        second: { teacher: "SharmaB", subject: "Science" },
        third: { teacher: "SinghB", subject: "English" },
        fourth: { teacher: "GuptaA", subject: "History" },
      },
      Fri: {
        first: { teacher: "SharmaA", subject: "Mathematics" },
        second: { teacher: "VermaB", subject: "Science" },
        third: { teacher: "SinghA", subject: "English" },
        fourth: { teacher: "GuptaA", subject: "History" },
      },
    },
  },
  class9: {
    div: 9,
    Timetable: {
      Mon: {
        first: { teacher: "VermaA", subject: "Mathematics" },
        second: { teacher: "SharmaB", subject: "Science" },
        third: { teacher: "SinghB", subject: "English" },
        fourth: { teacher: "GuptaB", subject: "History" },
      },
      Tue: {
        first: { teacher: "SharmaA", subject: "Mathematics" },
        second: { teacher: "VermaB", subject: "Science" },
        third: { teacher: "SinghA", subject: "English" },
        fourth: { teacher: "GuptaA", subject: "History" },
      },
    },
  },
  class8: {
    div: 8,
    Timetable: {
      Mon: {
        first: { teacher: "VermaA", subject: "Mathematics" },
        second: { teacher: "VermaB", subject: "Science" },
        third: { teacher: "SinghA", subject: "English" },
        fourth: { teacher: "GuptaA", subject: "History" },
      },
      Tue: {
        first: { teacher: "SharmaA", subject: "Mathematics" },
        second: { teacher: "SharmaB", subject: "Science" },
        third: { teacher: "SinghB", subject: "English" },
        fourth: { teacher: "GuptaB", subject: "History" },
      },
    },
  },
};

const Teacher = {
  SharmaA: { status: "absent", subject: "Mathematics", preferredClass1: 10, preferredClass2: 9 },
  VermaA: { status: "absent", subject: "Mathematics", preferredClass1: 9, preferredClass2: 10 },
  SharmaB: { status: "present", subject: "Science", preferredClass1: 10, preferredClass2: 9 },
  VermaB: { status: "present", subject: "Science", preferredClass1: 10, preferredClass2: 9 },
  SinghA: { status: "present", subject: "English", preferredClass1: 10, preferredClass2: 9 },
  SinghB: { status: "present", subject: "English", preferredClass1: 10, preferredClass2: 9 },
  GuptaA: { status: "absent", subject: "History", preferredClass1: 10, preferredClass2: 9 },
  GuptaB: { status: "present", subject: "History", preferredClass1: 10, preferredClass2: 9 },
};

// Substitution algorithm
function getUpdatedTimetable(classObj, day) {
  const finalTimetable = JSON.parse(JSON.stringify(classObj.Timetable[day]));
  const changes = [];

  for (let period in classObj.Timetable[day]) {
    let assignedTeacher = classObj.Timetable[day][period].teacher;
    let status = Teacher[assignedTeacher]?.status;

    if (status === "absent") {
      let foundSubstitute = false;

      for (let substitute in Teacher) {
        const prefersClass =
          classObj.div === Teacher[substitute].preferredClass1 ||
          classObj.div === Teacher[substitute].preferredClass2;

        if (
          Teacher[substitute].status === "present" &&
          Teacher[assignedTeacher].subject === Teacher[substitute].subject &&
          prefersClass &&
          substitute !== assignedTeacher
        ) {
          finalTimetable[period].teacher = substitute;
          changes.push(
            `${period.toUpperCase()} Period: ${assignedTeacher} (Absent) → ${substitute} (Substitute)`
          );
          foundSubstitute = true;
          break;
        }
      }
      if (!foundSubstitute) {
        finalTimetable[period].teacher = "Sports";
        changes.push(
          `${period.toUpperCase()} Period: ${assignedTeacher} (Absent) → Sports (No Substitute)`
        );
      }
    }
  }

  return { finalTimetable, changes };
}

// App component
export default function TimeTable() {
  const [showFinal, setShowFinal] = useState(false);
  const [loading, setLoading] = useState(false);

  const day = "Mon";
  const selectedClass = SchoolClasses.class10; // change here for other classes
  const initial = selectedClass.Timetable[day];
  const { finalTimetable, changes } = getUpdatedTimetable(selectedClass, day);

  const renderTable = (timetable, markSubstitute = false) => {
    return (
      <table className="border-collapse border border-gray-500 w-full text-center">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Period</th>
            <th className="border border-gray-500 p-2">Subject</th>
            <th className="border border-gray-500 p-2">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(timetable).map((period) => {
            const teacherName = timetable[period].teacher;
            const subject = timetable[period].subject;

            let displayTeacher = teacherName;
            let textColor = "text-green-600 font-semibold";

            if (teacherName === "Sports") {
              textColor = "text-orange-600 font-semibold";
            } else if (Teacher[teacherName]?.status === "absent" && !markSubstitute) {
              displayTeacher += " (Absent)";
              textColor = "text-red-600 font-semibold";
            } else if (
              markSubstitute &&
              teacherName !== selectedClass.Timetable[day][period].teacher
            ) {
              displayTeacher += " (Substitute)";
              textColor = "text-blue-600 font-semibold";
            }

            return (
              <tr key={period}>
                <td className="border border-gray-500 p-2">{period}</td>
                <td className="border border-gray-500 p-2">{subject}</td>
                <td className={`border border-gray-500 p-2 ${textColor}`}>{displayTeacher}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const handleShowFinal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowFinal(true);
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Automatic Timetable Manager</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto">
        This system checks if any teacher is absent and automatically finds a suitable substitute based on subject and preferred classes. The final timetable updates accordingly.
      </p>

      <h2 className="text-xl text-center mt-4">
        Class {selectedClass.div} - Day: {day}
      </h2>

      <div className="shadow-lg rounded-lg p-4 bg-gray-100">
        <h3 className="font-semibold mb-2 text-center">Initial Timetable</h3>
        {renderTable(initial, false)}
      </div>

      {!showFinal && !loading && (
        <button
          onClick={handleShowFinal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 block mx-auto"
        >
          Show Final Timetable
        </button>
      )}

      {loading && (
        <p className="text-center text-lg font-semibold text-blue-500">Loading changes...</p>
      )}

      {showFinal && (
        <>
          <div className="shadow-lg rounded-lg p-4 bg-yellow-100">
            <h3 className="font-semibold mb-2 text-center">Changes Made</h3>
            {changes.length > 0 ? (
              <ul className="list-disc pl-6">
                {changes.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No changes required</p>
            )}
          </div>

          <div className="shadow-lg rounded-lg p-4 bg-green-100">
            <h3 className="font-semibold mb-2 text-center">Final Timetable</h3>
            {renderTable(finalTimetable, true)}
          </div>
        </>
      )}
    </div>
  );
}