import React from "react";

export const Section = ({ children, className, title }) => (
  <div className={`${className} section`}>
    {title && <h3 className="sectionTitle">{title}</h3>}
    {children}
  </div>
);
