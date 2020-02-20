import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { ExperienceItem } from "./experience-item";
import "./App.css";
import { Section } from "./section";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="icon">AW</div>
        <h1 className="name">ARON WEINRAUB</h1>
        <h2 className="title">FRONTEND ARCHITECT & FULL STACK DEVELOPER</h2>
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
                  rel="noopener noreferrer"
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
            <Section title="Skills">
              <div className="skillsWrapper">
                <div className="skill">JAVASCRIPT</div>
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">REACT</div>
                <div className="skill">REDUX</div>
                <div className="skill">C#</div>
                <div className="skill">ASP.NET / MVC / .NET CORE / WEB API</div>
                <div className="skill">MICROSERVICES / MICROFRONTENDS</div>
                <div className="skill">SQL SERVER</div>
                <div className="skill">MYSQL</div>
                <div className="skill">POSTGRESQL</div>
              </div>
            </Section>

            <Section title="Projects">todo</Section>
          </div>
          <div className="col2">
            <Section title="Experience">
              <ExperienceItem
                years="2016-present"
                company="Rapaport – RapNet"
                location="Jerusalem, Israel"
                position="Cheif Frontend Architect & Senior Full Stack Developer"
              >
                Development of Rapaport Technologies’ flagship diamond trading
                platform “RapNet”. Overseeing ReactJs/Redux frontend stack as
                well as development of a .Net Core microservice architecture on
                the backend. Lead the rewrite of AngularJs SPA into ReactJs
                resulting in substantial performance boosts and a smoother UX.
              </ExperienceItem>
              <ExperienceItem
                years="2014-2016"
                company="Matrix - Israel Ministry of Finance"
                location="Jerusalem, Israel"
                position="Software/Web Developer"
              >
                Development of SPA using C#/ASP.Net/MVC/Web API/AngularJS and
                SQL-Server for The Department of Holocaust Survivors of the
                Ministry of Finance. Worked in a team of 6 developers
                transforming an old Visual-Basic 6 data management system with
                an Oracle database into an AngularJS Single Page Application
                with an SQL-Server database. Transferring the data plus the
                creation of many data interfaces was done using SSIS.
              </ExperienceItem>
              <ExperienceItem
                years="2011-2014"
                company="Cingulant Software"
                location="Jerusalem, Israel"
                position="Software/Web Developer"
              >
                Research Success Data Systems- Development and maintenance of
                data management systems using C#/ASP.Net/MVC and SQL-Server for
                non-profit organizations including:  United Synagogue Youth
                (USY)  Bnei Akiva  The Jerusalem Bird Observatory  The
                Conservative Yeshiva  Development and maintenance of salary
                survey using C#/ASP.Net and SQL-Server for The Jewish Federation
                of North America (JFNA). Solve Global- Development and
                maintenance of ASP.Net/MVC web application, using SQL-Server and
                Linq to SQL which collects user data and generates reports which
                are used to study workplace related injuries. Koren Publishers
                Jerusalem- Contracted to help with the development of the Koren
                Talmud Ipad App by reformatting printed version of the Koren
                Talmud to the app version. Included extensive MySql and XML
                manipulation using C# and Winforms. Davka Corp.- Lead developer
                of Yom L’Yom the Jewish Calendar Maker, a C#/Winforms
                calendar/appointment maker.
              </ExperienceItem>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
