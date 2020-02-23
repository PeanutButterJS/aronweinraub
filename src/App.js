import React from "react";
import { Experience } from "./exerience";
import "./App.css";
import { ContactInfo } from "./contact-info";
import { Education } from "./education";
import { Skills } from "./skills";
import { Projects } from "./projects";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="icon">AW</div>
        <h1 className="name">ARON WEINRAUB</h1>
        <h2 className="title">FRONTEND ARCHITECT & FULL STACK DEVELOPER</h2>
      </header>
      <main className="main">
        <ContactInfo />
        <div className="wrapper">
          <div className="col1">
            <Education />
            <Skills />
            <Projects />
          </div>
          <div className="col2">
            <Experience />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
