import React from 'react';
import './Page.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="typewriter-heading">Get In Touch</h1>
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 9633306306</p>
          <p><strong>✉️ Email:</strong> jenishajoseph03@gmail.com</p>
          {/* <p>
            <strong>🔗 Indeed:</strong>{' '}
            <a href="https://www.indeed.com/yourprofile" target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p> */}
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <label>Full Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Phone (Optional)</label>
          <input type="tel" placeholder="Your phone number" />

          <label>Message</label>
          <textarea rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
