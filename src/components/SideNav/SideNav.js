import React from "react";

import "./sidenav.css";

export const SideNav = ({ handleSectionClick }) => {
  return (
    <div className="sidenav">
      <img
        src="https://avatars0.githubusercontent.com/u/65647302?s=460&u=dd2108cc67de2e88621d622a1a50b7994817a227&v=4"
        className="avatar"
        alt="avatar"
      />
      <h2 className="main-name">Aman Kumar</h2>
      <p className="subtitle">"A mysterious coder 😂 "</p>
      <div className="sections-list">
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </p>
      </div>
    </div>
  );
};
