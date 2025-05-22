import React, { useEffect } from 'react';
import './Page.css';

const About = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline li');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 200); // stagger animation
    });
  }, []);

  return (
    <div className="page-content fade-in">
      <h2 className="section-heading">About Me</h2>
      <p>
        Hello, I'm a <strong>MERN Stack Developer</strong> with a background in <strong>B.A. English</strong> and a
        <strong> COPA certification from ITI</strong>. As a fresher, I'm passionate about building responsive web
        applications using MongoDB, Express, React, and Node.js. I enjoy solving problems and learning new
        technologies. In my free time, I love <strong>solving Rubik’s cubes, gardening, and crafting</strong>, which
        fuel my creativity and focus.
      </p>

      <h3>My Learning Journey</h3>
      <ul className="timeline">
        <li><span className="year">2017</span> — SSLC at <strong>Amala Convent Girls HSS, Thuckalay</strong> (90%)</li>
        <li><span className="year">2019</span> — HSS at <strong>Amala Convent Girls HSS, Thuckalay</strong> (64%)</li>
        <li><span className="year">2022</span> — <strong>B.A. English</strong> at <strong>St. John's College, Ammandivilai</strong></li>
        <li><span className="year">2023</span> — <strong>COPA</strong> at <strong>Govt. ITI, Konam</strong></li>
        <li><span className="year">2023</span> — Internship at <strong>Digitally Agile Pulse</strong></li>
        <li><span className="year">2024</span> — XML Developer at <strong>Eloiacs Sofwa Pvt. Ltd, Nagercoil</strong></li>
        <li><span className="year">2024-25</span> — MERN Internship at <strong>Scope India</strong></li>
        <li><span className="year">2025</span> — OJT at <strong>Suffix E Solutions, Thiruvananthapuram.</strong></li>
      </ul>
    </div>
  );
};

export default About;
