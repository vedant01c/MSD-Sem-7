import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "Arial", border: "1px solid #ccc", borderRadius: "10px" }}>
        
        <h1 style={{ textAlign: "center", color: "#2563eb" }}>
          Snehal Vibhute
        </h1>
        <p style={{ textAlign: "center" }}>
          Final Year CSE Student
        </p>

        <hr />

        <h3>About</h3>
        <p>
          Interested in web development and software engineering.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>

        <h3>Projects</h3>
        <ul>
          <li>Trackify</li>
          <li>MockAI</li>
        </ul>

        <h3>Education</h3>
        <p>B.Tech in Computer Science Engineering</p>

      </div>
    );
  }
}

export default Resume;