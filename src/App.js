import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import "./App.css";
import { Section } from "./section";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="icon">AW</div>
        <h1 className="name">Aron Weinraub</h1>
        <h2 className="title">Frontend Architect & Full Stack Developer</h2>
      </header>
      <main className="main">
        <div className="wrapper">
          <div className="col1">
            <Section className="contactInfo">
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
                  href="https://www.linkedin.com/in/aron-weinraub"
                  className="contactInfoText"
                >
                  linkedin.com/in/aron-weinraub
                </a>
              </div>
            </Section>
            <Section title="Education">
              <div className="eduLine1">Bachelor of Science (B.Sc.)</div>
              <div className="eduLine2">Computer Science</div>
              <div className="eduLine3">
                Lev Academic Center (JCT) (Jerusalem College of Technology)
              </div>
              <div className="eduLine4">2008-2013</div>
            </Section>
          </div>
          <div className="col2">
            {" "}
            <Section title="Experience">todo</Section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
