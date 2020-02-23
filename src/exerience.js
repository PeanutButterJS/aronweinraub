import React from "react";
import { Section } from "./section";
import { ExperienceItem } from "./experience-item";

export const Experience = () => (
  <Section title="Experience">
    <ExperienceItem
      years="2016-present"
      company="Rapaport – RapNet"
      location="Jerusalem, Israel"
      position="Frontend Architect & Senior Full Stack Developer"
    >
      Development of Rapaport Technologies’ flagship diamond trading platform
      “RapNet”. Overseeing ReactJs/Redux frontend stack as well as development
      of a .Net Core microservice architecture on the backend. Lead the rewrite
      of AngularJs SPA into ReactJs resulting in substantial performance boosts
      and a smoother UX.
    </ExperienceItem>
    <ExperienceItem
      years="2014-2016"
      company="Matrix - Israel Ministry of Finance"
      location="Jerusalem, Israel"
      position="Software/Web Developer"
    >
      Development of SPA using C#/ASP.Net/MVC/Web API/AngularJS and SQL-Server
      for The Department of Holocaust Survivors of the Ministry of Finance.
      Worked in a team of 6 developers transforming an old Visual-Basic 6 data
      management system with an Oracle database into an AngularJS Single Page
      Application with an SQL-Server database. Transferring the data plus the
      creation of many data interfaces was done using SSIS.
    </ExperienceItem>
    <ExperienceItem
      years="2011-2014"
      company="Cingulant Software"
      location="Jerusalem, Israel"
      position="Software/Web Developer"
    >
      <div>
        <div className="expirienceSubTitle">Research Success Data Systems</div>
        Development and maintenance of data management systems using
        C#/ASP.Net/MVC and SQL-Server for non-profit organizations including:
        <ul>
          <li>United Synagogue Youth (USY) </li>
          <li> Bnei Akiva </li>
          <li> The Jerusalem Bird Observatory </li>
          <li> The Conservative Yeshiva </li>
          <li>
            Development and maintenance of salary survey using C#/ASP.Net and
            SQL-Server for The Jewish Federation of North America (JFNA).
          </li>
        </ul>
      </div>
      <div>
        <div className="expirienceSubTitle">Solve Global</div>
        Development and maintenance of ASP.Net/MVC web application, using
        SQL-Server and Linq to SQL which collects user data and generates
        reports which are used to study workplace related injuries.
      </div>
      <div>
        <div className="expirienceSubTitle">Koren Publishers Jerusalem</div>
        Contracted to help with the development of the Koren Talmud Ipad App by
        reformatting printed version of the Koren Talmud to the app version.
        Included extensive MySql and XML manipulation using C# and Winforms.
      </div>
      <div>
        <div className="expirienceSubTitle">Davka Corp.</div>Lead developer of
        Yom L’Yom the Jewish Calendar Maker, a C#/Winforms calendar/appointment
        maker.
      </div>
    </ExperienceItem>
  </Section>
);
