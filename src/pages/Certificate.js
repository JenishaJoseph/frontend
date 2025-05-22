import React from 'react';
import './Page.css';

const Certificate = () => {
  const certificates = [
    {
      title: "Frontend Internship - Digitally Agile Pulse",
      file: "/Internship Certificate.pdf",
    },
    {
      title: "MERN Stack Internship - Scope India",
      file: "",
    },
    {
      title: "COPA Certification - Govt ITI",
      file: "/NCVTCTSCertificateAnnual_R220833013961.pdf",
    },
  ];

  return (
    <div className="certificate-page">
      <h2 className="cert-heading">My Certificates</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <iframe
              src={cert.file}
              title={cert.title}
              width="100%"
              height="250"
              className="pdf-frame"
            ></iframe>
            <h3>{cert.title}</h3>
            <a href={cert.file} download className="download-btn">
              📄 Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
