import React from 'react';
import './Page.css';

const Home = () => (
  <div className="home-flex">
    <div className="left profile-container">
      <img src="/Profile.jpeg" alt="profile" className="profile-img" />
    </div>
    <div className="right">
      <h1>Jenisha. J</h1>
      <h2>Web Developer</h2>
      <h3>MERN Stack Developer skilled in building full-stack web apps using MongoDB, Express, React, and Node.js.
Passionate about creating clean, responsive UIs and robust backend APIs.</h3>
<a href="/JENISHA J_Resume.pdf" download className="download-btn" style={{width:'48%'}}>
  📄 Download My Resume
</a>
    </div>
  </div>
);

export default Home;
