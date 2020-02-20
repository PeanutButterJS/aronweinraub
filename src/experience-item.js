import React from "react";
export const ExperienceItem = ({
  years,
  children,
  company,
  location,
  position
}) => (
  <div className="experienceWrapper">
    <div className="years">
      <span className="yearsText">{years}</span>
    </div>
    <div className="jobDescription">
      <div className="position">{position}</div>
      <div className="company">{company}</div>
      <div className="location">{location}</div>
      <p className="jobDetails">{children}</p>
    </div>
  </div>
);
