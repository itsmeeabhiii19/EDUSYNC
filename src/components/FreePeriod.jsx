import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize AI client
const ai = new GoogleGenerativeAI("AIzaSyCIYFt_S2WTFGZ9ppml9y4KJH3ZEeoMdTM");

export default function FreePeriod() {
  const [subject, setSubject] = useState("Maths");
  const [classLevel, setClassLevel] = useState("10");
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState("");

  const generateAssignment = async () => {
    setLoading(true);
    setAssignment("");

    try {
      const prompt = `Generate a practice assignment for a class ${classLevel} student 
      who is weak in ${subject}. The assignment should have 5 questions only.`;

      const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setAssignment(response.text());
    } catch (error) {
      console.error("Error generating assignment:", error);
      setAssignment("❌ Failed to generate assignment. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>📘 Free Period Assignment Generator</h2>

      <label>Choose Subject:</label>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="Maths">Maths</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
        <option value="History">History</option>
      </select>

      <br /><br />

      <label>Class Level:</label>
      <input
        type="number"
        value={classLevel}
        onChange={(e) => setClassLevel(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <br /><br />

      <button onClick={generateAssignment} disabled={loading}>
        {loading ? "Generating..." : "Generate Assignment"}
      </button>

      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {assignment && (
          <>
            <h3>Generated Assignment:</h3>
            <p>{assignment}</p>
          </>
        )}
      </div>
    </div>
  );
}