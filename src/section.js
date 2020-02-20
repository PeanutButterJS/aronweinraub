import React from "react";

export const Section = ({ children, className, title }) => (
  <div className={`${className} section`}>
    {title && <h3 className="sectionTitle">{title.toUpperCase()}</h3>}
    {children}
  </div>
);
