import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Nithin M G</h1>
        <p className="role">Full Stack Developer | MERN Stack Enthusiast</p>
      </header>

      <nav className="navigation">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <ul className="skill-list">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>Firebase</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <h3>BlogBase</h3>
          <p>A full-stack blogging platform with JWT auth and cloud storage integration.</p>
        </div>
        <div className="project-card">
          <h3>DevJobs</h3>
          <p>Job posting app using MERN stack with role-based access and resume uploads.</p>
        </div>
        <div className="project-card">
          <h3>TaskSphere</h3>
          <p>Team task management board inspired by Trello with drag & drop functionality.</p>
        </div>
      </section>

      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <ul className="certification-list">
          <li>🔹 Meta Front-End Developer - Coursera</li>
          <li>🔹 JavaScript Algorithms and Data Structures - freeCodeCamp</li>
          <li>🔹 Python for Everybody - University of Michigan (Coursera)</li>
          <li>🔹 MongoDB Essentials - MongoDB University</li>
        </ul>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>📞 <strong>Phone:</strong> <a href="tel:+919008785169">9008785169</a></p>
        <p>📧 <strong>Email:</strong> <a href="mailto:nithinmg29@gmail.com">nithinmg29@gmail.com</a></p>
        <p>🌐 <strong>GitHub:</strong> <a href="https://github.com/Nihalgowdaa" target="_blank" rel="noreferrer">Nithin's GitHub</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Nithin M G. Built with 💙 using React</p>
      </footer>
    </div>
  );
}

export default App;
