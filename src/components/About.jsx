import React, { useState } from "react";
import "../css/About.css";
import CollapsibleSection from "./CollapsibleSection";
import data from "../json/about.json";

function About() {
  const [isOpen, setIsOpen] = useState({});

  const toggle = (index) => {
    setIsOpen({ ...isOpen, [index]: !isOpen[index] });
  };

  return (
    <div className="about-container">
      {data.map((item, index) => (
        <CollapsibleSection
          key={index}
          title={item.title}
          isOpen={isOpen[index]}
          onToggleOpen={() => toggle(index)}
        >
          {item.text}
        </CollapsibleSection>
      ))}
    </div>
  );
}

export default About;
