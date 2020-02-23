import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import React from "react";

export const ContactInfo = () => (
  <div className="contactInfo">
    <div className="contactInfoRow">
      <FaEnvelope />
      <span className="contactInfoText">aeweinraub@gmail.com</span>
    </div>
    <div className="contactInfoRow">
      <FaPhone />
      <span className="contactInfoText">0583246041</span>
    </div>
    <div className="contactInfoRow">
      <FaLinkedin />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/aron-weinraub"
        className="contactInfoText"
      >
        linkedin.com/in/aron-weinraub
      </a>
    </div>
  </div>
);
