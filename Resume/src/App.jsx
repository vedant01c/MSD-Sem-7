import './App.css';

function App() {
  return (
    <div className="resume">
      {/* Header */}
      <header className="header">
        <h1>SNEHAL VIBHUTE</h1>
        <p>+91 7620378726 | Kolhapur, Maharashtra | snehalv727@gmail.com</p>
        <p className="links">
          LinkedIn | GitHub | LeetCode
        </p>
      </header>

      {/* Summary */}
      <section>
        <p>
          Computer Science undergraduate  with hands-on experience
          building full-stack MERN applications, designing REST APIs, and
          integrating AI services.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2>SKILLS</h2>
        <hr />
        <p><b>Languages:</b> C++, Java, Python, JavaScript</p>
        <p><b>Backend:</b> Node.js, Express.js, REST APIs</p>
        <p><b>Frontend:</b> React.js, HTML, CSS</p>
        <p><b>Databases:</b> MongoDB, MySQL, PostgreSQL</p>
        <p><b>Tools:</b> Git, GitHub, Postman, VS Code</p>
      </section>

      {/* Experience */}
      <section>
        <h2>EXPERIENCE</h2>
        <hr />
        <div className="row">
          <h3>Backend Developer – MLSA DYPCET</h3>
          <span>Aug 2025 – Dec 2025</span>
        </div>
        <ul>
          <li>Designed backend architecture for the MLSA chapter website.</li>
          <li>Built REST APIs for club data and events.</li>
          <li>Integrated backend services with the frontend team.</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2>PROJECTS</h2>
        <hr />

        <div className="row">
          <h3>Trackify – Bus Tracking & Scheduling System</h3>
          <span>Feb 2026 – Jun 2026</span>
        </div>
        <ul>
          <li>Built a MERN-based bus tracking platform.</li>
          <li>Developed REST APIs for buses, routes, and schedules.</li>
          <li>Implemented Socket.IO based real-time tracking.</li>
        </ul>

        <div className="row">
          <h3>MockAI – AI Interview Preparation Platform</h3>
          <span>Apr 2026 – Jun 2026</span>
        </div>
        <ul>
          <li>Built an AI-powered interview preparation platform.</li>
          <li>Added real-time feedback and performance reports.</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2>EDUCATION</h2>
        <hr />
        <div className="row">
          <div>
            <h3>DY Patil College of Engineering and Technology</h3>
            <p>B.Tech, Computer Science Engineering</p>
          </div>
          <span>Jun 2023 – Present</span>
        </div>
        <p>CGPA: 9.39</p>
      </section>

      {/* Certifications */}
      <section>
        <h2>CERTIFICATIONS</h2>
        <hr />
        <ul>
          <li>The Complete Full-Stack Web Development Bootcamp – Udemy</li>
          <li>Networking Virtual Internship – Juniper Networks</li>
        </ul>
      </section>

      {/* Leadership */}
      <section>
        <h2>LEADERSHIP & EXTRA-CURRICULAR</h2>
        <hr />
        <ul>
          <li>Technical Team Member, MLSA DYPCET Chapter</li>
          <li>Class Representative (CMC)</li>
          <li>Participated in multiple hackathons including Nirman 2026.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;