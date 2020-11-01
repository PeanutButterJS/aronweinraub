import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { Section } from "./section";
import gitShabis from "./assets/gitshabis.png";
import cingulant from "./assets/cingulantsoftware.png";
import pp from "./assets/pp.png";

export const Projects = () => (
  <Section title="Projects">
    <>
      <div className="project">
        <span className="projectTitle">
          <img
            className="cingulantImage"
            alt="Cingulant Software"
            src={cingulant}
          />{" "}
          Cingulant Software
        </span>

        <a
          className="projectLink"
          href="https://cingulantsoftware.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          cingulantsoftware.now.sh/
        </a>
        <span>A work in progress for a development consulting company.</span>
      </div>
      <div className="project">
        <span className="projectTitle">
          <img className="pinskysPalletsImage" alt="Pinskys Pallets" src={pp} />{" "}
          Pinskys Pallets
        </span>

        <a
          className="projectLink"
          href="https://pinskyspallets.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pinskyspallets.now.sh/
        </a>
        <span>A work in progress for a carpenters site.</span>
      </div>
      <div className="project">
        <span className="projectTitle">
          <img className="gitShabisImage" alt="git shabis" src={gitShabis} />{" "}
          Git-Shabis
        </span>

        <a
          className="projectLink"
          href="https://www.npmjs.com/package/git-shabis"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.npmjs.com/package/git-shabis
        </a>
        <span>
          A plugin for using git commands in Yiddish <FaRegSmile />
        </span>
      </div>
    </>
  </Section>
);
